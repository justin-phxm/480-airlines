import { TextField } from "@mui/material";

export default function CreateFlight() {
  return (
    <div className=" grid grid-cols-4 gap-4">
      <div className="col-span-2 grid h-fit gap-2">
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
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Base Price"
          variant="outlined"
          type="number"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Aircraft ID"
          type="text"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Airline"
          type="text"
          variant="outlined"
        />
      </div>
      <div className="col-span-2 grid h-fit gap-2">
        <TextField
          id="outlined-basic"
          type="text"
          className="w-full"
          label="Arrival Airport Code"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="text"
          className="w-full"
          label="Departure Airport Code"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="text"
          className="w-full"
          label="Arrival City"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="text"
          className="w-full"
          label="Departure City"
          variant="outlined"
        />
      </div>
    </div>
  );
}
