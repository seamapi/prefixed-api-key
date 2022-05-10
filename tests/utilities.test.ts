import test from "ava"
import {
  hashLongToken,
  extractLongToken,
  extractShortToken,
  checkAPIKey,
  getTokenComponents,
} from "src"

const exampleKey = {
  shortToken: "BRTRKFsL",
  longToken: "51FwqftsmMDHHbJAMEXXHCgG",
  longTokenHash:
    "d70d981d87b449c107327c2a2afbf00d4b58070d6ba571aac35d7ea3e7c79f37",
  token: "mycompany_BRTRKFsL_51FwqftsmMDHHbJAMEXXHCgG",
}

test("hashLongToken", async (t) => {
  t.is(hashLongToken(exampleKey.longToken), exampleKey.longTokenHash)
})
test("extractLongToken", async (t) => {
  t.is(extractLongToken(exampleKey.token), exampleKey.longToken)
})
test("extractShortToken", async (t) => {
  t.is(extractShortToken(exampleKey.token), exampleKey.shortToken)
})
test("getTokenComponents", async (t) => {
  t.deepEqual(getTokenComponents(exampleKey.token), exampleKey)
})
test("checkAPIKey", async (t) => {
  t.is(await checkAPIKey(exampleKey.token, exampleKey.longTokenHash), true)
})
