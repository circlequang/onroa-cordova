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

$(window).load(function(){
	var _latitude = 51.541599;
	var _longitude = -0.112588;
	var draggableMarker = true;
	simpleMap(_latitude, _longitude,draggableMarker);
});

document.addEventListener("deviceready", function()
{
	window.ga.startTrackerWithId('UA-89784140-1', 30);
	window.ga.trackView('submit');
}, false);
