import { HamburgerMenu } from "./layout/NavBarElements";


const DropdownRoutes = (props) => {
    const handleClick = () => {
        props.onClick(props.display)
    }

    return (
        <HamburgerMenu icon={props.icon} onClick={handleClick} display={props.display} />
    )
}

export default DropdownRoutes
