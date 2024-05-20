import { type Seat } from "@prisma/client";
import { useFlight } from "../FlightContext";
import { Button } from "@mui/material";

export default function ChosenSeatItem({
  seat,
  index,
}: {
  seat: Seat;
  index: number;
}) {
  const priceMultiplier =
    seat.seatType === "FIRST" ? 1.5 : seat.seatType === "BUSINESS" ? 1.25 : 1;
  const { flight, setChosenSeats } = useFlight();
  const seatPrice = flight.price * priceMultiplier;
  return (
    <li
      data-aos="fade-right"
      className="flex w-full flex-row items-center justify-between border-b bg-opacity-50 p-4 backdrop-blur-xl transition-opacity"
    >
      {
        <input
          type="text"
          className="hidden"
          name={seat.seatCode}
          value={seatPrice.toFixed(2)}
        />
      }
      <div>{index + 1}.</div>
      <div className="flex flex-col">
        <p className="font-light">Seat Type</p>
        <div className=" font-bold">{seat.seatType}</div>
      </div>
      <div className="flex flex-col">
        <p className=" font-light">Seat Code</p>
        <div className=" font-bold">{seat.seatCode}</div>
      </div>
      <div className="flex flex-col">
        <p className="font-light">Price</p>
        <div className=" font-bold">${seatPrice.toFixed(2)}</div>
      </div>
      <Button
        color="error"
        onClick={() =>
          setChosenSeats((prevChosenSeats) =>
            prevChosenSeats.filter(
              (chosenSeat) => chosenSeat.seatCode !== seat.seatCode,
            ),
          )
        }
        className=" flex items-center justify-center normal-case"
      >
        Remove
      </Button>
    </li>
  );
}
