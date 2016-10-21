    import { Component } from '@angular/core';
    // import { AuthService } from ''

    @Component({
      selector: 'game-page',
      templateUrl: 'main/routes/game/game.tpl.html',
      styleUrls: ['main/routes/game/game.tpl.css']
    })
    export class GameComponent { 

      users = [
        {
          username: 'palingram',
          avatarImg: 'resources/images/chosen/E01.png',
          role: 'CZAR',
          admin:true,
          roundsWon: 2
        },
        {
          username: 'Michael',
          avatarImg: 'resources/images/chosen/F01.png',
          role: 'player',
          roundsWon: 1
        },
        {
          username: 'Daniel',
          avatarImg: 'resources/images/chosen/J01.png',
          role: 'player',
          roundsWon: 1
        },
        {
          username: 'Fortune',
          avatarImg: 'resources/images/chosen/M05.png',
          role: 'player',
          roundsWon: 2
        },
      ];

      answerCards = [
          'Iraqi\'s baby dicks',
          'Four bull dozers on skates',
          'planets minimized by shrink rays',
          'The wearers teeth',
          'Iraqi\'s baby dicks',
          'Four bull dozers on skates',
          'planets minimized by shrink rays',
          'The wearers teeth',
          'Iraqi\'s baby dicks',
          'Four bull dozers on skates'
      ];

      questionCards = [
        'What\'s your name',
        'Why are your toes green',
        'Where did you grow up'
      ];
      
      currentQIndex = 0;

      
      //
      recentlyAddedAnswer: string;

      //
      question: string;

      //
      answerSelected(card:string) {
        //@TODO emit this event onto the socket connection
        this.recentlyAddedAnswer = card;
      }

      //
      selectAQuestion() {
        this.question = this.questionCards[this.currentQIndex++];
        if(this.currentQIndex >= this.questionCards.length){
          this.currentQIndex = 0;
        }
      }

    }