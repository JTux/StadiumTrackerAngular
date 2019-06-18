import { StadiumDetail } from './StadiumModels';
import { TeamDetail } from './TeamModels';

export interface GameCreate {
	DateOfGame: Date;
	StadiumID: number;
	HomeTeamID: number;
	AwayTeamID: number;
	HomeTeamWon: boolean;
}

export interface GameDetail {
	GameID: number;
	DateOfGame: Date;
	Stadium: StadiumDetail;
	HomeTeam: TeamDetail;
	AwayTeam: TeamDetail;
	HomeTeamWon: boolean;
	UserIsOwner: boolean;
}

export interface GameListItem {
	GameID: number;
	DateOfGame: Date;
	StadiumID: number;
	StadiumName: string;
	HomeTeamID: number;
	HomeTeamName: string;
	AwayTeamID: number;
	AwayTeamName: string;
	HomeTeamWon: boolean;
	UserIsOwner: boolean;
}

export class GameEdit {

	constructor(gameID: number, homeTeamID: number, awayTeamID: number, stadiumID: number, homeTeamWon: boolean, dateOfGame: Date) {
		this.GameID = gameID;
		this.HomeTeamID = homeTeamID;
		this.AwayTeamID = awayTeamID;
		this.StadiumID = stadiumID;
		this.HomeTeamWon = homeTeamWon;
		this.DateOfGame = dateOfGame;
	 }

	GameID: number;
	DateOfGame: Date;
	StadiumID: number;
	HomeTeamID: number;
	AwayTeamID: number;
	HomeTeamWon: boolean;
}