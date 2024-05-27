import { ChatCompletion, PayloadCreateMessage } from "@/@types/messageType";
import api from "@/config/api";

export async function createChat(payload: PayloadCreateMessage) {
  return await api.post<ChatCompletion>("/chat/completions", payload);
}
