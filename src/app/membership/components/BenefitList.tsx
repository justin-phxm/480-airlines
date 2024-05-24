import { getServerAuthSession } from "~/server/auth";

export default async function BenefitList() {
  const session = await getServerAuthSession();
  if (!session) return null;
  const { isMember, flightCoupon, loungeDiscount, newsletter } =
    session.user.customerInformation;
  if (!isMember) return null;
  const SignupButton = () => {
    return (
      <button className="rounded-lg bg-blue-700 p-1 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ">
        Sign up
      </button>
    );
  };
  const membershipFields = [
    { benefit: "Free Annual Companion Ticket", value: flightCoupon },
    { benefit: "Monthly Promotion Newsletter", value: newsletter },
    { benefit: "Lounge Discount", value: loungeDiscount },
    { benefit: "Company Credit Card", value: false },
  ];
  return (
    <div className="w-full max-w-md rounded-xl border border-slate-400 p-2">
      <p className="text-lg font-bold">Your Current Membership:</p>
      <ul className="flex flex-col gap-2">
        {membershipFields.map((field) => (
          <li
            key={field.benefit}
            className="flex w-full flex-row items-center justify-between gap-4"
          >
            <p className=" italic">{field.benefit}</p>
            {!field.value ? <SignupButton /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
