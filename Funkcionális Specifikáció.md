1.Áttekintés
Egy olyan webes alkalmazást fejlesztünk, amely a népszerű Blackjack 21 kártyajátékot kínálja ingyenesen, regisztráció és személyes adatok megadása nélkül. A játék könnyen elérhető böngészőből, letöltést nem igényel, és mivel helyben fut a felhasználó eszközén, nincs szerverfüggőség, így mindig zavartalanul játszható.
Az alkalmazás a klasszikus Blackjack szabályai alapján működik, lehetőséget adva a felhasználóknak, hogy kockázat nélkül próbára tegyék szerencséjüket és gyakorolják a játékot. A cél egy egyszerű, biztonságos és mindig elérhető platform létrehozása a játékosok számára.

2.Jelenlegi helyzet
A megrendelő szeretne egy nem szerverfüggő letisztult oldallal rendelkező, ingyenes, letöltést nem
igénylő Blackjack gyakorló webes alkalmazást.
A rendszer azok számára készült, akik nem engedhetik meg maguknak, hogy hasonló szolgáltatásokért fizessenek, nem szeretnék megosztani személyes adataikat kockázatoknak kitéve, vagy egyszerűen csak egy gyakorlófelületet keresnek, ahol a játék szabályai érthetően el vannak magyarázva.

3.Jelenlegi üzleti folyamatok modellje
Manapság minden elterjedt online szerencsejáték igényel regisztrációt és egy prémium befizetését a játék elkezdéséhez. Ez leszűkíti a lehetséges felhasználók halmazát, sőt, teljesen elijesztheti az embereket a szerencsejátékoktól. A lehetséges felhasználók alternatívákat keresnek, de ha találnak is, azok általában csak olyan lehetőségeket kínálnak, amelyek személyes adatok megadásával játszhatók. Ez esetleges data-leak esetén adatlopáshoz vezethet, ami negatív hatással van a felhasználók bizalmára, valamint a cég megbízhatóságára és hírnevére is.
Általában ezekhez az online szerencsejátékokhoz nem található az adott oldalon útmutató vagy szabályzat sem. Ezen hibákat ki lehetne küszöbölni azzal, hogy a szolgáltatás ingyenesen elérhető, nem igényel regisztrációt (ezáltal kiküszöbölve az esetleges adatlopás lehetőségét), valamint kliens oldali futással érhető el, hogy a szolgáltatás ne függjön a szerver működésétől, és mindig elérhető legyen a felhasználó számára.

3.Követelménylista
A projektünk az ismert Blackjack/21 szabályai alapján fog működni, így az azáltal előírt funkciókat tartalmazni fogja a projekt, ezzel eleget téve a szerencsejáték követelménynek.

5.Igényelt üzleti folyamatok modellje
Annak érdekében, hogy a felhasználókkal kényelmes és bizalomra épülő kapcsolatot alakítsunk ki, egy olyan szerencsejáték szolgáltatást fejlesztünk, amely a következő alapelveket követi:

- Nincs letöltési kötelezettség: A játék teljes egészében böngészőn keresztül érhető el, így elkerülhető, hogy a felhasználóknak bármilyen fájlt le kelljen           tölteniük, minimalizálva annak lehetőségét, hogy az adataikhoz bárki hozzáférhessen.
- Regisztrációmentes használat: A szolgáltatás nem igényel semmilyen regisztrációt, így a felhasználók személyes adatai nem kerülnek begyűjtésre, ezáltal             garantáljuk a teljes adatbiztonságot és névtelenséget.
- Költségmentes élmény: A játék használata teljesen ingyenes, semmilyen kezdőösszeg befizetésére nincs szükség, és a későbbiekben sem merülnek fel rejtett            költségek vagy további díjak.
- Független működés a szerverektől: A játék nem fut szerveroldalon, hanem a felhasználó gépén működik, ami lehetővé teszi, hogy a szolgáltatás bármikor elérhető      legyen, függetlenül a szerverek aktuális állapotától vagy elérhetőségétől.
- Játékszabályok és információk közlése: A felhasználók részletes tájékoztatást kapnak a játékhoz szükséges szabályokról és információkról, így biztosítva, hogy      mindenki tisztában legyen a játékmenettel és annak mechanikáival.
  
A modell célja egy olyan könnyen hozzáférhető és biztonságos szerencsejáték platform létrehozása, amely nem igényel sem pénzügyi elköteleződést, sem személyes adatokat, és folyamatosan rendelkezésre áll a felhasználók számára, bármiféle technikai függőség nélkül.

6.Használati esetek
A projektünk a hagyományos Blackjack/21 szabályrendszerét követi (lásd: 9. Forgatókönyv). A szolgáltatás teljesen ingyenes, és nincs szükség regisztrációra, így a felhasználók széles köre számára hozzáférhetővé válik, személyes adataikat nem tesszük ki a kiszivárgás veszélyének (data-leak). Ezenkívül azoknak is lehetőséget biztosítunk, akik nem tudnák kifizetni a hasonló játékok belépési díját. Az egyszerűen kezelhető, letisztult és áttekinthető felület garantálja a könnyű használatot. Mivel nincs szükség szerveroldali kódra, a szolgáltatás állandóan elérhető a felhasználók számára.

