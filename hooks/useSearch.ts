import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function searchCompanies(
  params: searchData,
): Promise<CompanySearchResponse> {
  const response = await axios.get(`${apiUrl}/search/basic`, {
    params: {
      ...params,
      size: 10,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export async function searchCompaniesDetailed(
  params: searchData,
): Promise<CompanySearchResponse> {
  const response = await axios.get(`${apiUrl}/search/advanced`, {
    params: {
      ...params,
      size: 10,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
