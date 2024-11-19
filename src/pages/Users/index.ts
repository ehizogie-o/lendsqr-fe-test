import axios from "axios";

const API_URL = "http://localhost:3000/api/users?count=5"; // Fix the backtick here

export async function fetchUsers() {
  try {
    const response = await axios.get(API_URL);
    const data = response.data; // Extract data from response
    console.log(data); // Log data for debugging
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
