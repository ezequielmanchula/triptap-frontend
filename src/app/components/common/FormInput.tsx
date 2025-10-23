"use client";

import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="Noto text-sm font-normal block text-[#1E1E1E] mb-2">{label}</label>
        <input
          ref={ref}
          {...props}
          className="Noto text-sm w-full p-2 rounded  bg-white font-medium text-[#1E1E1E] border border-[#D9D9D9] focus:border-blue-500 focus:outline-none"/>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
