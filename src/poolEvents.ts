import {events} from "./types/sui/0xc4049b2d1cc0f6e017fda8260e4377cecd236bd7f56a54fee120816e72e2e0dd.js"
import {SuiContext} from "@sentio/sdk/sui"

export function initPoolEvents() {
  events.bind()
    .onEventCreatedPoolEvent(async (event, ctx: SuiContext) => {
      // Emit event with all values
      ctx.eventLogger.emit("created_pool", {
        name: event.data_decoded.name,
        weights: event.data_decoded.weights,
        coins: JSON.stringify(event.data_decoded.coins),
        pool_id: event.data_decoded.pool_id,
        lp_type: event.data_decoded.lp_type
      })
    })
    .onEventDepositEvent(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("deposits", {
        pool_id: event.data_decoded.pool_id,
        deposits: JSON.stringify(event.data_decoded.deposits),
        issuer: event.data_decoded.issuer,
        lp_coins_minted: event.data_decoded.lp_coins_minted,
        referrer: event.data_decoded.referrer,
        types: JSON.stringify(event.data_decoded.types)
      })
    })
    .onEventDepositEventV2(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("deposits_v2", {
        pool_id: event.data_decoded.pool_id,
        deposits: JSON.stringify(event.data_decoded.deposits),
        issuer: event.data_decoded.issuer,
        lp_coins_minted: event.data_decoded.lp_coins_minted,
        referrer: event.data_decoded.referrer,
        reserves: JSON.stringify(event.data_decoded.reserves),
        types: JSON.stringify(event.data_decoded.types)
      })
    })
    .onEventWithdrawEvent(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("withdraws", {
        pool_id: event.data_decoded.pool_id,
        issuer: event.data_decoded.issuer,
        lp_coins_burned: event.data_decoded.lp_coins_burned,
        referrer: event.data_decoded.referrer,
        types: JSON.stringify(event.data_decoded.types)
      })
    })
    .onEventWithdrawEventV2(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("withdraws_v2", {
        pool_id: event.data_decoded.pool_id,
        issuer: event.data_decoded.issuer,
        withdrawn: JSON.stringify(event.data_decoded.withdrawn),
        reserves: JSON.stringify(event.data_decoded.reserves),
        lp_coins_burned: event.data_decoded.lp_coins_burned,
        referrer: event.data_decoded.referrer,
        types: JSON.stringify(event.data_decoded.types)
      })
    })
    .onEventSwapEvent(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("swaps", {
        pool_id: event.data_decoded.pool_id,
        amounts_in: JSON.stringify(event.data_decoded.amounts_in),
        amounts_out: JSON.stringify(event.data_decoded.amounts_out),
        referrer: event.data_decoded.referrer,
        issuer: event.data_decoded.issuer,
        types_in: JSON.stringify(event.data_decoded.types_in),
        types_out: JSON.stringify(event.data_decoded.types_out)
      })
    })
    .onEventSwapEventV2(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("swaps_v2", {
        pool_id: event.data_decoded.pool_id,
        amounts_in: JSON.stringify(event.data_decoded.amounts_in),
        amounts_out: JSON.stringify(event.data_decoded.amounts_out),
        referrer: event.data_decoded.referrer,
        issuer: event.data_decoded.issuer,
        types_in: JSON.stringify(event.data_decoded.types_in),
        types_out: JSON.stringify(event.data_decoded.types_out),
        reserves: JSON.stringify(event.data_decoded.reserves)
      })
    })
    .onEventOraclePriceEvent(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("oracle_price", {
        pool_id: event.data_decoded.pool_id,
        oracle_price: event.data_decoded.oracle_price,
        base_type: event.data_decoded.base_type,
        quote_type: event.data_decoded.quote_type
      })
    })
    .onEventSpotPriceEvent(async (event, ctx: SuiContext) => {
      ctx.eventLogger.emit("spot_price", {
        pool_id: event.data_decoded.pool_id,
        spot_price: event.data_decoded.spot_price,
        base_type: event.data_decoded.base_type,
        quote_type: event.data_decoded.quote_type
      })
    })
}
