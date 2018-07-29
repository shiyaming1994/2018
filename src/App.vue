<template>
  <div id="app">
         <transition name="fadeIn" mode='out-in'>
            <!-- <keep-alive> -->
              <router-view class="Router"></router-view>
            <!-- </keep-alive>   -->
        </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html {
    margin: 0;
    padding: 0;
    background-color: #efefef;
  }
  ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .clearfix:after {
  content:"";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}




  .fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active {
    transition: all 0.2s linear;
  }
  .fadeIn-leave-active {
    transition: all 0.2s linear;
    opacity: 0;
  }

</style> 
