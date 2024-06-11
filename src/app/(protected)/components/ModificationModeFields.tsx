import { IoMdSearch } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { Role } from "@prisma/client";
export enum ModificationMode {
  CREATE = "Create",
  READ = "Read",
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
export default function ModificationModeFields({
  permission,
  modificationMode,
  setModificationMode,
}: {
  permission: Role;
  modificationMode: ModificationMode;
  setModificationMode: React.Dispatch<React.SetStateAction<ModificationMode>>;
}) {
  const modificationModes: {
    name: ModificationMode;
    src: React.JSX.Element;
  }[] = [
    {
      name: ModificationMode.READ,
      src: <IoMdSearch size={18} />,
    },
    {
      name: ModificationMode.CREATE,
      src: <IoCreateOutline size={18} />,
    },
    {
      name: ModificationMode.EDIT,
      src: <CiEdit size={18} />,
    },
    ...(permission === Role.ADMIN
      ? [
          {
            name: ModificationMode.DELETE,
            src: <FaRegTrashAlt size={18} />,
          },
        ]
      : []),
  ];
  return (
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
  );
}
