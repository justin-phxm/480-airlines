import { type FormEvent } from "react";
import { Entities, ModificationMode } from "./ModifyEntityForm";
import { type CreateAircraftPayload } from "./inputFields/Create/CreateAircraft";
import { type EditAircraftPayload } from "./inputFields/Edit/EditAircraft";
import { toast } from "react-toastify";
import {
  createAircraft,
  deleteAircraft,
  editFlight,
  modifyAircraft,
} from "~/app/actions";
import { type DeleteAircraftPayload } from "./inputFields/Delete/DeleteAircraft";
import toastOptions from "~/styles/toastOptions";
function parseFormData(data: Record<string, FormDataEntryValue>) {
  const parsedData: Record<string, string | number | Date> = {};

  for (const key in data) {
    const value = data[key];

    if (typeof value === "string" && value !== "") {
      // Attempt to parse value as number
      const numberValue = Number(value);
      if (!isNaN(numberValue)) {
        parsedData[key] = numberValue;
      } else {
        // Attempt to parse value as date
        const dateValue = new Date(value);
        if (!isNaN(dateValue.getTime())) {
          parsedData[key] = dateValue;
        } else {
          // Keep the value as string
          parsedData[key] = value;
        }
      }
    }
  }

  return parsedData;
}
export default async function handleFormSubmission({
  event,
  selectedType,
  modificationMode,
}: {
  event: FormEvent<HTMLFormElement>;
  selectedType: Entities;
  modificationMode: ModificationMode;
}) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const uncleanFormFields = Object.fromEntries(formData.entries());
  const formFields = parseFormData(uncleanFormFields);
  switch (selectedType) {
    case Entities.AIRCRAFT:
      switch (modificationMode) {
        case ModificationMode.CREATE:
          await toast.promise(
            createAircraft(formFields as CreateAircraftPayload),
            {
              pending: "Creating Aircraft...",
              success: {
                render({ data }) {
                  return data.message;
                },
              },
              error: "Error creating Aircraft",
            },
          );
          break;
        case ModificationMode.EDIT:
          await toast.promise(
            modifyAircraft(formFields as EditAircraftPayload),
            {
              pending: "Modifying Aircraft...",
              success: {
                render({ data }) {
                  return data.message;
                },
              },
              error: "Error modifying Aircraft",
            },
          );
          break;
        case ModificationMode.DELETE:
          await toast.promise(
            deleteAircraft(formFields as DeleteAircraftPayload),
            {
              pending: "Deleting Aircraft...",
              success: {
                render({ data }) {
                  return data.message;
                },
              },
              error: "Error deleting Aircraft",
            },
          );
          break;
      }
      break;
    case Entities.FLIGHT:
      switch (modificationMode) {
        case ModificationMode.CREATE:
          // const createFlight = await toast.promise(
          //   createFlight(formFields as ),
          //   {
          //     pending: "Creating Flight...",
          //     success: {
          //       render({ data }) {
          //         return data.message;
          //       },
          //     },
          //     error: "Error creating Flight",
          //   },
          // );
          // console.log(createFlight);
          break;
        case ModificationMode.EDIT:
          const { flightID, ...props } = formFields;
          const id = toast.loading("Updating Flight...");
          const editFlightReq = await editFlight({
            flightID: flightID as number,
            props: props,
          });
          toast.update(id, {
            render: `Flight updated ${editFlightReq.success ? "successfully" : "unsuccessfully"}`,
            type: editFlightReq.success ? "success" : "error",
            ...toastOptions,
          });
          break;
        case ModificationMode.DELETE:
          console.log("Deleting Flight:", formFields);
          break;
      }
      break;
    case Entities.NEWSLETTER:
      switch (modificationMode) {
        case ModificationMode.CREATE:
          console.log("Creating Newsletter:", formFields);
          break;
        case ModificationMode.EDIT:
          console.log("Editing Newsletter:", formFields);
          break;
        case ModificationMode.DELETE:
          console.log("Deleting Newsletter:", formFields);
          break;
      }
      break;
    case Entities.OTHER:
      switch (modificationMode) {
        case ModificationMode.CREATE:
          console.log("Creating Other:", formFields);
          break;
        case ModificationMode.EDIT:
          console.log("Editing Other:", formFields);
          break;
        case ModificationMode.DELETE:
          console.log("Deleting Other:", formFields);
          break;
      }
      break;
  }
}
