document.addEventListener('DOMContentLoaded', function() {

    // Select all elements with a specific class
    const LogoElement = document.querySelectorAll('.logo');
    const RightTextOfLogoElement = document.querySelectorAll('.namelogo-right')
    const DividerElement = document.querySelectorAll('.divider')
    const cursorBubble = document.querySelector('.cursor-bubble');

    let prevScrollPos = window.scrollY;

    window.addEventListener("load", (event) => {
        $.getJSON('https://discordlookup.mesalytic.moe/v1/user/321288764708356106', function(data) {
            var Element = document.getElementById("AvatarLink");

            if (data.avatar["is_animated"] == true) {

                const link = document.createElement("a");

                link.href = data.avatar["link"] + ".gif";
                
                Element.src = link

            }else{

                Element.src = data.avatar["link"];

            }
            console.log(data.avatar["link"]);
            console.log(data.avatar["is_animated"])
        })
    })

    // Function to change opacity based on scroll direction
    window.addEventListener('scroll', function() {
        
        const currentScrollPos = window.scrollY;
        const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';

        LogoElement.forEach(element => {
            if (scrollDirection === 'down') {
                element.style.opacity = 0; 
            } else {
                element.style.opacity = 1; 
            }
        });

        prevScrollPos = currentScrollPos;
    });

    window.addEventListener('scroll', function() {

        const scrollFromTop = window.scrollY;
        
        RightTextOfLogoElement.forEach(element => {
            const opacity = scrollFromTop / 550; 
            element.style.opacity = opacity > 1 ? 1 : opacity; 

            const scaleFactor = 1 + (scrollFromTop / 40000); 
            element.style.transform = `scale(${scaleFactor})`;

            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

       
        });
    })

    /*
    window.addEventListener('scroll', function() {

        const scrollFromTop = window.scrollY;
        
        DividerElement.forEach(element => {
            const marginValue = scrollFromTop / -10;

            const opacity = scrollFromTop / 550; 
            element.style.opacity = opacity > 1 ? 1 : opacity; 

            element.style.marginLeft = `${marginValue}px`;
       
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    })
    */

    document.addEventListener('mousemove', function(e) {

        const bubbleWidth = cursorBubble.offsetWidth; 
        const bubbleHeight = cursorBubble.offsetHeight;

        const cursorX = e.pageX;
        const cursorY = e.pageY;

        // Calculate the scroll offsets
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        // Update the position of the cursor bubble considering the scroll offsets and bubble width
        cursorBubble.style.left = cursorX - scrollX - bubbleWidth / 2 + 'px';
        cursorBubble.style.top = cursorY - scrollY - bubbleHeight / 2 + 'px';

    });
});