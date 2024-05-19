"use client";
import type { Flight, Seat } from "@prisma/client";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

// Define the context types
interface FlightContextType {
  flight: Flight;
  seats: Seat[];
  chosenSeats: Seat[];
  setChosenSeats: React.Dispatch<React.SetStateAction<Seat[]>>;
  setSeats: React.Dispatch<React.SetStateAction<Seat[]>>;
}

// Create the context with default values
const FlightContext = createContext<FlightContextType | undefined>(undefined);

// Create a provider component
export const FlightProvider = ({
  children,
  flight,
}: {
  children: ReactNode;
  flight: Flight;
}) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [chosenSeats, setChosenSeats] = useState<Seat[]>([]);

  return (
    <FlightContext.Provider
      value={{ flight, seats, setSeats, chosenSeats, setChosenSeats }}
    >
      {children}
    </FlightContext.Provider>
  );
};

// Custom hook to use the FlightContext
export const useFlight = () => {
  const context = useContext(FlightContext);
  if (context === undefined) {
    throw new Error("useFlight must be used within a FlightProvider");
  }
  return context;
};
