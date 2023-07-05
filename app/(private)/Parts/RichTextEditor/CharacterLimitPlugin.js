import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class CharacterLimitPlugin extends Plugin {
  static get requires() {
    return ['Editing'];
  }

  init() {
    const editor = this.editor;
    const maxCharacters = this.editor.config.get('maxCharacters') || 200; // Set your desired maximum character count here.

    editor.model.document.on('change:data', (eventInfo, batch) => {
      const currentText = editor.getData();
      const charCount = currentText.replace(/<[^>]*>/g, '').length; // Strip HTML tags and count characters.

      if (charCount > maxCharacters) {
        const changes = batch.source;

        // Rollback the changes to stay within the character limit.
        changes.forEach((change) => {
          change.revert();
        });
      }
    });
  }
}
