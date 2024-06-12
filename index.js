var username = "username";
var welcomeDict = {"wim1": "images/female1.png",
                    "wim2": "images/female2.png",
                    "wim3": "images/male1.png",
                    "wim4": "images/male2.png"};
var charSelect = "images/male1.png";
var wim1 = document.getElementById("wim1");
var wim2 = document.getElementById("wim2");
var wim3 = document.getElementById("wim3");
var wim4 = document.getElementById("wim4");

var cardDict = {
    "C2" : "images/cards/clubs_2.png",
    "C3": "images/cards/clubs_3.png",
    "C4": "images/cards/clubs_4.png",
    "C5": "images/cards/clubs_5.png",
    "C6": "images/cards/clubs_6.png",
    "C7": "images/cards/clubs_7.png",
    "C8": "images/cards/clubs_8.png",
    "C9": "images/cards/clubs_9.png",
    "C10": "images/cards/clubs_10.png",
    "CJ": "images/cards/clubs_jack.png",
    "CQ": "images/cards/clubs_queen.png",
    "CK": "images/cards/clubs_king.png",
    "CA": "images/cards/clubs_ace.png",
    "D2": "images/cards/diamonds_2.png",
    "D3": "images/cards/diamonds_3.png",
    "D4": "images/cards/diamonds_4.png",
    "D5": "images/cards/diamonds_5.png",
    "D6": "images/cards/diamonds_6.png",
    "D7": "images/cards/diamonds_7.png",
    "D8": "images/cards/diamonds_8.png",
    "D9": "images/cards/diamonds_9.png",
    "D10": "images/cards/diamonds_10.png",
    "DJ": "images/cards/diamonds_jack.png",
    "DQ": "images/cards/diamonds_queen.png",
    "DK": "images/cards/diamonds_king.png",
    "DA": "images/cards/diamonds_ace.png",
    "H2" : "images/cards/hearts_2.png",
    "H3" : "images/cards/hearts_3.png",
    "H4" : "images/cards/hearts_4.png",
    "H5" : "images/cards/hearts_5.png",
    "H6" : "images/cards/hearts_6.png",
    "H7" : "images/cards/hearts_7.png",
    "H8" : "images/cards/hearts_8.png",
    "H9" : "images/cards/hearts_9.png",
    "H10" : "images/cards/hearts_10.png",
    "HJ" : "images/cards/hearts_jack.png",
    "HQ" : "images/cards/hearts_queen.png",
    "HK" : "images/cards/hearts_king.png",
    "HA" : "images/cards/hearts_ace.png",
    "S2" : "images/cards/spades_2.png",
    "S3" : "images/cards/spades_3.png",
    "S4" : "images/cards/spades_4.png",
    "S5" : "images/cards/spades_5.png",
    "S6" : "images/cards/spades_6.png",
    "S7" : "images/cards/spades_7.png",
    "S8" : "images/cards/spades_8.png",
    "S9" : "images/cards/spades_9.png",
    "S10" : "images/cards/spades_10.png",
    "SJ" : "images/cards/spades_jack.png",
    "SQ" : "images/cards/spades_queen.png",
    "SK" : "images/cards/spades_king.png",
    "SA" : "images/cards/spades_ace.png",
}

const resultMessages = {
    'RF' : "Royal Flush!!!!!!!!",
    'SF' : "Straight Flush!!!!!",
    '4K' : 'Four Of A Kind!!!!!',
    'FH' : 'Full House!!!!!!!!!',
    'F' : 'Flush!!!!!!!!!!!!!!!',
    'S' : 'Straight!!!!!!!!!!!!',
    '3K' : "Three Of A Kind!!!!!",
    '2P' : "Two Pair!!!!!!!!!",
    'P' : "Pair!!!!!!!!!!!!!!",
    'HC' : "High Card!!!!!!!!"
}

function welcomeClick(img) {
    var div = document.getElementById(img);
    wim1.style.backgroundColor = "#f4f4f4";
    wim2.style.backgroundColor = "#f4f4f4";
    wim3.style.backgroundColor = "#f4f4f4";
    wim4.style.backgroundColor = "#f4f4f4";    
    div.style.backgroundColor = "lightcoral";
    charSelect = welcomeDict[img];
}

function goToGame() {
    username = document.getElementById("textInput").value;
    localStorage.setItem("username", username);
    localStorage.setItem("charSelect", charSelect);
    // window.location.href = "index.html"

}

function startPage() {
    document.getElementById("userName").innerHTML = localStorage.getItem("username");
    document.getElementById("userPic").src = localStorage.getItem("charSelect");
}

function updateTextbox() {
    const rangeValue = document.getElementById('myRange').value;
    document.getElementById('myTextbox').value = rangeValue;
}

function updateSlider() {
    const textboxValue = document.getElementById('myTextbox').value;
    if (textboxValue == "") {
        document.getElementById('myRange').value = 0
    }
    else {
        document.getElementById('myRange').value = textboxValue;
    }
}

function closeEndContent() {
    document.getElementById('endDisplay').style.display = 'none';
}

// var stopGate = false;

// let userActionPromiseResolver;


// function waitForUserAction() {
//     userActionPromise = new Promise(resolve => {
//         userActionPromiseResolver = resolve;
//     });
//     return userActionPromise
// }

// function setUserAction(action) {
//     if (typeof userActionPromiseResolver === 'function') {
//         userActionPromiseResolver(action);
//         userActionPromiseResolver = null;
//     }
// }

var userResponse = false;
var playerInTurn;
var callAmount;
const lbAmount = 1;
const bbAmount = 2;

