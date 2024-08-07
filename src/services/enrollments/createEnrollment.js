import axios from "axios";

export const createEnrollment = async (data) => {
  try {
    const response = await axios.post('https://localhost:7157/api/cursadas', data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data?.title || error.message);
    throw new Error(error.message);
  }
}