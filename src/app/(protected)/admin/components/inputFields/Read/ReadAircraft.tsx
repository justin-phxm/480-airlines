import { type Aircraft } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { readAircrafts } from "~/app/actions";

function AircraftCard({ aircraft }: { aircraft: Aircraft }) {
  return (
    <>
      <TableCell>
        <h1>{aircraft.name}</h1>
      </TableCell>
      <TableCell>
        <p>{aircraft.id}</p>
      </TableCell>
    </>
  );
}
export default async function ReadAircraft() {
  const aircrafts = await readAircrafts();
  return (
    <div className="max-h-96 overflow-y-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>ID</TableHeadCell>
        </TableHead>
        <TableBody>
          {aircrafts.map((aircraft) => (
            <TableRow key={aircraft.id}>
              <AircraftCard key={aircraft.id} aircraft={aircraft} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
