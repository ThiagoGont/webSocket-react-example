import { useState } from "react";
import { cn, type HTMLInputType } from "../../types/components";
import Button from "../button";
import { EyeOff, Eye } from "lucide-react";

const InputPassword = ({
  classNames,
  ...props
}: { classNames?: string } & HTMLInputType) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("inlin-flex gap-2 items-center", classNames)}>
      <input {...props} type={showPassword ? "text" : "password"} />
      <Button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <Eye /> : <EyeOff />}
      </Button>
    </div>
  );
};

export default InputPassword;
