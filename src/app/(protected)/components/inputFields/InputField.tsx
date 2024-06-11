import Skeleton from "@mui/material/Skeleton";
import dynamic from "next/dynamic";
const loading = () => <Skeleton height={"100%"} width={"100%"} />;

export const Fields = {
  CreateAircraft: dynamic(() => import("./Create/CreateAircraft"), {
    loading,
  }),
  CreateFlight: dynamic(() => import("./Create/CreateFlight"), { loading }),
  ReadAircraft: dynamic(() => import("./Read/ReadAircraft"), {
    loading,
  }),
  ReadFlight: dynamic(() => import("./Read/ReadFlight"), { loading }),
  ReadUser: dynamic(() => import("./Read/ReadUser"), { loading }),
  EditAircraft: dynamic(() => import("./Edit/EditAircraft"), { loading }),
  EditFlight: dynamic(() => import("./Edit/EditFlight"), { loading }),
  EditUser: dynamic(() => import("./Edit/EditUser"), { loading }),
  DeleteAircraft: dynamic(() => import("./Delete/DeleteAircraft"), { loading }),
  DeleteFlight: dynamic(() => import("./Delete/DeleteFlight"), { loading }),
  DeleteUser: dynamic(() => import("./Delete/DeleteUser"), { loading }),
};
export default function InputField({
  renderedField,
}: {
  renderedField: keyof typeof Fields;
}) {
  const RenderedInputField = Fields[renderedField];
  if (!RenderedInputField) return null;
  return <RenderedInputField />;
}
