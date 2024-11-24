import React from "react";

const Achievements = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-[90%]">
        <div>
          <h2 className="font-bold text-3xl mt-10 md:text-4xl">Our Achievements</h2>
          <p className="my-8 md:my-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque explicabo sapiente ad, fugit perspiciatis, a eveniet consequuntur unde odit assumenda eligendi molestiae ullam
          </p>
        </div>
        <div className="mb-14">
          <div className="grid grid-cols-2 grid-rows-2 gap-10 md:grid-rows-1 md:grid-cols-4">
            <div>
              <h2 className="font-bold text-xl md:text-3xl">200+</h2>
              <p>Courses</p>
            </div>
            <div>
              <h2 className="font-bold text-xl md:text-3xl">50K</h2>
              <p>Mentors</p>
            </div>
            <div>
              <h2 className="font-bold text-xl md:text-3xl">370K</h2>
              <p>Students</p>
            </div>
            <div>
              <h2 className="font-bold text-xl md:text-3xl">100+</h2>
              <p>Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
