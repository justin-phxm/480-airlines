import dynamic from "next/dynamic";
export const Fields = {
  CreateAircraft: dynamic(() => import("./Create/CreateAircraft")),
  CreateFlight: dynamic(() => import("./Create/CreateFlight")),
  ReadAircraft: dynamic(() => import("./Read/ReadAircraft")),
  ReadFlight: dynamic(() => import("./Read/ReadFlight")),
  EditAircraft: dynamic(() => import("./Edit/EditAircraft")),
  EditFlight: dynamic(() => import("./Edit/EditFlight")),
  DeleteAircraft: dynamic(() => import("./Delete/DeleteAircraft")),
  DeleteFlight: dynamic(() => import("./Delete/DeleteFlight")),
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
