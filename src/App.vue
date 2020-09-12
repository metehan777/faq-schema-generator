<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">SEO FAQ Schema Oluşturucu - Dijihack</span>
      </md-app-toolbar>
      <md-app-content>
        <Repeater
          v-for="(row, index) in rowCount"
          v-bind:key="index"
          v-model="rowData[index]"
          @remove="removeRow(index)"
        />
        <md-button class="md-fab" @click="addRow">
          <md-icon>add</md-icon>
        </md-button>
        <CodeBlock v-bind:code="faqJson" v-if="rowData.length > 0" />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Repeater from './components/Repeater';
import CodeBlock from './components/CodeBlock';

export default {
  name: 'App',
  components: {
    Repeater,
    CodeBlock,
  },
  mounted() {
    this.addRow();
  },
  data: function() {
    return {
      rowCount: 0,
      rowData: [],
    };
  },
  computed: {
    faqJson: function() {
      const questions = this.rowData.map((set) => {
        return {
          '@type': 'Question',
          name: set.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: set.answer,
          },
        };
      });
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: questions,
        },
        null,
        2
      );
    },
  },
  methods: {
    addRow: function() {
      this.rowCount++;
      this.rowData.push({
        answer: '',
        question: '',
      });
    },
    removeRow: function(index) {
      this.rowCount--;
      this.rowData.splice(index, 1);
      console.log(index);
    },
  },
};
</script>

<style lang="scss">
// #app {
//   // font-family: Avenir, Helvetica, Arial, sans-serif;
//   // -webkit-font-smoothing: antialiased;
//   // -moz-osx-font-smoothing: grayscale;
//   // color: #2c3e50;
//   margin: 60px auto 60px auto;
//   max-width: 750px;
// }
.md-app {
  max-width: 750px;
  margin: 1rem auto;
}
.ql-editor {
  min-height: 100px;
}
.ql-container {
  font-family: initial;
}
</style>
