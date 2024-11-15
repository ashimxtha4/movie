import MovieDetails from "@/components/movieDetail";
import { useEffect, useMemo, useState } from "react";

export default async function ({ params }: { params: Promise<{ id: string | number }> }) {
  let id = (await params)?.id;

  return <MovieDetails id={id} />;
}
