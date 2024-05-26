import dynamic from "next/dynamic";
import { Entities, ModificationMode } from "../CreateNewEntityForm";
const CreateAircraft = dynamic(() => import("./CreateAircraft"));
const EditAircraft = dynamic(() => import("./EditAircraft"));
const CreateFlight = dynamic(() => import("./CreateFlight"));
const DeleteAircraft = dynamic(() => import("./DeleteAircraft"));
export default function InputField({
  selectedType,
  modificationMode,
}: {
  selectedType: Entities;
  modificationMode: ModificationMode;
}) {
  let RenderedInputField = CreateAircraft;
  switch (selectedType) {
    case Entities.AIRCRAFT:
      switch (modificationMode) {
        case ModificationMode.CREATE:
          RenderedInputField = CreateAircraft;
          break;
        case ModificationMode.EDIT:
          RenderedInputField = EditAircraft;
          break;
        case ModificationMode.DELETE:
          RenderedInputField = DeleteAircraft;
          break;
      }
      break;
    // case Entities.FLIGHT:
    //   switch (modificationMode) {
    //     case ModificationMode.CREATE:
    //       RenderedInputField = CreateFlight;
    //       break;
    //     case ModificationMode.EDIT:
    //       RenderedInputField = CreateFlight;
    //       break;
    //     case ModificationMode.DELETE:
    //       RenderedInputField = CreateFlight;
    //       break;
    //   }
    //   break;
    // case Entities.NEWSLETTER:
    //   switch (modificationMode) {
    //     case ModificationMode.CREATE:
    //       RenderedInputField = CreateAircraft;
    //       break;
    //     case ModificationMode.EDIT:
    //       RenderedInputField = CreateAircraft;
    //       break;
    //     case ModificationMode.DELETE:
    //       RenderedInputField = CreateAircraft;
    //       break;
    //   }
    //   break;
    default:
      RenderedInputField = CreateAircraft;
  }
  return <RenderedInputField />;
}
