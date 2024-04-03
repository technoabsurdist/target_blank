
document.addEventListener('DOMContentLoaded', function () {
    var toggleSwitch = document.getElementById('toggleSwitch');

    chrome.storage.sync.get('isEnabled', function(data) {
        toggleSwitch.checked = data.isEnabled !== false;
    });

    toggleSwitch.addEventListener('click', function () {
        var isEnabled = toggleSwitch.checked;
        chrome.storage.sync.set({isEnabled: isEnabled});
    });
});

