
<template>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library -->
        <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
                <i class="right fas fa-angle-left"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            <li class="nav-item">
                <a href="#" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p>Dashboard</p>
                </a>
            </li>
            
            </ul>
        </li>
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
                <i class="nav-icon fas fa-book"></i>
                <p>
                    Pages
                    <i class="fas fa-angle-left right"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/categories" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Categories</p>
                    </router-link>
                </li>
            </ul>
            
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/products" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Products</p>
                    </router-link>
                </li>
            </ul>

        </li>
        </ul>
    </nav>
</template>
      
<script scoped>
export default {
    name:"SideBarComponent",

}
</script>

<style>

</style>