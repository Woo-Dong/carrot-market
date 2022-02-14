import { cls } from "../libs/utils";

interface ButtonPros {
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({ large = false, text, ...rest }: ButtonPros) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full bg-orange-500 text-white rounded-md hover:bg-orange-600 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
        large ? "py-3 text-base" : "py-2 text-sm"
      )}
    >
      {text}
    </button>
  );
}