function setUserAction(action) {
    // userRespone = true;
    console.log("setUserAction")

}

function waitUserAction() {
    return new Promise(resolve => {
        window.setUserAction = function() {
            resolve();
        };
    });
}

let i = 0;

// function delayedLog() {
//   console.log(i);
//   i++;
  
//   if (i < 10) {
//     if (userResponse == true) {

//     }
//     setTimeout(delayedLog, 1000);
//   }
//   else {
//     i = 0;
//   }
// }

// async function listenerUserAction() {
//     return new Promise((resolve) => {
//         // while (userResponse == false) {
//         // setTimeout(console.log("listen"), 1000)
//         // }
//         // resolve        
//         if (userResponse === true) {
//             console.log(i, true);
//             i = 0;
            
//         } else {
//             console.log(i, false);
//             setTimeout(listenerUserAction(), 1000);
//             i++;
//         }
//     })
// }

async function asyncAwaitUserResponse() {
    console.log("start waiting for user input");

    await waitUserAction();

    // const userAction = await userActionPromise;
    console.log("user input received");
    console.log("userResponse = " + userResponse)
    return userResponse;

}


function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

class Frontend{
    constructor() {

    }

    static showDiv(id) {
        // id is string input of div id
        var div = document.getElementById(id);
        div.style.display = 'block';
    }

    static hideDiv(id) {
        var div = document.getElementById(id);
        div.style.display = 'none';
    }

    static toggleDiv(id) {
        var div = document.getElementById(id);
        if(div.style.display = 'block') {
            div.style.display = 'none'
        }
        else {
            div.style.display = 'block'
        }
    }
    static changeImage(id, imageSource) {
        var img = document.getElementById(id);
        img.src = imageSource;
    }

    static changeTextContent(id, text) {
        var content = document.getElementById(id)
        content.textContent = text
    }
    static hideCards(playerID) {
        var card1 = document.getElementById(playerID + 'c1');
        card1.style.visibility = "hidden";
        var card2 = document.getElementById(playerID + 'c2');
        card2.style.visibility = "hidden";
    }

    static showCards(playerID) {
        var card1 = document.getElementById(playerID + 'c1');
        card1.style.visibility = "visible";
        var card2 = document.getElementById(playerID + 'c2');
        card2.style.visibility = "visible";
    }

    static hideBlinds(playerID) {
        let sb = document.getElementById(playerID + 'sb');
        let bb = document.getElementById(playerID + 'bb');
        sb.style.display = 'none';
        bb.style.display = 'none';
    }

    static showSB(playerID) {
        let sb = document.getElementById(playerID + 'sb');
        sb.style.display = 'inline';
    }

    static showBB(playerID) {
        let bb = document.getElementById(playerID + 'bb');
        bb.style.display = 'inline';
    }

    static changeParagraphColor(id, color) {
        const paragraph = document.getElementById(id);
        paragraph.style.color = color;
    }

}

class Player {
    constructor(robot, name, id, imgURL) {
        this.isrobot = robot;
        this.name = name;
        this.id = id;
        this.money = 200;
        this.card1 = ''; 
        this.card2 = '';
        this.active = true;  
        this.inRound = true;
        this.isTurn = false;   
        this.betThisRound = 0;
        this.betThisHand = 0;
        this.imgURL = imgURL;
        this.result = 0;
        this.wonThisHand = 0;
        this.tie = 0;
        this.allIn = false;
        this.rank = 0;
        this.finalCards;
        Frontend.changeTextContent(this.id + 'p1', this.money);
        Frontend.changeTextContent(this.id + 'p2', this.betThisRound);


    }

    async promptMove() {
        console.log(this.card1);
        console.log(this.card2);
        console.log("test1");
        document.getElementById("myRange").setAttribute("max", (this.money - callAmount + this.betThisRound));
        Frontend.showDiv('actionContainer');
        Frontend.changeImage(this.id + 'c1', Utils.translateCard(this.card1));
        Frontend.changeImage(this.id + 'c2', Utils.translateCard(this.card2));
        var response = await asyncAwaitUserResponse();
        console.log("response responded to " + response);
        Frontend.changeImage(this.id + 'c1', Utils.translateCard('back'));
        Frontend.changeImage(this.id + 'c2', Utils.translateCard('back'));

        return response;

    }

}

// a = shuffleDeck()
// for (var card of a) {
//     console.log(card)
// }


class DealCards {
    constructor(players, testBoard=false) {
        if (testBoard) {
            var deal = this.dealBoard(players.length, testBoard);
        } else {
            var deal = this.deal(players.length);
        }
        this.pockets = deal[0];
        this.board = deal[1];
        // deals cards
        for (var player of players) {
            this.player = player;
            const cards = this.pockets.pop();
            this.player.card1 = cards[0];
            this.player.card2 = cards[1];
        }
        this.flop = this.board.slice(0,3);
        this.turn = this.board[3];
        this.river = this.board[4];
        }

