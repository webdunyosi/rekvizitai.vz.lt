const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCategories(size: number): Promise<Category[]> {
  try {
    const res = await fetch(`${apiUrl}/categories/get?page=1&size=${size}`, {
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 6000000 },
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json();
    return data.results as Category[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchNews(): Promise<News[]> {
  try {
    const res = await fetch(`${apiUrl}/news/latest`, {
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 60000 },
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json();
    return data.news as News[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
