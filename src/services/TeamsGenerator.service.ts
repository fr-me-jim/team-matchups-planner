import { shuffle } from "lodash";

// interfaces
import type { Player } from "src/interfaces/Player.interfaces";
import type { BalancedTeams, Team } from "src/interfaces/Tools.interfaces";

function calcTeamsSkillGap(teams: Team[]): number {
	const teamSkillLevels = teams.map((team) =>
		team.reduce((total, player) => total + player.skillLevel, 0)
	);
	const maxSkillLevel = Math.max(...teamSkillLevels);
	const minSkillLevel = Math.min(...teamSkillLevels);

	return maxSkillLevel - minSkillLevel;
}

function generateTeams(
	players: Player[],
	maxSkillGap: number,
	maxPlayersPerTeam: number,
	playerIndex: number,
	currentTeams: Team[]
): BalancedTeams[] {
	if (playerIndex === players.length) {
		const skillGap = calcTeamsSkillGap(currentTeams);

		if (maxSkillGap && skillGap > maxSkillGap) return [];
		return [{ teams: currentTeams, skillGap }];
	}

	const player = players[playerIndex];
	let balancedTeams: BalancedTeams[] = [];

	// Add player if not reached max players for team
	currentTeams.forEach((team, index) => {
		if (team.length < maxPlayersPerTeam) {
			const newTeams = currentTeams.slice();
			newTeams[index] = team.concat(player);
			balancedTeams = balancedTeams.concat(
				generateTeams(
					players,
					maxSkillGap,
					maxPlayersPerTeam,
					playerIndex + 1,
					newTeams
				)
			);
		}
	});

	if (balancedTeams.length > 20) return balancedTeams;

	// Create new team with player
	if (currentTeams.length < players.length / maxPlayersPerTeam) {
		const newTeams = currentTeams.concat([[player]]);
		balancedTeams = balancedTeams.concat(
			generateTeams(
				players,
				maxSkillGap,
				maxPlayersPerTeam,
				playerIndex + 1,
				newTeams
			)
		);
	}

	return balancedTeams;
}

export function generateBalancedTeamsService(
	players: Player[],
	maxSkillGap: number,
	maxPlayersPerTeam: number
): BalancedTeams[] {
	const balancedTeams = generateTeams(
		shuffle(players),
		maxSkillGap,
		maxPlayersPerTeam || players.length / 2,
		0,
		[]
	);
	return balancedTeams.sort((prev, post) => prev.skillGap - post.skillGap);
}
