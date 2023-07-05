"use client";
import  { Fragment } from 'react'
import Image from 'next/image';

import { Dialog, Transition } from '@headlessui/react'
import { CarDetailsProps } from '@/types';
import { generateImageURL } from '@/utils';

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
          // act as React Fragment
            // as={Fragment}
            // transition styling when pop-up
            enter="ease-out duration-300"
            // state at time t=0
            enterFrom='opacity-0'
            // state at time = t_final
            enterTo='opacity-100'
            // transition styling when pop-down
            leave="ease-in duration-200"
            // state at time t=t_final
            leaveFrom="opacity-100"
            // state at time = 0
            leaveTo="opacity-0"
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                // as={Fragment}
                enter="ease-out duration-300"
                // state at time t=0
                enterFrom='opacity-0 scale-95'
                // state at time = t_final
                enterTo='opacity-100 scale-100'
                // transition styling when pop-down
                leave="ease-out duration-300"
                // state at time t=t_final
                leaveFrom="opacity-100 scale-100"
                // state at time = 0
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className='dialog__panel'>
                  <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                  >
                    <Image
                    src='/close.svg'
                    alt='close'
                    height={20}
                    width={20}
                    className='object-contain'
                    />
                  </button>

                  <div className='flex-1 flex flex-col gap-3'>
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image src="/hero.png" alt='car model' fill priority className='object-contain'/>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 relative h-24 bg-primary-blue-100 rounded-lg">
                        <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
                      </div>

                      <div className="flex-1 relative h-24 bg-primary-blue-100 rounded-lg">
                        <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
                      </div>

                      <div className="flex-1 relative h-24 bg-primary-blue-100 rounded-lg">
                        <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
                      </div>
                    </div>
                  </div>

                  <div className='flex-1 flex flex-col gap-2'>
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {
                        Object.entries(car).map(([key, value]) => (
                          <div className='flex justify-between gap-5 w-full text-right' key={key}>
                            <h4 className="text-grey capitalize">
                              {key.replaceAll("_", " ")}
                            </h4>
                            <p className='text-black-100 font-semibold'>
                              {value}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>

            </div>
          </div>

        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails