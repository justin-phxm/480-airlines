import MemberRow from "./MemberRow";

interface Member {
  username: string;
  flights: number;
  classPercentage: number[];
  imageUrl: string;
}

export default function TopMembers() {
  const members: Member[] = [
    {
      username: "@Mark Benjamin",
      flights: 9821,
      classPercentage: [40, 30, 30],
      imageUrl: "https://via.placeholder.com/30x30",
    },
    {
      username: "@karl.will02",
      flights: 7032,
      classPercentage: [60, 30, 10],
      imageUrl: "https://via.placeholder.com/30x30",
    },
    {
      username: "@andreea.1z",
      flights: 5204,
      classPercentage: [50, 40, 10],
      imageUrl: "https://via.placeholder.com/30x30",
    },
    {
      username: "@abraham47.y",
      flights: 4309,
      classPercentage: [70, 20, 10],
      imageUrl: "https://via.placeholder.com/30x30",
    },
    {
      username: "@simmmple.web",
      flights: 3871,
      classPercentage: [55, 30, 15],
      imageUrl: "https://via.placeholder.com/30x30",
    },
    {
      username: "@venus.sys",
      flights: 3152,
      classPercentage: [65, 20, 15],
      imageUrl: "https://via.placeholder.com/30x30",
    },
    {
      username: "@ape.vpp8",
      flights: 2907,
      classPercentage: [80, 20],
      imageUrl: "https://via.placeholder.com/30x30",
    },
    {
      username: "@leon_pwrr",
      flights: 2309,
      classPercentage: [85, 15],
      imageUrl: "https://via.placeholder.com/30x30",
    },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 text-sm shadow">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-blue-950">Top Members</div>
        <div className="cursor-pointer rounded-3xl bg-violet-50 px-4 py-2">
          <span className=" font-medium text-indigo-600">See all</span>
        </div>
      </div>
      <div className=" flex justify-between font-medium text-slate-400">
        <div>Name</div>
        <div>Flights</div>
        <div>Class</div>
      </div>
      {members.map((member, index) => (
        <MemberRow key={index} {...member} />
      ))}
    </div>
  );
}
