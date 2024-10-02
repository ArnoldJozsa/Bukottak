var deck = [2,3,4,5,6,7,8,9,10,10,10,10,
            2,3,4,5,6,7,8,9,10,10,10,10,
            2,3,4,5,6,7,8,9,10,10,10,10,
            2,3,4,5,6,7,8,9,10,10,10,10];
var jatekosKartyai;
var VDKartyai;
var Doubling = false;
var rendOsszeg = 1000;
var nyertOsszeg = 0;
var VDHuzhat = true;
var IsThereAnyBet = false;
var minimumBet = rendOsszeg * 0.10;
var activeBet = 0;

function DrawRandomCard(deck) {

    var randomindex = Math.floor(deck.length * Math.random())
    return deck[randomindex];
}

function StartGame() {
    jatekosKartyai = [DrawRandomCard(deck), DrawRandomCard(deck)];
    VDKartyai = [DrawRandomCard(deck), DrawRandomCard(deck)];
    if ((VDKartyai[0] + VDKartyai[1]) == 17) {
        VDHuzhat = false;
    }
    Doubling = false;
}

function IsInt(n) {
    return n % 1 == 0;
}

function Bet(){
    if (activeBet != 0) {
        return;
    }

    let bet;
    do {
        bet = prompt("Kérem adja meg a tétet, nem lehet tört! (minimum tét: " + minimumBet +")","100");
    } while (bet == null || bet < minimumBet || isNaN(bet) || !IsInt(bet));

    activeBet = parseInt(bet);
    tempstorage = nyertOsszeg;
    if (activeBet > rendOsszeg) {
        activeBet = 0;
        do {
            bet = prompt("Kérem adja meg a tétet, nem lehet tört! (minimum tét: " + minimumBet +")");
        } while (bet == null || bet < minimumBet || isNaN(bet) || !IsInt(bet));
        activeBet = parseInt(bet);
    }
    rendOsszeg = rendOsszeg - activeBet;
    document.getElementById("AvailableFunds").innerHTML = rendOsszeg+" (Nyert: "+nyertOsszeg+")";
    document.getElementById("ShowPlayerCards").innerHTML = jatekosKartyai+ " ("+GetCardValue(jatekosKartyai)+")";
}
function Throw() {
    if (activeBet == 0) {
        alert("Először tétet kell raknia!");
        return;
    }
    alert("Mivel bedobta kártyáit, elvesztette a tétet és kártyáit!");
    nyertOsszeg = nyertOsszeg - activeBet;
    StartGame();
    document.getElementById("ShowPlayerCards").innerHTML = "?, ? (Tegyen tétet a kör megkezdéséhez!)";
    document.getElementById("ShowVDCards").innerHTML = VDKartyai[0] + ", ?";
    activeBet = 0;
    Doubling = false;
}