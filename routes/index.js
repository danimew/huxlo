var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    console.log('in get index');
    res.sendfile('views/index.html');
});
module.exports = router;
//# sourceMappingURL=index.js.map