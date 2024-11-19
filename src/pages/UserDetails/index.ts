import axios from "axios";


export async function fetchUser(id: number) {
    try {
        const response = await axios.get(`http://localhost:3000/api/users?id=${id}`);
        const data = response.data; // Extract data from response
        console.log(data); // Log data for debugging
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}