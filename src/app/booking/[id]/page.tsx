import { db } from "~/server/db";
import BookingDetails from "./components/BookingDetails";
import Plane from "./components/Plane";

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
  const seats = await db.seat.findMany({
    where: { aircraftId: flight?.aircraftId },
  });
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden">
      {flight ? (
        <div className="flex h-[3000px] flex-row justify-between overflow-hidden px-4">
          {/* Selection Area */}
          <Plane seats={seats} />
          {/* Right side */}
          <BookingDetails flight={flight} />
        </div>
      ) : (
        <div>Flight not found</div>
      )}
    </div>
  );
}
