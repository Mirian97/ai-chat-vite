import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";

interface UserMessageType extends HTMLAttributes<HTMLDivElement> {
  index: number;
}

const UserMessage: FC<UserMessageType> = (props) => {
  const { children, className, index } = props;
  const FIRST_MESSAGE = index === 0;

  return (
    <motion.div
      initial={{ y: FIRST_MESSAGE ? "75vh" : 0, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: FIRST_MESSAGE ? 2 : 0.7,
        ease: "easeIn",
      }}
      className={cn(
        "px-5 py-4 rounded-[30px] max-w-[80vw] bg-purple-500 self-end rounded-tr-none text-white",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default UserMessage;
