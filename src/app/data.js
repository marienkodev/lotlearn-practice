import urlImg1 from './img/Zrzutekranu1.png';
import urlImg2 from './img/Zrzutekranu2.png';
import urlImg3 from './img/Zrzutekranu3.png';
import urlImg4 from './img/Zrzutekranu4.png';
import urlImg5 from './img/Zrzutekranu5.png';
import urlImg6 from './img/Zrzutekranu6.png';
import urlImg7 from './img/Zrzutekranu7.png';
import urlImg8 from './img/Zrzutekranu8.png';
import urlImg9 from './img/Zrzutekranu9.png';
import urlImg10 from './img/Zrzutekranu10.png';
import urlImg11 from './img/Zrzutekranu11.png';
import urlImg12 from './img/Zrzutekranu12.png';
import urlImg47 from './img/Zrzutekranu13.png';
import urlImg48 from './img/Zrzutekranu14.png';
import urlImg49 from './img/Zrzutekranu15.png';
import urlImg50 from './img/Zrzutekranu16.png';
import urlImg51 from './img/Zrzutekranu17.png';
import urlImg52 from './img/Zrzutekranu18.png';
import urlImg53 from './img/Zrzutekranu19.png';


import urlImg13 from './img/Alco1.png';
import urlImg14 from './img/Alco2.png';
import urlImg15 from './img/Alco3.png';
import urlImg16 from './img/Alco4.png';
import urlImg17 from './img/Alco5.png';
import urlImg18 from './img/Alco6.png';
import urlImg19 from './img/Alco7.png';
import urlImg20 from './img/Alco8.png';
import urlImg21 from './img/Alco9.png';
import urlImg22 from './img/Alco10.png';
import urlImg23 from './img/Alco11.png';
import urlImg24 from './img/Alco12.png';
import urlImg25 from './img/Alco13.png';
import urlImg26 from './img/Alco14.png';
import urlImg27 from './img/Alco15.png';
import urlImg28 from './img/Alco16.png';
import urlImg29 from './img/Alco17.png';
import urlImg30 from './img/Alco18.png';
import urlImg31 from './img/Alco19.png';
import urlImg32 from './img/Alco20.png';
import urlImg33 from './img/Alco21.png';
import urlImg34 from './img/Alco22.png';
import urlImg35 from './img/Alco23.png';
import urlImg36 from './img/Alco24.png';
import urlImg37 from './img/Alco25.png';
import urlImg38 from './img/Alco26.png';
import urlImg39 from './img/Alco27.png';
import urlImg40 from './img/Alco28.png';
import urlImg41 from './img/Alco29.png';
import urlImg42 from './img/Alco30.png';
import urlImg43 from './img/Alco31.png';
import urlImg44 from './img/Alco32.png';
import urlImg45 from './img/Alco33.png';
import urlImg46 from './img/Alco34.png';


