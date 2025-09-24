// import { MetadataRoute } from "next";

export default async function sitemap() {
  /* ✨ add generating metada for all companies ✨ */
  const baseUrl = "http://cmpxyz.ru";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
