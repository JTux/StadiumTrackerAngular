export interface LeagueCreate {
    LeagueName: string;
}

export interface LeagueDetail {
    LeagueID: number;
    LeagueName: string;
    UserIsOwner: boolean;
    MemberTeams: LeagueDetail[];
}

export interface LeagueEdit {
    LeagueID: number;
    LeagueName: string;
}
