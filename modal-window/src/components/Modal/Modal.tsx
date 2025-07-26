import closeButton from "../../assets/close-button.svg";
import { Form } from "../Form/Form";
import styles from "./Modal.module.css";
import clsx from "clsx";

export const Modal = () => {
    return (
        <div className={styles.modal}>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    Заявка на регистрацию для мероприятия
                </h1>
                <button className={styles.closeButton}>
                    <img src={closeButton}></img>
                </button>
            </header>
            <Form />
            <footer className={styles.footer}>
                <button className={clsx(styles.button, styles.buttonBack)}>
                    <p className={styles.buttonText}>Назад</p>
                </button>
                <button className={clsx(styles.button, styles.buttonNext)}>
                    <p className={styles.buttonText}>Дальше</p>
                </button>
            </footer>
        </div>
    );
};
