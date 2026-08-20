import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3 text-left   cursor-pointer bg-gray-200"
      >
        <span className="text-sm font-semibold text-slate-800">{title}</span>

        <ChevronDown
          size={17}
          className={`text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-200 p-4">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
