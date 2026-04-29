
import './Header.css'
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <h1>Игра мемори</h1>
            <nav className='main-menu'>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'link--active' : '')}>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/game" className={({ isActive }) => (isActive ? 'link--active' : '')}>Игра</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/images/list" className={({ isActive }) => (isActive ? 'link--active' : '')}>Картинки(вложенные марштуры)</NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}