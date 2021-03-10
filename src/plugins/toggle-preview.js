import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";

export default class TogglePreview extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("togglePreview", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Toggle Preview",
        icon: imageIcon,
        tooltip: true,
      });

      view.on("execute", () => {
        editor.isReadOnly = !editor.isReadOnly;
      });

      return view;
    });
  }
}
