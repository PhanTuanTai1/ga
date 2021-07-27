<template>
  <div class="container">
    <h1>Test Breadcrumb Google Bot</h1>
    <script v-html="getJsonBreadcrumb" type="application/ld+json">
      
    </script>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Breadcrumb extends Vue {
  jsonBreadcrumb = {}


  created() {
     this.jsonBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Books",
            "item": "https://example.com/books"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "The Lord of the Rings",
            "item": "https://example.com/books/the-lord-of-the-rings"
          }
        ]
      }
  }

  get getJsonBreadcrumb() {
      return this.jsonBreadcrumb;
  }

  layout() {
    return "default";
  }
}
</script>