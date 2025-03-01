import React, { useState, useRef, useEffect } from "react";
import {
    Arrow,
    Dropdown,
    Option,
    SelectBox,
    SelectWrapper,
} from "./drop-list.style";

const CustomSelect: React.FC = () => {
    const [selected, setSelected] = useState("Все статусы");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (value: string) => {
        setSelected(value);
        setIsOpen(false);
    };

    // Click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <SelectWrapper ref={dropdownRef}>
            <SelectBox onClick={toggleDropdown}>
                {selected}
                <Arrow open={isOpen}>
                    <img src="/icons/arrowdown.png" alt="" />
                </Arrow>
            </SelectBox>
            {isOpen && (
                <Dropdown>
                    {["Все статусы", "Live", "Finished", "Match preparing"].map(
                        (status) => (
                            <Option
                                key={status}
                                onClick={() => handleSelect(status)}
                            >
                                {status}
                            </Option>
                        )
                    )}
                </Dropdown>
            )}
        </SelectWrapper>
    );
};

export default CustomSelect;
