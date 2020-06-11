$(document).ready(function() {
    var m = moment();
    var containerEl = $(".container");
    // var descripEl = $(".description");
    var topP = $("#currentDay");
    var hour = $(".hour");
    var inputEl = $(".description");
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
            } else if (hourMoment.isBefore(m)) {
                $(obj).nextAll("input").addClass("past");
            }
            else {
                descripEl.addClass("future");
            }
    });

        // Tutor helped with the following code
        $(".saveBtn").on("click", function() {
            // get nearby values
            var value = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
            // save in localStorage
            localStorage.setItem(time, value);

          });

          
        // load any saved data from localStorage. Tutor helped with the follow code
        $("#9AM .description").val(localStorage.getItem("9AM"));
        console.log($("#9AM .description").val(localStorage.getItem("9AM")));
        $("#10AM .description").val(localStorage.getItem("10AM"));
        $("#11AM .description").val(localStorage.getItem("11AM"));
        $("#12PM .description").val(localStorage.getItem("12PM"));
        $("#1PM .description").val(localStorage.getItem("1PM"));
        $("#2PM .description").val(localStorage.getItem("2PM"));
        $("#3PM .description").val(localStorage.getItem("3PM"));
        $("#4PM .description").val(localStorage.getItem("4PM"));
        $("#5PM .description").val(localStorage.getItem("5PM"));


    });
    

    // $(document).on("click", ".saveBtn", saveItem)
//   });

