/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://m.media-amazon.com/images/'],
    formats: ['image/webp'],
    // i18n,
    // sassOptions: {
    //   includePaths: [path.join(__dirname, 'src/styles')],
    //   prependData: `@import "variables.scss";`,
    // },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
