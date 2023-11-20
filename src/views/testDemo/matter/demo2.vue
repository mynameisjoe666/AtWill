<template>
  <div>
    <div id="MatterDemo"></div>
  </div>
</template>
<script>
import * as Matter from 'matter-js'
  // 中文网 http://www.cpiet.com/
 export default {
   data() {
     return {

     }
   },
   mounted() {
     document.body.style.minWidth = '0';
     document.documentElement.style.minWidth = '0';
     document.getElementById("app").style.minWidth = '0';
     // 引入 Matter.js 库
     // 创建引擎和渲染器
     // 创建引擎和渲染器
     const screenWidth = window.innerWidth; // 获取屏幕的宽度
     const screenHeight = window.innerHeight; // 获取屏幕的高度
     // 创建 Matter.js 引擎对象
     const { Engine, Render, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Events} = Matter

     const engine = Engine.create();
     const world = engine.world;

     // 创建渲染器
     const render = Render.create({
       element: document.getElementById('MatterDemo'),
       engine: engine,
       options: {
         width: screenWidth,
         height: screenHeight,
         background: '#fff',
         wireframeBackground: '#222',
         showAngleIndicator: true
       }
     });

     // 创建地面物体
     const ground = Bodies.rectangle(320, 480, 640, 40, {isStatic: true});

     // 创建小车的车体
     const carBody = Bodies.rectangle(320, 440, 50, 30, {restitution: 0.2, friction: 0.5});

     // 创建小车的车轮
     const wheelA = Bodies.circle(290, 460, 15, {restitution: 0.2, friction: 0.5});
     const wheelB = Bodies.circle(350, 460, 15, {restitution: 0.2, friction: 0.5});

     // 创建车轮与车体之间的约束
     const constraintA = Constraint.create({
       bodyA: carBody,
       pointA: {x: -25, y: 0},
       bodyB: wheelA,
       stiffness: 0.5,
       length: 0
     });
     const constraintB = Constraint.create({
       bodyA: carBody,
       pointA: {x: 25, y: 0},
       bodyB: wheelB,
       stiffness: 0.5,
       length: 0
     });

     // 创建鼠标约束，使小车可以被拖拽
     const mouse = Mouse.create(render.canvas),
         mouseConstraint = MouseConstraint.create(engine, {
           mouse: mouse,
           constraint: {
             stiffness: 0.2,
             render: {
               visible: false
             }
           }
         });

     // 添加物体和约束到世界中
     World.add(world, [ground, carBody, wheelA, wheelB, constraintA, constraintB]);
     World.add(world, [mouseConstraint]);

     // 监听鼠标移动事件，更新小车的位置
     Events.on(engine, 'beforeUpdate',(event)=> {
       if (event.body === carBody) {
         Body.setPosition(carBody, event.mouse.position);
       }
     });

     // 启动引擎和渲染器
     Engine.run(engine);
     Render.run(render);
   }
 }
</script>
<style scoped>
* {
  -webkit-user-select: none; /* 禁止用户选择文本 */
  user-select: none;
}
/* 示例CSS样式 */
.virtual-button {
  position: absolute;
  bottom: 20px; /* 设置按钮距离底部的距离 */
  width: 60px; /* 设置按钮的宽度 */
  height: 60px; /* 设置按钮的高度 */
  line-height: 60px; /* 设置按钮的行高，使文本垂直居中 */
  text-align: center; /* 设置文本居中对齐 */
  font-size: 24px; /* 设置文本字体大小 */
  color: #fff; /* 设置文本颜色 */
  background-color: #007bff; /* 设置按钮背景颜色 */
  cursor: pointer; /* 设置鼠标悬停时的光标样式 */
  -webkit-user-select: none; /* 禁止用户选择文本 */
  user-select: none;
  /* 可根据需求设置其他样式，例如边框、圆角等 */
}

/* 左侧按钮样式 */
#leftButton {
  left: 20px; /* 设置按钮距离左侧的距离 */
}

/* 右侧按钮样式 */
#rightButton {
  right: 20px; /* 设置按钮距离右侧的距离 */
}

/* 右侧跳跃按钮样式 */
#jumpButton {
  right: 20px; /* 设置按钮距离右侧的距离 */
  bottom: 100px; /* 设置按钮距离底部的距离 */
}
</style>
