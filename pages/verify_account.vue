
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable -->

<template>
  <v-app>
    <theme>
      <div slot="content" class="pa-0">
        <v-row class="pa-0 bg-gray-200">
          <v-col md="2">
            <div class="d-flex">
              <nuxt-link to="/">
                <img src="/img/cloudenly-logo.svg" class="ml-5 mt-2" />
              </nuxt-link>
            </div>
          </v-col>
           <v-snackbar
              v-model="snackbar"
              :bottom="y === 'bottom'"
              :color="color"
              :left="x === 'left'"
              
              :right="x === 'right'"
              :timeout="3000"
              :top="y === 'top'"
              
      
    >
    {{snackbarText}}
    <!-- <v-btn text @click="snackbar = false">
      x
    </v-btn> -->
    </v-snackbar>
          <v-col cols="12" md="4" class="pa-0 placement-relative">
            <v-layout class="ml-12">
              <v-card
                elevation="10"
                class="mx-auto pa-3 pt-9 pb-12 push-center"
                min-width="42vw"
                style=""
              >
                <v-container>
                  <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md9>
                      <v-alert
                        v-if="errorMsgVisible"
                        outline
                        color="error"
                        icon="warning"
                        :value="true"
                      >
                      </v-alert>
                      <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        class="pa-0"
                        autocomplete
                      >
                        <h1 align="left" class="h1 create-account">
                          Enter your verification code
                        </h1>
                        <v-row
                          justify="center"
                          align="center"
                          cols="12"
                          md="6"
                          lg="2"
                          no-gutters
                        >
                          <template>
                            <v-col cols="12" md="12" sm="12" xs="12">
                              <div class="md:mt-1">
                                <!-- code input goes here -->
                                <CodeInput
                                  :loading="false"
                                  class="input"
                                  type="number" v-on:complete="onComplete"
                                />
                              </div>
                              <div v-if="isValidCode" class="md:mt-10">
                                <v-text-field
                          v-model="password"
                          label="Password"
                          name="password"
                          :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'"
                          :type="show1 ? 'password' : 'text'"
                          :rules="passwordRules"
                          @click:append="show1 = !show1"
                          solo
                        />

                      <v-text-field
                        v-model="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        :append-icon="show2 ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="show2 ? 'password' : 'text'"
                        :rules="confirmPasswordRules"
                        @click:append="show2 = !show2"
                        solo
                      /><div>
                      <v-row>
                                <v-col cols="6" xs="12" sm="12" md="8" lg="8">
                                </v-col>

                                <v-col
                                  class="d-flex justify-end"
                                  cols="6"
                                  xs="12"
                                  sm="12"
                                  md="4"
                                  lg="4"
                                >
                                  <v-btn
                                    v-if="isValidCode"
                                    color="#4881DB"
                                    dark
                                    medium
                                    align="right"
                                    @click="activateAccount"
                                    >submit</v-btn
                                  >
                                </v-col>
                              </v-row>

                                  </div>
                              </div>
                            </v-col>
                            
                            <v-col>
                              <v-row>
                                <v-col cols="6" xs="12" sm="12" md="8" lg="8">
                                </v-col>

                                <v-col
                                  class="d-flex justify-end"
                                  cols="6"
                                  xs="12"
                                  sm="12"
                                  md="4"
                                  lg="4"
                                >
                                  <v-progress-circular
                                    v-if="authenticatingUser"
                                    indeterminate
                                    :size="50"
                                    color="primary"
                                  ></v-progress-circular>
                                  <v-btn
                                    v-if="!isValidCode"
                                    color="#4881DB"
                                    dark
                                    medium
                                    align="right"
                                    @click="verifyEmail"
                                    >verify</v-btn
                                  >
                                </v-col>
                              </v-row>
                            </v-col>
                          </template>
                        </v-row>
                        <p v-if="!isValidCode" class="d-flex justify-end already-have">
                          Didn't get the email?
                          
                          <span @click="resendVerificationCode" class="have-an-account" type="button">Click here</span>
                        </p>
                      </v-form>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-layout>
          </v-col>
          <v-col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            style="color: white"
            class="pa-0"
          >
            <div class="main-img place-center">
              <div class="tw-text-left" style="width: 55%">
                <h1 class="h1 leading-8 awesome text-white font-semibold">
                  Awesome,
                </h1>
                <h4
                  class="h4 leading-8 text-white font-semibold verify-account"
                >
                  Your account has been created
                </h4>
                <div class="mt-4 pricing-apps text-white">
                  One last step and you are all good to go. An email with a
                  verification code has been sent to you.
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </theme>
  </v-app>
