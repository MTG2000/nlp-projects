

export default function Input({ value, onChange }: { value: string, onChange: (newValue: string) => void }) {

    return (
        <div>
            <input type="text" value={value} onChange={e => {
                onChange(e.target.value)
            }} />
        </div>
    )
}
