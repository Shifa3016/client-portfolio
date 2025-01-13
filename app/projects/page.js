import React from 'react'
import Heading from '../components/Heading'

const page = () => {
  return (
    <div>
      {/* Responsive Image */}
      <img
        src="projects.jpg"
        alt="no image"
        className="w-full h-auto object-cover"
      />

      <div className="pt-2 px-4 sm:px-6 md:px-8 lg:mx-8">
        <div>
          <Heading title="Academic Projects undertaken" />
        </div>

        <div className="mx-4 sm:mx-6 lg:mx-[38px]">
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
            {/* Doctoral Thesis Title */}
            <div className="font-bold my-3">Doctoral Thesis Title</div>
            <div className="font-bold my-3">
              Design and Development of 3D-Printed Bioactive Bone Scaffolds with Improved Mechanical Strength
            </div>

            {/* Description */}
            <div className="font-bold my-1">Description</div>
            <div className="my-1">
              We have developed osteoconductive feedstock suitable for fused filament fabrication (FFF) techniques to fabricate patient-specific bone scaffolds for tissue engineering applications...
            </div>

            {/* Ph.D. Highlights */}
            <div className="font-bold my-3">Ph.D. Highlights</div>
            <div className="my-3">
              Worked on the following national and international sponsored projects during my Ph.D. tenure:
            </div>

            {/* Project 1 */}
            <div className="my-1"></div>
            <div className="my-1 flex gap-2">
              <img className="w-10 h-10" src="icons/arrow2.svg" alt="" />
              <div>
                “Bioactive Hybrid Scaffold Manufacturing via Surface Modification of 3D-printed Hydrophobic Scaffolds” as <b>Start-up Research Grant...</b>
              </div>
            </div>

            {/* Project 2 */}
            <div className="my-1"></div>
            <div className="my-1 flex gap-2">
              <img className="w-10 h-10" src="icons/arrow2.svg" alt="" />
              <div>
                “Biomimetic Bone Scaffold of Tailored Radial Porosity Gradient using Fused Deposition Manufacturing” as Research Scholar Grant...
              </div>
            </div>

            {/* M. Tech */}
            <div className="font-bold my-3">M. Tech</div>
            <div className="font-bold my-3">
              Design and Development of Scaffold using 3D Printing
            </div>

            {/* M. Tech Duration */}
            <div className="font-bold my-3">Duration</div>
            <div className="my-3">6 Months</div>

            {/* M. Tech Description */}
            <div className="font-bold my-3">Description</div>
            <div className="my-3">
              We designed and developed porous structures of varying porosity...
            </div>

            {/* B.E */}
            <div className="font-bold my-3">B.E</div>
            <div className="my-3">Design and Fabrication of Treadmill Bike</div>

            {/* B.E Duration */}
            <div className="font-bold my-3">Duration</div>
            <div className="my-3">1 Year</div>

            {/* B.E Description */}
            <div className="font-bold my-3">Description</div>
            <div className="my-3">
              A treadmill bike is basically an electric bike equipped with a treadmill...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

