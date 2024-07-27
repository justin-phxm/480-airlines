import { redirect } from "next/navigation";
import { DateIcon, DestinationIcon, OriginIcon } from "~/lib/icons";

type InputField = {
  name: string;
  inputType: string;
  placeholder?: string;
  icon?: JSX.Element;
  defaultValue?: string;
  maxLength?: number;
};

export default function Searchbar() {
  const roundToNearestHour = (date: Date): Date => {
    const minutes = date.getMinutes();
    if (minutes >= 30) {
      date.setHours(date.getHours() + 1);
    }
    date.setMinutes(0, 0, 0);
    return date;
  };

  const getFutureDate = (date: Date, days: number): Date => {
    const futureDate = new Date(date);
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  };
  async function handleSubmit(formData: FormData) {
    "use server";
    const rawFormData = Object.fromEntries(formData.entries());
    const { origin, destination, date, time } = rawFormData;
    const searchInput = {
      origin: String(origin),
      destination: String(destination),
      date: String(date),
      time: String(time),
    };
    redirect(
      `/flights?origin=${searchInput.origin}&destination=${searchInput.destination}&date=${searchInput.date}&time=${searchInput.time}`,
    );
  }
  const INPUT_STYLES =
    "flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5  text-gray-900 focus:outline-indigo-500";
  const LABEL_STYLES =
    "rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400";
  const inputFields: InputField[] = [
    {
      name: "origin",
      inputType: "text",
      placeholder: "From where?",
      icon: OriginIcon,
      maxLength: 50,
    },
    {
      name: "destination",
      inputType: "text",
      placeholder: "Where to?",
      icon: DestinationIcon,
      maxLength: 50,
    },
    {
      name: "date",
      placeholder: "Depart - Return",
      icon: DateIcon,
      inputType: "date",
      defaultValue: getFutureDate(new Date(), 7).toISOString().split("T")[0],
    },
    {
      name: "time",
      placeholder: "Depart - time",
      inputType: "time",
      icon: DateIcon,
      defaultValue: roundToNearestHour(new Date())
        .toISOString()
        .split("T")[1]
        ?.slice(0, 5),
    },
  ];
  return (
    <form
      action={handleSubmit}
      data-aos="fade-up"
      className="flex flex-col items-center justify-center gap-1"
    >
      <ul className="flex flex-row flex-wrap items-center justify-center">
        {inputFields.map((field) => (
          <li key={field.name} className="flex">
            <label htmlFor={field.name} className={LABEL_STYLES}>
              {field.icon}
            </label>
            <input
              maxLength={field.maxLength}
              id={field.name}
              type={field.inputType}
              name={field.name}
              placeholder={field.placeholder}
              className={INPUT_STYLES}
              defaultValue={field.defaultValue}
            />
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className=" rounded  bg-indigo-500 px-8 py-3 text-lg text-white hover:opacity-70"
      >
        Book your trip
      </button>
    </form>
  );
}
