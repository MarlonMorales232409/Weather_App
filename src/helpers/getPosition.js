import axios from "axios";


const getPosition = async () => {

  // Get the actual position using the user IP

  const ip = await axios("https://ipapi.co/json/")

  if (ip?.data) {
    return ip?.data.city;
  }

  return {
    error: "Error 404",
    text: "Not Found",
  };
};

export default getPosition;
