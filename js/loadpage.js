// Page information that we will build on
var context = {
  "body": []
};

// Template sources and what DIVs they will appear in
var templates = [
  {
    "templatesource": "#sections-template",
    "templatehtml": "#content"
  }
];

// Here's the Tabletop feed
// First we'll initialize Tabletop with our spreadsheet
var jqueryNoConflict = jQuery;
jqueryNoConflict(document).ready(function(){
  initializeTabletopObject('0As3JvOeYDO50dHJITmhNWXRUc3FYMFI4emZhWTU0SlE');
});

// Pull data from Google spreadsheet
// And push to our pullDataFromTabletop function
function initializeTabletopObject(dataSpreadsheet){
  Tabletop.init({
    key: dataSpreadsheet,
    callback: pullDataFromTabletop,
    debug: false
  });
}

// This function gets our data from our spreadsheet
function pullDataFromTabletop(tabletopData, tabletop) {
  // console.log(tabletop.key);
  dataTabletop = tabletopData;
  // Go through our Google spreadsheet
  // Stored in tabletopData variable
  // tabletopData = Worksheet
  for (num in tabletopData) {
    for (var num_elems = 0; num_elems < tabletopData[num].elements.length; num_elems++) {
      context["body"].push(tabletopData[num].elements[num_elems]);
    }
  }
  startupApp();
};

// Load templates
function startupApp() {
  // This loop will spit out all the template
  for (num = 0; num < templates.length; ++num) {
    var source = $(templates[num]["templatesource"] + "").html();
    var handlebarscompile = Handlebars.compile(source);
  
    // Determine if we are rendering the template at the beginning
    // Or the end of the DIV
    $(templates[num]["templatehtml"] + "").prepend(handlebarscompile(context));
  }
  // If you want to see what context looks like:
  // console.log(context);
};