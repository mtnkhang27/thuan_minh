if ($("body").length) {
  $("body").append(`
  <div class="popup-notification">
    <div class="popup-notification__icon"></div>
    <div class="popup-notification__content"></div>
  </div>
  `);
}
function showNotification(type, content) {
  console.log(type, content);
  if (type == "success") {
    $(".popup-notification").addClass("success");
    $(".popup-notification__icon").html('<i class="fa-solid fa-circle-check"></i>');
    $(".popup-notification__content").text(content);
    setTimeout(() => {
      $(".popup-notification").removeClass("success");
    }, 4000);
  } else if (type == "error") {
    $(".popup-notification").addClass("error");
    $(".popup-notification__icon").html('<i class="fa-solid fa-circle-exclamation"></i>');
    $(".popup-notification__content").text(content);
    setTimeout(() => {
      $(".popup-notification").removeClass("error");
    }, 4000);
  }
}

if ($(".header__search").length) {
  $(".header__search__icon").click(function (e) {
    e.preventDefault();
    $(".header__search__popup").addClass("active");
    $(".header__search__field")[0].focus();
  });
  $(".header__search__close").click(function (e) {
    e.preventDefault();
    $(".header__search__popup").removeClass("active");
  });
}

if ($(".header__menu").length) {
  $(".header__menu > ul > li > a > i").each(function (inx, item) {
    $(item).click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(item).parents("li").find(".header__dropdown").slideToggle();
      $(item).parents("li").toggleClass("activeMb");
    });
  });
}

if ($(".header__bars").length) {
  $(".header__bars").click(function (e) {
    e.preventDefault();
    $(".header__modal").addClass("active");
    $(".header__bot").addClass("active");
  });
  $(".header__modal").click(function (e) {
    e.preventDefault();
    $(".header__modal").removeClass("active");
    $(".header__bot").removeClass("active");
  });
  $(".header__bot__close").click(function (e) {
    e.preventDefault();
    $(".header__modal").removeClass("active");
    $(".header__bot").removeClass("active");
  });
}

if ($(".homeBanner__list").length) {
  $(".homeBanner__total").text(`0${$(".homeBanner__item").length}`);
  $(".homeBanner__list").slick({
    speed: 700,
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $(".homeBanner__list").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".homeBanner__current").text(`0${nextSlide + 1}`);
  });
}

if ($(".header").length) {
  const heightHeader = $(".header").height();
  $(".header").height(heightHeader);
  $(window).scroll(function () {
    if ($(this).scrollTop() > heightHeader * 1) {
      $(".header__sticky").addClass("sticky");
    } else {
      $(".header__sticky").removeClass("sticky");
    }
    if ($(this).scrollTop() > heightHeader * 2) {
      $(".header__sticky").addClass("slide");
    } else {
      $(".header__sticky").removeClass("slide");
    }
  });
}
if ($(".sideBar").length) {
  $(".sideBar").css({
    top: `${$(".header").height()}px`,
  });
}
if ($(".contact__list").length) {
  $(".contact__list").css({
    top: `${$(".header").height()}px`,
  });
}
if ($(".homeProduct__list").length) {
  $(".homeProduct__list").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
if ($(".homeNews__list").length) {
  $(".homeNews__list").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
}

if ($(".to-top").length) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > window.innerHeight * 2) {
      $(".to-top").addClass("active");
    } else {
      $(".to-top").removeClass("active");
    }
  });
}

