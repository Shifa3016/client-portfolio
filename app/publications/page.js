import React from 'react'
import Heading from '../components/Heading'
import Bullets from '../components/Bullets'

const page = () => {
  return (
    <div>
      {/* Responsive Image */}
      <img
        className="w-full h-auto object-cover"
        src="publication.jpg"
        alt="no image"
      />
      <div className="pt-3 px-4 sm:px-6 md:px-8">
        <div>
          <Heading title="Manuscripts Published in Peer-Reviewed International Journals" />
        </div>
        <div className="my-4 space-y-4 sm:space-y-6">
          {/* Bullet Points */}
          <div className="my-3">
            <Bullets
              title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>, Pooja Makwana, Rajesh Vasita, Prashant Kumar Jain,
                  Bindiya Dhimmar, & Himansu Sekhar Nanda (2024). Design and Development of 3D Printed Shape Memory Triphasic Polymer-Ceramic Bioactive Scaffolds for Bone Tissue Engineering
                  , Journal of Material Chemistry-B,&nbsp;
                  <a
                    href="https://doi.org/10.1039/D4TB00785A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all hover:text-blue-800"
                  >
                    https://doi.org/10.1039/D4TB00785A
                  </a>{' '}
                  <b>(SCI, Q1, IF: 7.0)</b>
                </>
              }
              icon="icons/icon.svg"
            />
          </div>
          <div className="my-3">
            <Bullets
              title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>, Prashant Kumar Jain, and Himansu Sekhar Nanda, (2023) “Preparation of 3D printed calcium sulfate filled PLA scaffolds with improved mechanical and degradation properties”, Journal of Biomaterials Science, Polymer Edition,&nbsp;
                  <a
                    href="https://doi.org/10.1080/09205063.2023.2167374"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all hover:text-blue-800"
                  >
                    https://doi.org/10.1080/09205063.2023.2167374
                  </a>{' '}
                  <b>(SCIE, Q2, IF:3.68)</b>
                </>
              }
              icon="icons/icon.svg"
            />
          </div>
          <div className="my-3">
            <Bullets
              title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>,  Dash M, Camci-Unal G, Jain PK, Nukavarapu S, Ramakrishna S, Falcone N, Dokmeci MR, Najafabadi AH, Khademhosseini A, Nanda HS, (2023) “Engineered stimuli-responsive smart grafts for bone regeneration”, Current Opinion in Biomedical Engineering:&nbsp;
                  <a
                    href="https://doi.org/10.1016/j.cobme.2023.100493"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all hover:text-blue-800"
                  >
                    https://doi.org/10.1016/j.cobme.2023.100493
                  </a>{' '}
                  <b>(SCIE, Q2, IF:3.9)</b>
                </>
              }
              icon="icons/icon.svg"
            />
          </div>
          <div className="my-3">
            <Bullets
              title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>, Pooja Makwana, Rajesh Vasita, Prashant Kumar Jain, and Himansu Sekhar Nanda, (2023) “Development of highly filled calcium sulfate-poly lactic acid biocomposite feedstock for low-cost fused filament fabrication”. Ceramics International &nbsp;
                  <a
                    href=" https://doi.org/10.1016/j.ceramint.2023.09.105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all hover:text-blue-800"
                  >
                    https://doi.org/10.1016/j.ceramint.2023.09.105
                  </a>{' '}
                  <b>(SCIE, Q1, IF:5.2)</b>
                </>
              }
              icon="icons/icon.svg"
            />
          </div>
          <div className="my-3">
            <Bullets
              title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>, Aleksandra A. Golebiowska, Madhusmita Dash, Prasoon Kumar,
                  Prashant Kumar Jain, Syam P. Nukavarapu, Seeram Ramakrishna & Himansu Sekhar Nanda (2022)
                  “Engineering biomaterials to 3D-print scaffolds for bone regeneration: practical and theoretical
                  consideration” Biomaterials Science, &nbsp;
                  <a
                    href="https://doi.org/10.1039/D2BM00035K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all hover:text-blue-800"
                  >
                    https://doi.org/10.1039/D2BM00035K
                  </a>{' '}
                  <b>(SCI, Q1, IF:7.59)</b>
                </>
              }
              icon="icons/icon.svg"
            />
          </div>
          <div className="my-3">
            <Bullets
              title={
                <>
                  <b>Ansari, Mohammad Aftab Alam</b>, et al. “Effect of pore geometry on the cell proliferation of 3D printed
                  PLA scaffolds for BTE application” (Manuscript under preparation) &nbsp;
                </>
              }
              icon="icons/icon.svg"
            />
          </div>
          <div className="my-3">
            <Bullets
              title={
                <>
                  Shivi Tripathi, <b>Ansari, Mohammad Aftab Alam</b>, et al., “Additive Manufacturing Assisted Patient-Centric
                  Surgical Planning and Procedures: A New Paradigm in Healthcare” (Submitted in Advanced Functional
                  material) (IF:15) &nbsp;
                </>
              }
              icon="icons/icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page




