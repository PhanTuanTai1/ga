<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Test Google Analytic
      </h1>
      <div class="links">
        <button         
          class="button--green"
          @click="TestEvent('test button')"
        >
          Test 'click' event
        </button>
        <button         
          class="button--green"
          @click="TestEvent('go to google page');GoToPage('/google')"
        >
          Google Button
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  created() {
      if(process.client) {
        this.$ga.page('/')
      }
  },
  data() {
    return {
    }
  }
})
export default class Index extends Vue {
  TestEvent(label : string) {
      this.$ga.event('event-click', 'indexPage', `${label}${location.href}`, 1);
      console.log(`${location.href}`);
  }

  GoToPage(page: string) {
    this.$router.push(page);
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
