import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getSingleAttraction = async (req, res) => {
    try{
        const attractionId = req.params.attractionId;
        const attraction = await knex("attractions")
        .where({ id: attractionId })
        .first();

        if (!attraction) {
            return res.status(404).json({ error: `attraction with id ${attractionId} not found` });
        }
        res.status(200).json(attraction);

    } catch (err) {
        res.status(500).json({ 
            error: `Failed to retrieve attraction with id :${req.params.attractionId}` })
    }

}

export {
    getSingleAttraction
}