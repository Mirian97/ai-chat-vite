import { useRef } from "react";

const useBottomScroll = <T extends HTMLElement>() => {
  const scrollableRef = useRef<T>(null);
  const currentRef = scrollableRef.current;

  const scrollToBottom = () => {
    if (!currentRef) return;
    window.scroll({
      top: currentRef.scrollHeight,
      left: 0,
    });
  };

  const scrollToTop = () => {
    if (!currentRef) return;
    currentRef.scrollIntoView({
      behavior: "smooth",
    });
  };

  return {
    scrollableRef,
    scrollToBottom,
    scrollToTop,
  };
};

export default useBottomScroll;
export type UseBottomScroll = ReturnType<typeof useBottomScroll>;
