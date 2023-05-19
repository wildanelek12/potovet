import { useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePickerComponent({ asSingle, value, onChange }) {
  return (
    <>
      <div>
        <label className={"capitalize font-semibold"}>Time Elapsed</label>
        <div className="border-2 border-[C6C6C6] rounded-lg ">
          <Datepicker
            asSingle={asSingle}
            primaryColor={"teal"}
            value={value ?? ""}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            showShortcuts={true}
          />
        </div>
      </div>
    </>
  );
}
