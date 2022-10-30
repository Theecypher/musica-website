// MAKING THE SEARCH SECTION FIXED WHEN THE PAGE IS SCROLLED UP
window.onscroll = function (e) {
    myFunction();
}

function myFunction() {
    let searchSection = document.getElementById("search-sec");
    let sticky = searchSection.offsetTop;

    console.log(sticky);

   if (window.pageYOffset >= sticky) {
       searchSection.classList.add("sticky")
   }
   else {
       searchSection.classList.remove("sticky")
   }
};

    
// const toggle =  document.getElementById("toggle");
// toggle.addEventListener('click', (e) => {
//     const dropdown = document.getElementById("sidemenu");
//     dropdown.classList.toggle("showItem");
//     if (!e.target.matches(".toggle")) {
//        if (dropdown.classList.contains("showItem")) {
//            dropdown.classList.remove("showItem")
//         }
//     }
// });
    
(function () {
    const navclass = document.querySelector('.navlink');
    const sideMenu = document.querySelector('#sidemenu')
    window.addEventListener('click', (e) => {
        // e.preventDefault();
        if (!e.target.classList.contains("toggle") || e.target.classList.contains("navlink")) {
            sideMenu.classList.remove("showItem");
        }
    });
});

(function () {
    const albumChart = document.querySelector("#album-chart");
    albumChart.addEventListener('click', (e) => {
        window.location.href = "tomorrowchart.html";
    })
});


// SLIDER ANIMATION 
(function() {
    const slider = document.querySelectorAll("#slider-container");
    let isPressed = false;
    let startX;
    let scrollLeft;

    slider.forEach(function(item) {
        item.addEventListener('mousedown', (e) => {
            isPressed = true;
            item.classList.add("pressed")
            startX = e.pageX;
            scrollLeft = item.scrollLeft;
        });

        item.addEventListener('mouseup', (e) => {
            isPressed = false;
            item.classList.remove('pressed')
            
        });
        
        item.addEventListener('mouseleave', (e) => {
            isPressed = false;
            item.classList.remove('pressed')
        });

        item.addEventListener('mousemove', (e) => {
           if (!isPressed) return;
           e.preventDefault();
           let x = e.pageX - item.offsetLeft;
           let walk = x - startX;
           item.scrollLeft = scrollLeft - walk
        });

    })
})();





window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("toggle").addEventListener('click', () => {
    const sidebarEl = document.getElementsByClassName('sidemenu')[0];
                sidebarEl.classList.toggle("sidemenu--isHidden");
            })
        })
