const express = require("express");
const router = express.Router();
const { handleChatMessage, handleSendEmail } = require("../controllers/chatController");

// POST /api/chat
router.post("/chat", handleChatMessage);

// POST /api/send-email (Ready for your email implementation)
router.post("/send-email", handleSendEmail);

module.exports = router;