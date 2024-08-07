import axios from "axios";

export const getSubjects = async () => {
  try {
    const response = await axios.get('https://localhost:7157/api/materias');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data?.title || error.message);
    throw new Error(error.message);
  }
}