    shuffleDeck() {
        const suits = ['H', 'D', 'C', 'S'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      
        const deck = [];
      
        // Create a deck of cards
        for (const suit of suits) {
          for (const rank of ranks) {
            deck.push([suit, rank]);
          }
        }
        // Shuffle cards
        for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
      
        return deck;
    }

    deal(numPlayers) {
        var deck = this.shuffleDeck();
        var board = [];
        var pockets = [];
    
        for (let i = 0; i < numPlayers; i++) {
            var card1 = deck.pop();
            var card2 = deck.pop();
            pockets.push([card1, card2]);
        }
        for (let i = 0; i < 5; i++) {
            board.push(deck.pop());
        }
        return [pockets, board];
    }

    dealBoard(numPlayers, givenBoard) {
        var deck = this.shuffleDeck();
        var board = [...givenBoard]
        var pockets = [];
        for (let boardCard of givenBoard) {
            deck = deck.filter(item => !arraysAreEqual(item, boardCard));
        }
        // for (let c of deck) {
        //     console.log(c);
        // }
        // console.log(deck);
        for (let i = 0; i < numPlayers; i++) {
            var card1 = deck.pop();
            var card2 = deck.pop();
            pockets.push([card1, card2]);
        }
        return [pockets, board];
    }

}   

// test = new DealCards(players)

// console.log('a')
// for (let card of test.board) {
//     console.log(card)
// }

// console.log('space')

// for (let p of players) {
//     for (let c of p.cards) {
//         console.log(c)
//     }
//     console.log('')
// }
// console.log(p1.cards)
// console.log(test.board)
// console.log('lgop')
// console.log(test.flop)
// for (let c of test.flop) {
//     console.log(c)
// }

// console.log(test.turn)
// console.log(test.river)


class BettingRound {
    constructor(cards, players){
        this.flop = {cards: flop,
                    active: false};
        this.turn = {cards: turn,
                    active: false};
        this.river = {cards: river,
                    active: false};
        this.live = this.activate(this.flop, this.turn, this.river);
    }
    activate(flop, turn, river) {
        actives = []
        if (flop.active) {
            actives.push(flop.cards);
        }
        else {
            return ['back', 'back', 'back', 'back', 'back']
        }
        if (turn.active) {
            actives.push(turn.cards);
        }
        else {
            return actives.concat(['back', 'back']);
        }
        if (river.active) {
            actives.push(river.cards);
        }
        else {
            return actives.concat(['back']);
        }

        return actives
    }
}

class Hand {
    constructor(littleBlind=0, testBoard = []) {
        this.littleBlind = littleBlind
        this.activePlayers = players.filter(player => player.active === true);
        console.log(this.activePlayers + ' activePlayers')
        
        if (testBoard.length > 0) {
            this.dealtCards = new DealCards(this.activePlayers, testBoard=testBoard)

        } else {
            this.dealtCards = new DealCards(this.activePlayers)
        }

        this.card1 = this.dealtCards.board[0];
        this.card2 = this.dealtCards.board[1];
        this.card3 = this.dealtCards.board[2];
        this.card4 = this.dealtCards.board[3];
        this.card5 = this.dealtCards.board[4];
        this.active = true;
        this.pot = 0;
        this.pot2 = 0;
        this.pot3 = 0;
        this.pot4 = 0;
        this.call = 0;
        this.splitcall1 = 0;
        this.splitcall2 = 0;
        this.splitcall3 = 0;
        this.start = null;

        // cards are dealt/assigned to each player and board
        // this.bettingRound(['back', 'back', 'back', 'back', 'back'], this.activePlayers);
        // if (this.active) {
        //     this.bettingRound([this.card1, this.card2, this.card3, 'back', 'back'])
        // }
    }

    bootHand() {
        for (let p of this.activePlayers) {
            Frontend.showCards(p.id);
            p.betThisHand = 0;
            p.inRound = true;
            p.tie = 0;
            p.wonThisHand = 0;
            p.betThisRound = 0;
            p.result = '';
            p.allIn = false;
            p.rank = 0;
            p.finalCards = [];
        }
        
    }

    async initialize() {
        let start;
        let end;
        this.active = true;
        this.bootHand();
        Frontend.showSB(players[this.littleBlind].id);
        Frontend.showBB(players[(this.littleBlind + 1) % players.length].id);

        await this.bettingRound(['back', 'back', 'back', 'back', 'back'], this.activePlayers, this.littleBlind, start=true);
        if (this.active) {
            await this.bettingRound([this.card1, this.card2, this.card3, 'back', 'back'], this.activePlayers, this.littleBlind);
            if (this.active) {
                await this.bettingRound([this.card1, this.card2, this.card3, this.card4, 'back'], this.activePlayers, this.littleBlind);
                if (this.active) {
                    await this.bettingRound([this.card1, this.card2, this.card3, this.card4, this.card5], this.activePlayers, this.littleBlind, start=false, end=true);
                }
            }
        }


        Frontend.hideBlinds(players[this.littleBlind].id);
        Frontend.hideBlinds(players[(this.littleBlind + 1) % players.length].id);

    }
    
