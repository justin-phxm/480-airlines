import { type FormEvent } from "react";
import { Entities } from "./EntityFields";
import { ModificationMode } from "./ModificationModeFields";
import { type CreateAircraftPayload } from "@/components/inputFields/Create/CreateAircraft";
import { type EditAircraftPayload } from "@/components/inputFields/Edit/EditAircraft";
import { type DeleteAircraftPayload } from "@/components/inputFields/Delete/DeleteAircraft";
import { toast } from "react-toastify";
import {
  createAircraft,
  createFlight,
  deleteAircraft,
  deleteFlight,
  deleteUser,
  editFlight,
  editUser,
  modifyAircraft,
} from "~/app/actions";
import toastOptions from "~/styles/toastOptions";
import { type Prisma } from "@prisma/client";
import { type Session } from "next-auth";
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
type ActionResult = {
  success: boolean;
  message: string;
};
async function adminMutation({
  entity,
  mutation,
  action,
  fields,
}: {
  entity: Entities;
  mutation: ModificationMode;
  action: (
    fields: Record<string, string | number | Date>,
  ) => Promise<ActionResult>;
  fields: Record<string, string | number | Date>;
}) {
  const id = toast.loading(`${mutation} ${entity}...`);
  const res = await action(fields);
  toast.update(id, {
    render: `${entity} - ${mutation}: ${res.message}`,
    type: res.success ? "success" : "error",
    ...toastOptions,
  });
}
type Fields = Record<string, string | number | Date>;
async function handleAircraft(
  fields: Fields,
  modificationMode: ModificationMode,
  session: Session,
): Promise<ActionResult> {
  switch (modificationMode) {
    case ModificationMode.CREATE:
      return await createAircraft(fields as CreateAircraftPayload);
    case ModificationMode.EDIT:
      return await modifyAircraft(fields as EditAircraftPayload, session);
    case ModificationMode.DELETE:
      return await deleteAircraft(fields as DeleteAircraftPayload);
    default:
      return {
        success: false,
        message: "Unknown modification mode for aircraft",
      };
  }
}

async function handleFlight(
  fields: Fields,
  modificationMode: ModificationMode,
  session: Session,
): Promise<ActionResult> {
  switch (modificationMode) {
    case ModificationMode.CREATE:
      const { aircraftID, ...createFlightProps } = fields;
      return await createFlight({
        aircraftID: aircraftID as string,
        props: createFlightProps as unknown as Prisma.FlightCreateInput,
      });
    case ModificationMode.EDIT:
      const { flightID, ...props } = fields;
      return await editFlight({
        flightID: flightID as number,
        props: props,
      });
    case ModificationMode.DELETE:
      return await deleteFlight({
        flightID: fields.deleteFlightID as number,
        session,
      });
    default:
      return {
        success: false,
        message: "Unknown modification mode for flight",
      };
  }
}

async function handleUser(
  fields: Fields,
  modificationMode: ModificationMode,
  session: Session,
): Promise<ActionResult> {
  if (modificationMode === ModificationMode.EDIT) {
    const { id, ...props } = fields;
    return await editUser({
      userID: id as string,
      props,
      session,
    });
  }
  if (modificationMode === ModificationMode.DELETE) {
    return await deleteUser({
      userID: fields.deleteUserID as string,
      session,
    });
  }
  return { success: false, message: "Unknown modification mode for user" };
}
async function entityDispatcher(
  entity: Entities,
  mutation: ModificationMode,
  fields: Fields,
  session: Session,
): Promise<ActionResult> {
  switch (entity) {
    case Entities.AIRCRAFT:
      return handleAircraft(fields, mutation, session);
    case Entities.FLIGHT:
      return handleFlight(fields, mutation, session);
    case Entities.USER:
      return handleUser(fields, mutation, session);
    default:
      return { success: false, message: "Unknown entity" };
  }
}

export default async function handleFormSubmission({
  event,
  selectedType,
  modificationMode,
  session,
}: {
  event: FormEvent<HTMLFormElement>;
  selectedType: Entities;
  modificationMode: ModificationMode;
  session: Session;
}) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const uncleanFormFields = Object.fromEntries(formData.entries());
  const formFields = parseFormData(uncleanFormFields);
  await adminMutation({
    entity: selectedType,
    mutation: modificationMode,
    action: async (fields) =>
      entityDispatcher(selectedType, modificationMode, fields, session),
    fields: formFields,
  });
}
