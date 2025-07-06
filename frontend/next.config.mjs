/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',   // optional — for deploying with Docker or backend integration
  reactStrictMode: true,  // good practice to keep React in strict mode
  images: {
    domains: [],          // add external image domains if you’re using remote images
  },
}

export default nextConfig
