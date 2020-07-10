import React, { useState } from 'react';
import SubjectRow from './SubjectRow';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';

const subjectMarksTableMetaData = {
    scholasticAreasText: 'SCHOLASTIC AREAS',
    term1Text: 'TERM I',
    term2Text: 'TERM II',
    term1term2Text: 'TERM I + TERM II',
    subjectsText: 'SUBJECTS',

    halfYearlyTestText: 'Test (20)',
    halfYearlyText: 'Half Yearly (80)',
    halfYearlyMarksObtainedText: 'Marks Obtained (100)',
    halfYearlyGradeText: 'Grade',

    annualTestText: 'Test (20)',
    annualText: 'Annual Exam (80)',
    annualMarksObtainedText: 'Marks Obtained (100)',
    annualGradeText: 'Grade',

    bothTermsMarksObtainedText: 'Marks Obtained (200)',
};

const SubjectMarksTable = () => {
    const [headModalShow, setHeadModalShow] = useState(false);
    
    const handleHeadModalShow = () => setHeadModalShow(true)
    const handleHeadModalClose = () => setHeadModalShow(false)

    return (
        <div>
            <Modal show={headModalShow} onHide={handleHeadModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is modal body
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleHeadModalClose}>Close</button>
                </Modal.Footer>
            </Modal>
            <table className='subjectMarksTable'>
                <thead onClick={handleHeadModalShow}>

                    <tr>
                        <th colSpan={3}>{subjectMarksTableMetaData.scholasticAreasText}</th>
                        <th colSpan={4}>{subjectMarksTableMetaData.term1Text}</th>
                        <th colSpan={4}>{subjectMarksTableMetaData.term2Text}</th>
                        <th colSpan={2}>{subjectMarksTableMetaData.term1term2Text}</th>
                    </tr>

                    <tr>
                        <th colSpan={3}>{subjectMarksTableMetaData.subjectsText}</th>
                        <th>{subjectMarksTableMetaData.halfYearlyTestText}</th>
                        <th>{subjectMarksTableMetaData.halfYearlyText}</th>
                        <th>{subjectMarksTableMetaData.halfYearlyMarksObtainedText}</th>
                        <th>{subjectMarksTableMetaData.halfYearlyGradeText}</th>

                        <th>{subjectMarksTableMetaData.annualTestText}</th>
                        <th>{subjectMarksTableMetaData.annualText}</th>
                        <th>{subjectMarksTableMetaData.halfYearlyMarksObtainedText}</th>
                        <th>{subjectMarksTableMetaData.annualGradeText}</th>

                        <th colSpan={2}>{subjectMarksTableMetaData.bothTermsMarksObtainedText}</th>
                    </tr>
                </thead>

                <tbody>
                <SubjectRow />
                <SubjectRow />
                <SubjectRow />
                <SubjectRow />
                <SubjectRow />

                <tr>
                    <td colSpan={5}><b>Total(600)</b></td>
                    <td><b>297</b></td>
                    <td><b>49.50%</b></td>
                    <td colSpan={2}><b>Total(600)</b></td>
                    <td><b>297</b></td>
                    <td><b>49.50%</b></td>
                    <td><b>718</b></td>
                    <td><b>59.80%</b></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SubjectMarksTable;