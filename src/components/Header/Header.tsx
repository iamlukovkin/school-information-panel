import './header.css';
import type {FC} from "react";

const NavBar: FC = () => {
    const infoLinks = [{key: '', title: 'Главная'}, {key: 'about', title: 'О школе'}];
    return (<nav>
        {infoLinks.map(element => {
            return <a key={element.key} href={"/" + element.key}>{element.title}</a>
        })}
    </nav>);
}

export const Header: FC = () => {
    return (
        <header>
            <div>
                <h1>Школа №41</h1>
                <p>Будущее за теми, кто учится!</p>
            </div>
            <NavBar/>
        </header>
    );
}
