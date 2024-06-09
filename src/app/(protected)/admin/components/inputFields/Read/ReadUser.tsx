import { Avatar } from "@mui/material";
import { type User } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react/components/Table";
import { readUsers } from "~/app/actions";

function UserCard({ user }: { user: User }) {
  const fields = Object.values(user);
  return (
    <>
      {fields.map((field, index) => (
        <TableCell key={index}>
          <h1>
            {field instanceof Date ? (
              field.toDateString()
            ) : field?.startsWith("https://") ? (
              <Avatar src={field} />
            ) : (
              field
            )}
          </h1>
        </TableCell>
      ))}
    </>
  );
}
export default async function ReadUser() {
  const users = await readUsers();
  const userKeys = users[0] ? Object.keys(users[0]) : [];
  function addSpacesBeforeCapitals(text: string): string {
    return text.replace(/([A-Z])/g, " $1").trim();
  }
  userKeys.forEach((key, index) => {
    userKeys[index] = addSpacesBeforeCapitals(key);
  });
  return (
    <div className="max-h-96 w-full overflow-y-auto">
      <Table>
        <TableHead>
          {userKeys.map((key, index) => (
            <TableHeadCell key={index}>{key}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <UserCard user={user} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
