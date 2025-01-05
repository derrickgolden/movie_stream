"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEpisodeData = void 0;
const { pool } = require("../../../mysqlSetup");
const addEpisodeData = async (episodeInfo) => {
    const { epidodeDetails, season } = episodeInfo;
    const { season_id } = season;
    const { episode_name, episode_order, url, episode_no, id, overview, runtime, season_no, still_path, isEdit } = epidodeDetails;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        if (isEdit) {
            // update
            const { episode_id } = epidodeDetails;
            var [res] = await connection.query(`
                    UPDATE episodes
                    SET episode_name = ?, episode_order = ?, url = ?
                    WHERE episode_id = ?
                `, [episode_name, episode_order, url, episode_id]);
        }
        else {
            // Insert movies
            var [res] = await connection.query(`
                    INSERT INTO episodes (season_id, episode_name, episode_order, url, episode_no, id, overview, runtime, season_no, thumbnail_path)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `, [season_id, episode_name, episode_order, url, episode_no, id, overview, runtime, season_no, still_path]);
        }
        // const movie_id = res.insertId;
        await connection.commit();
        connection.release();
        return {
            success: true,
            msg: isEdit ? `Episode ${episode_name} update successful` : `Episode ${episode_name} Info Added`,
            details: [{ season_id, episode_name, episode_no }]
        };
    }
    catch (error) {
        console.error('Error:', error.message);
        connection.release();
        if (error.sqlMessage) {
            return { success: false, msg: error.sqlMessage };
        }
        else {
            return { success: false, msg: error.message };
        }
    }
};
exports.addEpisodeData = addEpisodeData;
module.exports = {
    addEpisodeData: exports.addEpisodeData,
};
//# sourceMappingURL=addEpisodeData.js.map