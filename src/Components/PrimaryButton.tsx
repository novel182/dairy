import { primary } from "utils/colors"

interface PrimaryButtonProps {
    text: string,
    className?: string,
    onClick?: () => void,
    disabled?: boolean 
}

const PrimaryButton : React.FC<PrimaryButtonProps> = ({text, className, onClick, disabled=false}) => {
    const buttonClassName = className || "w-[60%] disabled:opacity-50"
    return (
        <button style={{backgroundColor: primary}} className={buttonClassName} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default PrimaryButton