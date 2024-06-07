window.onscroll = function() { 
    var scrolled = window.scrollY; 
    var documentHeight = document.documentElement.scrollHeight;
    if (window.innerHeight + scrolled > documentHeight - 20) { 
        console.log("I need to load some more content here…"); 
    } 
};
