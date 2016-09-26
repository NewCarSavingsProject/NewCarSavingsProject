
/*$( "#ddown" )
  .change(function () {
    var str = "";
    $( "#camry :selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#result" ).text( str );
  })
  .change(); */
/*
 	var vehData,
    vehData = $( "#data-bound" )[ 0 ];
  switch ( $( "data-bound" ).index( this ) ) {
  case 0 :
    vehData = jQuery.data( "#data-bound", "blah" );
    break;
  case 1 :
    jQuery.data( div, "blah", "hello" );
    vehData = "Stored!";
    break;
  case 2 :
    jQuery.data( div, "blah", 86 );
    vehData = "Stored!";
    break;
  case 3 :
    jQuery.removeData( div, "blah" );
    vehData = "Removed!";
    break;
  }
*/

var div = $( "#data-bound" )[ 0 ];
jQuery.data( div, "test", {
  first: 16,
  last: "pizza!"
});

jQuery.data(div, "CAMRY 2.0G (A)", {
	periodic: 10000,
	preventive: 213123
});

var	vehix;
$("#ddown p a").click( function() {
    var vehSelected = $(this).text();
    vehix = vehSelected;
    $("#result").text(vehSelected);
	}
);

$("#ddownAge p a").click( function() {

	$("#vehImg").remove("img");
    var ageSelected = $(this).text();
    var age = parseInt(ageSelected);
    $("#AgeResult").text("Current Age: " + ageSelected + " years");
    $("#periodic").text("Periodic           ");
    $("#preventive").text("Preventive ");
	$("#savingsResult").text("Your Expenditure for the next " + (10-age) + " years is ");
	$("#data-bound div h4 span").text("             RM ");
	$("#data-bound div h4 span").append(jQuery.data(div,"CAMRY 2.0G (A)".periodic));
	$("#finalSavingsResult").text("Therefore your final savings would be:  ");

	if ((vehix === "CAMRY 2.0G (A)")) {
		$("#vehImg").prepend('<img style="float: left" id="theImg" src="/img/hybrid-le.jpg" />');
	} /*
	else if (vehSelected == "Vios NCP93") {
		$('#vehImg').prepend('<img id="theImg" src="/img/hybrid-le.jpg" />');
	}
	else (vehSelected == "HILUX DOUBLE CAB 2.5 AT") {
		$('#vehImg').prepend('<img id="theImg" src="/img/hybrid-le.jpg" />');
	} */

});

var preventiveItems = [
  {name: "WAB",       value:  91},
  {name: "A/C",       value:  210},
  {name: "Battery",   value: 297},
  {name: "Shock A",   value: 2776},
  {name: "Brakes",    value: 539},
  {name: "Wiper",     value: 332},
  {name: "V-belt",    value: 526},
  {name: "Brakes",    value: 539},
  {name: "Tyre",      value: 1496}
];

$("#table-button").click( function() {
	$("#Data-testing").data("Locke");
});


/* Associate data to specific DOM-elements */


$("#clearForm").click( function() {
	location.reload();
})


