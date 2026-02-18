import { useState } from 'react';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  BookOpen, 
  MessageSquare, 
  HelpCircle,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { inquiryAPI } from '@/services/api';
import { toast } from 'sonner';

interface FormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  studentName: string;
  currentGrade: string;
  interestedProgram: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Inquiry = () => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    studentName: '',
    currentGrade: '',
    interestedProgram: '',
    inquiryType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const grades = ['8th', '9th', '10th', '11th', '12th', 'Other'];
  const programs = ['Science', 'Commerce', 'Arts', 'Engineering', 'Medicine', 'Law', 'Management', 'Other'];
  const inquiryTypes = ['Admission', 'Fees', 'Facilities', 'Curriculum', 'Scholarships', 'Other'];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    } else if (formData.parentName.length > 100) {
      newErrors.parentName = 'Name cannot exceed 100 characters';
    }

    if (!formData.parentEmail.trim()) {
      newErrors.parentEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) {
      newErrors.parentEmail = 'Please enter a valid email';
    }

    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,20}$/.test(formData.parentPhone)) {
      newErrors.parentPhone = 'Please enter a valid phone number';
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    } else if (formData.studentName.length > 100) {
      newErrors.studentName = 'Name cannot exceed 100 characters';
    }

    if (!formData.currentGrade) {
      newErrors.currentGrade = 'Please select current grade';
    }

    if (!formData.interestedProgram) {
      newErrors.interestedProgram = 'Please select interested program';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message cannot exceed 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      await inquiryAPI.create(formData);
      setIsSuccess(true);
      toast.success('Inquiry submitted successfully!');
      // Reset form
      setFormData({
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        studentName: '',
        currentGrade: '',
        interestedProgram: '',
        inquiryType: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Submit error:', error);
      if (error.response?.data?.errors) {
        const apiErrors: FormErrors = {};
        error.response.data.errors.forEach((err: { field: string; message: string }) => {
          apiErrors[err.field] = err.message;
        });
        setErrors(apiErrors);
      }
      toast.error(error.response?.data?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your inquiry has been submitted successfully. Our admissions team will review your request 
            and get back to you within 24-48 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parent Inquiry Form
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs, admissions, or facilities? Fill out the form below 
            and our admissions team will get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <HelpCircle className="w-6 h-6 mr-2" />
              Submit Your Inquiry
            </h2>
            <p className="text-blue-100 mt-1">
              All fields marked with * are required
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Parent Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.parentName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Enter parent name"
                />
                {errors.parentName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.parentName}
                  </p>
                )}
              </div>

              {/* Parent Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.parentEmail ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Enter email address"
                />
                {errors.parentEmail && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.parentEmail}
                  </p>
                )}
              </div>

              {/* Parent Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.parentPhone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Enter phone number"
                />
                {errors.parentPhone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.parentPhone}
                  </p>
                )}
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="inline w-4 h-4 mr-1" />
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.studentName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Enter student name"
                />
                {errors.studentName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.studentName}
                  </p>
                )}
              </div>

              {/* Current Grade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <BookOpen className="inline w-4 h-4 mr-1" />
                  Current Grade *
                </label>
                <select
                  name="currentGrade"
                  value={formData.currentGrade}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.currentGrade ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white`}
                >
                  <option value="">Select Grade</option>
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
                {errors.currentGrade && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.currentGrade}
                  </p>
                )}
              </div>

              {/* Interested Program */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="inline w-4 h-4 mr-1" />
                  Interested Program *
                </label>
                <select
                  name="interestedProgram"
                  value={formData.interestedProgram}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.interestedProgram ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white`}
                >
                  <option value="">Select Program</option>
                  {programs.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
                {errors.interestedProgram && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.interestedProgram}
                  </p>
                )}
              </div>

              {/* Inquiry Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <HelpCircle className="inline w-4 h-4 mr-1" />
                  Inquiry Type *
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white`}
                >
                  <option value="">Select Inquiry Type</option>
                  {inquiryTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  Message/Questions *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                  placeholder="Please provide details about your inquiry..."
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  ) : (
                    <span></span>
                  )}
                  <span className={`text-sm ${formData.message.length > 2000 ? 'text-red-500' : 'text-gray-400'}`}>
                    {formData.message.length}/2000
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-600">admissions@excellencecollege.edu</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
            <p className="text-gray-600">Mon - Sat: 9AM - 5PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
