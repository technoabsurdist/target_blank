
chrome.storage.sync.get('isEnabled', function(data) {
    if (data.isEnabled !== false) { 
        document.querySelectorAll('a').forEach(link => {
            link.target = '_blank';
        });
    }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (var key in changes) {
        if (key === 'isEnabled') {
            window.location.reload();
        }
    }
});

