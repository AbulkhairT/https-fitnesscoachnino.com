import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdcssl.ibsrv.net",
        pathname: "/ibimg/**",
      },
      {
        protocol: "https",
        hostname: "abetterlifechiropractic.com",
        pathname: "/storage/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/meet-the-chiropractor.html", destination: "/about/dr-barbaro", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/testimonials.html", destination: "/testimonials", permanent: true },
      { source: "/new-patient-center.html", destination: "/new-patient", permanent: true },
      { source: "/chiropractic---you.html", destination: "/care", permanent: true },
    ];
  },
};

export default nextConfig;
