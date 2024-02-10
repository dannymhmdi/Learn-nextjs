/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/user",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
