<template>
    <div class="container">
            <div class="links">
        <button         
          class="button--green"
          @click="TestEvent('test google button')"
        >
          Test 'click' event
        </button>
    </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({})
export default class Google extends Vue {
    created() {
        if(process.client) {
            this.$ga.page('/google');
        }
    }

    TestEvent(label : string) {
      this.$ga.event('event-click', 'indexPage', label, 1);
      console.log(label);
    }
}
</script>