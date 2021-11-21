var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Login href
// const login = $("#login");
// login.onclick = () => {
//   window.location = "views/facebook.hbs";
// };

// header slider
var navArrowLeft = $(".arrow-left");
var navArrowRight = $(".arrow-right");

var prev = $(".slick-prev");
var next = $(".slick-next");

navArrowLeft.onclick = function () {
  $(".nav").style.transform = "translateX(0%)";
  $(".icon-arrow-right").style.display = "block";
  $(".icon-arrow-left").style.display = "none";
};

navArrowRight.onclick = function () {
  $(".nav").style.transform = "translateX(-40.7%)";
  $(".icon-arrow-left").style.display = "block";
  $(".icon-arrow-right").style.display = "none";
};
var counts = 0;
var i = 1;
var transform = [
  "translateX(0)",
  "translateX(-100%)",
  "translateX(-200%)",
  "translateX(-300%)",
  "translateX(-400%)",
  "translateX(-500%)",
  "translateX(-600%)",
  "translateX(-700%)",
  "translateX(-800%)",
  "translateX(-900%)",
  "translateX(-1000%)",
  "translateX(-1100%)",
  "translateX(-1200%)",
  "translateX(-1300%)",
];

const stickDots = $$(".stick");
stickDots.forEach(function (stick, index) {
  stick.onclick = function () {
    $(".stick-acctive").classList.remove("stick-acctive");
    this.classList.add("stick-acctive");
    $(".banner-img").style.transform = transform[index];
    counts = index;
    i = index;
  };
});

setInterval(() => {
  $(".banner-img").style.transform = transform[i];
  $(".stick-acctive").classList.remove("stick-acctive");
  stickDots[i].classList.add("stick-acctive");
  counts = i;

  i++;
  if (i > 13) {
    i = 0;
  }
}, 8000);

next.onclick = function () {
  counts++;
  i = counts;
  if (counts > 13) {
    counts = 0;
  }
  $(".banner-img").style.transform = transform[counts];
  $(".stick-acctive").classList.remove("stick-acctive");
  stickDots[counts].classList.add("stick-acctive");
};

prev.onclick = function () {
  counts--;
  i = counts;
  if (counts < 0) {
    counts = 13;
  }
  $(".banner-img").style.transform = transform[counts];
  $(".stick-acctive").classList.remove("stick-acctive");
  stickDots[counts].classList.add("stick-acctive");
};

// CountDown Timer
setInterval(() => {
  let currentHours = new Date().getHours();
  var saleTime = new Date();
  var time = new Date();
  if (currentHours < 6) {
    saleTime.setHours(6);
    saleTime.setMinutes(0);
    saleTime.setSeconds(0);
  } else if (currentHours < 12) {
    saleTime.setHours(12);
    saleTime.setMinutes(0);
    saleTime.setSeconds(0);
  } else if (currentHours < 18) {
    saleTime.setHours(18);
    saleTime.setMinutes(0);
    saleTime.setSeconds(0);
  } else {
    saleTime.setHours(23);
    saleTime.setMinutes(59);
    saleTime.setSeconds(59);
    saleTime.setMilliseconds(59);
  }
  let distance = saleTime - time;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  $(".hour").innerHTML = h;
  $(".min").innerHTML = m;
  $(".sec").innerHTML = s;
}, 1000);

// Produit
$(".produit-next").onclick = function () {
  $(".produit-trans").style.transform = "translateX(-100%)";
  $(".produit-next").style.display = "none";
  $(".produit-prev").style.display = "block";
};

$(".produit-prev").onclick = function () {
  $(".produit-trans").style.transform = "translateX(0)";
  $(".produit-prev").style.display = "none";
  $(".produit-next").style.display = "block";
};

// trademark slider
const trademarkDots = $$(".trademark-slider .dots");
const markNext = $(".trademark-hot .next");
const markPrev = $(".trademark-hot .prev");
const markSlider = [
  "translateX(0%)",
  "translateX(-100%)",
  "translateX(-200%)",
  "translateX(-300%)",
  "translateX(-400%)",
];
// dots click
trademarkDots.forEach((dot, index) => {
  dot.onclick = function () {
    $(".trademark-dots .dots-acctive").classList.remove("dots-acctive");
    this.classList.add("dots-acctive");
    $(".hot-img").style.transform = markSlider[index];
    a = index;
    b = index;
  };
});

var a = 0;
var b = 0;
setInterval(() => {
  $(".hot-img").style.transform = markSlider[a];
  $(".trademark-dots .dots-acctive").classList.remove("dots-acctive");
  trademarkDots[a].classList.add("dots-acctive");
  b = a;
  a++;
  if (a > 4) {
    a = 0;
  }
}, 5000);

