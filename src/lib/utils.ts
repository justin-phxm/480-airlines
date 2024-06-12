import { SeatType } from "@prisma/client";

export const formattedDateTime = (dateTime: Date) =>
  dateTime.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
export const formattedDate = (dateTime: Date) =>
  dateTime.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
export const calculateFlightDuration = (
  arrivalTime: Date,
  departureTime: Date,
) => {
  const flightDuration = arrivalTime.valueOf() - departureTime.valueOf();
  const flightDurationInHours = Math.floor(flightDuration / (1000 * 60 * 60));
  const flightDurationInMinutes = Math.floor(flightDuration / (1000 * 60)) % 60;
  return { flightDurationInHours, flightDurationInMinutes, flightDuration };
};
export const checkIsWindowSeat = (seatCode: string, seatType: SeatType) => {
  return (
    seatCode.includes("1") ||
    seatCode.includes("6") ||
    (seatType === SeatType.FIRST && seatCode.includes("4"))
  );
};
