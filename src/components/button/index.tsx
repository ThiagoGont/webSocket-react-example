import { cn, type HTMLButtonType } from "../../types/components";
import ButtonSubmit from "./buttonSubmit";

const Button = ({ children, ...props }: HTMLButtonType) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "cursor-pointer rounded-lg p-2 hover:bg-opacity-60 transition-opacity duration-300 ",
        props.className,
      )}
    >
      {children}
    </button>
  );
};

Button.submit = ButtonSubmit;

export default Button;
