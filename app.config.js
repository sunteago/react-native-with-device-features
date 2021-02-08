require("dotenv").config({ path: ".env.development.local" });

export default {
  name: "CoolApp",
  version: "1.0.0",
  extra: {
    googleApiKey: process.env.GOOGLE_API_KEY,
  },
};
