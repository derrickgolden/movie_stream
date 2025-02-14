
export interface ToggleProps{
    toggle: {
        link: string;
        isOpen: boolean;
    };
    setToggle: React.Dispatch<React.SetStateAction<{
        link: string;
        isOpen: boolean;
    }>>;
    setIsLandingReady: React.Dispatch<React.SetStateAction<boolean>>
}