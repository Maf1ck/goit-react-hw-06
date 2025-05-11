import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const visibleContacts = getVisibleContacts();

    return (
        <ul className={css.contactsBook}>
            {visibleContacts.map((contact) => (
                <li className={css.contactBookItem} key={contact.id}>
                    <Contact contact={contact} name={contact.name} number={contact.number} />
                </li>
            ))}
        </ul>
    );
}