<template>
  <!--手风琴组件-->
  <div>
    <ul>
      <li>
        <div class="title" @click="toggle(1)">
          <span style="color:red">1 </span> 一个人就一个人
        </div>
        <transition name="slide">
          <div class="content" v-show="show===1">
            <slot name="one"></slot>
          </div>
        </transition>
      </li>
      <p></p>
      <li>
        <div class="title" @click="toggle(2)">
          <span style="color:red">2 </span>东野圭吾：祈念守护人（东野圭吾2020年全新长篇，全球同步发售）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===2">
            <slot name="two"></slot>
          </div>
        </transition>
      </li>
      <li>
        <div class="title" @click="toggle(3)">
          <span style="color:red">3 </span>半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===3">
            <slot name="three"></slot>
          </div>
        </transition>
      </li>
       <li>
        <div class="title" @click="toggle(4)">
          <span style="color:red">4 </span>半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===4">
            <slot name="four"></slot>
          </div>
        </transition>
      </li> <li>
        <div class="title" @click="toggle(5)">
          <span style="color:red">5 </span>半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===5">
            <slot name="five"></slot>
          </div>
        </transition>
      </li> <li>
        <div class="title" @click="toggle(6)">
          <span style="color:red">6 </span>半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===6">
            <slot name="six"></slot>
          </div>
        </transition>
      </li> <li>
        <div class="title" @click="toggle(7)">
          <span style="color:red">7 </span>半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===7">
            <slot name="seven"></slot>
          </div>
        </transition>
      </li> <li>
        <div class="title" @click="toggle(8)">
          <span style="color:red">8 </span>半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===8">
            <slot name="eight"></slot>
          </div>
        </transition>
      </li> <li>
        <div class="title" @click="toggle(9)">
          <span style="color:red">9 </span>半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）
        </div>
        <transition name="slide">
          <div class="content" v-show="show===9">
            <slot name="nine"></slot>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: "Alaccordion",
  data() {
    return {
      show: 1
    };
  },
  methods: {
    toggle(index) {
      // 获取index 来判断当前点击并展示
      this.show = index;
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  margin-bottom: 4px;
}
.title {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px dotted #849555;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content {
  color: black;
}
/* 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。也就是说dom刚渲染所执行的动画。 */
.slide-enter {
  max-height: 0px;
}
/* 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。 */
.slide-enter-active {
  transition: all 0.2s ease;
}
/*  2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。 */
.slide-enter-to {
  max-height: 1000px;
}

/* 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。 */
.slide-leave {
  max-height: 1000px;
}
/* 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 */
.slide-leave-active {
  transition: all 0.2s ease;
}
/*  2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。 */
.slide-leave-to {
  max-height: 0px;
}
</style>
