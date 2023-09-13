<template>
 
    <div class="wrapper">
     <!-- Navbar -->
     <NavBarComponent />
     <!-- /.navbar -->
     <MainSidebarComponent />
         
     <!-- Content Wrapper. Contains page content -->
     <div class="content-wrapper">
       <!-- Content Header (Page header) -->
       <ContentHeaderComponent />
       <!-- /.content-header -->
   
       <!-- Main content -->
       <section class="content">
         <div class="container-fluid">
            <slot></slot>
         </div><!-- /.container-fluid -->
       </section>
       <!-- /.content -->
     </div>
     <!-- /.content-wrapper -->
     <FooterComponent />
   
     
   </div>
   <!-- ./wrapper -->
   </template>
<script>
import FooterComponent from '../components/admin/Footer.vue'
import MainSidebarComponent from '../components/admin/MainSidebar.vue'
import NavBarComponent from '../components/admin/NavBar.vue'
import ContentHeaderComponent from '../components/admin/ContentHeader.vue'

export default {
  name: 'AdminLayout',
  components: {
    MainSidebarComponent,NavBarComponent,ContentHeaderComponent,FooterComponent
  }
}
</script>
