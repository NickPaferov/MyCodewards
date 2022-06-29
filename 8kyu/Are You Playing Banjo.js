const areYouPlayingBanjo = name => name.toLowerCase().startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`