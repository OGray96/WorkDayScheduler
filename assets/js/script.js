
//using Moment.js to capture current day and applying it to the text content of the current day id
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

//creating a variable capturing the current hour
var currentTime = moment().format("HH");
//converting string to number
currentTime = +currentTime;

//runs when page loads
//https://api.jquery.com/ready/

$(document).ready(function(){
    //Save button function
    $(".saveBtn").on("click",function(){
        //creates a variable that stores the text content of the sibling with the class of description. Planned on using
        // a ID as the identifier but class can apply to all elements. 
        var toDo = $(this).siblings(".description").val();
        console.log(toDo)
        //creates a variable that stores the id of the parent div - which will be the corresponding hour
        var time = $(this).parent().attr("id");
        //saves both things into local storage
        //key is equal to time
        //value is toDo
        //used this link below to help with local storage setting
        //https://www.w3schools.com/jsref/prop_win_localstorage.asp
        localStorage.setItem(time, toDo);
        $(".update").text("Saved event to Local Storage");
        setTimeout(function(){
            $(".update").text("")
        },1000
        )
        
        
    });

    //getting from local storage when the web page opens up
    // got help from this stack overflow page https://stackoverflow.com/questions/50523268/how-to-use-localstorage-in-jquery
    // helped me realise that .val had to be used, i was using .text and getting an undefined response
    $("#9am .description").val(localStorage.getItem('9am'));
    $("#10am .description").val(localStorage.getItem('10am'));
    $("#11am .description").val(localStorage.getItem('11am'));
    $("#12pm .description").val(localStorage.getItem('12pm'));
    $("#1pm .description").val(localStorage.getItem('1pm'));
    $("#2pm .description").val(localStorage.getItem('2pm'));
    $("#3pm .description").val(localStorage.getItem('3pm'));
    $("#4pm .description").val(localStorage.getItem('4pm'));
    $("#5pm .description").val(localStorage.getItem('5pm'));
    


    
    $(".timeCheck").each(function(){
        //getting the id from the div and storing it as a value
        var divTime = $(this).attr("id");
        //converting string to number
        divTime = +divTime

        //creating an if statment to check the current time against the time blocks. Formatting the blocks based on the time
        if(divTime < currentTime){
            //turn element grey
            $(this).addClass("past")
        }
        else if(divTime > currentTime){
            //turn element green
            $(this).addClass("future")
        }
        else{
            //turn element red
            $(this).addClass("present")
        }

    }
    )



})
