import type { Player } from "src/interfaces/Player.interfaces";
import type { Team, MatchUp } from "src/interfaces/app.interfaces";

function calcMatchSkillGap(firstTeam: Team, secondTeam: Team): number {
	const firstTeamSkillGap = firstTeam.reduce(
		(acc, player) => acc + player.skillLevel,
		0
	);
	const secondTeamSkillGap = secondTeam.reduce(
		(acc, player) => acc + player.skillLevel,
		0
	);
	return Math.abs(firstTeamSkillGap - secondTeamSkillGap);
}

function teamMatchMaking(
	players: Player[],
	firstTeam: Team,
	secondTeam: Team,
	index: number,
	matchups: MatchUp[]
) {
	if (index === players.length) {
		// Check that the teams have at least players.length / 2 each.
		const minPlayersPerTeam = Math.floor(players.length / 2);
		if (
			firstTeam.length >= minPlayersPerTeam &&
			secondTeam.length >= minPlayersPerTeam
		) {
			matchups.push({
				matchup: [firstTeam.slice(), secondTeam.slice()],
				skillGap: calcMatchSkillGap(firstTeam, secondTeam),
			});
		}
		return;
	}

	const currentPlayer = players[index];

	// Try to add the player to the first team
	firstTeam.push(currentPlayer);
	teamMatchMaking(players, firstTeam, secondTeam, index + 1, matchups);
	firstTeam.pop();

	// Try to add the player to the second team
	secondTeam.push(currentPlayer);
	teamMatchMaking(players, firstTeam, secondTeam, index + 1, matchups);
	secondTeam.pop();
}

export function generateAllMatchupsService(players: Player[]): MatchUp[] {
	const matchups: MatchUp[] = [];
	teamMatchMaking(players, [], [], 0, matchups);
	return matchups;
}

// Use Case:
// const totalPlayers = 12;

// let players: Player[] = [];
// for(let i = 0; i < totalPlayers; i++) {
//     players.push({
//         name:`player ${i}`,
//         skillLevel: Math.floor(Math.random() * 5) + 1
//     });
// }

// const equipos = generateAllMatchups(players);
// console.log(equipos.sort((prev, post) => prev.skillGap - post.skillGap));
