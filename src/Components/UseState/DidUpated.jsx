// import React, { useState } from "react";
// import { useEffect } from "react";

// const DidUpated = () => {
//   const Days = [
//     "Sunday",
//     "Monday",
//     "Teusday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const [text, setText] = useState("");
//   const [list, setList] = useState(Days);
//   useEffect(() => {
//     const MyData = Days.filter((elem) =>
//       elem.toLowerCase().includes(text.toLowerCase())
//     );
//     setList(MyData);
//   }, [text]);
//   return (
//     <div>
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       {list.map((item) => {
//         return <h1>{item}</h1>;
//       })}
//     </div>
//   );
// };

// export default DidUpa;
// ted;
