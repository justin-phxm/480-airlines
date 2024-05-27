"use client";
import { BsAirplane } from "react-icons/bs";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { type CreateAircraftPayload } from "./inputFields/CreateAircraft";
import React, { type FormEvent, useState } from "react";
import InputField, { type Fields } from "./inputFields/InputField";
import { type EditAircraftPayload } from "./inputFields/EditAircraft";
import { type DeleteAircraftPayload } from "./inputFields/DeleteAircraft";
import { createAircraft, deleteAircraft, modifyAircraft } from "~/app/actions";
import { toast } from "react-toastify";
export enum ModificationMode {
  CREATE = "Create",
  EDIT = "Edit",
  DELETE = "Delete",
}
export enum Entities {
  AIRCRAFT = "Aircraft",
  FLIGHT = "Flight",
  NEWSLETTER = "Newsletter",
  OTHER = "...",
}
function IconButton({
  src,
  setModificationMode,
  alt,
  isSelected,
}: {
  src: React.ReactNode;
  alt: ModificationMode;
  setModificationMode: React.Dispatch<React.SetStateAction<ModificationMode>>;
  isSelected: boolean;
}) {
  return (
    <button
      onClick={() => setModificationMode(alt)}
      className={`flex ${isSelected ? "border-2 border-blue-600" : "border border-zinc-200"} size-10 items-center justify-center rounded bg-white`}
    >
      {src}
    </button>
  );
}

function EntityTypeCard({
  src,
  text,
  isSelected = false,
  setSelectedType,
}: {
  src?: React.ReactNode;
  alt: string;
  text: Entities;
  isSelected?: boolean;
  setSelectedType: React.Dispatch<React.SetStateAction<Entities>>;
}) {
  return (
    <button
      onClick={() => setSelectedType(text)}
      className={`h-28 w-60 ${isSelected ? "border-2 border-blue-600" : "border border-zinc-200"} flex flex-col items-center justify-center gap-1 rounded bg-white`}
    >
      {src}
      <div
        className={`${isSelected ? "text-blue-600" : "text-gray-500"}  text-base font-normal leading-normal`}
      >
        {text}
      </div>
    </button>
  );
}

function ActionButton({
  text,
  onClick,
  primary = false,
  submit,
}: {
  text: string;
  onClick?: () => void;
  primary?: boolean;
  submit?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={`w-${primary ? "20" : "24"} flex items-center justify-center p-2 ${primary ? "bg-blue-600" : "border border-zinc-200 bg-white"} rounded`}
    >
      <div className={`${primary ? "text-white" : "text-blue-600"}`}>
        {text}
      </div>
    </button>
  );
}
type EntitiesSelection = {
  name: Entities;
  logo: React.ReactNode;
};
function CreateNewEntityForm() {
  const [selectedType, setSelectedType] = useState(Entities.AIRCRAFT);
  const entities: EntitiesSelection[] = [
    { name: Entities.AIRCRAFT, logo: <BsAirplane size={24} /> },
    { name: Entities.FLIGHT, logo: <PiAirplaneTakeoffLight size={24} /> },
    { name: Entities.NEWSLETTER, logo: <MdEmail size={24} /> },
    { name: Entities.OTHER, logo: <CiCircleList size={24} /> },
  ];
  const [modificationMode, setModificationMode] = useState(
    ModificationMode.CREATE,
  );
  const modificationModes = [
    {
      name: ModificationMode.CREATE,
      src: <IoCreateOutline size={18} />,
    },
    {
      name: ModificationMode.EDIT,
      src: <CiEdit size={18} />,
    },
    {
      name: ModificationMode.DELETE,
      src: <FaRegTrashAlt size={18} />,
    },
  ];

  async function handleFormSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formFields = Object.fromEntries(formData.entries()) as unknown;
    switch (selectedType) {
      case Entities.AIRCRAFT:
        switch (modificationMode) {
          case ModificationMode.CREATE:
            const aircraft = await toast.promise(
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
            console.log(aircraft);
            break;
          case ModificationMode.EDIT:
            const editAircraft = await toast.promise(
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
            console.log(editAircraft);
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
  const [rerender, setRerender] = useState(false);
  const handleCancelClick = () => {
    setRerender(!rerender);
  };

  return (
    <div className="flex w-full flex-1 flex-col gap-4 rounded-lg bg-white p-5">
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className=" text-base font-bold text-gray-900">
            {modificationMode} new entity
          </h1>
          <h2 className=" text-sm font-normal text-gray-500">
            Type of entity you want to create
          </h2>
        </div>
        <div className="flex gap-3">
          {modificationModes.map(({ name, src }) => (
            <IconButton
              key={name}
              src={src}
              alt={name}
              setModificationMode={setModificationMode}
              isSelected={modificationMode === name}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex justify-around gap-2.5">
          {entities.map((entity) => {
            const { name } = entity;
            return (
              <EntityTypeCard
                key={name}
                src={entity.logo}
                alt={name}
                text={name}
                isSelected={selectedType === name}
                setSelectedType={setSelectedType}
              />
            );
          })}
        </div>
        <form
          className="relative flex flex-1 flex-col gap-4"
          onSubmit={handleFormSubmission}
        >
          <InputField
            key={rerender.toString()}
            renderedField={
              (modificationMode + selectedType) as keyof typeof Fields
            }
          />
          <div className="absolute bottom-0 right-0 flex justify-end gap-4">
            <ActionButton onClick={handleCancelClick} text="Cancel" />
            <ActionButton submit text="Save" primary />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewEntityForm;
