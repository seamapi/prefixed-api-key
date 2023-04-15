import test from "ava"
import { generateAPIKey } from "src"

test("generate api key", async (t) => {
  const apiKey = await generateAPIKey({ keyPrefix: "mycompany" })

  t.truthy(apiKey.longToken)
  t.truthy(apiKey.longTokenHash)
  t.truthy(apiKey.shortToken)
  t.truthy(apiKey.token)
})

test("generate api key should return an empty object when there is no keyPrefix", async (t) => {
  const apiKey = await generateAPIKey()

  t.falsy(apiKey.longToken)
  t.falsy(apiKey.longTokenHash)
  t.falsy(apiKey.shortToken)
  t.falsy(apiKey.token)
})

test("generate api key should return strings with the correct length", async (t) => {
  const shortTokenLength = 10;
  const longTokenLength = 20;
  const apiKey = await generateAPIKey({
    keyPrefix: "mycompany",
    shortTokenLength: shortTokenLength,
    longTokenLength: longTokenLength,
  })

  t.truthy(apiKey.longToken && apiKey.longToken.length === longTokenLength)
  t.truthy(apiKey.shortToken && apiKey.shortToken.length === shortTokenLength)
})