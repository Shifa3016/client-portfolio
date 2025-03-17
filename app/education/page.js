import React from 'react';
import Heading from '../components/Heading';
import Details from '../components/Details';

const page = () => {
    return (
        <div className='pt-[56px]'>
            <img className="md:w-[100vw] md:h-[80vw] lg:w-full lg:h-auto object-right object-cover h-[100vw] w-[100vw]" src="academic2.jpg" alt="no image" />
            <div className='mx-8'>
                <div className="academics my-3">
                    <div>
                        <Heading title="Academic Background" />
                    </div>
                    <div className="mx-2">
                        <Details title="Ph. D" detail="Indian Institute of Information Technology, Design & Manufacturing, Jabalpur | 2019-2023 | 8.4 CGPA" />
                        <Details title="M. Tech." detail="Indian Institute of Information Technology, Design & Manufacturing, Jabalpur | 2019 | 7.80 CGPA" />
                        <Details title="B.E.(ME)" detail="P.E.S College of Engineering | Dr. BAMU, Aurangabad | 2016 | 71.70" />
                        <Details title="HSC" detail="Dr. Zakir Hussain School, Patna | BSEB, Patna | 2012 | 77.00" />
                        <Details title="HSC" detail="St. Paul’s High School, Hajipur | CBSE, Delhi | 2010 | 79.80" />
                    </div>
                </div>

                <div className="trainings my-4">
                    <Heading title="Certified Courses" />
                    <div className="mx-2">
                        <Details title="Teaching and Learning in general Programs: TALG" detail="NPTEL (SWAYAM course) | 4 Week course (Jul-Aug 2022)" />
                        <Details title="Effective Engineering Teaching in Practice" detail="NPTEL (SWAYAM course) | 4 Week course (Jan-Feb 2021)" />
                        <Details title="Ansys Workbench" detail="EICT academy, IIITDM Jabalpur | 5 days (22nd Jan-26th Jan’18)" />
                        <Details title="MAGICS & MIMICS" detail="EICT academy, IIITDM Jabalpur | 5 days (27th Aug-31st Aug’18)" />
                        <Details title="Additive Manufacturing" detail="Raja Ramanna Centre (RRCAT), Indore | 5 Days (08th Oct -12th Oct’18)" />
                        <Details title="ECGuiD with MATLAB" detail="EICT academy, IIITDM Jabalpur | 5 days (13th Oct - 17th Oct’18)" />
                        <Details title="AutoCAD" detail="Venus Technology, Aurangabad | 2 months (15th July - 15thSep’15)" />
                        <Details title="CREO Parametric 2.0 " detail="Venus Technology, Aurangabad | 1 months (5th Oct - 4 Nov’15)" />
                    </div>
                </div>

                <div className="skills my-4">
                    <Heading title="Technical Skills" />
                    <div className="mx-2">
                        <Details title="Modeling Software" detail="SolidWorks | Fusion-360 | AutoCAD" />
                        <Details title="Simulation Software" detail="Ansys CAE" />
                        <Details title="3D Printing Software" detail="Flash Print | Cura | Repetier host" />
                        <Details title="Biomedical Image Processing" detail="Materialise’s MAGICS & MIMICS" />
                        <Details title="Languages" detail="MATLAB | CNC Coding" />
                        <Details title="Testing Equipment’s" detail="Universal Testing Machine (UTM), Surface roughness machines (Profilometer), Goniometer, Melt Flow Index (MFI), Differential scanning calorimetry (DSC), Thermogravimetric analyses (TGA), and UV-VIS Spectrophotometer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

