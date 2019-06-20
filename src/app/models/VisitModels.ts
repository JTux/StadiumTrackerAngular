import { VisitorDetail } from './VisitorModels';
import { GameDetail } from './GameModels';

export interface VisitCreate {
	GotPin: boolean;
	TookPhoto: boolean;
	VisitorID: number;
	GameID: number;
}

export interface VisitDetail {
	VisitID: number;
	GotPin: boolean;
	TookPhoto: boolean;
	Visitor: VisitorDetail;
	Game: GameDetail;
}

export interface VisitEdit {
	VisitID: number;
	GotPin: boolean;
	TookPhoto: boolean;
	VisitorID: number;
	GameID: number;
}