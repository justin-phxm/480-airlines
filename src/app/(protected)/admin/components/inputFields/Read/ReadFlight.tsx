import { type Flight } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { readFlights } from "~/app/actions";

function FlightCard({ flight }: { flight: Flight }) {
  const fields = Object.values(flight);
  return (
    <>
      {fields.map((field, index) => (
        <TableCell key={index}>
          <h1>
            {field instanceof Date
              ? field.toDateString()
              : typeof field === "number"
                ? `$${field.toFixed(2)}`
                : field}
          </h1>
        </TableCell>
      ))}
    </>
  );
}
export default async function ReadFlight() {
  const flights = await readFlights();
  const flightKeys = flights[0] ? Object.keys(flights[0]) : [];
  function addSpacesBeforeCapitals(text: string): string {
    return text.replace(/([A-Z])/g, " $1").trim();
  }
  flightKeys.forEach((key, index) => {
    flightKeys[index] = addSpacesBeforeCapitals(key);
  });
  return (
    <div className="max-h-96 overflow-y-auto">
      <Table>
        <TableHead>
          {flightKeys.map((key, index) => (
            <TableHeadCell key={index}>{key}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {flights.map((flight) => (
            <TableRow key={flight.id}>
              <FlightCard flight={flight} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
