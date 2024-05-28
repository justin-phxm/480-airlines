import dynamic from "next/dynamic";
export const Fields = {
  CreateAircraft: dynamic(() => import("./CreateAircraft")),
  ReadAircraft: dynamic(() => import("./ReadAircraft")),
  EditAircraft: dynamic(() => import("./EditAircraft")),
  CreateFlight: dynamic(() => import("./CreateFlight")),
  DeleteAircraft: dynamic(() => import("./DeleteAircraft")),
  EditFlight: dynamic(() => import("./EditFlight")),
  DeleteFlight: dynamic(() => import("./DeleteFlight")),
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
