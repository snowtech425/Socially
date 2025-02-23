/**
 * Application wide configuration.
 */
const config = {
  // enableMock: process.env.REACT_APP_ENABLE_MOCK === "true",
  // firebaseConfig: {
  //   apiKey: process.env.REACT_APP_GOOGLE_AUTH_API_KEY,
  //   authDomain: process.env.REACT_APP_GOOGLE_AUTH_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_GOOGLE_AUTH_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_GOOGLE_AUTH_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_GOOGLE_AUTH_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_GOOGLE_AUTH_APP_ID,
  // },
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  endpoints: {
    auth: {
      login: "api/auth/signin",
      logout: "api/auth/signout",
      refresh: "/auth/refresh",
      verify: "/auth",
      current: "/auth/get",
    },

    user: {
      add_data: "/add-data",
    },
  },
};

export default config;
