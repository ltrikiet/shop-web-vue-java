<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

interface RichTextEditorProps {
  handleContentChange: any;
  content: any;
}

defineProps<RichTextEditorProps>();
</script>

<template>
  <div>
    <quill-editor
      @update:content="handleContentChange"
      class="rich-text-editor"
      content-type="html"
      theme="snow"
      :content="content"
      :toolbar="[
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean']
      ]"
    />
  </div>
</template>
<style lang="scss">
.ql-toolbar.ql-snow {
  background-color: white;
}
.rich-text-editor,
.ql-blank {
  min-height: 150px;
}
</style>
