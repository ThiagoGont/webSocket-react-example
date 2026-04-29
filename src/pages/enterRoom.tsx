import { Form, Navigate, useFetcher, useNavigate } from "react-router";
import Input from "../components/Input";
import Button from "../components/button";
import { DoorOpen, UserRoundPen } from "lucide-react";
import { useState } from "react";
import Modal from "../components/modal";

const EnterRoom = () => {
  const navigate = useNavigate();
  const fetcher = useFetcher();

  const [openModal, setOpenModal] = useState(false);

async function enterRoom() {
  try {
    const response = 
  }
}

  async function onSubmit() {}

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white/80">
      <h1 className="font-bold text-4xl mb-10">Enter Room </h1>
      <div className="bg-white rounded-2xl p-4 shadow-lg h-70 w-180 *:justify-between *:flex *:flex-col *:h-full border border-gray-300">
        <Form method="post">
          <div className="gap-2 flex flex-col flex-1">
            <section className="flex flex-col gap-2">
              <label className="pl-1" htmlFor="name">
                Name:
              </label>
              <Input.text
                className={`h-12 `}
                id="name"
                icon={UserRoundPen}
                placeholder="Type your name here"
              />
            </section>
            <section className="flex flex-col gap-2">
              <label className="pl-1" htmlFor="room">
                Room:
              </label>
              <Input.text
                className={`h-12`}
                id="room"
                icon={DoorOpen}
                placeholder="type the room name here"
              />
            </section>
          </div>
          <section className="inline-flex gap-2 mt-4 justify-end w-full">
            <Button>Create Room</Button>
            <Button onClick={() => setOpenModal(true)} className="bg-green-400">
              Join Room
            </Button>
          </section>
        </Form>
      </div>
      <Modal
        open={openModal}
        cancelFn={() => setOpenModal(false)}
        primaryFn={() =>
          fetcher.submit({ method: "post", action: "/room/enter" })
        }
        titleContent="Create Room"
      >
        <Form method="post" onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input.text
            name="roomName"
            placeholder="Type the room name here"
            icon={DoorOpen}
            className="h-12"
          />
          <Button.submit className="self-end">Create</Button.submit>
        </Form>
      </Modal>
    </div>
  );
};

export default EnterRoom;
