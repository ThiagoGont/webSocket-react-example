import { cn } from "../../types/components";

const PreviewButton = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-lg p-2 hover:opacity-80 transition-opacity duration-300",
        props.className,
      )}
    >
      {children}
    </button>
  );
};

export default PreviewButton;
