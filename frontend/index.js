// const BG_COLOUR = '#231f20';
// const SNAKE_COLOUR = '#c2c2c2';
// const FOOD_COLOUR = '#e66916';
// let playerNumber;
// let gameActive = false;
// const socket = io('https://sleepy-island-33889.herokuapp.com/');
//
// socket.on('init', handleInit);
// socket.on('gameState', handleGameState);
// socket.on('gameOver', handleGameOver);
// socket.on('gameCode', handleGameCode);
// socket.on('unknownCode', handleUnknownCode);
// socket.on('tooManyPlayers', handleTooManyPlayers);
// socket.on('getPerks', handleGetPerksValue);
// // socket.on('getPerks2', getPerksValue);
// const gameScreen = document.getElementById('gameScreen');
// const initialScreen = document.getElementById('initialScreen');
// const newGameBtn = document.getElementById('newGameButton');
// const joinGameBtn = document.getElementById('joinGameButton');
// const gameCodeInput = document.getElementById('gameCodeInput');
// const gameCodeDisplay = document.getElementById('gameCodeDisplay');
// var perkOne;
// var perkTwo;
// newGameBtn.addEventListener('click', newGame);
// joinGameBtn.addEventListener('click', joinGame);
// // joinGameBtn.addEventListener('click', getPerks);
// $(joinGameBtn).on('click', function(){
//   // alert($(gameCodeInput).val());
// $(gameCodeDisplay).html($(gameCodeInput).val());
//
// });
// function setPerks(){
// $.getJSON("perks.json", function(data, perkOne, perkTwo){
//     var randIn = Math.floor(Math.random() * (data.perks.length));
//     var randIn2 = Math.floor(Math.random() * (data.perks.length));
//       var perkValue1 = data.perks[randIn].card;
//         var perkValue2 = data.perks[randIn2].card;
//         // var perkOne = $('.perk1').text(perkValue1);
//         //   var perkTwo = $('.perk2').text(perkValue2);
// return [{value1: perkValue1}, {value2: perkValue2}];
//           // console.log(perkOne);
// socket.emit('getPerks', [{value1: perkValue1}, {value2: perkValue2}]);
//
//
// });
// }
//
// function handleGetPerksValue(data){
// setPerks();
//       $('.perk1').text(data.value1);
//       $('.perk2').text(data.value2);
// }
// function joinGame() {
//   const code = gameCodeInput.value;
//   socket.emit('joinGame', code);
//   setPerks();
//   init();
// }
// function getPerksValue(data){
// console.log(data);
// alert(data);
// $('.perk1').text(data.value1);
// $('.perk2').text(data.value2);
//   // socket.emit('getPerks', {value1:perk1, value2:perk2});
//
// }
// function getPerks() {
// alert('aaa');
//
//
// }
// function newGame(perkOne, perkTwo) {
//   socket.emit('newGame');
//   init();
// }
//
//
//
//
//
// function init() {
//
//   $.getJSON('flags.json', function(data) {
//     console.log(data);
//     // alert(data.flags.length);
//     var randInt = Math.floor(Math.random() * (data.flags.length));
//     var randInt2 = Math.floor(Math.random() * (data.flags.length));
//       var randInt3 = Math.floor(Math.random() * (data.flags.length));
//         var randInt4 = Math.floor(Math.random() * (data.flags.length));
//     $('.flags >.card-section:first-child').html(data.flags[randInt].card);
//     $('.flags >.card-section:nth-child(2)').html(data.flags[randInt2].card);
//     $('.flags >.card-section:nth-child(3)').html(data.flags[randInt3].card);
//     $('.flags >.card-section:last-child').html(data.flags[randInt4].card);
//     // $('.card-section>p:nth-child(3)').append(data.flags[randInt2].card);
//
//   });
//
//
//
//   initialScreen.style.display = "none";
//   gameScreen.style.display = "block";
//   //
//   // canvas = document.getElementById('canvas');
//   //
//   // canvas.width = canvas.height = 600;
//   //
//   // ctx.fillStyle = BG_COLOUR;
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);
//   //
//   // document.addEventListener('keydown', keydown);
//   // gameActive = true;
// }
//
// // function keydown(e) {
// //   socket.emit('keydown', e.keyCode);
// // }
//
// // function paintGame(state) {
// //   ctx.fillStyle = BG_COLOUR;
// //   ctx.fillRect(0, 0, canvas.width, canvas.height);
// //
// //   const food = state.food;
// //   const gridsize = state.gridsize;
// //   const size = canvas.width / gridsize;
// //
// //   ctx.fillStyle = FOOD_COLOUR;
// //   ctx.fillRect(food.x * size, food.y * size, size, size);
// //
// //   paintPlayer(state.players[0], size, SNAKE_COLOUR);
// //   paintPlayer(state.players[1], size, 'red');
// // }
//
// // function paintPlayer(playerState, size, colour) {
// //   const snake = playerState.snake;
// //
// //   ctx.fillStyle = colour;
// //   for (let cell of snake) {
// //     ctx.fillRect(cell.x * size, cell.y * size, size, size);
// //   }
// // }
//
// function handleInit(number) {
//   playerNumber = number;
// }
//
// function handleGameState(gameState) {
//   if (!gameActive) {
//     return;
//   }
//   gameState = JSON.parse(gameState);
//   requestAnimationFrame(() => paintGame(gameState));
// }
//
// function handleGameOver(data) {
//   if (!gameActive) {
//     return;
//   }
//   data = JSON.parse(data);
//
//   gameActive = false;
//
//   if (data.winner === playerNumber) {
//     alert('You Win!');
//   } else {
//     alert('You Lose :(');
//   }
// }
//
// function handleGameCode(gameCode) {
//   gameCodeDisplay.innerText = gameCode;
// }
//
// function handleUnknownCode() {
//   reset();
//   alert('Unknown Game Code')
// }
//
// function handleTooManyPlayers() {
//   reset();
//   alert('This game is already in progress');
// }
//
// function reset() {
//   playerNumber = null;
//   gameCodeInput.value = '';
//   initialScreen.style.display = "block";
//   gameScreen.style.display = "none";
// }

