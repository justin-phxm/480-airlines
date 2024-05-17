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

  function padSeats<T>(array: T[]): (T | undefined)[] {
    const paddedSeats: (T | undefined)[] = [...array];
    while (paddedSeats.length !== seatsPerRow / 2) {
      paddedSeats.push(undefined);
    }
    return paddedSeats;
  }
  return (
    <>
      {Array.from({
        length: numRows,
      }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="inline-flex items-center justify-between gap-1 self-stretch bg-white p-1"
        >
          {padSeats(
            seats.slice(
              rowIndex * seatsPerRow,
              rowIndex * seatsPerRow + Math.ceil(seatsPerRow / 2),
            ),
          ).map((seat, index) =>
            seat ? (
              <PlaneSeat seat={seat} seatType={seatType} key={index} />
            ) : (
              <div className="h-10 w-7" key={index} />
            ),
          )}

          <div className="inline-flex size-8 flex-col justify-center text-center text-sm text-slate-400">
            {rowIndex + 1}
          </div>
          {padSeats(
            seats.slice(
              rowIndex * seatsPerRow + Math.ceil(seatsPerRow / 2),
              rowIndex * seatsPerRow + seatsPerRow,
            ),
          ).map((seat, index) =>
            seat ? (
              <PlaneSeat seat={seat} seatType={seatType} key={index} />
            ) : (
              <div className="h-10 w-7" key={index} />
            ),
          )}
        </div>
      ))}
    </>
  );
}
