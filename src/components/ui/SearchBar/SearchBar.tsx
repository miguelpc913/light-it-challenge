import { FiSearch, FiX } from "react-icons/fi";
import "./SearchBar.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  ariaLabel = "Search",
}: Props) {
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={`search-bar ${className}`}>
      <div className="search-bar__container">
        <FiSearch className="search-bar__icon" aria-hidden="true" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="search-bar__input"
          aria-label={ariaLabel}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="search-bar__clear"
            aria-label="Clear search"
          >
            <FiX aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
