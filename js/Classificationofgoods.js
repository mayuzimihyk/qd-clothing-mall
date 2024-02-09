window.addEventListener("load", function () {
  // 获取元素

  //   店铺栏的元素获取
  var headerbottomleft = document.querySelector(".headerbottomleft");
  var headerbottomleftlis = headerbottomleft.children; //获取该元素的所有子元素
  var headerbottomleftmenu = document.querySelector(".headerbottomleftmenu");
  // 个人信息下的获取
  var grxxli = document.querySelector(".grxxli");
  var grxxlilis = grxxli.children; //获取到该元素下的所有子元素
  // 用手机逛网站元素的获取
  var headerbottomright = document.querySelector(".headerbottomright");
  var headerbottomrightlis = headerbottomright.children; //得到该元素下的所有子元素
  var headerbottomrightbox = document.querySelector(".headerbottomright-box");
  var dianpu = this.document.querySelector(".dianpu");
  // 淘宝二维码的事件
  for (var i = 0; i < headerbottomrightlis.length; i++) {
    headerbottomrightlis[i].addEventListener("mouseover", function () {
      headerbottomrightbox.style.display = "block";
    });
    headerbottomrightlis[i].addEventListener("mouseout", function () {
      headerbottomrightbox.style.display = "none";
    });
  }
  // 个人信息下面的事件
  for (var i = 0; i < grxxlilis.length; i++) {
    grxxli.addEventListener("mouseover", function () {
      grxxlilis[1].style.display = "block";
    });
    grxxli.addEventListener("mouseout", function () {
      grxxlilis[1].style.display = "none";
    });
  }
  // 店铺一栏移入移出事件
  for (var i = 0; i < headerbottomleftlis.length; i++) {
    headerbottomleftlis[i].addEventListener("mouseover", function () {
      headerbottomleftmenu.style.display = "block";
    });
    headerbottomleftlis[i].addEventListener("mouseout", function () {
      headerbottomleftmenu.style.display = "none";
    });
  }
  // 点击事件
  dianpu.addEventListener("click", function () {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = "index.html";
    a.click();
  });
  // 渲染本页加载数据
  var dropdownmenuid = localStorage.getItem("homeul");
  dropdownmenuid = JSON.parse(dropdownmenuid);
  console.log();
  var coatul = data.coat[0].title;
  var tshirtul = data.tshirt[0].title;
  var bootsul = data.boots[0].title;
  var cosplayul = data.cosplay[0].title;
  // console.log(data.coat.length);
  if (dropdownmenuid == coatul) {
    //渲染的外套数据
    for (var i = 0; i < data.coat.length; i++) {
      daimgs = data.coat[i].coatimg; //图片
      danames = data.coat[i].coatname; //标题
      damoneys = data.coat[i].coatmoney; //价格
      daids = data.coat[i].id; //id
      divs();
    }
  } else if (dropdownmenuid == tshirtul) {
    //渲染的T恤数据
    for (var i = 0; i < data.tshirt.length; i++) {
      daimgs = data.tshirt[i].tshirtimg; //图片
      danames = data.tshirt[i].tshirtname; //标题
      damoneys = data.tshirt[i].tshirtmoney; //价格
      daids = data.tshirt[i].id; //id
      divs();
    }
  } else if (dropdownmenuid == bootsul) {
    //渲染的裤子数据
    for (var i = 0; i < data.boots.length; i++) {
      daimgs = data.boots[i].bootsimg; //图片
      danames = data.boots[i].bootsname; //标题
      damoneys = data.boots[i].bootsmoney; //价格
      daids = data.boots[i].id; //id
      divs();
    }
  } else if (dropdownmenuid == cosplayul) {
    //渲染的cosplay数据
    for (var i = 0; i < data.cosplay.length; i++) {
      daimgs = data.cosplay[i].cosplayimg; //图片
      danames = data.cosplay[i].cosplayname; //标题
      damoneys = data.cosplay[i].cosplaymoney; //价格
      daids = data.cosplay[i].id; //id
      divs();
    }
  }
  // 声明渲染框架的函数
  function divs() {
    $(".row").append(
      '<div class="col-md-3 col-sm-6"><div class="product-grid"> <div class="product-image"><a class="onebox-click" href="mytaobao.html" id=' +
        daids +
        '><img class="pic-1" data-lazy-src="' +
        daimgs +
        '" src="' +
        daimgs +
        '" data-comp="true" style="visibility: visible;"></div><div class="product-content"><h3 class="title"><a href="javascript:;">' +
        danames +
        '</a></h3><div class="price">' +
        damoneys +
        '</div></div><ul class="social"><li><a class="onebox-click" href="mytaobao.html" data-tip="查看详情" id=' +
        daids +
        '><i class="fa fa-search"></i></a></li></ul></div></div>'
    );
  }
  // 主页商品渲染到其他网页的数据存储
  var oneboxclick = document.querySelectorAll(".onebox-click");
  // console.log(oneboxclick);
  for (var i = 0; i < oneboxclick.length; i++) {
    // console.log(oneboxclick[i])
    oneboxclick[i].addEventListener("click", function () {
      console.log(this.id);
      console.log("上面获取点击立即购买后获得的该按钮的id信息");
      // 存储点击对象的id到local里面
      var datas = this.id;
      localStorage.setItem("datas", JSON.stringify(datas));
      // 这一步获取外套数据的每一个id
      for (var i = 0; i < data.coat.length; i++) {
        // 获取外套数据的id
        var coatid = data.coat[i].id;
        // console.log(coatid)
        if (this.id == coatid) {
          console.log(data.coat[i]);
        } /* else {
          console.log('no')
        } */
      }
      // 这一步获取T恤数据的每一个id
      for (var i = 0; i < data.tshirt.length; i++) {
        // 获取T恤数据的id
        var tshirtid = data.tshirt[i].id;
        // console.log(tshirtid)
        if (this.id == tshirtid) {
          console.log(data.tshirt[i]);
        } /* else {
          console.log('no')
        } */
      }
      // 这一步获取裤子数据的每一个id
      for (var i = 0; i < data.boots.length; i++) {
        // 获取T恤数据的id
        var bootsid = data.boots[i].id;
        // console.log(bootsid)
        if (this.id == bootsid) {
          console.log(data.boots[i]);
        } /* else {
          console.log('no')
        } */
      }
      // 这一步获取cos服装数据的每一个id
      for (var i = 0; i < data.cosplay.length; i++) {
        // 获取T恤数据的id
        var cosplayid = data.cosplay[i].id;
        // console.log(bootsid)
        if (this.id == cosplayid) {
          console.log(data.cosplay[i]);
        } /* else {
          console.log('no')
        } */
      }
    });
  }
  // 初始化懒加载插件
  lazyLoadInit({
    // 图片即将显示时覆盖层的颜色
    coverColor: "white",
    // 图片距离屏幕底部出现时间点的距离差值
    offsetBottom: 0,
    // 图片距离屏幕底部出现时间点的距离差值
    offsetTopm: 0,
    // 加载时间
    showTime: 500,
    // 图片已经完全出现时的回调函数，参数为（index，event）加载的图片下标，以及dom对象
    onLoadBackEnd: function (i, e) {
      // console.log("onLoadBackEnd:" + i);
    },
    // 图片已经下载完成，即将开始显示时的回调函数（参数同上）
    onLoadBackStart: function (i, e) {
      // console.log("onLoadBackStart:" + i);
    },
  });
  // <!-- 分类渲染 -->
  var dropdownmenu = this.document.querySelector(".dropdown-menu"); //获取分类元素
  var dropdownmenulis = dropdownmenu.children;
  // 数据渲染页分类渲染其他网页的数据存储
  for (var i = 0; i < dropdownmenulis.length; i++) {
    // console.log(dropdownmenulis[i].children);
    dropdownmenulis[i].addEventListener("click", function () {
      console.log(this.id);
      localStorage.setItem("homeul", JSON.stringify(this.id));
    });
  }
  // 获取图片的父元素盒子高度，然后根据高度来改变最底部大盒子的margintop值
  var demos = this.document.querySelector(".demo").offsetHeight;

  // 改变根据商品加载栏的高度而变化的父盒子的高度
  demos = demos + 14;
  // console.log(demos);
  $(".indexbody").css({
    paddingBottom: 15 + "px",
  });
  $(".indexbody").height(demos);
  $(".wcss").css({
    paddingBottom: 15 + "px",
  });
  $(".wcss").height(demos);
});
