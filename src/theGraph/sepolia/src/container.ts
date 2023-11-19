import { EventUpdated as EventUpdatedEvent } from "../generated/Container/Container"
import { EventUpdated } from "../generated/schema"

export function handleEventUpdated(event: EventUpdatedEvent): void {
  let entity = new EventUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.balance = event.params.balance
  entity.name = event.params.name
  entity.owner = event.params.owner
  entity.whitelist = event.params.whitelist
  entity.withdrawLimit = event.params.withdrawLimit
  entity.withdrawInterval = event.params.withdrawInterval

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
