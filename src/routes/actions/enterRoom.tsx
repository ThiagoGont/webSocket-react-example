import type { ActionFunctionArgs } from "react-router";

export default async function enterRoomAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = {
    name: formData.get("name") as string,
    room: formData.get("room") as string,
  };
  return data;
}
