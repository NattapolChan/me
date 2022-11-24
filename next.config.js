/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}



module.exports = {
  future: { webpack5: true },
  target: "serverless",
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};