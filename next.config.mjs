/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: '**.googleusercontent.com' },
      { hostname: '**.cloudinary.com' }
    ]
  }
};

export default nextConfig;
