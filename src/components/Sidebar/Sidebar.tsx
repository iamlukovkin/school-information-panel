import './sidebar.css';
import type {Page} from "../../@types";
import type {FC} from "react";

export type SideBarProps = {
    pages: Array<Page>;
}

export const Sidebar: FC<SideBarProps> = ({pages}) => {
    return (<aside>
        {pages.map((pageInformation) => {
            return (
                <a key={pageInformation.link} href={'/' + pageInformation.link}>
                    <button>{pageInformation.title}</button>
                </a>
            );
        })}
    </aside>);
}
