import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { readFlights } from "~/app/actions";
export default async function DeleteFlight() {
  const flights = await readFlights();
  return (
    <div className="grid w-full">
      <FormControl>
        <InputLabel id="flight">Flight</InputLabel>
        <Select
          required
          name="deleteFlightID"
          labelId="deleteFlightID"
          label="deleteFlightID"
        >
          {flights.map((flight) => (
            <MenuItem key={flight.id} value={flight.id}>
              {flight.id}: {flight.departureCity} to {flight.arrivalCity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
