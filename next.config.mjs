/** @type {import('next').NextConfig} */
import MillionLint from '@million/lint';
import path from 'path';

const __dirname = path.resolve();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/')],
  },
  images: {
    unoptimized: true,
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
