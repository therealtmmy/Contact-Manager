import React from "react"

const ContactCard = (props) => {

    const {id, image, name, email, phoneNumber, address} = props.contact;

    const styledIcon = {
        paddingLeft: "77em",
        color: "red",
        marginTop: "10px",
        cursor: "pointer"
    }

    return (
        <div className="item">
             <img className="ui avatar image" src={image}alt="userIcon" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
            <div>{address}</div>
        </div>
        <i className="trash alternate outline icon" style={styledIcon} onClick={()=> props.clickHandler(id)}></i>
    </div>
    )
}

export default ContactCard