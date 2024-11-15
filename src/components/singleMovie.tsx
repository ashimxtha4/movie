import { singleResultType } from "@/types/response.type";
import Image from "next/image";

export default function SingleMovie({ movie }: { movie: singleResultType }) {
  const movieUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div className="relative">
      <Image className="w-full h-[400px]" src={movieUrl + movie.poster_path} alt={movie.title ?? "poster"} height={400} width={350}></Image>
      <span>{movie.title}</span>
    </div>
  );
}
