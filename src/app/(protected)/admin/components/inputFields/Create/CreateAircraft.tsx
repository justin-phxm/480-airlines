import { TextField } from "@mui/material";
export type CreateAircraftPayload = {
  aircraftName: string;
  businessClassSeats: number;
  firstClassSeats: number;
  economyClassSeats: number;
};
export default function CreateAircraft() {
  return (
    <div className=" grid h-fit w-full grid-cols-4 gap-4">
      <div className=" col-span-2 grid gap-2">
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
          label="# of Business Class Seat Rows"
          type="number"
          variant="outlined"
          name="businessClassSeats"
        />
      </div>
      <div className="col-span-2 grid gap-2">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="# of First Class Seats Rows"
          variant="outlined"
          type="number"
          name="firstClassSeats"
        />
        <TextField
          id="outlined-basic"
          type="number"
          className="w-full"
          label="# of Economy Class Seats Rows"
          variant="outlined"
          name="economyClassSeats"
        />
      </div>
    </div>
  );
}
