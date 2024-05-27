import BotIcon from "@/assets/svgs/bot.svg";
import MenuIcon from "@/assets/svgs/menu.svg?react";
import TwoDotsIcon from "@/assets/svgs/two-dots.svg?react";
import { AnimatePresence, motion } from "framer-motion";
import AssistantMessage from "./components/AssistantMessage";
import UserMessage from "./components/UserMessage";
import InputChat from "./features/InputChat";
import useAssistant from "./hooks/useAssistant";
import { cn } from "./lib/utils";

function App() {
  const {
    handleSendMessage,
    onInputChange,
    userInput,
    messages,
    isLoading,
    scrollableRef,
  } = useAssistant();

  return (
    <div className="w-full min-h-[100dvh] bg-slate-100 grid grid-rows-[auto_1fr_auto]">
      <div className="min-h-16 bg-purple-500 z-10 shadow-lg shadow-gray-300 sticky top-0 flex items-center px-4 justify-between">
        <button className="hover:bg-white/30 rounded-full p-2 transition-all">
          <MenuIcon className="fill-white" />
        </button>
        <button className="bg-red-500 font-semibold transition-all duration-300 text-white rounded-2xl px-4 py-1.5 hover:bg-red-500/85 hover:shadow-xs">
          Clear Chat
        </button>
      </div>
      <AnimatePresence>
        <div
          ref={scrollableRef}
          className={cn(
            "flex flex-col gap-y-7 overflow-x-hidden overflow-y-auto p-5",
            messages.length === 0 && "m-auto"
          )}
        >
          {messages.length === 0 ? (
            <motion.img
              className="max-w-[200px] md:max-w-[300px] opacity-70"
              src={BotIcon}
              alt="bot-chat"
            />
          ) : (
            messages.length > 0 && (
              <>
                {messages.map((message, index) =>
                  message.role === "user" ? (
                    <UserMessage key={index} index={index}>
                      {message.content}
                    </UserMessage>
                  ) : (
                    <AssistantMessage key={index}>
                      {message.content}
                    </AssistantMessage>
                  )
                )}
                {isLoading && (
                  <motion.div
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="mr-auto"
                  >
                    <TwoDotsIcon className="h-10" />
                  </motion.div>
                )}
              </>
            )
          )}
        </div>
      </AnimatePresence>
      <InputChat
        handleSendMessage={handleSendMessage}
        onInputChange={onInputChange}
        userInput={userInput}
      />
    </div>
  );
}

export default App;
