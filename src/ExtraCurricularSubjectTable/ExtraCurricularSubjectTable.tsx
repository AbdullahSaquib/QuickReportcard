import React from 'react';
import ExtraCurricularSubjectRow from './ExtraCurricularSubjectRow';


const extraCurricularSubjectTable = () => {
    return (
        <table className='extraCurricularSubjectTable'>
            <thead>

                <tr>
                    <th colSpan={7}>EXTRA-CURRICULAR AREA</th>
                </tr>

                <tr>
                    <th colSpan={3}> </th>
                    <th colSpan={2}> TERM I</th>
                    <th colSpan={2}>TERM II</th>
                </tr>
            </thead>

            <tbody>
               <ExtraCurricularSubjectRow />
               <ExtraCurricularSubjectRow />
               <ExtraCurricularSubjectRow />
               <ExtraCurricularSubjectRow />
               <ExtraCurricularSubjectRow />
            </tbody>
        </table>
    );
};

export default extraCurricularSubjectTable;