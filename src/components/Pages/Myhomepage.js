import { Dropdown } from "bootstrap/dist/js/bootstrap.bundle.min";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { use } from "react";
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
  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      return;
    }
    try {
      const decodeToken = jwtDecode(token);
      console.log("decode token is ", decodeToken);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("jwt-token");
        navigate("/login");
      }
      const time_to_expire = decodeToken.exp * 1000 - new Date().getTime();
      // will automatically run this after remaning time and will delete token ans naviagte to login page.
      const timeout = setTimeout(() => {
        localStorage.removeItem("jwt-token");
        navigate("/");
      }, time_to_expire);
      return () => clearTimeout(timeout);
    } catch (error) {
      console.log("jwt doesnot have correct funciton ", error);
    }
  }, []);
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
          display: "flex",
          flexWrap: "wrap", 
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        From Vector Space to Embeddings: A Chatbot Framework
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "#2C2C2C",
              color: "#E4E4E4",
              border: "1px solid #A8DADC",
              borderRadius: "10px",
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "16px", // space between text and dropdown
              padding: "0 32px",
            }}
          >
            Choose model
          </button>

          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            style={{
              backgroundColor: "#2C2C2C",
              border: "1px solid #A8DADC",
              borderRadius: "10px",
              padding: "6px",
            }}
          >
            {["VSM", "LSA", "W2V"].map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="dropdown-item"
                  style={{
                    color: "#E4E4E4",
                    borderRadius: "8px",
                    padding: "10px 12px",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#3A3A3A")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                  onClick={() => console.log("Selected:", item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
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
