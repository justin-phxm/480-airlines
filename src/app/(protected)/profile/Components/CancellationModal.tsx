"use client";

export default function CancellationModal({
  isModalOpen,
  handleCancelClick,
  handleCancelFlight,
  transactionID,
}: {
  isModalOpen?: boolean;
  handleCancelClick?: () => void;
  handleCancelFlight?: () => void;
  transactionID?: number | undefined;
}) {
  return (
    <dialog open={isModalOpen}>
      <div className=" fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-20">
        <div className="flex flex-col items-center justify-center rounded bg-slate-500 p-4 text-center">
          <h2 className="p-2 font-bold">Cancel Flight {transactionID}</h2>
          <p className="p-2">Are you sure you want to cancel your flight?</p>
          <div className="flex gap-4">
            <button
              className="rounded bg-red-500 p-2"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="rounded bg-emerald-500 p-2"
              onClick={handleCancelFlight}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
