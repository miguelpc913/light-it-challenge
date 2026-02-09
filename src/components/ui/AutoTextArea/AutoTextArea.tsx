import { type TextareaHTMLAttributes } from "react";
import "./AutoTextArea.css";
import type { UseFormRegisterReturn } from "react-hook-form";
import useAutoTextArea from "./useAutoTextArea";

type Props<T extends string> = TextareaHTMLAttributes<HTMLTextAreaElement> &
  UseFormRegisterReturn<T>;

export function AutoTextarea<T extends string>(props: Props<T>) {
  const { handleInput, ref } = useAutoTextArea();

  return (
    <textarea
      {...props}
      className={`auto-textarea ${props.className || ""}`}
      rows={1}
      onChange={(e) => {
        handleInput(e);
        if (props.onChange) {
          props.onChange(e);
        }
      }}
      ref={(e) => {
        props.ref(e);
        ref.current = e;
      }}
    />
  );
}
