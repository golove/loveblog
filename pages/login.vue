
<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>登录</v-toolbar-title>
                <v-spacer />
                <!-- <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/pMvGQO"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>-->
              </v-toolbar>
              <v-card-text>
                <v-form
                ref="form"
                v-model="valid"
                >
                  <v-text-field 
                  v-model="user.username"
                   :counter="10"
                  :rules="nameRules"
                  label="username" name="username" 
                  prepend-icon="mdi-human" 
                  type="text" />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="user.pass"
                    :rules="passRules"
                  />
                   <v-alert dense outlined v-show="alertflag" :type="isSuccess[issuc]">
        {{
        subtitle
        }}
      </v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" to="/">取消</v-btn>
                <v-btn color="primary" to="/signup">没有账号?注册</v-btn>
                <v-btn :disabled="!valid" @click="validate" color="primary">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name:'login',
  data:()=>({
    subtitle: '',
      alertflag: false,
    issuc: false,
    isSuccess: {
      true: 'success',
      false: 'error'
    },
     user: {
      username: '',
      pass: ''
    },
    valid:true,
     nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    passRules: [v => !!v || 'Pass is required'],

  }),
  methods:{
    ...mapActions(['userlogin']),
    validate(){
      if(this.$refs.form.validate()){
        this.$axios
          .post('/api/signin',this.user)
          .then(res=>{
            console.log(res)
            this.alertflag=true,
            this.subtitle=res.msg
            if(res.status===200){
              this.issuc=true
              this.userlogin(res.data)
              setTimeout(() => {
                this.$router.go(-1)
              }, 600);
            }
          })
          .catch(err=>{console.log(err)})
      }
    }
  }


}
</script>