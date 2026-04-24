import {
  createAsyncThunk,
  type ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import UserService from "../../../services/user.service";
import type { Room, RoomState } from "../../../types/user";

export const createMessageThunk = createAsyncThunk(
  "room/message",
  async ({ message }: { message: string }) => {
    const response = await UserService.createMessage({ message });
    return response;
  },
);

export const createMessageBuilder = (
  builder: ActionReducerMapBuilder<RoomState>,
) => {
  builder
    .addCase(createMessageThunk.rejected, () => {})
    .addCase(createMessageThunk.fulfilled, (state, { payload }) => {
      state.messages.push(payload);
    });
};

export const getMessagesThunk = createAsyncThunk(
  "room/get-messages",
  async () => {
    const response = await UserService.getMessages();
    return response;
  },
);

export const getMessagesBuilder = (
  builder: ActionReducerMapBuilder<RoomState>,
) => {
  builder.addCase(getMessagesThunk.fulfilled, (state, { payload }) => {
    state.messages = payload;
  });
};

export const createRoomThunk = createAsyncThunk(
  "room/create",
  async ({ roomName, password }: Room) => {
    const response = await UserService.createRoom({ roomName, password });
    return response;
  },
);

export const enterRoomThunk = createAsyncThunk(
  "room/enter",
  async ({ roomName, password, roomId }: Room) => {
    const response = await UserService.enterRoom({
      roomName,
      roomId,
      password,
    });

    return response;
  },
);

export const enterRoomBuilder = (
  builder: ActionReducerMapBuilder<RoomState>,
) => {
  builder
    .addCase(enterRoomThunk.rejected, () => {})
    .addCase(enterRoomThunk.fulfilled, (state, { payload }) => {
      state.roomName = payload.roomName;
    });
};
