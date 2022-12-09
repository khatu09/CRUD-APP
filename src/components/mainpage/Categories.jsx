import React from "react";

export const Categories = () => {
  const data = [
    {
      cateImg: "https://cdn.tgdd.vn//content/icon-phone-96x96-2.png",
      cateName: "Điện thoại",
    },
    {
      cateImg: "https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png",
      cateName: "Laptop",
    },
    {
      cateImg: "https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png",
      cateName: "Tablet",
    },
    {
      cateImg: "https://cdn.tgdd.vn//content/icon-phu-kien-96x96-1.png",
      cateName: "Phụ Kiện",
    },
    {
      cateImg: "https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png",
      cateName: "Smartwatch",
    },
    {
      cateImg: "https://cdn.tgdd.vn//content/watch-icon-96x96.png",
      cateName: "Đồng hồ",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
