import Vuex from "vuex";
import Vue from "vue";
import { vuenuesManager } from "../api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state() {
    return {
      vuenues: [],
      vuenue: null,
      preparationMessage: null,
      messages: [],
    };
  },

  mutations: {
    //загрузка всех ресторанов
    setVuenues(state) {
      state.vuenues = vuenuesManager.getVuenues();
    },

    //создание подготовительного сообщения
    setPreparationMessage(state, message) {
      state.preparationMessage = message;
    },
    //загрузка выбраного ресторана
    setVuenue(state, vuenueId) {
      state.vuenue = state.vuenues.filter((vuenue) => {
        return vuenue.id === +vuenueId;
      })[0];
    },

    //окончательное добавление сообщения в список
    addMessage(state) {
      state.messages.push(state.preparationMessage);
      state.preparationMessage = null;
    },
  },

  getters: {
    vuenue: (state) => {
      return state.vuenue;
    },
    vuenues: (state) => {
      return state.vuenues;
    },

    messages: (state) => {
      return state.messages;
    },
    preparationMessage: (state) => {
      return state.preparationMessage;
    },
  },
});
