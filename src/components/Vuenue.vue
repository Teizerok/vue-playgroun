<template>
  <div>
    <div>
      <h1>venue</h1>
      <router-link :to="`/vuenues`">go to venues</router-link>
    </div>

    <div v-if="vuenue">
      <div>
        <p>!!{{ vuenue.name }}!!</p>
      </div>

      <div v-for="message in sortedMessages" :key="message.id" class="messages">
        <p>{{ message.message }} {{ message.rates }}</p>
      </div>

      <form>
        <textarea v-model="message"></textarea>

        <div v-for="rate in 5" :key="rate">
          <label for="rates">{{ rate }}</label>
          <input :value="rate" v-model="rates" name="rates" type="radio" />
        </div>

        <button @click.prevent="onContinue">continue</button>
      </form>
    </div>
    <div v-else>
      <p>loading...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "VuenuePage",

  data: () => {
    return {
      vuenuesId: null,
      message: "",
      rates: 1,
    };
  },
  computed: {
    ...mapGetters(["vuenue", "messages"]),

    //из всех комментариев показывает только конкретного ресторана
    sortedMessages() {
      return this.messages.filter((message) => {
        return message.to.id === this.vuenue.id;
      });
    },
  },

  methods: {
    ...mapMutations(["setVuenues", "setVuenue"]),

    onContinue() {
      //создание подготовительного сообщения
      const preparationMessage = {
        message: this.message,
        rates: this.rates,
        to: this.vuenue,
        id: Math.ceil(new Date().getTime() * Math.random()),
      };

      //добавление и переадресация
      this.$store.commit("setPreparationMessage", preparationMessage);
      this.$router.push("/preview");
    },
  },

  mounted() {
    //загрузка базовых данных
    this.vuenuesId = this.$route.params.id;
    this.setVuenues();
    this.setVuenue(this.vuenuesId);
  },
};
</script>