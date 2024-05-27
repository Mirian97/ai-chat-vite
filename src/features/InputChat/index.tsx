import SendIcon from "@/assets/svgs/send.svg?react";
import { UseAssistantType } from "@/hooks/useAssistant";
import { FC } from "react";

interface InputChatType
  extends Pick<
    UseAssistantType,
    "handleSendMessage" | "onInputChange" | "userInput"
  > {}

const InputChat: FC<InputChatType> = (props) => {
  const { handleSendMessage, userInput, onInputChange } = props;

  return (
    <form
      className="mt-auto flex gap-x-1 w-full sticky bottom-0 inset-x-0 px-5 pb-5 pt-2 shadow-2xl bg-gradient-to-t from-gray-200/95 from-70% to-transparent"
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage(userInput);
      }}
    >
      <div className="w-full items-center text-sm justify-center min-h-10 p-4 group flex rounded-full bg-white shadow-large">
        <input
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          className="grow-1 w-full"
          placeholder="Type your message here..."
        />
        <button type="submit" className="fill-purple-500">
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default InputChat;
