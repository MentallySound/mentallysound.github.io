// FOR DOWNLOADING THIS APPP
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/service-worker.js').then(function(registration) {}, function(err) {});
// });
// }


// PREVIEW IN ADS CONTAINER
// const up_preview = document.getElementById('up_preview');
// const down_preview = document.getElementById('down_preview');

// up_preview.onclick = function () {
//     document.querySelector("#ampm").style.top = "0%";
// };
// down_preview.onclick = function () {
//     document.querySelector("#ampm").style.top = "75%";
// };



const lofi_video_link = "XBMcJyDIBgQ";

// CLOSE FLIP CLOCK ADS BAR
const targetDiv = document.getElementsByClassName("ad_container")[0];
const close_button_ads = document.getElementById("close_ads");

close_button_ads.onclick = function () {
    targetDiv.style.display = "none";
};


// PARTNER AD CONTAINER CLOSE BUTTON
const ad_container_partner = document.getElementsByClassName("ad_container_partner")[0];
const close_partner_ad = document.getElementById("close_partner_ad");

close_partner_ad.onclick = function () {
    ad_container_partner.style.display = "none";
};



// var leaderboard_trigger = document.getElementById("leaderboard_trigger");
// var close_leaderboard = document.getElementById("close_leaderboard");
// var leaderboard = document.getElementsByClassName("leaderboard")[0];

// leaderboard.style.display = "none";
// leaderboard_trigger.addEventListener('mouseover', function handleMouseOver() {
//     leaderboard.style.display = 'block';
// });

// close_leaderboard.onclick = function () {
//     leaderboard.style.display = "none";
// };




// CUSTOM SIZE FOR CLOCK WHEN ZOOMING OUT
var clock_container = document.querySelector('.container');
window.addEventListener('resize', () => {
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100 - 100);

    // scale the clock_container
    if (window.innerWidth > 1000) {
        // if (browserZoomLevel) {
        //     clock_container.style.transform = `scale(${browserZoomLevel / 100})`;
        // }
        if (browserZoomLevel / 100 <= 0) {
            clock_container.style.transform = "scale(0.8)";
        }
        // if (browserZoomLevel >= 100) {
        //     clock_container.style.transform = "scale(1)";
        // }
    }
    else {
        clock_container.style.transform = "scale(1)";
    }
})



function clock_size() {
    var size_range_slider = document.getElementById('size_range_slider').value

    clock_container.style.transform = "scale(" + size_range_slider / 100 + ")";
}






// POLL COOL INTERACTINON 
// document.getElementById("sharing_polls").addEventListener('mouseover', function handleMouseOver() {
//     document.getElementById("sharing_polls").style.opacity = "0";
//     document.getElementById("sharing_polls").style.cursor = "pointer";
//     setTimeout(function () {
//         document.getElementById("sharing_polls").style.opacity = "1";
//         document.getElementById("sharing_polls").innerHTML = "Cool 👌";
//     }, 500);
//     setTimeout(function () {
//         document.getElementById("sharing_polls").style.transform = "scale(1.5)";
//         document.getElementById("sharing_polls").style.opacity = "0";
//     }, 1500);
// });




// LOFI CONTAINER CLOSE BUTTON
const lofi_close_button = document.getElementById('lofi_close_button');

lofi_close_button.onclick = function () {
    document.querySelector("#lofi_container").classList.add("hide");
    document.querySelector("#lofi_player").src = "";
};




const feature_pop = document.getElementsByClassName("features_popup")[0];
const feature_close = document.getElementById("feature_toggle");
const feature_close1 = document.getElementById("feature_toggle1");

feature_close.onclick = function () {
    feature_pop.style.display = "none";
};

feature_close1.onclick = function () {
    feature_pop.style.display = "none";
}

document.getElementsByClassName("features_popup")[0].style.display = "none";




// POLL
// let website = "flipclock.app"
// var current_poll = "new_size_slider";

// document.getElementById('yes_button').addEventListener('click', function(e){
//     var yes_request = new XMLHttpRequest();
//     yes_request.open("GET", `https://api.countapi.xyz/hit/${website}/${current_poll + '_yes'}`);
//     yes_request.responseType = "json";

//     yes_request.onload = function() {
//         document.getElementById('yes_button').innerText = this.response.value;
//     }
//     yes_request.send();

