/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e3.365dm.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
