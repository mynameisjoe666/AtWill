<template>
  <div class="map-app">
    <div style="width: 100vw; height: 100vh" id="container"></div>
<!--    <div class="input-card" style="width: auto;">-->
<!--      <div class="input-item">-->
<!--        <button class="btn" @click="getOneOverlay()">-->
<!--          <img width="20" :src="iconType[0]" alt="">-->
<!--          找超儿哥-->
<!--        </button>-->
<!--      </div>-->
<!--      <div class="input-item">-->
<!--        <button class="btn" @click="hideClassUser(0)"><img width="20" :src="iconType[1]" alt="">显示人员</button>-->
<!--      </div>-->
<!--      <div class="input-item">-->
<!--        <button class="btn" @click="layerGroup.setOptions({ opacity: Math.random()})"><img width="20" :src="iconType[2]" alt="">显示医院</button>-->
<!--      </div>-->
<!--      <div class="input-item">-->
<!--        <button class="btn" @click="layerGroup.reload()"><img width="20" :src="iconType[3]" alt="">重载图层</button>-->
<!--      </div>-->
<!--      <div class="input-item">-->
<!--        <button class="btn" @click="layerGroup.reload()"><img width="20" :src="hospitalImg" alt="">重载图层</button>-->
<!--      </div>-->
<!--    </div>-->

    <div :class="['left-box ',{'active':Object.keys(active).length != 0 }]">

      <template v-if="active.type == 1">
        <div  class="box-title-bar">
          <div class="user-icon"><i class="el-icon-s-custom"></i></div>
          <ul>
            <li style="font-weight: bold">{{active.title}} ({{active.id}})</li>
            <li>部门 | 岗位 | 地区</li>
            <li>{{ active.telephone }}</li>
          </ul>
        </div>
      </template>

      <template v-else-if="active.type == 2">
        <div class="hospital-img"><img :src="active.imgUrl" alt="" /></div>
      </template>

    </div>

    <div class="bottom-bar">
      <el-tooltip v-for="(item, index) in iconType" :key="`hos${index}`" class="list" effect="dark" :content="item.tip" placement="top">
        <div @click="hideClassUser(item.id)" :class="['list',{active:item.show}]"><img  :src="item.iconUrl" alt=""></div>
      </el-tooltip>
      <el-popover
          class="list"
          placement="top"
          width="200"
          style="padding: 0px"
          v-model="visible">
        <p style="font-size: 12px"><i style="font-size: 14px; color: blue" class="el-icon-warning-outline"></i>选择计算方式并填写天数进行已工作天数的人员筛选，可选"大于"、"等于"、"小于" 等计算方式。</p>
        <div class="work-screen">
          <el-select style="width: 100px; margin-right: 10px" size="small" v-model="workDayValue" placeholder="请选择">
            <el-option
                v-for="item in workDayOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-input-number v-model="num" @change="handleChangeWorkDay" size="small" :min="0" :max="31" label="天数"></el-input-number>
        </div>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="handleWorkDay('reset')">重置</el-button>
          <el-button type="primary" size="mini" @click="handleWorkDay('confirm')">确定</el-button>
        </div>
        <div slot="reference" class="list" style="padding: 8px"><i style="font-size: 32px" class="el-icon-set-up"></i></div>
      </el-popover>

      <div class="list" style="padding: 8px"><img  :src="hospitalImg" alt=""></div>
      <div class="list" style="padding: 0"><i class="el-icon-question"></i></div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import mapData from './china_traffic_event.json'
