"use client";

import { formattedTime } from "~/lib/utils";

export default function LastUpdated() {
  return (
    <div className=" font-light italic">
      Last updated: {formattedTime(new Date())}
    </div>
  );
}
