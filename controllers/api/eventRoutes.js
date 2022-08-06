const router = require("express").Router();
const { Event } = require("../../models");


router.post("/event", async (req, res) => {
    try {
        const eventData = await Event.create({
            ...req.body,

        });
        res.status(200).json(eventData);

    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