</template>
<!-- eslint-disable -->
<script>
import Theme from './../theme'
import { mapState } from "vuex"
export default {
  layout: 'signupLayout',
  components: {
    theme: Theme,
    // CodeInput,
    // OtpInput,
  },
  data() {
    return {
      verifying: 'Verify',
      snackbar: false,
      color: 'success',
      snackbarText: '',
       mode: '',  
        x: 'left',
        y: 'top',
      awaitVerify: false,
      valid: true,
      dark: null,
      errorMsgVisible: false,
      errorMsg: '',
      domain: false,
      domainName: '',
      domainChecking: false,
      authEmailVerification: {
        userId: '',
        emailVerificationCode: '',
      },
      isValidCode: false,
      orgId: '',
      isvalid: true,
      passwordRules: [(v) => !!v || ''],
      nameRules: [(v) => !!v || ''],
      domainRules: [(v) => !!v || ''],
      emailRules: [
        (v) => !!v || '',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '',
      ],
      show1: true,
      show2: true,
      authenticatingUser: false,
      readOnly: true,
      password: '',
      confirmPassword: '',
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.password || 'The password confirmation does not match.',
      ],
    }
  },
  computed: {
    ...mapState(["temp"])
  },
  methods: {
    async verifyEmail() {
      this.authEmailVerification.userId = this.temp.userId
      try {
        await this.$axios.post('/code/verify', this.authEmailVerification)
      this.snackbar = true
      this.color = 'success'
      this.snackbarText = `You entered a valid verification Code`
      this.isValidCode = true
      this.verifying = 'Verifying...'
      }
       catch (error) {
        this.snackbar = true
        this.color = 'error'
        this.snackbarText = `Invalid verification code`
        this.isValidCode = false
      }
      // redundant
      this.$refs.form.validate()
    },
    async activateAccount() {
      this.authEmailVerification.userId = this.temp.userId
      try {
        await this.$axios.post('/account/activate', { 
        userId: this.authEmailVerification.userId,
        emailVerificationCode: this.authEmailVerification.emailVerificationCode,
        password: this.password})
      this.snackbar = true
      this.color = 'success'
      this.snackbarText = `You have successfully activated your account`
      }
       catch (error) {
        this.snackbar = true
        this.color = 'error'
        this.snackbarText = `An error occured. Kindly complete all fields`
       
      }
      // redundant
      this.$refs.form.validate()
    },
     async resendVerificationCode() {
        this.authEmailVerification.userId = this.temp.userId
      try {
        await this.$axios.post('/signup/resend-verification', {userId: this.authEmailVerification.userId,
        emailVerificationCode: this.authEmailVerification.emailVerificationCode,
        })
      this.snackbar = true
      this.color = 'success'
      this.snackbarText = `A new verification code has been sent to your email`
      }
       catch (error) {
        this.snackbar = true
        this.color = 'error'
        this.snackbarText = `An error occured. Try again...`
       
      }
      },
    onComplete(v) {
      this.authEmailVerification.emailVerificationCode =  v;
    },
  },
  // computed: {
  //   addSidebar() {
  //     return this.$route.meta.addSidebar
  //   },
  //   getTheme() {
  //     return this.$route.meta.theme
  //   },
  // },
  // mounted() {
  //   this.channel = this.$route.query.channel
  //   // this.authCredentials.alias = this.$route.params.alias
  //   // this.email = this.$route.query.email
  //   this.alias = this.$route.params.alias
  //   // this.authCredentials.email = this.email
  //   this.app = this.$route.query.app
  //   this.onload()
  //   // eslint-disable-next-line eqeqeq
  //   if (this.$route.meta.theme == 'humanar') {
  //     this.dark = true
  //     this.color = '#5E227F'
  //     // eslint-disable-next-line eqeqeq
  //   } else if (this.$route.meta.theme == 'optima') {
  //     this.dark = false
  //     this.color = 'primary'
  //   }
  // },
  // methods: {
  //   async domainCheck() {
  //     this.domainChecking = true
  //     const domain = this.authCredentials.accountId
  //     try {
  //       const response = await this.$_checkUserAlias(domain)
  //       if (response.data.aliasExists) {
  //         try {
  //           const checkalias = await this.$_getUserId(domain)
  //           this.errorMsgVisible = false
  //           this.domainChecking = false
  //           if (checkalias.data.alreadyVerified) {
  //             this.domain = true
  //           } else {
  //             this.awaitVerify = true
  //             this.userId = checkalias.data.userId
  //             localStorage.setItem(
  //               'userId',
  //               JSON.stringify(checkalias.data.userId)
  //             )
  //           }
  //         } catch (error) {
  //           this.errorMsgVisible = false
  //           this.domainChecking = false
  //           this.domain = true
  //           const params = `domain=${domain}`
  //           window.location.href = window.location.href + `?${params}`
  //         }
  //       } else {
  //         this.errorMsgVisible = true
  //         this.errorMsg = 'Invalid Domain Name'
  //         this.domainChecking = false
  //         this.domain = false
  //       }
  //     } catch (error) {
  //       this.errorMsgVisible = true
  //       this.errorMsg = 'Invalid Domain Name'
  //       this.domainChecking = false
  //       // eslint-disable-next-line no-console
  //       console.log('error', error)
  //     }
  //   },
  //   async resend() {
  //     try {
  //       const user = {
  //         userId: this.userId,
  //       }
  //       // eslint-disable-next-line no-unused-vars
  //       const response = await this.$_resendVerification(user)
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     }
  //   },
  //   onload() {
  //     if (this.authCredentials.alias) {
  //       this.orgId = true
  //     } else if (this.authCredentials.email) {
  //       this.orgId = true
  //     }
  //   },
  //   setVariables() {
  //     this.authCredentials.alias = this.$route.query.alias
  //     this.authCredentials.email = this.$route.query.email
  //     this.authCredentials.firstName = this.$route.query.firstName
  //     this.authCredentials.lastName = this.$route.query.lastName
  //   },
  //   proceedWithLogin() {
  //     const linchpin = localStorage.getItem('linchpin')
  //     const token = localStorage.getItem('token')
  //     // eslint-disable-next-line no-unused-vars
  //     const params = `linchpin=${linchpin}&token=${token}`
  //     const query = this.$route.query.channel
  //     // eslint-disable-next-line no-console
  //     console.log('query', query)

  //   },
  //   inputFocused() {
  //     this.readOnly = false
  //   },
  //   authenticateUser() {
  //     if (this.$refs.form.validate()) {
  //       /* if (!result) {
  //               return
  //           } */
  //       const authenticateUser = this.$store.dispatch(
  //         'authentication/login',
  //         this.authCredentials
  //       )
  //       this.authenticatingUser = true
  //       authenticateUser
  //         .then((res) => {
  //           // eslint-disable-next-line no-unused-vars
  //           const org = res.org

  //           const linchpin = localStorage.getItem('linchpin')
  //           const token = localStorage.getItem('token')
  //           const params = `linchpin=${linchpin}&token=${token}`
  //           const query = this.$route.query.channel
  //           // eslint-disable-next-line no-console
  //           console.log('query', query)
  //           if (query === 'localdev') {
  //             window.location.href = `http://localhost:8080?${params}`
  //           } else {
  //             this.proceedWithLogin()
  //             this.$router.push({ name: 'Dashboard' })
  //           }

  //         })
  //         .catch((error) => {
  //           // eslint-disable-next-line eqeqeq
  //           if (error.response.status == 401) {
  //             localStorage.setItem(
  //               'userId',
  //               JSON.stringify(error.response.data.userId)
  //             )
  //             if (error.response.data.requiresTwoFactorAuth) {
  //               this.$router.push({ name: 'VerifyOTP' })
  //             }

  //           }
  //           this.authenticatingUser = false
  //           this.errorMsgVisible = true
  //           this.errorMsg = error.response.data.msg
  //           setTimeout(
  //             function () {
  //               this.errorMsgVisible = false
  //             }.bind(this),
  //             5000
  //           )
  //         })
  //     } else {

  //     }
  //   },
  //   async checkalias() {
  //     const alias = this.authCredentials.alias
  //     try {
  //       this.authenticatingUser = true
  //       const response = await this.$_checkUserAlias(alias)
  //       this.aliasExists = response.data.aliasExists
  //       if (response.data.aliasExists) {
  //         this.requestopt = true
  //         const params = `alias=${alias}`
  //         if (this.app) {
  //           window.location.href = window.location.href + `&${params}`
  //         } else {
  //           window.location.href = window.location.href + `?${params}`
  //         }
  //       } else {
  //         this.authenticatingUser = false
  //         this.errorMsgVisible = true
  //         this.errorMsg = 'Invalid Domain'
  //         setTimeout(
  //           function () {
  //             this.errorMsgVisible = false
  //             this.authenticatingUser = true
  //           }.bind(this),
  //           5000
  //         )
  //       }
  //     } catch (error) {
  //       this.authenticatingUser = false
  //       this.show = false
  //     }
  //   },
  // },
}
</script>

