"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// ─── Blog Data (titles only — keep in sync with your blogs array) ─────────────
const blogs = [
  {
    id: 1,
    slug: "integrate-cashfree-payment-gateway-in-php-with-upi-intent",
    title: "How to Integrate Cashfree Payment Gateway in PHP with UPI Intent",
  },
  {
    id: 2,
    slug: "how-to-change-title-in-nextjs-client-component",
    title: "How to Change Title in NextJS Client Component",
  },
  {
    id: 3,
    slug: "convert-xml-to-json-with-javascript",
    title: "Convert XML to JSON with JavaScript",
  },
  {
    id: 4,
    slug: "react-hook-form-validation-with-zod",
    title: "Validate Form with React Hook Form and Zod in NextJS 14",
  },
  {
    id: 5,
    slug: "phonepe-payment-gateway-in-php",
    title: "How to Integrate PhonePe Payment Gateway in PHP",
  },
  {
    id: 6,
    slug: "php-crud-rest-api",
    title: "A PHP Library for CRUD Operations with REST API",
  },
  {
    id: 7,
    slug: "the-impact-of-5g-technology-on-connectivity",
    title: "The Impact of 5G Technology on Connectivity",
  },
  {
    id: 8,
    slug: "how-ai-and-machine-learning-disrupting-traditional-industries",
    title: "How AI and Machine Learning Are Disrupting Traditional Industries",
  },
  { id: 9, slug: "google-bard-vs-chatgpt", title: "Google Bard vs ChatGPT" },
];

const SITE_NAME = "Arifus Jaman Abbasi";

function getBlogTitle(id) {
  const post = blogs.find((b) => String(b.id) === String(id) || b.slug === id);
  return post?.title || null;
}

function getPageTitle(pathname) {
  const parts = pathname.split("/").filter(Boolean);

  // Home
  if (pathname === "/") {
    return `${SITE_NAME} | Full Stack Web Developer | A.J. Abbasi`;
  }

  // /blog/[id]
  if (parts[0] === "blog" && parts[1]) {
    const blogTitle = getBlogTitle(parts[1]);
    if (blogTitle) {
      return `${blogTitle} | ${SITE_NAME}`;
    }
    return `Blog | ${SITE_NAME}`;
  }

  // /blog
  if (pathname === "/blog") {
    return `Blog | ${SITE_NAME}`;
  }

  // All other pages
  const lastSegment = parts[parts.length - 1];
  const formatted = lastSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return `${formatted} | ${SITE_NAME}`;
}

export default function PageTitleManager() {
  const pathname = usePathname();

  useEffect(() => {
    document.title = getPageTitle(pathname);
  }, [pathname]);

  return null;
}
