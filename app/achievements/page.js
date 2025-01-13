import React from 'react';
import Heading from '../components/Heading';
import Bullets from '../components/Bullets';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Image Section */}
      <img 
        className="pt-12 w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-cover" 
        src="pic2.jpg" 
        alt="Achievement" 
      />
      
      {/* Content Section */}
      <div className="pt-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
        {/* Heading */}
        <div>
          <Heading title="Achievements" />
        </div>

        {/* Bullet Points */}
        <div>
          <div className="my-4">
            <Bullets title={
              <>
                <b>Silver Award</b> for Paper Presentation at TERMIS-AP Webinar Student
                Paper Presentation Contest, held in online mode from 01-02 December 2023,
                China
              </>
            } />
          </div>
          <div className="my-4">
            <Bullets title={
              <>
                <b>Best poster presentation award</b> at the 74th Annual Session of Indian Institute of Chemical Engineers <b>(CHEMCON-2021)</b> held in hybrid mode from 26th to 30th December 2021 at CSIR-Institute of Minerals and Materials Technology, Bhubaneswar, India
              </>
            } />
          </div>
          <div className="my-4">
            <Bullets title={
              <>
                Thesis work was funded by <b>State Key Laboratory</b>, Fudan University, <b>China</b>
              </>
            } />
          </div>
          <div className="my-4">
            <Bullets title={
              <>
                GATE 2017 Qualified with 359 Gate Score.
              </>
            } />
          </div>
          <div className="my-4">
            <Bullets title={
              <>
                Received Merit scholarship for good performance in XII
              </>
            } />
          </div>
          <div className="my-4">
            <Bullets title={
              <>
                Listed in the <b>Top One Percentage</b> of Students Who Achieved the Maximum Marks in Higher Secondary 
                Exam 2012, In the State (Bihar).
              </>
            } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

