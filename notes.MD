Rootlets NFT query:

```
sql
SELECT 
    DATE_TRUNC('hour', nft.block_timestamp) AS hour,
    MIN(CAST(json_extract(events.parsed_json, '$.price') AS DOUBLE) / POWER(10, 9)) AS hourly_floor_price
FROM nft_transfers nft
LEFT JOIN sui_events events
ON nft.transaction_hash = events.tx_digest
WHERE nft.block_timestamp >= date_add('day', -30, current_timestamp)
AND events.timestamp >= date_add('day', -30, current_timestamp)
AND nft.collection_contract_address = '0x8f74a7d632191e29956df3843404f22d27bd84d92cca1b1abde621d033098769::rootlet::Rootlet'
AND events.transaction_module = 'kiosk_listings'
GROUP BY DATE_TRUNC('hour', nft.block_timestamp)
ORDER BY hour ASC
```


-- add the rootlet collection to sentio
yarn sentio add --chain sui_mainnet 0x8f74a7d632191e29956df3843404f22d27bd84d92cca1b1abde621d033098769

-- add the aftermath egg collection to sentio
yarn sentio add --chain sui_mainnet 0x484932c474bf09f002b82e4a57206a6658a0ca6dbdb15896808dcd1929c77820


-- this is the aftermath NFT module I think - 0x484932c474bf09f002b82e4a57206a6658a0ca6dbdb15896808dcd1929c77820::egg::AfEgg