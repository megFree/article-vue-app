<template>
  <div>
    <div class="links">
      <router-link to="/article" class="common-link link">К статье</router-link>
    </div>

    <!-- Блок с кнопками -->
    <div v-if="!isAuth" class="buttons">
      <div class="sign-button">
        <CommonButton @click="showAuthPopup = true">Авторизация</CommonButton>
      </div>
      <div class="sign-button">
        <CommonButton @click="showRegPopup = true">Регистрация</CommonButton>
      </div>
    </div>

    <!-- Пользователь -->
    <div v-else class="user">Имя: {{ username }}</div>

    <!-- Модальное окно авторизации -->
    <AuthPopup @close="showAuthPopup = false" v-if="showAuthPopup"></AuthPopup>

    <!-- Модальное окно регистрации -->
    <RegPopup @close="showRegPopup = false" v-if="showRegPopup"></RegPopup>
  </div>
</template>

<script>
import CommonButton from './CommonButton.vue'
import AuthPopup from './AuthPopup.vue'
import RegPopup from './RegPopup.vue'

export default {
  name: 'Main',
  data() {
    return {
      showAuthPopup: false,
      showRegPopup: false,
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
    username() {
      return this.$store.state.username
    },
  },
  components: {
    CommonButton,
    AuthPopup,
    RegPopup,
  },
  methods: {},
}
</script>

<style scoped>
.links {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.link {
  min-width: 120px;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.user {
  text-align: center;
}

.sign-button {
  margin: 0 10px;
}
</style>