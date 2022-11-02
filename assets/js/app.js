let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menuToggle");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// More Setting tab

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
// Checked Color Switcher 

// let check1 = document.getElementsByClassName('check1');
// let style1 = document.querySelector('.toggle-label')
// check1.addEventListener('click', function () {
//   if (check1.checked) {
//     style1.style.cssText = 'color:#26262E'
//   } else {
//     style1.style.cssText = 'color:#7D7D7E'
//   }
// });
function isCheck(cls, text_cls) {
  let check1 = document.getElementsByClassName(cls);
  let style1 = document.querySelector('.' + text_cls);
  console.log(check1, style1);
  // check1.addEventListener('click', function () {
  if (check1.checked) {
    style1.style.cssText = 'color:#26262E'
  } else {
    style1.style.cssText = 'color:#7D7D7E'
  }
  // });
}