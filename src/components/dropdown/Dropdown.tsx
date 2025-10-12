import { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";


interface DropdownProps {
  value?: string;                // ✅ controlled value
  defaultValue?: string;         // fallback for uncontrolled
  data: Data[];
  name: string;
  required?: boolean;
  onChange?: (value: string) => void;
}
interface Data {
  id: string | number;
  title: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  defaultValue,
  data,
  name,
  required = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Internal state (only used when value is not controlled)
  const [internalSelected, setInternalSelected] = useState(defaultValue || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Decide the actual selected value
  const selected = value !== undefined ? value : internalSelected;

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    if (value === undefined) {
      // uncontrolled → update local state
      setInternalSelected(val);
    }
    setIsOpen(false);
    onChange?.(val); // notify parent always
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} required={required} />

      {/* Dropdown toggle */}
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "Select " + name}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Options */}
      {isOpen && (
        <ul className="dropdown-menu">
          {data.map((job) => (
            <li
              key={job.id}
              className={selected === job.title ? "active" : ""}
              onClick={() => handleSelect(job.title)}
            >
              {job.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
