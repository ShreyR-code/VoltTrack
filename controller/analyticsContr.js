const Station = require('../models/Station');

exports.getAnalyticsOverview = async (req, res) => {
  try {
    const stations = await Station.find();
    let totalSessions = 0, totalEnergy = 0, totalRevenue = 0;

    stations.forEach(s => {
      totalSessions += s.sessions;
      totalEnergy += s.energy;
      totalRevenue += s.revenue;
    });

    res.json({
      totalSessions,
      totalEnergy,
      totalRevenue,
      peakHour: "6 PM - 8 PM",
      stations
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
