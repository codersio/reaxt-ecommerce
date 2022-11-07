import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
export default function Index({
  name,
  image,
  description,
  titleColor,
  color,
  descColor,
}) {
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            {/* <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2> */}

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div key={name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={image}
                    // alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3
                  className="mt-6 text-sm text-gray-500"
                  style={{ color: titleColor }}
                >
                  <a href={name}>
                    <span className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
                <p
                  style={{ color: descColor }}
                  className="text-base font-semibold text-gray-900"
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Index.propTypes = {
  titleColor: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
