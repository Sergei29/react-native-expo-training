import axios from "axios";

export const yelpApi = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  timeout: 2000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer zP6L3p3ggEBSRz5I_zWiYjxQ13XwAH35Kh0Hj2aRSA8aBQRtvPcwxU-XcY3-Rrdo921fjB0Q4zBt-oq3w6qO2kJh9LWzIM3uqPburG60mesM9UVibZL_A6Si4EsxZHYx",
  },
});
