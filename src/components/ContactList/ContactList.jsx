

const ContactList = ({render}) => {
    return (
        <ul>
          {render.map(cont => (<li key={cont.id}>{cont.name}: {cont.number}</li>))}
        </ul>
    );
};
export default ContactList;