import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface Credentials {
  username: string;
  password: string;
}

interface Response extends User {
  data: {
    access_token: string;
    token_type: string;
  };
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useLogin = () => {
  return useMutation<Response, AxiosError, Credentials, Response>({
    mutationFn: (credentials) => {
      return axios.post(`${apiUrl}/auth/login`, credentials, {
        headers: {
          Accept: "application/x-www-form-urlencoded",
        },
      });
    },
    onSuccess: (data) => {
      const accessToken = data.data.access_token;
      Cookies.set("token-client", accessToken);
      alert("Success!");
    },
  });
};

/* 😇 Узнать про токен и схему логаута 😇 */
export const useLogOut = (token: string) => {
  return useMutation<string>({
    mutationFn: () => {
      return axios.post(`${apiUrl}/auth/logout`, token, {
        headers: {
          Authorization: `Bearer: ${token}`,
          Accept: "application/json",
        },
      });
    },
  });
};

export const useRegister = () => {
  return useMutation<Response, AxiosError, User>({
    mutationFn: (credentials) => {
      return axios.post(`${apiUrl}/auth/register`, credentials, {
        headers: { Accept: "application/json" },
      });
    },
    onSuccess: (data) => {
      Cookies.set("token-client", data.data.access_token, { expires: 1 });
      alert("Success!");
    },
  });
};

export const useForgotPassword = () => {
  return useMutation<string, AxiosError, string>({
    mutationFn: (email) => {
      return axios.post(
        `${apiUrl}/auth/forgot-password`,
        { email },
        {
          headers: { Accept: "application/json" },
        },
      );
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Reset code was sent to provided email");
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) => {
      return axios.post(
        `${apiUrl}/auth/reset-password`,
        { token, password },
        {
          headers: { Accept: "application/json" },
        },
      );
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Reset password completed");
    },
  });
};

export const useRequestVerifyToken = () => {
  return useMutation({
    mutationFn: (email: string) => {
      return axios.post(
        `${apiUrl}/auth/request-verify-token`,
        { email },
        {
          headers: { Accept: "application/json" },
        },
      );
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Requested verify token");
    },
  });
};

export const useVerify = () => {
  return useMutation({
    mutationFn: (token: string) => {
      return axios.post(
        `${apiUrl}/auth/verify`,
        { token },
        {
          headers: { Accept: "application/json" },
        },
      );
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Account verified");
    },
  });
};

export const useAuthenticatedRoute = () => {
  return useQuery({
    queryKey: ["auth-rotue"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/auth/authenticated-route`);
      return response.data;
    },
  });
};

export const useUser = () => {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: async () => {
      const token = Cookies.get("token-client");
      if (!token) {
        throw new Error("Missing token");
      }

      const response = await axios.get(`${apiUrl}/users/me`, {
        headers: {
          Accept: "application/json",
          access_token: `${token}`,
        },
      });

      return response.data;
    },
  });
};
