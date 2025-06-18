const express = require("express");
const router = express.Router();

const challenge1Controller = require('../controllers/challenge1.controller');
const challenge2Controller = require('../controllers/challenge2.controller');
const challenge3Controller = require('../controllers/challenge3.controller');
const challenge4Controller = require('../controllers/challenge4.controller');
const challenge5Controller = require('../controllers/challenge5.controller');

// Dashboard Route
router.get("/", (req, res) => {
  res.render("dashboard");
});

router.get('/challenge1', challenge1Controller.renderChallenge);
router.post('/challenge1', challenge1Controller.handlePrompt);
router.post('/challenge1/reset', challenge1Controller.resetSession);

router.get('/challenge2', challenge2Controller.renderChallenge);
router.post('/challenge2', challenge2Controller.handlePrompt);
router.post('/challenge2/reset', challenge2Controller.resetSession);

router.get('/challenge3', challenge3Controller.renderChallenge);
router.post('/challenge3', challenge3Controller.handlePrompt);
router.post('/challenge3/reset', challenge3Controller.resetSession);

router.get('/challenge4', challenge4Controller.renderChallenge);
router.post('/challenge4', challenge4Controller.handlePrompt);
router.post('/challenge4/reset', challenge4Controller.resetSession);

router.get('/challenge5', challenge5Controller.renderChallenge);
router.post('/challenge5', challenge5Controller.handlePrompt);
router.post('/challenge5/reset', challenge5Controller.resetSession);

module.exports = router;
