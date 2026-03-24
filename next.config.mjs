/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for Next.js Image component in static exports
  },
}

export default nextConfig;
