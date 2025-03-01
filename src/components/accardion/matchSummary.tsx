import styled from "styled-components";

const MatchSummaryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-family: Arial, sans-serif;
`;

const PlayerCard = styled.div`
    display: flex;
    align-items: center;
    background: #101318;
    padding: 10px;
    border-radius: 8px;
    margin: 5px;
    flex: 1;
    min-width: 150px;
`;

const MatchDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    background: #101318;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    font-weight: bold;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const PlayerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MatchSummary = () => {
    return (
        <MatchSummaryContainer>
            <div>
                <div style={{ display: "flex" }}>
                    <PlayerCard>
                        <Avatar src="/icons/avatar_global.png" alt="User 1" />
                        <PlayerInfo>
                            <span>User 1</span>
                            <span>Убийств: 4</span>
                        </PlayerInfo>
                    </PlayerCard>

                    <PlayerCard>
                        <Avatar src="/icons/avatar_global.png" alt="User 2" />
                        <PlayerInfo>
                            <span>User 2</span>
                            <span>Убийств: 4</span>
                        </PlayerInfo>
                    </PlayerCard>

                    <PlayerCard>
                        <Avatar src="/icons/avatar_global.png" alt="User 3" />
                        <PlayerInfo>
                            <span>User 3</span>
                            <span>Убийств: 4</span>
                        </PlayerInfo>
                    </PlayerCard>
                </div>

                <MatchDetails>
                    <span>Points: +50</span>
                    <span>Место:: 7</span>
                    <span>Всего убийств:: 12</span>
                </MatchDetails>
            </div>
        </MatchSummaryContainer>
    );
};

export default MatchSummary;
