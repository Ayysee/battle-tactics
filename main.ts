player.onItemInteracted(TOTEM, function () {
    mobs.applyEffect(LEVITATION, mobs.target(LOCAL_PLAYER), 10, 1)
    mobs.applyEffect(RESISTANCE, mobs.target(LOCAL_PLAYER), 9, 255)
    for (let index = 0; index < 130; index++) {
        mobs.spawn(LIGHTNING_BOLT, pos(0, 0, 0))
    }
    for (let index = 0; index < 300; index++) {
        mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 100, 2)
        mobs.applyEffect(HEALTH_BOOST, mobs.target(LOCAL_PLAYER), 100, 3)
        loops.pause(10000)
    }
})
player.onChat("run", function () {
	
})
loops.forever(function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 15, 2)
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 15, 1)
    blocks.replace(
    WATER,
    LAVA,
    pos(15, -2, 15),
    pos(-15, 10, -15)
    )
    blocks.replace(
    AIR,
    WATER,
    pos(10, -2, 10),
    pos(-10, 10, -10)
    )
})
