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
                <form action="addr.do" method="get" id="rform">
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

                        <div class="form-group col-md-2">
                            <button v-on:click="getAptList" type="button" id="list-btn" class="btn btn-primary mb-4">
                              조회</button>
                        </div>

                        <div class="form-group col-md-2">
                            <button type="button" id="favorite-btn" class="btn btn-primary mb-4">
                              관심지역 설정</button>
                        </div>
                    </div>
                </form>
                <div id="map" style="width: 1100px; height: 400px"></div>
                <div style="width: 1100px; height: 400px; overflow: auto">
                    <table class="table table-hover text-center" v-show="apts">
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
                          <apt-list-item v-for="(apt, index) in apts" :key="index" :apt="apt"></apt-list-item>
                        </tbody>
                    </table>
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
      dongregcode: '',
      sido: [],
      gugun: [],
      dong: [],
      apts: null
    };
  },
  mounted() {
    this.sendRequest("sido", "00000000")
  },
  methods: {
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
      const url = `http://localhost/home/aptlist/${this.dongregcode}`;
      this.$axios.get(url)
        .then(response => this.apts = response.data)
    }
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