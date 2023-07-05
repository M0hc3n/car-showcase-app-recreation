"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";

const SearchButton = ({otherClasses}: {otherClasses: string}) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src='/magnifying-glass.svg'
        alt="magnifiying-glass"
        width={40}
        height={40}
        className="object-contain"      
      />
    </button>
  )
}

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer.trim() === "" && model.trim() === ""){
      return alert("Please provide a valid input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase() );
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    // if model given, update search params
    // else delete it from search params
    if(model){
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // same logic
    if(manufacturer){
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
  
    router.push(newPathName);
  }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />

        <input 
          type="text"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
          placeholder="Tiguan ..."
          className="searchbar__input"        
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      {/* Note: max-sm means that this css property will be applied when (max-width: 640px) */}
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar