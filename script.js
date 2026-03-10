var socket=io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {  //listens for form submit event // e-event object as of here submit event
    e.preventDefault();  //when submitted prevents default behaviour of page reload
    if (input.value){  // if input box contains text 
        socket.emit('chat message', input.value);  //socket.emit(eventName, data), client sends the eventName and data to server
        input.value = ''; //input field cleared for next message
    }
});

//msg is data send from server. When server sends io.emit('chat message', 'hello;); -- client receives msg ="hello"
socket.on('chat message', function(msg) {  //listens for socket event 'chat message'
    var item = document.createElement('li'); //create an html element <li></li> 
    item.textContent = msg; //puts message text inside the list element
    messages.appendChild(item); //adds new message to the list
    window.scrollTo(0, document.body.scrollHeight); //automatically scrolls the page to the bottom
})