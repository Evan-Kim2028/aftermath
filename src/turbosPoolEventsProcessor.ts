import {pool} from "./types/sui/turbos_pool.js"
import {SuiContext} from "@sentio/sdk/sui"

export function initTurboPoolEvents() {
  return pool.bind()
  .onEventSwapEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("turbos_swaps", {
        pool: event.data_decoded.pool,  
        recipient: event.data_decoded.recipient,
        amount_a: event.data_decoded.amount_a.toString(),
        amount_b: event.data_decoded.amount_b.toString(),
        liquidity: event.data_decoded.liquidity.toString(),
        tick_current_index: event.data_decoded.tick_current_index.toString(),
        tick_pre_index: event.data_decoded.tick_pre_index.toString(),
        sqrt_price: event.data_decoded.sqrt_price.toString(),
        protocol_fee: event.data_decoded.protocol_fee.toString(),
        fee_amount: event.data_decoded.fee_amount.toString(),
        a_to_b: event.data_decoded.a_to_b,
        is_exact_in: event.data_decoded.is_exact_in
    })
  })
  .onEventComputeSwapState(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("turbos_compute_swap_state", {
        amount_a: event.data_decoded.amount_a.toString(),
        amount_b: event.data_decoded.amount_b.toString(),
        amount_specified_remaining: event.data_decoded.amount_specified_remaining.toString(),
        amount_calculated: event.data_decoded.amount_calculated.toString(),
        sqrt_price: event.data_decoded.sqrt_price.toString(),
        tick_current_index: event.data_decoded.tick_current_index.toString(),
        fee_growth_global: event.data_decoded.fee_growth_global.toString(),
        protocol_fee: event.data_decoded.protocol_fee.toString(),
        liquidity: event.data_decoded.liquidity.toString(),
        fee_amount: event.data_decoded.fee_amount.toString()
    })
  })
  .onEventMintEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("turbos_mint", {
        pool: event.data_decoded.pool,
        owner: event.data_decoded.owner,
        tick_lower_index: event.data_decoded.tick_lower_index.toString(),
        tick_upper_index: event.data_decoded.tick_upper_index.toString(),
        amount_a: event.data_decoded.amount_a.toString(),
        amount_b: event.data_decoded.amount_b.toString(),
        liquidity_delta: event.data_decoded.liquidity_delta.toString()
    })
  })
  .onEventBurnEvent(async (event, ctx: SuiContext) => {
    ctx.eventLogger.emit("turbos_burn", {
        pool: event.data_decoded.pool,
        owner: event.data_decoded.owner,
        tick_lower_index: event.data_decoded.tick_lower_index.toString(),
        tick_upper_index: event.data_decoded.tick_upper_index.toString(),
        amount_a: event.data_decoded.amount_a.toString(),
        amount_b: event.data_decoded.amount_b.toString(),
        liquidity_delta: event.data_decoded.liquidity_delta.toString()
    })
  })
}