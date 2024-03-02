import { Client } from "@notionhq/client"

export default defineEventHandler(async event => {
  const { newEmployeeEmail, buddyEmail } = await readBody(event)
  const { notionSecret } = useRuntimeConfig(event)

  const notion = new Client({
    auth: notionSecret
  })

  const response = await notion.pages.create({
    "parent": {
        "type": "database_id",
        "database_id": "217a032ce230421cbb20b6240e6ec248"
    },
    "properties": {
        "NewEmployeeMail": {
            "title": [
                {
                    "text": {
                        "content": newEmployeeEmail
                    }
                }
            ]
        },
        "BuddyEmail": {
            "email": buddyEmail
        },
    },
  });

  return response
})
