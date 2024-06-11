"use client";
import React, { useState } from "react";
import InputField, { type Fields } from "./inputFields/InputField";
import handleFormSubmission from "./formLogic";
import { Role } from "@prisma/client";
import EntityFields, { Entities } from "./EntityFields";
import ModificationModeFields, {
  ModificationMode,
} from "./ModificationModeFields";

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
export default function ModifyEntityForm({
  permission = Role.ADMIN,
}: {
  permission?: Role;
}) {
  const [selectedType, setSelectedType] = useState(Entities.AIRCRAFT);
  const [modificationMode, setModificationMode] = useState(
    ModificationMode.CREATE,
  );

  const [rerender, setRerender] = useState(false);
  const handleCancelClick = () => {
    setRerender(!rerender);
  };

  return (
    <div className="flex w-full flex-1 flex-col gap-4 rounded-lg bg-white p-5 shadow">
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className=" text-base font-bold text-gray-900">
            {modificationMode} new entity
          </h1>
          <h2 className=" text-sm font-normal text-gray-500">
            Type of entity you want to create
          </h2>
        </div>
        <ModificationModeFields
          modificationMode={modificationMode}
          setModificationMode={setModificationMode}
          permission={permission}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <EntityFields
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <form
          className="flex flex-1 flex-col gap-4"
          onSubmit={(e) =>
            handleFormSubmission({ event: e, selectedType, modificationMode })
          }
        >
          <div className="flex flex-1">
            <InputField
              key={rerender.toString()}
              renderedField={
                (modificationMode + selectedType) as keyof typeof Fields
              }
            />
          </div>
          <div className=" flex justify-end gap-4">
            <ActionButton onClick={handleCancelClick} text="Cancel" />
            <ActionButton submit text="Save" primary />
          </div>
        </form>
      </div>
    </div>
  );
}
