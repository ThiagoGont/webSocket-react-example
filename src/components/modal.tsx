import type React from "react";
import Button from "./button";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  cancelFn?: () => void;
  primaryFn?: () => void;
  closeIcon?: React.ReactNode;
  content?: React.ReactNode;
  titleContent?: React.ReactNode;
  className?: string;
}

const Modal = ({
  open,
  cancelFn,
  primaryFn,
  closeIcon,
  content,
  titleContent,
  className,
}: Props) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
      return;
    } else {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={cancelFn} />
      {/* Modal content */}
      <div
        className={`
          flex flex-col justify-between
          relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl
          transform transition-all duration-200
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-2"
          }
          ${className}
        `}
      >
        {/*Header*/}
        <div className="flex flex-row justify-between items-center mb-4">
          <div>{titleContent}</div>
          <button
            className={"hover:opacity-70 transition-all duration-300"}
            onClick={cancelFn}
          >
            {closeIcon || "X"}
          </button>
        </div>
        {/*Content*/}
        <div className="mb-6 flex-1">{content}</div>

        {/*footer*/}
        <div className="border-t inline-flex gap-3 justify-end pt-4">
          {cancelFn && <Button onClick={cancelFn}> Cancel </Button>}
          {primaryFn && (
            <Button.submit onClick={primaryFn}> Confirm </Button.submit>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
