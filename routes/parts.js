var express = require('express');
var Part = require('../models/Part');
var router = express.Router();
router.get('/', function (req, res, next) {
    var examplePart = new Part();
    examplePart.id = "1";
    examplePart.height = 2;
    examplePart.depth = 3;
    examplePart.description = "This is an example part";
    var data = [examplePart];
    res.json(data);
});
module.exports = router;
//# sourceMappingURL=parts.js.map