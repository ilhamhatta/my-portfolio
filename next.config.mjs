// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Pastikan output dalam bentuk HTML statis untuk Cloudflare
  images: {
    unoptimized: true, // Disable image optimization bawaan Next.js
  },
};

export default nextConfig;
