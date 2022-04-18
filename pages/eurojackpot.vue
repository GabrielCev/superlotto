<template>
  <div>
    <section class="section no-top-pad">  
      <h5 class="title is-5">Eurojackpot</h5>
      <hr>
        <div class="box columns is-mobile is-centered is-vcentered is-two-third">
            <p class="is-3 is-vcentered pr-3">Wo haben Sie gespielt?</p>
            <div class="select is-primary">
                <select v-model="selected" name="countries" id="selectCountries">
                    <option selected disabled>Country</option>
                    <option v-for="country in countries"
                    :title="country.name"
                    :key="country.code"
                    :value="country.code"
                    >
                        {{country.name}}
                    </option>
                </select>
            </div>
        </div>
      <div class="box columns is-mobile is-centered is-vcentered is-two-third ">
            <lotto v-for="game in games"
                :key="game.id"
                :title="game.title"
                :price="game.price"
                :place="selected"
            />
      </div>
    </section>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import lotto from '~/components/lottoCard.vue'

  export default {
    components: {
      lotto
    },
    data(){
      return {
        selected: '',
        games: [
          {id: 1, title: 'Win', price: 2 },
          {id: 2, title: 'Lose', price: 12 },
          {id: 3, title: 'Lose', price: 7.76 }
        ]
      }
    },
    apollo: {
      countries: gql`query {
        countries {
          name
          code
        }
      }`
    },
  }
</script>