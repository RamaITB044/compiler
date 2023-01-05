import "./App.css";
import { examname, questions } from "./Components/data.js";
// import Hehe from "./Components/codeeditor";
// import Navbar from "./Components/navbar";
import { useState, useEffect } from "react";
import Select from "react-select";
import Editor from "@monaco-editor/react";
import img from "./Components/koder.jpg";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
function App() {
  const [userCode, setUserCode] = useState(``);
  const [userLang, setUserLang] = useState("python");
  const [fontSize, setFontSize] = useState(14);
  const [width, setWidth] = useState(1000);
  const [userInput, setUserInput] = useState("");
  const [inprow, setInpRow] = useState(1);
  const [plusclicks, setPlus] = useState(0);
  const [minusclicks, setminus] = useState(0);
  const [console, setConsole] = useState(true);
  const [editorHeight, seteditorheight] = useState("50vh");
  const [val, setval] = useState(false);
  const defval = {
    python: `# Cook your code here`,
    c: `#include<stdio.h>\nint main(){\n\t//Cook your code here;\n\treturn 0;\n}`,
    // cpp: `#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n\t//Cook your code here;\n\treturn 0;\n}`,
    cpp: `#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n\t//Cook your code here;\n\treturn 0;\n}`,
    java: "class Main {\n\tpublic static void main(String[] args) {\n\t\t//Cook your code here;\n\t}\n}",
    javascript: "//Enter your code here;\n",
  };
  // const [userTheme, setUserTheme] = useState("vs-dark");
  // const [userInput, setUserInput] = useState("");
  // const [userOutput, setUserOutput] = useState("");
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    document.getElementById("div22").style.height =
      window.innerHeight - document.getElementById("div1").offsetHeight + "px";
    document.getElementById("div21").style.height =
      window.innerHeight - document.getElementById("div1").offsetHeight + "px";
    document.getElementById("div21").style.overflowY = "auto";
    if (console) {
      seteditorheight(
        window.innerHeight -
          document.getElementById("div1").offsetHeight -
          document.getElementById("div221").offsetHeight -
          document.getElementById("div223").offsetHeight -
          document.getElementById("div224").offsetHeight +
          "px"
      );
    } else {
      seteditorheight(
        window.innerHeight -
          document.getElementById("div1").offsetHeight -
          document.getElementById("div221").offsetHeight -
          document.getElementById("div224").offsetHeight +
          "px"
      );
    }
  });
  const handle = useFullScreenHandle();
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "javascript" },
  ];
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     let x = document.getElementById("txt").value.split("\n");
  //     setInpRow(x.length+1);
  //   }
  // };
  const options = {
    fontSize: fontSize,
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "30px",
      height: "px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
    }),
    container: (provided) => ({
      ...provided,
      display: "inline-block",
      width: "130px",
      minHeight: "1px",
      textAlign: "left",
      border: "none",
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    // indicatorSeparator: (state) => ({
    //   display: "none"
    // }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "30px",
    }),
  };
  return (
    <>
      <FullScreen handle={handle}>
        {/* <div class="h-100 d-flex flex-column"> */}
        <nav id="div1" class="div1 header row navbar navbar-light bg-light ">
          <div class="container-fluid">
            <div class="navbar-brand">
              <img
                src={img}
                width="30"
                height="30"
                class="d-inline-block align-text-top"
                alt=""
              ></img>{" "}
              Exam Name
            </div>
            <div class="middle">
              <div class="butn d-flex float-left ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="m-auto items-center"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              {/* <div class="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="m-auto items-center"><path fill-rule="evenodd" d="M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z" clip-rule="evenodd"></path></svg></div>  */}

              <span class="ml-3 mr-3 h6 float-left align-text-top mt-1">
                <i class="fa-solid fa-bars mr-2"></i>Problem List
              </span>
              {/* <div class="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="m-auto items-center"><path fill-rule="evenodd" d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z" clip-rule="evenodd"></path></svg></div> */}
              <div class="butn d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="m-auto items-center"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <img
                src={img}
                width="30"
                height="30"
                class="d-inline-block align-top img-thumbnail rounded-circle mr-1.5"
                alt=""
              ></img>
            </div>
          </div>
        </nav>

        <div id="div2" class="div2 row content no-gutters">
          {/* <div><br></br></div> */}
          <div
            id="div21"
            class="col-6 div21 bg-light pt-2  border-right no-gutters"
          >
            <div class="pl-2">
              <pre class="">
                {`// C++ Code to insert node and to print inorder traversal
// using iteration
#include <bits/stdc++.h>
using namespace std;

// BST Node
class Node {
public:
	int val;
	Node* left;
	Node* right;
	Node(int val)
		: val(val)
		, left(NULL)
		, right(NULL)
	{
	}
};

// Utility function to insert node in BST
void insert(Node*& root, int key)
{
	Node* node = new Node(key);
	if (!root) {
		root = node;
		return;
	}
	Node* prev = NULL;
	Node* temp = root;
	while (temp) {
		if (temp->val > key) {
			prev = temp;
			temp = temp->left;
		}
		else if (temp->val < key) {
			prev = temp;
			temp = temp->right;
		}
	}
	if (prev->val > key)
		prev->left = node;
	else
		prev->right = node;
}

// Utiltiy function to print inorder traversal
void inorder(Node* root)
{
	Node* temp = root;
	stack<Node*> st;
	while (temp != NULL || !st.empty()) {
		if (temp != NULL) {
			st.push(temp);
			temp = temp->left;
		}
		else {
			temp = st.top();
			st.pop();
			cout << temp->val << " ";
			temp = temp->right;
		}
	}
}

// Driver code
int main()
{
	Node* root = NULL;
	insert(root, 30);
	insert(root, 50);
	insert(root, 15);
	insert(root, 20);
	insert(root, 10);
	insert(root, 40);
	insert(root, 60);

	inorder(root);

	return 0;
}

// This code is contributed by Tapesh(tapeshdua420)
`}
              </pre>
            </div>
          </div>
          <div
            id="div22"
            class="d-flex col-6 flex-column div22 edit no-gutters"
            style={val ? {} : {}}
          >
            <div
              id="div221"
              class="optoncode div221 d-flex justify-content-between"
            >
              <div class="d-flex p-2">
                <Select
                  styles={customStyles}
                  options={languages}
                  value={userLang}
                  onChange={(e) => {
                    setUserLang(e.value);
                  }}
                  placeholder={userLang}
                />
              </div>
              <div class="div2212">
                {/* <i class="fa-solid fa-download mr-4 "></i> */}
                <i class="fa-solid fa-rotate-left mr-4"></i>
                <span data-toggle="modal" data-target="#exampleModalCenter">
                  <i class="fa-solid fa-gear mr-4" type="button"></i>
                </span>
                <span>
                  <div
                    class="modal fade "
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Settings
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              onClick={() => {
                                setFontSize(
                                  fontSize - plusclicks + minusclicks
                                );
                                setminus(0);
                                setPlus(0);
                              }}
                            >
                              &times;
                            </span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div>
                            <div class="d-flex justify-content-between">
                              <div class="">
                                <h6>Font Size</h6>
                                <p>
                                  Choose your preferred font size for the code
                                  editor.
                                </p>
                              </div>
                              <div class="d-flex align-items-center">
                                <div class="btn-group">
                                  <button
                                    disabled={fontSize === 10}
                                    type="button"
                                    class="btn btn-secondary"
                                    onClick={() => {
                                      if (fontSize > 10) {
                                        setFontSize(fontSize - 1);
                                        setminus(minusclicks + 1);
                                      }
                                    }}
                                  >
                                    -
                                  </button>
                                  <button
                                    type="button"
                                    class="btn border-top border-bottom"
                                  >
                                    {fontSize}
                                  </button>
                                  <button
                                    disabled={fontSize === 20}
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                      if (fontSize < 20) {
                                        setFontSize(fontSize + 1);
                                        setPlus(plusclicks + 1);
                                      }
                                    }}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={() => {
                              setFontSize(fontSize - plusclicks + minusclicks);
                              setminus(0);
                              setPlus(0);
                            }}
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-dismiss="modal"
                            onClick={() => {
                              setminus(0);
                              setPlus(0);
                            }}
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
                {/* <i class="fa-solid fa-gear mr-4"></i> */}
                <i class="fa-regular fa-floppy-disk mr-4 "></i>
                <i class="fa-solid fa-expand pr-2 " onClick={handle.enter}></i>
                <i
                  class="fa-solid fa-expand pr-2"
                  onClick={() => {
                    setval(!val);
                  }}
                ></i>
                {/* <i class="fa-solid fa-compress mr"></i> */}
              </div>
            </div>
            <div id="div222" class="div222 my-auto" style={{ height: "100%" }}>
              <Editor
                options={options}
                height={editorHeight}
                width="100%"
                // theme={userTheme}
                language={userLang}
                defaultLanguage="python"
                value={defval[userLang]}
                onChange={(value) => {
                  setUserCode(value);
                }}
              />
            </div>
            {console ? (
              <div
                id="div223"
                // style={{ visibility: console ? "visible" : "hidden" }}
                class="d-flex flex-column div223 bg-light outt"
                onChange={() => {
                  document.getElementById("div222").style.height = "100%";
                }}
              >
                <div id="outnav">
                  <div class=" d-flex outnav pt-1">
                    <div class="testcase ml-4 pt-1 mb-n2 actoutnav ">
                      Testcase
                    </div>
                    <div class="result ml-4 pt-1 mb-n2">Result</div>
                  </div>
                  <div>
                    <hr></hr>
                  </div>
                </div>
                <div id="inpout" class="inpout">
                  <div class="test d-flex ml-3 ">
                    <div class="btn2 mx-1 active">Case 1</div>
                    <div class="btn2 mx-1">Case 2</div>
                    <div class="btn2 mx-1">Case 3</div>
                    <div class="mx-1 my-n2 plus ">+</div>
                  </div>
                  {/* <br></br> */}
                  <div class="px-4 mt-2">Input =</div>
                  <textarea
                    // onKeyDown={handleKeyDown}
                    onChange={(e) => {
                      let x = e.target.value.split("\n");
                      setInpRow(x.length);
                    }}
                    id="txt"
                    rows={inprow}
                    placeholder="Enter Testcase"
                    class="txtarea "
                  ></textarea>
                  {/* <div className="input-box">
                <textarea
                  id="code-inp"
                  onChange={(e) => setUserInput(e.target.value)}
                ></textarea>
              </div> */}
                  {/* <div class="rst"></div> */}
                </div>
              </div>
            ) : null}
            <div id="div224" class="div224 outfoot px-4 py-2">
              <div class="d-flex">
                <div
                  class="btn3 mx-1 mr-auto active"
                  onClick={(event) => {
                    setConsole((current) => !current);
                  }}
                >
                  Console &nbsp; <i class="fa-solid fa-angle-up"></i>
                </div>
                <div class="btn3 active"> Run</div>
                <div class="btn3 btn-green ml-3 active">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </FullScreen>
      {/* </div> */}
    </>
  );
}

export default App;
