<template>
  <div class="song-list">
    <ul>
      <li
        ref="songItem"
        @click="selectItem(item,index)"
        class="song-item"
        :key="index"
        v-for="(item,index) in songs"
      >
        <span class="song-index">{{index+1}}</span>
        <div class="song-title">
          <h2 :class="{active:index===nowIndex}" class="song-name">{{ item.name }}</h2>
          <p :class="{actetive:index===nowIndex}" class="desc">{{ item.singer }}。{{ item.album }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SongList",
  props: {
    songs: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters(["currentSong"])
  },
  data() {
    return {
      nowIndex: -1
    };
  },
  methods: {
    selectItem(item, index) {
      console.log(this.$refs.songItem[index]);
      this.nowIndex = index;
      this.$emit("select", item, index);
    },
    getActive(item) {
      if (item.id === this.currentSong.id) {
        return "active";
      } else {
        return "";
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import '~common/less/mixin.less';
@import '~common/less/variable.less';

.song-list {
  .song-item {
    display: flex;
    padding: 10px 0;
    .border-1px(#e5e5e5);
    &:last-child {
      .border-none();
    }

    .song-index {
      margin-right: 10px;
      color: #949494;
      font-size: 12px;
    }
  }

  .song-title {
    overflow: hidden;

    .song-name {
      margin-bottom: 10px;
      font-size: 14px;
      color: #2f2f2f;

      &.active {
        color: red !important;
        font-size: 16px !important;
        font-weight: 600;
      }
    }

    .desc {
      font-size: 12px;
      color:#969696;
      .no-wrap;
    }
  }

  &.actetive {
    color: #55A532;
  }
}
</style>
