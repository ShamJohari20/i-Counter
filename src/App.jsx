import { useState } from "react";
import "./App.css"

const App = () => {

  const [min, setMin] = useState("")
  const [start, setStart] = useState("")
  const [max, setMax] = useState("")
  const [counter, setCounter] = useState()
  const [text, setText] = useState()


  const chengeCounter = () => {

    if (min > start || max < start) {
      setText("Worst fellow Play Carefully")
    }
    else {
      setCounter(start)
      setText('')
    }
  }

  const setDecrease = () => {
    if (counter == min) {
      setText("Worst fellow Play Carefully")

    } else {
      setCounter(counter - 1)
      setText('')
    }

  }

  const setIncrease = () => {
    if (counter == max) {
      setText("Worst fellow Play Carefully")


    } else {
      setCounter(counter + 1)
      setText('')
    }
  }

  return (
    <>
      <div className="hedding"><h1>Interactive Counter</h1></div>
      <div className="text"><h2>Play Carefully</h2></div>
      <div className="main">

        <div className="c1">
          <input
            type="number"
            placeholder="Enter The Minimum Value"
            value={min}
            onChange={(event) => {
              setMin(parseInt(event.target.value) || 0);
            }}
          />

          <input
            type="number"
            placeholder="Enter The Startting Value"
            value={start}
            onChange={(event) => {
              setStart(parseInt(event.target.value) || 0);
            }}
          />

          <input
            type="number"
            placeholder="Enter The Maximum Value"
            value={max}
            onChange={(event) => {
              setMax(parseInt(event.target.value) || 0);
            }}
          />

        </div>

        <div className="c2">
          <button onClick={chengeCounter} >Set Counter</button>
        </div>

        <div className="c3">
          <h1 id='count'>{counter} </h1>
          <h3>{text}</h3>
        </div>

        <div className="button">
          <img className="btn" id="down" src="/decrease.png" alt="" width="50px"
            onClick={setDecrease} />

          <img className="btn" id="reset" src="/reset.png" alt="" width="50px"
            onClick={() => window.location = "/"} />

          <img className="btn" id="up" src="/increase.png" alt="" width="50px"
            onClick={setIncrease} />
        </div>
      </div>
    </>
  );
}

export default App