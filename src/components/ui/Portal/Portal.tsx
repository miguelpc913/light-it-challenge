import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  children?: React.ReactNode;
  className?: string;
  element?: string;
  role?: string;
  append?: boolean;
  target?: string;
};

export const Portal = ({
  children,
  className = "root-portal",
  element = "div",
  role,
  append = true,
  target = "body",
}: Props) => {
  const [container] = React.useState(() => {
    const el = document.createElement(element);
    const classNamesArray = className.split(" ");
    classNamesArray.forEach((className) => {
      if (className.trim().length > 0) {
        el.classList.add(className);
      }
    });
    if (role) {
      el.setAttribute("role", role);
    }
    el.setAttribute("tabIndex", "1");
    return el;
  });

  useEffect(() => {
    if (append) {
      document.querySelector(target)?.appendChild(container);
    } else {
      document.querySelector(target)?.prepend(container);
    }
    return () => {
      document.querySelector(target)?.removeChild(container);
    };
  }, [append, container, target]);

  return createPortal(children, container);
};
