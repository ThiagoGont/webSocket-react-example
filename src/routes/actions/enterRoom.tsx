import type { ActionFunctionArgs } from "react-router";
import { enterRoomThunk } from "../../app/features/room/room.thunk";

export default async function enterRoomAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = {
    roomId: formData.get("room") as string,
    password: (formData.get("password") as string) ?? undefined,
  };

  try {
    const response = await enterRoomThunk({ ...data });

    return response;
  } catch (error) {
    console.error("Error entering room:", error);
  }

  return data;
}
