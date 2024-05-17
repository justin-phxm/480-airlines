import { searchFlights } from "../actions";

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
    <div className="flex flex-1">
      {flights.length !== 0 ? (
        <div>{JSON.stringify(flights)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
