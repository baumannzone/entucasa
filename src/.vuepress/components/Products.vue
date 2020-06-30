<template>
  <div>
    <h1>Products</h1>
    <div>
      <section v-for="(val, key) in filteredProducts">
        <h2>{{ filteredProducts[key].title }}</h2>
        <div v-for="(value, index) in filteredProducts[key].data">
          <h3>{{ value.displayName }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import products from '../data/index.json'

  export default {
    name: "Products",
    props: {
      pageName: {
        type: String,
        required: true,
        default: 'CATERING'
      },
    },
    computed: {
      filteredProducts() {
        return products
      }
    },
  }
</script>

<style scoped>

</style>