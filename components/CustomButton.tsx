
import { CustomButtonProps } from "@/types"

const CustomButton = ({isDisabled, buttonType, containerStyles, textStyles, title, rightIcon, handleClick}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >

      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton