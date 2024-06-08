// this just serves as a file to test if an api is connecting correctly

const express = require('express');
const router = express.Router();


router.get("/testAPI", (req, res) => {
    const resObject = {
        message: "Test Api is working"
    }
    res.send(resObject)
});

module.exports = router;