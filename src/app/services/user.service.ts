import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GameProgress } from '../interfaces/game-progress';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userData: User | undefined

    constructor(private cookieService: CookieService) { }

    setUserData(progress: GameProgress): void {
        if(this.userData != undefined){
            this.userData!.gameProgress[progress.id] = progress;
            this.cookieService.set('gtcUser', JSON.stringify(this.userData));
        }
    }

    getUserData(index: number): GameProgress | undefined {
        const cookie = this.cookieService.get('gtcUser');
        if(!cookie){
            this.userData = {gameProgress: []};
            this.cookieService.set('gtcUser', JSON.stringify(this.userData));
        }
        else{
            this.userData = JSON.parse(cookie);
        }
        if(this.userData != undefined && this.userData?.gameProgress[index] == undefined){
            let gameProgress: GameProgress = {id: index, guesses: 0, correct: false, history: []}
            this.setUserData(gameProgress);
            this.userData!.gameProgress[index] = gameProgress;
        }
        return this.userData!.gameProgress[index];
    }
}
