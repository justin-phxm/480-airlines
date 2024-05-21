import { type Seat } from "@prisma/client";
import { useFlight } from "../FlightContext";

enum TicketColor {
  FIRST = "from-yellow-300 to-yellow-500/50",
  BUSINESS = "from-violet-300 to-violet-100/50",
  ECONOMY = "from-emerald-300 to-teal-500/50",
}

export default function BookingOverview() {
  const { chosenSeats, flight } = useFlight();
  const formattedDepartureTime = new Date(flight.departureTime).toLocaleString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
    },
  );
  const formattedArrivalTime = new Date(flight.arrivalTime).toLocaleString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
    },
  );
  function FlightCard({ seat }: { seat: Seat }) {
    const planeIcon = (
      <div className="my-auto flex h-10 w-10 items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clipRule="evenodd"
            d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08964 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z"
            fill="#6E7491"
          />
        </svg>
      </div>
    );
    const ticketColor = TicketColor[seat.seatType];
    const ticketPrice =
      flight.price * { FIRST: 1.5, BUSINESS: 1.25, ECONOMY: 1 }[seat.seatType];
    return (
      <div
        data-aos="fade-right"
        className={
          "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r p-2.5 " +
          ticketColor
        }
      >
        {planeIcon}
        <div className="flex-1 flex-col gap-1">
          <div className="text-sm font-normal capitalize text-slate-400">
            {seat.seatType.toLowerCase()} Class
          </div>
          <div className="font-bold text-black">Seat Code: {seat.seatCode}</div>
        </div>
        <div className="flex flex-1 flex-col gap-1 text-right font-normal text-black">
          <p>${ticketPrice.toFixed(2)}</p>
          <p>
            {formattedDepartureTime} - {formattedArrivalTime}
          </p>
        </div>
      </div>
    );
  }

  const subTotal = chosenSeats.reduce(
    (acc, seat) =>
      acc +
      flight.price * { FIRST: 1.5, BUSINESS: 1.25, ECONOMY: 1 }[seat.seatType],
    0,
  );
  const taxesAndFees = subTotal * 0.05;
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
        <div className=" font-normal">${flight.price}</div>
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
