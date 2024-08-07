import axios from "axios";

export const createUser = async (formData) => {
  try {
    const response = await axios.post('https://localhost:7157/api/usuarios', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response?.data?.title || error.message);
    throw new Error(error.response);
  }
};