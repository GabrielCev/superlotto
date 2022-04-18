<script>
  export default {
    props: {
      title: String,
      price: [String, Number],
      place: {
        default: "",
        type: String
      }
    },
    filters: {
      tableCurrency: function (num) {
        if (!num) {
          return '0.00';
        }
        const number = (num / 1).toFixed(2).replace(',', '.');
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    }
  }
</script>

<template>
  <div class="card is-rounded m-1">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="/Lotto.png" alt="Image">         
      </figure>
    </div>
    <div class="card-content">
      <div class="media-content has-text-centered">                            
        <p class="subtitle is-6">{{ title }}</p>
        <p class="title is-4">{{ price | tableCurrency }} €</p>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item is-one-quarter">
        {{ place }}
      </p>
      <p class="card-footer-item">
        <span>
            <a href="#" class="button is-primary">Erneut spielen</a>
        </span>
      </p>
    </footer>
  </div>
</template>