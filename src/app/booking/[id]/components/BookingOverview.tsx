function FlightCard() {
  return (
    <div className="inline-flex  items-start justify-start gap-2 rounded-lg bg-gradient-to-r from-yellow-200 to-white p-2.5">
      <div className="flex h-10 w-10 items-center justify-center">
        <img className="h-10 w-10" src="https://via.placeholder.com/40x40" />
      </div>
      <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
        <div className="text-sm font-normal text-slate-400">First Class</div>
        <div className="text-base font-bold text-slate-800">Seat Code: B4</div>
      </div>
      <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
        <div className="text-right text-base font-normal text-slate-800">
          $1070
        </div>
        <div className="text-right text-base font-normal text-slate-800">
          7:00 AM - 4:15 PM
        </div>
      </div>
    </div>
  );
}

export default function BookingOverview() {
  return (
    <section className="flex h-full min-h-full flex-col justify-between gap-4 font-bold">
      <div className="flex max-h-80 flex-1 flex-col gap-2 overflow-y-auto">
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
      <div className="flex w-full flex-row justify-between text-end">
        <div className="">Flight base price</div>
        <div className=" font-normal">$100</div>
      </div>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col text-end">
          <div className="">Subtotal</div>
          <div className="">Taxes and Fees</div>
          <div className="">Total</div>
        </div>
        <div className="flex flex-col text-end font-normal">
          <div className="">$200</div>
          <div className="">$200</div>
          <div className="">$200</div>
        </div>
      </div>
    </section>
  );
}
