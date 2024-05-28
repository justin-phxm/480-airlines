import { type Prisma } from "@prisma/client";
import { getTrendingFlights } from "~/app/actions";
import TrendingFlightCard from "./TrendingFlightCard";
import RandomAirlineImage from "~/app/components/RandomAirlineImage";

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
    <div className="flex w-full flex-col items-start justify-start rounded-2xl bg-white p-4 shadow">
      <h1 className="text-2xl font-bold">Trending Flights</h1>
      <div className="flex w-full flex-row justify-around gap-5">
        {flights.map((flight, index) => (
          <TrendingFlightCard
            customerImages={flight.tickets.map(
              (ticket) => ticket.customer.user.image,
            )}
            key={index}
            imageSrc={<RandomAirlineImage />}
            title={
              flight.departureAirportCode + " to " + flight.arrivalAirportCode
            }
            departureTime={
              formattedFlightTimes[index]?.departureTime ?? "unknown time"
            }
            currentBid={"$" + flight.price}
            flightID={flight.id}
          />
        ))}
      </div>
    </div>
  );
}
