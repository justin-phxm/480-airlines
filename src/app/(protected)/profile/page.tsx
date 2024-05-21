import { Suspense } from "react";
import OrderHistory from "./Components/OrderHistory";
import Heading from "./Heading";
import Skeleton from "@mui/material/Skeleton";

export default function page() {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-t from-indigo-300 to-white py-12">
      <div className="flex w-full max-w-7xl flex-col gap-4">
        <Suspense fallback={<h1 className=" text-xl font-bold">Welcome</h1>}>
          <Heading />
        </Suspense>
        <div className=" gap-4 rounded py-2">
          <h1 className="font-bold">
            {"Order History  "}
            <span className="text-sm font-normal">
              -- Click on a flight to cancel
            </span>
          </h1>
          <Suspense fallback={<Skeleton variant="rounded" height={118} />}>
            <OrderHistory />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
