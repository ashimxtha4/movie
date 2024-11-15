import { useApiClient } from "@/utils/api.util";

const api = useApiClient();

const Requests = {
  getMovie: async () => await api.get("discover/movie"),
  findMovie: async (params: any) =>
    await api.get("search/movie", {
      params,
    }),
  getMovieDetails: async (id: any) => await api.get(`movie/${id}`),
};

export default Requests;
