import { createNode, createServerFeature, populate } from '@payloadcms/richtext-lexical'


export const FocusFeature = createServerFeature({
  feature: () => {
    return {
      ClientFeature: '@/lexical/features/focus/client#FocusFeatureClient',
    }
  },
  key: 'focus',
})
