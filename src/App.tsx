import { useState } from "react";
import "./App.css";

function App() {
  const [Eqation, setEqation] = useState<string>("");
  const [Current, setCurrent] = useState<string>("");
  let [newValue] = useState<string>("");
  const Setter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // let newValue: string =
    newValue = Eqation + e.target.value;
    setEqation(newValue);
  };
  const calculate = () => {
    let result = eval(Eqation);
    setEqation(result);
    console.log(result);
  };

  return (
    <>
      <h1>Calculator</h1>
      <div>
        <div className="screen">
          <h4 style={{ margin: 0, padding: 0 }}>{Eqation}</h4>

          <h3 style={{ margin: 0, padding: 0 }}>{Current}</h3>
        </div>
        <div>
          <button value={1} onClick={(e: any) => Setter(e)}>
            1
          </button>
          <button value={2} onClick={(e: any) => Setter(e)}>
            2
          </button>
          <button value={3} onClick={(e: any) => Setter(e)}>
            3
          </button>
          <button value={"+"} onClick={(e: any) => Setter(e)}>
            +
          </button>
        </div>
        <div>
          <button value={4} onClick={(e: any) => Setter(e)}>
            4
          </button>
          <button value={5} onClick={(e: any) => Setter(e)}>
            5
          </button>
          <button value={6} onClick={(e: any) => Setter(e)}>
            6
          </button>
          <button value={"-"} onClick={(e: any) => Setter(e)}>
            -
          </button>
        </div>
        <div>
          <button value={7} onClick={(e: any) => Setter(e)}>
            7
          </button>
          <button value={8} onClick={(e: any) => Setter(e)}>
            8
          </button>
          <button value={9} onClick={(e: any) => Setter(e)}>
            9
          </button>
          <button value={"*"} onClick={(e: any) => Setter(e)}>
            x
          </button>
        </div>
        <div>
          <button value={"00"} onClick={() => setEqation("")}>
            C
          </button>
          <button value={0} onClick={() => setEqation(Eqation.slice(0, -1))}>
            CE
          </button>
          <button value={"/"} onClick={(e: any) => Setter(e)}>
            /
          </button>
          <button value={"="} onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
