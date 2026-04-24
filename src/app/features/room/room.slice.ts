import { createSlice } from "@reduxjs/toolkit";
import type { RoomState } from "../../../types/user";
import {
  getMessagesBuilder,
  enterRoomBuilder,
  createMessageBuilder,
} from "./room.thunk";

const initialState: RoomState = {
  roomName: "",
  messages: [],
};

export const RoomSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createMessageBuilder(builder);
    getMessagesBuilder(builder);
    enterRoomBuilder(builder);
  },
});

export default RoomSlice.reducer;
