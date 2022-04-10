import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Dictionary, lexAnalyzer } from "./NLP";

console.log(Dictionary.getWord("لاعبات"));

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any[]>([]);

  const proccessText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = lexAnalyzer(input);
    setResult(result);
  };

  return (
    <>
          <h1>لغة الضاد</h1>
    <div className="container" dir="rtl">

      <form onSubmit={proccessText}>
        <Input value={input} onChange={setInput} />
        <button type="submit">تحليل</button>
      </form>
      <div className="grid">
        <p className="gridLable">الكلمة</p>
        <p className="gridLable">الجذر</p>
        <p className="gridLable">النوع</p>
        <p className="gridLable">الزمن</p>
        {
          result.map((o) => (
            <>
            <p className="gridItem">{o.word}</p>
            <p className="gridItem">{o.root?o.root:"__"}</p>
            <p className="gridItem">{o.type?o.type:"__"}</p>
            <p className="gridItem">{o.tense?o.tense:"__"}</p>
            </>
          ))
        }
      </div>
      <div>
        {result.map((o) => (
          <p>{JSON.stringify(o, null, 4)}</p>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
