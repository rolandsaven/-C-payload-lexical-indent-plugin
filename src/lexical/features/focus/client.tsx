'use client'

import { createClientFeature } from "@payloadcms/richtext-lexical/client"
import { FocusPlugin } from "./plugin"

export const FocusFeatureClient = createClientFeature({
  plugins: [
    {
      Component: FocusPlugin,
      position: 'normal',
    },
  ]
})
