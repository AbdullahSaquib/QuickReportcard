import React from 'react';

interface StudentProfileProps {
    rollNumber: number,
    admissionNumber: number,
    name: string,
    classAndSection: string,
    mothersName: string,
    fathersName: string
}

const StudentProfile: React.FC<StudentProfileProps> = (props) => {
    return (
        <table className='studentProfile'>
            <tbody>
                <tr>
                    <td><b>Roll Number: </b>{props.rollNumber}</td>
                    <td><b>Admission Number: </b>{props.admissionNumber}</td>
                </tr>
                <tr>
                    <td><b>Name: </b>{props.name}</td>
                    <td><b>Class & Section: </b>{props.classAndSection}</td>
                </tr>
                <tr>
                    <td><b>Mother's Name: </b>{props.mothersName}</td>
                    <td><b>Father's Name: </b>{props.fathersName}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default StudentProfile;