import { TextField } from "@mui/material";
export type DeleteAircraftPayload = {
  aircraftID: string;
};
export default function DeleteAircraft() {
  return (
    <TextField
      className="w-full"
      id="outlined-basic"
      label="Aircraft ID"
      variant="outlined"
      name="aircraftID"
    />
  );
}
