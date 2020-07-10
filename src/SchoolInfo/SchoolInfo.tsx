import React from 'react';

interface schoolInfoProps {
    name: string,
    affliationText: string,
    tagUrl: string,
    address: string,
    phoneNumber: string,
    email: string
}

const schoolInfo: React.FC<schoolInfoProps> = (props) => {
    return (
        <div className='schoolInfo'>
            <img src={props.tagUrl} alt="School Tag"/>
            <h1>{props.name}</h1>
            <p>{props.affliationText}</p>
            <p>{props.address}</p>
            <p>Phone Number: {props.phoneNumber}, Email: {props.email}</p>
        </div>
    );
}

export default schoolInfo;