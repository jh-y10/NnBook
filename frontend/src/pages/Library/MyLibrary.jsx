import React from "react";
import "../../styles/MyLibrary.style.css";

const MyLibrary = () => {
  return (
    <div className="libraryContainer container mt-4">
      <div className="section mt-5">
        <h3 className="mb-3">읽고 있는 도서</h3>
        <div className="libraryBoxStroke">1</div>
      </div>
      <div className="section mt-5">
        <h3 className="mb-3">완독 도서</h3>
        <div className="libraryBoxStroke">2</div>
      </div>
      <div className="section mt-5">
        <h3 className="mb-3">대여 해준 도서</h3>
        <div className="libraryBoxStroke">3</div>
      </div>
    </div>
  );
};

export default MyLibrary;
