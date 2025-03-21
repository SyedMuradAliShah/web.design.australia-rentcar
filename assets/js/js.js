// add sticky-class to header
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header");
  const stickyOffset = header.offsetTop;

  window.onscroll = function() {
      if (window.pageYOffset > stickyOffset) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }
  };
});

// add sticky-class to header
var swiper = new Swiper(".mySwiper", {
  // autoplay:true,
  loop:true,
});
// slider
var swiper = new Swiper(".myfleet", {
  spaceBetween: 30,
  grabCursor: true,
  autoplay:true,
  loop:true,
  navigation: {
    nextEl: ".service-next-one",
    prevEl: ".service-prev-one",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// slider
// mytestmonial
var swiper = new Swiper(".mytestmonial", {
  slidesPerView: 2,
  spaceBetween:50,
  grabCursor: true,
  autoplay:true,
  loop:true,
  navigation: {
    nextEl: ".service-next-one",
    prevEl: ".service-prev-one",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// mytestmonial

var swiper = new Swiper(".myImages", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// wizard-form
let currentTab = 3; // Set the second tab as active initially
const tabs = document.querySelectorAll('.tab');
const navLinks = document.querySelectorAll('.nav-pills .nav-link');

function showTab(index) {
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
    navLinks.forEach((link, i) => {
        link.classList.toggle('active', i === index);
        if (i <= index) {
            link.classList.remove('disabled');
        }
    });
    document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').innerText = index === tabs.length - 1 ? 'Submit' : 'Next';
}

function validateForm() {
    const inputs = tabs[currentTab].querySelectorAll('input, select');
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}

document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentTab < tabs.length - 1) {
        if (!validateForm()) return;
        currentTab++;
        showTab(currentTab);
    } else {
        document.getElementById('summaryName').innerText = document.getElementById('name').value;
        document.getElementById('summaryOption').innerText = document.getElementById('option').value;
        document.getElementById('summaryExtras').innerText = document.getElementById('extras').value;
        alert('Form submitted!');
    }
});

document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentTab > 0) {
        currentTab--;
        showTab(currentTab);
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'));
        if (index <= currentTab) {
            currentTab = index;
            showTab(currentTab);
        }
    });
});

// Initialize with Tab 2 as active
showTab(currentTab);

// wizard-form