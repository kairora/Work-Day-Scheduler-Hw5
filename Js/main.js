$(document).ready(function() {
    var m = moment();
    var containerEl = $(".container");
    // var descripEl = $(".description");
    var topP = $("#currentDay");
    var hour = $(".hour");
    var currentTime = m.format("hA");
    var timeArr = [];

    // sets the date at the top of the scheduler
    topDate = topP.text(m.format("dddd, MMMM Do"));

    // takes each hour's text and pushes into an array
    hour.each(function(index, obj) {
        timeArr.push($(obj).text());

        var hourText = $(obj).text();
        var hourMoment = moment(hourText, "hA");
        var descripEl = $(obj).next();
            // for each time block, check if the text matches the current time
            if (timeArr[index] == currentTime) {
                // set the class present  on that timeblock's description element
                descripEl.addClass("present");
            } else if (hourMoment.isBefore(moment())) {
                $(obj).nextAll("input").addClass("past");
            }
            else {
                descripEl.addClass("future");
            }


    });
    


  });

