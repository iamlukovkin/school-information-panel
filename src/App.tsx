import './App.css';

import type {Page} from "./@types";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {type FC} from "react";
import {ImagesContainer, About, Sidebar, Header} from "./components";

export type AppPages = {
    thematical: Array<Page>,
    system: Array<Page>,
}

function createRoute(page: Page) {
    const PageContent: FC = page.content;
    return (
        <Route key={page.link} path={page.link === "/" ? "/" : `/${page.link}`}
               element={
                   <div className="info-page">
                       {page.link !== "first_page" && <h1>{page.title}</h1>}
                       {page.link !== "first_page" && <p>{page.description}</p>}
                       <PageContent/>
                   </div>
               }
        />
    );
}


export default function App() {

    const pages: AppPages = {
        thematical: [
            {
                link: "tubing",
                title: "Осторожно, тюбинг!",
                description: "",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/Tubing/*.{png,jpg,jpeg,svg}', 
                        {eager: true, as: 'url'}
                    );
                    return (<ImagesContainer images={images}/>)
                }
            },
            {
                link: "aids_fight_day",
                title: "Всемирный день борьбы со СПИДом",
                description: "",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/AidsFightDay/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<ImagesContainer images={images}/>);
                }
            },
            {
                link: "trains",
                title: "Внимание: Железная дорога!",
                description: "Будьте осторожны, переходя через железную дорогу",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/Trains/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<ImagesContainer images={images}/>);
                }
            },
            {
                link: "scammers",
                title: "Осторожно, мошенники!",
                description: "Будьте бдительны и не дайте себя обмануть!",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/Scammers/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<>
                        <p>Мошенники используют множество поводов для обмана людей,
                            различные методы, чтобы получить доступ к личным данным:
                            звонки, сообщения в социальных сетях или электронные письма.
                            Искусственный интеллект способен сгенерировать голос и даже изображение вашего
                            родственника, друга. Если звонящий заводит речь о ваших
                            финансах, пин-кодах из СМС,
                            номерах банковских карт и персональных данных – не втягивайтесь в разговор.
                            ПОЛОЖИТЕ ТРУБКУ и ваши деньги останутся в сохранности.</p>
                        <ImagesContainer images={images}/>
                    </>);
                }
            },
            {
                link: "safety_road_to_home",
                title: "Безопасная дорога в школу и домой",
                description: "",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/SafetyRoadToHome/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<ImagesContainer images={images}/>);
                }
            },
            {
                link: "scooter_rules",
                title: 'Самокаты - правила вождения',
                description: 'Основные правила поведения при вождении электросамокатов',
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/ScooterRules/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<ImagesContainer images={images}/>);
                }
            },
            {
                link: "corruption",
                title: "Антикоррупция",
                description: "Антикоррупционый комитет Рязанской области",
                content: () => {
                    const images = Object.values(import.meta.glob(
                        './assets/images/Corruption/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    ));
                    return (
                        <div>
                            {images.length === 1 && (<img style={{width: "70%"}} src={images[0]} alt={'corruption'}/>)}
                            <p>
                                <b>Контактный телефон:</b>
                                8(4912)44-18-22
                                <br/>
                                <b>Телефон горячей линии по вопросам противодействия коррупции:</b>
                                8(4912)55-18-27
                                <br/>
                                <b>Адрес электронной почты:</b>
                                akro@ryazan.gov.ru
                            </p>
                        </div>
                    );
                },
            },
            {
                link: "drones",
                title: "Опасность БПЛА",
                description: "Памятка населению о порядке действий населения при обнаружении беспилотных летательных аппаратов (БПЛА)",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/Drones/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<ImagesContainer images={images}/>);
                },
            },
            {
                link: "extremism",
                title: "QR-коды против экстремизма",
                description: "Узнай об ответственности за экстремистскую деятельность в Российской Федерации",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/Extremism/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<ImagesContainer images={images}/>);
                }
            },
            {
                link: "help_phones",
                title: "Телефон доверия",
                description: "Бесплатная горячая линия",
                content: () => {
                    const images = import.meta.glob(
                        './assets/images/HelpPhones/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    );
                    return (<>
                        <h1 style={{color: "red"}}>Короткий номер с мобильных телефонов: 124</h1>
                        <div className={'images'}>
                            {Object.values(images).map(image => (<img src={image} alt={'first-image'}/>))}
                        </div>
                    </>);
                }
            },
            {
                link: "road_rules",
                title: "Уголок безопасности дорожного движения",
                description: "Быть пешеходом — это очень ответственно, особенно важно правильно вести себя на дороге.",
                content: () => {
                    const mainImages = Object.values(import.meta.glob(
                        './assets/images/RoadRules/main/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    ));
                    const otherImages = Object.values(import.meta.glob(
                        './assets/images/RoadRules/other/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    ));
                    return (
                        <>
                            {mainImages.length === 1 && (
                                <img style={{width: "70%"}} src={mainImages[0]} alt={'corruption'}/>
                            )}
                            <div className={'images'}>
                                {otherImages.map((image) => (<img src={image} alt={''}/>))}
                            </div>
                        </>
                    )
                }
            },
            {
                link: "safety_network",
                title: "Безопасный интернет",
                description: "Правила поведения в виртуальном пространстве",
                content: () => {
                    const images = Object.values(import.meta.glob(
                        './assets/images/SafetyNetwork/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    ));
                    return (
                        <div className={'images'}>
                            {images.map(current => (<img src={current} alt={'current'}/>))}
                        </div>
                    )
                }
            }
        ],
        system: [
            {
                link: "/",
                title: null,
                description: null,
                content: () => {
                    const images = Object.values(import.meta.glob(
                        './assets/images/IndexPage/*.{png,jpg,jpeg,svg}',
                        {eager: true, as: 'url'}
                    ));
                    return (
                        <>
                            <h1>Школа №41</h1>
                            <h2>Муниципальное бюджетное общеобразовательное учреждение</h2>
                            {images.length === 1 && (
                                <img style={{width: "90%"}} src={images[0]} alt={'corruption'}/>
                            )}
                        </>
                    );
                },
            },
            {
                link: "/about",
                title: null,
                description: null,
                content: About
            }
        ]
    };

    return (
        <body>
        <Header/>
        <main>
            <Sidebar pages={Array.from(pages.thematical)}/>
            <BrowserRouter>
                <Routes>
                    {pages.system.map(createRoute)}
                    {pages.thematical.map(createRoute)}
                </Routes>
            </BrowserRouter>
        </main>
        <footer>
            <p>&copy; МБОУ "Школа №41", г. Рязань</p>
        </footer>
        </body>
    );
}

