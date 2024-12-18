import { swap } from "./types/sui/bluemove_pool.js"
import { SuiContext } from "@sentio/sdk/sui"

export function initBlueMovePoolEvents() {
return swap.bind()
  .onEventSwap_Event(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("bluemove_swaps", {
        pool_id: event.data_decoded.pool_id,
        user: event.data_decoded.user,
        token_x_in: event.data_decoded.token_x_in,
        amount_x_in: event.data_decoded.amount_x_in.toString(),
        token_y_in: event.data_decoded.token_y_in,
        amount_y_in: event.data_decoded.amount_y_in.toString(),
        token_x_out: event.data_decoded.token_x_out,
        amount_x_out: event.data_decoded.amount_x_out.toString(),
        token_y_out: event.data_decoded.token_y_out,
        amount_y_out: event.data_decoded.amount_y_out.toString()
    })
  })
  .onEventAdd_Liquidity_Pool(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("bluemove_add_liquidity", {
        pool_id: event.data_decoded.pool_id,
        user: event.data_decoded.user,
        token_x_name: event.data_decoded.token_x_name,
        token_y_name: event.data_decoded.token_y_name,
        token_x_amount_in: event.data_decoded.token_x_amount_in.toString(),
        token_y_amount_in: event.data_decoded.token_y_amount_in.toString(),
        lsp_balance: event.data_decoded.lsp_balance.toString(),
        fee_amount: event.data_decoded.fee_amount.toString()
    })
  })
  .onEventRemove_Liqidity_Pool(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("bluemove_remove_liquidity", {
        pool_id: event.data_decoded.pool_id,
        user: event.data_decoded.user,
        token_x_name: event.data_decoded.token_x_name,
        token_y_name: event.data_decoded.token_y_name,
        token_x_amount_out: event.data_decoded.token_x_amount_out.toString(),
        token_y_amount_out: event.data_decoded.token_y_amount_out.toString(),
        fee_amount: event.data_decoded.fee_amount.toString()
    })
  })
  .onEventCreated_Pool_Event(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("bluemove_created_pool", {
        pool_id: event.data_decoded.pool_id,
        creator: event.data_decoded.creator,
        token_x_name: event.data_decoded.token_x_name,
        token_y_name: event.data_decoded.token_y_name,
        token_x_amount_in: event.data_decoded.token_x_amount_in.toString(),
        token_y_amount_in: event.data_decoded.token_y_amount_in.toString(),
        lsp_balance: event.data_decoded.lsp_balance.toString()
    })
  })
}