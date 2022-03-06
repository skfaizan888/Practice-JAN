import React from "react";

function BtnDisplayComp(props) {
  return (

    <div>
      {(props.status === 0) ?
        <button className="btn-watch" onClick={props.start}
          className="content-display-comp"
        >Start</button > : ""
      }

      {(props.status === 1) ?
        <div>
          <button onClick={props.stop} style={{ width: "100px", height: "30px", borderRadius: "12px" }}>Pause</button>

          <button onClick={props.reset} style={{ width: "100px", height: "30px", borderRadius: "12px" }}> Reset</button>
          <button onClick={props.stop} style={{ width: "100px", height: "30px", borderRadius: "12px" }}> Stop</button>
        </div> : ""
      }


      {(props.status === 2) ?
        <div>
          <button onClick={props.resume} style={{ width: "100px", height: "30px", borderRadius: "12px" }}>resume</button>
          <button onClick={props.reset} style={{ width: "100px", height: "30px", borderRadius: "12px" }}> Reset</button>
          <button onClick={props.reset} style={{ width: "100px", height: "30px", borderRadius: "12px" }}> Stop</button>

        </div> : ""
      }
    </div>
  );
}

export default BtnDisplayComp;