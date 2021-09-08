import { NavbarOption } from "./layout/NavBarElements";
import { Fragment } from "react";

const NavLinks = () => {
    return (
        <Fragment>
            <NavbarOption to="/" title="Home">
            Home
            </NavbarOption>

            <NavbarOption to="/news" title="News">
            News
            </NavbarOption>

            <NavbarOption to="/gallery" title="Gallery">
            Gallery
            </NavbarOption>

            <NavbarOption to="/spacecrafts" title="Spacecrafts">
            Spacecrafts
            </NavbarOption>

            <NavbarOption to="/astronauts" title="Astronauts">
            Astronauts
            </NavbarOption>
            <NavbarOption to="/events" title="Events">
            Events
            </NavbarOption>

            <NavbarOption to="/locations" title="Locations">
            Locations
            </NavbarOption>
        </Fragment>
    )
}

export default NavLinks
