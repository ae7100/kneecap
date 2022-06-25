    console("1")
    if (user.roles.cache.has(verifiedRole)) {
        console.log("2")
        user.roles.add(verifiedRole);
        return button.reply({
            content: 'Verified!',
            ephemeral: true
        });
    }