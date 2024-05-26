import { searchCustomers } from "~/app/actions";
import MemberRow from "./MemberRow";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { SeatType } from "@prisma/client";

interface Member {
  username: string;
  flights: number;
  classPercentage: number[];
  imageUrl: string;
}

export default async function TopMembers() {
  const paginatedCustomers = await searchCustomers({});
  const members: Member[] = paginatedCustomers.map((customer) => {
    const totalFlights = customer.transactions.length;
    const firstClass = customer.transactions.filter(
      (transaction) => transaction.seatType === SeatType.FIRST,
    ).length;
    const businessClass = customer.transactions.filter(
      (transaction) => transaction.seatType === SeatType.BUSINESS,
    ).length;
    const economyClass = customer.transactions.filter(
      (transaction) => transaction.seatType === SeatType.ECONOMY,
    ).length;

    return {
      username: customer.user.name,
      flights: customer.transactions.length,
      classPercentage: [
        (economyClass / totalFlights) * 100,
        (firstClass / totalFlights) * 100,
        (businessClass / totalFlights) * 100,
      ],
      imageUrl: customer.user.image,
    };
  });
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 text-sm shadow">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-blue-950">Top Members</div>
        <div className="cursor-pointer rounded-3xl bg-violet-50 px-4 py-2">
          <span className=" font-medium text-indigo-600">See all</span>
        </div>
      </div>
      <Table>
        <TableHead className="text-left">
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Flights</TableHeadCell>
          <TableHeadCell>Classes</TableHeadCell>
        </TableHead>
        <TableBody>
          {members.map((member, index) => (
            <TableRow key={index}>
              <MemberRow {...member} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
