const Contact = ({persInfo}) => {
    return ( 
        <div className="contact">
            <div className="contactInfo">{persInfo.address1}</div>
            <div className="contactInfo">{persInfo.address2}</div>
            <div className="contactInfo">{persInfo.phone}</div>
            <div className="contactInfo">{persInfo.email}</div>
            <div className="contactInfo">{persInfo.linkedIn}</div>
        </div>
     );
}
 
export default Contact;