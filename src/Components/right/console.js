import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Console = () => {
  const [console, setConsole] = useState(true);
  const [inprow, setInpRow] = useState(1);
  return (
    <>
      {console ? (
        <div
          id="div223"
          class="d-flex flex-column div223 bg-light outt"
          onChange={() => {
            document.getElementById("div222").style.height = "100%";
          }}
        >
          <div id="outnav">
            <div class=" d-flex outnav pt-1">
              <div class="testcase ml-4 pt-1 mb-n2 actoutnav ">Testcase</div>
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
            <div class="px-4 mt-2">Input =</div>
            <textarea
              onChange={(e) => {
                let x = e.target.value.split("\n");
                setInpRow(x.length);
              }}
              id="txt"
              rows={inprow}
              placeholder="Enter Testcase"
              class="txtarea "
            ></textarea>
            <div class="rst"></div>
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
    </>
  );
};
