import axios from "axios";

export const updateEnrollment = async (id, data) => {
  try {
    const response = await axios.patch(`https://localhost:7157/api/cursadas/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data?.title || error.message);
    throw new Error(error.message);
  }
}