    async bettingRound(cards, players, littleBlindPlayer, start=false, end=false){
        // console.log(this.activePlayers);
        // console.log(players);
        this.call = 0;
        let orderedPlayers = [];
        this.active = true;
        let splitpot1 = 0;
        let splitpot2 = 0;
        let splitpot3 = 0;

        // console.log(players);
        // console.log(littleBlindPlayer, 'lb player')
        for (let j = 0; j < players.length; j++) {
            // changes the small and big blind each round
            // console.log(players[(littleBlindPlayer + j) % players.length])
            // also sets betThisRound attribute to 0
            players[j].betThisRound = 0;
            orderedPlayers.push(players[(littleBlindPlayer + j) % players.length])
            this.updateFrontend(players[j % players.length])
        }
        console.log(orderedPlayers)
        // sets the board
        for (let i = 1; i <= 5; i++) {
            // console.log(cards[i-1])
            Frontend.changeImage('card' + i.toString() + 'Image', Utils.translateCard(cards[i - 1]));
        }

        let playerQueue = orderedPlayers.slice();

        if (start) {
            // automatically simulate little and big blinds
            let lb = playerQueue.shift();
            lb.money -= lbAmount;
            lb.betThisRound += lbAmount;
            lb.betThisHand += lbAmount;
            this.pot += lbAmount;
            this.updateFrontend(lb);
            playerQueue.push(lb);
            let bb = playerQueue.shift();
            bb.money -= bbAmount;
            bb.betThisRound += bbAmount;
            bb.betThisHand += bbAmount;
            this.pot += bbAmount;
            this.call = bbAmount;
            this.updateFrontend(bb);
            playerQueue.push(bb);
        }


        // players' turns
        while (playerQueue.length > 0) {
            let player = playerQueue.shift();
            this.updateFrontend(player);
            let pInRound = this.activePlayers.filter(p => p.inRound == true);
 
            if (player.inRound && player.allIn == false && pInRound.length > 1) {
                // playerAction will be a type array with information about user's action
                // playerAction will modify player's information in the Player Class, and
                // will modify game information here below
                playerInTurn = player;
                callAmount = this.call;
                this.checkcallHandler(player);
                var playerAction = await player.promptMove();
                console.log(this.pot, this.call, 'initial')
                if (playerAction[0] == 'raise') {
                    let raiseAmount = parseInt(playerAction[1]);
                    this.pot += raiseAmount + this.call - player.betThisRound;
                    
                    console.log('---------------');
                    console.log(raiseAmount);
                    console.log(this.call);
                    console.log(player.betThisRound);

                    player.money -= (raiseAmount + this.call - player.betThisRound);
                    player.betThisRound = (raiseAmount + this.call);
                    this.call += raiseAmount;
                    player.betThisHand += player.betThisRound;

                    this.updateFrontend(player);
                    
                    let index = orderedPlayers.indexOf(player);
                    let preceding = orderedPlayers.slice(0, index);
                    let succeeding = orderedPlayers.slice(index + 1);

                    // update playerQueue to ensure every player has a chance to match the bet
                    for (let additional of succeeding.concat(preceding)) {
                        if (additional.inRound) {
                            if (playerQueue.includes(additional) == false) {
                                playerQueue.push(additional);
                            }
                        }
                    }
                       
                } else if (playerAction[0] == 'checkcall') {
                    // incase partial call, incase the call amount is greater than what the player can bet
                    // if this.call - player.betThisRound > player.money
                    if (player.allIn) {
                        if (this.pot2 == 0) {
                            // first instance of split pot
                            let difference = 0;
                            for (let p of pInRound) {
                                if (p.betThisRound == this.call) {
                                    difference += (p.betThisRound - player.money);
                                }
                            }
                            this.pot2 = this.pot - difference + player.money;
                            this.pot = difference;
                            this.splitcall1 = player.money;
                            player.betThisRound += player.money;
                            player.betThisHand += player.money;
                            player.money = 0;
                            this.updateFrontend(player);

                            
                        } else if (this.pot3 == 0) {

                        } else if (this.pot4 == 0) {

                        }
                        
                    } else {
                        player.money -= (this.call - player.betThisRound);
                        this.pot += (this.call - player.betThisRound);
                        player.betThisHand += (this.call - player.betThisRound);
                        player.betThisRound += (this.call - player.betThisRound);
                        this.updateFrontend(player);
                    }

                } else if (playerAction[0] == 'fold') {
                    // already taken care of in promptMove
                    player.inRound = false;
                    Frontend.hideCards(player.id)
                }

                console.log(this.pot, this.call, 'final')

            }

        }
        this.call = 0;
        let playersInRound = this.activePlayers.filter(p => p.inRound == true);
        console.log('-----------');
        console.log(playersInRound.length);
        let rankedPlayers = [];
        if (playersInRound.length <= 1) {
            // shallow copy of active players
            let apCopy = [...this.activePlayers];
            // winner of round
            rankedPlayers.push(playersInRound[0]);
            // sort by descending betThisHand value
            apCopy.sort((a, b) => b.betThisHand - a.betThisHand);
            
            // incase second to last player illogically folds instead of checks
            for (let p of apCopy) {
                if (!rankedPlayers.includes(p)) {
                    rankedPlayers.push(p);
                }
            }
                     
            // for (let p of rankedPlayers) {
            //     console.log(p.name, p.betThisHand)
            // }
            // console.log('checkpoint done one player left')
            // console.log(rankedPlayers)

            rankedPlayers[0].money += this.pot;
            console.log(rankedPlayers[0].betThisHand);
            rankedPlayers[0].wonThisHand = this.pot - rankedPlayers[0].betThisHand;

            for (let rest of rankedPlayers.slice(1)) {
                rest.wonThisHand = -rest.betThisHand;
            }
            // assign results to players but don't modify rankings
            this.evaluateHand(rankedPlayers);

            this.endround(rankedPlayers);
            this.active = false;
        } else if (end == true) {
            // first handle folded players
            let others = [];
            for (let other of this.activePlayers) {
                if (!playersInRound.includes(other)) {
                    others.push(other);
                    other.wonThisHand = - other.betThisHand;
                }
            }
            this.evaluateHand(others);
            others = others.sort((a, b) => a.rank - b.rank);

            // then handle players at showdown
            // ranks players
            this.evaluateHand(playersInRound);
            // sorts players by rank to display on endDisplay
            let showdownPlayers = playersInRound.sort((a, b) => a.rank - b.rank);
            // now properly adjusts money and wonThisHand amounts of showdown players
            let winners = showdownPlayers.filter(item => item.rank == 1);
            for (let showdownPlayer of showdownPlayers) {
                if (showdownPlayer.rank == 1) {
                    showdownPlayer.wonThisHand = Math.round(this.pot / winners.length) - showdownPlayer.betThisHand;
                    showdownPlayer.money += Math.round(this.pot / winners.length);
                } else {
                    showdownPlayer.wonThisHand = - showdownPlayer.betThisHand
                }
            }

            for (let e of [...showdownPlayers, ...others]) {
                console.log(e, e.rank);
            };
            this.endround([...showdownPlayers, ...others]);
            // Distribute Pot

            this.active = false;
        }
        
    }
    
