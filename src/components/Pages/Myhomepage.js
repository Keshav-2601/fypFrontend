import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [QueryData, setQueryData] = useState([]); // use to have the chat type property at final.
  const InputRef = useRef(null);
  const [MyQuery, SetMyQuery] = useState(""); //use to get the final string

  const navigate = useNavigate();
  const query = (e) => {
    SetMyQuery(e.target.value);
    console.log("at end Query becomes ", MyQuery);
  };
  const QuerySubmitForm = (e) => {
    e.preventDefault();
    InputRef.current.value = "";
    setQueryData((pre) => {
      let new_Array = [...pre];
      new_Array.push(MyQuery);
      return new_Array;
    });
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "300px",
          color: "#FFC1CC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "44px",
          fontWeight: "700",
          letterSpacing: "0.3px",
          lineHeight: "1.25",
          padding: "0 32px",
        }}
      >
        From Vector Space to Embeddings: A Chatbot Framework
      </div>

      <form onSubmit={QuerySubmitForm}>
        <div
          style={{
            maxHeight: "700px",
            maxHeight: "500px",
            position: "relative",
            top: "40px",
          }}
        >
          {QueryData
            ? QueryData.map((data, index) => {
                return (
                  <>
                    <div
                      key={index}
                      style={{
                        display: "block",
                        width: "100%",
                        maxWidth: "700px",
                        margin: "16px auto",
                        color: "#E4E4E4",
                        backgroundColor: "#2C2C2C",
                        padding: "12px",
                        borderRadius: "8px",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "anywhere",
                        wordBreak: "break-word",
                        border: "0.1px solid #A8DADC",
                        boxSizing: "border-box",
                      }}
                    >
                      {data}
                    </div>
                  </>
                );
              })
            : ""}
        </div>

        <div
          className="input-group shadow-sm rounded-pill"
          style={{
            maxWidth: "600px",
            width: "100%",
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <input
            type="text"
            ref={InputRef}
            className="form-control border-0 rounded-start-pill px-4"
            placeholder="Ask something…"
            name="input"
            autoComplete="off"
            autoFocus="true"
            onChange={query}
          />

          <button
            style={{ backgroundColor: "#B39CD0", borderRadius: "20px" }}
            type="submit"
          >
            Go
          </button>
        </div>
      </form>
    </>
  );
}
