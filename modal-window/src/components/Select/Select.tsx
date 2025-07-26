import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import styles from "./Select.module.css";
import clsx from "clsx";

type SelectProps = {
    options: { value: string; label: string }[];
    placeholder: string;
};

export const Select = ({ options, placeholder }: SelectProps) => {
    const [selectedValue, setSelectedValue] = useState(placeholder);
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className={styles.inputWrapper}>
            <button
                className={styles.input}
                type="button"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <p
                    className={clsx(styles.text, {
                        [styles.labelText]: !isSelected,
                    })}
                >
                    {selectedValue}
                </p>
                <img src={arrow}></img>
            </button>

            {isOpen && (
                <ul className={styles.optionsWrapper}>
                    {options.map((option) => (
                        <li
                            className={styles.option}
                            key={option.value}
                            onClick={() => {
                                setIsSelected(true);
                                setSelectedValue(option.label);
                                setIsOpen(!isOpen);
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
