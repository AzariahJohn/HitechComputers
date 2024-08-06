import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "hfxjygem",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-08-05"
});