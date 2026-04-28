import { cn, type HTMLInputType } from "../../types/components";

const InputText = ({ ...props }: HTMLInputType) => {
  return (
    <div className="gap-1 inline-flex items-center border border-gray-200 m-2 px-2 hover:opacity-80 transition-all duration-200 focus-within:ring-1 focus-within:ring-blue-300 rounded-lg">
      {props.icon && <props.icon />}
      <input
        {...props}
        type="text"
        className={cn(
          `border-none pl-1 pr-2 h-10 cursor-text outline-none focus:ring-0 w-full min-w-0`,
          props.className,
        )}
      />
    </div>
  );
};

export default InputText;