//     var no_request = new XMLHttpRequest();
//     no_request.open("GET", `https://api.countapi.xyz/get/${website}/${current_poll + '_no'}`);
//     no_request.responseType = "json";

//     no_request.onload = function() {
//         document.getElementById('no_button').innerText = this.response.value;
//     }
//     no_request.send();
// })
// document.getElementById('no_button').addEventListener('click', function(e){
//     var no_request = new XMLHttpRequest();
//     no_request.open("GET", `https://api.countapi.xyz/hit/${website}/${current_poll + '_no'}`);
//     no_request.responseType = "json";

//     no_request.onload = function() {
//         document.getElementById('no_button').innerText = this.response.value;
//     }
//     no_request.send();

//     var yes_request = new XMLHttpRequest();
//     yes_request.open("GET", `https://api.countapi.xyz/get/${website}/${current_poll + '_yes'}`);
//     yes_request.responseType = "json";

//     yes_request.onload = function() {
//         document.getElementById('yes_button').innerText = this.response.value;
//     }
//     yes_request.send();
// })



// AD LINK ANALYTICS COUNTER
// var current_ad = "best_internet_tools_prelaunch_ad";
// document.getElementById('ad_link_click_counter').addEventListener('click', function(e){
//     var ad_link_click_request = new XMLHttpRequest();
//     ad_link_click_request.open("GET", `https://api.countapi.xyz/hit/${website}/${current_ad}`);
//     ad_link_click_request.responseType = "json";
//     ad_link_click_request.send();
// })

// PARTNER AD LINK ANALYTICS COUNTER
// var current_partnership = "brainstorm_bureau";
// document.getElementById('partner_ad_link').addEventListener('click', function(e){
//     var ad_link_click_partner_request = new XMLHttpRequest();
//     ad_link_click_partner_request.open("GET", `https://api.countapi.xyz/hit/${website}/${current_partnership}`);
//     ad_link_click_partner_request.responseType = "json";
//     ad_link_click_partner_request.send();
// })




// DISPLAY NONE FLIP CLOCKS
document.getElementsByClassName('flip_container')[0].style.display = "none";
document.getElementsByClassName('flip_container')[1].style.display = "none";

// DISPLAY DEFAULT CLOCKS
document.getElementById('hours').style.display = "block";
document.getElementById('minutes').style.display = "block";

const toggleButton24h = document.getElementById("toggleButton24h");


// GET COOKIES
const user_status = ('; ' + document.cookie).split(`; status=`).pop().split(';')[0];
const date_subscribed = ('; ' + document.cookie).split(`; date_subscribed=`).pop().split(';')[0];
const lifetime_status = localStorage.getItem("lifetime_status");



