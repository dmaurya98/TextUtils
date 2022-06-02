import React, {useState} from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","Success");
  };
  const handleLoClick = () => {
    // console.log("UpperCase was clicked" +text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase","Success");
  };
  const handleclearText = () => {
    // console.log("UpperCase was clicked" +text);
    let newtext = "";
    setText(newtext);
    props.showAlert("Text is Cleared","Success");
  };
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+ /);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed","Success");
  };

  const handleonChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // console.log(useState("Enter the text here2"))
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#1f0559" }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundcolour: props.mode === "dark" ? "Grey" : "white",
              color: props.mode === "dark" ? "white" : "#1f0559"
            }} 
            style={{color:'black'}}
            id="myBox"
            rows="5"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1 my-1" onClick={handleUpClick}>
            {" "}
            Convert to Uppercase
          </button>
          <button disabled={text.length===0}className="btn btn-primary my-1 mx-1 my-1" onClick={handleLoClick}>
            {" "}
            Convert to Lowercase
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-1 mx-1 my-1"
            onClick={handleclearText}
          >
            {" "}
            Clear Text
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-1 mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            {" "}
            Remove ExtaSpaces
          </button>
        </div>
      </div>
      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "#1f0559" }}
      >
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text: "Nothing to preview!"}</p>
      </div>
    </>
  )
}
