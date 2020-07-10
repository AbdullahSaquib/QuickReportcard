import React from 'react';

import './App.css';
// import Person from './Person/Person';
import SchoolInfo from './SchoolInfo/SchoolInfo';
import ReportCardMetaTop from './ReportCardMetaTop/ReportCardMetaTop';
import StudentProfile from './StudentProfile/StudentProfile';
import SubjectMarksTable from './SubjectMarksTable/SubjectMarksTable';
import ExtraCurricularSubjectTable from './ExtraCurricularSubjectTable/ExtraCurricularSubjectTable';
import Misc from './Misc/Misc';
import ReportFooter from './ReportFooter/ReportFooter';

const schoolInfoData = {
  name: 'Greenwood Senior Secondary School',
  affiliationText: 'Affiliated to CBSE, Affiliation Number: 2130456',
  tagUrl: "https://scontent.fdel25-1.fna.fbcdn.net/v/t1.0-9/188648_457384264323484_1137267553_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=12zFkaVlItEAX8b-bHx&_nc_ht=scontent.fdel25-1.fna&oh=a3061a102289fb305a07a9850656931f&oe=5F28B2A5",
  address: "Behind Exhibition Ground, Bhamrawwa Road, Rampur, U.P. 244901",
  phoneNumber: '87128978174',
  email: "abc@efg.com"
};

const reportCardMetaTopData = {
  academicYear: '2020-21',
  reportCardName: 'STATEMENT OF MARKS'
};

const studentProfileData = {
  rollNumber: 1,
  admissionNumber: 2,
  name: 'Abdul Mugni',
  classAndSection: 'VIII-C',
  mothersName: 'Rizwana Qayyum',
  fathersName: 'Abdul Qayyum'
};

function App() {
  return (
    <div className='App'>
      <SchoolInfo 
        name={schoolInfoData.name}
        affliationText={schoolInfoData.affiliationText}
        tagUrl={schoolInfoData.tagUrl}
        address={schoolInfoData.address}
        phoneNumber={schoolInfoData.phoneNumber}
        email={schoolInfoData.email}/>
      <br/>

      <ReportCardMetaTop
        academicYear={reportCardMetaTopData.academicYear}
        reportCardName={reportCardMetaTopData.reportCardName} />
      <br/>
      
      <StudentProfile 
        rollNumber={studentProfileData.rollNumber}
        admissionNumber={studentProfileData.admissionNumber}
        name={studentProfileData.name}
        classAndSection={studentProfileData.classAndSection}
        mothersName={studentProfileData.mothersName}
        fathersName={studentProfileData.fathersName}
      />
      <br/>

      <SubjectMarksTable />
      <br/>

      <ExtraCurricularSubjectTable />
      <br/>

      <Misc />
      <br/>

      <ReportFooter />
    </div>
  );
}

export default App;
