import { pool } from "./types/sui/cetus_pool.js"
import { SuiContext } from "@sentio/sdk/sui"

export function initCetusPoolEvents() {
  return pool.bind()
  .onEventSwapEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("cetus_swaps", {
    atob: event.data_decoded.atob,
    pool: event.data_decoded.pool,
    partner: event.data_decoded.partner,
    amount_in: event.data_decoded.amount_in.toString(),
    amount_out: event.data_decoded.amount_out.toString(),
    ref_amount: event.data_decoded.ref_amount.toString(),
    fee_amount: event.data_decoded.fee_amount.toString(),
    vault_a_amount: event.data_decoded.vault_a_amount.toString(),
    vault_b_amount: event.data_decoded.vault_b_amount.toString(),
    before_sqrt_price: event.data_decoded.before_sqrt_price.toString(),
    after_sqrt_price: event.data_decoded.after_sqrt_price.toString(),
    steps: event.data_decoded.steps.toString()
    })
  })
  .onEventSwapResult(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("cetus_swap_result", {
      amount_in: event.data_decoded.amount_in.toString(),
      amount_out: event.data_decoded.amount_out.toString(),
      fee_amount: event.data_decoded.fee_amount.toString(),
      ref_fee_amount: event.data_decoded.ref_fee_amount.toString(),
      steps: event.data_decoded.steps.toString()
    })
  })
  .onEventAddLiquidityEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("cetus_add_liquidity", {
      pool: event.data_decoded.pool,
      position: event.data_decoded.position,
      tick_lower: event.data_decoded.tick_lower.toString(),
      tick_upper: event.data_decoded.tick_upper.toString(),
      liquidity: event.data_decoded.liquidity.toString(),
      after_liquidity: event.data_decoded.after_liquidity.toString(),
      amount_a: event.data_decoded.amount_a.toString(),
      amount_b: event.data_decoded.amount_b.toString()
    })
  })
  .onEventRemoveLiquidityEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("cetus_remove_liquidity", {
      pool: event.data_decoded.pool,
      position: event.data_decoded.position,
      tick_lower: event.data_decoded.tick_lower.toString(),
      tick_upper: event.data_decoded.tick_upper.toString(),
      liquidity: event.data_decoded.liquidity.toString(),
      after_liquidity: event.data_decoded.after_liquidity.toString(),
      amount_a: event.data_decoded.amount_a.toString(),
      amount_b: event.data_decoded.amount_b.toString()
    })
  })
  .onEventOpenPositionEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("cetus_open_position", {
      pool: event.data_decoded.pool,
      position: event.data_decoded.position,
      tick_lower: event.data_decoded.tick_lower.toString(),
      tick_upper: event.data_decoded.tick_upper.toString()
    })
  })
  .onEventClosePositionEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("cetus_close_position", {
      pool: event.data_decoded.pool,
      position: event.data_decoded.position
    })
  })
}
