// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

});
function onDeviceReady(){
	
	$('#posicion').on('click',function(){
		getPosition ();
	});

$('#watch').on('click',function(){
		watchPosition ();
	});
}

function getPosition(){
 var options={
	 enableHighAccuracy: true,
	 maximumAge:3600000
 }
 
 var watchID= navigator.geolocation.getCurrentPosition(onSuccess,onError,options);
 function onSuccess(position){
	 
	 alert('Latitude:' +position.coords.latitude  + '+\n'+
	       'Longitude:' +position.coords.longitude  + '+\n'+
	       'altitude:' +position.coords.altitude  + '+\n'+
	       'accuracy:' +position.coords.accuracy  + '+\n'+
	       'altitudeAccuracy:' +position.coords.altitudeAccuracy+ '+\n'+
	       'heading:' +position.coords.heading  + '+\n'+
	       'speed:' +position.coords.speed  + '+\n'+
	       'timestamp:' +position.coords.timestamp  + '+\n');
 };
 function onError(error){
	 alert('code:' + error.code + '\n'+ 'message:' + error.message + '\n');
 }
}

function watchPosition(){
 var options={
	 maximumAge:3600000,
	 timeout:300,
	 enableHighAccuracy: true,
 }
 
 var watchID= navigator.geolocation.watchPosition(onSuccess,onError,options);
 function onSuccess(position) {
	 $('#latitud').html(position.coords.latitude);
	 $('#longitud').html(position.coords.longitude);
	 $('#altitud').html(position.coords.altitude);
	 $('#latitud').html(position.coords.accuracy);
	 $('#accuracy').html(position.coords.altitudeAccuracy);
     $('#headingg').html(position.coords.heading);
     $('#speed').html(position.coords.speed);
     $('#timestamp').html(position.coords.timestamp);
 };
  function onError(error){
	 alert('code:' + error.code + '\n'+ 'message:' + error.message + '\n');
 }
}
	 


