////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DROPDOWN MENU

var toggle = true;

function dropdown() {
  // console.log('toggle:', toggle);
  document
    .querySelector(".dropdown_menu_button")
    .classList.toggle("open_dropdown");

  toggle ? open_dropdown() : close_dropdown();
  toggle = !toggle;

  function open_dropdown() {
    document.querySelector(".dropdown_menu").style.display = "block";
    const dropdown_menu = document.querySelector(".dropdown_menu");
    var compstyle = window.getComputedStyle(dropdown_menu);
    menu_width = compstyle.getPropertyValue("width");
    // console.log('menu_width:', menu_width);

    const dropdown_menu_button = document.querySelector(
      ".dropdown_menu_button"
    );
    var compstyle_butt = window.getComputedStyle(dropdown_menu_button);
    button_width = compstyle_butt.getPropertyValue("width");
    // console.log('button_width:', button_width);

    length = parseInt(menu_width, 10) - parseInt(button_width, 10) + "px";
    dropdown_menu.style.transform = `translate(-${length})`;

    menu_height = compstyle.getPropertyValue("height");
    // console.log('menu_height:', menu_height);
    document.querySelector(".dropdown_menu").style.height = "23rem";
  }
  function close_dropdown() {
    document.querySelector(".dropdown_menu").style.height = "0";
    // document.querySelector('.dropdown_menu').style.display = 'none';
  }

  // var dropdown_menu_button = document.querySelector('.dropdown_menu_button');
  // var rect = dropdown_menu_button.getBoundingClientRect();
  // console.log('width:', rect.width);

  // console.log(rect.top, rect.right, rect.bottom, rect.left);

  // var compstyle = window.getComputedStyle(menu_width);
  // width = compstyle.getPropertyValue("width");
  // width = `${width}px`;
  // console.log('width:', width);
  // document.querySelector('.dropdown_menu').style.right = width;
  // document.querySelector('.dropdown_menu').style.right = width

  // console.log('compstyle:', compstyle);

  // var fs = window.getComputedStyle(document.body).getPropertyValue('font-size');
  // // console.log('fs:', fs);

  // var top = parseInt(height, 10) - parseInt(fs, 10) + "px";
  // // console.log('top:', top);
  // document.querySelector('.dropdown_menu').style.top = `${top}`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OUT-OF-BOUNDS MOBILE MENU DROPDOWN

let menu_drop = document.getElementsByClassName("out_of_bounds_dropdown")[0];
let menu_is_dropped = false;

let bgColor = "";

// when amimation finishes switch states
menu_drop.addEventListener("animationend", (e) => {
  if (menu_is_dropped == true) {
    menu_is_dropped = false;
    // console.log('menu_is_dropped:', menu_is_dropped);
  } else {
    menu_is_dropped = true;
    // console.log('menu_is_dropped:', menu_is_dropped);
  }
});

document
  .querySelector(".dropdown_menu")
  .addEventListener("transitionend", function () {
    if (toggle == true) {
      document.querySelector(".dropdown_menu").style.display = "none";
    }
  });

document
  .querySelector(".dropdown_menu")
  .addEventListener("focusout", function () {
    if (toggle == true) {
      document.querySelector(".dropdown_menu").style.display = "none";
    }
  });
document.onclick = (e) => {
  // console.log('state:', menu_is_dropped)
  // console.log('targer:', e.target);
  // console.log('className:', e.target.className);
  // console.log('tagName:', e.target.tagName);
  // console.log('innerText:', e.target.innerText);

  // && e.target.id != "drop_li"

  // if clicked not on the menu and the menu is dropped, close the menu
  if (
    e.target.id != "dropdown_menu_button" &&
    toggle == false &&
    e.target.id != "menu_list" &&
    e.target.className != "menu_li"
  ) {
    // console.log('NOT A TARGET');
    document.querySelector(".dropdown_menu").style.height = "0";
    toggle = !toggle;
  }
};
//
//     let menu_drop = document.getElementsByClassName("menu_drop")[0];
//     menu_drop.style.animation = "close 0.5s";
//     menu_drop.style.animationFillMode = "forwards";
//     // menu_drop.style.animationIterationCount = "3";

//     let b = document.getElementsByClassName("grid_container")[0];
//     b.style.filter = "blur(0)";

//     v = document.body.style.backgroundColor
//     c = document.body.style.color
//     document.body.style = `height: 0; overflow-y: visible; background-color:${v}; color: ${c};`

//     // document.body.style = "background-color: ${bgColor};"
//     // console.log('CHANGE BG')
//   }
// }

const out_of_bounds_dropdown = document.querySelector(
  ".out_of_bounds_dropdown"
);
// const grid_containter = document.querySelector(".grid_container");

// if clicked on the menu open, drop the menu
document
  .querySelector(".activate_out_of_bounds_dropdown")
  .addEventListener("click", (e) => {
    out_of_bounds_dropdown.style.animation = "open 0.5s";
    out_of_bounds_dropdown.style.animationFillMode = "forwards";
    // grid_containter.style.filter = "blur(2px)";
    document.body.style = `overflow-y: hidden;`;
    // bgc = document.body.style.backgroundColor;
    // c = document.body.style.color;
    // document.body.style = `height: 0; overflow-y: hidden; background-color:${bgc}; color: ${c};`
  });

// if clicked on the menu close, close the menu
document
  .querySelector(".deactivate_out_of_bounds_dropdown")
  .addEventListener("click", (e) => {
    out_of_bounds_dropdown.style.animation = "close 0.5s";
    out_of_bounds_dropdown.style.animationFillMode = "forwards";
    // grid_containter.style.filter = "blur(0)";
    document.body.style = `overflow-y: visible;`;
    // bgc = document.body.style.backgroundColor
    // c = document.body.style.color
    // document.body.style = `height: null; overflow-y: visible; background-color:${bgc}; color: ${c};`
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SCROLL TO THE TOP

// Get the button:
const scroll_button = document.getElementById("scroll_top");

// When the user scrolls down 1px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    scroll_button.style.display = "block";
  } else {
    scroll_button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DARK MODE TOGGLE

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// console.log(prefersDarkScheme);
if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
  // knob[i].classList.add("move");
} else {
  document.body.classList.remove("dark-theme");
  // knob[i].classList.remove("move");
}

const tog = document.getElementsByClassName("toggle");
const knob = document.getElementsByClassName("knob");

// move both toggle knobs on click

for (let i = 0; i < tog.length; i++) {
  tog[i].addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    knob[0].classList.toggle("move");
    knob[1].classList.toggle("move");
  });
}

