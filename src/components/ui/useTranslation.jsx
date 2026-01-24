import { useState, useEffect } from 'react';

const translations = {
  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.about': 'Про мене',
    'nav.services': 'Послуги',
    'nav.contact': 'Контакти',
    
    // Header
    'header.name': 'Віталій Смирнов',
    'header.title': 'Реабілітаційна терапія',
    'header.call': 'Подзвонити',
    
    // Hero
    'hero.badge': '35+ років професійного досвіду',
    'hero.title1': 'Комплексна',
    'hero.title2': 'реабілітаційна',
    'hero.title3': 'терапія в Кракові',
    'hero.subtitle': 'Повернення до життя без болю через масаж, мануальну терапію та персоналізовані програми вправ.',
    'hero.tag1': 'Індивідуальний підхід',
    'hero.tag2': 'Без зайвих процедур',
    'hero.cta': 'Записатися через Телеграм',
    'hero.clients': 'задоволених клієнтів',
    'hero.since': 'року практики',
    
    // Footer
    'footer.fullTitle': 'Комплексна реабілітаційна терапія',
    'footer.description': '35+ років досвіду у мануальній терапії, масажі та реабілітації. Працюю з причиною болю, а не тільки симптомами.',
    'footer.navigation': 'Навігація',
    'footer.contacts': 'Контакти',
    'footer.location': 'Краків та околиці',
    'footer.rights': 'Всі права захищено.',
    
    // Quick Contact
    'contact.title': 'Готові почати шлях до здоров\'я?',
    'contact.subtitle': 'Зв\'яжіться зі мною зручним способом — відповім протягом години',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.emailAction': 'Написати',
    'contact.callNow': 'Подзвонити зараз',
    'contact.writeTelegram': 'Написати в Telegram',
    
    // About page
    'about.qualification': 'Кваліфікація',
    'about.educationTitle': 'Освіта та досвід',
    'about.diplomasTitle': 'Дипломи та сертифікати',
    'about.clickToView': 'Натисніть для перегляду',
    'about.institute': 'Інститут фізичної культури',
    'about.massageSchool': 'Львівська школа масажу',
    'about.polishCerts': 'Польські сертифікати з реабілітації',
    'about.psychosomatics': 'Курси психосоматики та біоенергетики',
    
    // HeroAbout
    'about.badge': 'Про мене',
    'about.name': 'Віталій Смирнов',
    'about.specialist': 'Спеціаліст з комплексної реабілітаційної терапії',
    'about.bio': 'Вже понад 35 років я допомагаю людям повертатися до повноцінного життя без болю. Моя філософія проста: шукати справжню причину проблеми, а не маскувати симптоми.',
    'about.yearsExp': 'років досвіду',
    'about.inProfession': 'у професії',
    'about.patients': 'пацієнтів',
    'about.certificates': 'сертифікатів',
    
    // StorySection
    'about.storyBadge': 'Моя історія',
    'about.storyTitle': 'Шлях у професії',
    'about.storyP1': 'Мій шлях у реабілітаційній терапії почався ще у 1990 році. За ці роки я накопичив величезний досвід у різних напрямках: від класичного масажу до мануальної терапії, від ЛФК до роботи з психосоматичними розладами.',
    'about.storyP2': 'Особливе місце в моєму розумінні болю займає власний досвід. У дитинстві я сам страждав від проблем зі здоров\'ям, і це допомогло мені глибше зрозуміти стан моїх пацієнтів. Я знаю, як відчувається біль, і знаю, як важливо знайти спеціаліста, який дійсно розуміє твою проблему.',
    'about.storyP3': 'За 35 років практики я допоміг тисячам людей повернутися до нормального життя. Кожен випадок унікальний, і кожна перемога над болем — це моя особиста радість. Я продовжую вчитися та вдосконалюватися, щоб давати своїм пацієнтам найкращий результат.',
    
    // ApproachSection
    'about.approachBadge': 'Мій підхід',
    'about.approachTitle': 'Філософія роботи',
    'about.approachSubtitle': 'Принципи, яких я дотримуюсь у роботі з кожним пацієнтом',
    'about.approach1Title': 'Працюю з причиною, а не симптомом',
    'about.approach1Desc': 'Шукаю справжнє джерело проблеми, а не просто знімаю біль.',
    'about.approach2Title': 'Оцінюю тіло як систему',
    'about.approach2Desc': 'Аналізую скелет, м\'язи, фасції, звички та емоційний стан.',
    'about.approach3Title': 'Поєдную різні техніки',
    'about.approach3Desc': 'Комбіную масаж, мануальну терапію, акупресуру та ЛФК.',
    'about.approach4Title': 'Орієнтуюсь на результат',
    'about.approach4Desc': 'Мета — не нескінченні сеанси, а ваша автономність.',
    'about.approach5Title': 'Навчаю самодопомозі',
    'about.approach5Desc': 'Даю вправи та рекомендації для самостійного підтримання здоров\'я.',
    'about.approach6Title': 'Індивідуальний підхід',
    'about.approach6Desc': 'Кожен пацієнт — унікальний випадок, кожен сеанс — персоналізований.',
    
    // ValuesSection
    'about.valuesTitle': 'Мої цінності',
    'about.valuesSubtitle': 'Принципи, на яких будується моя робота',
    'about.value1Title': 'Турбота',
    'about.value1Desc': 'Кожен пацієнт отримує мою повну увагу та підтримку.',
    'about.value2Title': 'Повага до часу',
    'about.value2Desc': 'Я ціную ваш час і завжди дотримуюсь домовленостей.',
    'about.value3Title': 'Чесність',
    'about.value3Desc': 'Чітко кажу, скільки сеансів потрібно, без зайвих візитів.',
    'about.value4Title': 'Без зайвого',
    'about.value4Desc': 'Жодних непотрібних процедур — тільки те, що працює.',
    
    // WhoIHelp
    'whoIHelp.badge': 'Цільова аудиторія',
    'whoIHelp.title': 'Кому я допомагаю',
    'whoIHelp.healthTitle': 'За станом здоров\'я',
    'whoIHelp.lifestyleTitle': 'За способом життя',
    'whoIHelp.health1': 'Хронічні болі в спині',
    'whoIHelp.health2': 'Сколіоз та грижі',
    'whoIHelp.health3': 'Після інсульту / інфаркту',
    'whoIHelp.health4': 'Післяопераційне відновлення',
    'whoIHelp.health5': 'Релаксація та профілактика',
    'whoIHelp.lifestyle1': 'Офісні працівники',
    'whoIHelp.lifestyle2': 'Будівельники та фізична праця',
    'whoIHelp.lifestyle3': 'Професійні спортсмени',
    'whoIHelp.lifestyle4': 'Діти (з дозволу батьків)',
    'whoIHelp.lifestyle5': 'Люди похилого віку',
    'whoIHelp.lifestyle6': 'Маломобільні пацієнти',
    
    // WhatToExpect
    'expect.badge': 'Процес роботи',
    'expect.title': 'Чого очікувати',
    'expect.firstVisit': 'Перша зустріч',
    'expect.firstVisitTime': '1–2 години',
    'expect.firstVisit1': 'Детальна бесіда про історію проблеми',
    'expect.firstVisit2': 'Аналіз способу життя та роботи',
    'expect.firstVisit3': 'Огляд медичних документів (якщо є)',
    'expect.firstVisit4': 'Перша терапевтична процедура',
    'expect.firstVisitNote': '💡 Консультація безкоштовна. Ви платите лише за процедуру.',
    'expect.recovery': 'Процес відновлення',
    'expect.recoveryTime': 'Індивідуально',
    'expect.recovery1': 'Сеанси від 1 до 2 годин',
    'expect.recovery2': 'Локацію обирає клієнт (виїзд додому)',
    'expect.recovery3': 'Частота візитів — індивідуально',
    'expect.recoveryBonus': 'Бонус: індивідуальні вправи та рекомендації, щоб ви могли допомагати собі самі.',
    
    // HighlightBox
    'highlight.quote': 'Це не просто масаж — це комплексна терапія.',
    'highlight.quoteAccent': 'Я шукаю справжню причину проблеми',
    'highlight.quoteEnd': ', а не лише знімаю симптом.',
    'highlight.role': 'Реабілітолог, 35+ років досвіду',
    
    // CaseStudy
    'case.badge': 'Реальний випадок',
    'case.title': 'Історія одужання',
    'case.result': 'Повне відновлення',
    'case.resultSub': 'за кілька сеансів',
    'case.quote': '"Пацієнт прийшов з гострим болем у спині — не міг самостійно встати з ліжка. Після 6 годин інтенсивної роботи та індивідуально підібраних вправ для домашнього виконання — повне відновлення за кілька тижнів."',
    'case.stat1': '6 годин інтенсивної терапії',
    'case.stat2': 'Вправи для самостійного виконання',
    'case.stat3': 'Повне відновлення',
    
    // Contraindications
    'contra.title': 'Протипоказання',
    'contra.text': 'Онкологія, гострі інфекції — протипоказання до процедур. Інші стани обговорюємо індивідуально.',
    
    // Testimonials
    'testimonials.badge': 'Відгуки клієнтів',
    'testimonials.title': 'Що говорять пацієнти',
    'testimonials.problem': 'Проблема',
    
    // PriceTeaser
    'price.badge': 'Прозора вартість',
    'price.title': 'Чітка ціна без сюрпризів',
    'price.fromLabel': 'від',
    'price.perSession': 'за сеанс',
    'price.option1Title': 'Краків',
    'price.option1Desc': 'Виїзд безкоштовний (за наявності паркування)',
    'price.option2Title': 'Околиці',
    'price.option2Desc': '+50 PLN за виїзд (10–50 км від Кракова)',
    'price.cta': 'Детальний прайс',
    
    // Services
    'services.badge': 'Послуги',
    'services.heroTitle': 'Комплексний підхід до відновлення',
    'services.heroDesc': 'Кожен сеанс підбирається індивідуально. Часто це комбінація різних технік, а не один "вид масажу". Моя мета — знайти справжню причину проблеми та допомогти вам повернутися до активного життя.',
    'services.cardsBadge': 'Напрямки роботи',
    'services.cardsTitle': 'Що я пропоную',
    'services.manual': 'Мануальна терапія',
    'services.manualDesc': 'Корекція хребта та суглобів. Відновлення правильного положення кісток та суглобів для зняття болю та покращення рухливості.',
    'services.massage': 'Терапевтичний масаж',
    'services.massageDesc': 'Робота з м\'язами та фасціями. Глибокий масаж для зняття напруги, покращення кровообігу та відновлення тканин.',
    'services.acupressure': 'Акупресура',
    'services.acupressureDesc': 'Точковий масаж активних зон. Вплив на біологічно активні точки для стимуляції природних процесів відновлення.',
    'services.lfk': 'ЛФК',
    'services.lfkDesc': 'Лікувальна фізкультура — індивідуальні вправи для дому. Програма вправ для підтримання результату та профілактики.',
    'services.psychosomatic': 'Психосоматична терапія',
    'services.psychosomaticDesc': 'Робота з емоційними причинами болю. Часто біль має психологічне коріння — ми працюємо і з цим аспектом.',
    'services.diagnostics': 'Діагностика',
    'services.diagnosticsDesc': 'Пошук справжньої причини болю. Комплексна оцінка стану тіла, аналіз способу життя та медичної історії.',
    'services.priceBadge': 'Прайс',
    'services.priceTitle': 'Масажі та процедури',
    'services.priceNote': 'Кожен сеанс підбирається індивідуально. Часто використовується комбінація технік — ціна може бути нижчою за суму окремих послуг, а час сеансу — довшим для якісної роботи.',
    'services.ctaTitle': 'Не знаєте, що обрати?',
    'services.ctaDesc': 'Розкажіть, що болить і як давно — я підкажу оптимальний формат першого сеансу.',
    'services.ctaBtn': 'Записатися в Телеграм',
    
    // Contact
    'contactPage.badge': 'Контакти',
    'contactPage.title': 'Як записатися',
    'contactPage.desc': 'Зв\'яжіться зі мною зручним способом — я відповім протягом години та допоможу підібрати оптимальний формат першого сеансу.',
    'contactPage.phone': 'Телефон',
    'contactPage.serviceArea': 'Зона обслуговування',
    'contactPage.serviceAreaDesc1': 'Краків:',
    'contactPage.serviceAreaDesc2': 'без доплати за виїзд (якщо є безкоштовне паркування)',
    'contactPage.serviceAreaDesc3': '10–50 км від Кракова:',
    'contactPage.serviceAreaDesc4': '+50 PLN до вартості сеансу',
    'contactPage.hours': 'Години роботи',
    'contactPage.hoursWeek': 'Пн–Пт:',
    'contactPage.hoursWeekTime': '9:00–19:00',
    'contactPage.hoursSat': 'Сб:',
    'contactPage.hoursSatTime': 'за домовленістю',
    'contactPage.processBadge': 'Простий процес',
    'contactPage.processTitle': 'Як відбувається запис',
    'contactPage.step1': 'Напишіть або зателефонуйте',
    'contactPage.step1Desc': 'Опишіть коротко вашу проблему',
    'contactPage.step2': 'Домовимося про час',
    'contactPage.step2Desc': 'Оберемо зручний для вас час',
    'contactPage.step3': 'Обговоримо локацію',
    'contactPage.step3Desc': 'Виїзд додому або інша локація',
    'contactPage.step4': 'Перша зустріч',
    'contactPage.step4Desc': 'Консультація + процедура',
    'contactPage.step5': 'Рекомендації та вправи',
    'contactPage.step5Desc': 'План самостійної роботи',
    'contactPage.formBadge': 'Форма зв\'язку',
    'contactPage.formTitle': 'Залиште заявку',
    'contactPage.formDesc': 'Заповніть форму — я зв\'яжуся з вами протягом години',
    'contactPage.formName': 'Ім\'я',
    'contactPage.formNamePlaceholder': 'Ваше ім\'я',
    'contactPage.formPhone': 'Телефон / WhatsApp',
    'contactPage.formPhonePlaceholder': '+48 XXX XXX XXX',
    'contactPage.formMethod': 'Бажаний спосіб зв\'язку',
    'contactPage.formCall': 'Дзвінок',
    'contactPage.formProblem': 'Коротко про проблему',
    'contactPage.formProblemPlaceholder': 'Опишіть, що вас турбує, як давно, що вже пробували...',
    'contactPage.formConsent': 'Я погоджуюсь на обробку персональних даних відповідно до політики конфіденційності',
    'contactPage.formSubmit': 'Надіслати заявку',
  },
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.about': 'O mnie',
    'nav.services': 'Usługi',
    'nav.contact': 'Kontakt',
    
    // Header
    'header.name': 'Vitaliy Smyrnov',
    'header.title': 'Terapia rehabilitacyjna',
    'header.call': 'Zadzwoń',
    
    // Hero
    'hero.badge': 'Ponad 35 lat doświadczenia zawodowego',
    'hero.title1': 'Kompleksowa',
    'hero.title2': 'terapia',
    'hero.title3': 'rehabilitacyjna w Krakowie',
    'hero.subtitle': 'Powrót do życia bez bólu poprzez masaż, terapię manualną i spersonalizowane programy ćwiczeń.',
    'hero.tag1': 'Indywidualne podejście',
    'hero.tag2': 'Bez zbędnych procedur',
    'hero.cta': 'Umów się przez Telegram',
    'hero.clients': 'zadowolonych klientów',
    'hero.since': 'lat praktyki',
    
    // Footer
    'footer.fullTitle': 'Kompleksowa terapia rehabilitacyjna',
    'footer.description': 'Ponad 35 lat doświadczenia w terapii manualnej, masażu i rehabilitacji. Pracuję z przyczyną bólu, nie tylko z objawami.',
    'footer.navigation': 'Nawigacja',
    'footer.contacts': 'Kontakt',
    'footer.location': 'Kraków i okolice',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    
    // Quick Contact
    'contact.title': 'Gotowy rozpocząć drogę do zdrowia?',
    'contact.subtitle': 'Skontaktuj się w wygodny sposób — odpowiem w ciągu godziny',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.emailAction': 'Napisz',
    'contact.callNow': 'Zadzwoń teraz',
    'contact.writeTelegram': 'Napisz na Telegram',
    
    // About page
    'about.qualification': 'Kwalifikacje',
    'about.educationTitle': 'Wykształcenie i doświadczenie',
    'about.diplomasTitle': 'Dyplomy i certyfikaty',
    'about.clickToView': 'Kliknij, aby zobaczyć',
    'about.institute': 'Instytut kultury fizycznej',
    'about.massageSchool': 'Lwowska szkoła masażu',
    'about.polishCerts': 'Polskie certyfikaty rehabilitacyjne',
    'about.psychosomatics': 'Kursy psychosomatyki i bioenergetyki',
    
    // HeroAbout
    'about.badge': 'O mnie',
    'about.name': 'Vitaliy Smyrnov',
    'about.specialist': 'Specjalista kompleksowej terapii rehabilitacyjnej',
    'about.bio': 'Od ponad 35 lat pomagam ludziom wrócić do pełnego życia bez bólu. Moja filozofia jest prosta: szukać prawdziwej przyczyny problemu, a nie maskować objawy.',
    'about.yearsExp': 'lat doświadczenia',
    'about.inProfession': 'w zawodzie',
    'about.patients': 'pacjentów',
    'about.certificates': 'certyfikatów',
    
    // StorySection
    'about.storyBadge': 'Moja historia',
    'about.storyTitle': 'Droga zawodowa',
    'about.storyP1': 'Moja droga w terapii rehabilitacyjnej rozpoczęła się w 1990 roku. Przez te lata zdobyłem ogromne doświadczenie w różnych kierunkach: od klasycznego masażu po terapię manualną, od ćwiczeń leczniczych po pracę z zaburzeniami psychosomatycznymi.',
    'about.storyP2': 'Szczególne miejsce w moim rozumieniu bólu zajmuje własne doświadczenie. W dzieciństwie sam cierpiałem na problemy zdrowotne, co pomogło mi głębiej zrozumieć stan moich pacjentów. Wiem, jak czuje się ból, i wiem, jak ważne jest znalezienie specjalisty, który naprawdę rozumie twój problem.',
    'about.storyP3': 'Przez 35 lat praktyki pomogłem tysiącom ludzi wrócić do normalnego życia. Każdy przypadek jest unikalny, a każde zwycięstwo nad bólem to moja osobista radość. Nadal się uczę i doskonalę, aby dawać moim pacjentom najlepsze wyniki.',
    
    // ApproachSection
    'about.approachBadge': 'Moje podejście',
    'about.approachTitle': 'Filozofia pracy',
    'about.approachSubtitle': 'Zasady, których przestrzegam w pracy z każdym pacjentem',
    'about.approach1Title': 'Pracuję z przyczyną, nie objawem',
    'about.approach1Desc': 'Szukam prawdziwego źródła problemu, a nie tylko usuwam ból.',
    'about.approach2Title': 'Oceniam ciało jako system',
    'about.approach2Desc': 'Analizuję szkielet, mięśnie, powięzie, nawyki i stan emocjonalny.',
    'about.approach3Title': 'Łączę różne techniki',
    'about.approach3Desc': 'Kombituję masaż, terapię manualną, akupresurę i ćwiczenia.',
    'about.approach4Title': 'Orientuję się na wynik',
    'about.approach4Desc': 'Cel — nie nieskończone sesje, ale twoja autonomia.',
    'about.approach5Title': 'Uczę samopomocy',
    'about.approach5Desc': 'Daję ćwiczenia i zalecenia do samodzielnego utrzymania zdrowia.',
    'about.approach6Title': 'Indywidualne podejście',
    'about.approach6Desc': 'Każdy pacjent — unikalny przypadek, każda sesja — spersonalizowana.',
    
    // ValuesSection
    'about.valuesTitle': 'Moje wartości',
    'about.valuesSubtitle': 'Zasady, na których buduję swoją pracę',
    'about.value1Title': 'Troska',
    'about.value1Desc': 'Każdy pacjent otrzymuje moją pełną uwagę i wsparcie.',
    'about.value2Title': 'Szacunek dla czasu',
    'about.value2Desc': 'Cenię twój czas i zawsze dotrzymuję ustaleń.',
    'about.value3Title': 'Uczciwość',
    'about.value3Desc': 'Jasno mówię, ile sesji potrzeba, bez zbędnych wizyt.',
    'about.value4Title': 'Bez zbędnych',
    'about.value4Desc': 'Żadnych niepotrzebnych procedur — tylko to, co działa.',
    
    // WhoIHelp
    'whoIHelp.badge': 'Grupa docelowa',
    'whoIHelp.title': 'Komu pomagam',
    'whoIHelp.healthTitle': 'Ze względu na stan zdrowia',
    'whoIHelp.lifestyleTitle': 'Ze względu na styl życia',
    'whoIHelp.health1': 'Przewlekłe bóle pleców',
    'whoIHelp.health2': 'Skolioza i przepukliny',
    'whoIHelp.health3': 'Po udarze / zawale',
    'whoIHelp.health4': 'Rehabilitacja pooperacyjna',
    'whoIHelp.health5': 'Relaksacja i profilaktyka',
    'whoIHelp.lifestyle1': 'Pracownicy biurowi',
    'whoIHelp.lifestyle2': 'Budowniczowie i praca fizyczna',
    'whoIHelp.lifestyle3': 'Profesjonalni sportowcy',
    'whoIHelp.lifestyle4': 'Dzieci (za zgodą rodziców)',
    'whoIHelp.lifestyle5': 'Osoby starsze',
    'whoIHelp.lifestyle6': 'Pacjenci o ograniczonej mobilności',
    
    // WhatToExpect
    'expect.badge': 'Proces pracy',
    'expect.title': 'Czego oczekiwać',
    'expect.firstVisit': 'Pierwsza wizyta',
    'expect.firstVisitTime': '1–2 godziny',
    'expect.firstVisit1': 'Szczegółowa rozmowa o historii problemu',
    'expect.firstVisit2': 'Analiza stylu życia i pracy',
    'expect.firstVisit3': 'Przegląd dokumentacji medycznej (jeśli jest)',
    'expect.firstVisit4': 'Pierwszy zabieg terapeutyczny',
    'expect.firstVisitNote': '💡 Konsultacja bezpłatna. Płacisz tylko za zabieg.',
    'expect.recovery': 'Proces rehabilitacji',
    'expect.recoveryTime': 'Indywidualnie',
    'expect.recovery1': 'Sesje od 1 do 2 godzin',
    'expect.recovery2': 'Lokalizację wybiera klient (dojazd do domu)',
    'expect.recovery3': 'Częstotliwość wizyt — indywidualnie',
    'expect.recoveryBonus': 'Bonus: indywidualne ćwiczenia i zalecenia, abyś mógł sam sobie pomagać.',
    
    // HighlightBox
    'highlight.quote': 'To nie tylko masaż — to kompleksowa terapia.',
    'highlight.quoteAccent': 'Szukam prawdziwej przyczyny problemu',
    'highlight.quoteEnd': ', a nie tylko usuwam objaw.',
    'highlight.role': 'Rehabilitant, ponad 35 lat doświadczenia',
    
    // CaseStudy
    'case.badge': 'Prawdziwy przypadek',
    'case.title': 'Historia wyzdrowienia',
    'case.result': 'Pełne wyzdrowienie',
    'case.resultSub': 'w kilka sesji',
    'case.quote': '"Pacjent przyszedł z ostrym bólem pleców — nie mógł samodzielnie wstać z łóżka. Po 6 godzinach intensywnej pracy i indywidualnie dobranych ćwiczeń do wykonania w domu — pełne wyzdrowienie w kilka tygodni."',
    'case.stat1': '6 godzin intensywnej terapii',
    'case.stat2': 'Ćwiczenia do samodzielnego wykonania',
    'case.stat3': 'Pełne wyzdrowienie',
    
    // Contraindications
    'contra.title': 'Przeciwwskazania',
    'contra.text': 'Onkologia, ostre infekcje — przeciwwskazania do zabiegów. Inne stany omawiamy indywidualnie.',
    
    // Testimonials
    'testimonials.badge': 'Opinie klientów',
    'testimonials.title': 'Co mówią pacjenci',
    'testimonials.problem': 'Problem',
    
    // PriceTeaser
    'price.badge': 'Przejrzyste ceny',
    'price.title': 'Jasna cena bez niespodzianek',
    'price.fromLabel': 'od',
    'price.perSession': 'za sesję',
    'price.option1Title': 'Kraków',
    'price.option1Desc': 'Dojazd bezpłatny (przy dostępnym parkingu)',
    'price.option2Title': 'Okolice',
    'price.option2Desc': '+50 PLN za dojazd (10–50 km od Krakowa)',
    'price.cta': 'Szczegółowy cennik',
    
    // Services
    'services.badge': 'Usługi',
    'services.heroTitle': 'Kompleksowe podejście do rehabilitacji',
    'services.heroDesc': 'Każda sesja jest dobierana indywidualnie. Często jest to kombinacja różnych technik, a nie jeden "rodzaj masażu". Moim celem jest znalezienie prawdziwej przyczyny problemu i pomoc w powrocie do aktywnego życia.',
    'services.cardsBadge': 'Kierunki pracy',
    'services.cardsTitle': 'Co oferuję',
    'services.manual': 'Terapia manualna',
    'services.manualDesc': 'Korekta kręgosłupa i stawów. Przywrócenie prawidłowego położenia kości i stawów w celu złagodzenia bólu i poprawy ruchomości.',
    'services.massage': 'Masaż terapeutyczny',
    'services.massageDesc': 'Praca z mięśniami i powięziami. Głęboki masaż w celu rozluźnienia napięcia, poprawy krążenia i regeneracji tkanek.',
    'services.acupressure': 'Akupresura',
    'services.acupressureDesc': 'Masaż punktowy aktywnych stref. Oddziaływanie na biologicznie aktywne punkty w celu stymulacji naturalnych procesów regeneracji.',
    'services.lfk': 'Ćwiczenia lecznicze',
    'services.lfkDesc': 'Kinezyterapia — indywidualne ćwiczenia do domu. Program ćwiczeń do utrzymania efektów i profilaktyki.',
    'services.psychosomatic': 'Terapia psychosomatyczna',
    'services.psychosomaticDesc': 'Praca z emocjonalnymi przyczynami bólu. Często ból ma podłoże psychologiczne — pracujemy również z tym aspektem.',
    'services.diagnostics': 'Diagnostyka',
    'services.diagnosticsDesc': 'Poszukiwanie prawdziwej przyczyny bólu. Kompleksowa ocena stanu ciała, analiza stylu życia i historii medycznej.',
    'services.priceBadge': 'Cennik',
    'services.priceTitle': 'Masaże i zabiegi',
    'services.priceNote': 'Każda sesja jest dobierana indywidualnie. Często stosowana jest kombinacja technik — cena może być niższa niż suma poszczególnych usług, a czas sesji — dłuższy dla jakościowej pracy.',
    'services.ctaTitle': 'Nie wiesz, co wybrać?',
    'services.ctaDesc': 'Powiedz, co boli i od jak dawna — podpowiem optymalny format pierwszej sesji.',
    'services.ctaBtn': 'Umów się przez Telegram',
    
    // Contact
    'contactPage.badge': 'Kontakt',
    'contactPage.title': 'Jak się umówić',
    'contactPage.desc': 'Skontaktuj się w wygodny sposób — odpowiem w ciągu godziny i pomogę wybrać optymalny format pierwszej sesji.',
    'contactPage.phone': 'Telefon',
    'contactPage.serviceArea': 'Obszar obsługi',
    'contactPage.serviceAreaDesc1': 'Kraków:',
    'contactPage.serviceAreaDesc2': 'bez dopłaty za dojazd (przy bezpłatnym parkingu)',
    'contactPage.serviceAreaDesc3': '10–50 km od Krakowa:',
    'contactPage.serviceAreaDesc4': '+50 PLN do kosztu sesji',
    'contactPage.hours': 'Godziny pracy',
    'contactPage.hoursWeek': 'Pn–Pt:',
    'contactPage.hoursWeekTime': '9:00–19:00',
    'contactPage.hoursSat': 'Sob:',
    'contactPage.hoursSatTime': 'do uzgodnienia',
    'contactPage.processBadge': 'Prosty proces',
    'contactPage.processTitle': 'Jak przebiega rejestracja',
    'contactPage.step1': 'Napisz lub zadzwoń',
    'contactPage.step1Desc': 'Opisz krótko swój problem',
    'contactPage.step2': 'Umówimy się na termin',
    'contactPage.step2Desc': 'Wybierzemy dogodny dla ciebie czas',
    'contactPage.step3': 'Omówimy lokalizację',
    'contactPage.step3Desc': 'Dojazd do domu lub inna lokalizacja',
    'contactPage.step4': 'Pierwsza wizyta',
    'contactPage.step4Desc': 'Konsultacja + zabieg',
    'contactPage.step5': 'Zalecenia i ćwiczenia',
    'contactPage.step5Desc': 'Plan samodzielnej pracy',
    'contactPage.formBadge': 'Formularz kontaktowy',
    'contactPage.formTitle': 'Zostaw zgłoszenie',
    'contactPage.formDesc': 'Wypełnij formularz — skontaktuję się w ciągu godziny',
    'contactPage.formName': 'Imię',
    'contactPage.formNamePlaceholder': 'Twoje imię',
    'contactPage.formPhone': 'Telefon / WhatsApp',
    'contactPage.formPhonePlaceholder': '+48 XXX XXX XXX',
    'contactPage.formMethod': 'Preferowany sposób kontaktu',
    'contactPage.formCall': 'Telefon',
    'contactPage.formProblem': 'Krótko o problemie',
    'contactPage.formProblemPlaceholder': 'Opisz, co ci dolega, od jak dawna, co już próbowałeś...',
    'contactPage.formConsent': 'Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z polityką prywatności',
    'contactPage.formSubmit': 'Wyślij zgłoszenie',
  }
};

export function useTranslation() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_language') || 'uk';
  });

  useEffect(() => {
    const handleLanguageChange = (e) => {
      setLang(e.detail);
    };
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const t = (key) => {
    return translations[lang]?.[key] || translations['uk']?.[key] || key;
  };

  return { t, lang };
}