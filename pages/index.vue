<template>
  <div>
    <section class="section left-right-pad is-flui">  
      <div class="hero is-medium is-primary is-bold has-text-centered">
        <div class="hero-body">
          <h1 class="title">
            Herzlich Willkommen auf Supralotto
          </h1>
          <h2 class="subtitle">
            Ihr Ticket zum Glück!
          </h2>   
        </div>
      </div>
    </section>   
      
    <section class="section">
      <div class="columns is-mobile is-centered is-vcentered is-two-third shimmer">
        <figure class="image is-96x96">
          <img class="is-rounded" src="/star.png">
        </figure>
        <a class="button is-warning is-light is-focused" href="/eurojackpot">
            Jetzt Eurojackpot spielen!
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
