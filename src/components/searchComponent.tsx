"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  async function searchContent(e: any) {
    e.preventDefault();
    console.log(query);
    router.push("?query=" + query);
    // let res = await axios.get(
    //   "https://api.themoviedb.org/3/search/movie?api_key=4f74382d3b16155e628a825d47eeb80d&query=" + query
    // );
    // console.log("🚀 ~ searchContent ~ res:", res);
  }
  return (
    <>
      <div className="banner border w-full">Banner</div>
      <form onSubmit={searchContent}>
        <input
          className="border border-black rounded-lg p-2"
          placeholder="Search..."
          value={query}
          onChange={(e: any) => setQuery(e?.target?.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
