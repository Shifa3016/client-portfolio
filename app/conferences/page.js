import React from 'react'
import Heading from '../components/Heading'
import Bullets from '../components/Bullets'

const page = () => {
  return (
    <div className='pt-[56px] min-h-[100vh]'>
      <img className="md:w-[100vw] md:h-[80vw] lg:w-full lg:h-auto object-cover h-[100vw] w-[100vw]" src="coneference2.jpg" alt="no image" />
      <div className='pt-3 mx-8 mr-[100px]'>
        <div>
          <Heading title="Conference Presentation (Oral/Poster)" />
        </div>
        <div>
          <div className='flex gap-1 mt-3'>
            <img src="icons/flower.svg" alt="no icon" />
            <div className='font-bold text-xl'>International conferences</div>
          </div>
          <div>
            <div className='my-4'>
              <Bullets title={
                <>
                  <b>Ansari, Mohammad Aftab Alam,</b> Prashant Kumar Jain and Himansu Sekhar Nanda “Design and
                  Fabrication of Osteoconductive Hybrid Scaffolds for Bone Augmentation through Fuse Filament
                  Fabrication” <b>Tsukuba</b> Biomedical Engineering Forum 2022, <b>Japan</b> (Oral)
                </>
              }
              />
            </div>
            <div className='my-4'>
              <Bullets title={
                <>
                  <b>Ansari, Mohammad Aftab Alam,</b> Prashant Kumar Jain, Himansu Sekhar Nanda “Preparation of 3D
                  Printed Highly Filled Calcium Sulfate-Poly Lactic Acid Biocomposite Scaffolds with Improved Mechanical
                  and Degradation Properties” at <b> TERMIS-AP</b> Webinar Student Paper Presentation Contest,<b> China</b>  on 1st December 2023.
                </>
              }
              />
            </div>
            <div className='my-4'>
              <Bullets title={
                <>
                  <b>Ansari, Mohammad Aftab Alam,</b> Prashant Kumar Jain, Himansu Sekhar Nanda “Design and
                  Development of Mechanically Competent Composite Biomaterials for Biomanufacturing” at
                  Proceedings of the Biomaterials International during June 30-July 4, 2024 Bangkok, <b> Thailand </b>
                </>
              }
              />
            </div>
            <div className='my-4'>
              <Bullets title={
                <>
                  <b>Ansari, Mohammad Aftab Alam,</b> Himansu Sekhar Nanda, “Ceramic reinforced Polymer Composites for Additive Manufacturing of Implants and Scaffolds” 2nd International Conference on nanotechnology Research and Innovation, University of Aveiro, November 19-22, 2024, <b> Portugal </b>
                </>
              }
              />
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-1 mt-3'>
            <img src="icons/flower.svg" alt="no icon" />
            <div className='font-bold text-xl'>National conferences</div>
          </div>
          <div>
            <div className='my-4'>
              <Bullets title={
                <>
                  Mohammad Aftab Alam Ansari, Prashant Kumar Jain and Himansu Sekhar Nanda <b>“Preparation and
                    characterization of biphasic Poly- (Lactic Acid) bone scaffold using fused filament fabrication”</b>
                  presented at the 74th Annual Session of Indian Institute of Chemical Engineers <b>(CHEMCON-2021)</b> held in
                  hybrid mode from 26th– 30th December 2021 at CSIR-Institute of Minerals and Materials Technology,
                  Bhubaneswar,<b> India</b> (Poster presentation)
                </>
              }
              />
            </div>
            <div className='my-4'>
              <Bullets title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>, Prashant Kumar Jain and Himansu Sekhar Nanda “Fabrication and
                  characterization Poly- (Lactic Acid) based radial gradient porous scaffold for bone augmentation using
                  fused filament fabrication.” 2021 at 31st annual SBAOI meeting and 14th stermi annual meeting and
                  international conference on biomaterial-based therapeutics, engineering & medicine <b>(BIOTEM-2021)</b>&nbsp;
                  Manipal, <b>India</b> (Poster)
                </>
              }
              />
            </div>
            <div className='my-4'>
              <Bullets title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>, Himansu Sekhar Nanda, “Design and 3D printing wollastonite reinforced PLA/PCL composite scaffolds for bone tissue engineering” APA-EPNOE-GFL International Conference on Polymers for Advanced Technology (APA 2024) 16-18 October, 2024, Jaipur, &nbsp;
                   <b>India</b> 
                </>
              }
              />
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-1 mt-3'>
            <img src="icons/flower.svg" alt="no icon" />
            <div className='font-bold text-xl'>Invited Lectures </div>
          </div>
          <div>
            <div className='my-4'>
              <Bullets title="Delivered an invited lecture on “Additive Manufacturing of Polymers:  Scope of Entrepreneurship” in MSME (GoI) sponsored five-days advanced ESDP held at NIT Jalandhar during 16th to 20th December, 2023, Chair: Prof. R K Garg, IPE, NIT Jalandhar). " />
            </div>
            <div className='my-4'>
              <Bullets title=" Delivered a lecture at the electronics design carnival on the topic “Introduction to Rapid Prototyping” organized by IIIT Delhi between 1st July to 12th July, 24. " />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