// Next
markNext.onclick = function () {
  b++;
  if (b > 4) {
    b = 0;
  }
  a = b;
  $(".hot-img").style.transform = markSlider[b];
  $(".trademark-dots .dots-acctive").classList.remove("dots-acctive");
  trademarkDots[b].classList.add("dots-acctive");
};
// Prev
markPrev.onclick = function () {
  b--;
  if (b < 0) {
    b = 4;
  }
  a = b;
  $(".hot-img").style.transform = markSlider[b];
  $(".trademark-dots .dots-acctive").classList.remove("dots-acctive");
  trademarkDots[b].classList.add("dots-acctive");
};

// Discount

function discount() {
  const discount = $(".discount");
  let left = $(".discount__icon--left");
  let right = $(".discount__icon--right");
  const discountContainer = $(".discount__container");
  const discountSlide = [
    "translateX(0)",
    "translateX(-100%)",
    "translateX(-200%)",
    "translateX(-300%)",
  ];
  let i = 0;
  right.onclick = function () {
    i++;
    discountContainer.style.transform = discountSlide[i];
    if (i === 0) {
      discount.classList.add("at--first");
      discount.classList.remove("at--last");
      discount.classList.remove("at--middle");
      right.style.display = "block";
    } else if (i === discountSlide.length - 1) {
      discount.classList.add("at--last");
      discount.classList.remove("at--first");
      discount.classList.remove("at--middle");
      right.style.display = "none";
      left.style.display = "block";
    } else {
      discount.classList.add("at--middle");
      discount.classList.remove("at--first");
      discount.classList.remove("at--last");
      left.style.display = "block";
      right.style.display = "block";
    }
  };
  left.onclick = function () {
    i--;
    discountContainer.style.transform = discountSlide[i];
    if (i === 0) {
      discount.classList.remove("at--middle");
      discount.classList.remove("at--last");
      discount.classList.add("at--first");
      left.style.display = "none";
      right.style.display = "block";
    } else if (i === discountSlide.length - 1) {
      discount.classList.remove("at--middle");
      discount.classList.remove("at--first");
      discount.classList.add("at--last");
      left.style.display = "block";
      right.style.display = "none";
    } else {
      discount.classList.remove("at--first");
      discount.classList.remove("at--last");
      discount.classList.add("at--middle");
      left.style.display = "block";
      right.style.display = "block";
    }
  };
}
discount();

// trends
function trends() {
  let left = $(".icon--left");
  let right = $(".icon--right");
  let trendsBody = $(".trends__body");
  const trendsSlide = $(".trends__items");
  let i = 0;
  let slidePosition = ["translateX(0)", "translateX(-100.6%)"];
  right.onclick = function () {
    i++;
    trendsSlide.style.transform = slidePosition[i];
    if (i === 0) {
      trendsBody.classList.add("at--first");
      trendsBody.classList.remove("at--last");
      trendsBody.classList.remove("at--middle");
      left.style.display = "none";
      right.style.display = "flex";
    } else if (i === slidePosition.length - 1) {
      trendsBody.classList.add("at--last");
      trendsBody.classList.remove("at--first");
      trendsBody.classList.remove("at--middle");
      right.style.display = "none";
      left.style.display = "flex";
    } else {
      trendsBody.classList.add("at--middle");
      trendsBody.classList.remove("at--first");
      trendsBody.classList.remove("at--last");
      left.style.display = "flex";
      right.style.display = "flex";
    }
  };
  left.onclick = function () {
    i--;
    trendsSlide.style.transform = slidePosition[i];
    if (i === 0) {
      trendsBody.classList.add("at--first");
      trendsBody.classList.remove("at--middle");
      trendsBody.classList.remove("at--last");
      left.style.display = "none";
      right.style.display = "flex";
    } else if (i === slidePosition.length - 1) {
      trendsBody.classList.add("at--last");
      trendsBody.classList.remove("at--middle");
      trendsBody.classList.remove("at--first");
      left.style.display = "flex";
      right.style.display = "none";
    } else {
      trendsBody.classList.add("at--middle");
      trendsBody.classList.remove("at--first");
      trendsBody.classList.remove("at--last");
      left.style.display = "flex";
      right.style.display = "flex";
    }
  };
}
trends();

// suggestion__tab

function tab() {
  let tabs = $$(".suggestion__tab");
  tabs.forEach((tab, index) => {
    tab.onclick = function () {
      $(".tab--acctive").classList.remove("tab--acctive");
      this.classList.add("tab--acctive");
    };
  });
}
tab();

// suggestion__more
function suggestionMore() {
  let more = $(".suggestion__more");
  let collapse = $(".suggestion__collapse");
  more.onclick = function () {
    $(".clone").style.display = "flex";
    collapse.style.display = "block";
    more.style.display = "none";
  };
  collapse.onclick = function () {
    $(".clone").style.display = "none";
    collapse.style.display = "none";
    more.style.display = "block";
  };
}
suggestionMore();
