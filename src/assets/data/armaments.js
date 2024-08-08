export default [
    {
      name: 'Bloody Helice',
      apiRoute: 'https://eldenring.fanapis.com/api/weapons?name=Bloody%20Helice',
      thumbnail: 'https://eldenring.fanapis.com/images/weapons/17f69987c03l0i1pdyutp139wmu1sh.png',
      descriptionFlavour: '\"Ominous piercing sword with a winding blade. Carried by the noble servants of the Lord of Blood.\"',
      descriptionParagraphs: [`An elegant weapon for the more discerning blood-drunk sadist, this heavy thrusting sword is a contender for my favourite weapon in the game. 
        This weapon starts strong with a C scaling in dex and a B scaling in arcane, meaning you can pump arcane to not only boost base damage but also take full advantage of the 
        blood loss buildup afforded by the winding corkscrew blade.`,
        `So we have a strong heavy thrusting sword moveset, combine that with high arcane damage scaling and innate blood loss which on a full arcane build
        will afford us insane burst damage. We haven't even talked about the best part yet; Dynast's Finesse. Everyone loves weapon arts where you press L2 to blow
        everything up; they're simple and they work. The Bloody Helice thinks this is all quite unsophisticated and instead has a three-part weapon art. Starting with a 
        elegant backwards manoeuver which crucially has iframes similar to bloodhounds step. Optionally you can follow this up with a quick forwards lunge which hits hard
        and does heavy stance damage and then again follow up with a double swipe to close out the combo if you so please.`, 
        `This is so powerful just from how you have control over
        every part of the combo. If you think the enemy is going to follow up then after each manoeuver you can end the combo there. You can even unlock the camera
        before you do the iframe dodge to direct it in any direction if you want to be really techy. Overall this weapon can be manipulated to pull off some awesome techs and is an extremely strong choice.`],
      characterImages: ['../assets/images/armoury/helice1.jpg', '../assets/images/armoury/helice2.jpg', '../assets/images/armoury/helice3.jpg'],
      talismans: [
        {
          name: 'Lord of Blood\'s Exultation',
          thumbnail: 'https://eldenring.fanapis.com/images/talismans/17f69c66a45l0i2sswom5whqqzshn.png',
          description: 'A mainstay on any blood loss build worth it\'s salt, this will buff us on the many occasions we trigger bleed. A must have.'
        },
        {
          name: 'Rotten Winged Sword Insignia',
          imgSrc: '../assets/images/armoury/wingedsword.webp',
          description: 'Heavy thrusting swords afford for rapid attacks and Dynast\'s Finesse lets us keep up the pressure, ensuring this talisman keeps us buffed.'
        },
        {
          name: 'Shard of Alexander',
          thumbnail: 'https://eldenring.fanapis.com/images/talismans/17f698e1ea9l0i2sy8csbpc3y128lo.png',
          description: 'Extra damage on skills make this talisman hard to refuse, especially with one as good as this.'
        },
        {
          name: 'Spear Talisman',
          thumbnail: 'https://eldenring.fanapis.com/images/talismans/17f69e13918l0i2syr0vvb0gg1l8xg.png',
          description: 'This gives extra damage on counterattacks, so when you attack the enemy during their attack or their recovery frames you do huge additional damage. Our skill is designed for hitting enemies during recovery animations!'
        }
      ]
    },
    {
      name: 'Death\'s Poker',
      apiRoute: 'https://eldenring.fanapis.com/api/weapons?name=Death%27s%20Poker',
      thumbnail: 'https://eldenring.fanapis.com/images/weapons/17f69d8a812l0i1p7s9xmq3zqql69.png',
      descriptionParagraphs: ['great poker']
    },
    {
      name: 'Death Knight\'s Longhaft Axe',
      imgSrc: '../assets/images/armoury/dklonghaftaxe.webp',
      characterImages: ['../assets/images/armoury/longhaft1.jpg', '../assets/images/armoury/longhaft2.jpg'],
      descriptionFlavour: 'A long-hafted golden axe wielded by the Death Knight. Bears a representation of a decayed golden ring. Crackles with lightning, the power of the capital\'s ancient dragon cult',
      descriptionParagraphs: [`We might not have gotten Godwyn in the DLC but we got his Death Knights: undead edgelords who use lightning lavishly. You pinch this greataxe when you defeat one of them
        and rest assured it was worth seeking out. As if lightning builds needed to be any more powerful; this boasts a B scaling in strength and a D in faith but the split lightning damage will ensure 
        your faith investment won\'t go amiss and begets a nice even stat split between strength and faith. 
                              `],
      talismans: [
        {
          name: 'Lightning Scorpion Charm',
          thumbnail: 'https://eldenring.fanapis.com/images/talismans/17f69e2a905l0i2ssrfz1ym5wgjvc.png',
          description: 'This build has a strong focus on lightning damage so this talisman is essential to maximise that.'
        },
        {
          name: 'Godfrey Icon',
          thumbnail: 'https://eldenring.fanapis.com/images/talismans/17f69c0c973l0i2sw8w6uvbwqiqfmy.png',
          description: 'Two of our most powerful spells on this build are Knight\'s Lightning Spear and Ancient Dragon\'s Lightning Strike. These are two spells you\'re always looking to charge if you can as they can deal overwhelming damage. This talisman only makes them stronger in this regard.'
        },
        {
          name: 'Flock\'s Canvas Talisman',
          thumbnail: 'https://eldenring.fanapis.com/images/talismans/17f6976f6b0l0i2szav175mw9xww9x.png',
          description: 'This helps you push the damage of those lightning spells even higher to keep up the pressure.'
        },
        {
          name: 'Two-Headed Turtle Talisman',
          imgSrc: '../assets/images/armoury/twoheadedturtle.webp',
          description: 'Faster stamina recovery is always welcome, especially when using a heavy greataxe and when our use of ranged spells might keep us from fully recovering in moments of respite.'
        }
      ]
    }
]