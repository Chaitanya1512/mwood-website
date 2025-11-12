import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';

const isDev = process.env.NODE_ENV === 'development'

const config: NextConfig = {
  // Add this 'images' configuration
  images: {
    // Static export + GitHub Pages: disable the image optimizer
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  // When deploying to a project site like https://<user>.github.io/mwood-website
  // we use basePath/assetPrefix only outside of development so local dev runs at '/'
  basePath: isDev ? undefined : '/mwood-website',
  assetPrefix: isDev ? undefined : '/mwood-website',
  // Expose the base path to client code so runtime/static export markup can
  // reference public assets correctly (e.g. /mwood-website/assets/...).
  env: {
    NEXT_PUBLIC_BASE_PATH: isDev ? '' : '/mwood-website',
  },
  output: 'export',
  // Silence workspace root warning by explicitly setting the root for Turbopack
  turbopack: {
    root: __dirname,
  },
}

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(config)