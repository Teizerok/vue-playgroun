<template>
  <div>
    <h1>Venues</h1>

    <div class="vuenues">
      <div v-for="vuenue in vuenues" :key="vuenue.id" class="vuenue">
        <router-link :to="`vuenue/${vuenue.id}`">
          {{ vuenue.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VuenuesPage",

  computed: {
    ...mapGetters(["vuenues"]),
  },
};
</script>


<style scoped>
h1 {
  margin: 0 0 100px 0;
}

.vuenue {
  cursor: pointer;
  margin: 0 0 40px 0;
}
</style>