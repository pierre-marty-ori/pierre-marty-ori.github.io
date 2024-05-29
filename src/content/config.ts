import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date().optional(),
			tags: z.array(z.string()).optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
