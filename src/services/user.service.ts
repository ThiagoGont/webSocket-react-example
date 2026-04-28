import type { AxiosError } from "axios";
import type { Message, Room } from "../types/user.ts";
import { MAIN_API } from "./config.ts";

export default class UserService {
  static async createRoom({ roomName, password }: Room) {
    try {
      const response = await MAIN_API.post("/room/create", {
        roomName,
        password,
      });

      return {
        roomId: response.data.roomId,
        success: response.data.success,
      };
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      throw new Error(error.response?.data?.message, { cause: err });
    }
  }

  static async getMessages() {
    try {
      const response = await MAIN_API.get(`room/messages`);

      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.message, { cause: err });
    }
  }

  static async enterRoom({ roomName, password, roomId }: Room) {
    try {
      const response = !roomId
        ? await MAIN_API.post("/room/enter", {
            roomName,
            password,
          })
        : null;

      MAIN_API.interceptors.request.clear();
      MAIN_API.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${roomId || response!.data.roomId}`;
        return config;
      });

      return {
        success: true,
        roomName: roomId ? roomName : response!.data.roomName,
      };
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      throw new Error(error.message, { cause: err });
    }
  }

  static async createMessage({ message }: { message: string }) {
    try {
      const response = await MAIN_API.post("/message", {
        message,
        sender: localStorage.getItem("userName"),
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      throw new Error(error.message, { cause: err });
    }
  }
}
