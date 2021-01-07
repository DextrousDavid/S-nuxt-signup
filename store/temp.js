/* eslint-disable prettier/prettier */
export const state = () => ({
    userId: null,
    isValidCode: null,
  })
  
  export const mutations = {
    addUserId(state, text) {
      state.userId = text
    },
    addIsValidCode(state, text) {
      state.isValidCode = text
    },
    remove(state) {
      state.userId = null
    },
    removeIsValidCode(state) {
      state.isValidCode = null
    }
  }