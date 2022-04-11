import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { lexAnalyzer } from "./NLP";


function App() {

  const [input, setInput] = useState("")
  const [result, setResult] = useState<any[]>([])

  const proccessText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = lexAnalyzer(input)
    setResult(result);
  }

  return <div className="container" dir="rtl">
    <form onSubmit={proccessText}>
      <Input value={input} onChange={setInput} />
      <button type="submit">
        Submit
      </button>
    </form>
    <div>
      {result.map(o => <p>
        {JSON.stringify(o, null, 4)}
      </p>)}
    </div>
  </div>;
}

export default App;
