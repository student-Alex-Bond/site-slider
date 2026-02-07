import type { FC } from "react";
import "./mobile-contacts.css";
import { Contacts } from "../contacts";
export const MobileContacts: FC = () => {
  return (
    <section id="contacts">
      <Contacts />
    </section>
  );
};
