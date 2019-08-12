<template>
  <div class="engaging-videos-wrapper">
    <div v-if="loading">loading</div>
    <div v-else class="all-engaging-videos-wrapper">
     <div v-for="video in gs3Data"class="engaging-item">
       <div>                                         
         <div v-if="video.gsx$videotype.$t=='facebook'"  class="facebook-item">
          <div class="media-wrapper">
            <div class="test_fb_wrapper_responsive">
            <iframe :src="'https://www.facebook.com/plugins/video.php?href=' + video.gsx$facebookvideourl.$t + '&show_text=0&width=560&mute=0'" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
            </div>
          </div>
          <div class="media-info-wrapper">
            info
          </div>
         </div> 

         <div v-else-if="video.gsx$videotype.$t=='instagram'">
<div v-html="video.gsx$instagramembedcode.$t"></div>

         </div>



         <div v-else="video.gsx$videotype.$t=='twitter'">twitter</div>
       </div>
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
  name: 'engaginglist',
  data() {
    return {
      loading: false,
      gs3Data: {},
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
    const gs3 = 'https://spreadsheets.google.com/feeds/list/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/3/public/values?alt=json';
    const gs2 = 'https://spreadsheets.google.com/feeds/list/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/2/public/values?alt=json';


    https:// docs.google.com/spreadsheets/d/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/edit#gid=0

    axios.all([
      axios.get(gs3),
      axios.get(gs2),
    ])
      .then(axios.spread((gs3Res, gs2Res) => {
        self.loading = false;



        self.gs3Data = gs3Res.data.feed.entry;
        self.gs2Data = gs2Res.data.feed.entry;

        console.log(self.gs3Data, 'gs 3');
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



.test_fb_wrapper_responsive {
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}

.test_fb_wrapper_responsive iframe {
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}



.facebook-item {
    display: flex;
}

.media-wrapper {
    flex: 3;
}

.media-info-wrapper {
    flex: 2;
}

.all-engaging-videos-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
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
