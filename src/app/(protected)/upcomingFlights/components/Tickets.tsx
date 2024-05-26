import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { getCustomerWithTickets } from "~/server/db";
import TicketRow from "./TicketRow";

export default async function Tickets() {
  const session = await getServerAuthSession();
  if (!session) {
    return <div>Not authenticated</div>;
  }
  const user = await getCustomerWithTickets(session.user.id);
  const currentDate = new Date();
  const tickets = user?.tickets.filter(
    (ticket) => ticket.flight.departureTime > currentDate,
  );
  if (!tickets || tickets.length === 0) {
    return <div>No Tickets found</div>;
  }

  return (
    <ul className="inline-flex w-full flex-col gap-4 rounded-lg border border-violet-100 bg-white p-4">
      {tickets.map((ticket, index) => (
        <TicketRow ticket={ticket} key={index} />
      ))}
    </ul>
  );
}
