import {CarCard, CustomFilter, Hero, SearchBar, ShowMore} from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils';

export default async function Home({searchParams}: HomeProps) {

  const allCars = await fetchCars({
    model: searchParams.model || "",
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || new Date().getFullYear(),
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10
  });

  console.log(allCars);

  const isDataEmpty = ! Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car Catalogue </h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {
          !isDataEmpty ? (

            <section>
              <div className='home__cars-wrapper'>
                {
                  allCars.map(car => (
                    <CarCard key={car} car={car} />
                  ))
                }
              </div>  

              <ShowMore 
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
           ):(
            <div>No Result</div>
          )
        }
      </div>
    </main>
  )
}
