export type UserState = {
  name: string;
};

export type CreateUser = {
  name: string;
};

export type Room = {
  roomId?: string;
  password?: string;
  roomName: string;
};

export type EnterRoom = {
  roomId: string;

  password: string;
};

export type findRoom = {
  name: string;
};

export type User = {
  id: string;
  name: string;
};

export type Message = {
  message: string;
  sender: string;
};

export type RoomState = {
  roomName: string;
  messages: Message[];
};
