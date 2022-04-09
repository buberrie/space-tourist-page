const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navBar = document.getElementById('parent-nav');

openMenu.addEventListener('click', toggleButton);
closeMenu.addEventListener('click', toggleButton);

function toggleButton() { 
    navBar.classList.toggle('active')
    openMenu.classList.toggle('active')
    closeMenu.classList.toggle('active')
};


const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

console.log(tabs)
console.log(tabList)

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }
    
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }
    
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}

const buttons = document.querySelectorAll('.nav-tab');
console.log(buttons)

buttons.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});





function changeTabPanel(e) {
    const changeTab = e.target;
    const targetPanel = changeTab.getAttribute("page-tab");
    const targetImg = changeTab.getAttribute("page-image");
    const tabContainer = changeTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    
    console.log("clicked");
    console.log(targetImg);

    mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => panel.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    mainContainer
      .querySelectorAll('[role="imgpanel"]')
      .forEach((image) => image.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetImg}`]).removeAttribute('hidden');
    
}    
