
window.onscroll = function() { 
    var scrolled = window.scrollY; 
    var documentHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;

    // Detect if near bottom
    if (windowHeight + scrolled > documentHeight - 20) {  
        // Near bottom of the page, do something
        console.log("Near bottom of page");
    };  
};
