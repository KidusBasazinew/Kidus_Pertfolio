/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/users/**",
      },
    ],
  },
};

export default nextConfig;
