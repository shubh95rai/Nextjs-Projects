interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  autofocus?: boolean;
}

export default function Input({
  name,
  type,
  placeholder,
  value,
  autofocus,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        autoFocus={autofocus}
        className="w-full rounded-md px-4 py-2 outline-none focus:shadow-[0px_0px_0px_1px_black_inset]"
        autoComplete="off"
      />
    </>
  );
}
