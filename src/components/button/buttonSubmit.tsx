import { cn, type HTMLButtonType } from "../../types/components";

const ButtonSubmit = ({ children, ...props }: HTMLButtonType) => {
  return (
    <button
      type="submit"
      {...props}
      className={cn(
        "rounded-lg py-2 px-4 hover:opacity-80 transition-opacity duration-300 cursor-pointer bg-green-400 text-white font-semibold",
        props.className,
      )}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
