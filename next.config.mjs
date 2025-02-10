/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Gunakan mode static untuk Cloudflare Pages
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
    scrollRestoration: true,
    externalDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"], // Gunakan format gambar lebih kecil
  },
};

export default nextConfig;
