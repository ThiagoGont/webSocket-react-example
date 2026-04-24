import { configureStore } from "@reduxjs/toolkit";
import { RoomSlice } from "./features/room/room.slice";

const Store = configureStore({
  reducer: {
    room: RoomSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
