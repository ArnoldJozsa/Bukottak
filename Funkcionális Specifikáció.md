2.Jelenlegi helyzet
A megrendelő szeretne egy nem szerverfüggő letisztult oldallal rendelkező, ingyenes, letöltést nem
igénylő Blackjack gyakorló webes alkalmazást.
A rendszer azok számára készült, akik nem engedhetik meg maguknak, hogy hasonló szolgáltatásokért fizessenek, nem szeretnék megosztani személyes adataikat kockázatoknak kitéve, vagy egyszerűen csak egy gyakorlófelületet keresnek, ahol a játék szabályai érthetően el vannak magyarázva.

3.Követelménylista
A projektünk az ismert Blackjack/21 szabályai alapján fog működni, így az azáltal előírt funkciókat tartalmazni fogja a projekt, ezzel eleget téve a szerencsejáték követelménynek.

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

11.Fogalomszótár
Dealer: A program által irányított "ellenfél", amely szintén részt vesz a játékban és követi a Blackjack szabályait. A játékos célja, hogy jobb pontszámot érjen el, mint a dealer.

Hit/Stand:
Hit: A játékos kér egy újabb lapot, hogy közelebb kerüljön a 21-es értékhez.
Stand: A játékos megáll, és nem kér több lapot.

Felhasználói interakció: A játékos által végrehajtott műveletek, például a lapok kérése (hit) vagy megállás (stand). Ezek a műveletek a játék szabályainak megfelelően határozzák meg a játék kimenetelét.