    evaluateHand(players) {

        let baskets = {
            'RF' : [],
            'SF' : [],
            '4K' : [],
            'FH' : [],
            'F' : [],
            'S' : [],
            '3K' : [],
            '2P' : [],
            'P' : [],
            'HC' : []
        };
        for (let player of players) {
            let cardsInitial = [this.card1, this.card2, this.card3, this.card4, this.card5, player.card1, player.card2];
            let cards = [];
            // convert cards into arrays for better handling
            for (let card of cardsInitial) {
                if (card[1] == 'J') {
                    cards.push([card[0], 11]);
                } else if (card[1] == 'Q') {
                    cards.push([card[0], 12]);
                } else if (card[1] == 'K') {
                    cards.push([card[0], 13]);
                } else if (card[1] == 'A') {
                    cards.push([card[0], 14]);
                } else {
                    cards.push([card[0], parseInt(card.slice(1))]);
                } 
            }

            // sort cards in descending order of rank
            cards.sort((a, b) => b[1] - a[1]);

            cards.forEach(card => console.log(card[0], card[1]))

            let rankCounts = {};
            let suitCounts = {};
            cards.forEach(card => {
                rankCounts[card.slice(1)] = (rankCounts[card.slice(1)] || 0) + 1;
                suitCounts[card[0]] = (suitCounts[card[0]] || 0) + 1;
            });


            console.log(rankCounts);
            console.log(suitCounts);


            // [bool(isStraightFlush), [['D', 13], ['D', 10], ..., bool(isFlush)]
            const straightFlush = this.isStraightFlush(cards, suitCounts);
            const isFour = this.isFour(cards, rankCounts);
            const isThreeTwoOneDict = this.isThreeTwoOne(cards, rankCounts);
            const isStraight = this.isStraight(cards)

            console.log('straightFlush ' + straightFlush);
            console.log('isStraight ' + isStraight);
            console.log('isFour ' + isFour);
            console.log('isThreeTwoOneDict ' + isThreeTwoOneDict);
            for (let key in isThreeTwoOneDict) {
                console.log(key, isThreeTwoOneDict[key]);
            }
            console.log('--------------')
            console.log(straightFlush[1][0], straightFlush[1][1])

            console.log('rankCounts' + rankCounts);
            if (straightFlush[0] && straightFlush[1][0][1] == 14) {
                baskets['RF'].push(player);
                player.finalCards = [0, 0, 0, 0, 0];
                player.result = 'RF';
            } else if (straightFlush[0]) {
                // [player, [straightFlush high card rank, 0, 0, 0, 0]
                baskets['SF'].push(player);
                player.finalCards = [straightFlush[1][0][1], 0, 0, 0, 0];
                player.result = 'SF';
            } else if (isFour[0]) {
                // [player, [4 of a kind rank, highest 5th card, 0, 0, 0]
                baskets['4K'].push(player);
                player.finalCards = [parseInt(isFour[1]), this.highCard(player, cards, isFour[1]), 0, 0, 0];
                player.result = '4K';
            } else if (isThreeTwoOneDict['FH']) {
                // [player, [trip HC, dub HC, 0, 0, 0]]
                baskets['FH'].push(player);
                player.finalCards = [...isThreeTwoOneDict['FH'], 0, 0, 0];
                player.result = 'FH';
            } else if (straightFlush[2]) {
                // there can only be one suit of flush so there can only be one unique highcard in a flush
                // [player, [highest 5 cards of flush]]
                // [player, [hc1, hc2, hc3, hc4, hc5]]
                let sortedRanks = [];
                for (let c of straightFlush[1].slice(0, 5)) {
                    sortedRanks.push(c[1]);
                }
                baskets['F'].push(player);
                player.finalCards = sortedRanks;
                player.result = 'F';
            } else if (isStraight[0]) {
                // [player, [straight HC (integer), 0, 0, 0, 0]]
                baskets['S'].push(player);
                player.finalCards = [isStraight[1], 0, 0, 0, 0];
                player.result = 'S';
            } else if (isThreeTwoOneDict['3K']) {
                // [player, [3k rank, HC1, HC2, 0, 0]]
                baskets['3K'].push(player);
                player.finalCards = [...isThreeTwoOneDict['3K'], 0, 0];
                player.result = '3K';
            } else if (isThreeTwoOneDict['2P']) {
                // [player, [high pair rank, low pair rank, other highest card rank, 0, 0]]
                baskets['2P'].push(player);
                player.finalCards = [...isThreeTwoOneDict['2P'], 0, 0];
                player.result = '2P';
            } else if (isThreeTwoOneDict['P']) {
                // [player, [pair rank, HC1 #, HC2 #, HC3 #, 0]]
                baskets['P'].push(player);
                player.finalCards = [...isThreeTwoOneDict['P'], 0];
                player.result = 'P';
            } else {
                // [player, [hc1, hc2, hc3, hc4, hc5]]
                baskets['HC'].push(player);
                player.finalCards = isThreeTwoOneDict['HC'];
                player.result = 'HC';
            }
        }
        // this ranks each basket and accounts for ties too
        // each nonempty basket will now be a nested array, with each element of subarray
        // representing a ranking of the basket. if two players are in the same subarray, they are tied
        console.log(baskets)
        this.handlebaskets(baskets);
       
    }

