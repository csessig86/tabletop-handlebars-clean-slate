// Template sources and what DIVs they will appear in
var templates = [
  {
    "templatesource": "#sections-template",
    "templatehtml": "#content"
  }
];

// Load up our templates
function loadTemplates() {
  // This loop will spit out all the template
  for (num = 0; num < templates.length; ++num) {
    var source = $(templates[num]["templatesource"] + "").html();
    var handlebarscompile = Handlebars.compile(source);
  
    // Determine if we are rendering the template at the beginning
    // Or the end of the DIV
    $(templates[num]["templatehtml"] + "").append(handlebarscompile(context));
  }
};