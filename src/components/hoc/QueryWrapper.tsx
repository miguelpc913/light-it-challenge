import { useEffect, type JSX } from "react";
import { useToast } from "../../provider/ToastProvider";
import isNotUndefined from "../../utils/isNotUndefined";
import Spinner from "../ui/Spinner/Spinner";

type Props<T> = {
  status: "error" | "success" | "pending";
  error: unknown;
  data: T | undefined;
  render: (data: T) => JSX.Element | JSX.Element[];
};

const parseErrorMessage = (error: unknown) => {
  let errorMessage = "";
  if (typeof error === "string") {
    errorMessage = error.toUpperCase();
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  return errorMessage;
};

export default function QueryWrapper<T>(props: Props<T>) {
  const { addToast } = useToast();
  const { status, error, data, render } = props;
  const errorMessage = parseErrorMessage(error);
  useEffect(() => {
    if (errorMessage !== "") {
      addToast({
        variant: "error",
        title: "Error",
        description: errorMessage,
      });
    }
  }, [errorMessage, addToast]);
  if (status === "pending") {
    return <Spinner></Spinner>;
  } else if (status === "error") {
    return <Spinner></Spinner>;
  } else if (isNotUndefined(data)) {
    return render(data);
  }
  return null;
}