// deprecated function. can delete
function toggle_dark_light_mode() {
  let tog = document.getElementsByClassName("toggle");
  let knob = document.getElementsByClassName("knob");

  for (var i = 0; i < tog.length; i++) {
    if (tog[i].style.backgroundColor == "white") {
      // tog[i].style.backgroundColor = "#222";
      knob[i].style.left = "4.8rem";
      knob[i].style.right = "0.15em";

      // document.querySelector('.body_wrapper').style.backgroundColor = '#222';
      // document.querySelector('.header_wrapper').style.backgroundColor = '#555';
      // document.querySelector('.ticker_item').style.backgroundColor = '#555';

      // document.body.style.backgroundColor = "#222";
      // document.body.style.color = 'white';
      // document.getElementsByClassName("header")[0].style.backgroundColor = "#222";
      // document.body.style.animation = "dark_mode_on 0.5s";
      // document.body.style.animationFillMode = "forwards";
    } else {
      // tog[i].style.backgroundColor = 'white';
      knob[i].style.left = "0.15em";
      knob[i].style.right = "4.8rem";

      // document.body.style.backgroundColor = "white";
      // document.body.style.color = "#222";
      // document.getElementsByClassName("header")[0].style.backgroundColor = "white";
      // document.body.style.animation = "dark_mode_off 0.5s";
      // document.body.style.animationFillMode = "forwards";
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HIDE LOGO AND MENU WHEN FOCUSING SEARCH BAR
// get implicit computed  mobile header's height and make it expicit
const header_mobile = document.querySelector(".header_mobile");
document.querySelector(".search_input").addEventListener("focus", (e) => {
  header_height = getComputedStyle(header_mobile).getPropertyValue("height");
  header_mobile.style.height = header_height;
  // console.log('header_height:', header_height);

  // document.querySelector('.logo.mobile').style.display = 'none';
  document.querySelector(".activate_out_of_bounds_dropdown").style.display =
    "none";
});

document.querySelector(".search_input").addEventListener("blur", (e) => {
  document.querySelector(".logo.mobile").style.display = "block";
  document.querySelector(".activate_out_of_bounds_dropdown").style.display =
    "block";
  document.querySelector(".header_mobile").style.height = "auto";
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// resize event listenter
window.addEventListener("resize", (e) => {
  // console.log(document.querySelector(':root').clientWidth);

  // prevent dropdown menu from drifting while resizing window
  const dropdown_menu = document.querySelector(".dropdown_menu");
  var compstyle = window.getComputedStyle(dropdown_menu);
  menu_width = compstyle.getPropertyValue("width");
  // console.log('menu_width:', menu_width);

  const dropdown_menu_button = document.querySelector(".dropdown_menu_button");
  var compstyle = window.getComputedStyle(dropdown_menu_button);
  button_width = compstyle.getPropertyValue("width");
  // console.log('button_width:', button_width);

  length = parseInt(menu_width, 10) - parseInt(button_width, 10) + "px";
  dropdown_menu.style.transform = `translate(-${length})`;

  // prevent popular menu slider from drifting while resizing window

  if (last_popular == "today") {
    rect = document
      .querySelector(".popular_bottom_today")
      .getBoundingClientRect();
    translate_popular_slider(rect);
  }
  if (last_popular == "week") {
    rect = document
      .querySelector(".popular_bottom_week")
      .getBoundingClientRect();
    translate_popular_slider(rect);
  }
  if (last_popular == "month") {
    rect = document
      .querySelector(".popular_bottom_month")
      .getBoundingClientRect();
    translate_popular_slider(rect);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// non blocking? sleep function

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function demo() {
  while (true) {
    await sleep(1000);
    // do stuff
  }
}

if (window.matchMedia("(width <= 1024px)").matches) {
}

document.querySelector(".markets_api").addEventListener("mouseover", dostuff);

function dostuff() {}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// popular news timeframe changer
const today = document.querySelector(".popular_bottom_today");
const week = document.querySelector(".popular_bottom_week");
const month = document.querySelector(".popular_bottom_month");

week.style.display = "none";
month.style.display = "none";

var last_popular = "today";

function translate_popular_slider(rect) {
  slider = document
    .querySelector(".popular_bottom_slider")
    .getBoundingClientRect();
  // console.log('slider:', slider.x);
  // console.log('rect', rect.x);
  var x = parseInt(slider.x, 10) - parseInt(rect.x, 10) + "px";
  document.querySelector(
    ".popular_bottom_slider"
  ).style.transform = `translateX(${x})`;
}

document.querySelector(".popular_today").addEventListener("click", (e) => {
  // week.style.display = 'none';
  // month.style.display = 'none';
  today.style.display = "block";
  rect = document
    .querySelector(".popular_bottom_today")
    .getBoundingClientRect();
  translate_popular_slider(rect);

  last_popular = "today";
});

document.querySelector(".popular_week").addEventListener("click", (e) => {
  week.style.display = "block";

  rect = document.querySelector(".popular_bottom_week").getBoundingClientRect();
  translate_popular_slider(rect);

  last_popular = "week";
});

document.querySelector(".popular_month").addEventListener("click", (e) => {
  month.style.display = "block";
  rect = document
    .querySelector(".popular_bottom_month")
    .getBoundingClientRect();
  translate_popular_slider(rect);

  last_popular = "month";
});
