import { useState, useRef, useEffect } from "react";
import jobsData from "../../db/jobs.json";
import "./Dropdown.scss";

interface DropdownProps {
  defaultValue?: string;
  name: string;
  required?: boolean;
  onChange?: (value: string) => void; //  added
}

const Dropdown: React.FC<DropdownProps> = ({
  defaultValue,
  name,
  required = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value); // 🔥 notify parent
    }
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
        {selected || "Select Position"}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Options */}
      {isOpen && (
        <ul className="dropdown-menu">
          {jobsData.map((job) => (
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
