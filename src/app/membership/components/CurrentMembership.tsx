import { Suspense } from "react";
import BenefitList from "./BenefitList";

export default function CurrentMembership() {
  return (
    <Suspense fallback={"Loading..."}>
      <BenefitList />
    </Suspense>
  );
}
