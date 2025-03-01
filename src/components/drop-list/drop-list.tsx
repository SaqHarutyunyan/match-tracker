import React, { useState, useRef, useEffect } from "react";
import {
    Arrow,
    Dropdown,
    Option,
    SelectBox,
    SelectWrapper,
} from "./drop-list.style";
import { Status } from "../../lib/types";

export type DropDownTypes = Status | "all statuses";

const dropDownElements: { value: DropDownTypes; label: string }[] = [
    {
        value: "all statuses",
        label: "All statuses",
    },
    {
        value: Status.live,
        label: "Ongoing",
    },
    {
        value: Status.finished,
        label: "Finished",
    },
    {
        value: Status.matchPreparing,
        label: "Match preparing",
    },
    {
        value: Status.scheduled,
        label: "Scheduled",
    },
];
interface Props {
    onFilter: (value: DropDownTypes) => void;
}
const DropList: React.FC<Props> = ({ onFilter }) => {
    const [selected, setSelected] = useState<DropDownTypes>("all statuses");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (value: DropDownTypes) => {
        setSelected(value);
        onFilter(value);
        setIsOpen(false);
    };

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
                {selected.charAt(0).toUpperCase() + selected.slice(1)}
                <Arrow open={isOpen}>
                    <img src="/icons/arrowdown.png" alt="" />
                </Arrow>
            </SelectBox>
            {isOpen && (
                <Dropdown>
                    {dropDownElements.map((status) => (
                        <Option
                            key={status.value}
                            onClick={() => handleSelect(status.value)}
                        >
                            {status.label}
                        </Option>
                    ))}
                </Dropdown>
            )}
        </SelectWrapper>
    );
};

export default DropList;
