import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { EventUpdated } from "../generated/Container/Container"

export function createEventUpdatedEvent(
  balance: BigInt,
  name: string,
  owner: Address,
  whitelist: Array<Address>,
  withdrawLimit: BigInt,
  withdrawInterval: BigInt
): EventUpdated {
  let eventUpdatedEvent = changetype<EventUpdated>(newMockEvent())

  eventUpdatedEvent.parameters = new Array()

  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "balance",
      ethereum.Value.fromUnsignedBigInt(balance)
    )
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "whitelist",
      ethereum.Value.fromAddressArray(whitelist)
    )
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawLimit",
      ethereum.Value.fromUnsignedBigInt(withdrawLimit)
    )
  )
  eventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawInterval",
      ethereum.Value.fromUnsignedBigInt(withdrawInterval)
    )
  )

  return eventUpdatedEvent
}
