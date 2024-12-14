import { SuiObjectTypeProcessor } from "@sentio/sdk/sui"
import { pool } from "./types/sui/0xefe170ec0be4d762196bedecd7a065816576198a6527c99282a2551aaa7da38c.js"


SuiObjectTypeProcessor.bind({
  objectType: pool.Pool.type()
})
.onTimeInterval(async (self, _, ctx) => {
  if (!self) { return }
  console.log(`ctx ${ctx.objectId} ctx.timestamp ${ctx.timestamp}`)

  const balanceOf = await pool.view.balanceOf(ctx.client, [ctx.objectId], [pool.Pool.type(), pool.Pool.type()])

  // Emit event with all values
  ctx.eventLogger.emit("pool_info", {
    name: balanceOf,

  })
})
