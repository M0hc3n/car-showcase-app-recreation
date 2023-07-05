"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          buttonType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
