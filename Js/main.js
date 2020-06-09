$(document).ready(function() {
    var m = moment();
    var containerEl = $(".container");
    // var descripEl = $(".description");
    var topP = $("#currentDay");
    var hour = $(".hour");
    var hourEl = $(".hour").text();
    var currentTime = m.format("hA");
    var timeArr = [];

    // sets the date at the top of the scheduler
    topDate = topP.text(m.format("dddd, MMMM Do"));

    // takes each hour's text and pushes into an array
    hour.each(function(index, obj) {
        timeArr.push($(obj).text());
        
        
        var hourEl = $(obj).text();
        var descripEl = $(obj).next();
        console.log($(obj).next())
        // var indexMoment = moment("hourEl").format("hA");
        // console.log(indexMoment);
            // for each time block, check if the text matches the current time
            if (timeArr[index] == currentTime) {
                // set the class present  on that timeblock's description element
                $(obj).next().addClass("present");
                   
            // } else if (moment(indexMoment).isbefore(currentTime)) {
            //     descripEl.addClass("future")
            }
            else {
                descripEl.addClass("past");
            }


    });console.log(timeArr[8]);
    console.log(currentTime)
    console.log(timeArr[8] == currentTime)

    
    
    // // loops through  the array of time blocks
    // for (var i=0; i < timeArr.length; i++) {
    //     // for each time block, check if the text matches the current time
    //     if (timeArr[i] == currentTime) {
    //         $(this).next().attr("class", "present");
    //         console.log(this)
            
            // store that 
            // var elNumber = newTimeArr[i];
    //         // // var currentBlock = $( "containerEl div:nth-child(elNumber)" );
    //         // $( "containerEl div:nth-child(2)" ).attr( "class", "present")

        // }
        // }


  });

