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
                            <select class="dropdown" id="sido" name="sido">
                                <option value="">시도선택</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <select class="dropdown" id="gugun" name="gugun">
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
                        <tbody id="aptlist"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

export default {
    

    mounted() {
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
    }

    , methods: {
        initMap() {
            const container = document.getElementById("map");
            const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 5,
        };

        //지도 객체를 등록합니다.
        //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
            this.map = new kakao.maps.Map(container, options);
        }
    },
}
</script>

<style>

</style>