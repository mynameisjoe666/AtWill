// 各种导航组件
import TopNavigation from '@/components/TopNavigation/index' // 顶部导航
import SearchBar from '@/components/SearchBar/index' // 大搜索栏
import UserBar from '@/components/UserBar/index' // 用户栏
import SevenColorBar from '@/components/SevenColorBar/index' // 多颜色信息块
import PositionTabs from '@/components/PositionTabs/index' // tabs
import LayoutScheme from '@/components/LayoutScheme/index' // 自定义布局组件
import FlexibleModuleBar from '@/components/FlexibleModuleBar/index' // 块组件
import ManyStateList from '@/components/ManyStateList/index' // 列表组件
import CalendarBar from '@/components/CalendarBar/index' // 日期相关组件
import BtnMore from '@/components/ButtonBar/index' // 查看更多按钮
import BtnGrid from '@/components/BtnGrid/index' // 格子按钮
import GoodsCard from '@/components/GoodsCard/index'  // 产品组件
import CourseCard from '@/components/CourseCard/index'  // 课程组件
import QuestionCard from '@/components/QuestionCard/index'  // 考试列表组件
import MediaList from '@/components/MediaList/index'  // 课程列表
import TitleBar from "@/components/TitleBar/index"; // 标题
import CommentsSection from "@/components/CommentsSection/index"; // 评论组件
import TagCard from "@/components/TagCard/index"; // 伸缩框
import TagShadowCard from "@/components/TagShadowCard/index"; // 带阴影的伸缩框
import PreviewList from "@/components/PreviewList/index"; // 预览列表
// 二次封装
import CSBreadcrumb from '@/components/CS-Breadcrumb/index'  // 面包屑导航
import CSTable from '@/components/CS-table/index'  // 自定义表格
import CSSearchBar from '@/components/CS-SearchBar/index'  // 自定义搜索栏
import CSButton from "@/components/CS-Button"; // 自定义按钮
import CSAddress from "@/components/CS-Address/index"; // 地址选择
import CSEditor from '@/components/CS-Editor/editor' // 富文本输入


export default {
  install(Vue) {
    Vue.component('TopNavigation', TopNavigation)
    Vue.component('SearchBar', SearchBar)
    Vue.component('UserBar', UserBar)
    Vue.component('SevenColorBar', SevenColorBar)
    Vue.component('PositionTabs', PositionTabs)
    Vue.component('LayoutScheme', LayoutScheme)
    Vue.component('FlexibleModuleBar', FlexibleModuleBar)
    Vue.component('ManyStateList', ManyStateList)
    Vue.component('CalendarBar', CalendarBar)
    Vue.component('BtnMore', BtnMore)
    Vue.component('BtnGrid', BtnGrid)
    Vue.component('CSBreadcrumb', CSBreadcrumb)
    Vue.component('CSTable', CSTable)
    Vue.component('CSAddress', CSAddress)
    Vue.component('CSSearchBar', CSSearchBar)
    Vue.component('CSEditor', CSEditor)
    Vue.component('GoodsCard', GoodsCard)
    Vue.component('CourseCard', CourseCard)
    Vue.component('QuestionCard', QuestionCard)
    Vue.component('MediaList', MediaList)
    Vue.component('TitleBar', TitleBar)
    Vue.component('CSButton', CSButton)
    Vue.component('CommentsSection', CommentsSection)
    Vue.component('TagCard', TagCard)
    Vue.component('TagShadowCard', TagShadowCard)
    Vue.component('PreviewList', PreviewList)
  }
}
