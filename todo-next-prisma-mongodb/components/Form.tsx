import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  action: (formdata: FormData) => Promise<void>;
  className?: string;
  onSubmit?: () => void;
}

export default function Form({
  children,
  className,
  action,
  onSubmit,
}: FormProps) {
  return (
    <form action={action} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
