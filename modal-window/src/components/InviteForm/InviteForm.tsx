import { type FC } from "react";
import styles from "./InviteForm.module.css";

export type Invite = {
    name: string;
    email: string;
    phone: string;
};

type InviteBlockForm = {
    data: Invite;
    index: number;
    setInvites: React.Dispatch<React.SetStateAction<Invite[]>>;
};

export const InviteBlockForm: FC<InviteBlockForm> = ({
    data,
    index,
    setInvites,
}) => {
    const { name, email, phone } = data;

    const onChange: (
        valueType: keyof Invite
    ) => React.ChangeEventHandler<HTMLInputElement> =
        (valueType) => (event) => {
            const newValue = event.target.value;

            setInvites((prev) => {
                const updatedItems = [...prev];

                updatedItems[index] = {
                    ...updatedItems[index],
                    [valueType]: newValue,
                };

                return updatedItems;
            });
        };

    return (
        <form action="" className={styles.inviteForm}>
            <label className={styles.labelText} htmlFor={`name-${index}`}>
                Имя друга {index + 1}
            </label>
            <input
                type="text"
                value={name}
                onChange={onChange("name")}
                placeholder="Введите ФИО друга"
                id={`name-${index}`}
                className={styles.input}
            />
            <label className={styles.labelText} htmlFor={`email-${index}`}>
                Имейл друга {index + 1}
            </label>
            <input
                type="text"
                value={email}
                onChange={onChange("email")}
                placeholder="Введите имейл друга"
                className={styles.input}
            />
            <label className={styles.labelText} htmlFor={`phone-${index}`}>
                Телефон друга {index + 1}
            </label>
            <input
                type="text"
                value={phone}
                onChange={onChange("phone")}
                placeholder="Введите телефон друга"
                className={styles.input}
            />
        </form>
    );
};
