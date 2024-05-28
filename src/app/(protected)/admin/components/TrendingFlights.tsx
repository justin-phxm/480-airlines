import { type Prisma } from "@prisma/client";
import { getTrendingFlights } from "~/app/actions";
import TrendingFlightCard from "./TrendingFlightCard";

export default async function TrendingFlights() {
  const flights: Prisma.FlightGetPayload<{
    include: {
      tickets: {
        select: {
          customer: {
            select: {
              user: { select: { image: true } };
            };
          };
        };
      };
    };
  }>[] = await getTrendingFlights();
  const formattedFlightTimes = flights.map((flight) => ({
    departureTime: new Date(flight.departureTime).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
  }));
  return (
    <div className=" flex w-full flex-col items-start justify-start rounded-2xl bg-white p-4">
      <h1 className="text-2xl font-bold">Trending Flights</h1>
      <div className="flex gap-5">
        {flights.map((flight, index) => (
          <TrendingFlightCard
            customerImages={flight.tickets.map(
              (ticket) => ticket.customer.user.image,
            )}
            key={index}
            imageSrc={"https://via.placeholder.com/208x126"}
            title={
              flight.departureAirportCode + " -> " + flight.arrivalAirportCode
            }
            departureTime={
              formattedFlightTimes[index]?.departureTime ?? "unknown time"
            }
            currentBid={"$" + flight.price}
          />
        ))}
      </div>
    </div>
  );
}
