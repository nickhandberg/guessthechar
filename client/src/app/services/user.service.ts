import { Injectable } from '@angular/core';
import { GameProgress } from '../interfaces/game-progress';
import { Stats } from '../interfaces/stats';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userData: User | undefined

    constructor() { }

    setUserData(progress: GameProgress): void {
        if(this.userData != undefined){
            this.userData!.gameProgress[progress.id] = progress;
            localStorage.setItem('gtcUser', JSON.stringify(this.userData));
        }
    }

    getUserData(index: number): GameProgress | undefined {
        this.getDataFromStorage();
        if(this.userData?.gameProgress[index] == undefined){
            this.setUserData({id: index, guesses: 0, correct: false, history: []});
        }
        return this.userData?.gameProgress[index];
    }

    getAllUserData(): User | undefined {
        this.getDataFromStorage();
        return this.userData;
    }

    getDataFromStorage(){
        const data = localStorage.getItem('gtcUser');
        if(!data){
            this.userData = {gameProgress: []};
            localStorage.setItem('gtcUser', JSON.stringify(this.userData));
        }
        else{
            this.userData = JSON.parse(data);
        }
    }

    getStats(): Stats | undefined {
        let stats: Stats = {played: 0, wins: 0, winPerc: 0, dist: [0,0,0,0,0,0]};
        this.userData?.gameProgress.forEach(gp => {
            if(gp?.correct){
                stats.played += 1;
                stats.wins += 1;
                stats.dist[gp.guesses-1] +=1;
            }
            else if(gp?.guesses >= 6){
                stats.played += 1;
            }
        });

        stats.winPerc = stats.wins == 0 ? 
            0 : 
            Math.floor((stats.wins / stats.played)*100);

        return stats;
    }
}