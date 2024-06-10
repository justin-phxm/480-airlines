import { faker } from "@faker-js/faker";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { type Prisma } from "@prisma/client";
import type { Aircraft } from "@prisma/client";
import { readAircrafts } from "~/app/actions";
export default async function CreateFlight() {
  const defaultFlightParams: Prisma.FlightCreateInput = {
    price: 0,
    airline: "",
    arrivalAirportCode: "",
    departureAirportCode: "",
    arrivalCity: "",
    departureCity: "",
    departureTime: new Date(),
    arrivalTime: new Date(),
    aircraft: {
      create: undefined,
      connectOrCreate: undefined,
      connect: undefined,
    },
  };
  const aircrafts = await readAircrafts();
  const uniqueAirlines = new Set<string>();
  while (uniqueAirlines.size < 10) {
    uniqueAirlines.add(faker.airline.airline().name);
  }
  const airlines = Array.from(uniqueAirlines);
  console.log(Object.entries(defaultFlightParams));
  const excludedKeys = ["aircraft", "airline"];
  return (
    <div className=" grid h-fit w-full grid-cols-2 gap-4">
      {Object.entries(defaultFlightParams).map(
        ([key, value]) =>
          !excludedKeys.includes(key) && (
            <TextField
              key={key}
              className="w-full"
              label={key}
              variant="outlined"
              defaultValue={null}
              required
              type={
                typeof value === "number"
                  ? "number"
                  : value instanceof Date
                    ? "datetime-local"
                    : "text"
              }
              InputLabelProps={
                value instanceof Date ? { shrink: true } : undefined
              }
              name={key}
            />
          ),
      )}
      <FormControl>
        <InputLabel id="Aircraft ID">Aircraft ID</InputLabel>
        <Select
          required
          name="aircraftID"
          labelId="aircraftID"
          label="aircraftID"
        >
          {aircrafts.map((aircraft: Aircraft) => (
            <MenuItem key={aircraft.id} value={aircraft.id}>
              {aircraft.name} - {aircraft.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="Airline">Airline</InputLabel>
        <Select required name="airline" labelId="airline" label="airline">
          {airlines.map((airline) => (
            <MenuItem key={airline} value={airline}>
              {airline}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