export const ARTICLES = {
  "star-alliance": {
    title: "Star Alliance",
    body: `
  STAR ALLIANCE – Jest to największy na świecie sojusz linii lotniczych, 
    założony 14 marca 1997 roku przez pięciu przewoźników: Scandinavian 
    Airlines, Thai Airways International, Air Canada, Lufthansa oraz
    United Airlines.
    
  ________________________________________________________________________

- Obecnie w jego skład wchodzi 26 LINII LOTNICZYCH:`,
    img: urlImg9, 
    img1: urlImg10,
    img2: urlImg11,
    slug: "star-alliance"
  },
  "miles-and-more": {
    title: "Miles and More",
    body: `
  SOJUSZ MILES&MORE – jest to największy sojusz linii lotniczych w całej 
    Europie. W marcu 2014 roku posiadał ponad 25 milionów członków. Został 
    on zapoczątkowany 1993 roku przez Lufthansę, a obecnie obejmuje on 13 
    linii lotniczych m.in. LOT. 

- Program umożliwia pasażerom gromadzenie mil podczas podróży, które można
    wymieniać na nagrody oraz zyskać wyższy status, dający korzyści podczas 
    podróżowania. Program jest bezpłatny i każdy może do niego dołączyć. 

- Mile statusowe są podstawą do osiągnięcia statusu takiego jak Frequent 
    Traveller (FTL) czy Senator oraz HON Circle Member.

  ________________________________________________________________________


  LINIE LOTNICZE Z SOJUSZU MILES&MORE KTÓRYCH KARTY AKCEPTUJEMY W SALONACH
    (w szczególności karty FTL, ponieważ karty srebrne akceptujemy tylko z 
    tego sojuszu)`,
    img: urlImg12,
    slug: "miles-and-more"
  },
  "zion-login": {
    title: "Zion: Logowanie",
    body: `
  1. Wpisujemy w wyszukiwarkę ”Zion lsas”    
  ________________________________________________________________   
    
  2. Prosimy o podanie loginu i hasła koordynatora zmiany 
  ________________________________________________________________

  3. Wybieramy ”VERA” (lewa strona)   
  ________________________________________________________________

  4. Następnie wybieramy ”Odloty”     
  ________________________________________________________________

  5. Otwiera nam się nowa karta z dostępem do informacji o rejsach  
  ________________________________________________________________
    `,
    slug: "zion-login"
  },
  "zion-abbreviations": {
    title: "Zion: Skróty",
    body: `
Oznaczenie:

  - Rejs- numer rejsu 
  _______________________________________________________________________
  - Kier- Kierunek/destynacja 
  _______________________________________________________________________
  - Samolot- rejestracja zapisana spellingiem lotniczym oraz typ samolotu
  _______________________________________________________________________  
  - STD- Scheduled time of departure (planowany czas odlotu)
  _______________________________________________________________________  
  - TOBT- Target off block time (Czas przewidywany przez agenta 
      handlingowego, w którym powinny zostać odblokowane hamulce) 
  _______________________________________________________________________
  - TSAT- Target start up approval time (docelowy czas zatwierdzenia 
      uruchomienia silnika)
  _______________________________________________________________________
  - ETD-Estimated time of departure (przewidywany czas odlotu)
  _______________________________________________________________________
  - Slot- okno czasowe, podczas którego pilot może wystartować 
  _______________________________________________________________________
  - ATD- Actual time of departure (rzeczywisty czas odlotu)
  _______________________________________________________________________ 
  - Tranzyt- godzina o której przylatuje najpóźniejszy samolot z paxami 
      tranzytowymi   
  _______________________________________________________________________
  - St- stanowisko, z którego rusza samolot
  _______________________________________________________________________
  - Rotacja- skąd dany samolot przyleciał  
  _______________________________________________________________________
  - PAX- liczba pasażerów w samolocie 
  _______________________________________________________________________ 
  - Obsługa PAX- pasażerowie potrzebujący dodatkowej pomocy, pasażerowie 
      HON lub przedmioty nietypowe znajdujące się w samolocie 
    `,
    img: urlImg47,
    slug: "zion-abbreviations"
  },
  "zion-passenger-service": {
    title: "Zion: Obsługa pasażerów HON",
    body: `
  Jedną z najważniejszych rzeczy w pracy na Elite jest obsługa pasażerów 
    HON. W tym celu, możemy na początku zmiany sprawdzić w systemie Zion, o 
    której godzinie pasażerowie wylatują, aby przygotować się jak najlepiej 
    na przybycie tego pasażera oraz zapamiętać go, aby tą informacje 
    przekazać Asyście LS. 
  

- Informacja ta znajduje się w kolumnie ”Obsługa PAX” pod hasłem ”HON”. 
  _______________________________________________________________________
    
  Jak widzimy na poniższym screenie jest jeden HON na rejsie LO3905 do 
    Krakowa o 13:25. 
    `,
    img: urlImg48,
    slug: "zion-passenger-service"
  },
  "zion-position": {
    title: "Zion: Stanowisko",
    body: `
  Na płycie Lotniska Chopina znajdują się 24 stanowiska, znajdujące się 
    przy rękawach, a reszta stanowiska znajduje się w dalszych częściach
    płyty lotniska. Oznacza to, że samoloty znajdujące się na stanowiskach 
    do 24 są bordowane z rękawa, a powyżej 24 są wożone (pasażerowie 
    podjeżdżają do samolotu busem). 
  
    
- Dodatkowo po najechaniu na numer stanowiska rozwija się informacja o 
    numerze Gate. 
  ______________________________________________________________________

  Często pasażerowie zadają pytania ,,Czy jest rękaw czy wożony?” bądź o 
    numer gate, który możemy również sprawdzić na tablicy. Warto wspomnieć,
    że jeżeli pax jest Honem, a stanowisko jest oddalone to jest on przez 
    asystę wieziony dedykowanym samochodem pod samolot. 

  Przykłady: 	
    `,
    img: urlImg49,
    slug: "zion-position"
  },
  "zion-direction": {
    title: "Zion: Kierunek, Rotacja",
    body: `
  *Oczywiście ciężko jest zapamiętać skróty wszystkich kierunków - 
    szczególnie na początku pracy, dlatego po najechaniu na skrót wyświetla 
    się jego rozwinięcie oraz pełna nazwa lotniska. Dodatkowo możemy 
    sprawdzić czy jest to rejs ze strefy Schengen. Jeśli tak, ta informacja 
    jest widoczna, a jeśli nie to takiej informacji nie znajdziemy. 
  _______________________________________________________________________

  **Rotacja oznacza, że dany samolot przylatuje z jednej destynacji, a 
    następnie z Lotniska Chopina leci dalej. Po przylocie musi być 
    posprzątany, zatankowany, sprawdzony pod kątem technicznym, z tego 
    powodu mogą np. wynikać opóźnienia. 
    `,
    img: urlImg50,
    img1: urlImg51,
    img2: urlImg52,
    slug: "zion-direction"
  },
  "zion-service": {
    title: "Zion: Obsługa PAX",
    body: `
- Listę skrótów wraz z objaśnieniami dotyczącymi obsługi pasażerów: 

  - INF- inflant (niemowlę)
  _______________________________________________________________________
  - WCHR-wózek inwalidzki(pax nie może poruszać się na długie odległości)
  _______________________________________________________________________
  - WCHC-wózek inwalidzki (pax nie może chodzić)
  _______________________________________________________________________
  - WCHS- wózek inwalidzki (pax nie może chodzić po schodach)
  _______________________________________________________________________
  - UM- osoba niepełnoletnia podróżująca sama 
  _______________________________________________________________________
  - WEAP- broń
  _______________________________________________________________________
  - DEAF- osoba niesłysząca 
  _______________________________________________________________________
  - BLND- osoba niewidoma 
  _______________________________________________________________________
  - MEDA- osoba,która potrzebuje zaświadczenia od lekarza,aby móc lecieć 
  _______________________________________________________________________
  - DEPA- osoba deportowana 
  _______________________________________________________________________
  - INAD- osoba zawrócona 
    `,
    img: urlImg53,
    slug: "zion-service"
  },
  "rules-of-entry-business-lounge": {
    title: "Zasady wstępu do LOT Business Lounge Polonez i Mazurek",
    body: `
  1.) POSIADACZE KART HON CIRCLE (Miles & More)* – wstęp za okazaniem karty 
    wstępu do samolotu na jakikolwiek rejs przewoźnika Star Alliance 
    (przewoźnik operujący), odlatujący tego samego dnia z lotniska Chopina w
    Warszawie. W przypadku, gdy na karcie wstępu brakuje informacji o 
    statusie, wymagane jest okazanie karty lojalnościowej.
 
- Posiadacz karty może zaprosić jednego gościa oraz męża/żonę 
    i własne dzieci. 
      
    Gościem posiadacza karty może być każda osoba przez niego wskazana oraz
    dodatkowo mąż/żona oraz dzieci, posiadający kartę wstępu do samolotu na 
    ten sam rejs przewoźnika Star Alliance, odlatujący tego samego dnia z 
    lotniska Chopina w Warszawie.
    
  ________________________________________________________________________

  2.) POSIADACZE KART SENATOR (Miles & More) oraz innych kart Star Alliance
    GOLD* – wstęp za okazaniem karty wstępu do samolotu na jakkolwiek rejs 
    przewoźnika Star Alliance (przewoźnik operujący), odlatujący tego samego
    dnia z lotniska Chopina w Warszawie. W przypadku, gdy na karcie wstępu
    brakuje informacji o statusie, wymagane jest okazanie karty
    lojalnościowej.
    
- Posiadacz karty może zaprosić jednego gościa. 
    
    Gościem posiadacza karty może być każdy pasażer posiadający kartę wstępu
    do samolotu na ten sam rejs przewoźnika Star Alliance, odlatujący tego 
    samego dnia, z lotniska Chopina w Warszawie.
    
  ________________________________________________________________________


  3.) POSIADACZE KART FTL (Miles & More)* – wstęp za okazaniem karty wstępu
    do samolotu na rozkładowy rejs PLL LOT/LH/OS/SN/LX/OU (przewoźnik 
    operujący) odlatujący tego samego dnia z lotniska Chopina w Warszawie. 
    W przypadku, gdy na karcie wstępu brakuje informacji o statusie, 
    wymagane jest okazanie karty lojalnościowej

- Pasażerowi nie przysługuje przywilej zaproszenia gościa.

  ________________________________________________________________________

  4.) PASAŻEROWIE BUSINESS CLASS – wstęp za okazaniem karty wstępu do 
    samolotu wystawionej w klasie business na jakikolwiek rejs przewoźnika 
    Star Alliance, odlatujący tego samego dnia, z lotniska Chopina w 
    Warszawie.

- Pasażerowi nie przysługuje przywilej zaproszenia gościa.

    Jeżeli pasażer posiada boarding na rejs krajowy w klasie ekonomicznej,
    ale poprzedni odcinek podróży odbywa w klasie biznes, to ma prawo 
    wejścia do salonu.

  ________________________________________________________________________    


  5.) PASAŻEROWIE LOT PREMIUM ECONOMY CLASS – możliwość wstępu po 
     uiszczeniu jednorazowej opłaty w recepcji głównej salonu w wysokości 
    180 PLN (karta wstępu do samolotu z widniejącym na niej numerem ETIX 
    zaczynającym się od 080).

  ________________________________________________________________________    


  6.) PASAŻEROWIE W REJSACH CODE SHARE LOT - wstęp za okazaniem karty 
    wstępu do samolotu z widniejącym na niej numerem ETIX zaczynającym się 
    od 080 wystawionej w klasie business lub w klasie ekonomicznej za 
    okazaniem ważnej karty FF Star Alliance GOLD lub FTL (Miles & More) LOT.

- Pasażerowi nie przysługuje przywilej zaproszenia gościa.

  ________________________________________________________________________


  7.) PASAŻEROWIE W BUSINESS CLASS W TRANSFERACH NA REJSY KRAJOWE - Jeżeli 
    pasażer posiada kartę pokładową na rejs krajowy w klasie ekonomicznej i 
    poprzedni lub następny odcinek podróży (do/z WAW) odbywa w klasie biznes
    liniami Star Alliance lub przyleciał w klasie biznes rejsem 
    marketingowym LO (code share SU, B2 etc.), to ma prawo wejścia do salonu.
    
- W takim przypadku podróż musi odbywać się na jednym bilecie wystawionym 
    w taryfie biznesowej na całej trasie.
    
  ________________________________________________________________________

  8.) PASAŻEROWIE POSIADAJĄCY SPECJALNE ZAPROSZENIE PLL LOT DO SALONU – 
    wstęp na podstawie ważnego zaproszenia (rejestracja zgodnie z „Procedurą
    weryfikacji i rejestracji zaproszeń PLL LOT S.A. w salonach własnych LOT
    Business Lounge na lotnisku im. F. Chopina w HUB Warszawa” ze stycznia 
    2018).

  ________________________________________________________________________


  9.) PASAŻEROWIE ZGŁOSZENI PRACOWNIKOM RECEPCJI BUSINESS LOUNGE PRZEZ 
    BIURO PRODUKTU/KIEROWNIKÓW ZMIANY HUB WAW - wstęp na podstawie 
    informacji telefonicznej przekazanej przez osobę upoważnioną z Biura 
    Produktu lub Kierownika zmiany HUB WAW (rejestracja zgodnie z „Procedurą
    weryfikacji i rejestracji zaproszeń PLL LOT S.A. w salonach własnych LOT
    Business Lounge na lotnisku im. F. Chopina w HUB Warszawa” ze 
    stycznia 2018). 

- Pasażerowi nie przysługuje przywilej zaproszenia gościa.

  ________________________________________________________________________


  10.) PASAŻEROWIE PODRÓŻUJĄCY NA PODSTAWIE BILETÓW ZE ZNIŻKĄ PRACOWNICZĄ 
    bądź agencyjną nie mają prawa wstępu do Salonu, chyba że posiadają kartę
    programu lojalnościowego uprawniającą do wstępu lub odpowiednie 
    zaproszenie.

  ________________________________________________________________________    


  11.) PASAŻEROWIE PODRÓŻUJĄCY REJSAMI CZARTEROWYMI W LOT BUSINESS CLASS –
    wstęp za okazaniem ważnej karty Star Alliance Gold (Miles & More) LOT.

- Pasażerowi przysługuje przywilej zaproszenia jednego gościa lecącego w 
     klasie Business. 

    W przypadku braku posiadania ważnej karty Star Alliance Gold 
    (Miles&More) LOT możliwość wejścia po uiszczeniu jednorazowej opłaty w 
    wysokości 200 PLN.
  
  ________________________________________________________________________  


  12.) PASAŻEROWIE PODRÓŻUJĄCY REJSAMI CZARTEROWYMI W LOT PREMIUM ECONOMY CLASS – wstęp po uiszczeniu jednorazowej opłaty w wysokości 200 PLN.

  ________________________________________________________________________

  13.) PASAŻEROWIE PODRÓŻUJĄCY W KLASIE LOT ECONOMY CLASS W REJSACH SHORT 
      HAUL – wstęp po uiszczeniu jednorazowej opłaty w wysokości 210 PLN.

  ________________________________________________________________________


  14.) CZŁONKOWIE ZARZĄDU PLL LOT S.A. ORAZ CZŁONKOWIE RADY NADZORCZEJ PLL 
      LOT – wstęp na podstawie dowodu tożsamości.

  ________________________________________________________________________


  15.) DZIECI DO 12-EGO ROKU ŻYCIA – wstęp wyłącznie z pasażerem 
      uprawnionym do korzystania z salonu LOT Business Lounge. 
    
  ________________________________________________________________________


  16.) PASAŻEROWIE DO 18-EGO ROKU ŻYCIA - mogą przebywać w salonie 
      wyłącznie pod opieką osoby dorosłej. Osoby powyżej 12 roku życia 
    podlegają zasadom wejścia do salonu jak osoby dorosłe.
  
  ________________________________________________________________________


  17.) CZAS POBYTU W SALONIE – pasażerowie mogą korzystać z salonu 
    najwcześniej 4 godziny przed planowaną godziną odlotu. Za pobyt powyżej 
    4 godzin pobierana jest opłata w wysokości 120 PLN. Nie dotyczy to 
    pasażerów przebywających w tranzycie.


- Numer lotu czarterowego LO6xxx

  ________________________________________________________________________
    
    
  *W przypadku, gdy pasażer należy do dwóch lub więcej programów 
    lojalnościowych, a numer FFP podany na karcie pokładowej różni się od 
    numeru FFP podanego na karcie lojalnościowej, akceptowany jest najwyższy
    status karty - pod warunkiem, że karta lojalnościowa jest ważna, a 
    nazwisko pasażera jest zgodne z kartą pokładową. Jeżeli pasażer ma 
    status SAG w dwóch różnych programach lojalnościowych, karta z programu 
    widniejącego na karcie pokładowej powinna zostać zarejestrowana dla 
    celów rozliczeniowych.


  **Akceptujemy karty statusowe tylko w wersji plastikowej lub w aplikacji
    programów lojalnościowych, nie akceptujemy screenów, PDF’ów, zdjęć, 
    wydruków papierowych etc.`,
    img: urlImg1,
    slug: "rules-of-entry-business-lounge"
  },
  "rules-of-entry-elite-club-lounge": {
    title: "Zasady wstępu do Elite Club Lounge",
    body: `
  1.) POSIADACZE KART SENATOR (Miles & More) ORAZ INNYCH KART STAR ALLIANCE
    GOLD* – wstęp za okazaniem karty wstępu do samolotu na jakkolwiek rejs 
    przewoźnika Star Alliance (przewoźnik operujący), odlatujący tego samego
    dnia z lotniska Chopina w Warszawie. W przypadku, gdy na karcie wstępu 
    brakuje informacji o statusie, wymagane jest okazanie karty 
    lojalnościowej.

- Posiadacz karty może zaprosić jednego gościa. 

  ________________________________________________________________________


  2.) PASAŻEROWIE PODRÓŻUJĄCY W KLASIE LOT BUSINESS CLASS NA REJSACH
    DALEKODYSTANSOWYCH (LH) – wstęp za okazaniem karty wstępu do samolotu na
    dalekodystansowy rejs LOT. Pasażer nie musi posiadać karty 
    lojalnościowej, by móc skorzystać ze strefy Elite.

  ________________________________________________________________________


  3.) POSIADACZE KART HON CIRCLE (Miles & More)* – wstęp za okazaniem karty
    wstępu do samolotu na jakikolwiek rejs przewoźnika Star Alliance 
    (przewoźnik operujący), odlatujący tego samego dnia z lotniska Chopina w
    Warszawie. W przypadku, gdy na karcie wstępu brakuje informacji o 
    statusie, wymagane jest okazanie karty lojalnościowej.

- Posiadacz karty może zaprosić jednego gościa oraz męża/żonę 
    i własne dzieci. 

     Gościem posiadacza karty może być każda osoba przez niego wskazana oraz 
    dodatkowo mąż/żona oraz dzieci, posiadający kartę wstępu do samolotu na 
    ten sam rejs przewoźnika Star Alliance, odlatujący tego samego dnia z 
    lotniska Chopina w Warszawie.

  ________________________________________________________________________


  4.) PASAŻEROWIE W BUSINESS CLASS W TRANSFERACH NA REJSY KRAJOWE - Jeżeli 
    pasażer posiada kartę pokładową na rejs krajowy w klasie ekonomicznej i 
    poprzedni lub następny odcinek podróży (do/z WAW) odbywa w klasie biznes
    liniami Star Alliance lub przyleciał w klasie biznes rejsem 
    marketingowym LO (code share SU, B2 etc.), to ma prawo wejścia do salonu.
    W takim przypadku podróż musi odbywać się na jednym bilecie wystawionym 
      na całej trasie.

  ________________________________________________________________________


  5.) PASAŻEROWIE LOT BUSINESS CLASS W REJSACH CHARTEROWYCH – wstęp za 
    okazaniem ważnej karty Star Alliance Gold (Miles & More) LOT. 

- Pasażerowi przysługuje przywilej zaproszenia jednego gościa 
    podróżującego w klasie Business.

  ________________________________________________________________________


  6.) PASAŻEROWIE POSIADAJĄCY SPECJALNE ZAPROSZENIE PLL LOT DO SALONU – 
    wstęp na podstawie ważnego zaproszenia (rejestracja zgodna z „Procedurą 
    weryfikacji i rejestracji zaproszeń PLL LOT S.A. w salonach własnych LOT
    Business Lounge na lotnisku im. F. Chopina w Warszawie” 
    ze stycznia 2018 r.)

  ________________________________________________________________________
    

  7.) CZŁONKOWIE ZARZĄDU PLL LOT S.A. ORAZ CZŁONKOWIE RADY NADZORCZEJ PLL 
    LOT – wstęp za okazaniem dowodu tożsamości.

  ________________________________________________________________________


  8.) DZIECI DO 12-EGO ROKU ŻYCIA – wstęp wyłącznie z pasażerem uprawnionym
    do korzystania z salonu LOT Business Lounge.

  ________________________________________________________________________


  9.) Pasażerowie, którzy wykupili płatne wejście do Business Lounge nie 
    mają możliwości skorzystania z Elite Club Lounge.


- Loty dalekodystansowe oznaczone są kodem LO xx (np. LO 26) lub LO 00xx 
    (np. LO 0042)

  ________________________________________________________________________


  *Akceptujemy karty statusowe tylko w wersji plastikowej lub w aplikacji 
     programów lojalnościowych, nie akceptujemy screenów, PDF’ów, zdjęć, 
    wydruków papierowych etc.`,
    img: urlImg2,
    slug: "rules-of-entry-elite-club-lounge"
  },
  "reading-info-from-the-bourding-pass": {
    title: "Odczytywanie informacji z karty pokładowej",
    img: urlImg3,
    slug: "reading-info-from-the-bourding-pass"
  },
  "example-of-a-passenger-boarding-pass-business-class": {
    title: "Przykład karty pokładowej pasażera podróżującego w klasie Business",
    img: urlImg4,
    slug: "example-of-a-passenger-boarding-pass-business-class"
  },
  "example-of-a-passenger-boarding-pass-star-alliance-gold": {
    title: "Przykład karty pokładowej pasażera posiadającego kartę lojalnościową Star Alliance Gold",
    body: `
  Pamiętajmy o tym, że pasażer posiadający status HON CIRCLE ma prawo 
    skorzystać z asysty tzw. limousine service. W naszych przypadkach będą 
    to pasażerowie podróżujący LOT’em. 

  ________________________________________________________________________

  - Aby zamówić asystę, dzwonimy pod numer: 22 650 21 32 i podajemy 
    nazwisko pasażera oraz kierunek lotu.`,
    img: urlImg5,
    slug: "example-of-a-passenger-boarding-pass-star-alliance-gold"
  },
  "adding-loyalty-cards": {
    title: "Dodawanie ręcznie kart lojalnościowych w systemie AIMS",
    img:  urlImg6,
    img1: urlImg7,
    img2: urlImg8,
    slug: "adding-loyalty-cards"
  },
  "word-list-sala": {
    title: "Angielski: Sała",
    body: `
Jak mówimy:

  - Plate, plates- talerz, -e /plejt plejtz/ 
  ________________________________________________________________________
  - Bowl, bowls- miska, -ki /bołl bołls/ 
  ________________________________________________________________________
  - Cup, cups- filiżanka, -ki /kap kaps/ 
  ________________________________________________________________________
  - Glass, glasses- kieliszek/szklanka, -ki /glas glasys/ 
  ________________________________________________________________________
  - Wine glass, wine glasses- kieliszek do wina,-ki /łajn glas łajn glasys/ 
  ________________________________________________________________________
  - Cutlery- sztućce /katleri/ 
  ________________________________________________________________________
  - Knife, knives- nóż, noże /najf najfs/ 
  ________________________________________________________________________
  - Fork, forks- widelec, widelce /fork forks/
  ________________________________________________________________________
  - Spoon, spoons- łyżka, łyżki /spun spuns/ 
  ________________________________________________________________________
  - Bottle- butelka /botl/ 
  ________________________________________________________________________
  - Bottle opener- otwieracz /botl ołpener/ 
  ________________________________________________________________________
  - To twist- odkręcić /tu tłist/ 
  ________________________________________________________________________
  - Twist-off bottle- butelka z odkręcanym kapslem /tłist of botl/ 
  ________________________________________________________________________
  - Chopsticks- pałeczki /czopstiks/ 
  ________________________________________________________________________
  - Ladle- chochla /lejdl/ 
  ________________________________________________________________________
  - Peppermill- młynek do pieprzu /pepermil/ 
  ________________________________________________________________________
  - Bread basket- kosz na pieczywo /bred basket/
  ________________________________________________________________________
  - Shelf- półka /szelf/ 
  ________________________________________________________________________
  - Waiters tray- taca /łejters trej/ 
  ________________________________________________________________________
  - Paper cups/takeaway cups/disposable cups +lid- kubki na wynos+pokrywka  
    /pejper kaps, tejkałej kaps, dispołzbl kaps +lid/ 
  ________________________________________________________________________
  - Highchair for baby- krzesełko dla dziecka /hajczer for bejbi/ 
  ________________________________________________________________________
  - Self-service- samoobsługa /self serwis/ 
  ________________________________________________________________________
  - Fridge- lodówka /fridż/`,
    slug: "word-list-sala"
  },
  "word-list-drinks": {
    title: "Angielski: Napoje",
    body: `
Jak mówimy:

  - Coffee machine- ekspres /kofi maszin/ 
  ________________________________________________________________________  
  - Coffee- kawa /kofi/ 
  ________________________________________________________________________
  - Tea- herbata /tii/ 
  ________________________________________________________________________
  - Hot chocolate- gorąca czekolada /hat czoklet/ 
  ________________________________________________________________________
  - Warm milk- ciepłe mleko /łorm milk/ 
  ________________________________________________________________________
  - Water: still or sparkling- woda: niegazowana lub gazowana /łoter stil 
    or sparkling/`,
    slug: "word-list-drinks"
  },
  "word-list-bar": {
    title: "Angielski: Bar",
    body: `
Jak mówimy:
 
  - Cocktail shaker (cobbler shaker, boston shaker)- shaker (tradycyjny i 
    bostoński) /koktejl szejker, kobler szejker, boston szejker/ 
  ________________________________________________________________________
  - On the rocks- z lodem /on de roks/ 
  ________________________________________________________________________
  - Cider- cydr /sajder/ 
  ________________________________________________________________________
  - Jigger- miarka barmańska /dżiger/ 
  ________________________________________________________________________
  - (whiskey) neat- (whiskey) bez lodu /(łiski) nit/ 
  ________________________________________________________________________
  - Garnish- garnirunek (chodzi o dodatek, przybranie drinka) /garnisz/`,
    slug: "word-list-bar"
  },
  "word-list-food": {
    title: "Angielski: Jedzenie",
    body: `
Jak mówimy:

  - Carrot chips- chipsy marchewkowe /karot czips/ 
  ________________________________________________________________________
  - Lemonade- lemoniada /lemonejd/ 
  ________________________________________________________________________
  - Fudge- krówka /fadż/ 
  ________________________________________________________________________
  - Croutons- grzanki /krutons/
  ________________________________________________________________________
  - Sauce/ dip- sos /sos dip/`,
    slug: "word-list-food"
  },
  "word-list-entrance": {
    title: "Angielski: Wejście",
    body: `
Jak mówimy:

  - To scan – skanować /tu skan/ 
  ________________________________________________________________________
  - Boarding pass- karta pokładowa /bording pas/ 
  ________________________________________________________________________
  - Boarding time- czas boarding /bording tajm/ 
  ________________________________________________________________________
  - Departure- wylot /deparczer/ 
  ________________________________________________________________________
  - Arrival- przylot /arajwyl/ 
  ________________________________________________________________________
  - SA (Star Alliance) membership card- karta lojalnościowa SA (Star 
    Alliance) /star alajens memberszip kard/ 
  ________________________________________________________________________
  - Card is valid/ invalid, card has expired- karta jest ważna/nieważna,
    karta straciła ważność /kard iz walid/ inwalid, kard haz ekspajerd/ 
  ________________________________________________________________________
  - Expiration date- data ważności /ekspirejszon dejt/ 
  ________________________________________________________________________
  - Delayed- opóźniony /dilejd/ 
  ________________________________________________________________________
  - Check in- odprawa bagażowa /czek in/
  ________________________________________________________________________
  - Passport control- kontrola paszportowa /pasport kontrol/ 
  ________________________________________________________________________
  - Security check – kontrola bezpieczeństwa /sekjuriti czek/ 
  ________________________________________________________________________
  - Baggage claim- hala odbioru bagażu /bagydż klejm/ 
  ________________________________________________________________________
  - Lost and found office- biuro rzeczy znalezionych /lost end fałnd ofis/ 
  ________________________________________________________________________
  - Runway- pas startowy /ranałej/ 
  ________________________________________________________________________ 
  - Domestic flight- lot krajowy, krajówka /domestik flajt/ 
  ________________________________________________________________________
  - Layover, delay- opoźnienie /lejołwer, dilej/ 
  ________________________________________________________________________
  - On time- na czas /on tajm/ 
  ________________________________________________________________________
  - Flight number- numer lotu /flajt namber/ 
  ________________________________________________________________________
  - Destination- kierunek /destinejszon/ 
  ________________________________________________________________________ 
  - Scanner- skaner /skaner/ 
  ________________________________________________________________________
  - Print- wydrukować /print/ 
  ________________________________________________________________________
  - Departure board- monitor / deparczyr bord/ 
  ________________________________________________________________________ 
  - Air conditioning- klimatyzacja /er kondyszning/ 
  ________________________________________________________________________
  - LOT transfer desk- stanowisko trazytowe LOTu /LOT transfer desk/ 
  ________________________________________________________________________
  - AB zone- strefa AB /ej bi zołn/ 
  ________________________________________________________________________ 
  - CDE zone- strefa CDE /si di ii zołn/ `,
    slug: "word-list-entrance"
  },
  "word-list-other": {
    title: "Angielski: Inne",
    body: `
Jak mówimy:

  - Out of order- awaria /ałt of order/ 
  ________________________________________________________________________
  - Towels- ręczniki /tałels/ 
  ________________________________________________________________________
  - Shower- prysznic /szałer/ 
  ________________________________________________________________________
  - Keys- klucze /kiis/ 
  ________________________________________________________________________
  - Facial treatment- zabieg na twarz /fejszal tritment/ 
  ________________________________________________________________________
  - Front desk/ main reception- recepcja główna /front desk, mejn 
      resepszyn/`,
    slug: "word-list-other"
  }, 
  "word-list-talk": {
    title: "Angielski: Rozmowa",
    body: `
Jak mówimy:

  - The glasses are up on the shelf. - Szklanki są na górze na półce. 
    /Di glasys ar ap on de szelf/ 
  ________________________________________________________________________
  - The trash can is there/behind the coffee machine.- Kosz jest tam/ za 
    ekspresem. /De trasz kan iz der/ bihajnd de kofi maszin/ 
  ________________________________________________________________________
  - Wine is on the bar just around the corner.- Wino jest na barze za 
    rogiem. /Łajn iz on de bar dżast erałnd de korner/ 
  ________________________________________________________________________
  - There is a self-service here.- Mamy tu samoobsługę. 
    /Der iz e self serwis hir/ 
  ________________________________________________________________________
  - Wine is on the other bar-straight ahead on the right.- Wino jest na
    drugim barze-prosto i po prawej.
    /Łajn iz on di ader bar strejt ahed on de rajt/ 
  ________________________________________________________________________
  - Beauty treatment is in progress.- Trwa zabieg. 
    /Bjuti tritment iz in progres/
  ________________________________________________________________________
  - The smoking area is outside the lounge, down the stairs, straight 
    ahead, near gate 32.- Palarnia jest poza loungem, na dół schodami, 
    prosto, koło gate 32. /De smołking eria iz ałtsajd de lancz, dałn de 
    sters, strejt ahed, nir gejt 32/
  ________________________________________________________________________
  - The smoking area is outside the lounge, to the left and straight. 
    -Palarnia jest poza loungem,w lewo i prosto. /De smołking eria iz 
    ałtsajd de lancz, tu de left and strejt/ 
  ________________________________________________________________________
  - For shower keys, ask at the main reception desk.- O klucze od 
    prysznica należy poprosić na recepcji głównej. 
    /For szałer kiis, ask at de mejn resepszyn desk/ 
  ________________________________________________________________________
  - We had some problems with the delivery.- Mamy kłopoty z dostawą. 
    /Łi hed sam problems łif de deliweri/ 
  ________________________________________________________________________
  - Water bottles are in the fridge. – Butelki z wodą są w lodówce. 
    /Łoter botels ar in de fridż/ 
  ________________________________________________________________________  
  - Mrs. Dominika is now on a break, she will be back in 10 minutes- Pani 
    Dominika ma teraz przerwę, przyjdzie za 10 minut. /Misiz Dominika iz 
    nał on e brejk, szi wil bi bak in 10 minyts/ 
  ________________________________________________________________________
  - Please ask at the main reception. -Proszę spytać na recepcji głównej.
    /Plis ask at de mejn resepszyn/ 
  ________________________________________________________________________
  - Please wait a minute.- Proszę chwilę poczekać. / Plis łejt e minyt/ 
  ________________________________________________________________________
  - I'll get it right away.- Już przynoszę. /Aj łil get it rajt ałej/ 
  ________________________________________________________________________
  - I will ask- Zapytam / Aj łil ask/`,
    slug: "word-list-talk"
  },
  "uniform-girl": {
    title: "Umundurowanie: Panie",
    body: `
  - Włosy upięte w kok - obowiązkowy wypełniacz, fryzura musi być gładka, żadne kosmyki włosów nie mogą wpadać na twarz
  ________________________________________________________________________
  - Usta umalowane na czerwono lub delikatny róż (!), lekki makijaż
  ________________________________________________________________________
  - Paznokcie wystające poza opuszek palca (do 3mm), pomalowane w kolorze: odcienie czerwieni bądź nude (może być french)
  ________________________________________________________________________
  - Kolczyki tylko w uszach (nie wiszące!)
  ________________________________________________________________________
  - Buty na obcasie min. 1cm (nie mokasyny, nie lordsy, nie lakierowane, nie sznurowane !)
  `,
    slug: "uniform-girl"
  },
  "uniform-boy": {
    title: "Umundurowanie: Panowie",
    body: `
  - Kolczyki są zakazane
  ________________________________________________________________________
  - Biała koszula, wyprasowana, włożona w spodnie (górny guzik koszuli musi być zawsze zapięty)
  ________________________________________________________________________
  - Krawat – powinien być zawiązany tak, by jego koniec sięgał sprzączki paska
  ________________________________________________________________________
  - Długość nogawki spodni powinna sięgać górnej krawędzi obuwia
  ________________________________________________________________________
  - Pasek – powinien być w kolorze czarnym sprzączka powinna być mała, w kolorze srebrnym lub złotym, bez dodatków
  ________________________________________________________________________
  - Obuwie -  kształt klasyczny, zawiązywane sznurowadła, czarne, gładkie, nielakierowana skóra bez ozdób
    `,
    slug: "uniform-boy"
  }
}






