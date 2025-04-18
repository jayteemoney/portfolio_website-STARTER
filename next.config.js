// /** @type {import('next').NextConfig} **/
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Required for static exports with next/image
    },
  };
  
  export default nextConfig;