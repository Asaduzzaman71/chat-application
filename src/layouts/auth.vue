<template> 
    <div class="page-init" :style="showSite ? 'display:block': 'display:none'">
        <slot></slot>
    </div>
</template>
    
<script setup>
useHead({
    title: "AGSQA",
    titleTemplate: '%s',
    meta: [{ name: "description", content: "My amazing site" }],
    link:[
    {rel: 'icon', type: 'image/x-icon', href:'/img/favicon.png'},
    {type:'text/css', rel:'stylesheet', href:'//fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900'},
    {type:'text/css', rel: 'stylesheet', href:'/admin/css/app-modern.min.css'},
    {type:'text/css', rel: 'stylesheet', href:'/css/app.css'},
    {type:'text/css', rel: 'stylesheet', href:'/admin/css/icons.min.css'},

    ],
});  
let showSite = ref(false)
onMounted(() => {
  setTimeout(() => showSite.value = true, 100)
})
</script>
    
<style scoped>
.auth-fluid-form-box{
    /* background: linear-gradient(171deg, rgb(0 28 58) 0%, rgb(0 60 94) 35%, rgb(21 83 96) 100%); */
    background: linear-gradient(0deg, rgb(0 28 58) 0%, rgb(21 83 96) 100%, rgb(0 60 94) 35%);
}
.auth-fluid-form-box *{
    color: #333;
}
.auth-fluid-form-box label,
.auth-fluid-form-box h4
{
    color: rgb(229, 229, 229);
}
.auth-fluid-form-box input::placeholder{
    color: rgb(138, 138, 138);
}
.auth-fluid-form-box button[type=submit],
.auth-fluid-form-box button[type=submit] i
{
    color: rgb(255, 255, 255);
}
.auth-fluid-form-box .footer.footer-alt b{
    color: rgb(183, 183, 183);
}
.page-init{
  animation:  
  page-init 0.5s ease, 
  page-init 0.5s ease-in;
}
@keyframes page-init {
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes page-init{
    0%, 20%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>
    