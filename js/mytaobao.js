// 引入外部js文件时，需要注意：
// 如果是放在dom节点加载的前面，那么在js文件内部开头需要对window进行onload全部加载完毕在执行的操作
// 如果是放在dom节点加载的后面，那么在js文件内部则无需添加上面的操作
// 这里是添加的操作
// let isNull = localStorage.getItem("innertext");
// if (!isNull) {
//   var datashuzu = [];
//   // 保存数据
//   localStorage.setItem("innertext", JSON.stringify(datashuzu));
// }
window.addEventListener("load", function () {
  // 获取元素
  var Homepageclassificationselection = this.document.querySelector(
    ".Homepageclassificationselection"
  );
  var Homepageclassificationselectionlis =
    Homepageclassificationselection.children;
  var indexbottom = this.document.querySelector(".indexbottom");
  var homeul = this.document.querySelector(".homeul"); //获取分类元素
  var homeullis = homeul.children;
  var btngroup = this.document.querySelector(".btn-group"); //获取要加入购物车的五个尺码元素
  var btngroups = btngroup.children;
  var goumai = this.document.querySelector(".goumai"); //获取加入购物车按钮
  var jrgowuche = goumai.children[0];

  // 鼠标经过和鼠标离开
  // 所有分类移入移出事件
  for (var i = 0; i < Homepageclassificationselectionlis.length; i++) {
    Homepageclassificationselectionlis[i].children[0].addEventListener(
      "mouseover",
      function () {
        this.style.backgroundColor = "#BEE6FF";
        this.style.color = "#4E7BBE";
        homeul.style.display = "block";
        for (var i = 0; i < homeullis.length; i++) {
          homeullis[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#4E7BBE";
            this.children[0].style.color = "white";
          });
        }
      }
    );
    Homepageclassificationselectionlis[i].children[0].addEventListener(
      "mouseout",
      function () {
        this.style.backgroundColor = "#4E7BBE";
        this.style.color = "white";
        homeul.style.display = "none";
        for (var i = 0; i < homeullis.length; i++) {
          homeullis[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "#BEE6FF";
            this.children[0].style.color = "#4E7BBE";
          });
        }
      }
    );
  }

  //渲染页面数据
  //读取存储到datas的value值，并用mtbdatas接收
  var mtbdatas = this.localStorage.getItem("datas");
  // 将mtbdatas转为数值
  mtbdatas = Number(JSON.parse(mtbdatas));

  // 点击后获取页面元素然后加入到购物车页面
  function pushGWC() {
    // 调用尺码函数
    chimas();
    jrgowuche.addEventListener("click", function () {
      var datashuzu = localStorage.getItem("gouwuche");
      datashuzu = JSON.parse(datashuzu);
      console.log(datashuzu);
      datashuzu.push({
        img: dataidsimg,
        bt: dataidsname,
        rmb: dataidsrmb,
        id: dataidlis,
        chima: chima,
      });
      // console.log(datashuzu);
      // 保存数据
      localStorage.setItem("gouwuche", JSON.stringify(datashuzu));
      var local = window.localStorage.gouwuche;
      console.log(local); //string
      alert("已加入购物车");
    });
  }

  // 声明一个变量用来接收所有id的数据
  var dataids;
  // 这一步获取外套数据的每一个id
  for (var i = 0; i < data.coat.length; i++) {
    // 获取外套数据的id
    var coatids = data.coat[i].id;
    // 当读取到的value值等于外套数据的id的时候渲染
    if (mtbdatas == coatids) {
      dataids = data.coat[i];
      // console.log(dataids);
      dataidlis = dataids.id; // id
      dataidsimg = dataids.coatimg; // 图片
      dataidsname = dataids.coatname; // 标题
      dataidsrmb = dataids.coatmoney; // 价格
      dataidsimgs = dataids.climgs; // 商品详情图片
      // 动态添加元素到页面上 调用渲染图片的函数
      dataimg();
      // 添加标题
      dataname();
      // 添加价格
      datarmb();
      // 添加商品详情图片
      dataimgs();
      // 调用获取尺码的元素
      pushGWC();

      return;
    }
  }
  // 这一步获取T恤数据的每一个id
  for (var i = 0; i < data.tshirt.length; i++) {
    // 获取T恤数据的id
    var tshirtids = data.tshirt[i].id;
    // 当读取到的value值等于外套数据的id的时候渲染
    if (mtbdatas == tshirtids) {
      dataids = data.tshirt[i];

      console.log(dataids);
      dataidlis = dataids.id; // id
      dataidsimg = dataids.tshirtimg; // 图片
      dataidsname = dataids.tshirtname; // 标题
      dataidsrmb = dataids.tshirtmoney; // 价格

      dataidsimgs = dataids.climgs; // 商品详情图片
      // 动态添加元素到页面上 调用渲染图片的函数
      dataimg();
      // 添加标题
      dataname();
      // 添加价格
      datarmb();
      // 添加商品详情图片
      dataimgs();
      pushGWC();
      return;
    }
  }
  // 这一步获取裤子数据的每一个id
  for (var i = 0; i < data.boots.length; i++) {
    // 获取裤子数据的id
    var bootsids = data.boots[i].id;
    // 当读取到的value值等于外套数据的id的时候渲染
    if (mtbdatas == bootsids) {
      dataids = data.boots[i];
      console.log(dataids);
      dataidlis = dataids.id; // id
      dataidsimg = dataids.bootsimg; // 图片
      dataidsname = dataids.bootsname; // 标题
      dataidsrmb = dataids.bootsmoney; // 价格
      dataidsimgs = dataids.climgs; // 商品详情图片
      // 动态添加元素到页面上 调用渲染图片的函数
      dataimg();
      // 添加标题
      dataname();
      // 添加价格
      datarmb();
      // 添加商品详情图片
      dataimgs();
      pushGWC();
      return;
    }
  }
  // 这一步获取cos服装数据的每一个id
  for (var i = 0; i < data.cosplay.length; i++) {
    // 获取cos服装数据的id
    var cosplayids = data.cosplay[i].id;
    // 当读取到的value值等于外套数据的id的时候渲染
    if (mtbdatas == cosplayids) {
      dataids = data.cosplay[i];
      console.log(dataids);
      dataidlis = dataids.id; // id
      dataidsimg = dataids.cosplayimg; // 图片
      dataidsname = dataids.cosplayname; // 标题
      dataidsrmb = dataids.cosplaymoney; // 价格
      dataidsimgs = dataids.climgs; // 商品详情图片
      // 动态添加元素到页面上 调用渲染图片的函数
      dataimg();
      // 添加标题
      dataname();
      // 添加价格
      datarmb();
      // 添加商品详情图片
      dataimgs();
      pushGWC();
      return;
    }
  }
  // 声明一个渲染图片的函数
  function dataimg() {
    // 放大镜图片的参数调整
    $("<img>", {
      src: dataidsimg,
      title: "Фото",
      class: "my-foto",
    })
      .css({
        visibility: "visible",
      })
      .prependTo(".gsheadleft-top-img");
    var img = document.querySelector(".my-foto");
    img.setAttribute("data-large", dataidsimg);
    // 初始化图片放大镜的参数
    $(".xzoom").xzoom();
    $(function () {
      $(".my-foto").imagezoomsl({
        zoomrange: [3, 3],
      });
    });
    // 小图片跳转新窗口
    // 跳转的窗口
    $("<a>", {
      href: dataidsimg,
      target: "_blank",
      class: "xzoomthumbsa",
    })
      .css({})
      .prependTo(".xzoom-thumbs");
    // 显示出来的小图片
    $("<img>", {
      class: "xzoom-gallery",
      src: dataidsimg,
      xpreview: dataidsimg,
    })
      .css({})
      .prependTo(".xzoomthumbsa");
  }
  // 声明一个渲染标题的函数
  function dataname() {
    $(".textfont").prepend("<p class='title-p'>" + dataidsname + "</p>");
  }
  // 声明一个渲染价格的函数
  function datarmb() {
    $(".Promotionprice").append("<span>" + dataidsrmb + "</span>");
  }
  // 声明一个渲染商品详情的函数
  function dataimgs() {
    $.each(dataidsimgs, function (i, n) {
      $("#home").append("<img src=" + n + " id=" + i + ">");
      // console.log(i)
    });
  }
  // 尺码元素
  function chimas() {
    for (var i = 0; i < btngroups.length; i++) {
      // console.log(btngroups[i]);
      btngroups[i].addEventListener("click", function () {
        chima = this.innerHTML;
        console.log(chima);
      });
    }
  }
});
