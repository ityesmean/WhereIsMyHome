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
                                <option value="">시도선택</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <select class="dropdown" id="gugun" name="gugun" @change="changeGugun">
                                <option value="">구군선택</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <select class="dropdown" id="dong" name="dong">
                                <option value="">동선택</option>
                            </select>
                        </div>

                        <div class="form-group col-md-2">
                            <button type="button" id="list-btn" class="btn btn-primary mb-4">
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
                    <table class="table table-hover text-center" style="display: none">
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
import axios from "axios";
import AptListItem from "@/components/apt/AptListItem.vue"

export default {
  name: "AptList",
  components: {
    AptListItem,
  },
  data() {
    return {
      dongregcode: '',
      apts: [],
    };
  },
  mounted() {
    this.$axios.get('http://localhost/home/addrlist/sido/00000000')
        // .then(response => console.log(response.data[0].dongCode))
        // .then(console.log(data.dongCode.substr(0, 2)))
        // .then(this.sendRequest("gugun", response.data.dongCode.substr(0, 2)))
  },
  methods: {
    // getSido: function() {
    //   this.$axios.get('http://localhost/home/addrlist/00000000/sido')
    //       .then(response => this.changeSido(response.da))
    // },
    changeSido() {
      // 불러온 후, 시도 바뀌면 여기 수정 (구군 업데이트)
      console.log()
    },
    changeGugun() {
      // 그 다음 구군 바뀌면 여기 수정 (시도 업데이트)
    },
    sendRequest(selid, regcode) {
      const url = "/home/addrlist/"+selid+"/"+regcode;
      console.log(selid);
      console.log(regcode)
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.addOption(selid, data));
    },
    addOption(selid, data) {
      console.log(selid);
      console.log(data);
    },
    
    getAptList() {
      // const serviceKey = "eE7PGNUbEMWVo1p6YJHhd%2BYFWOWanb055uXd5H9gCpAoYc6DUWTRfrSQeO6Gsi4%2FYLa7GYXlrVPXq549o88okg%3D%3D";
      // const url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${this.lawdCd}&DEAL_YMD=${this.dealYmd}`;
      const url = `http://localhost/home/aptlist/${this.dongregcode}`;
      axios.get(url).then(response => (this.apts = response.data.response.body.items.item));
      console.log(this.apts);
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