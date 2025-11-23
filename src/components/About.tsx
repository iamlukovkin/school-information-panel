import {type FC} from "react";

export const About: FC = () => {
    const teachers = [
        {
            "name": "Зайцев Владимир Васильевич",
            "work": "Директор",
            "phone": "44-02-86",
            "hours": "чт 14:00-16:00",
            "email": "sh41.ryazan@ryazan.gov.ru"
        },
        {
            "name": "Колесникова Татьяна Анатольевна",
            "work": "Заместитель директора по учебной работе",
            "phone": "44-03-12",
            "hours": null,
            "email": "sh41.ryazan@ryazan.gov.ru"
        },
        {
            "name": "Колесникова Татьяна Анатольевна",
            "work": "Заместитель директора по учебной работе",
            "phone": "44-03-12",
            "hours": null,
            "email": "sh41.ryazan@ryazan.gov.ru"
        },
        {
            "name": "Старицкий Даниил Вадимович",
            "work": "Заместитель директора по учебной работе",
            "phone": "44-03-12",
            "hours": null,
            "email": "sh41.ryazan@ryazan.gov.ru"
        },
        {
            "name": "Рябичева Лилия Леонидовна",
            "work": "Заместитель директора по учебной работе",
            "phone": "44-03-12",
            "hours": null,
            "email": "sh41.ryazan@ryazan.gov.ru"
        },
        {
            "name": "Кугушева Оксана Николаевна",
            "work": "Заместитель директора по учебной работе",
            "phone": "44-03-12",
            "hours": null,
            "email": "sh41.ryazan@ryazan.gov.ru"
        },
        {
            "name": "Тучина Валентина Петровна",
            "work": "Заместитель директора по административно-хозяйственной части",
            "phone": "44-03-12",
            "hours": null,
            "email": "sh41.ryazan@ryazan.gov.ru"
        },
    ]
    return (<>
            <h2>Руководство</h2>
            <div className={'teachers'}>
                {teachers.map((item, index) => (
                    <div key={index} className={'teacher'}
                         style={{
                             width: `100%`,
                             backgroundColor: "var(#000000)",
                             borderRadius: '5px',
                             padding: '10px',
                             margin: '10px',
                         }}>
                        <p style={{
                            color: 'blue',
                            fontWeight: 'bold',
                            display: "flex",
                            flexDirection: 'column',
                        }}>{item.name}</p>
                        <p>{item.work}</p>
                        <p><b>Телефон</b>: {item.phone}</p>
                        <p><b>Электронная почта</b>: {item.email}</p>
                        {item.work === "Директор" && (<p>
                            <b>Часы приёма</b>: {item.hours}
                        </p>)}
                    </div>
                ))}
            </div>
            <h2>Краткая справка</h2>
            <p>Организация 'МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ "ШКОЛА № 41"'
                зарегистрирована 05
                января 2003 года по адресу 390011, Рязанская область, ГОРОД РЯЗАНЬ, Г. РЯЗАНЬ, Г РЯЗАНЬ, УЛ.
                ТРУДОВАЯ, Д.6/6. Компании был присвоен ОГРН 1026201111870 и выдан ИНН 6230029990. Основным видом
                деятельности является образование основное общее. Компанию возглавляет ЗАЙЦЕВ ВЛАДИМИР
                ВАСИЛЬЕВИЧ.</p>
            <p>Адрес: Россия, Рязанская обл, Рязань г, Трудовая ул, 6/6.</p>
            <p>Учредитель: АДМИНИСТРАЦИЯ ГОРОДА РЯЗАНИ.</p>
        </>
    );
}
