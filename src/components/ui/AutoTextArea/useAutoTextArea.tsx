import React, { useEffect, useRef } from "react";

export default function useAutoTextArea() {
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    const el = e.currentTarget;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }

  useEffect(() => {
    if (ref.current !== null) {
      const el = ref.current;
      el.style.height = el.scrollHeight + "px";
    }
  }, [ref.current]);
  return {
    ref,
    handleInput,
  };
}
