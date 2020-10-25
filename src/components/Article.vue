<template>
  <div>
    <div class="link">
      <router-link to="/" class="common-link">На главную</router-link>
    </div>
    <div class="article">
      <h1 class="article-title">{{ title }}</h1>
      <div>{{ text }}</div>
    </div>
    <div class="comment-section">
      <h2 class="comment-section-title">Комментарии</h2>
      <div class="comments">
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <div class="comment-info">
            <div class="comment-user">{{ comment.user }}</div>
            <div class="comment-date">{{ getDate(comment.date) }}</div>
          </div>
          <div class="comment-content">{{ comment.text }}</div>
        </div>
      </div>
    </div>
    <div v-if="$store.state.isAuth && !showTextArea" class="add-comment-btn">
      <CommonButton @click="showTextArea = true"
        >Оставить комментарий</CommonButton
      >
    </div>
    <div v-if="showTextArea" class="text-input">
      <CommonTextArea v-model="newComment"></CommonTextArea>
      <CommonButton @click="addComment">Оставить комментарий</CommonButton>
    </div>
  </div>
</template>

<script>
import CommonButton from '../components/CommonButton.vue'
import CommonTextArea from '../components/CommonTextArea.vue'
import moment from 'moment'

// Импорт данных с "сервера"
import fetchedData from '../data.json'

export default {
  name: 'Article',
  components: {
    CommonButton,
    CommonTextArea,
  },
  data() {
    return {
      text: '',
      title: '',
      showTextArea: false,
      newComment: '',
    }
  },
  methods: {
    getDate(str, format) {
      return moment(str, 'YYYY-MM-DD hh:mm').format('LLL')
    },
    addComment() {
      this.$store.commit('addComment', {
        user: this.$store.state.username,
        text: this.newComment,
        date: moment().format("YYYY-MM-DD HH:mm")
      })
    },
  },
  mounted() {
    this.text = fetchedData.article.text
    this.title = fetchedData.article.title
    this.$store.state.comments = fetchedData.article.comments
  },
  computed: {
    comments() {
      return this.$store.state.comments
    },
  },
}
</script>

<style scoped>
.link {
  text-align: center;
}

.article {
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 2px solid #e01304;
}

.article-title {
  font-size: 24px;
  color: #e01304;
  font-weight: bold;
  margin-bottom: 10px;
}

.comment-section-title {
  font-size: 20px;
  color: #e01304;
  font-weight: bold;
  margin-bottom: 25px;
}

.comment-user {
  color: #e01304;
  font-weight: bold;
  margin-right: 30px;
}

.comment-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.comment-date {
  font-size: 14px;
}

.comment {
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 2px solid #e01304;
}
</style>