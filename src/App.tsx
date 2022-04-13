import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Word from "./components/Word";
import { lexAnalyzer } from "./NLP";


function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any[]>([]);

  const proccessText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = lexAnalyzer(input)
    setResult(result);
  };

  return (
    <>
      <h1>لغة الضاد</h1>
      <div className="container" dir="rtl">
        <form onSubmit={proccessText}>
          <Input value={input} onChange={setInput} />
          <button type="submit">تحليل صرفي</button>
        </form>
        <div className="grid">
          {result.map((word, idx) => (
            <Word word={word} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
