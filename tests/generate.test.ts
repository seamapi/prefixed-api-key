import test from "ava"
import { generateAPIKey } from "src"

test("generate api key", async (t) => {
  const apiKey = await generateAPIKey()
  t.truthy(apiKey.longToken)
  t.truthy(apiKey.longTokenHash)
  t.truthy(apiKey.shortToken)
  t.truthy(apiKey.token)
})
