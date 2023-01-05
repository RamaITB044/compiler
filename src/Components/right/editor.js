import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
export const Monaco = () => {
  const [fontSize, setFontSize] = useState(14);
  const [editorHeight, seteditorheight] = useState("50vh");
  const options = {
    fontSize: fontSize,
  };
  const [userCode, setUserCode] = useState(``);
  
  const defval = {
    python: `# Cook your code here`,
    c: `#include<stdio.h>\nint main(){\n\t//Cook your code here;\n\treturn 0;\n}`,
    // cpp: `#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n\t//Cook your code here;\n\treturn 0;\n}`,
    cpp: `#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n\t//Cook your code here;\n\treturn 0;\n}`,
    java: "class Main {\n\tpublic static void main(String[] args) {\n\t\t//Cook your code here;\n\t}\n}",
    javascript: "//Enter your code here;\n",
  };

  return (
    <>
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
    </>
  );
};
