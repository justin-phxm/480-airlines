"use client";

import Button from "@mui/material/Button";

export default function CancelSeats() {
  return (
    <Button
      color="secondary"
      onClick={() => window.location.reload()}
      variant="outlined"
      className=" border-violet-500 text-lg font-bold normal-case text-violet-500"
    >
      Cancel
    </Button>
  );
}
