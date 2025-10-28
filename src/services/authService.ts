import axiosInstance from './axiosConfig';

export interface LoginResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  lastName: string;
  phone: string;
}


export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post<LoginResponse>('/auth/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (data: RegisterData) => {
    try {
      const response = await axiosInstance.post<LoginResponse>('/auth/register', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};