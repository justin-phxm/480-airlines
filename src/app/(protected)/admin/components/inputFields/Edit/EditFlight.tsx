import { TextField } from "@mui/material";
import React from "react";
import { type EditFlightParams } from "~/app/actions";
export default function EditFlight() {
  const defaultFlightParams: EditFlightParams = {
    flightID: 0,
    departureAirportCode: "",
    departureTime: new Date(),
    arrivalAirportCode: "",
    arrivalTime: new Date(),
    departureCity: "",
    aircraftID: "",
    arrivalCity: "",
    price: 0,
  };
  return (
    <>
      <div className=" font-bold">
        Edit the fields you wish to change, empty fields will remain the same
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(defaultFlightParams).map(([key, value]) => (
          <TextField
            key={key}
            className="w-full"
            id="outlined-basic"
            label={key}
            variant="outlined"
            type={
              typeof value === "number"
                ? "number"
                : value instanceof Date
                  ? "datetime-local"
                  : "text"
            }
            InputLabelProps={{ shrink: value instanceof Date }}
            name={key}
          />
        ))}
      </div>
    </>
  );
}
