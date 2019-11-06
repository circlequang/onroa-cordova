$(document).on('ready', function() {
	$("#upload").fileinput({
		showUpload: false,
		showCaption: false,
		browseClass: "btn btn-primary btn-lg",
		fileType: "any",
		browseLabel: " ",
		previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
		allowedFileExtensions: ["jpg", "png", "gif"]
	});

});

document.addEventListener("deviceready", function()
{
window.ga.startTrackerWithId('UA-89784140-1', 30);
window.ga.trackView('profile');
}, false);
