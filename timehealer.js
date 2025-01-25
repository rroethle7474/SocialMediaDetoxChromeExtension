function updateRules() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    const startHour = 9;  // 9 AM
    const endHour = 17;   // 5 PM
  
    if (currentHour >= startHour && currentHour < endHour) {
      chrome.declarativeNetRequest.updateEnabledRulesets(
        { enableRulesetIds: ['ruleset_1'] },
        () => console.log('Redirect rules enabled')
      );
    } else {
      chrome.declarativeNetRequest.updateEnabledRulesets(
        { disableRulesetIds: ['ruleset_1'] },
        () => console.log('Redirect rules disabled')
      );
    }
  }
  
  // Initial check
  updateRules();
  
  // Check every hour
  setInterval(updateRules, 60 * 60 * 1000);
  