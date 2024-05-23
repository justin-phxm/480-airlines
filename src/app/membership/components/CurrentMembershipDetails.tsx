export default function CurrentMembershipDetails() {
  const MailImage = () => (
    <div className="pointer-events-none flex items-center bg-slate-300 p-4">
      <svg
        className="h-4 w-4 text-gray-500 dark:text-gray-400"
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

  return (
    <div className="flex max-w-md rounded outline outline-slate-400 ">
      <label htmlFor="email">
        <MailImage />
      </label>
      <input
        id="email"
        type="text"
        placeholder="Bonnie Green"
        className="px-2 focus:outline-blue-500"
      />
    </div>
  );
}
