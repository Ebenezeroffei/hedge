// A function that changes the hamburger when the user clicks it
let changeHamburger = () =>{
    $('#hamburger').click(function(){
        let burderRowId = $(this).find('p').attr('id');
        // The side menu has been closed
        if(burderRowId){
            $(this).find('p').removeAttr('id');
            $('#slider').css('right','1500px');
            $('body').css('overflow','auto'); // Display the scrollbar
        }
        // The side menu has been opened
        else{
            $(this).find('p').attr('id','burger-row');
            $('#slider').css('right','0px');
            $('body').css('overflow','hidden') // Show the scrollbar
        }
    });
}

changeHamburger(); //Invoke function

// A function that shows the submenu in smaller screens
let showSubmenuInSmallerScreen = () => {
        $('.slider-dropdown').click(function(){
        if($(this).css('height') === "43px"){
            $(this).css('height','auto');
        }
        else{
            $(this).css('height','43px');
        }
    })
}

showSubmenuInSmallerScreen() // Invoke function

// A function that closes the side menu when clicked on
let alternateCloseForSideMenu = () => {
    $("#alternate-close").click(function(){
        $('#hamburger p').removeAttr('id');
        $('#slider').css('right','1500px');
        $('body').css('overflow','auto'); // Display the scrollbar
    });
}

alternateCloseForSideMenu() // Invoke function

// A function that modifies the design on the website based on the size of the screen
let ScreenResize = () => {
    window.onresize = () => {
//        console.log(window.innerWidth)
        if(window.innerWidth > 1125){
            $('#hamburger p').removeAttr('id');
            $('#slider').css('right','1500px');
        }
    }
}

ScreenResize() // Invoke function

// A function that displays an arrow when the user scrolls to a certain level
let displayArrowOnScroll = () => {
    let navBar = document.getElementById("navbar-container");
    window.onscroll = () => {
        if(navBar.getBoundingClientRect().top <= -500){
            $('#move-to-top').css({'visibility':'visible','opacity':'1'});
        }
        else{
            $('#move-to-top').css({'visibility':'hidden','opacity':'0'});
        }
    }
}

displayArrowOnScroll(); // Invoke function
