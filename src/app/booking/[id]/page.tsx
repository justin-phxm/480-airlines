import { db } from "~/server/db";

export async function generateStaticParams() {
  const flights = await db.flight.findMany();
  return flights.map((flight) => ({
    params: { id: flight.id.toString() },
  }));
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const flightID = parseInt(id);
  const flight = await db.flight.findUnique({ where: { id: flightID } });
  return (
    <div className="flex flex-1 flex-col">
      {flight ? (
        <div className="">{JSON.stringify(flight)}</div>
      ) : (
        <div>Flight not found</div>
      )}
    </div>
  );
}
