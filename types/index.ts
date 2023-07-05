import { MouseEventHandler } from "react";


export interface CustomButtonProps {
    isDisabled?: boolean;
    buttonType?: "button" | "submit" ;
    containerStyles?: string; 
    textStyles?:string;
    title:string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement> ;
} 

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

export interface FilterProps {
    model: string;
    year: number;
    manufacturer: string;
    fuel: string;
    limit: number;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}