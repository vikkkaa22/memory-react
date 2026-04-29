import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";

export default function PageMain() {
    return (
        <div>
            <Header />

            <main className="main">
                <p className="title-rules">Правила игры</p>
                <ol className="rules">
                    <li>Правило 1</li>
                    <li>Правило 2</li>
                    <li>Правило 3</li>
                </ol>
                <Link to="game" className="start-game">Начать играть</Link>
            </main>

            {/* <footer>
                <p>&copy; Попова Виктория, 2026 г.</p>
            </footer> */}
        </div>
    );
}