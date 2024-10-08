# Rendszerterv

## 1. Rendszer célja 

A rendszer célja, hogy a felhasználó kipróbálja szerencséjét és stratégiáját a program ellen, a Blackjack/21 szabványos szabályai szerint, költségmentesen. Kiemelten fontos, hogy a játékos könnyen eligazodjon a felületen, ezért a rendszer egy letisztult, minimalista felhasználói felületet biztosít. A program egyetlen szerepkört támogat, a felhasználóét, aki kizárólag a játék menetét irányító funkciókhoz kap hozzáférést. A program működését vagy forráskódját közvetlenül nem tudja módosítani. Az alkalmazás webes platformon fut, így törekszünk arra, hogy széles körű böngésző-kompatibilitást biztosítsunk. A játék során a felhasználó minden nyert kör után megkapja a tétje dupláját, míg vesztes kör esetén elveszíti a feltett összeget. A játék addig folytatódik, amíg a felhasználó ki nem fogy a rendelkezésre álló tétből, vagy úgy nem dönt, hogy befejezi a játékot.

## 2. Projekt terv
A projekt weblapra van fejlesztve front- és backend segítségével.
A Frontend fejlesztése HTML/CSS segítségével történik. 
A Frontend célja, hogy egy letisztult, könnyen kezelhető, igényes weblapot nyújtson a felhasználó számára.
A Backend fejlesztése és a tesztelés Javascriptben történik. A Backend feladata a háttérben működő programok megírása, randomizálás, JavaScript kód, és az eredmény kiértékelése.
Frontend és Backend felelősök: 
 - Kovács Enikő
 - Józsa Arnold Albin
 - Zerényi Boglárka
 - Mariotti Lili

## 3. Üzleti folyamatok modellje

![uzleti_folyamat](https://user-images.githubusercontent.com/82752886/135045846-c1ea8490-7fe1-4f7f-b73f-8c2b4a14c746.png)

## 4. Követelmények

- Webes megvalósítás.
- A rendszer fejlesztése HTML/CSS valamint JavaScript segítségével történik.
- A weblap felépítése, valamint dizájnolása a HTML/CSS nyelv implementálásával valósítandó meg.
- A weboldal használatához egy egyszerű böngészőre van szükség.
- Megszakításmentes játékmenet.

## 5. Funkcionális terv

Rendszerszereplők
-Játékos: A rendszer kizárólag egyetlen szereplőt támogat, a játékost, mivel nincs szükség további, például adminisztrátori szerepkör hozzáadására. A játékos lehetőséget kap arra, hogy a játékmenet során különböző döntéseket hozzon, mint például a lapkérés, tét elhelyezése, duplázás vagy kiszállás.

## 6. Fizikai környezet

A rendszer fejlesztése HTML, CSS és JavaScript technológiák segítségével történik, amelyek lehetővé teszik a zökkenőmentes böngészőalapú futtatást.

 - Felépítés és dizájn: A weboldal struktúráját és megjelenését HTML és CSS kombinációjával valósítjuk meg, biztosítva egy letisztult, felhasználóbarát felületet, 
   amely reszponzív, tehát jól mutat különböző eszközökön, beleértve az asztali gépeket, laptopokat, tableteket és okostelefonokat.

 - Futási környezet: A játék használatához csupán egy naprakész böngésző szükséges, mint például Google Chrome, Mozilla Firefox, Microsoft Edge vagy Safari. Ez 
   lehetővé teszi a rendszer működését bármilyen operációs rendszeren, mint például Windows, macOS, Linux, iOS vagy Android.

 - Platformfüggetlen elérhetőség: A rendszer platformfüggetlen, így a felhasználók asztali gépről, laptopról vagy mobil eszközről is könnyedén elérhetik a játékot, 
   biztosítva a kényelmes és zökkenőmentes élményt.

## 7. Archtitekturális terv

A rendszerhez mindössze egy webböngészőre van szükség, amely képes JavaScript kódot futtatni. Mivel az egész a kliens oldalon fut, akár a HTML fájl megnyitásával futtatható a játék alkalmazás.

## 8. Tesztterv

Az alkalmazás elkészítése során szükség van a folyamatos tesztelésre. Tesztelni kell a gombok működését, valamint a pontszám változását, ha a játékos vagy a gép nyer, illetve az új játék kezdésénél a pontszám nullázását.

## 9. Telepítési terv

Az alkalmazás futtatásához egy általános felhasználású böngészőre van szükség, nem igényel külön telepítést.

## 10. Karbantartási terv

Az alkalmazás bővítésének lehetőségét fenntartjuk. A jövőben többjátékos mód is hozzáadható, amennyiben erre igény mutatkozik. A karbantartás elsősorban hibajavításokra és kompatibilitási frissítésekre korlátozódik.

## 11. Implementációs terv

A projekt felülete HTML és CSS segítségével készül, míg a működéshez JavaScript-et is integrálunk. A fejlesztési folyamat a következő lépéseket tartalmazza:

HTML struktúra: Az alapvető weboldal struktúráját HTML-ben alakítjuk ki, beleértve a játékfelületet, kártyákat, gombokat és a felhasználói információkat (pl. 
  egyenleg, tétek).
CSS dizájn: A felhasználói felület esztétikáját CSS-sel valósítjuk meg, figyelmet fordítva a színpalettára, betűtípusokra és a reszponzív megjelenésre, hogy a 
  felhasználói élmény kellemes legyen.
JavaScript funkcionalitás: A játék logikáját JavaScript-ben implementáljuk, amely magában foglalja a kártyák kiosztását, a játékosok döntéseit és a nyeremények 
  számítását.
Szeparált felépítés: A jobb átláthatóság és bővíthetőség érdekében a HTML, CSS és JavaScript kódokat külön fájlokban kezeljük, amelyeket a weboldal betöltésekor 
  összekapcsolunk.
Tesztelés: Folyamatosan teszteljük az alkalmazást különböző böngészőkben és eszközökön a megbízhatóság és a zökkenőmentes működés érdekében.
Dokumentáció: Részletes dokumentációt készítünk a kód struktúrájáról és a felhasználói útmutatóról, amely segíti a csapat tagjait és a jövőbeli fejlesztőket.

Ezzel a tervvel célunk egy jól működő, felhasználóbarát és bővíthető Blackjack 21 játék létrehozása, amely élvezetes élményt nyújt a felhasználóknak.
