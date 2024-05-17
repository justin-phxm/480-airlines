import { searchFlights } from "../actions";
import Searchbar from "../components/Searchbar";
import FlightTable from "./components/FlightTable";
export default async function page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const flights = await searchFlights(
    searchParams as {
      origin: string;
      destination: string;
      date: string;
      time: string;
    },
  );
  return (
    <div className="flex flex-1 flex-col items-center gap-4 bg-gradient-to-t from-indigo-300 to-white py-12">
      <Searchbar />
      {flights && flights.length !== 0 ? (
        <FlightTable flights={flights} />
      ) : (
        <div className="text-2xl font-bold">No flights found</div>
      )}
    </div>
  );
}
