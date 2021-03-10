<template>
  <div id="app">
    <ckeditor
      v-model="editorData"
      @namespaceloaded="onNamespaceLoaded"
      :config="editorConfig"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        extraPlugins: "abbr",
      },
    };
  },
  methods: {
    onNamespaceLoaded(CKEDITOR) {
      CKEDITOR.plugins.add("abbr", {
        icons: "abbr",
        init(editor) {
          editor.addCommand("abbr", new CKEDITOR.dialogCommand("abbrDialog"));

          editor.ui.addButton("Abbr", {
            label: "Insert Abbreviation",
            command: "abbr",
            toolbar: "insert",
          });

          CKEDITOR.dialog.add("abbrDialog", function(editor) {
            return {
              title: "Abbreviation Properties",
              minWidth: 400,
              minHeight: 200,

              contents: [
                {
                  id: "tab-basic",
                  label: "Basic Settings",
                  elements: [
                    // UI elements of the first tab will be defined here.
                  ],
                },
                {
                  id: "tab-adv",
                  label: "Advanced Settings",
                  elements: [
                    // UI elements of the second tab will be defined here.
                  ],
                },
              ],
            };
          });
        },
      });
    },
  },
};
</script>

<style lang="scss">
#app {
}
</style>
