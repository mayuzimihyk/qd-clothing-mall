// 引入外部js文件时，需要注意：
// 如果是放在dom节点加载的前面，那么在js文件内部开头需要对window进行onload全部加载完毕在执行的操作
// 如果是放在dom节点加载的后面，那么在js文件内部则无需添加上面的操作
// 这里是添加的操作
// thp 先判断购物车是否有内容，有内容就累加，没有内容（第一次进入主页面就定义空数组）
let isNull = localStorage.getItem("gouwuche");
if (!isNull) {
  var datashuzu = [];
  // 保存数据
  localStorage.setItem("gouwuche", JSON.stringify(datashuzu));
}
window.addEventListener("load", function () {
  // 获取元素
  var Backtothetop = document.querySelector(".Backtothetop"); // 获取点击 回到顶部 的元素
  var indexbody = document.querySelector(".indexbody"); //获取 顶端11区头图 的元素
  var indexbodytop = indexbody.offsetTop; //被卷去头部的大小
  var Backtothetoptop = Backtothetop.offsetTop - indexbodytop; //当侧边栏固定定位之后应该变化的数值
  var thetop = document.querySelector(".thetop");
  var grxxli = document.querySelector(".grxxli");
  var grxxlilis = grxxli.children; //获取到该元素下的所有子元素
  var indextopleftlihover = document.querySelector(".indextopleftli-hover");
  var headerbottomright = document.querySelector(".headerbottomright");
  var headerbottomrightlis = headerbottomright.children; //得到该元素下的所有子元素
  var headerbottomrightbox = document.querySelector(".headerbottomright-box");
  var headerbottomleft = document.querySelector(".headerbottomleft");
  var headerbottomleftlis = headerbottomleft.children; //获取该元素的所有子元素
  var headerbottomleftmenu = document.querySelector(".headerbottomleftmenu");
  var Homepageclassificationselection = this.document.querySelector(
    ".Homepageclassificationselection"
  );
  var Homepageclassificationselectionlis =
    Homepageclassificationselection.children;
  var homeul = this.document.querySelector(".homeul"); //获取分类元素
  var homeullis = homeul.children;
  // 获取 店铺元素 跳转
  var dianpu = this.document.querySelector(".dianpu");
  var lias = document.querySelectorAll(".lia");
  var oneboxclick = document.querySelectorAll(".onebox-click");

  // 动画函数
  function animate(obj, target, callback) {
    // 先清除以前的定时器，只保留当前一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      // 把步长值写到定时器里面
      // 把步长值改为整数，不要出现小数的问题
      var step = (target - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset == target) {
        // 停止动画 本质是停止定时器
        clearInterval(obj.timer);
        // 回调函数写到定时器结束里面
        callback && callback();
      }
      // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式（目标值-现在的位置）/10
      // obj.style.left=window.pageYOffset+step+'px';
      window.scroll(0, window.pageYOffset + step);
    }, 15);
  }

  // 鼠标经过和鼠标离开等事件↓

  // 个人信息下面的事件
  for (var i = 0; i < grxxlilis.length; i++) {
    grxxli.addEventListener("mouseover", function () {
      grxxlilis[1].style.display = "block";
    });
    grxxli.addEventListener("mouseout", function () {
      grxxlilis[1].style.display = "none";
    });
  }
  // 淘宝二维码的事件
  for (var i = 0; i < headerbottomrightlis.length; i++) {
    headerbottomrightlis[i].addEventListener("mouseover", function () {
      headerbottomrightbox.style.display = "block";
    });
    headerbottomrightlis[i].addEventListener("mouseout", function () {
      headerbottomrightbox.style.display = "none";
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
  // 移入移出是否显示阴影的盒子
  for (var i = 0; i < lias.length; i++) {
    lias[i].onmouseenter = function () {
      this.classList.add("show");
      // shadow.style.display = 'block'
    };
    lias[i].onmouseleave = function () {
      this.classList.remove("show");
      // shadow.style.display = 'none'
    };
    // console.log(lias[i])
  }

  // 页面滚动事件 scroll ↓
  document.addEventListener("scroll", function () {
    if (window.pageYOffset >= indexbodytop) {
      Backtothetop.style.position = "fixed";
      Backtothetop.style.top = Backtothetoptop + "px";
    } else {
      Backtothetop.style.position = "absolute";
      Backtothetop.style.top = "900px";
    }
    if (window.pageYOffset >= indexbodytop) {
      thetop.style.display = "block";
    } else {
      thetop.style.display = "none";
    }
  });

  // 点击事件 click ↓
  Backtothetop.addEventListener("click", function () {
    animate(window, 0);
  });
  dianpu.addEventListener("click", function () {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = "index.html";
    a.click();
  });
  // 主页商品渲染到其他网页的数据存储
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
        }
        /* else {
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
        }
        /* else {
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
        }
        /* else {
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
        }
        /* else {
                         console.log('no')
                       } */
      }
    });
  }
  // 主页分类渲染其他网页的数据存储
  for (var i = 0; i < homeullis.length; i++) {
    // console.log(homeullis[i].children);
    homeullis[i].addEventListener("click", function () {
      // console.log(this.id);
      localStorage.setItem("homeul", JSON.stringify(this.id));
    });
  }
  // 本地存储只能存储字符串，所以需要存储的数据要先转换为字符串格式 JSON.stringify
  // localStorage.setItem('coatdata', JSON.stringify(data.coat))
  // var coatdata = localStorage.getItem('coatdata')
  // 获取本地存储的数据，需要将里面字符串数据转换为对象格式
  // coatdata = JSON.parse(coatdata)
  // console.log(coatdata)
});
