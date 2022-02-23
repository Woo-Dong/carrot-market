import type { UseFormRegisterReturn } from "react-hook-form";

interface InputPros {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  type: string;
  register: UseFormRegisterReturn;
  required?: boolean;
}

export default function Input({
  label,
  name,
  kind,
  type,
  register,
  required,
}: InputPros) {
  return (
    <div>
      <label className="mb-1 text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      {kind === "text" ? (
        <div className="rounded-md flex items-center shadow-sm">
          <input
            className="apppearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placehodler-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id={name}
            required={required}
            type={type}
            placeholder={name}
            {...register}
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute left-0 pl-3 pointer-events-none flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            className="apppearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placehodler-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id="price"
            required={required}
            type={type}
            placeholder="0.00"
            {...register}
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="phone"
            required={required}
            type={type}
            className="apppearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placehodler-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            {...register}
          />
        </div>
      ) : null}
    </div>
  );
}
