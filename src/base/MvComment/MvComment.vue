<template>
  <div v-if="hotComments.length" class="good-content">
    <h2 class="good-title">{{ title }}</h2>
    <ul>
      <li class="content-item" :key="item.commentId" v-for="item in hotComments">
        <div class="user">
          <div class="avatar">
            <img :src="item.user.avatarUrl" alt />
            <div class="nick-pub">
              <span class="nickname">{{ item.user.nickname }}</span>
              <p class="publish-time">{{ item.time |formateDate }}</p>
            </div>
          </div>
          <div class="like">
            <span class="like-count">{{ item.likedCount }}</span>
            <span class="iconfont icondianzan"></span>
          </div>
        </div>
        <p class="appraisal-content border-1px">{{ item.content }}</p>
      </li>
    </ul>
    <!-- <div class="loading-container" v-show='!hotComments.length'>
      <van-loading type="spinner" color="#1989fa">加载中...</van-loading>
    </di-->
  </div>
</template>
<script>
import { getDate } from "common/js/until.js";
export default {
  name: "MvComment",
  props: {
    hotComments: {
      type: Array
    },
    title: {
      type: String,
      default: "精彩评论"
    }
  },
  filters: {
    formateDate(dt) {
      let time = new Date(dt);
      return getDate(time);
    }
  }
};
</script>
<style lang='less' scoped>
@import '~common/less/variable.less';
@import '~common/less/mixin.less';

.good-content {
  padding: 20px 20px 0 15px;

  .good-title {
    line-height: 40px;
    font-size: @font-size-medium-x;
    font-weight: 600;
    color: #282828;
  }

  .content-item {
    margin-bottom: 15px;

    .user {
      display: flex;
      justify-content: space-between;

      .avatar {
        font-size: 0;
        display: flex;

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          vertical-align: middle;
        }

        .nick-pub {
          margin-left: 10px;

          .nickname {
            font-size: @font-size-small;
            color: #898989;
          }

          .publish-time {
            font-size: @font-size-small;
            margin-top: 10px;
          }
        }
      }

      .like {
        color: #989898;
        .like-count {
          font-size: @font-size-small;
        }
      }
    }

    .appraisal-content {
      line-height: 25px;
      font-size: 12px;
      color:#2b2b2b;
      margin-left: 45px;
      padding-bottom: 10px;
      .border-1px(#f1f1f1);
    }
  }
}
</style>
