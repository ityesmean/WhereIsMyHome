<template>
    <div>
        <div class="untree_co-section bg-light">
            <div align="center" style="margin:100px">
                <form action="apt.do?" method="get">
                    <input type="hidden" id="hidden" name="action" value="aptmodifyform">
                        <h1>디테일이랑께</h1>
                    <!-- 아파트 이름: <input type="text" name="apartmentName" readonly="readonly" value="${apt.apartmentName }">
                    <br>
                    건축년도: <input type="text" name="buildYear" readonly="readonly" value="${apt.buildYear }"><br>
                    도로명: <input type="text" name="roadName" readonly="readonly" value="${apt.roadName }"><br>
                    법정동: <input type="text" name="dong" readonly="readonly" value="${apt.dong }"><br>
                    동코드: <input type="text" name="dongCode" readonly="readonly" value="${apt.dongCode }"><br>
                    지번: <input type="text" name="jibun" readonly="readonly" value="${apt.jibun }"><br>
                    위도: <input type="text" name="lat" readonly="readonly" value="${apt.lat }"><br>
                    경도: <input type="text" name="lng" readonly="readonly" value="${apt.lng }"><br> -->
                </form>
            </div>
        </div>
    </div>
</template>