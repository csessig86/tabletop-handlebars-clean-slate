#Make your page static

- This converts takes your data from the Google spreadsheet makes JSON out of it.

 1. Open up Firefox and inspect console with Firebug. Then run console.log(JSON.stringify(context))
 
 2. Copy all the code that is spit out
 
 3. Create a new file in the js folder called notabletop.js, create a variable called context_no_tabletop and paste in the JSON you showed on the console.
 
 4. Replace this (Line 103) in index.html:
 <script type="text/javascript" src="js/loadpagetabletop.js"></script>
 With this:
 <script type="text/javascript" src="js/notabletop.js"></script>

 5. Change all references to "context" in templates.js to "context_no_tabletop". Right now, there is only one reference on Line 18.

 6. Add:
loadTemplates();
 To the bottom of your templates.js file