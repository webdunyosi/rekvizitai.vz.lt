import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ExpandIcon } from "lucide-react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

/* 🫠 TODO later */
export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/users/me`);
      return response.data;
    },
  });
};

export const useEditProfile = () => {
  return useMutation({
    mutationFn: (user: User) => {
      return axios.patch(`${apiUrl}/users/me`, user, {
        headers: {
          Accept: "application/json",
        },
      });
    },
  });
};

export const useProfileById = (id: string) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/users/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useEditProfileById = () => {
  return useMutation({
    mutationFn: ({ user, id }: { user: User; id: string }) => {
      return axios.patch(`${apiUrl}/users/${id}`, user, {
        headers: {
          Accept: "application/json",
        },
      });
    },
  });
};

export const useDeleteProfileById = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return axios.delete(`${apiUrl}/users/${id}`);
    },
  });
};
