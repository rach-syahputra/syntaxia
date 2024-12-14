/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol
  slug?: EntryFieldTypes.Symbol
  body: EntryFieldTypes.RichText
  image: EntryFieldTypes.AssetLink
  category: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Symbol
}

export interface IContentfulAsset {
  sys: { id: string }
  fields: {
    file: {
      url: string
      details?: any
      fileName?: string
      contentType?: string
    }
  }
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>
