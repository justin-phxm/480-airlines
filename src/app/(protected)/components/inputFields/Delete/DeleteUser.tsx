import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { readUsers } from "~/app/actions";
export default async function DeleteUser() {
  const users = await readUsers();
  return (
    <div className="grid w-full">
      <FormControl>
        <InputLabel id="user">User</InputLabel>
        <Select
          required
          name="deleteUserID"
          labelId="deleteUserID"
          label="deleteUserID"
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.id}: {user.name} - {user.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
