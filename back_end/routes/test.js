const express = require('express');
const router = express.Router();


router.get("/testAPI", (req, res) => {
    const resObject = {
        message: "Test Api is working"
    }
    res.send(resObject)
});

module.exports = router;