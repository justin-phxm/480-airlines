import { TextField } from "@mui/material";
import React from "react";

export default function EditFlight() {
  return (
    <div className=" grid grid-cols-4 gap-4">
      <div className=" col-span-2 grid gap-2">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Aircraft ID"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Aircraft Name"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Departure Date"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Arrival Date"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </div>
      <div className="col-span-2 grid h-fit gap-2">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="# First Class Seats"
          variant="outlined"
          type="number"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="# of Business Class Seats"
          type="number"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          type="number"
          label="# Economy Class Seats"
          variant="outlined"
        />
      </div>
    </div>
  );
}
