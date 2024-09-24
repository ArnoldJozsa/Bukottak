1.Rendszer célja 
A rendszer célja, hogy a felhasználó kipróbálja szerencséjét és stratégiáját a program ellen, a Blackjack/21 szabványos szabályai szerint, költségmentesen. Kiemelten fontos, hogy a játékos könnyen eligazodjon a felületen, ezért a rendszer egy letisztult, minimalista felhasználói felületet biztosít. A program egyetlen szerepkört támogat, a felhasználóét, aki kizárólag a játék menetét irányító funkciókhoz kap hozzáférést. A program működését vagy forráskódját közvetlenül nem tudja módosítani. Az alkalmazás webes platformon fut, így törekszünk arra, hogy széles körű böngésző-kompatibilitást biztosítsunk. A játék során a felhasználó minden nyert kör után megkapja a tétje dupláját, míg vesztes kör esetén elveszíti a feltett összeget. A játék addig folytatódik, amíg a felhasználó ki nem fogy a rendelkezésre álló tétből, vagy úgy nem dönt, hogy befejezi a játékot.

3.Üzleti folyamatok modellje

![uzleti_folyamat](https://user-images.githubusercontent.com/82752886/135045846-c1ea8490-7fe1-4f7f-b73f-8c2b4a14c746.png)

4.Követelmények
- Webes megvalósítás.
- A rendszer fejlesztése HTML/CSS valamint JavaScript segítségével történik.
- A weblap felépítése, valamint dizájnolása a HTML/CSS nyelv implementálásával valósítandó meg.
- A weboldal használatához egy egyszerű böngészőre van szükség.
- Megszakításmentes játékmenet.

7.Archtitekturális terv
A rendszerhez mindössze egy webböngészőre van szükség, amely képes JavaScript kódot futtatni. Mivel az egész a kliens oldalon fut, akár a HTML fájl megnyitásával futtatható a játék alkalmazás.

8.Tesztterv
Az alkalmazás elkészítése során szükség van a folyamatos tesztelésre. Tesztelni kell a gombok működését, valamint a pontszám változását, ha a játékos vagy a gép nyer, illetve az új játék kezdésénél a pontszám nullázását.

9.Telepítési terv
Az alkalmazás futtatásához egy általános felhasználású böngészőre van szükség, nem igényel külön telepítést.
