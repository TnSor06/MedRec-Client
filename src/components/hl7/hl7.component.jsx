import React, { useRef, useState } from "react";

const HL7 = (props) => {
  const { HL7, caseId } = props;
  const [msg, setMsg] = useState("");
  const textAreaRef = useRef(null);

  return (
    <div>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigator.clipboard.writeText(HL7);
          setMsg("Copied to Clipboard");
          setTimeout(() => {
            setMsg("");
          }, 2000);
        }}
      >
        <span className="icon">
          <i className="fa fa-copy"></i>
        </span>
        Click To Copy
      </span>
      &nbsp;&nbsp;&nbsp;
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          const element = document.createElement("a");
          const file = new Blob([HL7], {
            type: "text/plain",
          });
          element.href = URL.createObjectURL(file);
          element.download = `${caseId}.hl7`;
          document.body.appendChild(element); // Required for this to work in FireFox
          element.click();
          setMsg("Downloading HL7");
          setTimeout(() => {
            setMsg("");
          }, 2000);
        }}
      >
        <span className="icon">
          <i className="fa fa-download"></i>
        </span>
        Download As HL7
      </span>
      <div className="field">
        <div className="control">
          <textarea
            style={{ resize: "none", cursor: "pointer" }}
            className="textarea is-info"
            rows="6"
            cols="60"
            disabled
            ref={textAreaRef}
            defaultValue={HL7}
          ></textarea>
        </div>
      </div>
      {msg ? (
        <div
          className="notification is-success"
          style={{ position: "absolute", bottom: "10px" }}
        >
          {msg}
        </div>
      ) : null}
    </div>
  );
};

export default HL7;
