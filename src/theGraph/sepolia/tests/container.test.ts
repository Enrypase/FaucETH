import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { EventUpdated } from "../generated/schema"
import { EventUpdated as EventUpdatedEvent } from "../generated/Container/Container"
import { handleEventUpdated } from "../src/container"
import { createEventUpdatedEvent } from "./container-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let balance = BigInt.fromI32(234)
    let name = "Example string value"
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let whitelist = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let withdrawLimit = BigInt.fromI32(234)
    let withdrawInterval = BigInt.fromI32(234)
    let newEventUpdatedEvent = createEventUpdatedEvent(
      balance,
      name,
      owner,
      whitelist,
      withdrawLimit,
      withdrawInterval
    )
    handleEventUpdated(newEventUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EventUpdated created and stored", () => {
    assert.entityCount("EventUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EventUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "balance",
      "234"
    )
    assert.fieldEquals(
      "EventUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "EventUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EventUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "whitelist",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "EventUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "withdrawLimit",
      "234"
    )
    assert.fieldEquals(
      "EventUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "withdrawInterval",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
