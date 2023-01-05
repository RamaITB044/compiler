import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";

export const Rightnav = ({ handle }) => {
  const [val, setval] = useState(false);
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
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "javascript" },
  ];
  const [userLang, setUserLang] = useState("python");
  const [fontSize, setFontSize] = useState(14);
  const [plusclicks, setPlus] = useState(0);
  const [minusclicks, setminus] = useState(0);
  return (
    <>
      <div id="div221" class="optoncode div221 d-flex justify-content-between">
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
              <div class="modal-dialog modal-dialog-centered" role="document">
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
                          setFontSize(fontSize - plusclicks + minusclicks);
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
                            Choose your preferred font size for the code editor.
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
    </>
  );
};
