function shakeBall()
{
    var theMessageContainer = document.getElementById('eight-ball-message');

    var theMessages = ["Ask Me If I Care","Dumb Question Ask Another", "Forget About It", "Get A Clue", "In Your Dreams",  "Not A Chance", "Obviously", "Oh Please", "Sure", "Well Maybe", "What Do You Think?", "Whatever", "Who Cares?","Yeah And I'm The Pope", "Yeah Right", "You Wish", "You've Got To Be Kidding..."];

    var randomNumber = Math.random() * (theMessages.length - 0) + 0;

    theMessageContainer.innerHTML = theMessages[Math.round(randomNumber)]

}