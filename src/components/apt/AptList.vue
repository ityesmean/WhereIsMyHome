<template>
  <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">아파트 매매 정보</h2>
                        <p>
                            <br>
                        </p>
                    </div>
                </div>
                <form id="rform">
                    <input type="hidden" name="action" value="insertfavorite">
                    <div class="row col-md-12 justify-content-center mb-2">
                        <div class="form-group col-md-2">
                            <select class="dropdown" id="sido" name="sido" @change="changeSido">
                              <option value="">시도 선택</option>
                              <option v-for="(info, index) in sido" :key="index" :value="info.dongCode">{{info.sidoName}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <select class="dropdown" id="gugun" name="gugun" @change="changeGugun">
                              <option value="">구군 선택</option>
                              <option v-for="(info, index) in gugun" :key="index" :value="info.dongCode">{{info.gugunName}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <select class="dropdown" id="dong" name="dong" @change="changeDong">
                              <option value="">동 선택</option>
                              <option v-for="(info, index) in dong" :key="index" :value="info.dongCode">{{info.dongName}}</option>
                            </select>
                        </div>

                        
                    </div>
                    <div class="row col-md-12 justify-content-center mb-2">
                      <label style="font-size: 20px; padding-right:10px">가성비
                        <input type="radio" v-model="selected" id="pricePerArea" value="pricePerArea" style="zoom:1.3;"> 
                      </label>
                      <label style="font-size: 20px; padding-right:10px">신축
                        <input type="radio" v-model="selected" id="newConstruction" value="newConstruction" style="zoom:1.3;"> 
                      </label>
                      <label style="font-size: 20px; padding-right:10px">1층 제외
                        <input type="radio" v-model="selected" id="excludingFirst" value="excludingFirst" style="zoom:1.3;"> 
                      </label>
                      <label style="font-size: 20px; padding-right:10px">현위치 주변
                        <input type="radio" v-model="selected" id="curPos" value="curPost" style="zoom:1.3;"> 
                      </label>
                      <label style="font-size: 20px; padding-right:10px">거래 많은 순
                        <input type="radio" v-model="selected" id="bestDeal" value="bestDeal" style="zoom:1.3;"> 
                      </label>
                      
                      <div class="form-group col-md-2" style="align:center;">
                          <button v-on:click="getAptList" type="button" id="list-btn" class="btn btn-primary mb-4">
                            조회
                          </button>
                      </div>

                        <div class="form-group col-md-2">
                            <button type="button" id="favorite-btn" class="btn btn-primary mb-4">
                              관심</button>
                        </div>

                        <div id="detail" style="display:none">
                          
                          짜잔
                        </div>
                    </div>
                </form>
                <div>
                  <div id="map" style="width: 1100px; height: 400px;"></div>
                  <div v-show="apts" style="width: 1100px; height: 400px; overflow: auto">
                      <table class="table table-hover text-center">
                          <tr>
                              <th>아파트이름</th>
                              <th>층</th>
                              <th>면적</th>
                              <th>법정동</th>
                              <th>거래금액</th>
                              <th>매매년도</th>
                              <th>매매월</th>
                          </tr>
                          <tbody>
                            <apt-list-item v-for="(apt, index) in apts" :key="index" :apt="apt"/>
                          </tbody>
                      </table>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
import AptListItem from "@/components/apt/AptListItem.vue"

export default {
  name: "AptList",
  components: {
    AptListItem,
  },
  data() {
    return {
      map: null,
      aptMap: null,
      dongregcode: '',
      sido: [],
      gugun: [],
      dong: [],
      apts: null,
      selected: "newConstruction",
    };
  },
  mounted() {
    this.sendRequest("sido", "00000000")

    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=38e26e736d7ea2c5f9e89fa2b3a68b04&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    ///////// Map
    initMap() {
      const container = document.getElementById("map");
      console.log(container)
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    makeMarker() {
      this.initMap();
      // var cnt = 0;
      let coords;
      let aptSet = new Set();
      for (let apt of this.apts) {
        // console.log(apt)
        // console.log(apt.lat + ", " + apt.lng)
        let ltlg = apt.lat + ", " + apt.lng;
        if (aptSet.has(ltlg)) continue;
        aptSet.add(ltlg)
        let markerPosition  = new kakao.maps.LatLng(apt.lat, apt.lng); 
        let marker = new kakao.maps.Marker({
          map: this.map,
          position: markerPosition
        })
        coords = new kakao.maps.LatLng(apt.lat, apt.lng);
        marker.setMap(this.map)

        let iwContent = '<div style="width:150px;text-align:center;padding:6px 0;">' + apt.name + ': ' + apt.dealAmount + '만원' + '</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(apt.lat, apt.lng); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });

        kakao.maps.event.addListener(marker, 'mouseover', () => this.makeOverListener(marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', () => this.makeOutListener(infowindow));
      }

      this.map.setCenter(coords);
    },
    makeOverListener(marker, infowindow) {
      infowindow.open(this.map, marker)
    },
    makeOutListener(infowindow) {
      infowindow.close();
    },

    ///////// apt
    changeSido(e) {
      let cur = e.currentTarget.value;
      console.log("시도 바뀜 " + cur);
      this.initOption("gugun")
      this.initOption("dong")
      this.sendRequest("gugun", cur.substr(0,2));
    },
    changeGugun(e) {
      let cur = e.currentTarget.value;
      console.log("구군 바뀜 " + cur)
      this.initOption("dong")
      this.sendRequest("dong", cur.substr(0, 5));
    },
    changeDong(e) {
      let cur = e.currentTarget.value;
      console.log("동 바뀜 " + cur);
      this.dongregcode = cur;
    },
    sendRequest(selid, regcode) {
      const url = `http://localhost/home/addrlist/${selid}/${regcode}`;
      this.$axios.get(url)
        .then((response) => this.addOption(selid, response.data))
    },
    addOption(selid, data) {
      switch (selid) {
        case "sido":
          console.log(data)
          this.sido = data;
          break;
        case "gugun":
          this.gugun = data;
          break;
        case "dong":
          this.dong = data;
          break;
      }
    },
    initOption(selid) {
      switch (selid) {
        case "gugun":
          this.gugun = [];
          break;
        case "dong":
          this.dong = [];
          break;
      }
    },
    getAptList() {
      console.log(this.dongregcode)
      const url = `http://localhost/home/aptlist/${this.dongregcode}/${this.selected}`;
      this.$axios.get(url)
        .then(response => this.apts = response.data)
        // .then(() => console.log(this.apts))
        .then(() => this.makeMarker())
        // .then(console.log(this.selected))
    },
    
  }

  // created() {
  //   const serviceKey = "eE7PGNUbEMWVo1p6YJHhd%2BYFWOWanb055uXd5H9gCpAoYc6DUWTRfrSQeO6Gsi4%2FYLa7GYXlrVPXq549o88okg%3D%3D";
  //   const url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${this.lawdCd}&DEAL_YMD=${this.dealYmd}`;
  //   axios.get(url).then(response => (this.apts = console.log(response.data.response.body.items.item)));
  // }
}
</script>

<style>

</style>