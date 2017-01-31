var notifications = document.getElementById("notifications");
var theNotification = '';

    var defaultAnswers = ["Ask Me If I Care","Dumb Question Ask Another", "Forget About It", "Get A Clue", "In Your Dreams",  "Not A Chance", "Obviously", "Oh Please", "Sure", "Well Maybe", "What Do You Think?", "Whatever", "Who Cares?","Yeah And I'm The Pope", "Yeah Right", "You Wish", "You've Got To Be Kidding..."];
    var newAnswers = [],
        new_answers = [];

function shakeBall()
{
    if (newAnswers.length == 0 || newAnswers.length <= defaultAnswers.length)
    {
        console.log(newAnswers.length);
        var theMessages = defaultAnswers;
        console.log(theMessages);

    } else if (newAnswers.length > defaultAnswers.length) {
        var theMessages = newAnswers;
        console.log("New answers\n"+theMessages);
    }

    var theMessageContainer = document.getElementById('eight-ball-message');
    var theQuestion = document.getElementById('the-question').value;

    var add_answer = theQuestion.includes("add_answer:");
    var clear_answer = theQuestion.includes("clear_answers");
    var clear_history = theQuestion.includes("clear_history");
    var show_new_answer = theQuestion.includes("new_answers");
    

    var randomNumber = Math.round(Math.random() * (theMessages.length - 0) + 0);

    if(add_answer)
    {
        theNotification = '<span class="green-text"><small><i>Added new answer: <b class="new_answer">'+theQuestion.replace('add_answer:','')+'</b></i></small></span>';
        if(newAnswers.length == 0)
        {
            newAnswers = defaultAnswers;
        }
        console.log(newAnswers);
        newAnswers.push(theQuestion.replace('add_answer: ',''));
        new_answers.push(theQuestion.replace('add_answer: ',''));
        console.log(newAnswers);
        addNotification(theNotification);
    } 
    else if(clear_answer) {

        theNotification = '<span class="green-text"><small><i>Cleared new answers</i></small></span>';
        addNotification(theNotification);
        newAnswers = [];
        new_answers = [];
        theMessages = defaultAnswers;

    }else if(clear_history){

        notifications.innerHTML= '';
        theNotification = '<span class="green-text"><small><i>Cleared history</i></small></span>';
        addNotification(theNotification);

    }else if(show_new_answer){
        theNotification = '<span class="green-text"><b>New Answers</b><br/><small><i>'+new_answers.join(', ')+'</i></small></span>';
        addNotification(theNotification);

    } else {

        theNotification = '<span><small><i>'+theQuestion+'</i><br/><b>'+theMessages[randomNumber]+'</b></small></span>';
        addNotification(theNotification);
        theMessageContainer.innerHTML = theMessages[randomNumber];
    }

    
    document.getElementById('the-question').value = null;
}

function addNotification(notif)
{
   notifications.innerHTML += notif+'</br><br/>';
}

document.getElementById("the-question").addEventListener("keyup", function(event) {
    event.preventDefault();
    if ( event.keyCode === 13 ) {
        document.getElementById("shake-button").click();
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if ( event.keyCode === 27) {
    document.getElementById('the-question').value = null;
    }
});