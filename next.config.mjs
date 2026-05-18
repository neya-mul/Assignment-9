/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
       
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;