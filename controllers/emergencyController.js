export const sendSOS = async (req, res) => {
  try {
    const user = req.user;

    // later integrate SMS / FCM
    res.json({
      status: "SOS triggered",
      user: user.uid,
      time: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: "SOS failed" });
  }
};
