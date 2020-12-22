/* eslint-disable vue/no-v-html */ /* eslint-disable vue/no-v-html */ /*
eslint-disable no-console */ /* eslint-disable no-console */ /* eslint-disable
no-unused-vars */ /* eslint-disable eqeqeq */ /* eslint-disable
vue/no-duplicate-attributes */ /* eslint-disable vue/no-duplicate-attributes */
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
                          Create an Account
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
                              <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                  <v-text-field
                                    ref="firstName"
                                    persistent-hint
                                    label="First Name"
                                    autocomplete
                                    :rules="nameRules"
                                    filled
                                    disabled
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                  <v-text-field
                                    ref="lastName"
                                    persistent-hint
                                    label="Last Name"
                                    autocomplete
                                    :rules="nameRules"
                                    filled
                                    disabled
                                  >
                                  </v-text-field>
                                </v-col>
                              </v-row>

                              <!-- Phone input goes here -->
                              <no-ssr>
                                <vue-tel-input
                                  style="
                                    padding: 10px;
                                    margin-bottom: 29px;
                                    background-color: #eee;
                                  "
                                  required
                                  placeholder="Mobile Number"
                                  filled
                                  disabled
                                ></vue-tel-input>
                              </no-ssr>

                              <!-- Phone input ends here -->

                              <v-text-field
                                ref="email"
                                outlined
                                label="Work Email Address"
                                autocomplete
                                :rules="emailRules"
                                required
                                persistent-hint
                                filled
                                disabled
                              ></v-text-field>
                              <!-- <v-text-field
                                  ref="password"
                                  v-model="authCredentials.authPassword"
                                  type="password"
                                  single-line
                                  label="Password"
                                  text
                                  :rules="passwordRules"
                                  :append-icon="
                                    show1 ? 'visibility' : 'visibility_off'
                                  "
                                  :append-icon-cb="() => (show1 = !show1)"
                                  :type1="show1 ? 'password' : 'text'"
                                  required
                                  @click:append="show1 = !show1"
                                >
                                </v-text-field> -->
                              <v-text-field
                                ref="referenceCode"
                                persistent-hint
                                label="Reference Code"
                                autocomplete
                                :rules="nameRules"
                                outlined
                                required
                                filled
                                disabled
                              >
                              </v-text-field>
                            </v-col>
                            <v-col>
                              <v-row>
                                <v-col cols="6" xs="12" sm="12" md="8" lg="8">
                                  <p style="font-size: 12px">
                                    <!-- <a href="/recover_password" class="txt-primary"
                                  >Forgot Password ?
                                </a> -->
                                    By clicking on Continue, you accept our
                                    <span class="term">Terms of service</span>
                                    and
                                    <span class="term">Privacy Policy</span>
                                  </p>
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
                                    v-if="!authenticatingUser"
                                    color="#4881DB"
                                    dark
                                    medium
                                    align="right"
                                    @click="validate"
                                    >Continue</v-btn
                                  >
                                </v-col>
                              </v-row>
                            </v-col>
                          </template>
                        </v-row>
                        <p class="d-flex justify-end already-have">
                          Already have an account?
                          <span class="have-an-account">Sign in</span>
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
            md="12"
            lg="6"
            xl="6"
            style="color: white"
            class="pa-0"
          >
            <div class="main-img place-center">
              <div class="tw-text-left place-center" style="width: 55%">
                <h2
                  class="h2 leading-8 transform-with-cloudenly text-white font-semibold"
                >
                  Transform with Cloudenly and experience the Power of a unified
                  business operation
                </h2>
                <div class="mt-4 pricing-apps text-white">
                  CRM. Sales. Purchase. Inventory. Operations. Commerce.
                  Finance. Cloud Storage. HRM.
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </theme>
  </v-app>
</template>
<script>
import Theme from './../theme'
export default {
  layout: 'signupLayout',
  components: {
    theme: Theme,
  },
  data() {
    return {
      awaitVerify: false,
      valid: true,
      color: 'primary',
      dark: null,
      errorMsgVisible: false,
      errorMsg: '',
      domain: false,
      domainName: '',
      domainChecking: false,
      authCredentials: {
        accountId: 'isolamotor',
        firstName: '',
        lastName: '',
        email: '',
        authPassword: '',
        userLogin: false,
      },
      userId: '',
      email: '',
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
      authenticatingUser: false,
      readOnly: true,
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
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
.v-application .pa-3 {
  padding: 3px !important;
}

.already-have {
  font-size: 12px;
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
  color: #38b938;
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
