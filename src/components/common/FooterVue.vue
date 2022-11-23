<template>
    <div>
        <!-- footer -->
        <div class="site-footer">
            <div class="inner first">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="widget">
                                <img src="../../assets/images/logo.png">
                            </div>
                            <div class="widget">
                                <h3 class="heading">SSAFY 8기<br>대전 6반 이승민, 하윤영</h3>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 pl-lg-5">
                            <div class="widget">
                                <h3 class="heading">Pages</h3>
                                <ul class="links list-unstyled">
                                    <li v-if="this.$session.get('session') != null">
                                        <router-link to="/board/boardlist">동네 생활</router-link>
                                    </li>
                                    <li v-if="this.$session.get('session') != null">
                                        <router-link to="/board/boardnotice">알짜 정보</router-link>
                                    </li>
                                    <li v-if="this.$session.get('session') != null">
                                        <router-link to="/member/mypage">마이페이지</router-link>
                                    </li>
                                    <li v-if="this.$session.get('session') != null">
                                        <router-link to="/aptcost">아파트 실거래가 조회</router-link>
                                    </li>
                                    <li v-if="this.$session.get('session') == null">
                                        <router-link to="/member/login">로그인</router-link>
                                    </li>
                                    <li v-if="this.$session.get('session') == null">
                                        <router-link to="/member/signup">회원가입</router-link>
                                    </li>
                                    <li v-if="this.$session.get('session') == null">
                                        <router-link to="/member/password">비밀번호 찾기</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="widget">
                                <h3 class="heading">Contact</h3>
                                <ul class="list-unstyled quick-info links">
                                    <li class="email"><a href="#">ssafy.com</a></li>
                                    <li class="phone"><a href="#">1544-9001</a></li>
                                    <li class="address"><a href="#">(SSAFY) 대전광역시 유성구 덕명동 124</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "FooterVue"
}
</script>

<style>

</style>