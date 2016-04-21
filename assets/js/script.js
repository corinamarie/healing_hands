$(document).ready(function(){

  var modalHeading = $("#myModalHeading");
  var modalDescription = $("#myModalDescription");

  $(".services-category").on("click", function(e) {
    console.log(e);
    var service = $(e.target);
    var heading = service.text();
    var description = service.parent().next().text();
    modalHeading.text(heading);
    modalDescription.text(description);

  });

  // $('a[data-toggle="modal"]').on("click", function(e) {
  //   // var heading = $($($(this).children()[0]).children()[0]).text();
  //   // var description = $($(this).children()[1]).text();
  //   // modalHeading.text(heading);
  //   // modalDescription.text(description);
  //     //alert("john");
  //     console.log($(this).attr("data-content"));
  //     e.preventDefault();
  // })

});
