<template>
  <div class="video-detail">
    <slide-bar :title="title"></slide-bar>
    <video-player ref="player" :autoplay="autoplay" :url="url" :cover="cover"></video-player>
    <div ref="comment" class="hot-comment">
      <van-tabs background='rgb(220, 241, 247)' v-model="active" swipeable>
        <van-tab title="评论">
          <base-scroll :data="hotComments" class="hot">
            <div>
              <mv-comment :hotComments="hotComments"></mv-comment>
              <mv-comment title="最近评论" :hotComments="comments"></mv-comment>
            </div>
          </base-scroll>
        </van-tab>
        <van-tab title="详情">
          <div class="desc">{{ desc }}</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import BaseScroll from "base/BaseScroll/BaseScroll.vue";
import MvComment from "base/MvComment/MvComment.vue";
import SlideBar from "base/SlideBar/SlideBar.vue";
import { getDate } from "common/js/until.js";
import VideoPlayer from "base/VideoPlayer/VideoPlayer.vue";
import { getMvData, getMvComment } from "api/index.js";
export default {
  name: "VideoDetail",
  data() {
    return {
      mvid: this.$route.params.id,
      data: {},
      url: "",
      cover: null,
      autoplay: true,
      hotComments: [],
      comments: [],
      tabs: ["评论", "详情"],
      active: 0,
      desc: "",
      title: "MV"
    };
  },
  components: {
    BaseScroll,
    VideoPlayer,
    MvComment,
    SlideBar
  },
  filters: {
    formateDate(dt) {
      let time = new Date(dt);
      return getDate(time);
    }
  },
  created() {
    this._getMvData(this.mvid);
    this._getMvComment(this.mvid);
  },
  // mounted() {
  //   this.$refs.comment.style.top= this.$refs.player.innerHeight;
  // },
  methods: {
    async _getMvData(id) {
      const { data, code } = await getMvData(id);
      if (code === 200) {
        this.data = data;
        this.url = data.brs["720"] ? data.brs["720"] : data.brs["480"];
        this.cover = data.cover;
        this.desc = data.desc;
      }
    },
    async _getMvComment(id) {
      const { hotComments, comments } = await getMvComment(id);
      this.hotComments = hotComments;
      this.comments = comments;
    }
  }
};
</script>
<style lang='less' scoped>
@import '~common/less/variable.less';
.video-detail {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: @color-background;
  z-index: 1000;

  .hot-comment {
    position: fixed;
    bottom: 0;
    width: 100%;
    top: 266px;

    .hot {
      position: fixed;
      bottom: 0;
      width: 100%;
      top: 310px;
      overflow: hidden;
    }
  }
}

.desc {
  padding: 20px;
  line-height: 30px;
  font-size: @font-size-medium;
  color: #282828;
}
</style>
