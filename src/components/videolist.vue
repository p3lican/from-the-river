<template>
  <div class="videolist-wrapper">
    <div v-if="loading">loading</div>
    <div v-else class="all-videos-wrapper">

    <div v-for="video in gs2Data">
    <img :alt="video.gsx$videotitle.$t" class="list-image" :src="'https://img.youtube.com/vi/'+video.gsx$videourl.$t+'/hqdefault.jpg'" @click="videoSelected(video.gsx$videotitle.$t, video.gsx$videocategory.$t, video.gsx$videodescription.$t, video.gsx$videourl.$t, video.gsx$videosummary.$t, video.gsx$videolongdescription.$t)"><br/>
    {{video.gsx$videotitle.$t}}<br/>
    {{video.gsx$videocategory.$t}}<br/><br/>
    </div>

    </div>
    <div class="the-popup-video-wrapper hidden">
    <div class="popup-video-close-top" aria-label="Close Video" @click="videoClosed"><i>CLOSE</i></div>
      <div class="the-popup-video">

      </div>
      <div class="popup-video-info-wrapper">
        <div class="popup-video-player-title"></div>
        <div class="popup-video-player-category"></div>
        <div class="popup-video-player-summary"></div>
        <div class="popup-video-player-long-description"></div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'videolist',
  data() {
    return {
      loading: false,
      gs1Data: {},
      gs2Data: {},
    };
  },
  props: {
    msg: String,
  },
  methods: {

    videoClosed: () => {
      console.log('VIDEEEEEEOOOO CLOSED');
      const theVideo = document.querySelector('.the-popup-video>iframe');
      const videoOverlay = document.getElementsByClassName('the-popup-video-wrapper')[0];
      videoOverlay.classList.add('hidden');
      theVideo.parentNode.removeChild(theVideo);
      document.body.classList.remove('nooverflow');
    },

    videoSelected: (videoTitle, videoCat, videoDesc, videoURL, videoSummary, videoLongDesc) => {
      document.body.classList.add('nooverflow');


      const poopup = document.querySelector('div.the-popup-video-wrapper');
      const popupVideoHolder = document.querySelector('div.the-popup-video');
      const popupTitle = document.querySelector('div.popup-video-player-title');
      popupTitle.innerHTML = videoTitle;
      const popupTeaser = document.querySelector('div.popup-video-player-teaser');
      const popupSummary = document.querySelector('.popup-video-player-summary');
      const popupCat = document.querySelector('.popup-video-player-category');
      const popupLongDesc = document.querySelector('.popup-video-player-long-description');

      console.log(videoSummary, 'llllllllllllllllllllooooooooooooooooolllllllllllllllllllllll');
      popupSummary.innerHTML = videoSummary;
      popupLongDesc.innerHTML = videoLongDesc;
      popupCat.innerHTML = videoCat;

      poopup.classList.remove('hidden');
      console.log(videoURL, 'this video URL');
      const videoIframe = document.createElement('iframe');
      videoIframe.src = `https://www.youtube.com/embed/${videoURL}`;
      videoIframe.ClassName = 'theVIDD';
      videoIframe.setAttribute('allowfullscreen', '');


      document.querySelector('.the-popup-video').appendChild(videoIframe);
    },
  },

  mounted() {
    const cors = 'https://morning-hollows-40780.herokuapp.com/';

    this.loading = true;
    const self = this;
    const latestAudio = `${cors}https://api.nba.net/2/pelicans/article/?count=16&verbose=true&freeform=Audio`;
    const latestPodcasts = `${cors}https://api.nba.net/2/pelicans/article/?count=16&verbose=true&freeform=Audio,%20podcast`;
    const gs1 = 'https://spreadsheets.google.com/feeds/list/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/1/public/values?alt=json';
    const gs2 = 'https://spreadsheets.google.com/feeds/list/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/2/public/values?alt=json';


    https:// docs.google.com/spreadsheets/d/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/edit#gid=0

    axios.all([
      axios.get(latestAudio, { headers: { accessToken: 'internal|bb88df6b4c2244e78822812cecf1ee1b' } }),
      axios.get(latestPodcasts, { headers: { accessToken: 'internal|bb88df6b4c2244e78822812cecf1ee1b' } }),
      axios.get(gs1),
      axios.get(gs2),
    ])
      .then(axios.spread((latestAudioRes, latestPodcastsRes, gs1Res, gs2Res) => {
        self.loading = false;

        self.latestAudioData = latestAudioRes.data.response.result;
        console.log(self.latestAudioData, 'Latest Audio');

        self.latestPodcastsData = latestPodcastsRes.data.response.result;
        console.log(self.latestPodcastsData, 'Latest Podcasts');


        self.gs1Data = gs1Res.data.feed.entry;
        self.gs2Data = gs2Res.data.feed.entry;

        console.log(self.gs1Data, 'gs 1');
        console.log(self.gs2Data, 'gs 2');
      }));
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


.hidden {
  display:none!important;
}

.popup-video-close-top {
    position: fixed;
    bottom: 8px;
    right: 8px;
    z-index: 9;
    cursor: pointer;
    background: #f9f9f9;
    border-radius: 0px;
    padding: 5px 10px;
}

.popup-video-close-top > i {
    color: black;
    font-size: 30px;
    font-weight: 800;
}

.all-videos-wrapper {
      display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.list-image {
  width:100%;
  display:block;
  max-width:480px;
  margin: 0 auto;
  transition-duration: 280ms;

}

.list-image:hover {
    box-shadow: 0px 0px 0px 4px #fff;
    transition-duration: 280ms;
    cursor:pointer;
}


.o-video {
    height: 100%;
}


.the-popup-video > iframe {
    width: 1280px;
    height: 720px;
        border: none;
}


  .the-popup-video-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    position: fixed;
    padding-top: 40px;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.97);
    padding: 0px 0px;
    text-align: left;
    color: white;
}
.the-popup-video-inner {
    height: 100%;
    width: 100%;
}
.the-popup-video {
    width: 100%;
    padding: 20px;
}

