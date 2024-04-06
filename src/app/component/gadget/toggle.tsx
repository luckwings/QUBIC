import { useState } from "react";

interface ToggleProps {
  label: string;
  onToggle: (value: boolean) => void;
}

const Toggle = ({ label, onToggle }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onToggle(newValue);
  };

  return (
    <label className="flex items-center h-full cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="w-[60px] h-[41px] bg-[#100f17] rounded-full shadow-inner"></div>
        <div
          className={`${
            isChecked ? "bg-[#822eda]" : "bg-gray-200"
          } absolute left-0 top-0 w-[35px] h-[35px] mt-[3px] ml-[4px] rounded-full transition-transform transform ${
            isChecked ? "translate-x-1/2" : "translate-x-0"
          }`}
        ></div>
      </div>
      {/* <span className="text-gray-700">{label}</span> */}
    </label>
  );
};

export default Toggle;
