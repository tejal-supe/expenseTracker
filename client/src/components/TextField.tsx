import React from "react";

interface TextProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextProps> = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        className="mt-1 p-2 w-full border rounded-md text-black focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-300 transition-colors duration-300"
      />
    </div>
  );
};

export default TextField;
