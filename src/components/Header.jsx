import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Header() {
  return (
    <div>
      <Navbar className="border-bottom border-2 border-success" expand dark>
        <NavbarBrand href="/">
          <div className="border rounded bg-success border-success px-2 py-1">
            <span className="text-white fw-bold me-1">Todo</span>
            <span className="bg-dark fw-bold px-2 rounded">List</span>
          </div>
        </NavbarBrand>
        <Nav className="" navbar>
          <NavItem>
            <NavLink
              href="/components/"
              className="bg-success px-3 rounded text-white "
            >
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
