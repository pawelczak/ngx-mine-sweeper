import { GameState } from './game-state';
import { Game } from '../game';
import { GameFactory } from '../game.factory';


export class GameStateFactory {


    static createDefaultState(): GameState {

        const defaultGame = GameFactory.createDefaultGame();

        return new GameState(defaultGame.board, defaultGame.countMines());
    }

    static createFromGame(game: Game): GameState {
        let state = new GameState(game.board, game.countMines());

        return state;
    }

}
