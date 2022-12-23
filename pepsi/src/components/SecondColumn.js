import React from "react";
import { NavData } from "../data/NavData";
import { NavLink } from "react-router-dom";
import pepsiImage from "../asserts/pepsi.png";

const SecondColumn = () => {
    //handle navlink section
    const activeLink =
    "flex items-center justify-center capitalize space-x-1 font-bold text-white bgRedColor rounded py-2 px-2 ";
  const normalLink =
    "flex items-center justify-center capitalize space-x-1 font-bold text-white";
  return (
    <React.Fragment>
      <section className="md:mb-20">
        <div className="w-auto h-20 centered md:w-4/5 md:mx-auto">
          {/* logo section */}
          <div></div>

          {/* large screen */}
          <div className="hidden h-20 md:flex md:justify-end md:items-center md:space-x-10">
            {
                NavData.map((item, index) => {
                    return(
                        <div key={index}>
                            <NavLink to={item.path}
                            className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                            >
                                <div>{item.icon}</div>
                                <div>{item.title}</div>
                            </NavLink>
                        </div>
                    )
                })
            }
          </div>

          {/* small screen */}
          <div></div>
        </div>
      </section>

      {/* image section */}
      <section className='relative'>
        <div className="w-full h-auto centered ">
        <img src={pepsiImage} alt="logoImage"
        className="w-40 h-auto -mt-10  md:absolute md:w-60 md:top-14 md:right-50%"
        />
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecondColumn;
