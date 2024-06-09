import { TextField } from "@mui/material";
import React from "react";
export type EditAircraftPayload = {
  aircraftID: string;
  aircraftName: string;
  businessClassSeats: number;
  firstClassSeats: number;
  economyClassSeats: number;
};
export default function EditAircraft() {
  return (
    <div className=" grid w-full grid-cols-4 gap-4">
      <div className=" col-span-2 grid h-fit gap-2">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Aircraft ID"
          variant="outlined"
          name="aircraftID"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Aircraft Name"
          variant="outlined"
          name="aircraftName"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="# of Business Class Seats"
          type="number"
          variant="outlined"
          name="businessClassSeats"
        />
      </div>
      <div className="col-span-2 grid h-fit gap-2">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="# First Class Seats"
          variant="outlined"
          type="number"
          name="firstClassSeats"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          type="number"
          label="# Economy Class Seats"
          variant="outlined"
          name="economyClassSeats"
        />
      </div>
    </div>
  );
}
