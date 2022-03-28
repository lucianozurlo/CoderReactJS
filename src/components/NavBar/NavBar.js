import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img className='Logo' src={'./img/logo.png'} />
            <div className='menu'>
                <ul>
                    <li><a href='#'>CATEGORÍAS</a></li>
                    <li><a href='#'>PORTFOLIO</a></li>
                    <li><a href='#'>INSTITUCIONAL</a></li>
                    <li><a href='#'>CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar