import axios from "axios";

export const updateSubject = async (id, data) => {
  try {
    const response = await axios.patch(`https://localhost:7157/api/materias/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data?.title || error.message);
    throw new Error(error.message);
  }
}