"use client";
import { BsAirplane } from "react-icons/bs";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

import React, { useState } from "react";
enum ModificationMode {
  CREATE = "Create",
  EDIT = "Edit",
  DELETE = "Delete",
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
  text: string;
  isSelected?: boolean;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
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
function InputField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className=" text-sm text-gray-500">{label}</div>
      <input
        placeholder={placeholder}
        type="text"
        className="flex items-center rounded border border-slate-200 p-2 text-slate-400 focus:outline-blue-500"
      />
    </div>
  );
}

function ActionButton({
  text,
  primary = false,
}: {
  text: string;
  primary?: boolean;
}) {
  return (
    <div
      className={`w-${primary ? "20" : "24"} flex items-center justify-center p-2 ${primary ? "bg-blue-600" : "border border-zinc-200 bg-white"} rounded`}
    >
      <div className={`${primary ? "text-white" : "text-blue-600"}`}>
        {text}
      </div>
    </div>
  );
}

function CreateNewEntityForm() {
  const [selectedType, setSelectedType] = useState("Aircraft");
  const entities = [
    { name: "Aircraft", logo: <BsAirplane size={24} /> },
    { name: "Flight", logo: <PiAirplaneTakeoffLight size={24} /> },
    { name: "Newsletter", logo: <MdEmail size={24} /> },
    { name: "...", logo: <CiCircleList size={24} /> },
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
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-5">
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
      <div className="flex flex-col gap-4">
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
        <div className=" grid grid-cols-4 gap-4">
          <div className=" col-span-2">
            <InputField label="Aircraft Name" placeholder="Amount" />
            <InputField
              label="Business Class Seats"
              placeholder="Amount of uses"
            />
          </div>
          <div className=" col-span-2">
            <InputField
              label="First Class Seats"
              placeholder="Amount of uses"
            />
            <InputField
              label="Economy Class Seats"
              placeholder="Amount of uses"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <ActionButton text="Cancel" />
          <ActionButton text="Save" primary />
        </div>
      </div>
    </div>
  );
}

export default CreateNewEntityForm;
