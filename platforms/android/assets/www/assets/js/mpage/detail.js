$(window).load(function(){
	var rtl = false; // Use RTL
	initializeOwl(rtl);
});

	
	 
 $(function(){
	var rtl = false; // Use RTL
	initializeOwl(rtl);
	
	jssor_1_slider_init();

});

$(document).on('ready', function() {
	$("#upload").fileinput({
		showUpload: false,
		showCaption: false,
		browseClass: "btn btn-primary btn-lg",
		fileType: "any",
		browseLabel: "Tải hình ảnh",
		previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
		allowedFileExtensions: ["jpg", "png", "gif"]
	});

});


window.ga.startTrackerWithId('UA-89784140-1', 'auto');
window.ga.trackView('Index');

document.addEventListener("deviceready", function()
{
window.ga.startTrackerWithId('UA-89784140-1', 'auto');
window.ga.trackView('Detail');
}, false);


$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    /*$(".modal-backdrop").addClass("modal-backdrop-fullscreen");
	var iframe = document.getElementById("frmDirection");
	iframe.src = "direction4.html?_lat=10.796364&_lng=106.645655";*/
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  var iframe = document.getElementById("frmDirection");
	iframe.src = "about:blank";
});