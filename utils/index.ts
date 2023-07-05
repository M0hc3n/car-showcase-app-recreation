import { CarProps, FilterProps } from "@/types";
import { connectToDB } from "./database";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars( filters: FilterProps ){

    const headers: HeadersInit = {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY || "",
        "X-RapidAPI-Host":"cars-by-api-ninjas.p.rapidapi.com" 
    }

    const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");

    Object.entries(filters).map(([key, value]) => {
        if(key === "manufacturer"){
            url.searchParams.append("make", value);
        } else if(key === "fuel"){
            url.searchParams.append("fuel_type", value);
        } else{
            url.searchParams.append(key, value);
        }
    } )

    console.log(`${url}`);
    
    const response = await fetch(url.toString(), {
        headers:headers
    })

    const result = await response.json();
//  console.log(result);

    return result;
}

// NOTICE: not working
export const generateImageURL = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");

    const {make, model, year} = car;

    console.log(process.env.IMAGIN_API_KEY);
    

    url.searchParams.append('customer', process.env.IMAGIN_API_KEY ||"");
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    console.log(url.toString());
    

    return `${url}`;
}

export const updateSearchParams = (type: string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    return `${window.location.pathname}?${searchParams.toString()}`;
}

export {
    connectToDB
};