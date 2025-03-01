export interface Player {
    kills: number;
    username: string;
}

export interface Team {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
}

export enum Status {
    live = "Ongoing",
    finished = "Finished",
    scheduled = "Scheduled",
    matchPreparing = "Match-preparing",
}
export interface Match {
    awayScore: number;
    awayTeam: Team;
    homeScore: number;
    homeTeam: Team;
    status: Status;
    time: string;
    title: string;
}

export interface MatchesResponse {
    data: {
        matches: Match[];
        ok: boolean;
    };
}
