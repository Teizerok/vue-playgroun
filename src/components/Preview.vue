<template>
  <div>
    <h3>{{ preparationMessage.to.name }}</h3>
    <label for="message">your message</label>
    <p>{{ preparationMessage.message }}</p>
    <label for="rates">your rates</label>
    <p>{{ preparationMessage.rates }}</p>
    <hr />

    <label for="submit">if all rightly, you can submit your message</label>
    <button @click="onSubmit">submit</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "PreviewPage",
  computed: {
    ...mapGetters(["preparationMessage"]),
  },

  methods: {
    ...mapMutations(["addMessage"]),
    onSubmit() {
    this.$router.push("/vuenues");
	this.addMessage()
    },
  },
};
</script>