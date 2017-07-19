

//Global variables 
var newGameCounter = false;
var dealerCounter = 0;


// Deal card to Dealer-----------------------------------------------
function dealCardDealer() {
  //Replace "back" card with actual card.
  dealerCounter++;
  console.log('dealerCounter: ' + dealerCounter);
  console.log('newGameCounter:' + newGameCounter)
  // Use counters to determine if blank card back needs to be deleted
  if(dealerCounter === 2 && newGameCounter === true) {
    deleteBack();
    newGameCounter = false;
  }
  // Generate random number/card
  var card = Math.floor(Math.random()*52);
    // Attach a value to card, use module and 13.
    // var cardVal = card % 13;

  // Get card image
  var cardImg = 'Cards/' + getCardImage(card);
  var img = document.createElement("img");
  img.src = cardImg;
  // Append img to div  
  var src = document.getElementById("dealer");
  src.appendChild(img);
}

// Deal card face-down to Dealer-----------------------------------------------
function dealCardBack() {
  // Get card image
  // var cardImg = 'Cards/' + getCardImage(card);
  var img = document.createElement("img");
  img.src = 'Cards/back.png';
  // Append img to div  
  var src = document.getElementById("dealer");
  src.appendChild(img);
}

// Replace Dealer face-down with face-up card-----------------------------------------------
function deleteBack() {
  var select = document.getElementById('dealer');
  select.removeChild(select.lastChild);
}

// Deal card to Player-----------------------------------------------
function dealCardPlayer() {
  // Generate random number/card
  var card = Math.floor(Math.random()*52);
    // Attach a value to card, use module and 13.
    // var cardVal = card % 13;

  // Get card image
  var cardImg = 'Cards/' + getCardImage(card);
  var img = document.createElement("img");
  img.src = cardImg;
  // Append img to div  
  var src = document.getElementById("player");
  src.appendChild(img);
}



//Deal 2 cards to each player to start game
function startNewGame() {
  newGameCounter = true;
  dealerCounter = 0;
  
  // Empty div's 
  document.getElementById("dealer").innerHTML = ""; 
  document.getElementById("player").innerHTML = "";
 // Add identifiers to div's
  var divD = document.getElementById('dealer');
  divD.innerHTML = 'Dealer' 
  var divP = document.getElementById('player');
  divP.innerHTML = 'Player' 

  // Deal two cards to each player
  dealCardPlayer();
  dealCardDealer();
  dealCardPlayer();
  dealCardBack(); 
}

// Attach random number to card image
function getCardImage(card) {
    switch(card) {
      case 0:
        return "2_of_clubs.png";
        break;
      case 1:
        return "2_of_diamonds.png";
        break;
      case 2:
        return "2_of_hearts.png";
        break;
      case 3:
        return "2_of_spades.png";
        break;

      case 4:
        return "3_of_clubs.png";
        break;
      case 5:
        return "3_of_diamonds.png";
        break;
      case 6:
        return "3_of_hearts.png";
        break;
      case 7:
        return "3_of_spades.png";
        break;

      case 8:
        return "4_of_clubs.png";
        break;
      case 9:
        return "4_of_diamonds.png";
        break;
      case 10:
        return "4_of_hearts.png";
        break;
      case 11:
        return "4_of_spades.png";
        break;

      case 12:
        return "5_of_clubs.png";
        break;
      case 13:
        return "5_of_diamonds.png";
        break;
      case 14:
        return "5_of_hearts.png";
        break;
      case 15:
        return "5_of_spades.png";
        break;

      case 16:
        return "6_of_clubs.png";
        break;
      case 17:
        return "6_of_diamonds.png";
        break;
      case 18:
        return "6_of_hearts.png";
        break;
      case 19:
        return "6_of_spades.png";
        break;

      case 20:
        return "7_of_clubs.png";
        break;
      case 21:
        return "7_of_diamonds.png";
        break;
      case 22:
        return "7_of_hearts.png";
        break;
      case 23:
        return "7_of_spades.png";
        break;

      case 24:
        return "8_of_clubs.png";
        break;
      case 25:
        return "8_of_diamonds.png";
        break;
      case 26:
        return "8_of_hearts.png";
        break;
      case 27:
        return "8_of_spades.png";
        break;

      case 28:
        return "9_of_clubs.png";
        break;
      case 29:
        return "9_of_diamonds.png";
        break;
      case 30:
        return "9_of_hearts.png";
        break;
      case 31:
        return "9_of_spades.png";
        break;

      case 32:
        return "10_of_clubs.png";
        break;
      case 33:
        return "10_of_diamonds.png";
        break;
      case 34:
        return "10_of_hearts.png";
        break;
      case 35:
        return "10_of_spades.png";
        break;

      case 36:
        return "jack_of_clubs2.png";
        break;
      case 37:
        return "jack_of_diamonds2.png";
        break;
      case 38:
        return "jack_of_hearts2.png";
        break;
      case 39:
        return "jack_of_spades2.png";
        break;

      case 40:
        return "queen_of_clubs2.png";
        break;
      case 41:
        return "queen_of_diamonds2.png";
        break;
      case 42:
        return "queen_of_hearts2.png";
        break;
      case 43:
        return "queen_of_spades2.png";
        break;

      case 44:
        return "king_of_clubs2.png";
        break;
      case 45:
        return "king_of_diamonds2.png";
        break;
      case 46:
        return "king_of_hearts2.png";
        break;
      case 47:
        return "king_of_spades2.png";
        break;

      case 48:
        return "ace_of_clubs.png";
        break;
      case 49:
        return "ace_of_diamonds.png";
        break;
      case 50:
        return "ace_of_hearts.png";
        break;
      case 51:
        return "ace_of_spades.png";
        break;
    }
}


