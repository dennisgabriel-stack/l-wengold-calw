import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // We ship a trusted SVG logo from /public. This enables next/image to serve
    // it; the CSP keeps inline scripts out of the payload so it stays safe.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
