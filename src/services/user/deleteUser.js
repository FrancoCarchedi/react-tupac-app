import axios from "axios";

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`https://localhost:7157/api/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error.response?.data?.title || error.message);
    throw new Error(error.response.data);
  }
}