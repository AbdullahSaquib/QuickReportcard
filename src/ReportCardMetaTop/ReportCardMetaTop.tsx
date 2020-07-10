import React from 'react';

interface ReportCardMetaTopProps {
    academicYear: string,
    reportCardName: string
}

const reportCardMetaTop: React.FC<ReportCardMetaTopProps> = (props) => {
    return (
        <div className='reportCardMetaTop'>
            <h3>ACADEMIC YEAR: {props.academicYear}</h3>
            <h3>{props.reportCardName}</h3>
        </div>
    );
}

export default reportCardMetaTop;