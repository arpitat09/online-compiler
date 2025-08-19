const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const fs = require('fs');

router.post('/', (req, res) => {
    const { code } = req.body;

    // Save code to a temporary JS file
    const filePath = 'tempCode.js';
    fs.writeFileSync(filePath, code);

    // Execute the JS code
    exec(`node ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            return res.json({ output: stderr || error.message });
        }
        res.json({ output: stdout });
    });
});

module.exports = router;
