import { TextField } from "@mui/material";
import { type Prisma } from "@prisma/client";
export default function EditFlight() {
  const defaultFlightParams: Prisma.FlightUpdateInput = {
    departureAirportCode: "",
    departureTime: new Date(),
    arrivalAirportCode: "",
    arrivalTime: new Date(),
    departureCity: "",
    aircraft: {
      connect: {
        id: "",
      },
    },
    arrivalCity: "",
    price: 0,
  };
  return (
    <>
      <div className=" font-bold">
        Edit the fields you wish to change, empty fields will remain the same
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TextField
          className="w-full"
          label="flightID"
          variant="outlined"
          type="number"
          name="flightID"
        />
        {Object.entries(defaultFlightParams).map(([key, value]) => (
          <TextField
            key={key}
            className="w-full"
            label={key}
            variant="outlined"
            defaultValue={null}
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
        ))}
      </div>
    </>
  );
}
