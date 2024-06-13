import { SeatType } from "@prisma/client";
import { SEATMODIFIERS, TAXRATE } from "./constants";

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
export const formattedTime = (dateTime: Date) =>
  dateTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
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
export const calculatePrice = (
  basePrice: number,
  seatClass: SeatType,
  taxRate = TAXRATE,
) => {
  const seatUpcharge = SEATMODIFIERS[seatClass] * basePrice - basePrice;
  const subTotal = basePrice + seatUpcharge;
  const taxes = subTotal * taxRate - subTotal;
  const total = subTotal + taxes;
  return { basePrice, seatUpcharge, subTotal, taxes, total };
};
export function generateICS(event: EventDetails): string {
  const { title, description, location, departureDate, arrivalDate } = event;

  const convertToCalgaryTime = (date: Date) => {
    // Calculate the current timezone offset for Calgary (Mountain Time)
    const calgaryTimeOffset = -7; // MST (UTC-7)
    const calgaryDate = new Date(date);
    const offsetDate = new Date(
      calgaryDate.setHours(calgaryDate.getHours() + calgaryTimeOffset),
    );
    return offsetDate;
  };

  const formatDate = (date: Date) => {
    const localDate = convertToCalgaryTime(date);
    return localDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  return `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//Your Product//EN
BEGIN:VEVENT
UID:${new Date().toISOString()}@yourdomain.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(departureDate)}
DTEND:${formatDate(arrivalDate)}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
`.trim();
}
export function downloadICS(icsContent: string, filename: string): void {
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
export interface EventDetails {
  title: string;
  description: string;
  location: string;
  departureDate: Date;
  arrivalDate: Date;
}
