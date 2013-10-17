#Clean-slate

This is my clean-slate setup for when I'm creating a project where the data will be stored in a Google spreadsheet, pulled in using Tabletop.js and templated using Handlebars.js. The project is styled using Bootstrap. It also has a header with the Courier logo and share buttons on the page. You'll want to edit/delete those, as well as make sure your metadata is accurate.

Uses:
- jQuery
- Tabletop.js
- Handlebars.js
- Bootstrap
- Reset.CSS

The Google spreadsheet used in this example is:
[https://docs.google.com/spreadsheet/pub?key=0As3JvOeYDO50dHJITmhNWXRUc3FYMFI4emZhWTU0SlE&output=html](https://docs.google.com/spreadsheet/pub?key=0As3JvOeYDO50dHJITmhNWXRUc3FYMFI4emZhWTU0SlE&output=html)

You'll want to make sure you hook up to your spreadsheet by changing line 19 in loadpage.js.

Right now, all the data is pushed into the context variable. The template is currently pulling in just the values for the "race" column. The template starts on line 49 of index.html

The script.js file is empty and eagerly awaiting some awesome JS code.

