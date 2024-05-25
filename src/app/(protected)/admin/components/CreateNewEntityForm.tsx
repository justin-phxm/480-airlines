import { BsAirplane } from "react-icons/bs";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

import React from "react";
function Title({ mainText, subText }: { mainText: string; subText: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className=" text-base font-bold text-gray-900">{mainText}</div>
      <div className=" text-sm font-normal text-gray-500">{subText}</div>
    </div>
  );
}

function IconButton({ src }: { src: React.ReactNode; alt?: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border border-zinc-200 bg-white">
      {src}
    </div>
  );
}

function EntityTypeCard({
  src,
  text,
  isSelected = false,
}: {
  src?: React.ReactNode;
  alt: string;
  text: string;
  isSelected?: boolean;
}) {
  return (
    <div
      className={`h-28 w-60 ${isSelected ? "border-2 border-blue-600" : "border border-zinc-200"} flex flex-col items-center justify-center gap-1 rounded bg-white`}
    >
      {src}
      <div
        className={`${isSelected ? "text-blue-600" : "text-gray-500"}  text-base font-normal leading-normal`}
      >
        {text}
      </div>
    </div>
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
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-5">
      <div className="flex flex-row justify-between gap-4">
        <Title
          mainText="Create new entity"
          subText="Type of entity you want to create"
        />
        <div className="flex gap-3">
          <IconButton src={<CiEdit size={18} />} alt="icon1" />
          <IconButton src={<FaRegTrashAlt size={18} />} alt="icon2" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-around gap-2.5">
          <EntityTypeCard
            src={<BsAirplane size={24} />}
            alt="Aircraft"
            text="Aircraft"
            isSelected
          />
          <EntityTypeCard
            src={<PiAirplaneTakeoffLight size={24} />}
            alt="Flight"
            text="Flight"
          />
          <EntityTypeCard
            src={<MdEmail size={24} />}
            alt="Newsletter"
            text="Newsletter"
          />
          <EntityTypeCard
            src={<CiCircleList size={24} />}
            alt="..."
            text="..."
          />
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
