import { GameState } from 'src/app/game/store/game-state';
import { Game } from '../game';


export class GameStateFactory {


    static createDefaultState(): GameState {

        let state = new GameState({cols: 1, rows: 1}, 1);

        return state;
    }

    static createFromGame(game: Game): GameState {
        let state = new GameState(game.getBoardSize(), 1);

        return state;
    }

}


