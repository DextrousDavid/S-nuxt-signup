<template>
  <div class="main">
    <v-app id="layout" class="main">
      <the-layout>
        <slot name="content"></slot>
      </the-layout>
    </v-app>
  </div>
</template>
<script>
import thelayout from './Layout'
export default {
  components: {
    'the-layout': thelayout,
  },
  data() {
    return {}
  },
}
</script>
<style>
/*.main{
		background-color: blue !important;
		 
	}
	#layout{
	}*/
</style>
