import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+84 123456789</label>
            <i className="fa fa-envelope"></i>
            <label>example@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>
              <i class="fas fa-flag"></i>
            </span>
            <label htmlFor="">EN</label>
            <span>
              <i class="fas fa-flag"></i>
            </span>
            <label htmlFor="">USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