    handlebaskets(baskets) {
        // for (let key in baskets) {
        //     if (baskets[key].length == 1) {
        //         // the length of each basket value will indicate whether 
        //         // player is in tie or not. So if there is only one player in
        //         // a basket, they cannot be tied with any other player 
        //         baskets[key] = [baskets[key]];
        //     }
        // }

        let i = 1;
        for (let key in baskets) {
            if (baskets[key].length == 1) {
                baskets[key][0].rank = i;
                i++;
                console.log(baskets[key][0], baskets[key][0].rank);
            } else if (baskets[key].length > 1) {
                console.log(baskets[key]);
                baskets[key].sort((a, b) => b.finalCards[0] - a.finalCards[0] + 0.01 * (b.finalCards[1] - a.finalCards[1]) +
                            0.0001 * (b.finalCards[2] - a.finalCards[2] +  0.000001 * (b.finalCards[3] - a.finalCards[3])) +
                            0.00000001 * (b.finalCards[4] - a.finalCards[4]));
                console.log(baskets[key]);

                for (let e of baskets[key]) {
                    console.log(e);
                    console.log(e.finalCards);
                }

                for (let j = 0; j < baskets[key].length;) {
                    baskets[key][j].rank = i;
                    console.log('a')
                    let ties = 0;
                    for (let k = j + 1; k < baskets[key].length;) {
                        console.log('b')
                        console.log(baskets[key][j].finalCards);
                        console.log(baskets[key][k].finalCards);
                        if (arraysAreEqual(baskets[key][j].finalCards, baskets[key][k].finalCards)) {
                            console.log('c')
                            baskets[key][k].rank = i;
                            j++;
                            k++;
                            ties++;
                        } else {
                            break;
                        }
                    }
                    j++;
                    i += ties + 1;
                }
                
            }
        }

        for (let p of players) {
            console.log(p);
            console.log(p.rank);
        }

    }

    highCard(player, cards, ...args) {
        // args represent the excepted card values
        let highCard = 0;
        for (let card of cards) {
            for (let exception of args) {
                if (card[1] !== exception && card[1] > highCard) {
                    highCard = card[1];
                }
            }
        }
        // highCard is integer representing highest rank other than rank(s) specified in args
        return highCard
    }


    isStraightFlush(cards, suitCounts) {
        // returns array [bool(are these cards a straightFlush), suited cards if a flush, bool(are these cards a flush?)]
        // so handles checking if cards are a flush 
        // suited cards will be of type ['D', 13]
        let cardscopy = cards.slice();
        let suited = [];
        for (let key in suitCounts) {
            if (suitCounts[key] >= 5) {
                for (let c of cardscopy) {
                    if (c[0] == key) {
                        // suited will be all cards of same suit (atleast 5)
                        suited.push(c);
                    }
                }
            } 
        }
        let suited_copy = suited.slice();
        // suited is still in descending order by card rank
        if (suited.length == 0) {
            // not a flush
            return [false, '', false];
        } else {
            if (this.isStraight(suited)[0]) {
                // straightFlush
                return [true, suited_copy, true]
            } else {
                // straight but not a flush
                return [false, suited_copy, true]
            }
        }
    }

    // what if there is a straight flush ranked lower than a mixed flush??
    isStraight(cards) {       
        let cardscopy= cards.slice()
        // in case of a low ace straight
        if (cardscopy[0][1] == 14) {
            cardscopy.push([cardscopy[0][0], 1]);
        }
        // for (let c of cardscopy) {
        //     console.log(c[1]);
        // }

        // checks if there is a straight out of cards ordered by descending rank value
        for (let i = 0; i < cardscopy.length - 4; i++) {
            let straightCount = 0;
            for (let j = 0; j < cardscopy.slice(i).length - 1; j++) {
                if (cardscopy[i + j][1] - cardscopy[i + j + 1][1] == 1) {
                    straightCount++;
                    if (straightCount == 4) {
                        // returns boolean and value of highest card in straight for tiebreaking
                        return [true, cardscopy[i][1]];
                    } 
                } else if (cardscopy[i + j][1] - cardscopy[i + j + 1][1] == 0) {
                        // if pair
                } else {
                        break
                    }
                }
        }
        
        return [false, ''];
    }

    isFour(cards, rankCounts) {
        for (let key in rankCounts) {
            if (rankCounts[key] == 4) {
                // cannot be two 4 kinds of same rank so don't have to worry about fifth card tiebreaker
                return [true, key]
            }
        }
        return [false, '']
    }

    isThreeTwoOne(cards, rankCounts) {
        let cardscopy = cards.slice();
        let trips = [];
        let dubs = [];
        let fh = false;
        let threeKind = false;
        let twopair = false;
        let pair = false;
        let highcard = false;
        // only because cards are entered in descdending order we don't have to worry about second 3 of kind
        for (let key in rankCounts) {
            if (rankCounts[key] == 3) {
                trips.push(parseInt(key));
                // removes trips from cards
                cardscopy = cardscopy.filter(card => card[1] !== parseInt(key));
            } else if (rankCounts[key] == 2) {
                // dubs will also be in descending order
                dubs.push(parseInt(key));
                // removes dubs from cards
                cardscopy = cardscopy.filter(card => card[1] !== parseInt(key));
            }
        }
        trips = trips.sort((a, b) => b - a);
        dubs = dubs.sort((a, b) => b - a);

        if (trips.length > 0) {
            if (dubs.length > 0) {
                // full house
                fh = [trips[0], dubs[0]];
            } else if (trips.length == 2) {
                fh = [trips[0], trips[1]];
            } else {
                // 3 of a kind
                // include highest two cards for tiebreaking
                console.log(cardscopy)
                console.log(cardscopy[0])
                console.log(cardscopy[1])
                threeKind = [trips[0], cardscopy[0][1], cardscopy[1][1]];
            }
        } else if (dubs.length > 1) {
            // two pair
            // again, dubs will be descending rank so don't have to worry about potential third pair
            twopair = [dubs[0], dubs[1], cardscopy[0][1]];     
        } else if (dubs.length == 1) {
            // single pair
            pair = [dubs[0], cardscopy[0][1], cardscopy[1][1], cardscopy[2][1]]
        } else {
            // high card
            highcard = [];
            for (let c of cardscopy.slice(0, 5)) {
                highcard.push(c[1]);
            }
        }
        return {
            'FH' : fh,
            '3K' : threeKind,
            '2P' : twopair,
            'P' : pair,
            'HC' : highcard
        }
    }
   

