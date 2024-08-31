"use client";

import LocalitiesInfo from "../lib/localities.json";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Memoize suggestions
  const suggestions = useMemo(() => {
    if (searchTerm.length > 1) {
      return LocalitiesInfo.filter((l) =>
        l.locality.toLowerCase().includes(searchTerm.toLowerCase())
      )
        .map((l) => l.locality)
        .slice(0, 5);
    }
    return [];
  }, [searchTerm]);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  //for navigating to weather-info page
  const navigateToWeather = useCallback(
    (term: string) => {
      setIsLoading(true);
      router.push(`/weather/${encodeURIComponent(term)}`);

      setTimeout(() => {
        setIsLoading(false);
      }, 60000);
    },
    [router]
  );

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (selectedIndex >= 0) {
      navigateToWeather(suggestions[selectedIndex]);
    } else if (searchTerm) {
      navigateToWeather(searchTerm);
    }
  };

  //handling up and down arrow keys
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "ArrowDown") {
      evt.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (evt.key === "ArrowUp") {
      evt.preventDefault();
      setSelectedIndex((prev) => (prev > -1 ? prev - 1 : -1));
    } else if (evt.key === "Enter" && selectedIndex >= 0) {
      evt.preventDefault();
      navigateToWeather(suggestions[selectedIndex]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for a locality..."
          disabled={isLoading}
          className="px-4 py-2 w-full focus:outline-none rounded-2xl text-gray-700 disabled:bg-gray-200"
        />
        <div className="absolute right-2 top-[0.6rem]">
          {isLoading ? (
            <CgSpinner className="animate-spin text-[#03045e] w-5 h-5" />
          ) : (
            <FiSearch className="text-[#03045e] w-5 h-5" />
          )}
        </div>
      </div>
      {suggestions.length > 0 && !isLoading && (
        <ul className="absolute z-50 shadow-xl w-full max-w-[800px] bg-white rounded-2xl border-t-2 border-gray-200 text-gray-600">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => navigateToWeather(suggestion)}
              className={`p-2 hover:bg-gray-100 cursor-pointer rounded-2xl ${
                index === selectedIndex ? "bg-gray-100" : ""
              }`}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
