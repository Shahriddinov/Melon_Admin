import axios from 'axios';
import toast from "react-hot-toast"
const apiBaseUrl = 'http://admin.meelon.uz';
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const request = {
  async post(endpoint, data) {
    try {
      const response = await axiosInstance.post(endpoint, data);
      toast.success(response?.data?.message)
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message)
      // throw error;
    }
  },

  async delete(endpoint) {
    try {
      const response = await axiosInstance.delete(endpoint);
      // console.log(response);
      toast.success(response?.data?.message)
      return response?.data;
    } catch (error) {
      // console.error('DELETE request error:', error);
      // console.log(error);
      toast.error(error?.data?.message)
      // throw error;
    }
  },

  async patch(endpoint, data) {
    try {
      const response = await axiosInstance.patch(endpoint, data);
      if (response?.data) {
        // console.log(response.data);
        toast.success(response?.data?.message)
        return response?.data;
      }
    } catch (error) {
      // console.error('PATCH request error:', error);
      // console.log(error?.response?.data?.message[0]);
      toast.error(error?.response?.data?.message[0])
      // throw error;
    }
  },

  async put(endpoint, data) {
    try {
      const response = await axiosInstance.put(endpoint, data);
      toast.success(response?.data?.message)
      return response?.data;
    } catch (error) {
      // console.error('PUT request error:', error);
      toast.error(error?.data?.message)
      // throw error;
    }
  },

  async get(endpoint) {
    try {
      const response = await axiosInstance.get(endpoint);
      return response?.data;
    } catch (error) {
      // console.error('GET request error:', error);
      // throw error;
    }
  },
};


