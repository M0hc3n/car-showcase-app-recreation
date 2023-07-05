"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

import { getProviders, signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  // const isConnected = false;

  const { data: session } = useSession();

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div className="flex relative">
          {session?.user ? (
            <div className="flex">
              <CustomButton
                title={`Hello ${session.user.name}, Press to Sign Out`}
                buttonType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                handleClick={() => signOut()}
              />
            </div>
          ) : (
            <>
              <CustomButton
                title="Sign in with Google"
                buttonType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                handleClick={() => signIn()}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
