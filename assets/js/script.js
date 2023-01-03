// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var containerEl = $('.container-lg');
  var timeBlockEl = $('.time-block');
  var id = 9;
  var time = dayjs().hour();

  if (id < time) {
    timeBlockEl.addClass('past');
  } else if (id === time) {
    timeBlockEl.addClass('present');
  } else if (id > time) {
    timeBlockEl.addClass('future');
  };
 
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

  var saveBtnEl = $('button');

  saveBtnEl.on('click', function () {
    var timeBlockEl = $(this.parentNode);
    var timeBlockId = this.parentNode.getAttribute('id');
    var textArea = timeBlockEl.children('textarea');
    var userEventText = textArea.val();
    localStorage.setItem(timeBlockId, userEventText);
  });


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
