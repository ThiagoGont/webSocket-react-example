import { cn, type HTMLButtonType } from "../../types/components";

const ButtonSubmit = ({ children, ...props }: HTMLButtonType) => {
  return (
    <button
      type="submit"
      {...props}
      className={cn(
        "rounded-lg py-2 px-4 hover:bg-opacity-60 transition-opacity duration-300 cursor-pointer",
        props.className,
      )}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