.popup-video-info-wrapper {
    width: 100%;
    display: flex;
    flex-direction:column;
    max-width: 1290px;
    margin: 0 auto;
    padding: 20px;
    max-height: 600px;

}

.popup-video-player-title {
    font-size: 40px;
    font-weight: 800;
    text-align: left;
    text-transform: uppercase;
    line-height: 48px;
    flex: 1;
}

.popup-video-player-category {
    border-top: 3px solid black;
    padding-top: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 800;
    color: #9c9c9c;
}

.popup-video-player-teaser {
    text-align: left;
    font-size: 24px;
    line-height:32px;
    flex: 1;
}

.popup-video-player-summary {
    font-size: 21px;
    line-height: 28px;
}

.popup-video-player-long-description {
    font-size: 15px;
    line-height:20px;
    margin-top: 16px;


}


::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #d1d1d1;
}
::-webkit-scrollbar-track {
  background: #000;
  border: 0px none #ffffff;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #313131;
}
::-webkit-scrollbar-corner {
  background: transparent;
}


@media (max-width:1750px) {
.the-popup-video > iframe {
    width: 1024px;
    height: 575px;
}
}

@media (max-width:1500px) {

.popup-video-info-wrapper {
    max-width: 1034px;
}
.popup-video-player-title {
    font-size: 27px;
    line-height: 36px;
    margin-bottom: 10px;
}
.popup-video-player-teaser {
    text-align: left;
    font-size: 18px;
    line-height:24px;
    flex: 1;
}

}

@media (max-width:1450px) {
.the-popup-video > iframe {
    width: 840px;
    height: 480px;
}
.popup-video-info-wrapper {
    max-width: 730px;
    flex-direction: column;
    background: white;
    color: black;
        overflow-y: scroll;
}
}


@media (max-width:1279px) {
  .the-popup-video {
    background: black;
}

.the-popup-video > iframe {
    width: 640px;
    height: 380px;
    margin: 0 auto;
    display: block;
}
.popup-video-info-wrapper {
    max-width: 650px;
}

  .the-popup-video-wrapper {
    flex-direction: column;
    background: white;
    color: black;
    }

    .popup-video-close-top {
    background: #000;
}

.popup-video-close-top > i {
    color: #fff;
}


}

@media (max-width:720px) {
.the-popup-video > iframe {
    width: 100%;
    height: 400px;
}
.popup-video-info-wrapper {
    width: 90%;
    overflow-y: scroll;
}
}

@media (max-width:550px) {
  .the-popup-video {
    padding:20px;
  }
.the-popup-video > iframe {
    width: 100%;
    height: 230px;
}
.popup-video-player-long-description {
    padding-bottom: 60px;
}
}


</style>
