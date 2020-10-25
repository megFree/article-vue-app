<template>
  <transition name="popup">
    <div class="popup-mask" @click="$emit('close')">
      <div @click.stop="" class="popup">
        <div class="popup-title">Авторизация</div>
        <form @submit.prevent="" class="popup-form" action="#">
          <div class="input-container">
            <CommonInput
              inputType="text"
              placeholder="Введите имя"
              v-model="nickname"
            ></CommonInput>
          </div>

          <div class="input-container">
            <CommonInput
              inputType="password"
              placeholder="Введите пароль"
              v-model="password"
            ></CommonInput>
          </div>

          <div class="button-container">
            <CommonButton @click="submit">Авторизоваться</CommonButton>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import CommonButton from './CommonButton.vue'
import CommonInput from './CommonInput.vue'

// Json с данными с "сервера"
import data from '../data.json'

export default {
  name: 'AuthPopup',
  components: {
    CommonButton,
    CommonInput,
  },
  data() {
    return {
      nickname: '',
      password: '',
    }
  },
  methods: {
    // обычно делаю запрос к api через promise, блокируя повторный ввод, но сейчас просто импортировал json как зависимость
    submit() {
      const users = data.users
      // наворотил тут... хотел все-таки промис показать, пусть будет, обычно тут axios.get() котороый возвращает промис, который потом обрабатываем
      new Promise((resolve, reject) => {
        const result = users.filter((el) => {
          return el.name == this.nickname && el.password == this.password
        })
        if (result.length === 1) {
          resolve('authorized')
        } else {
          reject('error')
        }
      }).then(
        (result) => {
          this.$store.commit('signIn', {
            username: this.nickname,
            password: this.password,
          })
          this.$emit('close')
        },
        (error) => {
          alert('Error')
        },
      )
    },
  },
  mounted() {
    console.log(data)
  },
}
</script>

<style scoped>
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.popup {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 25%;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 6px;
  padding: 20px 0;
}

.popup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.popup-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.input {
  margin-bottom: 10px;
}

.input-container {
  margin-bottom: 10px;
  width: 100%;
}

.button-container {
  margin-top: 5px;
}

.popup-enter {
  opacity: 0;
}

.popup-leave-active {
  opacity: 0;
}

.popup-enter .popup-leave-active .popup-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>