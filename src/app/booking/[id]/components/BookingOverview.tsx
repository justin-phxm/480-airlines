import { type Seat } from "@prisma/client";
import { useFlight } from "../FlightContext";
import { calculatePrice, formattedTime } from "~/lib/utils";
import PlaneIcon from "~/app/components/PlaneIcon";
import { TAXRATE, TicketColor } from "~/lib/constants";

export default function BookingOverview() {
  const { chosenSeats, flight } = useFlight();
  const formattedDepartureTime = formattedTime(flight.departureTime);
  const formattedArrivalTime = formattedTime(flight.arrivalTime);
  function FlightCard({ seat }: { seat: Seat }) {
    const ticketColor = TicketColor[seat.seatType];
    const { basePrice, seatUpcharge } = calculatePrice(
      flight.price,
      seat.seatType,
    );
    return (
      <div
        data-aos="fade-right"
        className={
          "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r p-2.5 " +
          ticketColor
        }
      >
        <PlaneIcon />
        <div className="flex-1 flex-col gap-1">
          <div className="text-sm font-normal capitalize text-slate-400">
            {seat.seatType.toLowerCase()} Class
          </div>
          <div className="font-bold text-black">Seat Code: {seat.seatCode}</div>
        </div>
        <div className="flex flex-1 flex-col gap-1 text-right font-normal text-black">
          <p className=" whitespace-nowrap">
            $({basePrice.toFixed(2)} + {seatUpcharge.toFixed(2)})
          </p>
          <p>
            {formattedDepartureTime} - {formattedArrivalTime}
          </p>
        </div>
      </div>
    );
  }

  const subTotal = chosenSeats.reduce(
    (acc, seat) => acc + calculatePrice(flight.price, seat.seatType).subTotal,
    0,
  );

  const taxesAndFees = subTotal * TAXRATE - subTotal;
  const total = subTotal + taxesAndFees;
  return (
    <section className="flex h-full min-h-full flex-col justify-between gap-4 font-bold">
      <div className="flex max-h-80 flex-1 flex-col gap-2 overflow-y-auto">
        {chosenSeats.map((seat, index) => (
          <FlightCard key={index} seat={seat} />
        ))}
      </div>
      <div className="flex w-full flex-row justify-between text-end">
        <div className="">Flight base price</div>
        <div className=" font-normal">${flight.price.toFixed(2)}</div>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col text-end">
          <div className="">Subtotal</div>
          <div className="">Taxes and Fees</div>
          <div className="">Total</div>
        </div>
        <div className="flex flex-col text-end font-normal">
          <div className="">${subTotal.toFixed(2)}</div>
          <div className="">${taxesAndFees.toFixed(2)}</div>
          <div className="">${total.toFixed(2)}</div>
        </div>
      </div>
    </section>
  );
}
