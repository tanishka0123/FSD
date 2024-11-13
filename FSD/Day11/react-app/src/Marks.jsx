import React from "react";

function Marks({name,rollnumber,sem1,sem2,sem3}) {
  return (
    <div className="disp2">
      <h1>MarkSheet</h1>
      <h2>Name: {name}</h2>
      <h2>Roll Number:{rollnumber}</h2>
      <h2>sem {sem1}%</h2>
      <h2>sem {sem2}%</h2>
      <h2>sem {sem3}%</h2>
    </div>
  );
}

export default Marks;
