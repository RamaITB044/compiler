import { useEffect, useState } from "react";
import "./codeeditor.css";
import Editor from "@monaco-editor/react";
import Navbar from "./navbar";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;

function Hehe() {
  const [userCode, setUserCode] = useState(``);
  const [userLang, setUserLang] = useState("python");
  // const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  // const [userInput, setUserInput] = useState("");
  // const [userOutput, setUserOutput] = useState("");
  // const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const options = {
    fontSize: fontSize,
  };

  // function compile() {
  //   setLoading(true);
  //   if (userCode === ``) {
  //     return;
  //   }
  //   Axios.post(`${URL}/compile`, {
  //     code: userCode,
  //     language: userLang,
  //     input: userInput,
  //   })
  //     .then((res) => {
  //       // setUserOutput(res);
  //       console.log(res.data.output);
  //       setUserOutput(res.data.output);
  //     })
  //     .then(() => {
  //       setLoading(false);
  //     });
  // }

  // function clearOutput() {
  //   setUserOutput("");
  // }

  return (
    <div className="App">
      {width <= 880 ? (
        <div className="unavailable">
          <span className="text-mask">Coming to mobile devices soon!</span>
        </div>
      ) : (
        <>
          <Navbar
            userLang={userLang}
            setUserLang={setUserLang}
            // userTheme={userTheme}
            // setUserTheme={setUserTheme}
            fontSize={fontSize}
            setFontSize={setFontSize}
          />
          <div className="main">
            <div className="left-container">
              <Editor
                options={options}
                height="calc(100vh - 50px)"
                width="100%"
                // theme={userTheme}
                language={userLang}
                defaultLanguage="python"
                defaultValue="# Enter your code here"
                onChange={(value) => {
                  setUserCode(value);
                }}
              />
              <button className="run-btn" onClick={() => compile()}>
                Run
              </button>
            </div>
            <div className="right-container">
              <h4>Input:</h4>
              <div className="input-box">
                <textarea
                  id="code-inp"
                  onChange={(e) => setUserInput(e.target.value)}
                ></textarea>
              </div>
              <h4>Output:</h4>
              <div className="output-box">
                <pre>{userOutput}</pre>
                <button
                  onClick={() => {
                    clearOutput();
                  }}
                  className="clear-btn"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hehe;
