/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
  images: {
      domains: ['github.com' , 'images.unsplash.com','raw.githubusercontent.com'],
      formats: ["image/webp"],
  },
};