const BG_COLOUR = '#231f20';
const SNAKE_COLOUR = '#c2c2c2';
const FOOD_COLOUR = '#e66916';

// $('.card-section').each(function(){
//   $(this).on('click', function(){
//     alert('here');
//   });
// });
$( ".card-section" ).click(function() {
    if ( $( this ).hasClass("ui-draggable-dragging") ) {

}
});

$('.card-section').draggable({
  cursor: "grabbing",
  containment: ".place",
  stack: ".card-section",
  snapTolerance: 20
});


$('.flags').sortable();


$('.card-section').on('touchmove', function(){
// $(this).css({"left"}) =
});
const socket = io('https://degrassi-mountie-63053.herokuapp.com/');
var perk1val = document.getElementsByClassName('perk3');
var perk2val = document.getElementsByClassName('perk4');
// console.log(perk2val.value);
socket.emit('perks', {
       perk1: perk1val.value,
       perk2s: perk2val.value
   });
socket.on('init', handleInit);
socket.on('gameState', handleGameState);
socket.on('gameOver', handleGameOver);
socket.on('gameCode', handleGameCode);
socket.on('unknownCode', handleUnknownCode);
socket.on('tooManyPlayers', handleTooManyPlayers);
socket.on('perks', function(perkData){
  alert(perkData);
    $('.perk1').append(perkData.perk1);
    $('.perk2').append(perkData.perk2);
});


const gameScreen = document.getElementById('gameScreen');
const initialScreen = document.getElementById('initialScreen');
const newGameBtn = document.getElementById('newGameButton');
const joinGameBtn = document.getElementById('joinGameButton');
const gameCodeInput = document.getElementById('gameCodeInput');
const gameCodeDisplay = document.getElementById('gameCodeDisplay');

newGameBtn.addEventListener('click', newGame);
joinGameBtn.addEventListener('click', joinGame);

$(joinGameBtn).on('click', function(){
  // alert($(gameCodeInput).val());
$(gameCodeDisplay).html($(gameCodeInput).val())
});
function newGame() {
  socket.emit('newGame');
  init();
}

function joinGame() {
  const code = gameCodeInput.value;
  socket.emit('joinGame', code);
  init();
}

let canvas, ctx;
let playerNumber;
let gameActive = false;

function init() {
  initialScreen.style.display = "none";
  gameScreen.style.display = "block";
  //
  // canvas = document.getElementById('canvas');
  // ctx = canvas.getContext('2d');
  //
  // canvas.width = canvas.height = 600;
  //
  // ctx.fillStyle = BG_COLOUR;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  //
  // document.addEventListener('keydown', keydown);

  $.getJSON('flags.json', function(data) {
    console.log(data);
    var randInt = Math.floor(Math.random() * (data.flags.length));
    var randInt2 = Math.floor(Math.random() * (data.flags.length));
      var randInt3 = Math.floor(Math.random() * (data.flags.length));
        var randInt4 = Math.floor(Math.random() * (data.flags.length));
    $('.flags >.card-section:first-child').append(data.flags[randInt].card);
    $('.flags >.card-section:nth-child(2)').append(data.flags[randInt2].card);
    $('.flags >.card-section:nth-child(3)').append(data.flags[randInt3].card);
    $('.flags >.card-section:last-child').append(data.flags[randInt4].card);
    // $('.card-section>p:nth-child(3)').append(data.flags[randInt2].card);

  });

  $.getJSON("perks.json",function(data){
      var randIn = Math.floor(Math.random() * (data.perks.length));
      var randIn2 = Math.floor(Math.random() * (data.perks.length));
      getPerks(randIn, randIn2, data);


      console.log(data);
      // alert('heree1');

  });



  // $.getJSON('perks.json', function(data) {
  // console.log(data);
  //
  // });

  gameActive = true;
}


function getPerks(randIn, randIn2, data){
  $('.perk3').append(data.perks[randIn].card);
  $('.perk4').append(data.perks[randIn2].card);
}

function paintGame(state) {

}

function handleInit(number) {
  playerNumber = number;
}

function handleGameState(gameState) {
  if (!gameActive) {
    return;
  }


  gameState = JSON.parse(gameState);
  requestAnimationFrame(() => paintGame(gameState));
}

function handleGameOver(data) {
  if (!gameActive) {
    return;
  }
  data = JSON.parse(data);

  gameActive = false;

  if (data.winner === playerNumber) {
    // alert('You Win!');
  } else {
    // alert('You Lose :(');
  }
}

function handleGameCode(gameCode) {
  gameCodeDisplay.innerText = gameCode;
}

function handleUnknownCode() {
  reset();
  alert('Unknown Game Code')
}

function handleTooManyPlayers() {
  reset();
  alert('This game is already in progress');
}

function reset() {
  playerNumber = null;
  gameCodeInput.value = '';
  initialScreen.style.display = "block";
  gameScreen.style.display = "none";
}
