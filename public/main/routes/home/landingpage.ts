    import { Component } from '@angular/core';
    @Component({
      selector: 'landing-page',
      template: 
      `
         <div class="ui large top fixedmenu" >
            <div class="ui container">
              <a class="header item" routerLinkActive="active" routerLink="/home">Project ginsan</a>
              <a class="header item" routerLinkActive="active" routerLink="/auth">auth route</a>
              <a class="header item" routerLinkActive="active" routerLink="/dashboard">dashboard route</a>
              <a class="header item" routerLinkActive="active" routerLink="/game">game screen</a>
            </div>
         </div>

        <div class="ui main text container" style="padding-top:15em; height:100%">
          <div class="ui text container">
            <h1 class="ui header">
              Imagine-a-Game where
            </h1>
            <h2>you laugh all the time.</h2>
            <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
          </div>
        </div>

        <div class="ui inverted vertical footer segment" style='padding:4em 2em'>
            <div class="ui container">
            <div class="ui stackable inverted divided equal height stackable grid">
                <div class="three wide column">
                <h4 class="ui inverted header">About</h4>
                <div class="ui inverted link list">
                    <a href="#" class="item">Sitemap</a>
                    <a href="#" class="item">Contact Us</a>
                    <a href="#" class="item">Religious Ceremonies</a>
                    <a href="#" class="item">Gazebo Plans</a>
                </div>
                </div>
                <div class="three wide column">
                <h4 class="ui inverted header">Services</h4>
                <div class="ui inverted link list">
                    <a href="#" class="item">Banana Pre-Order</a>
                    <a href="#" class="item">DNA FAQ</a>
                    <a href="#" class="item">How To Access</a>
                    <a href="#" class="item">Favorite X-Men</a>
                </div>
                </div>
                <div class="seven wide column">
                <h4 class="ui inverted header">Footer Header</h4>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
            </div>
            </div>
        </div>
      `
    })
    export class LandingPage {

    }