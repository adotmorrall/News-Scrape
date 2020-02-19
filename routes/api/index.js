var router = require('express');
var fetchRoutes = require('./fetch');
var noteRoutes = require('./notes');
var headlineRoutes = require('./headlines');
var clearRoutes = require('./clear');

router.use('/fetch', fetchRoutes);
router.use('/note', noteRoutes);
router.use('/headlines', headlineRoutes);
router.use('/clear', clearRoutes);

module.exports = router;
