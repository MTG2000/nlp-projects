import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
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
          <p className="gridLable">الكلمة</p>
          <p className="gridLable">الجذر</p>
          <p className="gridLable">النوع</p>
          <p className="gridLable">الزمن</p>
          <p className="gridLable">جمع</p>
          <p className="gridLable">تأنيث</p>
          {result.map((o) => (
            <>
              <p className="gridItem">{o.word}</p>
              <p className="gridItem">{o.root ? o.root : "__"}</p>
              <p className="gridItem">{o.type ? o.type : "__"}</p>
              <p className="gridItem">
                {o.tense ? o.tense : "__"}
              </p>
              <p className="gridItem">
                {o.type === "noun" ? (o.isPlural ? "جمع" : "مفرد") : "__"}
              </p>
              <p className="gridItem">
                {o.type === "noun" ? (o.isFemale ? "مؤنث" : "مذكر") : "__"}
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
