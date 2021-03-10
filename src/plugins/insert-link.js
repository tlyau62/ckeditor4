import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";

export default class InsertImage extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertLink", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Insert folio",
        icon: imageIcon,
        tooltip: true,
      });

      // Callback executed once the image is clicked.
      view.on("execute", () => {
        const folioLink = prompt("Folio number");
        const href = prompt("link", "http://google.com.hk");

        editor.model.change((writer) => {
          const linkElement = writer.createText(folioLink, {
            linkHref: href,
          });

          // Insert the image in the current selection location.
          editor.model.insertContent(
            linkElement,
            editor.model.document.selection
          );
        });
      });

      return view;
    });
  }
}
