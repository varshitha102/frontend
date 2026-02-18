export interface Inquiry {
  _id: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  studentName: string;
  currentGrade: string;
  interestedProgram: string;
  inquiryType: string;
  message: string;
  status: 'pending' | 'contacted' | 'resolved';
  adminNotes: string;
  createdAt: string;
  updatedAt: string;
  contactedAt?: string;
  resolvedAt?: string;
}

export interface InquiryFormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  studentName: string;
  currentGrade: string;
  interestedProgram: string;
  inquiryType: string;
  message: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface Stats {
  overview: {
    total: number;
    pending: number;
    contacted: number;
    resolved: number;
    recent: number;
    averageResolutionTime: number;
  };
  byType: Array<{ type: string; count: number }>;
  byProgram: Array<{ program: string; count: number }>;
  dailyTrend: Array<{ date: string; count: number }>;
}

export interface PublicStats {
  totalInquiries: number;
  resolvedInquiries: number;
  satisfaction: number;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  pagination?: Pagination;
}
