import styled from "styled-components";
import { Match } from "../../lib/types";

const MatchSummaryContainer = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 10px;
    gap: 32px;
    color: white;
    font-family: Arial, sans-serif;
`;

const PlayerCard = styled.div`
    display: flex;
    align-items: center;
    background: #101318;
    padding: 10px;
    border-radius: 8px;
    flex: 1;
    min-width: 286px;
    @media (max-width: 600px) {
        min-width: 124px;
        flex-wrap: wrap;
        justify-content: center;
        padding: 7px 12px;
    }
    @media (max-width: 470px) {
        min-width: 100%;
    }
`;

const MatchDetails = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    background: #101318;
    padding: 20px 24px;
    border-radius: 8px;
    font-weight: bold;
`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
    @media (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const PlayerInfo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;
const PlayerCardCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
    @media (max-width: 600px) {
        flex-wrap: nowrap;
    }
    @media (max-width: 470px) {
        flex-wrap: wrap;
    }
`;

const StyledParagraph = styled.p`
    color: #fafafa66;
    font-size: 14px;
`;

const StyledNumber = styled.span`
    color: #ffffff;
    font-size: 16px;
    margin-left: 8px;
    font-weight: 600;
`;

const TeamVsTeam = styled.div`
    width: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
        display: flex;
    }
`;

const LineComponent = styled.div`
    width: 46%;
    height: 1px;
    background-color: #313a47;
`;

interface MatchSummaryProps {
    match: Match;
}

const MatchSummary: React.FC<MatchSummaryProps> = ({ match }) => {
    return (
        <MatchSummaryContainer>
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                }}
            >
                <PlayerCardCont>
                    {match.homeTeam.players.map((player) => (
                        <PlayerCard>
                            <PlayerInfo>
                                <Avatar
                                    src="/icons/avatar_global.png"
                                    alt="User 1"
                                />
                                <span>{player.username}</span>
                            </PlayerInfo>
                            <StyledParagraph>
                                Убийств:
                                <StyledNumber>{player.kills}</StyledNumber>
                            </StyledParagraph>
                        </PlayerCard>
                    ))}
                </PlayerCardCont>
                <MatchDetails>
                    <StyledParagraph>
                        Points:{" "}
                        <StyledNumber>+{match.homeTeam.points}</StyledNumber>
                    </StyledParagraph>
                    <StyledParagraph>
                        Place:{" "}
                        <StyledNumber>{match.homeTeam.place}</StyledNumber>
                    </StyledParagraph>
                    <StyledParagraph>
                        Total kills:{" "}
                        <StyledNumber>
                            {match.homeTeam.total_kills}
                        </StyledNumber>
                    </StyledParagraph>
                </MatchDetails>
            </div>
            <TeamVsTeam>
                <LineComponent />
                <span style={{ color: "#313a47" }}>VS</span>
                <LineComponent />
            </TeamVsTeam>
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                }}
            >
                <PlayerCardCont>
                    {match.awayTeam.players.map((player, i) => (
                        <PlayerCard key={player.username + i}>
                            <PlayerInfo>
                                <Avatar
                                    src="/icons/avatar_global.png"
                                    alt="User 1"
                                />
                                <span>{player.username}</span>
                            </PlayerInfo>
                            <StyledParagraph>
                                Убийств:
                                <StyledNumber>{player.kills}</StyledNumber>
                            </StyledParagraph>
                        </PlayerCard>
                    ))}
                </PlayerCardCont>
                <MatchDetails>
                    <StyledParagraph>
                        Points:{" "}
                        <StyledNumber>+{match.awayTeam.points}</StyledNumber>
                    </StyledParagraph>
                    <StyledParagraph>
                        Place:{" "}
                        <StyledNumber>{match.awayTeam.place}</StyledNumber>
                    </StyledParagraph>
                    <StyledParagraph>
                        Total Kills:
                        <StyledNumber>
                            {match.awayTeam.total_kills}
                        </StyledNumber>
                    </StyledParagraph>
                </MatchDetails>
            </div>
        </MatchSummaryContainer>
    );
};

export default MatchSummary;
