 var boldItems = document.getElementsByTagName('strong');
function highlight() {
    // Get all the strong elements
    
    // Loop through the array and change the color of each element to green
    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = 'green';
    }
}

function return_normal() {
    // Get all the strong elements
    // var boldItems = document.getElementsByTagName('strong'); 
    // Loop through the array and change the color of each element back to black
    for (var i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = 'black';
    }
}