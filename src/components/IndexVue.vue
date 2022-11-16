<template>
    <div>
        <div class="untree_co-section bg-light">
        <div class="container">
            <div class="row align-items-center mb-3">
            <div class="col-6">
                <h2 class="heading-2">지금 바로, 확인해 보세요.</h2>
            </div>
            </div>
        </div>
        <!-- <div class="owl-3-slider owl-carousel"> -->
            <div class="container">
            <div class="item">
            <div class="property-entry">
            
                <div class="property-specs">
                <strong class="price"><span class="icon-wrap flaticon-house-size"></span> 아파트 실거래가</strong>
                <div class="location d-flex justify-content-between align-items-center">
                    <div>
                    <span class="d-block caption"></span>
                    <h3><a href="#"><span></span></a></h3>
                    </div>
                    <div class="more">
                    <router-link to="/aptcost">
                        <span class="icon-keyboard_backspace"></span>
                    </router-link>
                    </div>
                </div>     
                </div>
            </div> <!-- /.property-entry --> 
            </div> 
        </div>       
        </div>

    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$session.get('session'));
    }

}
</script>

<style>

</style>