// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  var containerEl = $('.container-lg');
  var timeBlockEl = $('.time-block');
  var id = 9;
  var time = 9;
  // dayjs().hour();

//-- PROCESS FOR FIRST TIME BLOCK --//
  if (id < time) {
    timeBlockEl.addClass('past');
  } else if (id === time) {
    timeBlockEl.addClass('present');
  } else if (id > time) {
    timeBlockEl.addClass('future');
  };
  timeBlockEl.children('textarea').text(localStorage.getItem(id));
 //-- PROCESS FOR THE REST OF THE TIME BLOCKS --//
  for (var id = 10; id < 18; id++) {
    var cloneEl = timeBlockEl.clone();
    containerEl.append(cloneEl);
    cloneEl.attr('id', id);

    var amPM = "PM";
    var hour = id;
    if (id > 12) {
      hour = id - 12;
    } else if (id < 12) {
      var amPM = "AM";
    };

    var hourHeader = $(cloneEl.children('div'));
    hourHeader.text(hour + " " + amPM);
    cloneEl.children('textarea').text(localStorage.getItem(id));

    if (id < time) {
      cloneEl.addClass('past');
    } else if (id === time) {
      cloneEl.addClass('present');
    } else if (id > time) {
      cloneEl.addClass('future');
    };

  };
//-- EVENT LISTENER FOR SAVE BUTTONS --//
  var saveBtnEl = $('button');
  saveBtnEl.on('click', function () {
    var timeBlockEl = $(this.parentNode);
    var timeBlockId = this.parentNode.getAttribute('id');
    var textArea = timeBlockEl.children('textarea');
    var userEventText = textArea.val();
    localStorage.setItem(timeBlockId, userEventText);
  });

//-- DISPLAYS CURRENT DATE AT TOP OF PAGE --//
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
