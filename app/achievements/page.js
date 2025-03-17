import React from 'react';
import Heading from '../components/Heading';
import Bullets from '../components/Bullets';

const Page = () => {
  return (
    <div className='pt-[56px] min-h-[100vh]'>
        <img className="md:w-[100vw] md:h-[80vw] lg:w-full lg:h-auto object-cover object-[98%] h-[90vw] w-[100vw]" src="achievements.jpg" alt="no image" />
      
      {/* Content Section */}
      <div className="pt-2 px-4 sm:px-8 lg:px-16 w-full">
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

