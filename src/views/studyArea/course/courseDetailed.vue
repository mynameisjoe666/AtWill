<!--页面：课程详细-->
<template>
  <div class="courseDetailed">
    <top-navigation type="learning" />
    <div class="video-card flex-row">
      <div class="left-nav">
        123
      </div>
      <div class="video-box">
        <video class="video" width="100%" height="803" controls="controls" autoplay="autoplay">
          <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4"/>
        </video>
      </div>
      <div class="play-nav">
        <h5>医疗器械品类销售常用技巧</h5>
        <p class="ins font-14">
          1.分析各类客户心理 目前,市场上医用器械的销售方式可大致分为三种: 一是社区定点或不定点销售,俗称“跑腿式”; 第二种是会议营销,具体还可分为单一会议营销型和复合会议营销...
        </p>
        <title-bar class="margin-top-base" title="课程目录"/>
        <ul class="video-menu">
          <li v-for="(item, index) in 6" :key="index" class="flex-row flex-start">
            <i class="staff staff-video font-38"></i>
            <div class="padding-min">
              <div class="font-14">视频：(6-1) 话术讲解</div>
              <div class="font-14">已学时长： 93s</div>
            </div>
            <cite v-if="index == 0" class="flex-right font-14">正在播放...</cite>
          </li>
        </ul>
      </div>
    </div>
    <section class="comments-section">
      <title-bar class="padding-bottom-mini" title="在线问答">
        <div slot="right">
          <div class="button-box flex-row space-between ">
            <CS-button icon="staff staff-answer">我的问答</CS-button>
            <el-button type="primary" size="small">我要提问</el-button>
          </div>
        </div>
      </title-bar>
      <comments-section :comments="comments" />
    </section>
  </div>
</template>

<script>
export default {
  name: "courseDetailed",
  data() {
    return {
      comments: [
        {
          id: 1,
          name: "张三",
          imgUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "7个月前",
          content: "老师讲课十分认真投入，内容纲举目分，条理性很强，而且特别善于举例，让同学理论联系实际，学习起来十分轻松，而且印象深刻，收到良好的效果。",
          children: [
            {
              id: 1.1,
              name: "老师",
              time: "2022-08-08 15:36:22",
              content: "能充分利用时刻，形象条理，对重点知识的讲解十分清晰易懂，使同学们对知识易与明白",
            },
          ]
        },
        {
          id: 2,
          name: "张三",
          imgUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "7个月前",
          content: "老师授课认真，细致，能充分利用时刻，形象条理，对重点知识的讲解十分清晰易懂，使同学们对知识易与明白，老师讲课时的激情会感染我们，课堂气氛很好。",
        },
        {
          id: 3,
          name: "冷****知",
          imgUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "7个月前",
          content: "有了他们的教导。才让我提升那么快。 下一步我会的创更多号来运营，但是不会那么快。因为我现在的四五个号只有两个，其他的都是找写手，但号都是自己运营，包括原创也是自己过的。我现在\n" +
              "主要做的是情感类的百科，因为情感类的题材特别好找，无非就是离婚失恋分手这一块。但是一定要自己熟悉后才能找写手，教写手怎么去写这个文章。 加入之后给我最大的感觉就是：就是效率的\n" +
              "提高。 一开始的时候一天只能写一两篇，后来摸索清楚了方法后，到现在一天几十篇都没有问题，但是要先准备好素材，想好标题，然后根据标题去写文章。我写文章很多都见缝插针，内容不一定\n" +
              "那么重要，关键是标题要吸引人。可以在网上看那些爆文的标题，自己略作修改，改一下方式变一下词语。",
        },
        {
          id: 2,
          name: "张三",
          imgUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "7个月前",
          content: "老师授课认真，细致，能充分利用时刻，形象条理，对重点知识的讲解十分清晰易懂，使同学们对知识易与明白，老师讲课时的激情会感染我们，课堂气氛很好。",
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.courseDetailed {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 60px;
  padding-top: 55px;
}

.video-card {
  width: 100%;
  height: calc(100vh - 150px);
  background: linear-gradient(180deg, #35405B 0%, #616178 79.17%, #4F4E67 100%), #313131;
  padding: 10px 0;
}

.video-box {
  flex: 1;
  height: 100%;
  background-color: @Black;
}

.left-nav {
  width: 60px;
}

.video {
  width: 100%;
  height: 100%;
}

.play-nav {
  color: @White;
  padding: 10px 30px;
  width: 400px;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}

.ins {
  line-height: 32px;
  margin-top: 10px;
}

.video-menu {
  & > li {
    padding: 8px 0;
    border-bottom: #616883 solid 1px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #5d647e;
      padding: 8px 20px;
    }

    &:active {
      background-color: #6d7393;
    }
  }
}

.comments-section {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 60px;
  padding-left: 65px;
  padding-right: 474px;
}

.button-box {
  width: 190px;
}
</style>
