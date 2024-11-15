"use client";

import Requests from "@/repository";
import { movieDetailType } from "@/types/response.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function MovieDetails({ id }: { id: string | number }) {
  const [movie, setMovie] = useState<movieDetailType>({} as movieDetailType);
  const [error, setError] = useState(false);
  const movieUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  useEffect(() => {
    console.log("🚀 ~ id:", id);
    Requests.getMovieDetails(id)
      .then((res: AxiosResponse) => {
        console.log("🚀 ~ Requests.getMovieDetails ~ res:", res);
        setMovie(res.data as movieDetailType);
      })
      .catch((e) => {
        // throw "No any such movie.";
        setError(true);
      });
  }, [id]);
  if (!error)
    return (
      <div className="border w-full">
        <div className="w-full flex border border-black p-4 gap-2">
          <Image
            className="w-full h-[450px] w-[300px]"
            src={movieUrl + movie.poster_path}
            alt={movie.title ?? "poster"}
            height={450}
            width={300}
          ></Image>
          <div className="flex flex-col p-2 relative">
            <div className="flex justify-between gap-2">
              <b className="text-bold text-[32px]">
                {movie.title} ({movie.release_date})
              </b>
              <span>fav</span>
            </div>
            <div className="flex gap-2">
              <b>Genres:</b>
              {movie.genres?.map((genres, index) => (
                <span key={index}>{genres.name}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <b>Rating:</b>
              {movie.vote_average}
            </div>

            <b>Overview</b>
            <div>{movie.overview}</div>
          </div>
        </div>
      </div>
    );
  else return notFound();
}
