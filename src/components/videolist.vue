<template>
  <div class="videolist-wrapper">
  <div v-if="loading">loading</div>
  <div v-else>

  <div v-for="video in gs2Data">

  {{video.gsx$videotitle.$t}}<br/>
  {{video.gsx$videocategory.$t}}<br/><br/>
  {{video.gsx$videodescription.$t}}<br/>
  <img :src="'https://img.youtube.com/vi/'+video.gsx$videourl.$t+'/hqdefault.jpg'">

  </div>

<div class="o-video">
  <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowfullscreen></iframe>
</div>


  </div>
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'videolist',
  data: function () {
    return {
      loading: false,
      gs1Data: {},
      gs2Data: {}
    }
  },
  props: {
    msg: String,
  },
  mounted: function () {

var cors = 'https://morning-hollows-40780.herokuapp.com/'

this.loading=true;
var self = this
      var latestAudio = cors + "https://api.nba.net/2/pelicans/article/?count=16&verbose=true&freeform=Audio"
      var latestPodcasts = cors + "https://api.nba.net/2/pelicans/article/?count=16&verbose=true&freeform=Audio,%20podcast"
      var gs1 = 'https://spreadsheets.google.com/feeds/list/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/1/public/values?alt=json'
      var gs2 = 'https://spreadsheets.google.com/feeds/list/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/2/public/values?alt=json'


      https://docs.google.com/spreadsheets/d/12znlSlIEnM59eZtVLZZtGGnarjwvE5fSd6UbXBxf8BI/edit#gid=0

       axios.all([
          axios.get(latestAudio, { headers:{'accessToken':'internal|bb88df6b4c2244e78822812cecf1ee1b'}}),
          axios.get(latestPodcasts, { headers:{'accessToken':'internal|bb88df6b4c2244e78822812cecf1ee1b'}}),
          axios.get(gs1),
          axios.get(gs2),
        ])
        .then(axios.spread(function(latestAudioRes, latestPodcastsRes, gs1Res, gs2Res) {
        self.loading = false

        self.latestAudioData = latestAudioRes.data.response.result
        console.log(self.latestAudioData, "Latest Audio")
           
        self.latestPodcastsData = latestPodcastsRes.data.response.result
        console.log(self.latestPodcastsData, "Latest Podcasts")


self.gs1Data = gs1Res.data.feed.entry
self.gs2Data = gs2Res.data.feed.entry

        console.log(self.gs1Data, "gs 1")
        console.log(self.gs2Data, "gs 2")
      }))



  
      
  }




};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.o-video {
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 56.25%; /* 9 / 16 * 100 */
}
.o-video > iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
}


</style>
