<template>
  <div class="custom-theme">
    <tag-shadow-card title="问题列表">
      <div slot="content">
        <CS-SearchBar class="margin-bottom-min" width="300" v-model="searchData" placeholder="请输入"/>
        <div>
          <comments-section :comments="comments"/>
        </div>
        <el-pagination
            style="text-align: center; padding: 50px 0;"
            background
            border
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </div>
    </tag-shadow-card>
  </div>
</template>

<script>
export default {
  name: "myQuestion ",
  data() {
    return {
      comments: [
        {
          id: 1,
          name: "尴尬的牛马",
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
          name: "尴尬的牛马",
          imgUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "7个月前",
          content: "老师授课认真，细致，能充分利用时刻，形象条理，对重点知识的讲解十分清晰易懂，使同学们对知识易与明白，老师讲课时的激情会感染我们，课堂气氛很好。",
        },
        {
          id: 3,
          name: "尴尬的牛马",
          imgUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "7个月前",
          content: "有了他们的教导。才让我提升那么快。 下一步我会的创更多号来运营，但是不会那么快。因为我现在的四五个号只有两个，其他的都是找写手，但号都是自己运营，包括原创也是自己过的。我现在\n" +
              "主要做的是情感类的百科，因为情感类的题材特别好找，无非就是离婚失恋分手这一块。但是一定要自己熟悉后才能找写手，教写手怎么去写这个文章。 加入之后给我最大的感觉就是：就是效率的\n" +
              "提高。 一开始的时候一天只能写一两篇，后来摸索清楚了方法后，到现在一天几十篇都没有问题，但是要先准备好素材，想好标题，然后根据标题去写文章。我写文章很多都见缝插针，内容不一定\n" +
              "那么重要，关键是标题要吸引人。可以在网上看那些爆文的标题，自己略作修改，改一下方式变一下词语。",
        },
        {
          id: 2,
          name: "尴尬的牛马",
          imgUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          time: "7个月前",
          content: "老师授课认真，细致，能充分利用时刻，形象条理，对重点知识的讲解十分清晰易懂，使同学们对知识易与明白，老师讲课时的激情会感染我们，课堂气氛很好。",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
