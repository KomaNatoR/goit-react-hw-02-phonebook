

const ContactList = ({renderData,onClick}) => {
    return (
        <ul>
            {renderData.map(cont => (<li key={cont.id}>
                <span>{cont.name}:</span>
                <span>{cont.number}</span>
                <button onClick={()=>onClick(cont.id)}>Delete</button>
            </li>))}
        </ul>
    );
};
export default ContactList;