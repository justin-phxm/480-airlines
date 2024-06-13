"use client";
import { type Transaction } from "@prisma/client";
import { type EventDetails, downloadICS, generateICS } from "~/lib/utils";

export default function DownloadCalendar({
  transaction,
}: {
  transaction: Transaction;
}) {
  const flightEvent: EventDetails = {
    title: "Flight to " + transaction.arrivalCity,
    description: `Get ready for an exciting journey to ${transaction.arrivalCity}! Your flight details are as follows:

    - **Departure Airport**: ${transaction.departureAirportCode}
    - **Arrival Airport**: ${transaction.arrivalAirportCode}
    - **Departure Time**: ${transaction.departureTime.toLocaleString("en-US", { timeZone: "America/Denver" })}
    - **Arrival Time**: ${transaction.arrivalTime.toLocaleString("en-US", { timeZone: "America/Denver" })}
    
    **Flight Information**:
    - Flight Number: ${transaction.flightID}
    - Airline: ${transaction.airline}

    **Travel Tips**:
    - Please arrive at the airport at least 2 hours before your departure time.
    - Don't forget to bring your passport and any necessary travel documents.
    - Check-in online to save time at the airport.
    - Keep an eye on the weather at your destination and pack accordingly.
    
    We wish you a pleasant flight and an enjoyable stay in ${transaction.arrivalCity}!
  `,
    location: transaction.arrivalAirportCode,
    departureDate: transaction.departureTime,
    arrivalDate: transaction.arrivalTime,
  };
  const downloadCalendar = () => {
    const icsContent = generateICS(flightEvent);
    downloadICS(icsContent, `480 Airlines - ${flightEvent.title}`);
  };
  return (
    <button
      onClick={downloadCalendar}
      className="w-fit rounded-xl bg-indigo-400 p-4 font-semibold text-white"
    >
      Download Calendar 📅
    </button>
  );
}
