

export default function Input({ value, onChange }: { value: string, onChange: (newValue: string) => void }) {

    return (
        <div>
            <input
                type="text"
                className="p-8 rounded-8 w-full max-w-[780px] border text-primary-800
                focus-within:outline-primary-400"
                placeholder="اكتب الجملة ليتم تحليلها صرفياً"
                value={value}
                onChange={e => {
                    onChange(e.target.value)
                }} />
        </div>
    )
}
