import { useState } from "react";
import { lexAnalyzer } from "src/NLP";
import Input from "src/components/Input";
import Word from "src/components/Word";


function App() {
    const [input, setInput] = useState("فسيلعبن اللاعبون ، و يأكل المشروب و المطلوب طالبات ذاهبون آكل متدحرج");
    const [result, setResult] = useState<any[]>([]);

    const proccessText = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = lexAnalyzer(input)
        setResult(result);
    };

    return (
        <div className="bg-gray-50 p-36 rounded-16 shadow-lg" >
            <form onSubmit={proccessText}>
                <Input
                    value={input}
                    onChange={setInput}
                    placeholder="اكتب الجملة ليتم تحليلها صرفياً"
                />
                <button className="bg-primary-600 text-white py-8 px-16 rounded-8 mt-24" type="submit">تحليل صرفي</button>
            </form>
            <div className="grid gap-16 mt-24" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
                {result.map((word, idx) => (
                    <Word word={word} key={idx} />
                ))}
            </div>
        </div>
    );
}

export default App;
