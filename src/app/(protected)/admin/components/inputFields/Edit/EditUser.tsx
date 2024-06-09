import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Role, type Prisma } from "@prisma/client";
import React from "react";

export default function EditUser() {
  const defaultFlightParams: Prisma.UserUpdateInput = {
    id: "",
    name: "",
    email: "",
    emailVerified: "",
    image: "",
  };
  return (
    <>
      <div className="grid h-fit w-full grid-cols-2 gap-4">
        {Object.entries(defaultFlightParams).map(([key, value]) => (
          <TextField
            key={key}
            className="w-full"
            label={key}
            variant="outlined"
            defaultValue={null}
            type={
              typeof value === "number"
                ? "number"
                : value instanceof Date
                  ? "datetime-local"
                  : "text"
            }
            InputLabelProps={
              value instanceof Date ? { shrink: true } : undefined
            }
            name={key}
          />
        ))}
        <FormControl>
          <InputLabel id="role">Role</InputLabel>
          <Select name="role" labelId="role" label="Role">
            <MenuItem value={undefined}>
              <em>None</em>
            </MenuItem>
            {Object.keys(Role).map((role: string) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
