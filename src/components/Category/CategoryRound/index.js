import React from "react";
import PropTyeps from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";
export default function CategoryRound({ titleColor, name, image }) {
  return (
    <ScrollContainer className="flex flex-row   m-12 ">
      <div className="row   m-1 w-56 md:w-64 text-center">
        <div className=" ">
          <img className=" block m-auto w-44 h-44 rounded-full" src={image} />

          {/* <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
          <div className="mt-4">
            <h3
              style={{ color: titleColor }}
              className="  text-base md:text-xl text-green-300   text-center"
            >
              {name}
            </h3>
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
}

CategoryRound.propTypes = {
  image: PropTyeps.string,
  name: PropTyeps.string,
  titleColor: PropTyeps.string,
};
