import { Suspense } from "react";
import CreateNewEntityForm from "./components/ModifyEntityForm";
import History from "./components/History";
import TopMembers from "./components/TopMembers";
import TrendingFlights from "./components/TrendingFlights";
import { Skeleton } from "@mui/material";
export const revalidate = 300;
export default function page() {
  return (
    <section className="flex flex-1 bg-gradient-to-t from-indigo-300 to-white p-4">
      <div className=" grid w-full grid-cols-3 gap-4">
        <div className=" col-span-2 flex flex-col gap-4">
          <Suspense fallback={<Skeleton />}>
            <CreateNewEntityForm />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <TrendingFlights />
          </Suspense>
        </div>
        <div className=" col-span-1 grid grid-flow-row grid-rows-2 flex-col gap-4">
          <Suspense fallback={<Skeleton />}>
            <TopMembers />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <History />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
