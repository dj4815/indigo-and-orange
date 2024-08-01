import React from "react";

export default function HomeHeroImage() {
  const pic = "./src/assets/pic.jpg";

  return (
    <div className="flex flex-col flex-1 justify-center items-center xl:p-16">
      <img src={pic} alt="indigo and orange sky and clouds" />
    </div>
  );
}
