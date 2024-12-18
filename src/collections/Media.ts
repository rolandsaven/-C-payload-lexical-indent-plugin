import { FocusFeature } from '@/lexical/features/focus/server'
import { IndentFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: () => {
          return [
            IndentFeature(),
            FocusFeature(),
          ]
        },
      }),
      label: false,
      required: false,
    }
  ],
  upload: true,
}
