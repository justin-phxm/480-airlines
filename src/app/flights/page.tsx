import Link from "next/link";
import { searchFlights } from "../actions";
import Searchbar from "../components/Searchbar";
import FlightTable from "./components/FlightTable";
export type SearchParams = {
  origin?: string;
  destination?: string;
  date?: string;
  time?: string;
  page?: string;
};
export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const paginatedFlights = await searchFlights({ searchParams });
  const flights = paginatedFlights?.flights;
  const hasMore = paginatedFlights?.nextCursor !== null;
  return (
    <div className="flex flex-1 flex-col items-center gap-4 bg-gradient-to-t from-indigo-300 to-white py-12">
      <div className=" flex w-full max-w-6xl flex-col gap-4">
        <Searchbar />
        {flights && flights.length !== 0 ? (
          <>
            <div className=" text-lg font-semibold text-slate-500">
              Choose a <span className="text-indigo-500">{"departing "}</span>
              flight
            </div>
            <FlightTable flights={flights} />
            {hasMore && (
              <Link
                href={`/flights?origin=${searchParams.origin}&destination=${searchParams.destination}&date=${searchParams.date}&time=${searchParams.time}&page=${paginatedFlights.nextCursor}`}
              >
                Load more...
              </Link>
            )}
          </>
        ) : (
          <div className="text-2xl font-bold">No flights found</div>
        )}
      </div>
    </div>
  );
}
