window.addEventListener("load", function () {
  // 接收參數
  const params = new URLSearchParams(location.search);
  const p = JSON.parse(params.get("p"));
  //   获取元素
  var bg = document.querySelector(".item-bg");
  var items = document.querySelectorAll(".news__item");
  var item = document.querySelector(".news__item");

  function cLog(content) {
    console.log(content);
  }
  //   渲染页面数据
  let coat = data.coat;
  let tshirt = data.tshirt;
  let boots = data.boots;
  let cp = data.cosplay;
  console.log(p);

  //   循环外套数据
  for (var i = 0; i < coat.length; i++) {
    var lisid = coat[i].id;
    lisid = lisid.toString();
    //   console.log(lisid);
    //   循环获取到的参数数据并判断输出
    for (var m = 0; m < p.length; m++) {
      if (p[m].id == lisid) {
        // 获取图片
        var imgs = coat[i].coatimg;
        // 获取标题
        var names = coat[i].coatname;
        // 调用函数 数量 总价 尺码参数
        //   数量
        var count = Number(p[m].count);
        // 单价
        var price = Number(p[m].price);
        // 总价
        var pricelis = count * price;
        // 尺码参数
        var carchima = p[m].params;
        console.log(pricelis);
        console.log(carchima);

        loadcars();
      }
    }
  }
  //   循环T恤数据
  for (var i = 0; i < tshirt.length; i++) {
    var lisid = tshirt[i].id;
    lisid = lisid.toString();
    //   console.log(lisid);
    //   循环获取到的参数数据并判断输出
    for (var m = 0; m < p.length; m++) {
      if (p[m].id == lisid) {
        // 获取图片
        var imgs = tshirt[i].tshirtimg;
        // 获取标题
        var names = tshirt[i].tshirtname;
        // 调用函数 数量 总价 尺码参数
        //   数量
        var count = Number(p[m].count);
        // 单价
        var price = Number(p[m].price);
        // 总价
        var pricelis = count * price;
        // 尺码参数
        var carchima = p[m].params;
        console.log(pricelis);
        console.log(carchima);

        loadcars();
      }
    }
  }
  //   循环裤子数据
  for (var i = 0; i < boots.length; i++) {
    var lisid = boots[i].id;
    lisid = lisid.toString();
    //   console.log(lisid);
    //   循环获取到的参数数据并判断输出
    for (var m = 0; m < p.length; m++) {
      if (p[m].id == lisid) {
        // 获取图片
        var imgs = boots[i].bootsimg;
        // 获取标题
        var names = boots[i].bootsname;
        // 调用函数 数量 总价 尺码参数
        //   数量
        var count = Number(p[m].count);
        // 单价
        var price = Number(p[m].price);
        // 总价
        var pricelis = count * price;
        // 尺码参数
        var carchima = p[m].params;
        console.log(pricelis);
        console.log(carchima);

        loadcars();
      }
    }
  }
  //   循环cosplay数据
  for (var i = 0; i < cp.length; i++) {
    var lisid = cp[i].id;
    lisid = lisid.toString();
    //   console.log(lisid);
    //   循环获取到的参数数据并判断输出
    for (var m = 0; m < p.length; m++) {
      if (p[m].id == lisid) {
        // 获取图片
        var imgs = cp[i].cosplayimg;
        // 获取标题
        var names = cp[i].cosplayname;
        // 调用函数 数量 总价 尺码参数
        //   数量
        var count = Number(p[m].count);
        // 单价
        var price = Number(p[m].price);
        // 总价
        var pricelis = count * price;
        // 尺码参数
        var carchima = p[m].params;
        console.log(pricelis);
        console.log(carchima);

        loadcars();
      }
    }
  }
  // 渲染结算后的商品
  function loadcars() {
    const goodsdata = `
          <div class="news-slider__item swiper-slide">
          <a href="#" class="news__item">
            <div class="news__img">
              <img src="${imgs}" alt="news" />
            </div>
            <div class="news-date">
              <span class="news-date__title"><p>${names}</p></span>
              <span class="news-date__txt"
                ><p>您购买商品的尺码<span style="float:right">${carchima}</span></p>
                <p>您购买的数量<span style="float: right">${count}</span></p></span
              >
            </div>
            <div class="news__title"><p style="float: left">购买的该商品总价</p>
                  <p style="float: left; margin-left: 50px">${pricelis}</p></div>
          </a>
        </div>
          `;
    $(".news-slider__wrp").prepend(goodsdata);
  }
  if ($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {
      var newsItem = document.querySelectorAll(".news__item");
      newsItem.forEach(function (element, index) {
        element.addEventListener("mouseover", function () {
          var x = this.getBoundingClientRect().left;
          var y = this.getBoundingClientRect().top;
          var width = this.getBoundingClientRect().width;
          var height = this.getBoundingClientRect().height;

          $(".item-bg").addClass("active");
          $(".news__item").removeClass("active");
          // $('.news__item').removeClass('active');

          bg.style.width = width + "px";
          bg.style.height = height + "px";
          bg.style.transform =
            "translateX(" + x + "px ) translateY(" + y + "px)";
        });

        element.addEventListener("mouseleave", function () {
          $(".item-bg").removeClass("active");
          $(".news__item").removeClass("active");
        });
      });
    });
  }

  var swiper = new Swiper(".news-slider", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: "auto",
    speed: 300,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 3,
      slideShadows: false,
    },
    breakpoints: {
      480: {
        spaceBetween: 0,
        centeredSlides: true,
      },
    },
    simulateTouch: true,
    navigation: {
      nextEl: ".news-slider-next",
      prevEl: ".news-slider-prev",
    },
    pagination: {
      el: ".news-slider__pagination",
      clickable: true,
    },
    on: {
      init: function () {
        var activeItem = document.querySelector(".swiper-slide-active");

        var sliderItem = activeItem.querySelector(".news__item");

        $(".swiper-slide-active .news__item").addClass("active");

        var x = sliderItem.getBoundingClientRect().left;
        var y = sliderItem.getBoundingClientRect().top;
        var width = sliderItem.getBoundingClientRect().width;
        var height = sliderItem.getBoundingClientRect().height;

        $(".item-bg").addClass("active");

        bg.style.width = width + "px";
        bg.style.height = height + "px";
        bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
      },
    },
  });

  swiper.on("touchEnd", function () {
    $(".news__item").removeClass("active");
    $(".swiper-slide-active .news__item").addClass("active");
  });

  swiper.on("slideChange", function () {
    $(".news__item").removeClass("active");
  });

  swiper.on("slideChangeTransitionEnd", function () {
    $(".news__item").removeClass("active");
    var activeItem = document.querySelector(".swiper-slide-active");

    var sliderItem = activeItem.querySelector(".news__item");

    $(".swiper-slide-active .news__item").addClass("active");

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;

    $(".item-bg").addClass("active");

    bg.style.width = width + "px";
    bg.style.height = height + "px";
    bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
  });
});
