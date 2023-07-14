import { Routes } from "@angular/router";
import { GameComponent } from "./components/game/game.component";
import { PastGamesComponent } from "./components/past-games/past-games.component";

const routeConfig: Routes = [
    {
        path: '',
        component: GameComponent,
        title: 'GuessTheChar'
    },
    {
        path: 'past-games',
        component: PastGamesComponent,
        title: 'Past Games'
    }
]

export default routeConfig;