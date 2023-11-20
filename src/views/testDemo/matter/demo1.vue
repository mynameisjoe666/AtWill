<template>
  <div>
    <div id="MatterDemo"></div>
    <div id="step" class="step" :class="{show: ait}" :style="{'left':`${left}px`, top:`${top}px`}">{{ait ? aite[Math.floor(Math.random() * 10) + 1] : ''}}</div>
    <div class="virtual-button">
      <div id="leftButton" >A左</div>
      <div id="rightButton" >D右</div>
      <div id="jumpButton" >空格跳</div>
    </div>
  </div>
</template>
<script>
  // 中文网 http://www.cpiet.com/
 import * as Matter from 'matter-js'
 export default {
   data() {
     return {
       left:0,
       top:0,
       ait:false,
       aite:  ['啊？', '鸡你太美', '你大爷的', '我是徐景超', '徐井考了母', '#$%@%#@&$^#@', 'giao', '别特么碰我','啊？' ]
     }
   },
   mounted() {
     const that = this
     document.body.style.minWidth = '0';
     document.documentElement.style.minWidth = '0';
     document.getElementById("app").style.minWidth = '0';
     // 引入 Matter.js 库
     const { Engine, Render, World, Bodies, Body, Events } = Matter;
      console.log(Matter)
     // 创建一个 Matter.js 引擎
     const engine = Engine.create({
       // 设置重力加速度
       options: {
         gravity: { x: 0, y: 12 } // 可根据需要调整 x 和 y 分量
       }
     });
     const world = engine.world;
     const screenWidth = 1024; // 获取屏幕的宽度
     const screenHeight = 900; // 获取屏幕的高度
     // 创建一个渲染器并添加到页面中
     const render = Render.create({
       element: document.getElementById('MatterDemo'),
       engine: engine,
       options: {
         width: screenWidth,
         height: screenHeight,
         wireframes: false
       }
     });

     Render.run(render);



     // 创建地面
     const platform = Bodies.rectangle(0, 600, screenWidth * 2 - 300, 100, { isStatic: true });
     World.add(world, platform);

     // 创建平台
     const ground3 = Bodies.rectangle(screenWidth, 100, screenWidth - 400, 30, { isStatic: true });
     World.add(world, ground3);


     // 创建平台
     const ground = Bodies.rectangle(0, 200, screenWidth * 2 - 200, 30, { isStatic: true });
     World.add(world, ground);

     const ground2Right = Bodies.rectangle(screenWidth, 400, screenWidth- 200, 30, { isStatic: true });
     World.add(world, ground2Right);
     const platform2 = Bodies.rectangle(0, 400, screenWidth  - 500, 30, { isStatic: true });
     World.add(world, platform2);

     // 创建墙壁
     const wallLeft = Bodies.rectangle(0, 300, 50, 600, { isStatic: true });
     const wallRight = Bodies.rectangle(screenWidth, 300, 50, 600, { isStatic: true });
     World.add(world, [wallLeft, wallRight]);

     // 创建人物
     const character = Bodies.rectangle(screenWidth, 200, 50, 50, { mass: 1.5 });
     character.frictionAir = 0.01; // 设置空气摩擦力
     World.add(world, character);

     // 创建人物2
     const character2 = Bodies.rectangle(screenWidth, 310, 50, 50, { mass: 1.5 });
     character2.frictionAir = 0.01; // 设置空气摩擦力
     World.add(world, character2);


     // 获取虚拟按键的DOM元素
     const leftButton = document.getElementById('leftButton');
     const rightButton = document.getElementById('rightButton');
     const jumpButton = document.getElementById('jumpButton');

     // 监听左侧按钮的touchstart事件
     leftButton.addEventListener('touchstart', () => {
       keys[65] = true;
     });
     leftButton.addEventListener('touchend', () => {
       keys[65] = false;
     });


     rightButton.addEventListener('touchstart', () => {
       keys[68] = true;
     });

     rightButton.addEventListener('touchend', () => {
       keys[68] = false;
     });

// 监听跳跃按钮的touchstart事件
     jumpButton.addEventListener('touchstart', () => {
       keys[32] = true;
     });
     jumpButton.addEventListener('touchend', () => {
       keys[32] = false;
     });


     // 监听键盘事件
     const keys = {};
     document.addEventListener('keydown', (event) => {
       const { keyCode } = event;
       keys[keyCode] = true;
       event.preventDefault()
     });

     document.addEventListener('keyup', (event) => {
       const { keyCode } = event;
       keys[keyCode] = false;
       event.preventDefault()
     });

     // 定义事件处理函数
     const myCallback = () => {
       // 在更新循环时执行的逻辑
       const { x, y } = character.velocity;
       const speed = 0.005;
       // const characterY = character.position.y; // 获取人物角色的 y 坐标


       // 按下空格键时，如果人物在地面上，则给人物一个向上的冲量，实现跳跃
       if (keys[32] && y < 2) {
         Body.applyForce(character, character.position, { x: 0, y: -0.005 });
       }

       // 按下左箭头键时，给人物一个向左的冲量，实现向左移动
       if (keys[65]) {
         Body.applyForce(character, character.position, { x: -speed, y: 0 });
       }

       // 按下右箭头键时，给人物一个向右的冲量，实现向右移动
       if (keys[68]) {
         Body.applyForce(character, character.position, { x: speed, y: 0 });
       }

       // 限制人物的最大速度
       if (x > 3) {
         Body.setVelocity(character, { x: 3, y: y });
       } else if (x < -3) {
         Body.setVelocity(character, { x: -3, y: y });
       }
     };
     Events.on(engine, 'collisionStart', (event) => {
       const pairs = event.pairs;
       pairs.forEach((pair) => {
         if (pair.bodyA === character && pair.bodyB === character2) {
           // console.log('character and character2 collided');
           const { x, y } = character2.position;
           that.left = x
           that.top = y
           that.ait = true
           setTimeout(()=> {
             that.ait = false
           }, 400)
           console.log( this.left)
           // 在这里可以执行碰撞发生时的逻辑操作
         }
       });
     });
     // 在每一帧更新人物状态
     Events.on(engine, 'beforeUpdate',myCallback);
     // 启动引擎
     Engine.run(engine);
   }
 }
</script>
<style lang="less" >
* {
  -webkit-user-select: none; /* 禁止用户选择文本 */
  user-select: none;
}
/* 示例CSS样式 */
.virtual-button {
  position: absolute;
  bottom: 20px; /* 设置按钮距离底部的距离 */
  width: 50%;
  line-height: 60px; /* 设置按钮的行高，使文本垂直居中 */
  text-align: center; /* 设置文本居中对齐 */
  font-size: 24px; /* 设置文本字体大小 */
  color: #fff; /* 设置文本颜色 */
  cursor: pointer; /* 设置鼠标悬停时的光标样式 */
  -webkit-user-select: none; /* 禁止用户选择文本 */
  user-select: none;
  display: flex;
  div {
    margin-right: 30px;
    padding: 20px;
    background-color: #007bff;
  }
  /* 可根据需求设置其他样式，例如边框、圆角等 */
}
.step {
  position: absolute;
  top: 60px;
  left: 0;
  color: #ffffff;
  opacity: 0;
  transition: all 0.5s;
}
.show {
  transform: translateY(-20px) scale(3);
  opacity: 1;
}
::selection {
  background-color: yellow;
  color: black;
}
</style>
