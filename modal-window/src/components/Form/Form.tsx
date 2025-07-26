import { useState } from "react";
import addButton from "../../assets/add-button.svg";
import { Select } from "../Select/Select";
import styles from "./Form.module.css";
import { InviteBlockForm, type Invite } from "../InviteForm/InviteForm";

export const Form = () => {
    const [invites, setInvites] = useState<Invite[]>([]);
    const options = [
        { value: "1", label: "Первый вариант" },
        { value: "2", label: "Второй вариант" },
        { value: "3", label: "Третий вариант" },
    ];

    const onClickButtonHandler = () => {
        if (invites.length < 3) {
            const newInvite: Invite = {
                name: "",
                email: "",
                phone: "",
            };

            setInvites((prev) => [...prev, newInvite]);
        }
    };

    return (
        <form className={styles.form}>
            <div className={styles.inputWrapper}>
                <p className={styles.labelText}>
                    Тип мероприятия <span className={styles.required}>*</span>
                </p>
                <Select
                    options={options}
                    placeholder="Выберите вид мероприятия"
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.labelText} htmlFor="name">
                    ФИО <span className={styles.required}>*</span>
                </label>
                <input
                    className={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Введите ФИО"
                ></input>
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.labelText} htmlFor="email">
                    Имейл <span className={styles.required}>*</span>
                </label>
                <input
                    className={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введите имейл"
                ></input>
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.labelText} htmlFor="number">
                    Номер телефона <span className={styles.required}>*</span>
                </label>
                <input
                    className={styles.input}
                    type="phone"
                    id="number"
                    name="number"
                    placeholder="+7 777 777 77 77"
                ></input>
            </div>
            {invites.length < 3 && (
                <button
                    className={styles.addButton}
                    type="button"
                    onClick={onClickButtonHandler}
                >
                    <img src={addButton}></img>
                    <p>Добавить друга</p>
                </button>
            )}
            {invites.map((invite, index) => (
                <InviteBlockForm
                    data={invite}
                    index={index}
                    key={index}
                    setInvites={setInvites}
                />
            ))}
            <div className={styles.inputWrapper}>
                <p className={styles.labelText}>
                    Предпочитаемый вид связи{" "}
                    <span className={styles.required}>*</span>
                </p>
                <Select
                    options={options}
                    placeholder="Выберите предпочитаемый вид связи"
                />
            </div>
        </form>
    );
};
