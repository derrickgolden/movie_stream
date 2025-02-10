
export interface ToggleProps{
    toggle: {
        link: string;
        isOpen: boolean;
    };
    setToggle: React.Dispatch<React.SetStateAction<{
        link: string;
        isOpen: boolean;
    }>>;
}