if ($(".aboutSlider__list").length) {
  $(".aboutSlider__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
}
if ($(".aboutPartner").length) {
  $(".aboutPartner").slick({
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
}

if ($(".aboutContact__select__field").length) {
  $(".aboutContact__select__field").click(function (e) {
    e.preventDefault();
    $(".aboutContact__select__dropdown").toggleClass("active");
  });
  $(".aboutContact__select__dropdown ul li").each(function (inx, item) {
    $(item).click(function (e) {
      $(".aboutContact__select__dropdown").removeClass("active");
      $(".aboutContact__select__dropdown ul li.selected").removeClass("selected");
      $(item).addClass("selected");
      console.log($(item).attr("data-value"));
      $("#type-product").val($(item).attr("data-value"));
    });
  });
}

if (document.querySelector(".aboutContact__form")) {
  document.querySelector(".aboutContact__form").addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Validate Fullname
    const fullname = document.getElementById("fullname");
    const fullnameError = document.getElementById("fullnameError");
    if (fullname.value.trim() === "") {
      fullnameError.textContent = $(fullname).data("required");
      isValid = false;
    } else {
      fullnameError.textContent = "";
    }

    // Validate Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      emailError.textContent = $(email).data("required");
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate Phone
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    if (phone.value.trim() === "") {
      phoneError.textContent = $(phone).data("required");
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Validate Request
    const request = document.getElementById("request");
    const requestError = document.getElementById("requestError");
    if (request.value.trim() === "") {
      requestError.textContent = $(request).data("required");
      isValid = false;
    } else {
      requestError.textContent = "";
    }

    // Validate Address
    const address = document.getElementById("address");
    const addressError = document.getElementById("addressError");
    if (address.value.trim() === "") {
      addressError.textContent = $(address).data("required");
      isValid = false;
    } else {
      addressError.textContent = "";
    }

    // Validate Type Product
    const typeProduct = document.getElementById("type-product");
    const typeProductError = document.getElementById("typeProductError");
    console.log(typeProduct.value);
    if (typeProduct.value.trim() === "" || typeProduct.value === "Chọn Loại Sản Phẩm") {
      typeProductError.textContent = $(typeProduct).data("required");
      isValid = false;
    } else {
      typeProductError.textContent = "";
    }

    if (isValid) {
      saveDataAbout();
      // console.log("thành công")
    }
  });
}
if ($(".detailProduct__slider").length) {
  $(".detailProduct__slider").slick({
    dots: true,
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
  });
}

if ($(".detailProduct__tab").length) {
  $(".detailProduct__tab").each(function (inx, item) {
    $(item).click(function (e) {
      e.preventDefault();
      $(item).toggleClass("active");
      $(".detailProduct__tab__dropdown").eq(inx).slideToggle();
    });
  });
}
if (document.getElementById("contact-form")) {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    let isValid = true;

    // Validate Fullname
    const fullname = document.getElementById("fullname");
    const fullnameError = document.getElementById("fullnameError");
    if (fullname.value.trim() === "") {
      fullnameError.textContent = $(fullname).data("required");
      isValid = false;
    } else {
      fullnameError.textContent = "";
    }

    // Validate Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (email.value.trim() === "") {
      emailError.textContent = $(email).data("required");
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate Phone
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    if (phone.value.trim() === "") {
      phoneError.textContent = $(phone).data("required");
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Validate Title
    const title = document.getElementById("title");
    const titleError = document.getElementById("titleError");
    if (title.value.trim() === "") {
      titleError.textContent = $(title).data("required");
      isValid = false;
    } else {
      titleError.textContent = "";
    }

    // Validate Message
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
      messageError.textContent = $(message).data("required");
      isValid = false;
    } else {
      messageError.textContent = "";
    }
    event.preventDefault();

    if (isValid) {
      saveData();
    }
  });
}

AOS.init({
  once: true,
  anchorPlacement: "top-top",
});

if($(".tabs__item").length){
  $(".tabs__item").each(function(inx, item){
    $(item).click(function (e) { 
      $(".tabs__item.active").removeClass("active")
      $(item).addClass("active")
    });
  })
}

// search
if ($(".section-search__item").length) {
  const allItem = $(".section-search__item");
  const pagination = $(".section-search__pagination");
  const length = $(".section-search__item").length;
  const limit = 10;
  const allRows = Math.ceil(length / limit);
  function appearItem(limit, active) {
    allItem.each(function (inx, item) {
      if (limit * active + 1 <= inx + 1 && inx + 1 <= limit * active + 10) {
        $(item).addClass("appear");
      } else {
        $(item).removeClass("appear");
      }
    });
    $(pagination).html("");
    for (var inx = 1; inx <= allRows; inx++) {
      const link = document.createElement("a");
      if (inx - 1 == active) {
        $(link).addClass("active");
      }
      const text = document.createElement("span");
      $(text).text(inx);
      $(text).appendTo(link);
      $(link).appendTo(pagination);
    }
    $(".section-search__pagination a").each(function (inx, item) {
      $(item).click(function (e) {
        appearItem(limit, inx);
      });
    });
    $("#searchDetail").text(`${(active + 1) * limit - limit + 1} - ${(active + 1) * limit}`);
    $("#searchPage").text(`${active + 1}`);
    $("html,body").animate(
      {
        scrollTop: $(".section-search__heading").offset().top - $(".header").height(),
      },
      0
    );
  }
  appearItem(limit, 0);
}