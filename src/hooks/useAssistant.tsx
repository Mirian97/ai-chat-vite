import { MessageType } from "@/@types/messageType";
import { createChat } from "@/services/chatService";
import { useEffect, useState } from "react";
import useBottomScroll from "./useScroll";

const useAssistant = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { scrollToBottom, scrollableRef } = useBottomScroll<HTMLDivElement>();

  const onInputChange = (text: string) => setUserInput(text);
  const handlePartialMessages = (partial: MessageType) =>
    setMessages((current) => [...current, partial]);

  const handleSendMessage = (text: string) => {
    if (text.length < 4) return;
    handlePartialMessages({ role: "user", content: text });
    setUserInput("");
    setIsLoading(true);
    createChat({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    })
      .then((res) => {
        handlePartialMessages({ ...res.data.choices[0].message });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return {
    onInputChange,
    handleSendMessage,
    messages,
    userInput,
    isLoading,
    scrollableRef,
    scrollToBottom,
  };
};

export default useAssistant;
export type UseAssistantType = ReturnType<typeof useAssistant>;
