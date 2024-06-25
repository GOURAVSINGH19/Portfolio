import React from "react";
const img = [
  "https://images.unsplash.com/photo-1718414738167-0dd5de626229?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1718349789891-4a1c7ada3b67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1718349789891-4a1c7ada3b67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
];
const PhoneCard = () => {
  return (
    <div className="h-auto w-screen relative bg-black">
      <div className="flex flex-wrap justify-center items-center px-5">
        {img.map((items, index) => {
          return (
            <div key={index} className="card mt-5">
              <img
                className="border-2 border-zinc-500 rounded-md"
                src={items}
                alt="img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhoneCard;
