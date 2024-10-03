import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getCities = async (req, res) => {
    try {
        const allCities = await knex('cities')
            .select('id', 'city_name', 'country', 'city_image_path')
        res.status(200).json(allCities);
    } catch (err) {
        res.status(500).json({ 
            error: "Failed to retrieve all cities" })
    }
}

const getSingleCity = async (req, res) => {
    try{
        const cityId = req.params.cityId;
        const city = await knex("cities")
        .select('id', 'city_name', 'country')
        .where({ id: cityId })
        .first();

        if (!city) {
            return res.status(404).json({ error: `city with id ${cityId} not found` });
        }
        res.status(200).json(city);

    } catch (err) {
        res.status(500).json({ 
            error: `Failed to retrieve city with id :${req.params.cityId}` })
    }

}

const getAttractionsWithCityId = async (req, res) => {
    try{
        const attractionList = await knex("attractions")
        .select("attractions.*", "cities.city_name as city_name")
        .leftJoin("cities", "attractions.city_id", "cities.id")
        .where({ city_id: req.params.cityId, })

        if (attractionList.length === 0) {
            res.status(404).json({
                error: `No attractions found for city with id: ${req.params.cityId}`,
            });
        } else {
            res.status(200).json(attractionList)
        }

    } catch (err) {
        res.status(500).json({
            error: `Error getting attraction list given city id:${req.params.cityId} from database`
        })

    }
}

export {
    getCities,
    getSingleCity,
    getAttractionsWithCityId
}
