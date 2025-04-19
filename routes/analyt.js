const express = require('express');
const router = express.Router();
const { getAnalyticsOverview } = require('../controller/analyticsContr'); // ✅ correct import
router.get('/', getAnalyticsOverview);
module.exports = router;
async function loadAnalytics() {
    try {
      const res = await fetch('https://your-backend-url.onrender.com/api/analytics'); // Replace this URL
      const data = await res.json();
  
      document.getElementById('total-sessions').textContent = data.totalSessions;
      document.getElementById('energy-delivered').textContent = `${data.totalEnergy.toFixed(1)} kWh`;
      document.getElementById('revenue').textContent = `₹${data.totalRevenue.toFixed(2)}`;
      document.getElementById('peak-hour').textContent = data.peakHour;
  
      const container = document.getElementById('station-cards');
      container.innerHTML = '';
  
      data.stations.forEach(station => {
        container.insertAdjacentHTML('beforeend', `
          <div class="station-card">
            <h3>${station.name}</h3>
            <p><i class="fa-solid fa-chart-line"></i> Sessions: ${station.sessions}</p>
            <p><i class="fa-solid fa-bolt"></i> Energy: ${station.energy.toFixed(1)} kWh</p>
            <p><i class="fa-solid fa-coins"></i> Revenue: ₹${station.revenue.toFixed(2)}</p>
          </div>
        `);
      });
    } catch (error) {
      console.error('Error loading analytics:', error);
      alert('Failed to load analytics. Please check the server or try again later.');
    }
  }
  
  window.addEventListener('DOMContentLoaded', loadAnalytics);
  