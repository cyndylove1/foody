// import axios from "axios";
// import { toast } from "react-toastify";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// // Setup interceptors
// const setupInterceptors = () => {
//   apiClient.interceptors.request.use(
//     (config) => {
//       config.headers = config.headers || {};

//       if (typeof window !== "undefined") {
//         const token = localStorage.getItem("auth_token");

//         if (token) {
//           config.headers["Authorization"] = `Bearer ${token}`;
//         }
//       }

//       return config;
//     },
//     (error) => Promise.reject(error),
//   );

//   // Response interceptor for toasts handling
//   apiClient.interceptors.response.use(
//     (response) => {
//       const showToast = response.config.headers?.["x-show-toast"] === "true";
//       if (showToast && response.data?.message) {
//         toast.dismiss();
//         toast.success(response.data.message);
//       }
//       return response;
//     },
//     (error) => {
//       const showToast = error.config?.headers?.["x-show-toast"] === "true";
//       const errorMessage =
//         error.response?.data?.message ||
//         error.message ||
//         "Network error occurred";

//       if (showToast) {
//         toast.dismiss();
//         toast.error(errorMessage);
//       }

//       // Optional: Global logout if token expires (419 / 401 Unauthorized)
//       if (error.response?.status === 401) {
//         console.log("Unauthorized request");
//         console.log(error.response.data);

//       }

//       return Promise.reject(error);
//     },
//   );

//   return apiClient;
// };

// const configuredClient = setupInterceptors();
// export default configuredClient;
// import axios from "axios";
// import { toast } from "react-toastify";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// const setupInterceptors = () => {
//   apiClient.interceptors.request.use(
//     (config) => {
//       config.headers = config.headers || {};

//       if (typeof window !== "undefined") {
//         const token = localStorage.getItem("auth_token");

//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//       }

//       return config;
//     },
//     (error) => Promise.reject(error),
//   );

//   apiClient.interceptors.response.use(
//     (response) => {
//       const showToast = response.config.headers?.["x-show-toast"] === "true";

//       if (showToast && response.data?.message) {
//         toast.dismiss();
//         toast.success(response.data.message);
//       }
//       return response;
//     },
//     (error) => {
//       const showToast = error.config?.headers?.["x-show-toast"] === "true";

//       const errorMessage =
//         error.response?.data?.message ||
//         error.message ||
//         "Network error occurred";

//       if (showToast) {
//         toast.dismiss();
//         toast.error(errorMessage);
//       }

//       return Promise.reject(error);
//     },
//   );

//   return apiClient;
// };

// const configuredClient = setupInterceptors();

// export default configuredClient;

import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const setupInterceptors = () => {
  apiClient.interceptors.request.use(
    (config) => {
      config.headers = config.headers || {};

      if (typeof window !== "undefined") {
        const token = localStorage.getItem("auth_token");
        const sessionId = localStorage.getItem("cart_session_id"); // 👈 Retrieve stored session

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

<<<<<<< HEAD
        // 👈 Attach session ID header for guest users
        if (sessionId) {
          config.headers["X-Session-ID"] = sessionId;
=======
        const cartSession = localStorage.getItem("cart_session");

        if (cartSession) {
          config.headers["X-Cart-Session"] = cartSession;
>>>>>>> 36d096f0508c08841c2dd8b27378bc37f10aae30
        }
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  apiClient.interceptors.response.use(
    (response) => {
      // 👈 Automatically capture session_id returned by backend responses
      if (typeof window !== "undefined" && response.data?.data?.session_id) {
        localStorage.setItem("cart_session_id", response.data.data.session_id);
      }

      const showToast = response.config.headers?.["x-show-toast"] === "true";

      if (showToast && response.data?.message) {
        toast.dismiss();
        toast.success(response.data.message);
      }
      return response;
    },
    (error) => {
      const showToast = error.config?.headers?.["x-show-toast"] === "true";

      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Network error occurred";

      if (showToast) {
        toast.dismiss();
        toast.error(errorMessage);
      }

      return Promise.reject(error);
    },
  );

  return apiClient;
};

const configuredClient = setupInterceptors();

export default configuredClient;