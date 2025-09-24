import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useCurrency = (data: exchangeData) => {
  return useQuery({
    queryKey: ["currency", data],
    queryFn: async ({ queryKey }) => {
      const [, base_currency, target_currency] = queryKey;
      const response = await axios.get(`${apiUrl}/currency/convert`, {
        params: {
          base_currency,
          target_currency,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
  });
};

export const useCurrencyRates = (baseCurrency: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const size = 6;

  return useQuery<currencyData>({
    queryKey: ["currencyRates", baseCurrency, size],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/currency/rates`, {
        params: { base_currency: baseCurrency, size },
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    },
    enabled: !!baseCurrency,
  });
};

export const useCurrencyHistory = ({
  from_date,
  to_date,
  from_currency,
  to_currency,
}: {
  from_date: string;
  to_date: string;
  from_currency: string;
  to_currency: string;
}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return useQuery({
    queryKey: [
      "currencyHistory",
      { from_date, to_date, from_currency, to_currency },
    ],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/currency/history`, {
        params: { from_date, to_date, from_currency, to_currency },
        headers: { Accept: "application/json" },
      });
      return response.data;
    },
  });
};
