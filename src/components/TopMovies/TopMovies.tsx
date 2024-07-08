import { useGetMoviesQuery } from "@/redux/api/api";
import { TMovie } from "@/types";
import { MovieCard } from "../MovieCard/MovieCard";
import { Skeleton } from "@/components/ui/skeleton"


const TopMovies = () => {
  const { data: movies, isLoading } = useGetMoviesQuery({});


  if (isLoading)
    return (
      <div className="my-5">
        <h1 className="text-4xl font-bold text-yellow-400">What to watch</h1>
        <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1">
          Top Rated Movies
        </h2>
        <div className="grid grid-cols-4 mt-8 justify-items-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-yellow-400">What to watch</h1>
      <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1">
        Top Rated Movies
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-4 mx-auto my-5">
        {movies?.data?.map((movie: TMovie) => (
          <MovieCard key={movie?._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
