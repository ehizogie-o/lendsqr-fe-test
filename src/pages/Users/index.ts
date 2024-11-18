interface Record {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

export const getAllRecords = async (): Promise<Record[]> => { // Specify that the return value is a promise of an array of Record objects
  try {
    const response = await fetch("https://api.json-generator.com/templates/a1f9S1EgDCob/data", {
      method: "GET",
      headers: {
        "Authorization": "Bearer kpyi6izrphyi7nfwgkbx8t6kcmd7kt6sf9hh7cdv", // Ensure correct token format
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Record[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
