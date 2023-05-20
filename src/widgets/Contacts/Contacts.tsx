import { FC, useEffect } from "react";

import cls from "./Contacts.module.scss";

import { ContactCard } from "../../shared/ui/ContactCard/ContactCard";

import { useAppSelector } from "../../shared/services/hooks/hooks";

import { fakeContacts } from "../../utils/data";
import { contactSel } from "../../utils/selectorData";

export const Contacts: FC = () => {
  const { contact } = useAppSelector(contactSel);
  //fake server Contacts data
  const addedContact = localStorage.getItem("newContact");

  useEffect(() => {}, [contact]);

  return (
    <section className={cls.section}>
      <ul className={cls.contactsContainer}>
        {addedContact ? (
          <li key={addedContact}>
            <ContactCard name={`+${addedContact}`} active />
          </li>
        ) : null}
        {fakeContacts.map((user) => {
          return (
            <li key={user.id}>
              <ContactCard name={user.name} avatar={user.avatar} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
