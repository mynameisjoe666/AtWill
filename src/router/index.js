import Vue from 'vue'
import VueRouter from 'vue-router'
// import personnelFileEnquiry from '../views/personnelFileEnquiry.vue'
import index from '../views/index'
import workbench from '../views/workbench'
import licensedProducts from '../views/licensedProducts/index'
import goodsDetail from '../views/licensedProducts/goodsDetail'
import productRelease from '../views/productRelease/index'
import addProduct from '../views/productRelease/addProduct/index'
import myOrder from '../views/myOrder/index'
import addOrder from '../views/myOrder/addOrder/index'
import orderDetails from '../views/myOrder/orderDetails/index'
import course from '../views/studyArea/course/index'
import courseList from '../views/studyArea/course/courseList'
import courseDetailed from '../views/studyArea/course/courseDetailed'
import question from '../views/studyArea/question/index'
import questionInfo from '../views/studyArea/question/questionInfo'
import personalCenter from '../views/personalCenter/index'
import userInfo from '../views/personalCenter/userInfo/index'
import myTest from '../views/personalCenter/myTest/index'
import myCertificate from '../views/personalCenter/myCertificate/index'
import myQuestion  from '../views/personalCenter/myQuestion/index'
import myIntegral  from '../views/personalCenter/myIntegral/index'
import extractIntegral  from '../views/personalCenter/myIntegral/extractIntegral'
import testDemo  from '../views/testDemo/'
import codeEdit  from '../views/testDemo/codeEdit/'
import mapApp  from '../views/testDemo/mapApp/'
import addCode  from '../views/testDemo/addCode/'
import demo1 from '../views/testDemo/matter/demo1'
import demo2 from '../views/testDemo/matter/demo2'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/testDemo',
    name: 'testDemo',
    component: testDemo,
    children: [{
      path: '/codeEdit',
      name: 'codeEdit',
      component: codeEdit
    },{
      path: '/addCode',
      name: 'addCode',
      component: addCode
    },{
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },{
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }]
  },
  {
    path: '/mapApp',
    name: 'mapApp',
    component: mapApp
  },
  {
    path: '/',
    name: 'index',
    component: index,
    children: [{
      path: '/',
      name: 'workbench',
      component: workbench
    },{
      path: '/licensedProducts',
      name: 'licensedProducts',
      component: licensedProducts
    }, {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail
    }, {
      path: '/productRelease',
      name: 'productRelease',
      component: productRelease
    }, {
      path: '/addProduct',
      name: 'addProduct',
      component: addProduct
    }, {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    }, {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    }, {
      path: '/addOrder',
      name: 'addOrder',
      component: addOrder
    }, {
      path: '/course',
      name: 'course',
      component: course
    }, {
      path: '/courseList',
      name: 'courseList',
      component: courseList
    }, {
      path: '/question',
      name: 'question',
      component: question
    }, {
      path: '/questionInfo',
      name: 'questionInfo',
      component: questionInfo
    }, {
      path: '/personalCenter',
      component: personalCenter,
      children: [{
        path: '/personalCenter/userInfo',
        name: 'userInfo',
        component: userInfo
      },{
        path: '/personalCenter/myTest',
        name: 'myTest',
        component: myTest
      },{
        path: '/personalCenter/myCertificate',
        name: 'myCertificate',
        component: myCertificate
      },{
        path: '/personalCenter/myQuestion',
        name: 'myQuestion',
        component: myQuestion
      },{
        path: '/personalCenter/myIntegral',
        name: 'myIntegral',
        component: myIntegral
      },{
        path: '/personalCenter/extractIntegral',
        name: 'extractIntegral',
        component: extractIntegral
      }]
    }]
  },
  {
    path: '/courseDetailed',
    name: 'courseDetailed',
    component: courseDetailed
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes
})

export default router
