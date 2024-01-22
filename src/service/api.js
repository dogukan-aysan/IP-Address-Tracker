const API_KEY = "at_Iwws5YEiv8clIDCcaPCLnRgL7RH3c";

const getApiResponse = async (ip) => {
  const url = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ip}`;
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
