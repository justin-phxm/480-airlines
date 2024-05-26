import { TextField } from "@mui/material";

export default function CreateAircraft() {
  return (
    <div className=" grid grid-cols-4 gap-4">
      <div className=" col-span-2 grid gap-2">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Aircraft Name"
          variant="outlined"
        />

        <TextField
          className="w-full"
          id="outlined-basic"
          label="# of Business Class Seats"
          type="number"
          variant="outlined"
        />
      </div>
      <div className="col-span-2 grid gap-2">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="# First Class Seats"
          variant="outlined"
          type="number"
        />
        <TextField
          id="outlined-basic"
          type="number"
          className="w-full"
          label="# Economy Class Seats"
          variant="outlined"
        />
      </div>
    </div>
  );
}
