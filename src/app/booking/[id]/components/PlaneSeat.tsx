import { type Seat, SeatType } from "@prisma/client";
import SeatUnit from "./SeatUnit";

export enum SeatColor {
  SELECTED = "from-indigo-300 to-indigo-500",
  AVAILABLE = "from-emerald-300 to-teal-500",
  ECONOMY = "from-emerald-300 to-emerald-500",
  BUSINESS = "from-indigo-200 to-indigo-400",
  FIRST = "from-yellow-300 to-yellow-500",
  UNAVAILABLE = "from-violet-100 to-violet-100",
}
export default function Seat({
  seat,
  selectedSeat,
  seatType = SeatType.ECONOMY,
}: {
  seat: Seat;
  selectedSeat?: Seat;
  seatType?: SeatType;
}) {
  const isSelected = selectedSeat && selectedSeat.seatCode === seat.seatCode;
  const isAvailable = seat.available;
  const isFirstClass = seatType === SeatType.FIRST;

  const seatColor = (() => {
    if (!isAvailable) {
      return SeatColor.UNAVAILABLE;
    }
    if (isSelected) {
      return SeatColor.SELECTED;
    }
    if (isFirstClass) {
      return SeatColor.FIRST;
    }
    return SeatColor.AVAILABLE;
  })();

  return <SeatUnit seat={seat} seatColor={seatColor} />;
}
