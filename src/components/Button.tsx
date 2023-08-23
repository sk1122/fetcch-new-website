interface IProps {
    text: string
    color: string
    bgColor: string
}

const Button = ({ text, color, bgColor }: IProps) => {
    return (
        <div className={`rounded-2xl px-4 py-2 font-md text-[${color}] bg-[${bgColor}]`}>
            {text}
        </div>
    )
}

export default Button