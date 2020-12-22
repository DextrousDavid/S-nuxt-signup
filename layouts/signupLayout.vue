<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  components: {},
  head() {
    return {
      title:
        'Cloudenly - The Business Software for a Connected Digital Economy',
      meta: [
        {
          hid:
            'Cloudenly - The Business Software for a Connected Digital Economy',
          name:
            'Cloudenly - The Business Software for a Connected Digital Economy',
          content:
            'Cloudenly - The Business Software for a Connected Digital Economy',
        },
      ],
    }
  },
}
</script>
<style>
@import '../assets/css/app.css';
@import '../assets/fonts/stylesheet.css';
/* @import 'bootstrap/dist/css/bootstrap.min.css'; */

* {
  font-family: GalanoGrotesque;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
