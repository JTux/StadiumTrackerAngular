export interface TeamCreate {
    TeamName: string;
    LeagueID: number;
}

export interface TeamDetail {
    TeamID: number;
    TeamName: string;
    LeagueID: number;
    LeagueName: string;
    UserIsOwner: boolean;
}

export interface TeamEdit {
    TeamID: number;
    TeamName: string;
    LeagueID: number;
}