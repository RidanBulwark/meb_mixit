<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <strong>MixIT</strong>
      </router-link>

      <a class="navbar-burger" aria-label="manu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active':showMobileMenu}">  
      
      <div class="navbar-end">
        <router-link to="/cooking" class="navbar-item">Cooking</router-link>
        <router-link to="/baking" class="navbar-item">Baking</router-link>
      </div>

      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/login" class="button is-light">Login</router-link>
          <router-link to="/sign-up" class="button is-light">Sign up</router-link>
          <router-link to="/recipes" class="button is-light">My recipes</router-link>
        </div>
      </div>
    </div>
  </nav>

  <section class="section">
    <router-view/>
  </section>

  <footer class="footer">
    <p class="has-text-centered">Team MEB</p>
  </footer>
</template>

<script>
export default{
  data(){
    return {showMobileMenu: false}
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading {
    height: 80px;
  }
}
</style>
