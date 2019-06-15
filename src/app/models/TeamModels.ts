export interface TeamCreate {
    TeamName: string;
    LeagueID: number;
    ImageData: string;
}

export interface TeamDetail {
    TeamID: number;
    TeamName: string;
    LeagueID: number;
    LeagueName: string;
    ImageData: string;
    UserIsOwner: boolean;
}

export interface TeamEdit {
    TeamID: number;
    TeamName: string;
    LeagueID: number;
    ImageData: string;
}