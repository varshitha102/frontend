import axios, { AxiosError, type AxiosResponse } from 'axios';
import type { Inquiry, InquiryFormData, User, Stats, PublicStats, ApiResponse } from '@/types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiResponse<unknown>>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (username: string, password: string): Promise<{ token: string; user: User }> => {
    const response = await api.post<ApiResponse<{ token: string; user: User }>>('/auth/login', {
      username,
      password
    });
    return response.data.data;
  },

  getMe: async (): Promise<User> => {
    const response = await api.get<ApiResponse<User>>('/auth/me');
    return response.data.data;
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<void> => {
    await api.put<ApiResponse<void>>('/auth/password', { currentPassword, newPassword });
  }
};

// Inquiry API
export const inquiryAPI = {
  create: async (data: InquiryFormData): Promise<Inquiry> => {
    const response = await api.post<ApiResponse<Inquiry>>('/inquiries', data);
    return response.data.data;
  },

  getAll: async (params?: {
    status?: string;
    search?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: string;
  }): Promise<{ inquiries: Inquiry[]; pagination: { page: number; limit: number; total: number; pages: number } }> => {
    const response = await api.get<ApiResponse<Inquiry[]>>('/inquiries', { params });
    return {
      inquiries: response.data.data,
      pagination: response.data.pagination!
    };
  },

  getById: async (id: string): Promise<Inquiry> => {
    const response = await api.get<ApiResponse<Inquiry>>(`/inquiries/${id}`);
    return response.data.data;
  },

  update: async (id: string, data: { status?: string; adminNotes?: string }): Promise<Inquiry> => {
    const response = await api.put<ApiResponse<Inquiry>>(`/inquiries/${id}`, data);
    return response.data.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete<ApiResponse<void>>(`/inquiries/${id}`);
  },

  exportCSV: async (status?: string): Promise<Blob> => {
    const response = await api.get('/inquiries/export/csv', {
      params: { status },
      responseType: 'blob'
    });
    return response.data;
  }
};

// Stats API
export const statsAPI = {
  getStats: async (): Promise<Stats> => {
    const response = await api.get<ApiResponse<Stats>>('/stats');
    return response.data.data;
  },

  getPublicStats: async (): Promise<PublicStats> => {
    const response = await api.get<ApiResponse<PublicStats>>('/stats/public');
    return response.data.data;
  }
};

export default api;
