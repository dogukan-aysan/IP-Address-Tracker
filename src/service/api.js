const API_KEY = "at_xADHR5l4eGE1QQRmNTkGeqpv6hhqT";

const getApiResponse = async (ip) => {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data) throw new Error("Something went wrong 💥");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getApiResponse;