    endround(playerArr) {
        console.log(playerArr)
        for (let j = 0; j < 5; j++) {
            // display board
            Frontend.changeImage('ec' + (j + 1).toString(), Utils.translateCard(this.dealtCards.board[j]));
        }
        
        for (let i = 0; i < playerArr.length; i++) {
            // update player images
            Frontend.changeImage("ranked" + (i + 1).toString(), playerArr[i].imgURL)
            // display player cards
            Frontend.changeImage("r" + (i + 1).toString() + "c1", Utils.translateCard(playerArr[i].card1))
            Frontend.changeImage("r" + (i + 1).toString() + "c2", Utils.translateCard(playerArr[i].card2))

            if (playerArr[i].inRound == false) {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p1", "darkgray");
            } else {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p1", "blue");
            }
            Frontend.changeTextContent("r" + (i + 1).toString() + "p1", resultMessages[playerArr[i].result])
            
            if (playerArr[i].wonThisHand == 0) {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p2", "darkgray");
                Frontend.changeTextContent("r" + (i + 1).toString() + "p2", playerArr[i].wonThisHand);
            } else if (playerArr[i].wonThisHand < 0) {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p2", "red");
                Frontend.changeTextContent("r" + (i + 1).toString() + "p2", playerArr[i].wonThisHand);
            } else {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p2", "rgb(57, 255, 57)");
                Frontend.changeTextContent("r" + (i + 1).toString() + "p2", '+' + playerArr[i].wonThisHand);
            }
            Frontend.changeTextContent("r" + (i + 1).toString() + "p3", '$' + playerArr[i].money.toString());


        }

        Frontend.showDiv('endDisplay');

    }

    checkcallHandler(activePlayer) {
        if (this.call > 0 & this.call > activePlayer.betThisRound) {
            if ((playerInTurn.money + playerInTurn.betThisRound) >= this.call) {
            Frontend.changeTextContent('checkcallDisplay', 'Call')
            } else {
            Frontend.changeTextContent('checkcallDisplay', 'Partial Call: All In ' + activePlayer.money)
            }
        } else {
            Frontend.changeTextContent('checkcallDisplay', 'Check')
        }
    }
    updateFrontend(player) {
        Frontend.changeTextContent('potAmount', this.pot)
        Frontend.changeTextContent('roundInfoParagraph', this.call)
        Frontend.changeTextContent(player.id + 'p1', player.money)
        Frontend.changeTextContent(player.id + 'p2', player.betThisRound);
    }
        

}


class Orbit {
    constructor() {


    }
    async initialize() {
        let i = 0;
        for (let player of players) {
            let hand = new Hand(i);
            await hand.initialize();
            // this shifts the blind
            i++;
        }


        
    }

}

// want to initialize UI, then automatically(?) prompt Hand to handle a bettinground
// within Hand, we want to deal cards to active players first, then start the first
// bettinground with input 5 cards facedown. Then iterate through bettingroudn with flop, turn
// river. Then if players are stil "in" round show cards and calculate winner 



function main() {
    // Frontend.hideDiv("actionContainer")
    // Frontend.hideDiv("card5")
    // Frontend.hideDiv("cardContainer")
    // Frontend.changeImage("card1Image", "images/cards/clubs_2.png")
    
    p1 = new Player(false, username, 'p1', charSelect);
    p2 = new Player(false, "Stephen", 'p2', 'images/player2.png');
    p3 = new Player(false, "Alyssa", 'p3', 'images/player3.png');
    p4 = new Player(false, "Eric", 'p4', 'images/player4.png');
    p5 = new Player(false, "Alex", 'p5', 'images/player5.png');

    players = [p1, p3, p2, p5, p4];

    var inTurn = false;

    let orbit = new Orbit;
    orbit.initialize();
    return null
}

class Actions extends Hand {
    constructor() {

    }

    static raiseAction() {
        if (document.getElementById("myTextbox").value <= (playerInTurn.money - callAmount + playerInTurn.betThisRound) 
            && document.getElementById("myTextbox").value > 0) {
            console.log("raise");
            userResponse = ['raise', document.getElementById("myTextbox").value];
            setUserAction('raise');
        }

    }

    static checkcallAction() {
        console.log("check call")
        userResponse = ['checkcall', '']
        setUserAction('checkcall')
        
    }

    static foldAction() {
        console.log("fold")
        userResponse = ['fold', '']
        setUserAction('fold')
    }
    static response(){
        const resp = actionFunction()
        return resp
    }

