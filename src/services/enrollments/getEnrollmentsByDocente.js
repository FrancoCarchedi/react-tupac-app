import axios from "axios";

export const getEnrollmentsByDocente = async (id) => {
  try {
    const response = await axios.get(`https://localhost:7157/api/cursadas/docente/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data?.title || error.message);
    throw new Error(error.message);
  }
}