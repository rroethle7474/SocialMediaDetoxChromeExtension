document.getElementById('settingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const startHour = document.getElementById('startHour').value;
    const endHour = document.getElementById('endHour').value;
    const redirectUrl = document.getElementById('redirectUrl').value;
  
    chrome.storage.sync.set({
      startHour: startHour,
      endHour: endHour,
      redirectUrl: redirectUrl
    }, function() {
      alert('Settings saved!');
    });
  });
  