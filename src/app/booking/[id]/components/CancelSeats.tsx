"use client";

export default function CancelSeats() {
  return (
    <button
      onClick={() => window.location.reload()}
      className=" mr-4 rounded border border-violet-500 p-2 text-lg font-bold text-violet-500"
    >
      Cancel
    </button>
  );
}
