"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter, usePathname, useParams, useSearchParams } from "next/navigation";
import {} from "next/navigation";

import { useState } from "react";

export default function NavSearch() {
  const router = useRouter();
  const path = usePathname();
  console.log("🚀 ~ NavSearch ~ path:", path);
  const param = useSearchParams();
  console.log("🚀 ~ NavSearch ~ param:", Object.fromEntries(param.entries()));
  const [query, setQuery] = useState("");
  async function searchContent(e: any) {
    e.preventDefault();
    console.log(query);
    router.push("/movie?query=" + query);
    // let res = await axios.get(
    //   "https://api.themoviedb.org/3/search/movie?api_key=4f74382d3b16155e628a825d47eeb80d&query=" + query
    // );
    // console.log("🚀 ~ searchContent ~ res:", res);
  }
  return (
    <form onSubmit={searchContent}>
      <input
        className="border border-black rounded-lg p-2"
        placeholder="Search..."
        value={query}
        onChange={(e: any) => setQuery(e?.target?.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
