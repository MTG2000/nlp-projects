

interface Props {
    value: string
    onChange: (newValue: string) => void
    placeholder?: string
    className?: string
}

export default function Input({ value, onChange, placeholder, className }: Props) {

    return (
        <div>
            <input
                type="text"
                className={`p-8 rounded-8 w-full max-w-[780px] border text-primary-800
                focus-within:outline-primary-400 ${className}`}
                placeholder={placeholder}
                value={value}
                onChange={e => {
                    onChange(e.target.value)
                }} />
        </div>
    )
}
