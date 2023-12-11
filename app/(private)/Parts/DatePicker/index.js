import { useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePickerComponent({ asSingle, value, onChange }) {
  const isValueNull = value === null || value === undefined || value === '';
  return (
    
    <>
      <div>
        <label className={"capitalize font-semibold"}>Project Time</label>
        <div className="border-2 border-[C6C6C6] rounded-lg ">
          <Datepicker
            inputClassName={`focus:outline-none focus:ring-0 p-2 w-full  ${isValueNull ? 'border-red-500' : 'border-transparent'}`}
            asSingle={asSingle}
            primaryColor={"teal"}
            value={value ?? ""}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            showShortcuts={true}
            readOnly={true} 
          />
        </div>
      </div>
    </>
  );
}
