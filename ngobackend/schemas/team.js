// ./schemas/teams.js

export default {
  name: 'teams',
  title: 'Teams',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialMediaIcons',
      title: 'Social Media Icons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
