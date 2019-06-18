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

export interface GameEdit {
	GameID: number;
	DateOfGame: Date;
	StadiumID: number;
	HomeTeamID: number;
	AwayTeamID: number;
	HomeTeamWon: boolean;
}