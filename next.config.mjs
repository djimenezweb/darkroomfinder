/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: '**.googleusercontent.com' },
      { hostname: '**.githubusercontent.com' },
      { hostname: '**.cloudinary.com' }
    ]
  }
};

export default nextConfig;