setInterval(showTime, 1000);
function showTime() {
    // console.log('chechking')

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    let hour24 = time.getHours();
    let min24 = time.getMinutes();


    if (hour > 12) {
        hour -= 12;
    }
    if (hour == 0) {
        hour = 12;
    }


    // NO FLIP ANIMATION
    function defaultClock() {
        hour = hour < 10 ? "" + hour : hour;
        min = min < 10 ? "0" + min : min;

        hour24 = hour24 < 10 ? "" + hour24 : hour24;
        min24 = min24 < 10 ? "0" + min24 : min24;


        if (toggleButton24h.checked) {
            document.getElementById("hours").innerHTML = hour24;
            document.getElementById("minutes").innerHTML = min24;
        }
        else {
            document.getElementById("hours").innerHTML = hour;
            document.getElementById("minutes").innerHTML = min;
        }

        document.getElementById('minutes').style.display = "block";
        document.getElementById('hours').style.display = "block";
    }

    // FLIP ANIMATION
    function flipClock() {
        if (min < 10) {
            document.querySelector(".hidden_0").classList.remove("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "16vw";
        }
        else {
            document.querySelector(".hidden_0").classList.add("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "0";
        }
        if (min24 < 10) {
            document.querySelector(".hidden_0").classList.remove("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "16vw";
        }
        else {
            document.querySelector(".hidden_0").classList.add("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "0";
        }

        if (toggleButton24h.checked) {
            flip(document.querySelector("[data-hour-tens]"), hour24)
            flip(document.querySelector("[data-minute-tens]"), min24)

            console.log("24 HOURS: ", hour24, min24)
        }
        else {
            flip(document.querySelector("[data-hour-tens]"), hour)
            flip(document.querySelector("[data-minute-tens]"), min)

            console.log("12 HOURS: ", hour, min)
        }

        document.getElementsByClassName('flip_container')[0].style.display = "block";
        document.getElementsByClassName('flip_container')[1].style.display = "block";

        document.getElementById('hours').style.display = "none";
        document.getElementById('minutes').style.display = "none";
    }

    if (user_status == "") {
        defaultClock();
    }
    else if (user_status == "You have subscribed to FlipClock BASIC" || lifetime_status == "You have subscribed to FlipClock BASIC | Lifetime") {
        defaultClock();
    }
    else if (user_status == "You have subscribed to FlipClock PRO" || lifetime_status == "You have subscribed to FlipClock PRO | Lifetime") {
        flipClock();
    }
}
showTime();

// FLIP ANIMATIONS MAIN FUNCTION
function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if (newNumber === startNumber) return

    const bottomHalf = flipCard.querySelector(".bottom")
    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div")
    bottomFlip.classList.add("bottom-flip")

    top.textContent = startNumber
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = newNumber

    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent = newNumber
    })
    topFlip.addEventListener("animationend", e => {
        topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent = newNumber
        bottomFlip.remove()
    })
    flipCard.append(topFlip, bottomFlip)
}



// MENU
// TIME ZONE
function defaultTimeZone() {
    let time = new Date();
    let hour = time.getHours();

    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    document.getElementById("ampm").innerHTML = am_pm;
}

function time_zone() {
    var time_zone_element = document.getElementById("ampm");
    var time_zone = new Date();
    time_zone_element.innerHTML = time_zone.toLocaleString('en-US', { hour: 'numeric', hour12: true }).slice(2, 5);
}




// SHOW BASIC FEATURE
function showBasicFeatures() {
    // var visited = localStorage.getItem('visited');
    // if (visited) {
    //     document.getElementById("basic_feature").style.display = "none";
    //     localStorage.setItem('visited', true);
    // }
    // else {
    document.getElementsByClassName("features_popup")[0].style.display = "block";
    document.getElementById("basic_feature").style.display = "block";
    localStorage.setItem('visited', false);
    // }
}
// SHOW PRO FEATURE
function showProFeatures() {
    // var visited = localStorage.getItem('visited');
    // if (visited) {
    //     document.getElementById("pro_feature").style.display = "none";
    //     localStorage.setItem('visited', true);
    // }
    // else {
    document.getElementsByClassName("features_popup")[0].style.display = "block";
    document.getElementById("pro_feature").style.display = "block";
    localStorage.setItem('visited', false);
    // }
}



// console.clear();
if (user_status == "" && lifetime_status == null) {
    // LIVE ----------------------------------------------------------------
    console.warn("You have not subscribed to FlipClock Subscription");
    // LIVE ----------------------------------------------------------------

    document.querySelector('.themes_container').style.display = "none";
    document.querySelector('#pro_subscription').style.display = "none";
    document.querySelector('#pro_plus_subscription').style.display = "none";

    // DEFAULT TIME ZONE
    defaultTimeZone();
}

// IF USER PAID FOR PRO SUBSCRIPTION
else if (user_status == "You have subscribed to FlipClock BASIC" || lifetime_status == "You have subscribed to FlipClock BASIC | Lifetime") {
    if (lifetime_status == "You have subscribed to FlipClock BASIC | Lifetime") {
        console.log(lifetime_status);
    }
    else {
        console.log(date_subscribed.slice(0, 42));
        console.log(user_status);
    }

    console.log("FEATURES: \n • Themes");

    // ALLOW THEMES ONLY
    document.querySelector('#pro_subscription').style.display = "block";
    document.querySelector('#upgrade').style.display = "none";

    defaultTimeZone();
    document.getElementById("pro_feature").style.display = "none";
    showBasicFeatures();
}

// IF USER PAID FOR PRO PLUS SUBSCRIPTION
else if (user_status == "You have subscribed to FlipClock PRO" || lifetime_status == "You have subscribed to FlipClock PRO | Lifetime") {

    if (lifetime_status == "You have subscribed to FlipClock PRO | Lifetime") {
        console.log(lifetime_status);
    }
    else {
        console.log(date_subscribed.slice(0, 42));
        console.log(user_status);
    }

    console.log("FEATURES: \n • Themes \n • Time Zone \n • Flip Animation");

    // ALLOW THEMES / FLIP ANIMATION / TIME ZONES
    document.querySelector('#pro_plus_subscription').style.display = "block";
    document.querySelector('#upgrade').style.display = "none";

    // TIME ZONE
    setInterval(time_zone, 1000)
    time_zone();

    document.getElementById("basic_feature").style.display = "none";
    showProFeatures();
}




// MENU
const menu = document.getElementById('menu_toggle');
const hiddenDiv = document.getElementsByClassName('menu2')[0];
const themesContainer = document.getElementsByClassName('themes_container')[0];
const subscriptionToggle1 = document.getElementsByClassName('subscription')[0];
const subscriptionToggle2 = document.getElementsByClassName('subscription')[1];

// LOFI
const lofi_button = document.getElementById('lofi_button');
const lofi_player = document.getElementById('lofi_player');
const lofi_container = document.getElementById('lofi_container');


// LIVE ----------------------------------------------------------------
const fullSc = document.querySelector('.full');


// FULL SCREEN
fullSc.onclick = function DoFullscreen(event) {
    document.documentElement.requestFullscreen();

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen()
    }
}
// LIVE ----------------------------------------------------------------