export default {
  name: "index",
  data() {
    return {
      num:0,
      securityJsCode: '6e49e3627daafcbdba46c6a3e186ddc0',
      options: {
        "key": "fe9854e772aa56f6bc4d51bbf5ca64a6",
        "version": "2.0",
        "plugins": []
      },
      workDayOptions: [{
        value: '1',
        label: '大于'
      }, {
        value: '2',
        label: '等于'
      }, {
        value: '3',
        label: '小于'
      }],
      geocoder:null,
      workDayValue: '',
      map:null,
      visible: false,
      show:false,
      active: {},
      layerGroup: null,
      engineerNum: 70,
      markers: [],
      hospitalImg: require('./ui/hospital.svg'),
      iconType:[
        { iconUrl:require('./ui/marker-red.png'), id:0, show: true, tip:'正在出差中的人' },
        { iconUrl:require('./ui/marker-green.png'), id:1,show: true, tip: '准备离开场地，或者待命中的人' },
        {iconUrl:require('@/assets/mapUser/marker-orange.png'), id:2,show:true, tip: '请假的员工，不方便接受派工的人'},
        // {iconUrl: require('@/assets/mapUser/marker-orange.png'), id:3,show:true, tip: '当月出差天数已经达到18天的人'},
        // { iconUrl: require('./ui/marker-purple.png'), id:2,show: true, tip: '当月出差天数，小于5天的人' },
        { iconUrl: require('./ui/marker-black.png'), id:3,show: true, tip: '因天然灾害，疫情管控，无法出行，或者正在隔离的人' },
      ],
      usedNumbers:[],
      disposition: [],
      hospital: [
        {
          id: `hospital_1`,
          type: '2', // 1人 2医院
          positions: [111.54376, 29.279275],
          title: `医院_1`,
          telephone: 18888810099,
          imgUrl:require('./WX20231027-132713.png') ,
          iconUrl:require('./ui/hospital.svg'),
          style: {
            width: '80px',
            height: '80px'
          }
        },
        {
          id: `hospital_2`,
          type: '2', // 1人 2医院
          positions: [118.36627, 29.680957],
          title: `医院_2`,
          telephone: 18888810099,
          imgUrl:require('./WX20231027-132713.png') ,
          iconUrl:require('./ui/hospital.svg'),
          style: {
            width: '80px',
            height: '80px'
          }
        }
      ]
    }
  },
  methods: {
    handleWorkDay(type) {
      if(type == 'reset') {
        this.workDayValue = ''
        this.num = ''
      } else  {
        this.markers.map((item)=> {
          let ExtData = item.getExtData()
          if(this.num === '' || this.workDayValue === '') {
            item.show()
            return
          }
          if(ExtData.type == '1' && this.iconType[ExtData.status].show) {
            console.log(ExtData.status)
             if(this.workDayValue == 1 && ExtData.workDay > this.num) {
               item.show()
             } else if (this.workDayValue == 2 && ExtData.workDay == this.num) {
               item.show()
             } else if (this.workDayValue == 3 && ExtData.workDay < this.num) {
               item.show()
             } else {
               item.hide()
             }
          }
        })
        this.visible = false
      }
    },
    handleChangeWorkDay() {

    },
    generateUniqueRandomNumber(max) {
      let randomNumber
      do {
        randomNumber = Math.floor(Math.random() * max)
      } while (this.usedNumbers.includes(randomNumber))
      this.usedNumbers.push(randomNumber)
      return randomNumber
    },
    hideClassUser(status) {
      let arr = []
      for(let i = 0; i<this.markers.length; i++) {
        if(this.markers[i].getExtData().status == status) {
          arr.push(this.markers[i].getExtData())
        }
      }
      this.iconType[status].show = !this.iconType[status].show
      arr.map(res=> {
        if(this.num === '' || this.workDayValue === '') {
          this.selectType('id', res.id)[this.iconType[status].show ? 'show' : 'hide']()
          return
        }
        if(res.type == '1') {
          if(this.workDayValue == 1 && res.workDay > this.num) {
            this.selectType('id', res.id)[this.iconType[status].show ? 'show' : 'hide']()
          } else if (this.workDayValue == 2 && res.workDay == this.num) {
            this.selectType('id', res.id)[this.iconType[status].show ? 'show' : 'hide']()
          } else if (this.workDayValue == 3 && res.workDay < this.num) {
            this.selectType('id', res.id)[this.iconType[status].show ? 'show' : 'hide']()
          } else {
            this.selectType('id', res.id).hide()
          }
        }
      })
    },
    selectType(type = 'id', value = 2) {
      let targetId = value
      let targetMarker
      for(let i = 0; i < this.markers.length; i++){
        let id = this.markers[i].getExtData()[type];
        if(id === targetId){
          targetMarker = this.markers[i]
          break;
        }
      }
      return targetMarker
    },
    getOneOverlay(num,zoom = 0) {
      let obj =  this.selectType('id', num)
      // console.log(obj)
      let position =  obj.getPosition()
      let titleBar
      let address
      this.geocoder.getAddress(position, (status, result)=> {
        if (status === 'complete'&&result.regeocode) {
          address = result.regeocode.formattedAddress;
          this.active = obj.getExtData()
          console.log(this.active)
          switch (this.active.type) {
              case '1' :
                titleBar = `<div style="padding: 10px">
                    <p>${address}</p>
<!--                    <p> 已工作 ${this.active.workDay} 天</p>-->
                  </div>`
                  break
              case '2':
                titleBar = `<div style="padding: 10px">
                    <p>${this.active.title}</p>
                    <p>${address}</p>
                  </div>`
                   break
              default:
          }
          let infoWindow = new AMap.InfoWindow({
            position: position,
            closeWhenClickMap: true,
            offset: new AMap.Pixel(0, -35),
            content: titleBar
          });
          this.map.setZoomAndCenter(zoom, position)
          infoWindow.open(this.map)
          // document.getElementById('address').value = address;
        }else{
          console.log.error('根据经纬度查询地址失败')
        }
      });


    },
    generateRandomCoordinate() {
      const floorMapData = mapData.features[this.generateUniqueRandomNumber(330)].geometry.coordinates
      const longitude = floorMapData[0]
      const latitude = floorMapData[1]
      return [longitude, latitude]
    },
    init() {
      window._AMapSecurityConfig = {
        securityJsCode: this.securityJsCode,
      }
      window.handleClick = (i) => {
        this.getOneOverlay(i, 7)
      }
      this.disposition = Array.from({length: this.engineerNum}, (_, index) => {
        const randomCoordinate = this.generateRandomCoordinate()
        const status = Math.floor(Math.random() * 4)
        return ({
          id: `user${index}`,
          type: '1', // 1人 2医院
          workDay: Math.floor(Math.random() * 4),
          status: status,
          positions: [randomCoordinate[0], randomCoordinate[1]],
          title: `工程师${index}`,
          telephone: 18888810099,
          iconUrl: this.iconType[status].iconUrl,
          style: {
            width: '25px',
            height: '34px'
          }
        })
      })
    },
    async createMap () {
      this.init()

      const AMap = await AMapLoader.load(this.options)

      this.map = new AMap.Map('container', {
        center: [108.908772, 38.690225],
        zoom: 4.8,
        mapStyle: 'amap://styles/whitesmoke',
        showBuildingBlock: false,
        showIndoorMap: false,
        showLabel: true,
        viewMode: '3D',
      });

      this.map.plugin(["AMap.ControlBar","AMap.ToolBar", "AMap.Geocoder"],()=> {
        const toolBar = new AMap.ToolBar({
          visible: true,
          position: {
            top: '110px',
            right: '40px'
          }
        })
        const controlBar = new AMap.ControlBar({
          visible: true,
          position: {
            top: '10px',
            right: '10px'
          }
        })

        this.geocoder = new AMap.Geocoder({
          radius: 500 //范围，默认：500
        });

        this.map.addControl(toolBar);
        this.map.addControl(controlBar);
      });



      this.map.on('click', () => {
        this.active = {}
      });

      let createMarker = (item)=> {
        const markerContent =
            `<div style="width: ${item.style.width};height: ${item.style.height}" onclick="handleClick('${item.id}')" class="custom-content-marker">
                 <img src="${item.iconUrl}">
             </div>`
        let position = new AMap.LngLat(item.positions[0], item.positions[1]);
        let marker = new AMap.Marker({
          position: position,
          content: markerContent,
          offset: new AMap.Pixel(-13, -30),
          extData:{
            ...item
          }
        });
        return marker
      }

      const hospitalMarkers = this.hospital.map(createMarker);
      const userMarkers = this.disposition.map(createMarker);
      this.markers = [...this.markers, ...hospitalMarkers, ...userMarkers];
      this.map.add(this.markers);
    }
  },
  mounted() {
    this.createMap()
  }
}
</script>

