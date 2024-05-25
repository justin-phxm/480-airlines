import CreateNewEntityForm from "./components/CreateNewEntityForm";
import History from "./components/History";
import TopMembers from "./components/TopMembers";
import TrendingFlights from "./components/TrendingFlights";

export default function page() {
  return (
    <section className="flex flex-1 bg-gradient-to-t from-indigo-300 to-white p-4">
      <div className=" grid w-full grid-cols-3">
        <div className=" col-span-2 bg-red-500">
          <CreateNewEntityForm />
          <TrendingFlights />
        </div>
        <div className=" col-span-1 bg-blue-500">
          <TopMembers />
          <History />
        </div>
      </div>
    </section>
  );
}
