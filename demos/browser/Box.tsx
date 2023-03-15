import React from "react";


export const Box: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = (props) => {
  return (
    <div
      style={{
        borderRadius: 10,
        border: "1px solid lightgray",
        padding: 20,
        margin: 20,
      }}
    >
      {props.children}
    </div>
  );
}