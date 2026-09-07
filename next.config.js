/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "opengraph.githubassets.com" },
    ],
  },
  async headers() {
    return [
      {
        // Keep the résumé (contains a phone number) out of search engines.
        // Crawlers must be allowed to fetch it to see this header, so it is
        // intentionally not disallowed in robots.txt.
        source: "/resume.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

module.exports = nextConfig;
