# Követelmény Specifikáció
## 1.Áttekintés
Projektünk célja egy ingyenes, regisztrációmentes online Blackjack játék létrehozása, amely könnyen elérhető és felhasználóbarát felületet biztosít a játékosok számára. A tervezés során nagy hangsúlyt fektetünk a letisztult, minimalista dizájnra és az egyszerű kezelhetőségre, hogy a felhasználói élmény gördülékeny és intuitív legyen. A játék böngészőben fut, további szoftverek telepítése nélkül, és a HTML, CSS, valamint Javascript segítségével biztosítjuk a gyors és zökkenőmentes működést. Az online Blackjack célja, hogy egy mindenki számára hozzáférhető, szórakoztató és vizuálisan esztétikus játékélményt nyújtson.

## 2.Jelenlegi helyzet
Számos online Blackjack játék érhető el, de sok közülük nem ingyenes, és gyakran mikrotranzakciókon alapuló szerencsejátékok. Úgy éreztük, hogy hiányzik egy igazán egyszerűen használható, átlátható és ingyenes verzió. Sok olyan weboldalon, ahol ingyenesen lehet játszani, a regisztráció mégis kötelező, és számos esetben a weboldal dizájnja túlságosan zsúfolt vagy bonyolult. Célunk egy olyan platform létrehozása, ahol a felhasználók szabadon gyakorolhatnak, megismerhetik a Blackjack szabályait és stratégiáit, akár szerencsejáték-rajongók, akár csak tanulni szeretnének.

## 3.Vágyálomrendszer
Csoportunk célja, hogy a projekt keretében egy egyszerű és letisztult webes Blackjack játékot hozzunk létre, amely regisztráció nélkül, ingyenesen elérhető. A játék felülete nem lesz túlkomplikált, és tartalmazza a szabályok részletes ismertetését, hogy a felhasználók könnyen megértsék, hogyan kell játszani. A játékban a felhasználó egy virtuális dealer ellen próbálhat szerencsét, miközben logikai és matematikai képességeit is tesztelheti. A játék automatikusan megad egy kezdő tétet, amelyet a felhasználó használhat a játék során, és folyamatosan nyomon követi az aktuális tétet és a nyert összeget. Amennyiben a felhasználó elfogyasztja a rendelkezésére álló pénzösszeget, a játék újraindul, és a nyeremény egyenlege nullázódik.

## 4.Funkcionális követelmények
A projekt funkcionálisan nem bonyolult vagy terjengős. Egy böngésző szükséges a használatához, ami támogat Javascriptet, és kliens oldalon fut.
Rendelkezik egy, a felhasználó rendelkezésére álló összeg számlálójával, ha nulla, vagy az alá esik, véget ér a játék és újra kell kezdeni, továbbá egy, a jelenlegi játék alatt nyert összeg számlálójával, a játékosnak feltünteti a kiosztott lapokat és szintúgy a virtuális dealer lapjait.

## 5.Jelenlegi üzleti folyamatok modellje
Manapság az online szerencsejáték oldalakra szükséges minimum pénzösszeg, és szinte nem is nyújtanak gyakorlási vagy bemutatót a felhasználók számára, hanem egyből a mélyvízbe dobják.
Ezek az oldalak gyakran kérnek regisztrációt személyes adatok megadásával, és bizonyos esetekben a felületeik bonyolultak, nehezen átláthatók, ami megnehezíti a játék élvezetét vagy akár a kezdést is. Ez sok felhasználót elriaszthat az ilyen típusú online játékok kipróbálásától.

## 6.Rendszerre vonatkozó törvények, szabványok és ajánlások:
- A projekt az ismert Blackjack 21 szabályrendszer alapján kerül kialakításra, követve a játék klasszikus elveit és játékmenetét.
- A szolgáltatás teljes mértékben ingyenes, semmilyen pénzügyi hozzájárulást nem igényel a felhasználóktól.
- Mivel a játék során nem kerül sor pénzes tranzakciókra vagy tételhelyezésre, a projekt nem sorolható a szerencsejátékokra vonatkozó profitáló kategóriába, így      nem esik a szerencsejátékokra vonatkozó jogi szabályozás alá.
- A játék egy gyakorló vagy demo jellegű platformként szolgál, ahol a felhasználók kipróbálhatják és elsajátíthatják a Blackjack alapvető stratégiáit és              szabályait, pénzvesztés kockázata nélkül.
- A fentiek alapján a projekt nem sért semmilyen vonatkozó jogszabályt vagy előírást, mivel nem tekinthető valódi szerencsejátéknak. A játék célja kizárólag a        szórakoztatás és gyakorlás biztosítása, pénzügyi haszonszerzés vagy szerencsejáték-alapú bevétel nélkül.

## 7.Igényelt üzleti folyamatok
Projektünk célja, hogy egy letisztult és könnyen elérhető webes játékot hozzunk létre, amely egyszerűen fut böngészőben, és sem regisztrációt, sem személyes adatokat nem kér a felhasználóktól. A játék teljesen ingyenes, nem szükséges semmilyen anyagi befektetés sem az induláshoz, sem a folytatáshoz. A Blackjack/21 játék jól ismert szabályain alapul, így nem szükséges módosítanunk rajta.

Szolgáltatásunk egyszerű és kényelmes használhatóságával kívánunk kitűnni, valamint azzal, hogy nem kérünk semmilyen személyes információt. A mai digitális világban a személyes adatok megadása nagy kockázattal jár, mivel adatvédelmi incidensek során ezek illetéktelen kezekbe kerülhetnek. Ennek elkerülése érdekében a játékunk nem kér semmiféle regisztrációt, és nem gyűjt személyes adatokat. Ráadásul a játék kliensoldalon fut, így semmilyen adat nem kerül szerverre, amelyet a felhasználó tudta nélkül továbbíthatna az eszközéről.

## 8.Követelménylista
A játék felülete intuitív és könnyen kezelhető legyen, hogy a felhasználó gyorsan megértse a funkciókat. A játék magyarázó oldalán világos és rövid szabályleírás szerepeljen, amely segít a kezdőknek megérteni a játékmenetet. A játék automatikusan kezelje a győzelem és vereség állapotokat, és azonnal újrainduljon, ha a felhasználó elveszti a pénzét.

## 9.Fogalomtár
-Blackjack: Sokak által ismert kaszinójáték, elterjedt neve még a huszonegy.

-Dealer: Angolul az 'osztó'-t jelenti.

-Data leak: Adatszivárgás. Amikor egy szervezettől, vagy cégtől kiszivárognak
  adatok. Jelen kontextusban olyan adatszivárgásról van szó, ami a felhasználók
  személyes adatainak kiszivárgását jelenti.
  Általában csak e-mailek és jelszavak szoktak kiszivárogni, de súlyosabb esetek is
  léteznek.
