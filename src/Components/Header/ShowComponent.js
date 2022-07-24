import React from "react";
import TypeMe, { Delete } from "react-typeme";

function ShowComponent() {
  return (
    <>
      <h1>
        <TypeMe
          strings={[
            "Leave today and enter the world ofYesterday, Tomorrow, and Fantasy",
          ]}
        />
      </h1>
    </>
  );
}

export default ShowComponent;
