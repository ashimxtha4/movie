"use client";

import SingleMovie from "@/components/singleMovie";
import Requests from "@/repository";
import { findMovietype, singleResultType } from "@/types/response.type";
import { AxiosResponse } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Movie() {
  const param = useSearchParams();
  console.log("🚀 ~ NavSearch ~ param:", Object.fromEntries(param.entries()));
  let query = useMemo(() => Object.fromEntries(param.entries())?.query, [param]);
  const [list, setList] = useState<singleResultType[]>([] as singleResultType[]);
  useEffect(() => {
    setList([]);
    if (query && query.length) {
      console.log("🚀 ~ useEffect ~ query:", query);
      Requests.findMovie({ query }).then((res: AxiosResponse) => {
        let data: findMovietype = res.data;
        console.log("🚀 ~ Requests.findMovie ~ data:", data);
        setList(data.results);
      });
    } else {
      console.log("🚀 ~ useEffect ~ query:", query);
      Requests.getMovie().then((res: AxiosResponse) => {
        let data: findMovietype = res.data;
        console.log("🚀 ~ Requests.findMovie ~ data:", data);
        setList(data.results);
      });
    }
  }, [query]);
  return (
    <div className="border w-full grid grid-cols-4 gap-4 relative">
      {list.length
        ? list.map((movie: singleResultType, index: number) => <SingleMovie key={index} movie={movie} />)
        : null}
    </div>
  );
}