<style scoped>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  textalign: 'center';
}
.error {
  border: 1px solid red !important;
}

.awesome {
  font-size: 45px;
  margin-bottom: 13px;
}

.verify-account {
  font-size: 20px;
}

.v-application .pa-3 {
  padding: 3px !important;
}

.already-have {
  font-size: 13px;
}
/* .telephone {
  padding: 10px;
  margin-bottom: 29px;
} */
/* First Name and Last Name input fields starts here*/
.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: -17px;
}
/* First Name and Last Name input fields Ends here*/

.v-input__slot {
  align-items: center;
  color: inherit;
  display: flex;
  margin-bottom: 5px;
  min-height: inherit;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
}

.v-application .pb-12 {
  padding-bottom: 8px !important;
}

.v-application .pt-9 {
  padding-top: 10px !important;
}

.term {
  color: #38b938;
}
.have-an-account {
  color: #1976d2;
  margin-left: 2px;
}
.transform-with-cloudenly {
  font-size: 22px;
  color: #fff;
}
.pricing-apps {
  color: #fff;
}
.create-account {
  font-size: 28px;
  font-weight: 900;
}
.main-img {
  background: url('~assets/signup-image.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
.push-center {
  position: absolute;
  left: 0px;
  transform: translateY(-50%);
  top: 52%;
}
.placement-relative {
  color: white;
  height: 100vh;
  position: relative;
}
.place-center {
  display: grid;
  place-items: center;
}
.text-left {
  margin-left: 10px;
}
</style>
