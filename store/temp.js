/* eslint-disable prettier/prettier */
export const state = () => ({
    userId: null,
  })
  
  export const mutations = {
    addUserId(state, text) {
      state.userId = text
    },
    remove(state) {
      state.userId = null
    },
  }