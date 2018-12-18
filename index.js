// Put your JavaScript in this file.
'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

      // create a global variable representing the board
      var board = document.getElementById("board");  // only 1 board, use ID

      var player1Pieces = new Array;
      var player2Pieces = new Array;

      player1Pieces.push({type: "Pawn", square:0, symbol: "P"});
      player1Pieces.push({type: "Pawn", square:1, symbol: "P"});
      player1Pieces.push({type: "Pawn", square:2, symbol: "P"});
      player1Pieces.push({type: "Pawn", square:3, symbol: "P"});
      player1Pieces.push({type: "Pawn", square:4, symbol: "P"});

      player2Pieces.push({type: "Pawn", square:20, symbol: "P"});
      player2Pieces.push({type: "Pawn", square:21, symbol: "P"});
      player2Pieces.push({type: "Pawn", square:22, symbol: "P"});
      player2Pieces.push({type: "Pawn", square:23, symbol: "P"});
      player2Pieces.push({type: "Pawn", square:24, symbol: "P"});

      // get the array of squares from the HTML page
      var squares = document.querySelectorAll('.square');

      var i;

      // populate the board with player 1's pieces
      for (i=0; i<player1Pieces.length;i++)
      {
          squares[player1Pieces[i].square].innerHTML = player1Pieces[i].symbol;
      }

      // populate the board with player 2's pieces
      for (i=0; i<player2Pieces.length;i++)
      {
          squares[player2Pieces[i].square].innerHTML = player2Pieces[i].symbol;
      }

// --- Click event on a board, but the actual event is on a square
      board.addEventListener('click', function(e)
      {
        // e is the event, e.target is the square that was clicked on
        // Show the user what is in the square they clicked on
        alert(e.target.innerHTML);

      });