    static getIsTurnPlayer() {
        for (var player of players) {
            if (player.isTurn == true) {
                return player;
            }
        }
    }

}

class Utils {
    constructor() {}
    static translateCard(card){
        // card is a set of string vals, ex ['H', '4']
        // returns path of image representing card
        // exception is 'back'
        if (card == 'back') {
            return '/images/cards/back.png';
        } else return cardDict[card.join("")];
    }
    static reverseMerge(left, right) {
        let sorted = [];

        while (left.length && right.length) {
            if (left[0] > right[0]) {
                sorted.push(left.shift());
            } else {
                sorted.push(right.shift());
            }
        }
        return [...sorted, ...left, ...right];
    }
    static reverseMergeSort(arr) {
        // Base Case
        if (arr.length <= 1) {
            return arr;
        }
        // to split array in half
        let mid = Math.floor(arr.length / 2)

        // Recursive Case
        let left = this.reverseMergeSort(arr.slice(0, mid));
        let right = this.reverseMergeSort(arr.slice(mid));

        return this.reverseMerge(left, right);
    }


    

}

class Test {
    constructor() {

        // this.testStraight();
    }
    static testStraight(testCards){
        let cards = [['D', 12], ['C', 10], ['H', 10], ['S', 9], ['S', 8], ['D', 7], ['D', 6]];
        let cards1 = [['D', 14], ['C', 5], ['H', 4], ['S', 4], ['S', 3], ['D', 2], ['D', 2]];
        let cards2 = [['D', 8], ['H', 7], ['D', 7], ['S', 7], ['D', 6], ['S', 5], ['C', 4]];
    
        let h = new Hand();
        console.log(cards);
        console.log(h.isStraight(cards));
        console.log(h.isStraight(cards1));
        console.log(h.isStraight(cards2));
        console.log(h.isStraight(testCards));
    }
    static testEvalCards(hc1, hc2, hc3, hc4, hc5, pc1, pc2){
        let h = new Hand();
        let p = p2;
        h.card1 = hc1;
        h.card2 = hc2;
        h.card3 = hc3;
        h.card4 = hc4;
        h.card5 = hc5;
        p.card1 = pc1;
        p.card2 = pc2;
        h.evaluateHand([p]);

    }
    static testGivenBoard(board) {
        let h = new Hand(0, board);
        h.initialize();
    }
    
}

function test() {
    p1 = new Player(false, username, 'p1', charSelect);
    p2 = new Player(false, "Stephen", 'p2', 'images/player2.png');
    p3 = new Player(false, "Alyssa", 'p3', 'images/player3.png');
    p4 = new Player(false, "Eric", 'p4', 'images/player4.png');
    p5 = new Player(false, "Alex", 'p5', 'images/player5.png');

    players = [p1, p3, p2, p5, p4];

    // let t = new Test;
    // Test.testEvalCards('DA', 'DK', 'CA', 'C2', 'S2', 'S5', 'H5')
    // Test.testEvalCards('DA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10')
    // // above is a straightflush so returns [true, array, true]
    // Test.testEvalCards('SA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10')
    // // above is a straight but not a flush, so returns [false, '', false]
    // Test.testStraight([['S', 14], ['D', 13], ['D', 12], ['D', 11], ['D', 10], ['C', 4], ['S', 3]]);
    // // above is he same set of cards, but is a straight so the isStraight function returns [true, 14]


    // Test.testEvalCards('DA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10');
    // Test.testEvalCards('DA', 'DK', 'CA', 'SA', 'C4', 'S3', 'D10');
    // Test.testEvalCards('DA', 'DK', 'CA', 'SA', 'C4', 'S3', 'D3');
    // Test.testEvalCards('SJ', 'C8', 'C5', 'S5', 'H4', 'S3', 'D2');
    // Test.testEvalCards('SA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10')
    // Test.testEvalCards('SJ', 'C8', 'C5', 'SA', 'H4', 'S3', 'D2');
    // Test.testEvalCards('D3', 'DA', 'C10', 'D8', 'D13', 'H7', 'D12');

    // random junk test case
    // Test.testGivenBoard([['S', '3'], ['C', '7'], ['D', '9'], ['H', '2'], ['H', 'J']]);

    // RF dealt
    // Test.testGivenBoard([['S', 'A'], ['S', 'K'], ['S', 'Q'], ['S', 'J'], ['S', '10']]);
    // SF dealt
    // Test.testGivenBoard([['S', '9'], ['S', 'K'], ['S', 'Q'], ['S', 'J'], ['S', '10']]);
    // 4K dealt
    // Test.testGivenBoard([['S', '6'], ['D', '6'], ['H', '6'], ['S', 'J'], ['C', '6']]);
    // FH dealt
    // Test.testGivenBoard([['S', 'A'], ['D', 'A'], ['C', 'A'], ['S', 'Q'], ['H', 'Q']]);
    // F dealt
    // Test.testGivenBoard([['S', '2'], ['S', '4'], ['S', '8'], ['S', 'J'], ['S', '5']]);
    // S dealt
    // Test.testGivenBoard([['H', '9'], ['S', 'K'], ['C', 'Q'], ['D', 'J'], ['S', '10']]);
    // 3K dealt
    // Test.testGivenBoard([['S', 'A'], ['D', 'A'], ['C', 'A'], ['S', 'Q'], ['H', '9']]);
    // 2P dealt
    // Test.testGivenBoard([['S', 'A'], ['D', 'A'], ['C', '9'], ['S', '2'], ['H', '9']]);
    // P dealt
    // Test.testGivenBoard([['S', '3'], ['D', 'J'], ['C', '9'], ['S', '2'], ['H', '9']]);
    // HC dealt
    Test.testGivenBoard([['S', 'J'], ['D', '2'], ['C', '3'], ['S', '4'], ['H', '10']]);









    
}
test();
// main();