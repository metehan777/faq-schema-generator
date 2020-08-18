<template>
  <div class="row">
    <md-card>
      <md-card-content>
        <p>
          <label>Question</label>
          <input v-model="value.question" />
        </p>
        <p>
          <label>Answer</label>
          <quill-editor :options="editorOptions" v-model="value.answer" />
        </p>
      </md-card-content>
      <md-card-actions>
        <md-button @click="$emit('remove')">Remove</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'Repeater',
  components: { quillEditor },
  props: ['value'],
  data() {
    return {
      editorOptions: {
        placeholder: 'Answer goes here...',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  display: block;
  font-weight: bold;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  height: 2rem;
}

.row {
  // padding: 1rem;
  // border: 1px solid #ededed;
  margin-bottom: 1rem;
}
</style>
