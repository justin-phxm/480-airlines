import { signupMembership } from "~/app/actions";
import { getServerAuthSession } from "~/server/auth";

export default async function CurrentMembershipDetails() {
  const session = await getServerAuthSession();
  const MailImage = () => (
    <div className="pointer-events-none flex items-center bg-slate-300 p-4">
      <svg
        className=" size-6 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 16"
      >
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
      </svg>
    </div>
  );
  const handleSubmit = async (formData: FormData) => {
    "use server";
    let userID = formData.get("userID");
    if (!userID) {
      console.error("No user ID found");
      return;
    }
    userID = String(userID);
    await signupMembership({ userID: userID });
  };
  let email, isMember, userID;
  if (session?.user.email) {
    email = session.user.email;
  }
  if (session?.user.customerInformation.isMember) {
    isMember = session.user.customerInformation.isMember;
  }
  if (session?.user.id) {
    userID = session.user.id;
  }
  return (
    <div className="flex w-full max-w-lg flex-1 flex-row rounded outline outline-slate-400 ">
      <label htmlFor="email">
        <MailImage />
      </label>
      <input
        id="email"
        type="text"
        placeholder={email ? email : "Please make sure you are logged in"}
        className={`flex-1 truncate px-2 focus:outline-blue-500 `}
        disabled
      />
      <form action={handleSubmit} className="p-2">
        <input type="text" className="hidden" name="userID" value={userID} />
        <button
          type="submit"
          disabled={session?.user.customerInformation.isMember}
          className={` rounded-lg p-2 text-white ${isMember ? "bg-gradient-to-l from-yellow-300 to-yellow-400" : "bg-blue-700"}`}
        >
          {isMember ? "🌟" : "Sign up"}
        </button>
      </form>
    </div>
  );
}
