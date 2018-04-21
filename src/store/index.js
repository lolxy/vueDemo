/**
 * Store index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  module: {

  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