<style lang="less">

.box-title-bar {
  width: 100% ;
  background-color: #2569f7;
  display: flex;
  padding: 30px 30px;
  box-sizing: border-box;
  color: #fff;
  border-radius: 5px;
  & > ul {
    margin-left: 20px;
  }
}

.hospital-img {
  height: 120px;
  img {
    width: 100%;
    border-radius: 5px;
  }
}

@keyframes slide-in {
  0% {
    width: 80px;
    height: 80px;
    opacity: 1;
    transform: translateX(-100%)  scale(0);
    background-color: blue;
  }
  50% {
    width: 80px;
    height: 80px;
    opacity: 1;
    transform: translateX(-100%)  scale(1.6);
    background-color: blue;
  }
  70% {
    width: 80px;
    opacity: 1;
    transform: translateX(-100%)  scale(1);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-inse {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.bottom-bar {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 3em;
  left: 0;
  right: 0;
  margin: auto;
  width: 430px;
  overflow: hidden;
  height: 80px;
  box-sizing: border-box;
  //-webkit-backdrop-filter: saturate(180%) blur(20px);
  //backdrop-filter: saturate(180%) blur(20px);
  //box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  opacity: 0;


 //border: white solid 1px;
  border:rgba(255,255,255,0.2) 1px solid;
  //background: linear-gradient(135deg,rgba(255,255,255,.1) 0%,rgba(255,255,255,.06) 61.12%,rgba(255,255,255,.1) 100%);
  border-radius: 50px;

  -webkit-backdrop-filter: blur(0.3rem);
  backdrop-filter: blur(0.3rem);


  animation-name: slide-in;
  animation-duration: 1.6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  & > .list {
    animation-name: slide-inse;
    animation-duration: 0.8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    opacity: 0;
    justify-content: center;
    //-webkit-box-reflect: below 10px -webkit-linear-gradient(top,rgba(255,0,0,0)50% ,rgba(255,0,0,0.4)100% );
    align-items: center;
    padding: 15px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    &  i {
      font-size: 50px;
      color: #007bff
    }
    &:after {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background: radial-gradient(50% 50% at 50% 50%, #545454 0%, rgba(217, 217, 217, 0.00) 100%);
      position: absolute;
      perspective: 1000px;
      transform: rotateX(65deg) translateY(-50px) scale(0);
      filter: blur(3px);
      bottom: -30px;
      border-radius: 100%;
      transition: all 0.3s;
    }
    &:hover {
      background-color: #2569f7;
      transform: translateY(-10px);
      &:after {
        transform: rotateX(65deg) translateY(-30px) scale(1);
      }
      i {
        color: #FFF;
      }
    }

    &.active {
      border: #6183e0 solid 1px;
      box-sizing: border-box;
      &:before {
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #6183e0;
        position: absolute;
        bottom: -10px;
      }
      &:hover {
        background-color: #2569f7;
        border: 0;
        &:before {
          opacity: 0;
        }
      }
    }
    img {
      width: 100%;
    }
  }
}
.work-screen {
  display: flex;
  margin: 12px 0;
}
.map-app {
.amap-copyright {
  box-sizing: content-box
}

.input-textarea {
  color: grey;
  height: 8em;
  overflow: auto;
  border-radius: 0.4rem;
  border: 1px solid #ced4da;
  margin-bottom: 1rem;
}
.user-icon {
  background-color: #fff;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 5px rgba(0,0,0,0.3);
  & > i {
    font-size: 45px;
    color: #b9b9b9;
  }
}

.btn {
  display: flex;
  align-items: center;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #2569f7;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  background-color: transparent;
  background-image: none;
  color: #2569f7;
  padding: .25rem .5rem;
  line-height: 1.5;
  border-radius: 1rem;
  -webkit-appearance: button;
  cursor: pointer;
  width: 150px;
  font-size: 14px;
  & > img {
    margin: 5px 10px;
  }
}

.btn:hover {
  color: #fff;
  background-color: #2569f7;
  border-color: #2569f7
}

.btn:hover {
  text-decoration: none
}

.input-item {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 10px;
}
.left-box {
  background-color: rgba(255,255,255,0.3);
  background-clip: border-box;
  width: 22rem;
  border-width: 0;
  border-radius: 0.4rem;
  box-shadow: 0 2px 6px 0 rgba(132, 139, 224, 0.5);
  position: fixed;
  top: 1rem;
  left: 1rem;
  overflow: hidden;
  padding: 2px;
  height: 500px;
  box-sizing: border-box;
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  backdrop-filter: saturate(180%) blur(15px);
  transform: translateX(-100% - 30px);
  transition: all 0.3s;
  &.active {
    transform: translateX(0%);
  }
}
.input-item:last-child {
  margin-bottom: 0;
}

.input-item > select, .input-item > input[type=text], .input-item > input[type=date] {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-item > select:not(:last-child), .input-item > input[type=text]:not(:last-child), .input-item > input[type=date]:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.input-item > select:not(:first-child), .input-item > input[type=text]:not(:first-child), .input-item > input[type=date]:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.input-item-prepend {
  margin-right: -1px;
}

.input-item-text, input[type=text], input[type=date], select {
  height: calc(2.2rem + 2px);
}

.input-item-text {
  width: 6rem;
  text-align: justify;
  padding: 0.4rem 0.7rem;
  display: inline-block;
  text-justify: distribute-all-lines;
  /*ie6-8*/
  text-align-last: justify;
  /* ie9*/
  -moz-text-align-last: justify;
  /*ff*/
  -webkit-text-align-last: justify;
  /*chrome 20+*/
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.input-item-text input[type=checkbox], .input-item-text input[type=radio] {
  margin-top: 0
}

.input-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color:#FFF;
  background-clip: border-box;
  width: 22rem;
  border-width: 0;
  border-radius: 0.4rem;
  box-shadow: 0 2px 6px 0 rgba(121, 127, 201, 0.5);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0.75rem 1.25rem;
}

.input-text {
  line-height: 2rem;
  margin-right: 2rem;
}

.info hr {
  margin-right: 0;
  margin-left: 0;
  border-top-color: grey;
}

.info {
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: .25rem;
  position: fixed;
  top: 1rem;
  background-color: white;
  width: auto;
  min-width: 22rem;
  border-width: 0;
  right: 1rem;
  box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
}

.code {
  left: 1.5rem;
  right: 1.5rem;
  top: 1.5rem;
  bottom: 1.5rem;
  overflow: auto;
  margin-bottom: 0rem;
}

.code .btn {
  top: 1rem;
  position: absolute;
  right: 1rem;
}

.code .result {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  bottom: 1rem;
  position: absolute;
  top: 5.5rem;
  right: 1rem;
  left: 1rem;
  overflow: auto;
}

.code .status {
  color: #80adff;
  display: inline-block;
  font-size: 14px;
}

.code h4 {
  display: inline-block;
  max-width: 20rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

select, input[type=text], input[type=date] {
  display: inline-block;
  width: 100%;
  padding: .375rem 1.75rem .375rem .75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none
}

input[type=text], input[type=date] {
  background: #fff;
  padding: .375rem .75rem;
}

select:focus, input[type=text]:focus, input[type=date]:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .1rem rgba(128, 189, 255, .1)
}

.btn:focus {
  outline: 0;
  box-shadow: none;
}

select:focus::-ms-value, input[type=text]:focus::-ms-value, input[type=date]:focus::-ms-value {
  color: #495057;
  background-color: #fff
}


/* native toastr */
.native-toast {
  position: fixed;
  background-color: rgba(50, 50, 50, .8);
  border-radius: 33px;
  color: white;
  left: 50%;
  text-align: center;
  padding: 6px 12px;
  opacity: 0;
  z-index: 99999;
  transition: transform .25s, opacity .25s, top .25s;
  box-sizing: border-box;
}

.native-toast-bottom {
  bottom: 50px;
  -ms-transform: translateX(-50%) translateY(50px);
  transform: translateX(-50%) translateY(50px)
}

.native-toast-bottom.native-toast-shown {
  opacity: 1;
  -ms-transform: translateX(-50%) translateY(0);
  transform: translateX(-50%) translateY(0);
}

.native-toast-bottom.native-toast-edge {
  bottom: 0;
}

.native-toast-top {
  top: 50px;
  -ms-transform: translateX(-50%) translateY(-50px);
  transform: translateX(-50%) translateY(-50px)
}

.native-toast-top.native-toast-shown {
  opacity: 1;
  -ms-transform: translateX(-50%) translateY(0);
  transform: translateX(-50%) translateY(0);
}

.native-toast-top.native-toast-edge {
  top: 0;
}

.native-toast-center {
  top: 0;
  -ms-transform: translateX(-50%) translateY(-50px);
  transform: translateX(-50%) translateY(-50px)
}

.native-toast-center.native-toast-shown {
  opacity: 1;
  top: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.native-toast-edge {
  border-radius: 0;
  width: 100%;
  text-align: left;
}

@media screen and (min-width: 40rem) {
  .native-toast:not(.native-toast-edge) {
    max-width: 18rem;
  }
}

/*
  max-width does not seem to work in small screen?
*/

/*@media screen and (max-width: 768px) {
  .native-toast:not(.native-toast-edge) {
    max-width: 400px;
  }
}

@media screen and (max-width: 468px) {
  .native-toast:not(.native-toast-edge) {
    max-width: 300px;
  }
}*/

/* types */

.native-toast-error {
  background-color: #d92727;
  color: white;
}

.native-toast-success {
  background-color: #62a465;
  color: white;
}

.native-toast-warning {
  background-color: #fdaf17;
  color: white;
}

.native-toast-info {
  background-color: #5060ba;
  color: white;
}

[class^="native-toast-icon-"] {
  vertical-align: middle;
  margin-right: 8px
}

[class^="native-toast-icon-"] svg {
  width: 16px;
  height: 16px;
}

.custom-content-marker {
  position: relative;
  width: 25px;
  height: 34px;
}

.custom-content-marker img {
  width: 100%;
  height: 100%;
}

.custom-content-marker .close-btn {
  position: absolute;
  top: -6px;
  right: -8px;
  width: 15px;
  height: 15px;
  font-size: 12px;
  background: #ccc;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 15px;
  box-shadow: -1px 1px 1px rgba(10, 10, 10, .2);
}

.custom-content-marker .close-btn:hover {
  background: #666;
}
}
</style>
