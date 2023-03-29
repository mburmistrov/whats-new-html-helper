import { useEditor, EditorContent as TiptapEditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './ContentEditor.css';

const ContentEditor = ({ onUpdate, initialContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onUpdate(html);
    },
  })

  return (
    <TiptapEditorContent editor={editor} />
  )
}

export default ContentEditor;
