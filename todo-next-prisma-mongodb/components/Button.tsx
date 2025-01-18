import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  actionButton?: boolean;
  onClick?: () => void;
}

export default function Button({
  type,
  text,
  actionButton,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${actionButton ? "rounded-full p-2" : "rounded-md px-4 py-2"} bg-orange-700 text-white outline-none focus:shadow-[0px_0px_0px_1px_black_inset]`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
