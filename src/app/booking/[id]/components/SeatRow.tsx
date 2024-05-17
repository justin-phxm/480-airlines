import { SeatType, type Seat } from "@prisma/client";
import PlaneSeat from "./PlaneSeat";

export default function SeatRow({
  seats,
  seatsPerRow = 6,
  seatType = SeatType.ECONOMY,
}: {
  seats: Seat[];
  seatsPerRow?: number;
  seatType?: SeatType;
}) {
  const numRows = Math.ceil(seats.length / seatsPerRow);
  return (
    <>
      {Array.from({
        length: numRows,
      }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="inline-flex items-center justify-between gap-1 self-stretch bg-white p-1"
        >
          {/* Render first seats */}
          {seats
            .slice(
              rowIndex * seatsPerRow,
              rowIndex * seatsPerRow + seatsPerRow / 2,
            )
            .map((seat, index) => (
              <PlaneSeat seat={seat} seatType={seatType} key={index} />
            ))}

          {/* Row Number */}
          <div className="inline-flex h-8 w-7 flex-col items-center justify-center">
            <div className="h-8 w-7 text-center text-sm font-normal text-slate-400">
              {rowIndex + 1}
            </div>
          </div>

          {/* Render second seats */}
          {seats
            .slice(
              rowIndex * seatsPerRow + seatsPerRow / 2,
              rowIndex * seatsPerRow + seatsPerRow,
            )
            .map((seat, index) => (
              <PlaneSeat seat={seat} seatType={seatType} key={index} />
            ))}
        </div>
      ))}
    </>
  );
}
