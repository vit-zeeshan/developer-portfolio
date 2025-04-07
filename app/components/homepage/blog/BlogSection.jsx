"use client";

import BlogCard from "./blog-card";
import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  const data = await res.json();
  return data;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs).catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
      {blogs.map((blog, i) =>
        blog?.cover_image ? <BlogCard blog={blog} key={i} /> : null
      )}
    </div>
  );
}
