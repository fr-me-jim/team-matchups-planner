import { generateAllMatchupsService } from "../services/MatchMaking.service";

// interfaces
import type Player from "../models/Player.model";

export const useGenerateTeams = (players: Player[]) => {
    return generateAllMatchupsService(players);
} 