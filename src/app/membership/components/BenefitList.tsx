import { upgradeMembership } from "~/app/actions";
import { getServerAuthSession } from "~/server/auth";
export type BenefitParams = {
  userID: string;
  benefit: string;
};
export default async function BenefitList() {
  const session = await getServerAuthSession();
  if (!session) return null;
  const { isMember, flightCoupon, loungeDiscount, newsletter } =
    session.user.customerInformation;
  if (!isMember) return null;
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const formFields = Object.fromEntries(
      formData.entries(),
    ) as unknown as BenefitParams;
    console.log(formFields);
    await upgradeMembership(formFields);
  };

  const SignupButton = ({ name }: { name: string }) => {
    return (
      <form action={handleSubmit}>
        <input
          type="text"
          name="userID"
          value={session.user.id}
          className="hidden"
        />
        <input type="text" name="benefit" value={name} className="hidden" />
        <button className="rounded-lg bg-blue-700 p-1 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ">
          Sign up
        </button>
      </form>
    );
  };
  type MembershipField = {
    benefit: string;
    benefitValue: boolean;
    name: string;
  };
  const membershipFields: MembershipField[] = [
    {
      benefit: "Free Annual Companion Ticket",
      benefitValue: flightCoupon,
      name: "flightCoupon",
    },
    {
      benefit: "Monthly Promotion Newsletter",
      benefitValue: newsletter,
      name: "newsletter",
    },
    {
      benefit: "Lounge Discount",
      benefitValue: loungeDiscount,
      name: "loungeDiscount",
    },
    // TODO: update company credit card to be a benefit
    // { benefit: "Company Credit Card", benefitValue: false, name: "creditCard" },
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
            {!field.benefitValue ? (
              <SignupButton name={field.name} />
            ) : (
              <button className="rounded-lg bg-blue-700 p-1 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ">
                Claimed!
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
