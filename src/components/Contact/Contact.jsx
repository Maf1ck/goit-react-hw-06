import css from './Contact.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import {deleteContact} from "../../redux/contactsSlice";

export default function Contact  ({contact,name, number}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    }
  return (
    <>
      <div className={css.contactBox}>
        <p className={css.contactName}>
          {' '}
          <RiContactsBook2Fill className={css.icons} />
          {name}
        </p>
        <p className={css.contactNumber}>
          {' '}
          <FaPhoneSquareAlt className={css.icons} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}