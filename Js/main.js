$(document).ready(function() {
    var m = moment();
    var topP = $("#currentDay");
    var hour = $(".hour");
    var hourEl = $(".hour").text();
    var currentTime = m.format("HA");
    var timeArr = [];

    // sets the date at the top of the scheduler
    topDate = topP.text(m.format("dddd, MMMM Do"));

    // takes each hour's text and pushes into an array
    hour.each(function(index, obj)
    {
    timeArr.push($(this).text());
    });




  });

