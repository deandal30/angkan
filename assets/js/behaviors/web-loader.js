$('.masthead')
.visibility({
  once: false,
  onBottomPassed: function() {
    $('.fixed.menu').transition('fade in');
  },
  onBottomPassedReverse: function() {
    $('.fixed.menu').transition('fade out');
  }
})
;

// create sidebar and attach to menu open
$('.ui.sidebar')
.sidebar('attach events', '.toc.item')
;

$('#btnGetStarted').on('click', function(e){
  $('html,body').animate({
    scrollTop: $("#body_desc").offset().top},
    'slow');
})

$('#btnCheckThemOut').on('click', function(e){
  $('html,body').animate({
    scrollTop: $("#body_desc2").offset().top},
    'slow');
})

$('.ui.dropdown').dropdown();
$('.ui.radio.checkbox').checkbox();

$('.overlay.example .overlay')
.visibility({
  type   : 'fixed',
  offset : 15 // give some space from top of screen
})
;
$('.coverage-menu .item').tab();

let pgurl = window.location.href;

$(".sidebar a.item").each(function() {
  if (pgurl.indexOf($(this).attr("id")) > -1) {
      $(this).addClass("active");
  }
});

alertify.set('notifier','position', 'top-right');
setInterval(timeChecker, 1000);

function timeChecker() {

  let currentDate = new Date
  let month = getMonth(currentDate.getMonth() + 1)
  let year = currentDate.getFullYear()
  let hour = checkHour(currentDate.getHours())
  let minute = checkNumber(currentDate.getMinutes())
  let time_indicator = checkTimeIndicator(currentDate.getHours())
  let currentDay = getDay(currentDate.getDay() + 1)

  let time_date = `${currentDay}, ${month} ${currentDate.getDate()}, ${hour}:${minute}${time_indicator}`

  $('#datetime_web').text(time_date)
}

function getDay(day_no) {
  let day
  switch(day_no){
    case 1:
      day = "Sun"
      break
    case 2:
      day = "Mon"
      break
    case 3:
      day = "Tue"
      break
    case 4:
      day = "Wed"
      break
    case 5:
      day = "Thu"
      break
    case 6:
      day = "Fri"
      break
    case 7:
      day = "Sat"
      break
  }
  return day
}

function getMonth(month_no) {
  let month
  switch(month_no){
    case 1:
      month = "Jan"
      break
    case 2:
      month = "Feb"
      break
    case 3:
      month = "Mar"
      break
    case 4:
      month = "Apr"
      break
    case 5:
      month = "May"
      break
    case 6:
      month = "Jun"
      break
    case 7:
      month = "Jul"
      break
    case 8:
      month = "Aug"
      break
    case 9:
      month = "Sept"
      break
    case 10:
      month = "Oct"
      break
    case 11:
      month = "Nov"
      break
    case 12:
      month = "Dec"
      break
  }
  return month
}

function checkHour(currentHour){
  if(currentHour > 12) {
    currentHour -= 12;
  }
  return checkNumber(currentHour)
}

function checkTimeIndicator(currentHour) {
  let currentIndicator
  if(currentHour > 12) {
    currentIndicator = 'PM';
  } else {
    currentIndicator = 'AM';
  }
  return currentIndicator
}

function checkNumber(time) {
  let strTime = time.toString()
	if(strTime.length == 1) {
		return "0" + strTime;
	} else {
		return strTime;
	}
}

