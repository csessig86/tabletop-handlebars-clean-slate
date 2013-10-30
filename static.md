#Make your page static

- This is an option if you want to store your data from your Google spreadsheet locally instead of fetching it from Google.

 1. Open up Firefox and inspect console with Firebug. Then run console.log(JSON.stringify(context))
 Note: You can space out your JSON output by typing in console.log(JSON.stringify(context, null, 4))
 
 2. Copy all the code that is spit out
 
 3. Create a new file in the js folder called notabletop.js, create a variable called context and paste in the JSON you were shown on the console.
 
 4. Replace this (Line 103) in index.html:
 ```html
 <script type="text/javascript" src="js/loadpagetabletop.js"></script>
 ```
 With this:
 ```html
 <script type="text/javascript" src="js/notabletop.js"></script>
 ```

 5. Add:
loadTemplates();
 To the bottom of your index.html file