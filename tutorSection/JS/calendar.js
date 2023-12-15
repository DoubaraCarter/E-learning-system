// Client ID and API key from the GCP Console
var CLIENT_ID = '90912381095-n9b6gu15nutaqlt4q66q35016lik8846.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBhOIj6x6rQnFrIg2fTq23wChSbXndGF2Y';

// Array of API discovery doc URLs for APIs used by the application
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

// Load the API client and auth2 library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Initialize the API client and auth2 library
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  }, function (error) {
    console.log(JSON.stringify(error, null, 2));
  });
}

// Update the UI based on the sign-in state
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    listUpcomingEvents();
  } else {
    gapi.auth2.getAuthInstance().signIn();
  }
}

// Retrieve and display the upcoming appointments
function listUpcomingEvents() {
  gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(function(response) {
    var events = response.result.items;
    var appointmentsDiv = document.getElementById('appointments');
    
    if (events.length > 0) {
      appointmentsDiv.innerHTML = '<h2>Upcoming Appointments:</h2>';
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        var start = event.start.dateTime || event.start.date;
        var end = event.end.dateTime || event.end.date;
        var appointmentItem = document.createElement('div');
        appointmentItem.innerHTML = '<h3>' + event.summary + '</h3>' +
                                     '<p><strong>Start:</strong> ' + start + '</p>' +
                                     '<p><strong>End:</strong> ' + end + '</p>';
        appointmentsDiv.appendChild(appointmentItem);
      }
    } else {
      appointmentsDiv.innerHTML = '<p>No upcoming appointments found.</p>';
    }
  });
}