// DIFF MENU FOR MOBILE AND DESKTOP
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    menu.onclick = function ToggleThing(event) {
        hiddenDiv.classList.toggle('hidden')
    }
    subscriptionToggle1.onclick = function ToggleThing(event) {
        themesContainer.classList.toggle('hidden')
    }
    subscriptionToggle2.onclick = function ToggleThing(event) {
        themesContainer.classList.toggle('hidden')
    }

    // LOFI BUTTON
    lofi_button.addEventListener('mouseover', function handleMouseOver() {
        document.querySelector("#lofi_player").src = `https://www.youtube.com/embed/${lofi_video_link}`;
        lofi_container.classList.remove("hide");
    });
}
else {
    // LOFI BUTTON
    lofi_button.addEventListener('mouseover', function handleMouseOver() {
        document.querySelector("#lofi_player").src = `https://www.youtube.com/embed/${lofi_video_link}`;
        lofi_container.classList.remove("hide");
    });


    themesContainer.addEventListener('mouseout', function handleMouseOut() {
        themesContainer.style.display = 'none';
        hiddenDiv.style.display = 'none';
    });


    if (window.innerHeight >= 600) {
        menu.addEventListener('mouseover', function handleMouseOver() {
            hiddenDiv.style.display = 'flex';
        });
        hiddenDiv.addEventListener('mouseover', function handleMouseOver() {
            hiddenDiv.style.display = 'flex';
        });
        hiddenDiv.addEventListener('mouseout', function handleMouseOut() {
            hiddenDiv.style.display = 'none';
        })
    } else {
        menu.onclick = function ToggleThing(event) {
            hiddenDiv.classList.toggle('hidden')
        }
    }

    subscriptionToggle1.addEventListener('mouseover', function handleMouseOver() {
        themesContainer.style.display = 'flex';
    });
    subscriptionToggle2.addEventListener('mouseover', function handleMouseOver() {
        themesContainer.style.display = 'flex';
    });
    themesContainer.addEventListener('mouseover', function handleMouseOver() {
        themesContainer.style.display = 'flex';
    });

}



// DRAGGABLE LOFI PLAYER
dragElement(lofi_container);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



// remove localStorage THEME on reload
window.onbeforeunload = function () {
    localStorage.removeItem('current_theme');
}


