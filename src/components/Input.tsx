

export default function Input({ value, onChange }: { value: string, onChange: (newValue: string) => void }) {

    return (
        <div>
            <input type="text" placeholder="اكتب الجملة ليتم تحليلها صرفياً" value={value} onChange={e => {
                onChange(e.target.value)
            }} />
        </div>
    )
}
