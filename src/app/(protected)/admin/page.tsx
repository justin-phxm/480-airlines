import CreateNewEntityForm from "./components/CreateNewEntityForm";
import History from "./components/History";
import TopMembers from "./components/TopMembers";
import TrendingFlights from "./components/TrendingFlights";

export default function page() {
  return (
    <section className="flex flex-1 bg-gradient-to-t from-indigo-300 to-white p-4">
      <div className=" grid w-full grid-cols-3 gap-4">
        <div className=" col-span-2 flex flex-col gap-4">
          <CreateNewEntityForm />
          <TrendingFlights />
        </div>
        <div className=" col-span-1 flex flex-col gap-4">
          <TopMembers />
          <History />
        </div>
      </div>
    </section>
  );
}
