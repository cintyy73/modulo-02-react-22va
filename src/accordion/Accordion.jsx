/* eslint-disable react/prop-types */

import { useToggle } from "../hooks/useToggle";

export const Accordion = ({ title, children }) => {
    const  {
        isOpen,
        toggle,
      } = useToggle()
  return (
    <div>
      <header>
        <h2>{title} <button onClick={toggle}>{isOpen?"-":"+"}</button></h2>
       
      </header>
      {/* {isOpen?<main>{children}</main>: <main></main>} */}
     {/* {isOpen && <main>{children}</main>} */}
     <main>{isOpen && children}</main>
    </div>
  );
};
