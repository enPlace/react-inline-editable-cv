const Name = ({firstName, lastName}) => {
    return ( 
        <div className="name">
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </div>
     );
}
 
export default Name;