<template>
  <div class="json-block">
    <button @click="copyCode">Copy to Clipboard</button>
    <pre ref="copyMe">
&lt;script type="application/ld+json"&gt;{{ code }}&lt;/script&gt;</pre
    >
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    code: String,
  },
  methods: {
    copyCode: function() {
      const range = document.createRange();
      range.selectNode(this.$refs.copyMe);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    },
  },
};
</script>

<style scoped lang="scss">
.json-block {
  background-color: #333;
  padding: 2rem;
  margin: 2rem auto;
  color: white;
  border-radius: 5px;
}
</style>