// LIGHT MODE / DARK MODE / THEMES
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // THEME 1
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme1") {
        document.body.style.setProperty('--background', '#0F140F');
        document.body.style.setProperty('--holder', '#1A1F1A');
        document.body.style.setProperty('--text', '#C4EBC1');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme1') {
        document.body.style.setProperty('--background', '#E8FFE8');
        document.body.style.setProperty('--holder', '#D6F5D6');
        document.body.style.setProperty('--text', '#546654');
    }

    // THEME 2
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme2") {
        document.body.style.setProperty('--background', '#131315');
        document.body.style.setProperty('--holder', '#1B1C20');
        document.body.style.setProperty('--text', '#C5C8F8');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme2') {
        document.body.style.setProperty('--background', '#EFF2FF');
        document.body.style.setProperty('--holder', '#E4E7FE');
        document.body.style.setProperty('--text', '#222843');
    }

    // THEME 3
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme3") {
        document.body.style.setProperty('--background', '#1B1616');
        document.body.style.setProperty('--holder', '#271E1E');
        document.body.style.setProperty('--text', '#EF6666');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme3') {
        document.body.style.setProperty('--background', '#FFF4F4');
        document.body.style.setProperty('--holder', '#FFEDED');
        document.body.style.setProperty('--text', '#FF8F8F');
    }

    // THEME 4
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme4") {
        document.body.style.setProperty('--background', '#16120B');
        document.body.style.setProperty('--holder', '#221E17');
        document.body.style.setProperty('--text', '#FFAC45');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme4') {
        document.body.style.setProperty('--background', '#FFF7EC');
        document.body.style.setProperty('--holder', '#FFEED6');
        document.body.style.setProperty('--text', '#FDC97B');
    }

    // THEME 5
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme5") {
        document.body.style.setProperty('--background', '#131519');
        document.body.style.setProperty('--holder', '#1A1E23');
        document.body.style.setProperty('--text', '#CCE1FF');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme5') {
        document.body.style.setProperty('--background', '#F5F9FF');
        document.body.style.setProperty('--holder', '#E4EFFF');
        document.body.style.setProperty('--text', '#2C3440');
    }

    // THEME 6
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme6") {
        document.body.style.setProperty('--background', '#0D0F11');
        document.body.style.setProperty('--holder', '#14161A');
        document.body.style.setProperty('--text', '#FFD458');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme6') {
        document.body.style.setProperty('--background', '#FFFDF4');
        document.body.style.setProperty('--holder', '#FFF8E1');
        document.body.style.setProperty('--text', '#FFDB57');
    }

    // THEME 7
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme7") {
        document.body.style.setProperty('--background', '#1A171C');
        document.body.style.setProperty('--holder', '#221D23');
        document.body.style.setProperty('--text', '#E3CEEC');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme7') {
        document.body.style.setProperty('--background', '#FCF5FF');
        document.body.style.setProperty('--holder', '#F8E8FF');
        document.body.style.setProperty('--text', '#574260');
    }

    // THEME 8
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme8") {
        document.body.style.setProperty('--background', '#181B19');
        document.body.style.setProperty('--holder', '#1E2320');
        document.body.style.setProperty('--text', '#BEEBD2');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme8') {
        document.body.style.setProperty('--background', '#F5FFFA');
        document.body.style.setProperty('--holder', '#E6F8EE');
        document.body.style.setProperty('--text', '#5F8873');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);



// THEME 1
document.querySelector(".theme1").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme1");
    document.body.style.setProperty('--background', '#0F140F');
    document.body.style.setProperty('--holder', '#1A1F1A');
    document.body.style.setProperty('--text', '#C4EBC1');
});

// THEME 2
document.querySelector(".theme2").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme2");
    document.body.style.setProperty('--background', '#131315');
    document.body.style.setProperty('--holder', '#1B1C20');
    document.body.style.setProperty('--text', '#C5C8F8');
});

// THEME 3
document.querySelector(".theme3").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme3");
    document.body.style.setProperty('--background', '#1B1616');
    document.body.style.setProperty('--holder', '#271E1E');
    document.body.style.setProperty('--text', '#EF6666');
});

// THEME 4
document.querySelector(".theme4").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme4");
    document.body.style.setProperty('--background', '#16120B');
    document.body.style.setProperty('--holder', '#221E17');
    document.body.style.setProperty('--text', '#FFAC45');
});

// THEME 5
document.querySelector(".theme5").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme5");
    document.body.style.setProperty('--background', '#131519');
    document.body.style.setProperty('--holder', '#1A1E23');
    document.body.style.setProperty('--text', '#CCE1FF');
});

// THEME 6
document.querySelector(".theme6").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme6");
    document.body.style.setProperty('--background', '#0D0F11');
    document.body.style.setProperty('--holder', '#14161A');
    document.body.style.setProperty('--text', '#FFD458');
});

// THEME 7
document.querySelector(".theme7").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme7");
    document.body.style.setProperty('--background', '#1A171C');
    document.body.style.setProperty('--holder', '#221D23');
    document.body.style.setProperty('--text', '#E3CEEC');
});

// THEME 8
document.querySelector(".theme8").addEventListener("click", function () {
    localStorage.setItem("current_theme", "theme8");
    document.body.style.setProperty('--background', '#181B19');
    document.body.style.setProperty('--holder', '#1E2320');
    document.body.style.setProperty('--text', '#BEEBD2');
});













