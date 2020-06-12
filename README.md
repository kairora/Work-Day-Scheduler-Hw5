# Work Day Scheduler

As a busy employee, it is important to keep on top of your daily tasks. With this Work Day Scheduler App, you can do just that. 


## Functionality
The scheduler allows you to see the current date and time at the top of the page with **clear** and **color-coded** instructions on the app's functions and interface. This will concisely and aesthetically inform the user one what the app does.

![Scheduler-Date Photo](/assets/schedule-top.png)

Scrolling down, you can see the schedule with hours within the typical workday: 9AM - 5PM. Besides the hour is an input field where you can type your schedule item. You can also save the schedule item by clicking the button next to it.  The item will be stored in your browser's localStorage even after refreshing the page.

![Scheduler Photo](/assets/scheduler.png)



Another great feature is that the app also allows you to view a color-coded schedule based on the time of day. Input fields for hours that have past will be gray. Input fields with hours that are in the future will display red. In the photo below, the times are altered to fit the display accordingly to the time the photo was taken.

![Scheduler Photo](/assets/time-colors.png)



## Bonus Feature
A final feature would be the "Clear All" button at the top of the schedule. After clicking it, your entire schedule along with the localStorage will be wiped clean for you to start again the next day. 

![Scheduler Photo](/assets/clear.png)

Done simply by:

1. On click,
2. Setting all the input fields to an empty string.
3. Clearing the localStorage with jQuery

``` JS
$(".clear").on("click", function() {
    // clear from divs
    $(".description").val("");
        // clear in localStorage
        localStorage.clear();
});
```

### Link to the deployed app
[Work Day Scheduler App](https://kairora.github.io/Work-Day-Scheduler-Hw5/)

### Link to my GitHub Repo
[My GitHub Repo](https://github.com/kairora/Work-Day-Scheduler-Hw5)

