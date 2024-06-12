import { Skeleton } from "@mui/material";
import { Suspense } from "react";
import { getServerAuthSession } from "~/server/auth";

export default function PaymentMethod() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-2xl font-bold text-slate-500">Payment method</div>
      <div className=" flex aspect-video max-w-sm flex-col justify-between rounded-2xl bg-gradient-to-b from-pink-500 to-red-400 p-6 text-violet-50 shadow-inner">
        <div className=" text-lg font-semibold">Visa</div>
        <div className="">
          <Suspense fallback={<Skeleton width={"100px"} animation="wave" />}>
            <div className=" text-lg font-semibold">{<CardHolderName />}</div>
          </Suspense>
          <div className=" flex w-full justify-between">
            <div className="flex items-center">
              <span className=" text-xs font-medium tracking-widest ">
                ••••••••••••
              </span>
              <span className=" font-semibold">3456</span>
            </div>
            <div className="text-right font-semibold tracking-wide">10/25</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function CardHolderName() {
  const session = await getServerAuthSession();
  return session?.user.name;
}
