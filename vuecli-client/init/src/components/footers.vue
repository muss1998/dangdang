<template>
  <div class="footer">
    <div class="topimg">
      <div class="imgfont1"></div>
      <div class="imgfont2"></div>
      <div class="imgfont3"></div>
      <div class="imgfont4"></div>
    </div>
    <div class="guide">
      <div class="buttom">
        <span class="buttom-title">购物指南</span>
        <ul class="buttom-littletitle">
          <li>购物流程</li>
          <li>发票制度</li>
          <li>服务协议</li>
          <li>会员优惠</li>
        </ul>
      </div>

      <div class="buttom">
        <span class="buttom-title">支付方式</span>
        <ul class="buttom-littletitle">
          <li>网上支付</li>
          <li>礼品卡支付</li>
          <li>银行转帐</li>
          <li>礼券支付</li>
        </ul>
      </div>

      <div class="buttom">
        <span class="buttom-title">订单服务</span>
        <ul class="buttom-littletitle">
          <li>购物流程</li>
          <li>订单状态说明</li>
          <li>自助取消订单</li>
          <li>自助修改订单</li>
        </ul>
      </div>

      <div class="buttom">
        <span class="buttom-title">配送方式</span>
        <ul class="buttom-littletitle">
          <li>当日递</li>
          <li>次日达</li>
          <li>订单自提</li>
          <li>验货与签收</li>
        </ul>
      </div>

      <div class="buttom">
        <span class="buttom-title">退换货</span>
        <ul class="buttom-littletitle">
          <li>退换货服务查询</li>
          <li>自助申请退换货</li>
          <li>退换货进度查询</li>
          <li>退款方式和时间</li>
        </ul>
      </div>

      <div class="buttom">
        <span class="buttom-title">商家服务</span>
        <ul class="buttom-littletitle">
          <li>商家中心</li>
          <li>运营服务</li>
          <li>加入尾品汇</li>
          <li>意见反馈</li>
        </ul>
      </div>
    </div>
    <div class="last">
      <ul>
        <li>公司简历</li>
        <span>|</span>
        <li>诚聘英才</li>
        <span>|</span>

        <li>网站联盟</li>
        <span>|</span>

        <li>当当招聘</li>
        <span>|</span>

        <li>机构销售</li>
        <span>|</span>

        <li>手机当当</li>
        <span>|</span>

        <li>官方Blog</li>
        <span>|</span>

        <li>热词搜索</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style  scoped>
.footer {
  margin-top: 10px;
  width: 100%;
  height: 420px;
  overflow: hidden;
}
.footer .topimg {
  margin-top: 20px;
  width: 100%;
  height: 78px;
  display: flex;
  padding-left: 300px;
  background-color: #f4f4f4;
  overflow: hidden;
}
.footer .topimg .imgfont1 {
  width: 15%;
  height: 70px;
  background: url("../img/buttom-img.png") no-repeat;
  background-position: 22px 1px;
  background-size: 180px 274px;
}

.footer .topimg .imgfont2 {
  width: 15%;
  height: 70px;
  background: url("../img/buttom-img.png") no-repeat;
  background-position: 22px -67px;
  background-size: 180px 274px;
}

.footer .topimg .imgfont3 {
  width: 15%;
  height: 70px;
  background: url("../img/buttom-img.png") no-repeat;
  background-position: 22px -136px;
  background-size: 180px 274px;
}

.footer .topimg .imgfont4 {
  width: 15%;
  height: 70px;
  background: url("../img/buttom-img.png") no-repeat;
  background-position: 22px -205px;
  background-size: 180px 274px;
}
.footer .guide {
  width: 64.5%;
  height: 140px;
  margin-left: 300px;
  margin-top: 40px;
}
.footer .last {
  width: 100%;
  height: 100px;
}
.footer .last ul {
  margin-left: 24%;
}
.footer .last ul li {
  display: inline-block;
  list-style: none;
  cursor: pointer;
  color: #8c8c8c;
  font-size: 12px;
}
.footer .last span {
  margin: 0 17px 0 19px;
  color: #8c8c8c;
  font-size: 12px;
}
.footer .last li :hover {
  color: red;
  text-decoration: underline;
}

.buttom {
  display: inline-block;
  width: 142px;
  height: 116px;
}

.buttom-title {
  padding-left: 43px;
  font-size: 14px;
  font-family: "microsoft yahei";
  color: #323232;
  height: 36px;
  line-height: 36px;
}

.buttom-littletitle {
  padding: 0;
  list-style: none;
  margin: 0;
}

.buttom-littletitle li {
  text-align: center;
  line-height: 20px;
  height: 20px;
  margin-top: 4px;
  list-style-type: none;
  border: 0;
  font-size: 12px;
}
</style>