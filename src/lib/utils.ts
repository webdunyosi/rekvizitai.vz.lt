import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Filtered<T> = {
  [K in keyof T as T[K] extends undefined ? never : K]: T[K];
};

export function filterEmptyParams<T extends object>(params: T): Filtered<T> {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null && value !== "",
    ),
  ) as Filtered<T>;
}

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return null;
  }
};

export const isSignedIn = () => {
  const accessToken = Cookies.get("token-client");
  return !!accessToken;
};
