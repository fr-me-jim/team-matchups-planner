import type { Player } from "src/interfaces/Player.interfaces";
import type { BalancedTeams, Team } from "src/interfaces/app.interfaces";

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
	maxPlayersPerTeam: number,
	playerIndex: number,
	currentTeams: Team[]
): BalancedTeams[] {
	if (playerIndex === players.length) {
		const skillGap = calcTeamsSkillGap(currentTeams);

		if (skillGap > 15) return [];
		return [{ teams: currentTeams, skillGap }];
	}

	const player = players[playerIndex];
	let matchups: BalancedTeams[] = [];

	// Add player if not reached max players for team
	currentTeams.forEach((team, index) => {
		if (team.length < maxPlayersPerTeam) {
			const newTeams = currentTeams.slice();
			newTeams[index] = team.concat(player);
			matchups = matchups.concat(
				generateTeams(players, maxPlayersPerTeam, playerIndex + 1, newTeams)
			);
		}
	});

	// Create new team with player
	if (currentTeams.length < players.length / maxPlayersPerTeam) {
		const newTeams = currentTeams.concat([[player]]);
		matchups = matchups.concat(
			generateTeams(players, maxPlayersPerTeam, playerIndex + 1, newTeams)
		);
	}

	return matchups;
}

export function generateBalancedTeamsService(
	players: Player[],
	maxPlayersPerTeam: number
): BalancedTeams[] {
	const balancedTeams = generateTeams(players, maxPlayersPerTeam, 0, []);
	return balancedTeams.sort((prev, post) => prev.skillGap - post.skillGap);
}
