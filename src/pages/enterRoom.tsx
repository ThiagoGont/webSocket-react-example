import { Form, Navigate, useNavigate } from "react-router";
import Input from "../components/Input";
import Button from "../components/button";
import { DoorOpen, UserRoundPen } from "lucide-react";

const EnterRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 ">
      <div className="bg-white rounded-2xl p-4 shadow-lg h-87.5 w-180 justify-between flex flex-col">
        <Form method="post">
          <div className="gap-2 flex flex-col flex-1">
            <section className="flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <Input.text
                className={`h-12 `}
                id="name"
                icon={UserRoundPen}
                placeholder="Type your name here"
              />
            </section>
            <section className="flex flex-col gap-1">
              <label htmlFor="room"> Room: </label>
              <Input.text
                className={`h-12`}
                id="room"
                icon={DoorOpen}
                placeholder="type the room name here"
              />
            </section>
          </div>
          <section className="inline-flex gap-2 mt-4 justify-end w-full">
            <Button onClick={() => navigate("./create")}>Create Room</Button>
            <Button.submit className="">Join Room</Button.submit>
          </section>
        </Form>
      </div>
    </div>
  );
};

export default EnterRoom;
