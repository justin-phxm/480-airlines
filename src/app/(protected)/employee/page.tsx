import { Suspense } from "react";
import ModifyEntityForm from "@/(protected)/components/ModifyEntityForm";
import TrendingFlights from "@/(protected)/components/TrendingFlights";
import { Skeleton } from "@mui/material";
import { Role } from "@prisma/client";
export const revalidate = 300;
export default function page() {
  return (
    <section className="flex flex-1 flex-col gap-4 bg-gradient-to-t from-indigo-300 to-white p-4">
      <Suspense fallback={<Skeleton />}>
        <ModifyEntityForm permission={Role.EMPLOYEE} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <TrendingFlights />
      </Suspense>
    </section>
  );
}
