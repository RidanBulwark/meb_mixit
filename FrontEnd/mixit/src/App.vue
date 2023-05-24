<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/home" class="navbar-item">
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
        <router-link to="/recipes" class="navbar-item">Recipes</router-link>
      </div>

      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/log-in" class="button is-light">Login</router-link>
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
import axios from 'axios'

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  computed: {
      cartTotalLength() {
          let totalLength = 0

          for (let i = 0; i < this.cart.items.length; i++) {
              totalLength += this.cart.items[i].quantity
          }

          return totalLength
      }
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
