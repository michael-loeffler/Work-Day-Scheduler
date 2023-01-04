// Wrapping the JavaScript code in a jquery call ensures this file isn't run until the browser has loaded all html elements //
$(function () {
//-- DOM DECLARATIONS --//
  var containerEl = $('.container-lg'); // jquery selector for the container div that contains all time blocks
  var timeBlockEl = $('.time-block'); // jquery selector for the time block "template" that is written into the HTML file
//-- VARIABLE INITIALIZATIONS --//
  var id = 9; 
  var time = dayjs().hour();

//-- PROCESS FOR FIRST TIME BLOCK (9 AM) --//
  if (id < time) { 
    timeBlockEl.addClass('past');
  } else if (id === time) {
    timeBlockEl.addClass('present');                // adds the appropriate class to the 9 AM time block by comparing the id to the current hour
  } else if (id > time) {
    timeBlockEl.addClass('future');
  };
  timeBlockEl.children('textarea').text(localStorage.getItem(id)); // renders any text stored in local storage for this time block by looking for data stored under a key that matches the id of the 9 AM time block

 //-- PROCESS FOR THE REST OF THE TIME BLOCKS (10 AM - 5 PM) --//
 // This loop will create the other 8 time blocks by cloning the time block "template" written into the HTML file, and appending it to the container //
  for (var id = 10; id < 18; id++) {  
    var cloneEl = timeBlockEl.clone();
    containerEl.append(cloneEl);
    cloneEl.attr('id', id); // this is critical: it adds an id attribute to each cloneEl every time the loop runs, and id is incremented each time. So the variable running the loop is also determining the hour that is assigned to each time block

    var amPM = "PM"; // initializes the am/pm of each hour to be PM and only changes it for AM times (id < 12)
    var hour = id;
    if (id > 12) {
      hour = id - 12; // adjusts the time from 24-hr to 12-hr time for display purposes
    } else if (id < 12) {
      var amPM = "AM";
    };

    var hourHeader = $(cloneEl.children('div')); // jquery selector for the div child of each time block; where the hour is to be displayed
    hourHeader.text(hour + " " + amPM); // edits the text of the above div to display the time for that time block
    cloneEl.children('textarea').text(localStorage.getItem(id)); // renders any text stored in local storage for this time block by looking for data stored under a key that matches the time block's id

    if (id < time) {
      cloneEl.addClass('past');
    } else if (id === time) {
      cloneEl.addClass('present');                // adds the appropriate class to a given time block by comparing the id of that time block to the current hour
    } else if (id > time) {
      cloneEl.addClass('future');
    };

  };
//-- CLICK EVENT LISTENER FOR SAVE BUTTONS --//
  var saveBtnEl = $('button'); // jquery selector for all button elements
  saveBtnEl.on('click', function () {
    var timeBlockEl = $(this.parentNode); // determines which time block's save button was clicked 
    var timeBlockId = this.parentNode.getAttribute('id'); // retrieves the id of the time block whose save button was clicked
    var textArea = timeBlockEl.children('textarea'); // identifies the textarea of the time block whose save button was clicked
    var userEventText = textArea.val(); // stores the user's input into a variable
    localStorage.setItem(timeBlockId, userEventText); // stores the user's input into local storage, with the timeblock's id as the key so that it can be rendered in the right place when the page is refreshed
  });

//-- DISPLAYS CURRENT DATE AT TOP OF PAGE --//
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