export const CATEGORIES = {
  Rules_of_Entry: [
    "rules-of-entry-business-lounge",
    "rules-of-entry-elite-club-lounge",
    "reading-info-from-the-bourding-pass",
    "example-of-a-passenger-boarding-pass-business-class",
    "example-of-a-passenger-boarding-pass-star-alliance-gold",
    "adding-loyalty-cards",
  ],
  Alliance_of_Airlines: [
    "star-alliance",
    "miles-and-more"
  ],
  Zion: [
    "zion-login",
    "zion-abbreviations",
    "zion-passenger-service",
    "zion-position",
    "zion-direction",
    "zion-service"
  ],
  Word_List: [
    "word-list-sala",
    "word-list-drinks",
    "word-list-bar",
    "word-list-food",
    "word-list-entrance",
    "word-list-other",
    "word-list-talk"
  ]
}








export const AlcoPosts = {

  'wina-business': {
    title: 'Wina Business',
    body: `
    PARES BALTA CAVA BRUT

    Typ wina                Białe wino musujące (cava) 
    Zawartość alkoholu      11,5 %
    Pochodzenie             Hiszpania 
    Szczep                  Xarello, Parellada, Macabeu 
    Smak                    Dominują gruszki i jabłka z 
                            delikatnym i subtelnym finiszem
    
    _______________________________________________________
    
    

    WOODHAVEN ZINFANDEL

    Typ wina                Wino czerwone, wytrawne 
    Zawartość alkoholu      13,5%
    Pochodzenie             USA, Kalifornia
    Szczep                  Zinfandel, Carignam, Malbec, 
                            Tempranillo, Petite Sirah
    Smak                    Maliny, czarna porzeczka z 
                            delikatną nutą przypraw
    _______________________________________________________
                          




    KENDERMANNS RIESLING CLASSIC

    Typ wina                Wino białe, wytrawne
    Zawartość alkoholu      12,5 %
    Pochodzenie             Niemcy
    Szczep                  Riesling
    Smak                    Aromat gruszek, cytryn, 
                            winogron z delikatną nutą miodu
                            akacjowego
    
    _______________________________________________________


    WINNICA SILESIAN SEYVAL BLANC

    Typ wina                Wino białe, wytrawne
    Zawartość alkoholu      13 %
    Pochodzenie             Polska
    Szczep                  Seyval Blanc
    Smak                    Aromat kwiatów cytryny, 
                            drożdżowej bułeczki 
                            i jabłka
    `,
    img: urlImg13,
    img1: urlImg14,
    img2: urlImg15,
    img3: urlImg16,
    slug: 'wina-business'
  },
  
  'wina-elite': {
    title: 'Wina Elite',
    body: `
    WINNICA MICKIEWICZ Souvignier Gris

    Typ wina                Wino białe, wytrawne
    Zawartość alkoholu      13,5 %
    Pochodzenie             Polska
    Szczep                  Souvignier Gris
    Smak                    Delikatne aromaty jabłka i 
                            skórek cytrusów
    _______________________________________________________
                          




    VINA BUJANDA RESERVA

    Typ wina                Wino czerwone, wytrawne 
    Zawartość alkoholu      13%
    Pochodzenie             Hiszpania
    Szczep                  Tempranillo
    Smak                    Owoców, tytoniu oraz przypraw 

    _______________________________________________________






    GROWERS TOUCH SHIRAZ

    Typ wina                Wino czerwone, wytrawne 
    Zawartość alkoholu      14%
    Pochodzenie             Australia
    Szczep                  Shiraz
    Smak                    Skoncentrowane z nutami jeżyn, 
                            porzeczek i suszonych śliwek 
    _______________________________________________________
                          





    ZENSA PRIMITIVO ORGANIC 

    Typ wina                Wino czerwone,  wytrawne 
    Zawartość alkoholu      14%
    Pochodzenie             Włochy
    Szczep                  Primitivo
    Smak                    Moc suszonych owoców z 
                            odrobiną ziół i przypraw
    _______________________________________________________
                          


    GRAHAM’S LBV PORT 

    Typ wina                Porto-czerwone słodkie 
    Zawartość alkoholu      20%
    Pochodzenie             Portugalia
    Szczep                  Tinta Barroca, Tinta Roriz,
                            Touriga Nacional
    Smak                    Charakteryzuje się głębokim, 
                            owocowym smakiem
     
    _______________________________________________________



    CUVEE SILESIAN 

    Typ wina                Wino białe, półwytrawne 
    Zawartość alkoholu      12%
    Pochodzenie             Polska  
    Szczep                  Seyval Blanc, Johanniter, 
                            Riesling, Solaris, Jutrzenka,
                            Hibernal, Bianka 
    Smak                    Smak cytrusów równoważy słodkie, 
                            rodzynkowe nuty

    _______________________________________________________




    VILLA PLAGE BLANCHE

    Typ wina                Wino białe, wytrawne 
    Zawartość alkoholu      11,5%
    Pochodzenie             Francja
    Szczep                  Colombard, Gros Manseng i 
                            Sauvignon Blanc
    Smak                    Aromatycznie w kierunku nut 
                            cytryn, mandarynek, mango
                            oraz liczii
    _______________________________________________________
                          



    MARLBOROUGH SUN SAVIGNON BLANC

    Typ wina                Wino białe, wytrawne 
    Zawartość alkoholu      12,5%
    Pochodzenie             Nowa Zelandia
    Szczep                  Sauvignon Blanc
    Smak                    Bez, marakuja, agrest, zioła,
                            czarna porzeczka
    _______________________________________________________
                          


    JEAN DE LA FONTAINE 

    Typ wina                Szampan 
    Zawartość alkoholu      12 %
    Pochodzenie             Francja
    Szczep                  Pinot Meunier, Chardonnay, 
                            Pinot Noir 
    Smak                    intensywny  aromat pieczonego
                            jabłka, gruszek, migdałów 
                            i kwiatów
    `,
    img: urlImg21,
    img1: urlImg17,
    img2: urlImg18,
    img3: urlImg19,
    img4: urlImg20,
    img5: urlImg22,
    img6: urlImg23,
    img7: urlImg24,
    img8: urlImg25,
    slug: 'wina-elite'
  },
  'wina-business-i-elite': {
    title: 'Wina Business i Elite',
    body: `
    SHABO Reserve Cabernet

    Typ wina                Wino czerwone, wytrawne
    Zawartość alkoholu      13 %
    Pochodzenie             Ukraina
    Szczep                  Cabernet Sauvignon
    Smak                    Nuty malin, jeżyn i wiśni 
                            połączone z eleganckimi 
                            nutami dębu
    
    _______________________________________________________
    

    
    SHABO Reserve Chardonnay

    Typ wina                Wino białe, wytrawne
    Zawartość alkoholu      13 %
    Pochodzenie             Ukraina
    Szczep                  Chardonnay
    Smak                    Aromat brzoskwini i moreli, 
                            nuty rokitnika, cytrusów,
                            białej wiśni
    
    _______________________________________________________
    


    
    MILESTII MICI UNIVERS CABERNET SAUVIGNON

    Typ wina                Wino czerwone, wytrawne 
    Zawartość alkoholu      14%
    Pochodzenie             Mołdawia
    Szczep                  Cabernet Sauvignon, Merlot 
    Smak                    Nuty wiśni, czarnej porzeczki
                            i śliwek
    
    _______________________________________________________



    MILESTII MICI UNIVERS SAUVIGNON BLANC

    Typ wina                Wino białe, wytrawne 
    Zawartość alkoholu      13,5 %
    Pochodzenie             Mołdawia
    Szczep                  Sauvignon Blanc
    Smak                    Aromat liści czarnej porzeczki, 
                            pokrzywy i agrestu, 
                            o zaznaczonej kwasowości

    _______________________________________________________





    NOZECO SPARKLING–ALCOHOL FREE

    Typ wina                Białe wino musujące
    Zawartość alkoholu      0,2 %
    Pochodzenie             Francja
    Smak                    Aromaty jabłka, cytryny 
                            i białych kwiatów
    
    _______________________________________________________





    WINNICA TURNAU SZLACHETNY ZBIÓR

    Typ wina                Wino białe, wzmacniane
    Zawartość alkoholu      9 %
    Pochodzenie             Polska
    Szczep                  Solaris
    Smak                    Miód akacjowy, brzoskwinie,
                            gruszki i nutka mandarynki
    `,
    img: urlImg26,
    img1: urlImg27,
    img2: urlImg28,
    img3: urlImg29,
    img4: urlImg30,
    img5: urlImg31,
    slug: 'wina-business-i-elite'
  },
  'mocne-alkohole-business': {
    title: 'Mocne alkohole Business',
    body: `
    BUSHMILLS ORIGINAL

    Rodzaj                  Whiskey
    Zawartość alkoholu      40%
    Pochodzenie             Irlandia
    Smak                    Smaku karmelowa z subtelnymi 
                            cytrusami w tle 

    _______________________________________________________




    CAROLANS IRISH CREAM

    Rodzaj                  Likier
    Zawartość alkoholu      17%
    Pochodzenie             Irlandia
    Smak                    W smaku wanili

    _______________________________________________________         



    GIBSON’S  LONDON DRY

    Rodzaj                  Gin
    Zawartość alkoholu      37,5 %
    Pochodzenie             Anglia
    Smak                    Gorzki , lekko pikantny z 
                            dominującym posmakiem jałowca 
                            cytrusów i kolendry 
    _______________________________________________________

    VECCHIA ROMAGNA

    Rodzaj                  Brandy 
    Zawartość alkoholu      38 %
    Pochodzenie             Włochy 
    Smak                    Nuty owoców tropikalnych - 
                            w tym papai i ananasa, 
                            słodką wanilią, cynamonem
                            oraz goździkami
    `,
    img: urlImg41,
    img1: urlImg32,
    img2: urlImg33,
    img3: urlImg34,
    slug: 'mocne-alkohole-business'
  },
  'mocne-alkohole-elite': {
    title: 'Mocne alkohole Elite',
    body: `
    BOTTEGA FIOR DI LATTE

    Rodzaj                  Likier mleczny 
    Zawartość alkoholu      17%
    Pochodzenie             Włochy
    Smak                    Smak białej czekolady 
          
    _______________________________________________________


    DRUMSHANBO GUNPOWDER IRISH GIN

    Rodzaj                  Gin
    Zawartość alkoholu      43 %
    Pochodzenie             Irlandia
    Smak                    Miękki, świeży, nuty pikantnych 
                            przypraw orientalnych
    _______________________________________________________



    SOBERANO RESERVA 5YO
    
    Rodzaj                  Brandy 
    Zawartość alkoholu      36 %
    Pochodzenie             Hiszpania
    Smak                    Suszone owoce, przyprawy, dąb 
    
    _______________________________________________________




    KRAKEN

    Rodzaj                  Rum 
    Zawartość alkoholu      40 %
    Pochodzenie             Trynidadu i Tobago
    Smak                    Przyprawy korzenne, melasa, 
                            czekolada, karmel i wanilia 

    _______________________________________________________





    GAUTIER VS

    Rodzaj                  Koniak 
    Zawartość alkoholu      40 %
    Pochodzenie             Francja 
    Smak                    Smaki czekolady, pomarańczy, 
                            wanilii i przypraw

    _______________________________________________________





    GLEN TURNER 12YO

    Rodzaj                  Whisky
    Zawartość alkoholu      40%
    Pochodzenie             Szkocja 
    Smak                    Złożony, owocowy, brązowy 
                            cukier jęczmienny ze 
                            śladami dymu 
    `,
    img: urlImg35,
    img1: urlImg36,
    img2: urlImg37,
    img3: urlImg38,
    img4: urlImg39,
    img5: urlImg40,
    slug: 'mocne-alkohole-elite'
  },
  'mocne-alkohole-business-i-elite': {
    title: 'Mocne alkohole Business i Elite ',
    body: `
    OLD VIRGINIA 6 YO

    Rodzaj                  Bourbon
    Zawartość alkoholu      40%
    Pochodzenie             USA
    Smak                    Kremowy, ziemisty i delikatny 
                            smak i trwały, z lekkim 
                            posmakiem karmelu 
    _______________________________________________________










    J.A. BACZEWSKI MONOPOLOWA

    Rodzaj                  Wódka
    Zawartość alkoholu      40%
    Pochodzenie             Polska/Austria 
    
    _______________________________________________________










    J.A. BACZEWSKI MORELÓWKA

    Rodzaj                  Wódka
    Zawartość alkoholu      38%
    Pochodzenie             Polska/Austria 
    _______________________________________________________
    










    J.A. BACZEWSKI WIŚNIÓWKA

    Rodzaj                  Wódka
    Zawartość alkoholu      38%
    Pochodzenie             Polska/Austria 
    _______________________________________________________






    MARTINI BIANCO

    Rodzaj                  Wermut 
    Zawartość alkoholu      14,4 %
    Pochodzenie             Włochy 
    Smak                    Lekkie, waniliowe, z ledwo 
                            wyczuwalnym posmakiem ginu
    `,
    img: urlImg42,
    img1: urlImg43,
    img2: urlImg44,
    img3: urlImg45,
    img4: urlImg46,
    slug: 'mocne-alkohole-business-i-elite'
  }
}