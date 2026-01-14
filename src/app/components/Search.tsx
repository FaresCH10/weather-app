"use client"
import { ChangeEvent, FormEvent, useState } from "react";

interface setCityProps {
  setCity: (city: string) => void
}



const Search = ({setCity}: setCityProps) => {

  const [inputValue, setInputValue] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    if (!inputValue.trim()) return
    setCity(inputValue)
    setInputValue("")
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input type="text" className="search-bar" value={inputValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}  placeholder="Search City..." />
    </form>
  );
};

export default Search;
