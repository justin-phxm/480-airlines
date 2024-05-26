import { TextField } from "@mui/material";
export type DeleteFlightPayload = {
  flightID: string;
};
export default function DeleteFlight() {
  return (
    <TextField
      className="w-full"
      id="outlined-basic"
      label="Flight ID"
      variant="outlined"
      name="flightID"
    />
  );
}