7.Megfeleltetés, hogyan fedik le a használati esetek a követelményeket
    1, Játékszabályok implementálása:
    A játék a klasszikus Blackjack/21 szabályain alapul, így a használati esetek magukban foglalják a lapok kiosztását, a hit/stand funkciókat, a dealer és a játékos pontszámának összehasonlítását, valamint a nyerési és vesztési feltételeket. Ezáltal teljes mértékben eleget teszünk a szerencsejáték működésének követelményeinek.

    2, Felhasználói interakció:
    A felhasználó egy egyszerű, regisztrációmentes felületen játszhat a program által irányított dealer ellen. A felhasználó döntéseket hozhat (lapot kérhet vagy megállhat), így az interakció a Blackjack szabályainak megfelelően történik, lehetővé téve, hogy a játékos logikai és matematikai készségeit használja a döntések során.

    3,Pontszám és tét kezelése:
    A rendszer automatikusan megjeleníti a játékos aktuális pontszámát és nyereményét, valamint nyomon követi a rendelkezésre álló tétet. Amikor a felhasználó elveszíti a teljes összeget, új játékkört kell indítania. Ez a mechanizmus biztosítja, hogy a tét és nyereménykezelés szorosan kapcsolódik a játék alapvető szabályaihoz.

    4,Könnyű hozzáférhetőség és adatvédelem:
    A játék semmilyen személyes adatot nem kér és nem tárol. A játék kliensoldalon fut, így megfelel a regisztrációmentesség követelményének, valamint biztosítja a felhasználók adatainak védelmét. Ez különösen fontos a mai adatbiztonsági elvárások tükrében.

    5,Ingyenes hozzáférés és egyszerűség:
    A játék teljesen ingyenesen elérhető, és nem igényel semmilyen pénzbeli befektetést. Ezáltal biztosítjuk, hogy a felhasználó anélkül élvezhesse a játékot, hogy bármilyen anyagi elköteleződésbe kellene bocsátkoznia, így teljes mértékben megfelel a használati esetekben előírt követelményeknek.

8.Képernyő tervek

![Funk drawio](https://user-images.githubusercontent.com/82752886/135749142-efffc873-8187-4163-84a0-3c5b748e40e6.png)

9.Forgatókönyv
Szereplők: A felhasználó és a futó webes alkalmazás.

Kezdés:
 A felhasználó megnyitja a böngészőjében a szolgáltatást, amely egy letisztult felületen, regisztráció nélkül elérhető. A játék indulásakor a felhasználó kap egy 
 virtuális kezdőösszeget, amellyel téteket rakhat a klasszikus Blackjack játék során.
 
Játékmenet:
 - Ha a felhasználó nem ismeri a játék szabályait, lehetősége van elolvasni egy rövid útmutatót és tippeket a játékmenetről, amelyek segítenek a gyors tanulásban. 
 - A szabályok és tippek könnyen elérhetők, hogy a játék közben is visszatérhessen hozzájuk.
 - A felhasználó kiválasztja a tétet, amely az aktuális egyenlegének függvényében változik, majd megkezdi a játékot.
 - A tét letétele után a felhasználó két kezdőkártyát kap, ahogyan a dealer is, viszont a dealer egyik kártyája lefordítva marad.

Döntési fázis:
 - A felhasználó eldöntheti, hogy meg akarja-e tartani a kártyáit (marad), vagy újabb kártyákat kér (hívás).
 - Ha a felhasználó hívás mellett dönt, akkor addig kérhet újabb kártyákat, amíg úgy nem érzi, hogy megfelelő az összérték. Azonban, ha a kártyáinak összege 
   meghaladja a 21-et (ez "túlcsordulást" jelent), akkor azonnal elveszíti a kört és a felrakott tétet.

A dealer szabályai:
  - A dealernek is két kártyája van, és ugyanazon szabályok szerint játszik. A dealernek kötelező megállnia, ha a kártyáinak összértéke eléri a 17-et.
 - A dealer szintén elveszíti a kört, ha a kártyái túlmennek a 21 értéken.

Kör vége:
 A kör végén a nyertes (felhasználó vagy dealer) kapja meg a nyereményt. Ha a felhasználó nyer, visszanyeri a felrakott tét dupláját. Ha a felhasználó veszít, a tétet elveszíti.
 
Virtuális pénzkezelés:
 - A dealer nem tud kifogyni a pénzből, míg a felhasználónak figyelnie kell az egyenlegére. Ha a felhasználó elveszíti az összes pénzét, a játék újrakezdődik. 
   Ebben az esetben az össznyeremény számlálója lenullázódik, és újra kap egy kezdeti összeget.
 - Ahogy a felhasználó előrehalad a játékban és gyűjti a nyereményeket, a minimum tét automatikusan növekedik a rendelkezésre álló pénzösszeg alapján, így a játékmenet dinamikus marad.

Végtelenségig tartó játék:
A játék nincs időhöz vagy körökhöz kötve, tehát elméletileg végtelenségig tarthat, ha a felhasználó jól játszik és nem fogy el a pénze. A játékmenet célja a szórakozás és a gyakorlat, mivel nem valós pénzt használ, így a felhasználó kockázat nélkül fejlesztheti Blackjack tudását.

Kiegészítés: A játék biztosítja a folyamatos kihívást azáltal, hogy a nehézség növekedik, ahogy a felhasználó előrehalad. Az alkalmazás emellett valós idejű visszajelzéseket is adhat a játékon belüli döntésekről, segítve ezzel a tanulást és a stratégia finomítását.

10.Funkció-követelmény megfeleltetés
A projektünk a Blackjack/21 szabályrendszert fogja követni, így a játék által megkövetelt funkciók mind beépülnek a rendszerbe, ezzel biztosítva, hogy a szerencsejátékra vonatkozó követelmények teljesüljenek.

11.Fogalomszótár
Dealer: A program által irányított "ellenfél", amely szintén részt vesz a játékban és követi a Blackjack szabályait. A játékos célja, hogy jobb pontszámot érjen el, mint a dealer.

Hit/Stand:
Hit: A játékos kér egy újabb lapot, hogy közelebb kerüljön a 21-es értékhez.
Stand: A játékos megáll, és nem kér több lapot.

