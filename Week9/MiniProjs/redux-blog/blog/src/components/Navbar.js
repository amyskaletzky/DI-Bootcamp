import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link className="left hide-on-med-and-down" to={'/'}>My Blog</Link>
                <div className="right hide-on-med-and-down">
                    <Link to={'/'}>Home</Link> {' '}
                    <Link to={'/about'}>About</Link>{' '}
                    <Link to={'/contact'}>Contact</Link>{' '}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
