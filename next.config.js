/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig

// module.exports = {
//   pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
// }
