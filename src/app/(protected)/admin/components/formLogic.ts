import { type FormEvent } from "react";
import { Entities, ModificationMode } from "./CreateNewEntityForm";
import { type CreateAircraftPayload } from "./inputFields/Create/CreateAircraft";
import { type EditAircraftPayload } from "./inputFields/Edit/EditAircraft";
import { toast } from "react-toastify";
import { createAircraft, deleteAircraft, modifyAircraft } from "~/app/actions";
import { type DeleteAircraftPayload } from "./inputFields/Delete/DeleteAircraft";

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
  const formFields = Object.fromEntries(formData.entries()) as unknown;
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
          console.log("Creating Flight:", formFields);
          break;
        case ModificationMode.EDIT:
          console.log("Editing Flight:", formFields);
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
