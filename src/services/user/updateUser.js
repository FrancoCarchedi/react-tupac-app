import axios from "axios";

export const updateUser = async (id, formData) => {
  try {
    const response = await axios.patch(`https://localhost:7157/api/usuarios/${id}`, formData, {
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