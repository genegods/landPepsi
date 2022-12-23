import React from 'react'
import FirstColumn from './FirstColumn'
import SecondColumn from './SecondColumn'

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="w-full h-screen grid grid-rows-2 md:grid-cols-2 ">
        <div className=" bg-white md:h-screen">
            <FirstColumn/>
        </div>
        <div className=" bg-blue-700 md:h-screen">
            <SecondColumn/>
        </div>
      </div>
    </section>

    
  </React.Fragment>
  )
}

export default MainPage