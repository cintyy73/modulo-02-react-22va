import { useToggle } from "../hooks/useToggle";
import styles from "./Modal.module.css";

// eslint-disable-next-line react/prop-types
export const Modal = ({ children }) => {
  console.log(styles);
  const { open, close, isOpen } = useToggle();
  return (
    <div>
      <button onClick={open}>Open </button>
      {isOpen && (
        <main className={styles.modal}>
          <div className={styles.overlay} onClick={close} />
          <div className={styles.content}>{children}</div>
        </main>
      )}
    </div>
  );
};
