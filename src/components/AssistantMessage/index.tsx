import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";

const AssistantMessage: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className={cn(
        "px-5 py-4 rounded-[30px] max-w-[80vw] bg-gray-200 self-start rounded-bl-none text-gray-700",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AssistantMessage;
