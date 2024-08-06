import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    defineField({
      name: 'brandname',
      title: 'Brand Name',
      type: 'string',
    }),
  ],
})
