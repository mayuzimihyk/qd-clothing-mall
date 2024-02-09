window.addEventListener("load", function () {
  // 个人信息下的获取
  var grxxli = document.querySelector(".grxxli");
  var grxxlilis = grxxli.children; //获取到该元素下的所有子元素

  // 个人信息下面的事件
  for (var i = 0; i < grxxlilis.length; i++) {
    grxxli.addEventListener("mouseover", function () {
      grxxlilis[1].style.display = "block";
    });
    grxxli.addEventListener("mouseout", function () {
      grxxlilis[1].style.display = "none";
    });
  }
  //   购物车数据
  var goodsList = [
    // {
    //   id: 1,
    //   imgUrl: 'imgs/商品外套imgs/时崎狂三外套.jpg',
    //   goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
    //   goodsParams: '四季度后付款的酸辣粉',
    //   price: 199,
    //   goodsCount: 1,
    //   singleGoodsMoney: 199
    // },
  ];
  // 读取最新的数据
  var goodlis = localStorage.getItem("gouwuche");
  // 转化为对象
  goodlis = JSON.parse(goodlis);
  // console.log(goodlis.length);

  for (var i = 0; i < goodlis.length; i++) {
    // 开始渲染的时候让数组为空
    goodsList = [];
    // console.log(goodlis[i].id);
    var gwclis = goodlis[i];
    goodsList.unshift({
      id: gwclis.id,
      imgUrl: gwclis.img,
      goodsInfo: gwclis.bt,
      goodsParams: gwclis.chima,
      price: gwclis.rmb,
      goodsCount: 1,
      singleGoodsMoney: gwclis.rmb,
    });
    loadGoods();
  }
  // 渲染页面数据
  function loadGoods() {
    $.each(goodsList, function (i, item) {
      // 动态添加购物车元素

      // 新思路
      // const goodsHtml = `
      //   <div class="goods-item">
      //     <div class="panel panel-default">
      //     <img class="goods-image" src="${item.imgUrl}" style="width: 100px; height: 100px;" />
      //   </div>
      // `;

      var goodsHtml =
        '<div class="goods-item">' +
        '<div class="panel panel-default">' +
        '<div class="panel-body">' +
        '<div class="col-md-1 car-goods-info">' +
        "<label>" +
        // input 装数据
        '<input type="checkbox" class="goods-list-item" data-id="' +
        item.id +
        '" data-params="' +
        item.goodsParams +
        '"' +
        '" data-count="' +
        item.goodsCount +
        '"' +
        '" data-price="' +
        item.price +
        '"' +
        " />" +
        "</label>" +
        "</div>" +
        '<div class="col-md-3 car-goods-info goods-image-column">' +
        '<img class="goods-image" src="' +
        item.imgUrl +
        '" style="width: 100px; height: 100px;" />' +
        '<span id="goods-info">' +
        item.goodsInfo +
        "</span>" +
        "</div>" +
        '<div class="col-md-3 car-goods-info goods-params">' +
        item.goodsParams +
        "</div>" +
        '<div class="col-md-1 car-goods-info goods-price"><span>￥</span><span class="single-price">' +
        item.price +
        "</span></div>" +
        '<div class="col-md-1 car-goods-info goods-counts">' +
        '<div class="input-group">' +
        '<div class="input-group-btn">' +
        '<button type="button" class="btn btn-default car-decrease">-</button>' +
        "</div>" +
        '<input type="text" class="form-control goods-count" value="' +
        item.goodsCount +
        '">' +
        '<div class="input-group-btn">' +
        '<button type="button" class="btn btn-default car-add">+</button>' +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="col-md-1 car-goods-info goods-money-count"><span>￥</span><span class="single-total">' +
        item.singleGoodsMoney +
        "</span></div>" +
        '<div class="col-md-2 car-goods-info goods-operate">' +
        '<button type="button" class="btn btn-danger item-delete" id="' +
        item.id +
        '">删除</button>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
      $(".goods-content").append(goodsHtml);
    });
  }
  // 渲染商品后所需要调的函数
  function ShoppingCarObserver(elInput, isAdd) {
    // 减少
    if (elInput) {
      this.elInput = elInput;
      this.parents = this.elInput.parents(".goods-item");
      this.count = parseInt(this.elInput.val());
      this.singlePrice = parseFloat(this.parents.find(".single-price").text());
    }
    // 增加
    if (isAdd) {
      this.isAdd = isAdd;
    }
    this.computeGoodsMoney = function () {
      //计算商品价格
      var moneyCount = this.count * this.singlePrice;
      var singleTotalEl = this.parents.find(".single-total");
      console.log(moneyCount);
      singleTotalEl.empty().append(moneyCount);
    };
    this.showCount = function () {
      // 计算商品选中数量
      var isChecked = this.parents.find(".goods-list-item")[0].checked;
      var GoodsTotalMoney = parseFloat($("#selectGoodsMoney").text());
      var goodsTotalCount = parseInt($("#selectGoodsCount").text());
      if (this.elInput) {
        if (this.isAdd) {
          ++this.count;
          if (isChecked) {
            $("#selectGoodsMoney")
              .empty()
              .append(GoodsTotalMoney + this.singlePrice);
            $("#selectGoodsCount")
              .empty()
              .append(goodsTotalCount + 1);
          }
        } else {
          if (parseInt(this.count) <= 1) {
            return;
          } else {
            --this.count;
            if (isChecked) {
              $("#selectGoodsMoney")
                .empty()
                .append(GoodsTotalMoney - this.singlePrice);
              $("#selectGoodsCount")
                .empty()
                .append(goodsTotalCount - 1);
            }
          }
        }
        this.elInput.val(this.count);
      }
    };
    this.checkIsAll = function () {
      //全选
      var checkLen = $(".goods-list-item:checked").length;
      if (checkLen > 0) {
        $(".submitData").removeClass("submitDis");
      } else {
        $(".submitData").addClass("submitDis");
      }
      if ($(".goods-item").length === checkLen && checkLen > 0) {
        $("#checked-all-bottom, #check-goods-all").prop("checked", true);
      } else {
        $("#checked-all-bottom, #check-goods-all").prop("checked", false);
      }
    };
    this.checkedChange = function (isChecked) {
      //选中状态改变， isChecked为选中状态
      if (isChecked === undefined) {
        var isChecked = this.parents.find(".goods-list-item")[0].checked;
      }
      var itemTotalMoney = parseFloat(
        this.parents.find(".single-total").text()
      );
      var GoodsTotalMoney = parseFloat($("#selectGoodsMoney").text());
      var itemCount = parseInt(this.parents.find(".goods-count").val());
      var goodsTotalCount = parseInt($("#selectGoodsCount").text());
      if (isChecked) {
        $("#selectGoodsMoney")
          .empty()
          .append(itemTotalMoney + GoodsTotalMoney);
        $("#selectGoodsCount")
          .empty()
          .append(itemCount + goodsTotalCount);
      } else {
        if (GoodsTotalMoney - itemTotalMoney === 0) {
          $("#selectGoodsMoney").empty().append("0.00");
          if (!$(".submitData").hasClass("submitDis")) {
            $(".submitData").addClass("submitDis");
          }
        } else {
          $("#selectGoodsMoney")
            .empty()
            .append(GoodsTotalMoney - itemTotalMoney);
        }
        $("#selectGoodsCount")
          .empty()
          .append(goodsTotalCount - itemCount);
      }
    };
    this.deleteGoods = function () {
      //删除商品
      var isChecked = this.parents.find(".goods-list-item")[0].checked;
      console.log(isChecked);
      if (isChecked) {
        this.checkedChange(false);
      }
      console.log(
        this.parents[0].children[0].children[0].children[1].innerText
      );
      // 获取删除的商品的描述信息
      var removecar =
        this.parents[0].children[0].children[0].children[1].innerText;
      console.log(removecar);
      // 获取存储在local上的数据
      var gouwuchelis = localStorage.getItem("gouwuche");
      gouwuchelis = JSON.parse(gouwuchelis);
      // 删除指定的该商品在localstorage上的数据存储
      for (var i = 0; i < gouwuchelis.length; i++) {
        if (removecar == gouwuchelis[i].bt) {
          // 删除该数据，只删除一个
          gouwuchelis.splice(i, 1);
          // 把删除后的最新数据重新存储
          sevadata(gouwuchelis);
        }
      }
      this.parents.remove();
      this.checkOptions();
    };
    this.checkOptions = function () {
      if ($("#check-goods-all")[0].checked) {
        if ($(".goods-list-item").length <= 0) {
          $("#checked-all-bottom, #check-goods-all").prop("checked", false);
        }
      } else {
        this.checkIsAll();
      }
    };
  }
  // 保存本地数据
  function sevadata(data) {
    localStorage.setItem("gouwuche", JSON.stringify(data));
  }
  function checkedAll(_this) {
    if ($(".goods-item").length <= 0) {
      $(".submitData").addClass("submitDis");
    } else {
      $(".submitData").removeClass("submitDis");
    }
    for (var i = 0; i < $(".goods-item").length; i++) {
      var elInput = $(".goods-item").eq(i).find(".goods-list-item");
      var isChecked = $(".goods-item")
        .eq(i)
        .find(".goods-list-item")[0].checked;
      var checkAllEvent = new ShoppingCarObserver(elInput, null);
      if (_this.checked) {
        if (!isChecked) {
          elInput.prop("checked", true);
          checkAllEvent.checkedChange(true);
        }
      } else {
        if (!$(".submitData").hasClass("submitDis")) {
          $(".submitData").addClass("submitDis");
        }
        if (isChecked) {
          elInput.prop("checked", false);
          checkAllEvent.checkedChange(false);
        }
      }
    }
  }
  $("#check-goods-all").on("change", function () {
    if (this.checked) {
      $("#checked-all-bottom").prop("checked", true);
    } else {
      $("#checked-all-bottom").prop("checked", false);
    }
    checkedAll(this);
  });
  $("#checked-all-bottom").on("change", function () {
    if (this.checked) {
      $("#check-goods-all").prop("checked", true);
    } else {
      $("#check-goods-all").prop("checked", false);
    }
    checkedAll(this);
  });
  $(".goods-list-item").on("change", function () {
    // TODO: 如果限制最大选择数量，超过 alert 退回，记得 return
    var tmpCheckEl = $(this);
    var checkEvent = new ShoppingCarObserver(tmpCheckEl, null);
    checkEvent.checkedChange();
    checkEvent.checkIsAll();
  });
  $("#jiesuan").on("click", function () {
    const selected = $(".goods-item input[type=checkbox]:checked");

    const arr = [];
    $.each(selected, (index, dom) => {
      const data = dom.dataset;
      arr.push({ ...data });
    });

    // 转换成 JSON，URI规范化
    const params = "p=" + encodeURIComponent(JSON.stringify(arr));

    // 打开新页面，跳转到结算页面
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = "jiesuan.html?" + params; // TODO 记得换网址
    a.click();
    localStorage.removeItem("gouwuche");
    // 重新渲染页面
    location.reload();
  });
  // 点击商品数量减少的时候计算减少后的价格
  $(".goods-content").on("click", ".car-decrease", function () {
    var goodsInput = $(this).parents(".input-group").find(".goods-count");
    var decreaseCount = new ShoppingCarObserver(goodsInput, false);
    decreaseCount.showCount();
    decreaseCount.computeGoodsMoney();

    // 修改內部的 input 來同步數量
    const count = goodsInput.val();
    $(this)
      .parents(".panel-body")
      .find("input[type=checkbox]")
      .attr("data-count", count);
  });
  // 点击商品数量增加的时候计算增加后的价格
  $(".goods-content").on("click", ".car-add", function () {
    var goodsInput = $(this).parents(".input-group").find(".goods-count");
    var addCount = new ShoppingCarObserver(goodsInput, true);
    addCount.showCount();
    addCount.computeGoodsMoney();

    // 修改內部的 input 來同步數量
    const count = goodsInput.val();
    $(this)
      .parents(".panel-body")
      .find("input[type=checkbox]")
      .attr("data-count", count);
  });
  // 点击右侧删除键 删除商品
  $(".goods-content").on("click", ".item-delete", function () {
    var goodsInput = $(this).parents(".goods-item").find(".goods-list-item");
    deleteGoods = new ShoppingCarObserver(goodsInput, null);
    $("#deleteItemTip").modal("show");
  });
  // 弹窗 确定删除该商品
  $(".deleteSure").on("click", function () {
    if (deleteGoods !== null) {
      deleteGoods.deleteGoods();
    }
    $("#deleteItemTip").modal("hide");
  });
  // 底端动态栏 删除键
  $("#deleteMulty").on("click", function () {
    // 判断选中的商品数 小于等于零就是没有选中商品 执行让并没有选中商品的弹窗显示
    // 否则 就让删除所选中的所有商品的弹窗显示
    if ($(".goods-list-item:checked").length <= 0) {
      $("#selectItemTip").modal("show");
    } else {
      $("#deleteMultyTip").modal("show");
    }
  });
  // 删除选中的所有商品
  $(".deleteMultySure").on("click", function () {
    // 循环删掉每一个被选中的商品数据
    for (var i = 0; i < $(".goods-list-item:checked").length; i++) {
      var multyDelete = new ShoppingCarObserver(
        $(".goods-list-item:checked").eq(i),
        null
      );
      multyDelete.deleteGoods();
      i--;
    }
    // alert(2)
    var checkCount = new ShoppingCarObserver();
    checkCount.checkOptions();
    $("#deleteMultyTip").modal("hide");
  });
});
