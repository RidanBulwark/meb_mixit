<template>
  <div class="home">
    <form action="" class="sign-in-form">
            <h1 class="title">Login</h1>
                
            <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" v-model="username"/>
            </div>
            
            <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" v-model="password"/>
            </div>
            
            <input type="submit" value="Login" class="btn solid" @click="submit-login"/>
          </form>
            <router-link to="/sign-up" class="btn solid"><p> Sign Up </p></router-link>

            <router-link to="/about" class="btn solid"><p> About </p></router-link>
  </div>
</template>

<script>


</script>
