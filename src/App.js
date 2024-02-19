
import { useEffect, useState } from "react";
import "./App.css"
import Alert from "./Alert";
function App() {
  const [color, setColor] = useState("")
  const [textColor, setTextColor] = useState("")
  const [text, setText] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [alert, setAlert] = useState()

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
  }

  setTimeout(() => {
    setAlert(null)
  }, 1500);

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    showAlert("Light Mode has Been Enabled", "success")
  }

  function innerText(event) {
    setText(event.target.value)
  }

  function caps() {
    setText(text.toUpperCase())
    showAlert("converted to upperCase", "success")
  }

  function lower() {
    setText(text.toLowerCase())
    showAlert("converted to lowerCase", "success")
  }

  function clear() {
    setText("")
    showAlert("text cleared", "success")
  }
  function onDandleCopy() {
    let copy = document.getElementById("floatingTextarea2")
    copy.select();
    navigator.clipboard.writeText(copy.value)
    showAlert("text copied", "success")
  }

  function removeExtraSpaces() {
    setText(text.replace(/\s+/g, " "))
    showAlert("removed extraSpaces", "success")
  }
  useEffect(() => {
    if (darkMode) {
      setColor("black")
      setTextColor("Aqua")
      showAlert("Dark Mode has Been Enabled", "success")
    } else {
      setColor("	#F0F8FF")
      setTextColor("black")
    }

  }, [darkMode])
  return (
    <>

      <div style={{ background: color, color: textColor, height: " 100vh" }}>
        <nav className="navbar" style={{ background: color, color: textColor, border: "2px solid gray" }}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">TextUtils</span>
            <div className="d-flex">
              <div className="form-check form-switch me-5">
                <input className="form-check-input" type="checkbox" onClick={handleDarkMode} id="flexSwitchCheckDefault" />
                <label className="form-check-label">{(darkMode ? 'Light' : 'Dark') + ' Mode'}</label>
              </div>
            </div>
          </div>
        </nav>
        <Alert
          alert={alert}
        />

        <div className="container">
          <h2 className="mx-2" style={{ padding: "12px" }}>Try textUtils- <span>convert your text as well as you want...</span> </h2>
          <div className="form-floating  justify-content-center">
            <textarea className="form-control" placeholder="Leave A Comment" id="floatingTextarea2" value={text} onChange={innerText}
              style={{ height: "40vh", background: color, color: textColor, border: "5px solid gray", textAlign: "center" }}>
            </textarea>

            <div className="form-floating d-flex justify-content-center mt-1" >
              <button type="button" className="btn btn-primary m-2" onClick={caps} disabled={text.length === 0} >Captlize</button>
              <button type="button" className="btn btn-primary m-2" onClick={lower} disabled={text.length === 0}>Lowercase</button>
              <button type="button" className="btn btn-primary m-2" onClick={clear} disabled={text.length === 0}>Clear Text</button>
              <button type="button" className="btn btn-primary m-2" onClick={onDandleCopy} disabled={text.length === 0}>copy Text</button>
              <button type="button" className="btn btn-primary m-2" onClick={removeExtraSpaces} disabled={text.length === 0}>Remove Extra Spaces</button>
            </div>

            <div className="container">
              <h2>Textarea Summary</h2>
              <p>{text.split(" ").filter((element) => !element == 0).length} Word <span>{text.length} characters</span> </p>
              <p>{0.08 * text.split(" ").filter((element) => !element == 0).length} minute time to reads...</p>
              <h3>Text preview</h3>
              <p>{text ? text : "preview your text"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
