import { Client } from "@notionhq/client"

export default defineEventHandler(async event => {
  const { notionSecret } = useRuntimeConfig(event)

  const notion = new Client({
    auth: notionSecret
  })

  const response = await notion.databases.query({
    database_id: "217a032ce230421cbb20b6240e6ec248",
  });

  return response
})
