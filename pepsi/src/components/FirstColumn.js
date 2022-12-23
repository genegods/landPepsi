import React, { useState } from "react";
import logoImage from "../asserts/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const FirstColumn = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <section>
        <div className="w-auto h-20 flex justify-between items-center px-10 md:w-4/5 md:mx-auto md:mb-20">
          {/* logo section */}
          <div>
            <img src={logoImage} alt="logoImage" className="w-10 h-10 " />
          </div>

          {/* large screen */}
          <div></div>

          {/* small screen */}
          <div>
            <div>
              <div className="text-2xl">
                {toggle === false ? (
                  <FaBars onClick={handleToggle} />
                ) : (
                  <FaTimes onClick={handleToggle} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* content section */}
        <div className="px-10 mt-6 md:w-4/5 md:mx-auto">
          <div className="uppercase font-bold">
            <p className="text-2xl md:text-5xl">contact us</p>
            <p className="text-5xl md:text-8xl">all here</p>
          </div>
          <p className="text-sm">
            logical_order_exception logical_order_exception
            logical_order_exception logical_order_exception
            logical_order_exception logical_order_exception
            logical_order_exception logical_order_exception
            logical_order_exception logical_order_exception l
          </p>
          <button className="px-1 py-1 bgRedColor capitalize text-sm text-white font-bold rounded-lg mt-4 md:px-3 md:py-2 md:text-xl">
            view all products
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FirstColumn;
