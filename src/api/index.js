import ajax from './ajax'
const BASE = ''
//获取轮播图  /banner?type=1
export const getlunbo = () => ajax(BASE + '/banner', { type: 1 })
// 获取推荐歌单
export const getRecommend = () => ajax(BASE + '/personalized?limit=6')

// /playlist/detail
export const getdetail = ({ id }) => ajax(BASE + '/playlist/detail', { id })
//获取热门歌手列表
export const getHotSinger = () => ajax(BASE + '/top/artists?offset=0')
// 获取歌手列表
export const getSinger = ({cat,initial}) => ajax(BASE + '/artist/list', {cat,limit:100,initial})
// 歌手热门50首歌曲
export const getArtistSongs = ({id}) => ajax(BASE + '/artist/top/song',{id})

// 获取音乐详情
export const getSongDetail = (ids) => ajax(BASE +`/song/detail?ids=${ids}`)

//所有榜单 toplist

export const getToplist = () => ajax(BASE + '/toplist/detail')
//排行榜top/list
export const getTopDetail = ({idx}) => ajax(BASE + '/top/list',{idx})
// 热搜关键词/search/hot
export const getHotKey = () => ajax(BASE + '/search/hot/detail')
// 搜索 /search?keywords= 海阔天空
export const getSearch = ({keywords,limit,offset,type}) => ajax(BASE + '/search',{keywords,limit,offset,type})
// 获取歌词接口
export const getLyric = ({id}) =>ajax(BASE +'/lyric',{id})
// 歌单分类
export const getSongClassify = () => ajax(BASE +'/playlist/catlist')
// 歌单
export const getPlayList = ({cat,limit,offset}) => ajax(BASE +'/top/playlist',{
	cat,limit,offset
})
//新歌速递
export const getNewSong = ({type}) => ajax(BASE +'/top/song',{type})
//mv 排行
export const getMvRank = ({offset,limit}) => ajax(BASE + '/top/mv',{limit,offset})
// 获取mv数据
export const getMvData = ({mvid}) => ajax(BASE + '/mv/detail',{mvid})
// 获取mv热门评论
export const getMvComment = ({id}) => ajax(BASE + '/comment/mv',{id})
