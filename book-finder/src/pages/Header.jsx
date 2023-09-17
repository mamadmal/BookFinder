import { Navbar, NavbarBrand, Nav, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Header = ()=>{
    // style
    const colapseMenu ={
        backgroundColor : '#c8deff90',
        color : '#c8deff',
    }
    return(
        <Navbar expand="lg">
        <Container className='text-light'>
            <NavbarBrand className='text-primary'>Book Finder!</NavbarBrand>
            <hr />
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={colapseMenu}/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto'>
                <NavLink className='text-primary ' href="/">Home</NavLink>
                <NavLink className='text-primary' href='/author'>Find By Author</NavLink>
                <NavLink className='text-primary'>About Me</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <hr className='bg-dark border-dark '/>
        </Navbar>
    )
}

export default Header;