var unsaved = false;
var data = {
  application:{
    majorVer:'0',
    minorVer:'8',
    changelog: [
      {
        version:'v0.8',
        date:'27-DEC-2019',
        changes: [
          'Spell list updated to be current for all known spells',
          'Changed some display formatting of spells'
        ]
      },
      {
        version:'v0.7',
        date:'18-DEC-2019',
        changes: [
          'Witchwarper class support',
          'Witchwarper added to all relevant CRB spells',
          'All and None buttons for spell levels',
          'Added (non-working) import-export buttons'
        ]
      },
      {
        version:'v0.6',
        date:'31-JAN-2018',
        changes: [
          'Initial Public Release',
          'Mystic and Technomancer classes',
          'Core Rulebook spells and spell lists'
        ]
      }
    ]
  },
  page:'intro',
  levels: {
    "0":{name:"0",state:false},
    "1":{name:"1",state:false},
    "2":{name:"2",state:false},
    "3":{name:"3",state:false},
    "4":{name:"4",state:false},
    "5":{name:"5",state:false},
    "6":{name:"6",state:false},
    "s":{name:"Special",state:false}
  },
  showMystic:false,
  showTechno:false,
  showWitch:false,
  formInput:'',
  characters:[],
  charClasses:['Mystic','Technomancer','Witchwarper'],
  keyAbility:{'Mystic':'Wisdom','Technomancer':'Intelligence','Witchwarper':'Charisma'},
  charLevels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
};
data.MysticCount = {
  "1": {
    "s0": "4",
    "s1": "2",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "2": {
    "s0": "5",
    "s1": "3",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "3": {
    "s0": "6",
    "s1": "4",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "4": {
    "s0": "6",
    "s1": "4",
    "s2": "2",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "5": {
    "s0": "6",
    "s1": "4",
    "s2": "3",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "6": {
    "s0": "6",
    "s1": "4",
    "s2": "4",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "7": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "2",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "8": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "3",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "9": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "4",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "10": {
    "s0": "6",
    "s1": "5",
    "s2": "5",
    "s3": "4",
    "s4": "2",
    "s5": "0",
    "s6": "0"
  },
  "11": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "4",
    "s4": "3",
    "s5": "0",
    "s6": "0"
  },
  "12": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "4",
    "s4": "4",
    "s5": "0",
    "s6": "0"
  },
  "13": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "5",
    "s4": "4",
    "s5": "2",
    "s6": "0"
  },
  "14": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "4",
    "s5": "3",
    "s6": "0"
  },
  "15": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "4",
    "s5": "4",
    "s6": "0"
  },
  "16": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "5",
    "s5": "4",
    "s6": "2"
  },
  "17": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "4",
    "s6": "3"
  },
  "18": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "4",
    "s6": "4"
  },
  "19": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "5",
    "s6": "4"
  },
  "20": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "6",
    "s5": "5",
    "s6": "5"
  }
}
data.TechnomancerCount = {
  "1": {
    "s0": "4",
    "s1": "2",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "2": {
    "s0": "5",
    "s1": "3",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "3": {
    "s0": "6",
    "s1": "4",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "4": {
    "s0": "6",
    "s1": "4",
    "s2": "2",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "5": {
    "s0": "6",
    "s1": "4",
    "s2": "3",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "6": {
    "s0": "6",
    "s1": "4",
    "s2": "4",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "7": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "2",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "8": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "3",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "9": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "4",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "10": {
    "s0": "6",
    "s1": "5",
    "s2": "5",
    "s3": "4",
    "s4": "2",
    "s5": "0",
    "s6": "0"
  },
  "11": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "4",
    "s4": "3",
    "s5": "0",
    "s6": "0"
  },
  "12": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "4",
    "s4": "4",
    "s5": "0",
    "s6": "0"
  },
  "13": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "5",
    "s4": "4",
    "s5": "2",
    "s6": "0"
  },
  "14": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "4",
    "s5": "3",
    "s6": "0"
  },
  "15": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "4",
    "s5": "4",
    "s6": "0"
  },
  "16": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "5",
    "s5": "4",
    "s6": "2"
  },
  "17": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "4",
    "s6": "3"
  },
  "18": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "4",
    "s6": "4"
  },
  "19": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "5",
    "s6": "4"
  },
  "20": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "6",
    "s5": "5",
    "s6": "5"
  }
}
data.WitchwarperCount = {
  "1": {
    "s0": "4",
    "s1": "2",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "2": {
    "s0": "5",
    "s1": "3",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "3": {
    "s0": "6",
    "s1": "4",
    "s2": "0",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "4": {
    "s0": "6",
    "s1": "4",
    "s2": "2",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "5": {
    "s0": "6",
    "s1": "4",
    "s2": "3",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "6": {
    "s0": "6",
    "s1": "4",
    "s2": "4",
    "s3": "0",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "7": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "2",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "8": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "3",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "9": {
    "s0": "6",
    "s1": "5",
    "s2": "4",
    "s3": "4",
    "s4": "0",
    "s5": "0",
    "s6": "0"
  },
  "10": {
    "s0": "6",
    "s1": "5",
    "s2": "5",
    "s3": "4",
    "s4": "2",
    "s5": "0",
    "s6": "0"
  },
  "11": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "4",
    "s4": "3",
    "s5": "0",
    "s6": "0"
  },
  "12": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "4",
    "s4": "4",
    "s5": "0",
    "s6": "0"
  },
  "13": {
    "s0": "6",
    "s1": "6",
    "s2": "5",
    "s3": "5",
    "s4": "4",
    "s5": "2",
    "s6": "0"
  },
  "14": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "4",
    "s5": "3",
    "s6": "0"
  },
  "15": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "4",
    "s5": "4",
    "s6": "0"
  },
  "16": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "5",
    "s4": "5",
    "s5": "4",
    "s6": "2"
  },
  "17": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "4",
    "s6": "3"
  },
  "18": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "4",
    "s6": "4"
  },
  "19": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "5",
    "s5": "5",
    "s6": "4"
  },
  "20": {
    "s0": "6",
    "s1": "6",
    "s2": "6",
    "s3": "6",
    "s4": "6",
    "s5": "5",
    "s6": "5"
  }
}
data.spells =
[
	{
		"name": "Acid Rain",
		"shortText": "A storm deals 3d6 damage for 1 round per level, imposes a 50% miss chance, and staggers enemies at its end.",
		"castingTime": "1 standard action",
		"area": "cylinder (20 ft radius, 40 ft high)",
		"duration": "1 round per (CASTERLEVEL)",
		"level": "5",
		"longText": "You pull a downpour of elemental precipitation from an alternate reality. You then direct this acid rain to pour only onto your enemies, dealing them 3d6 acid damage each round. The acid splashes into and burns your foes’ eyes, coats them in slime, and clouds their other senses. Enemies must attempt a Fortitude save when exposed to the spell. On a failure, the creature has a 50% miss chance for its attacks while in the area. The rain causes spellcasters who fail the save to have a 20% chance of losing any spell they attempt to cast from within the area. When this spell ends, a thunderclap causes enemies still in the area who failed their Fortitude saves to be staggered for 1 round. As a standard action, you can change the rain, causing it to deal a different type of energy damage, such as fiery sparks that deal fire damage or shards of ice that deal cold damage. This change in damage types leaves secondary effects unchanged. When the spell ends, the rain leaves no aftereffects.",
		"range": "long (400 ft + 40 ft per CASTERLEVEL)",
		"save": "Fortitude partial (see text)",
		"source": "Character Operations Manual",
		"page": "p.133",
		"resistance": "No",
		"school": "evocation",
		"witchwarper": "5"
	},
	{
		"name": "Akashic Download",
		"shortText": "You do a cosmic search of the Akashic Record for information about a topic.",
		"castingTime": "1 round",
		"duration": "2 minutes (see text)",
		"level": "1",
		"longText": "You do a cosmic search of the Akashic Record for information about a topic. Your tier 0 or better computer (such as a comm unit) instantly compiles snippets and selections from various media relevant to the subject. The information remains for 2 minutes, during which you explore it. Once you’re finished, you can attempt one skill check to recall knowledge on the topic with a +4 divine bonus, and you can do so untrained if the DC is 20 or lower. On a failed skill check, the GM can select some small insight into the topic that you retain. All the information you downloaded from this spell then disappears back to the Akashic Record. Using this spell doesn’t prevent you from doing further research using a downloaded data set or library chip, but perusing this magical download can’t be done concurrently with such study.",
		"range": "Personal",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.50",
		"resistance": "No",
		"target": "Personal",
		"school": "divination",
		"mystic": "1",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Akashic Revival",
		"shortText": "You create perfect documentation of your physical body in the Akashic Record at the time the spell is cast, allowing you to later recall this record and reconstruct your body as it was when you cast this spell.",
		"castingTime": "1 hour",
		"duration": "24 hours",
		"level": "6",
		"longText": "You create perfect documentation of your physical body in the Akashic Record at the time the spell is cast, allowing you to later recall this record and reconstruct your body as it was when you cast this spell. The record of your body includes your current Stamina Points, Hit Points, augmentations, physical ability scores, and any enduring negative physical states (including ability damage or drain to physical ability scores, disease, negative levels, poison, and so on). Any effect that was affecting you when you cast this spell to store your record continues with its normal duration, so that effect might expire between the time you store your record and when you later recall it. To recall your record, either you must die due to events other than old age or, if you are at 0 Hit Points, you can instead allow your body to perish by spending 3 Resolve Points. If either of these things occurs, you can claim your record as your new physical body at the start of your next turn. Your corpse disappears. Then, you instantly reappear, standing in your recorded body in the corpse’s space and wearing your gear. If you cannot appear in that space, you appear as close to it as you can. You retain your mind as it was at the time of your body’s death, so you regain no expended spells, Resolve Points, or uses of special abilities. Any mental effects affecting you or mental ability damage present at the time of your death persist in your new body. Casting this spell again replaces any previous record of yourself with a new one—you can store only one copy of yourself in the Akashic Record.",
		"range": "personal",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.50",
		"resistance": "No",
		"school": "necromancy",
		"mystic": "6",
		"witchwarper": "6"
	},
	{
		"name": "Animate Armor",
		"shortText": "Briefly control a suit of armor",
		"castingTime": "1 round",
		"duration": "concentration, up to 1 round per (CASTERLEVEL)",
		"level": "5",
		"longText": "You temporarily infuse a suit of armor with a magic force that allows it to move on its own and that directs its mechanisms. When you cast this spell, the armor acts and responds to your mental control for as long as you concentrate. Each round on your turn, the armor can perform either a move action or a standard action to attack. The armor can move up to 30 feet (or its listed speed using any of its available modes of movement, if powered armor or containing an armor upgrade that alters movement). When the armor attacks, it can either make an unarmed attack, dealing 4d8 + your caster level bludgeoning damage (or the listed damage plus its Strength modifier, for powered armor) or make an attack with any of the weapons mounted in its weapon slots or weapons with the integrated special property installed in its upgrade slots (if any); this deals the weapon's base damage for ranged attacks and the weapon's base damage plus the armor's Strength modifier for melee attacks. The armor has a bonus to attacks equal to 6 + your caster level. If the armor has no listed Strength score, it can apply a Strength bonus equal to your caster level. Should the animated armor be attacked, its EAC and KAC are equal to 10 + the EAC and KAC bonus the armor provides. It uses your saving throw bonuses when it is the target of spells and other targeted effects, and it has the typical hardness and Hit Points for an item of its level. For the purpose of spells and effects that target the armor, it is treated as a construct with the technological and magical subtypes while the spell lasts. This spell has no effect if cast on powered armor with a depleted battery of powered armor of an item level that exceeds your caster level.",
		"range": "Touch",
		"save": "None",
		"source": "Starfinder Armory",
		"page": "p.156",
		"resistance": "No",
		"target": "one unattended suit of armor",
		"school": "Transmutation",
		"technomancer": "5"
	},
	{
		"name": "Animate Dead",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Create controlled undead creatures out of target corpses.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "This spell turns corpses into undead creatures that obey your spoken commands. The undead can be made to follow you or they can be made to remain in place and attack any creature (or a specific kind of creature) entering the area. They remain animated until they are destroyed. A destroyed undead can't be animated again. You can create one or more undead creatures with a total CR of no more than (CASTERLEVEL/2). You can only create one type of undead with each casting of this spell. Creating undead requires special materials worth 1000 credits * the total CR of the undead created; these materials are consumed as part of casting the spell. The undead you create remain under your control indefinitely. No matter how many times you use this spell however you can control only a number of undead whose total CR is no greater than (CASTERLEVEL). If you exceed this number all the newly created creatures fall under your control and any excess undead from previous castings become uncontrolled. You choose which creatures are released. Once released such undead have no particular feelings of loyalty to you and in time they may grow in power beyond the undead you can create. The corpses you use must be as intact as the typical undead of the type you choose to create. For example a skeleton can be created only from a mostly intact corpse (that has bones) or skeleton. A zombie can be created only from a creature with a physical anatomy.",
		"range": "Touch",
		"save": "None",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.340",
		"resistance": "No",
		"target": "One or more corpses",
		"technomancer": "4"
	},
	{
		"name": "Antiradiation",
		"shortText": "Calm an area of radiation, the strength of which depends on your caster level.",
		"castingTime": "1 standard action",
		"area": "10 ft radius spread; see text",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "You permeate radiation with mitigations from other realities, dissipating radiation effects in the spell’s area; the radiation level you affect depends on your caster level, as shown on the table below. Once radiation has been dissipated, the environment in the area has no harmful effects from radiation, although this spell does not remove ongoing radiation-creating effects. An antiradiation spell counters an irradiate spell, as long as your caster level is greater than the caster level of the creature or effect that created the irradiate effect. Caster level 6th or lower: Low. Caster level 7th-9th: Medium. Caster level 10th-16th: High. Caster level 17th or higher: Severe.",
		"range": "medium (100 ft + 10 ft per CASTERLEVEL)",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.133",
		"resistance": "No",
		"school": "abjuration",
		"witchwarper": "3"
	},
	{
		"name": "Arcane Eye",
		"castingTime": "10 minutes",
		"shortText": "Invisible floating eye moves 30 feet per round and sends you visual information.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "4",
		"longText": "You create an invisible magical sensor that sends you visual information. The sensor appears at any point within line of sight but it can then travel beyond your line of sight without hindrance. An arcane eye travels at 30 feet per round (300 feet per minute) if viewing an area ahead as a humanoid would (primarily looking at the floor) or 10 feet per round (100 feet per minute) if examining the ceiling and walls as well as the floor ahead. The arcane eye sees exactly as you would see if you were there. The arcane eye can travel in any direction as long as the spell lasts. Solid barriers block its passage but it can pass through a hole or space as small as 1 inch in diameter. The arcane eye can't enter another plane of existence even through Drift travel or a magical gate or similar magical portal. You must concentrate to use an arcane eye. If you do not concentrate the sensor is inert until you concentrate again.",
		"range": "Planetary",
		"effect": "magical sensor",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.340",
		"resistance": "No",
		"technomancer": "4"
	},
	{
		"name": "Arcane Sight",
		"castingTime": "1 standard action",
		"shortText": "Magical sources become visible to you.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "3",
		"longText": "This spell allows you to see magic sources within 120 feet of you. The effect is similar to that of a detect magic spell but arcane sight does not require concentration and discerns information more quickly. You know the location and caster level of all magic sources within your sight. If the magic sources are in line of sight you can attempt a DC 28 Mysticism check (one check per source) to determine the school of magic involved in each source. If you concentrate on a specific creature within 120 feet of you as a standard action you can determine whether it has any spellcasting or spell-like abilities and the caster level of the most powerful spell or spell-like ability the creature currently has available for use. As with detect magic you can use this spell to identify the properties of magic items but not of artifacts.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.340",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Arcing Surge",
		"castingTime": "1 standard action",
		"shortText": "Deal 10d6 electricity damage in a 120-foot line.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "3",
		"longText": "You cause an electrical device in your possession to surge in power and unleash a line of electricity from the massive oversurge. This deals 10d6 electricity damage to all creatures and objects in the area.",
		"range": "120 ft.",
		"save": "Reflex half",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.340",
		"resistance": "Yes",
		"target": "Line-shaped burst",
		"technomancer": "3"
	},
	{
		"name": "Augury",
		"mystic": "2",
		"castingTime": "1 minute",
		"shortText": "Learn whether an action will be good or bad.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "Casting augury can tell you whether a particular action will bring good or bad results for you in the immediate future. Casting this spell takes intense personal focus and requires you to spend 1 Resolve Point. The chance for successfully receiving a meaningful reply is 75%; this roll is made secretly by the GM. A question may be so straightforward that a successful result is automatic or it may be so vague as to have no chance of success. If the augury succeeds you get one of four results; Weal (if the action will probably bring good results) Woe (for bad results) Weal and woe (for both) Nothing (for actions that have neither especially good nor especially bad results). If the augury isn't successful you get the nothing result. A spellcaster who gets the nothing result has no way to tell whether it was the consequence of a failed or successful augury. The augury can see only about 30 minutes into the future so anything that might happen beyond that time frame does not affect the result. Thus the result might not take into account the long-term consequences of a contemplated action. Multiple castings of augury by the same creature about the same topic use the same die result as the first casting.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.340"
	},
	{
		"name": "Awaken Computer",
		"shortText": "Turn a computer into a friendly AI that you and up to four other creatures are authorized to use.",
		"castingTime": "10 minutes",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "You infuse a computer with a spark of advanced technology, granting it an artificial personality. For this spell to take effect, you must have access to the computer, through either hacking it and bypassing any countermeasures it has or having unsecured access, but you don’t need root access. Further, if the target computer’s tier is equal to half your caster level or higher, you must expend credits equal to 5% of its base price while you cast this spell or the spell has no effect. This spell has no effect on computers that already have an artificial personality upgrade. You decide the details of the computer’s personality when you cast this spell, including its name, mannerisms, and sense of humor. The artificial personality recognizes you as its creator unless you remove that detail from its memory while casting. You can designate yourself and up to four other creatures as authorized users of the personality. This spell configures the personality with cunning and charm, granting it a bonus to Bluff, Diplomacy, Intimidate, and Sense Motive checks equal to 3 × its tier.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.133",
		"resistance": "No",
		"target": "One computer",
		"school": "transmutation",
		"technomancer": "4"
	},
	{
		"name": "Baleful Polymorph (Level 1)",
		"shortText": "Change the target's shape to that of a smaller, weaker creature.",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "1",
		"longText": "The target shrinks slightly (though it retains its size category) and gains a few cosmetic bestial features of an animal you choose. The target takes a –1 penalty to AC, attack rolls, melee damage rolls, Reflex saving throws, and Strengthand Dexterity-based ability checks and skill checks. Lesser remove condition and similar spells can end this effect.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.147",
		"resistance": "Yes",
		"target": "One creature",
		"school": "transmutation (polymorph)",
		"mystic": "1",
		"technomancer": "1",
		"witchwarper": "1",
		"related": {
            "1":["Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Baleful Polymorph (Level 2)",
		"shortText": "Change the target's shape to that of a smaller, weaker creature.",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "2",
		"longText": "As per the 1st-level version, but the target takes a –2 penalty and must attempt an additional saving throw each round until it fails or the spell’s duration ends. If the target fails this second saving throw, its appearance becomes more bestial and the penalty increases to –3. Break enchantment, remove affliction, or remove condition can end the spell’s effect. ",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.147",
		"resistance": "Yes",
		"target": "One creature",
		"school": "transmutation (polymorph)",
		"mystic": "2",
		"technomancer": "2",
		"witchwarper": "2",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Baleful Polymorph (Level 3)",
		"shortText": "Change the target's shape to that of a smaller, weaker creature.",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "3",
		"longText": "As per the 2nd-level version, but you can make the target one size category smaller (its equipment resizes to remain functional, though it may lose reach with its new size; see Size on page 143). The target must attempt a saving throw every round, with the penalty to AC, attack rolls, melee damage rolls, Reflex saving throws, and Strength- and Dexterity-based ability checks and skill checks worsening by 1 each time the target fails one of these saving throws, to a maximum penalty of –4. If the target succeeds at this saving throw after the penalty has reached its maximum, it is no longer required to attempt saving throws. If the target fails this saving throw after the penalty has reached its maximum, you can change the duration to permanent (D). If an object leaves the creature’s possession for 1 round or more, it reverts to normal.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.147",
		"resistance": "Yes",
		"target": "One creature",
		"school": "transmutation (polymorph)",
		"mystic": "3",
		"technomancer": "3",
		"witchwarper": "3",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Baleful Polymorph (Level 4)",
		"shortText": "Change the target's shape to that of a smaller, weaker creature.",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "4",
		"longText": "As per the 3rd-level version, but the penalty begins at –3, and the target must attempt a saving throw every round, with the penalty worsening by 1 each time the target fails one of these saving throws (to a maximum penalty of –5). If the target succeeds at this saving throw after the penalty has reached its maximum, it is no longer required to attempt saving throws. If the target fails this saving throw after the penalty has reached its maximum, you can change the duration to permanent (D). If an object leaves the creature’s possession for 1 round or more, it reverts to normal.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.147",
		"resistance": "Yes",
		"target": "One creature",
		"school": "transmutation (polymorph)",
		"mystic": "4",
		"technomancer": "4",
		"witchwarper": "4",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Baleful Polymorph (Level 5)",
		"shortText": "Change the target's shape to that of a smaller, weaker creature.",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "5",
		"longText": " As per the 4th-level version, except if the target fails its saving throw after the penalty has reached –5, instead of making the duration permanent (D), for the remainder of the duration you can turn the target into a Small animal or similar beast that has EAC 10 and KAC 12, can’t make attacks or cast spells or spell-like abilities, and can’t use extraordinary or supernatural abilities. The target retains its Intelligence, Wisdom, and Charisma scores in animal form, but it can’t speak or use any abilities of its normal form. Equipment the target is wearing is absorbed into this form, and the target still benefits from any environmental protections on its armor, but the target drops gear it’s holding or carrying but not wearing.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.147",
		"resistance": "Yes",
		"target": "One creature",
		"school": "transmutation (polymorph)",
		"mystic": "5",
		"technomancer": "5",
		"witchwarper": "5",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Baleful Polymorph (Level 6)",
		"shortText": "Change the target's shape to that of a smaller, weaker creature.",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "6",
		"longText": "As per the 5th-level version, except if the target fails its saving throw after the penalty has reached –5, you can both make the duration permanent (D) and turn the target into a Small animal or similar beast.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.147",
		"resistance": "Yes",
		"target": "One creature",
		"school": "transmutation (polymorph)",
		"mystic": "6",
		"technomancer": "6",
		"witchwarper": "6",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
	},
	{
		"name": "Baleful Polymorph, Mass (Level 4)",
		"shortText": "Change multiple targets' shapes to that of smaller, weaker creatures",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "4",
		"longText": "This spell functions as baleful polymorph, except as noted in this description. Each target must take the same form. 4th: This spell causes all targets to suffer the effects of the 1st-level version of baleful polymorph.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.148",
		"resistance": "Yes",
		"target": "Up to four creatures, no two of which can be more than 30 ft apart",
		"school": "transmutation (polymorph)",
		"mystic": "4",
		"technomancer": "4",
		"witchwarper": "4",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Baleful Polymorph, Mass (Level 5)",
		"shortText": "Change multiple targets' shapes to that of smaller, weaker creatures",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "5",
		"longText": "This spell functions as baleful polymorph, except as noted in this description. Each target must take the same form. 5th: This spell causes all targets to suffer the effects of the 2nd-level version of baleful polymorph.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.148",
		"resistance": "Yes",
		"target": "Up to four creatures, no two of which can be more than 30 ft apart",
		"school": "transmutation (polymorph)",
		"mystic": "5",
		"technomancer": "5",
		"witchwarper": "5",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Baleful Polymorph, Mass (Level 6)",
		"shortText": "Change multiple targets' shapes to that of smaller, weaker creatures",
		"castingTime": "1 round",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "6",
		"longText": "This spell functions as baleful polymorph, except as noted in this description. Each target must take the same form. 6th: This spell causes all targets to suffer the effects of the 3rd-level version of baleful polymorph.",
		"range": "Close",
		"save": "Will negates",
		"source": "Alien Archive 2",
		"page": "p.148",
		"resistance": "Yes",
		"target": "Up to four creatures, no two of which can be more than 30 ft apart",
		"school": "transmutation (polymorph)",
		"mystic": "6",
		"technomancer": "6",
		"witchwarper": "6",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
	},
	{
		"name": "Battle Junkbot",
		"castingTime": "1 round",
		"shortText": "Create a temporary robot from random junk turning it into a deadly combatant.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "6",
		"longText": "You turn a pile of technological junk into a vicious robot that can hunt down and attack your enemies. You must target inert nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system nonworking or unconnected computer or robot parts a destroyed robot or another such trashed mechanical system or any related electronic components or combination of the above as long as the junk is found in a large enough quantity. Creating a battle junkbot also requires one ultra-capacity battery. Casting this spell drains all of the battery's charges. While casting this spell you use your magic and technological know-how to rearrange the junked parts and infuse them with aggression and martial skills. A battle junkbot is Small its KAC and EAC are each (CASTERLEVEL+15) it has hardness 15 and it has a number of Hit Points equal to half of your own (but no Stamina Points). It uses your saving throw bonuses when it is the target of spells and other targeted effects. It has a land speed of 30 feet and a fly speed of 15 feet with average maneuverability. For purposes of spells and effects that target the junkbot it is treated as a construct with the magical and technological subtypes. The battle junkbot has four hands. It is treated as if it had the Deadly Aim and Improved Combat Maneuver (Bull Rush Grapple Trip) feats. It has an attack bonus  of (CASTERLEVEL+6); in one hand it wields a special buzzblade dagger that deals 6d8+6 damage instead of its normal damage and a second hand carries a special light laser pistol that deals 6d6 damage instead of its normal damage. Damage from the junkbot's special weapons counts as magic for the purpose of overcoming damage reduction. You can give new basic commands to your battle junkbot telepathically on your turn as a move action and the junkbot can take actions as if it were a normal creature. You are aware when the robot has made an attack or combat maneuver and whether or not it was successful as well as when the battle junkbot has been attacked has taken damage or is destroyed but you can perceive nothing else through this basic telepathic link. When the battle junkbot is destroyed or this spell ends the electronic equipment you used to create the junkbot falls apart into refuse its circuitry fried beyond anything recognizable. You cannot use this refuse as a target to create another junkbot.",
		"range": "Touch",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.341",
		"resistance": "No",
		"target": "At least 1 bulk of inert electronic equipment; see text",
		"technomancer": "6",
		"related": {
			"3": [
				"Handy Junkbot",
				"Healing Junkbot"
			]
		}
	},
	{
		"name": "Battlelink Mind, Lesser",
		"shortText": "Creates a psychic link that gives a bonus to initiative.",
		"castingTime": "1 standard action",
		"duration": "1 minute per (CASTERLEVEL)",
		"level": "1",
		"longText": "You form a temporary psychic link between two creatures that allows them to act almost as one. While this spell is active, the two targets each roll initiative in combat and use the higher die result between them before adding modifiers. This spells also grants each target a +2 enhancement bonus to initiative rolls. This spell ends if the targets are ever more than 200 feet apart or if either target is unconscious or helpless.",
		"range": "30 ft",
		"save": "Will negates (harmless)",
		"source": "Starfinder #20: The Last Refuge",
		"page": "p.45",
		"resistance": "Yes (harmless)",
		"target": "Two creatures",
		"school": "divination (mind-affecting)",
		"mystic": "1",
		"related": {
            "5": ["Battlemind Link"]
        }
	},
	{
		"name": "Battlemind Link",
		"shortText": "Creates a psychic link that gives a bonus to initiative and other benefits.",
		"castingTime": "1 standard action",
		"duration": "10 minutes per (CASTERLEVEL)",
		"level": "5",
		"longText": "You create a strong temporary psychic link between two creatures that allows them to act almost as one. This spell works like lesser battlemind link, but the enhancement bonus to initiative rolls is +4, and the spell ends if the targets are more than 500 feet apart, rather than 200 feet apart. In addition, if the targets threaten the same enemy, they are considered to be flanking that foe regardless of their actual positions. When one of the targets hits a foe with a ranged attack, they can, as a reaction, apply the effects of covering fire or harrying fire against that foe for the other target of this spell. Finally, each target gains a +4 enhancement bonus to attacks of opportunity if they both attack the same creature due to the same triggering action on that creature’s part.",
		"range": "60 ft",
		"save": "Will negates (harmless)",
		"source": "Starfinder #20: The Last Refuge",
		"page": "p.45",
		"resistance": "Yes (harmless)",
		"target": "Two creatures",
		"school": "divination (mind-affecting)",
		"mystic": "5",
		"related": {
            "1":["Battlemind Link, Lesser"]
        }
	},
	{
		"name": "Bestow Curse",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Target takes -4 penalty to attack rolls saves and checks or 50% chance of not acting on each of its turns.",
		"duration": "Permanent",
		"level": "3",
		"longText": "You place a terrible curse on the target stealing either its overall competency or its ability to think and act on its feet. Choose one of the following; The target takes a -4 penalty to ability checks attack rolls saving throws and skill checks. -OR- Each turn the target has a 50% chance to act normally; otherwise it takes no action. You can also invent your own curse (see Afflictions on page 414 for a few ideas) but it should be no more powerful than those described above. The curse bestowed by this spell cannot be dispelled but it can be removed with a break enchantment miracle remove affliction or wish spell. Casting this spell doesn't provoke attacks of opportunity. Bestow curse counters remove affliction.",
		"range": "Touch",
		"save": "Will negates",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.341",
		"resistance": "Yes",
		"target": "One creature"
	},
	{
		"name": "Bilocation",
		"shortText": "The spell creates an identical copy of you in an adjacent space, along with everything you wear and carry other than artifacts.",
		"castingTime": "1 standard action",
		"duration": "1 rounder per (CASTERLEVEL)",
		"level": "6",
		"longText": "The spell creates an identical copy of you in an adjacent space, along with everything you wear and carry other than artifacts. (If you carry an artifact, you decide which body retains it). You exist in two places at once until the spell ends. Once the copy is created, it can travel an unlimited distance away from you. Your duplicate acts just after you do each round—it doesn’t have a separate initiative count. One of you can use a full round’s worth of actions, and the other can take only a standard or a move action. Between the two of you, you can cast only one spell per round—unless you have a special ability that allows you to cast more than one spell when you have no duplicate, such as the quickened spell magic hack. You and your duplicate share sensory information, so if one of you is aware of or knows something, both of you do. The duplicate is another creature for most purposes, with the following exceptions. You and the duplicate use the same statistics and share resources, including one pool of consumable items (including ammo), daily-use abilities (including from items) and spell slots, Hit Points, Resolve Points, and Stamina Points. If your duplicate casts a spell, your spell is expended, and if your duplicate uses a consumable item, that item is no longer available to you. Similarly, if an item one of you carries is permanently lost or destroyed, that item is lost or destroyed for both. Attacks, spells, and effects affect the two bodies as though they were one person, taking the worst effect applicable. For example, if both bodies are in the same explosive blast, you attempt the saving throw only once and take the damage only once. If you fail the saving throw against hold person, both bodies are paralyzed, and if one body catches a disease, both do. Both bodies count as one creature for spell effects, and they can’t be chosen more than once for such effects. Any magical effect on you has its duration halved while you’re bilocating. For example, the aforementioned hold person loses 2 rounds of duration each round it paralyzes you and your duplicate. Similarly, if you cast resistant armor on yourself, your duplicate is also affected, and the spell has a duration of 5 minutes per level. An effect that has its duration shortened in this way lasts a minimum of 1 round. In addition, if you attempt a skill check to recall knowledge, you roll only one check. Similarly, if you and your duplicate are in the same area, you roll only one Perception check to determine what you’re both aware of, although you receive a +2 bonus to this check as if your duplicate aided you on it. When this spell ends, you decide which body remains and which disappears. Any enduring effects continue to affect you.",
		"range": "Personal",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.51",
		"resistance": "No",
		"school": "conjuration (creation)",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Biotic Shroud",
		"shortText": "Create a shroud that protects against attacks and lets you fly.",
		"castingTime": "1 standard action",
		"duration": "1 round per level",
		"level": "4",
		"longText": "You conjure forth a mantle of organic, insectile nanites that encircle you. The density of the swarm provides you with partial concealment (20% miss chance) against ranged attacks. Any creature that makes a successful melee attack against you takes 2d6 piercing damage, although you can allow anyone to touch you without them taking damage, for instance to deliver a beneficial touch spell. As a move action, you cause the nanites to cling tightly to you, granting you a fly speed of 20 feet with clumsy maneuverability as an extraordinary ability. When using the shroud to fly, you have no concealment due to it, and it cannot harm creatures that successfully attack you in melee. You can return the nanites to their protective configuration as a move action.",
		"range": "Personal",
		"save": "None",
		"source": "Starfinder #20: The Last Refuge",
		"page": "p.45",
		"resistance": "No",
		"school": "conjuration (creation)",
		"technomancer": "4"
	},
	{
		"name": "Biotic Tachlash, Lesser",
		"shortText": "Create a magic taclash with extra abilities",
		"castingTime": "1 standard action",
		"duration": "1 round per level, see text",
		"level": "2",
		"longText": "You conjure a taclash made of organic, insectile nanites into your grasp. The created weapon functions as a standard taclash with the living weapon special property. You are considered to be proficient with this taclash, and you add 1-1/2 times your caster level to damage rolls with it in place of your Weapon Specialization bonus. In addition, the weapon has the nauseate critical hit effect. The biotic taclash functions only for you, and once you create it, you can neither drop it nor be disarmed of it. As a move action, you can stow the biotic taclash, causing its component nanites to discorporate into individual nanobots that disperse over your body but remain while the spell lasts. During that time, you can cause the nanites to reincorporate to form the weapon again by taking another move action. As a reaction when you strike a target with the biotic taclash, you can dismiss the spell to cause the weapon to discorporate into its component nanites, which then swarm over the target. The target must succeed at a Fortitude save or be nauseated for 1 round.",
		"range": "0 ft",
		"save": "None",
		"source": "Starfinder #20: The Last Refuge",
		"page": "p.45",
		"resistance": "No",
		"school": "conjuration (creation)",
		"effect": "Living Tachlash",
		"technomancer": "2",
		"related": {
            "4": ["Biotic Taclash"]
        }
	},
	{
		"name": "Biotic Taclash",
		"shortText": "Create a taclash out of nanites with extra abilities.",
		"castingTime": "1 standard action",
		"duration": "1 round per level, see text",
		"level": "4",
		"longText": "This spell functions as lesser biotic taclash, except that the created weapon is considered to be a magic weapon, deals 4d4 slashing damage, and functions as a level 10 item. In addition, when you dismiss the spell as a reaction when striking a target, that target must succeed at a Fortitude save or take the weapon's damage again and become nauseated for 1d3+1 rounds.",
		"range": "0 ft.",
		"save": "None",
		"source": "Starfinder #20: The Last Refuge",
		"page": "p.45",
		"resistance": "No",
		"school": "conjuration (creation)",
		"effect": "Living Taclash",
		"technomancer": "4",
		"related": {
            "2": ["Biotic Tachlash, Lesser"]
        }
	},
	{
		"name": "Blast Door",
		"shortText": "Conjure a door that blocks off a hallway",
		"castingTime": "1 round",
		"duration": "1 round per level",
		"level": "3",
		"longText": "You conjure a blast door up to 5 feet thick that blocks a hallway no more than 20 feet wide and 20 feet high. If the door would not completely block the targeted hallway, you can’t cast this spell. Any creature in the spaces where the door appears is harmlessly shunted to a side of the door you choose. The door’s statistics are those of a starship interior wall. It is airtight, and it protects against vacuum and radiation. When the spell ends, the door vanishes without a trace.",
		"range": "close (25 ft + 5 ft/2 per CASTERLEVEL/2)",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.133",
		"resistance": "No",
		"school": "conjuration (creation)",
		"effect": "Wall up to 20 ft high, 20 ft wide, and 5 ft thick",
		"technomancer": "3"
	},
	{
		"name": "Borrow Corruption",
		"shortText": "Gain the benefits of a corruption from someone else.",
		"castingTime": "1 standard action",
		"duration": "1 round per level",
		"level": "4",
		"longText": "You touch a willing creature with at least one manifestation from corruption and expend 2 Resolve Points. If you do so, you temporarily gain any stains and gifts that corruption grants to the target, and the target retains them. If a gift you gain has limited uses, you can use the gift only by expending 1 Resolve Point for each use.",
		"range": "Touch",
		"save": "None",
		"source": "Starfinder #12: Heart of Night",
		"page": "p.53",
		"resistance": "No",
		"target": "Willing creature touched",
		"school": "transmutation",
		"mystic": "4",
		"technomancer": "4"
	},
	{
		"name": "Break Enchantment",
		"mystic": "5",
		"castingTime": "1 minute",
		"shortText": "Free creatures from curses enchantments and transmutations.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "This spell frees victims from curses enchantments and transmutations. Break enchantment can reverse even an instantaneous effect. For each such effect you attempt a caster level check (1d20 + %1) against a DC equal to 11 + the caster level of the effect. Success means that the creature is free of the spell curse or effect. For a cursed magic item the DC of the caster level check is equal to the DC of the curse. If the spell is one that can't be dispelled by dispel magic break enchantment works only if that spell is 5th level or lower. If the effect comes from a permanent magic item break enchantment doesn't remove the curse from the item but it does free the victim from the item's effects.|min(CASTERLEVEL15)",
		"range": "Close",
		"save": "None",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.341",
		"resistance": "No",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Burning Ash Cloud",
		"shortText": "Creates a cloud that blocks vision and causes fire damage",
		"castingTime": "1 standard action",
		"area": "20 ft radius spread",
		"duration": "1 round per CASTERLEVEL",
		"level": "3",
		"longText": "You conjure forth a cloud of smoke and burning embers that billows out from the point you designate. The cloud obscures all sight, including darkvision beyond 5 feet. The area counts as a smoke hazard, except a creature within the cloud has total concealment (50% miss chance, and the attacker can’t use sight to locate the target) against their attackers. In addition, the embers within the cloud deal 2d6 points of fire damage to creatures ending their turns within the cloud. A moderate wind (11+ mph) disperses the cloud in 4 rounds; a strong wing (21+ mph) or stronger disperses the cloud in 1 round. This spell doesn’t function underwater or in a vacuum.",
		"range": "medium (100 ft + 10 ft per CASTERLEVEL)",
		"save": "See text",
		"source": "Starfinder #18: Assault on the Crucible",
		"page": "p.53",
		"resistance": "No",
		"school": "conjuration (creation, fire)",
		"mystic": "3",
		"technomancer": "3"
	},
	{
		"name": "Call Cosmos",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Rain cosmic particles on targets dealing 4d6 fire damage and 3d6 cold damage.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "5",
		"longText": "You evoke a vertical column of dangerous material from across the universe that rains down upon creatures in the area. This matter is made up of bits of burning stars and chunks of frozen comets and it deals 4d6 fire damage and 3d6 cold damage to every creature in the area. This damage occurs only once when the spell is cast. For the spell's remaining duration the fallen starstuff makes the entire area difficult terrain and thick swirling clouds of particulate space matter magically block vision. This obscures all sight beyond 5 feet including darkvision and other vision-based senses (including vision-based blindsight and sense through) but doesn't prevent blindsense. A creature within 5 feet of its attacker has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance and the attacker can't use sight to locate the target). Additionally the swirling cosmic particles are distracting to spellcasters in the area who have a 20% chance of losing any spell they attempt to cast in the area. At the end of the duration the starstuff disappears leaving no aftereffects (other than the damage dealt).",
		"range": "Long",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.342",
		"resistance": "Yes",
		"target": "Cylinder (20-ft. radius 40 ft. high)"
	},
	{
		"name": "Carnivorous",
		"shortText": "Your mouth expands and your teeth grow sharp, granting you a bite attack.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "Your mouth expands to twice its normal size,and fills with rows of razor-sharp teeth, giving you a bite attack. This attack is treated as an attack with a basic melee weapon with the operative special quality for purposes of proficiency and Weapon Specialization and for other abilities that function with basic melee operative weapons. You can make this attack without using any limbs and when pinned. The attack deals 1d4 piercing damage. At 7th level, the damage increases to 2d4. At 10th level, it increases to 2d8. At 14th level, it increases to 3d8. At 16th level, it increases to 4d8. At 18th level, it increases to 5d8. At 20th level, it increases to 10d8.",
		"range": "personal",
		"save": "None",
		"source": "Starfinder #2: Temple of the Twelve",
		"page": "p.51",
		"resistance": "No",
		"school": "transmutation",
		"mystic": "1"
	},
	{
		"name": "Caustic Conversion",
		"castingTime": "1 standard action",
		"shortText": "Fling magical nanites as a ranged attack that deals 4d4 acid damage to one target plus 5 additional damage in subsequent rounds.",
		"duration": "(CASTERLEVEL/3+1) rounds",
		"level": "2",
		"longText": "You fling magical nanites that convert water vapor around your target into deadly acid. Make a ranged attack roll against your target's EAC. If you hit the target takes 4d4 acid damage and it takes 5 additional acid damage at the end of its turn each round for the spell's duration.",
		"range": "Medium",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.342",
		"resistance": "Yes",
		"target": "One creature or object",
		"technomancer": "2",
		"witchwarper": "2"
	},
	{
		"name": "Chain Surge",
		"castingTime": "1 standard action",
		"shortText": "Deal 13d12 electricity damage to primary target and up to 10 secondary targets; one of the primary target's electrical devices stops functioning for 1 round.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "Choose a primary target as well as up to 10 secondary targets within 30 feet of the primary target. The primary target must be carrying or wielding some kind of equipment that uses electricity. This spell causes the primary target's electrical equipment to surge with deadly electricity which arcs out to strike the secondary targets dealing 13d12 electricity damage to all targets chosen. If the primary target fails its Reflex save the spell also shorts out one of that target's electrical items (your choice) for 1 round meaning the primary target can't use it for that period. If the primary target negates the effect entirely (such as with evasion) the secondary targets also suffer no effects.",
		"range": "Long",
		"save": "Reflex half; see text",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.342",
		"resistance": "Yes",
		"target": "One primary target and up to 10 secondary targets no two of which can be more than 30 ft. from the primary target",
		"technomancer": "6"
	},
	{
		"name": "Charm Monster",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Make one creature believe it is your ally for (CASTERLEVEL) days.",
		"duration": "(CASTERLEVEL) days",
		"level": "3",
		"longText": "This charm makes a creature regard you as its trusted friend and ally (treat the target's attitude as friendly). If the creature is currently being threatened or attacked by you or your allies however it receives a +5 bonus to its saving throw. The spell does not enable you to control the charmed creature as if it were an automaton. It is unlikely to attempt to harm you but it is also unlikely to attack any of its true friends or allies. You can try to give the target suggestions but you must succeed at an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries of this check are not allowed.) An affected creature never obeys suicidal or obviously harmful suggestions. Any act by you or your apparent allies that threatens the charmed creature breaks the spell. You must speak the creature's language to communicate your suggestions or else be good at pantomiming.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.342",
		"resistance": "Yes",
		"target": "One living creature",
		"witchwarper": "3"
	},
	{
		"name": "Charm Person",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Make one humanoid creature believe that it is your ally.",
		"duration": "(CASTERLEVEL) hours",
		"level": "1",
		"longText": "This charm makes a humanoid creature regard you as its trusted friend and ally (treat the target's attitude as friendly). If the creature is currently being threatened or attacked by you or your allies however it receives a +5 bonus to its saving throw. The spell does not enable you to control the charmed creature as if it were an automaton. It is unlikely to attempt to harm you but it is also unlikely to attack any of its true friends or allies. You can try to give the target suggestions but you must succeed at an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries of this check are not allowed.) An affected creature never obeys suicidal or obviously harmful suggestions. Any act by you or your apparent allies that threatens the charmed creature breaks the spell. You must speak the creature's language to communicate your suggestions or else be good at pantomiming.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.342",
		"resistance": "Yes",
		"target": "One humanoid creature",
		"witchwarper": "1"
	},
	{
		"name": "Charming Veneer",
		"shortText": "Give a creature a bonus to Charisma-based checks, and speed its gathering of information.",
		"castingTime": "1 standard action",
		"duration": "10 minutes",
		"level": "0",
		"longText": "You pull gossamer threads from other, more genteel realities and wrap the target in them, smoothing the edges of their personality and accentuating their charms. The target gains a +1 circumstance bonus to Charisma checks and Charisma-based skill checks. Additionally, a creature affected by this spell can attempt a Diplomacy check to gather information in only 10 minutes. Once any individual under the effects of a charming veneer spell you cast has used this benefit to gather information in a specific settlement or local region, no target of a charming veneer spell you cast can do so again for 24 hours.",
		"range": "medium (100 ft + 10 ft per CASTERLEVEL)",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.133",
		"resistance": "No",
		"target": "one creature",
		"school": "illusion",
		"witchwarper": "0"
	},
	{
		"name": "Churn Fluid",
		"shortText": "Change the chemical composition of up to 1 bulk of liquid per CASTERLEVEL",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "You merge a tiny corner of parallel realities with this one, subtly or dramatically shifting the chemical composition of a fluid. You can target any type of fluid, and you need not know its current composition. You must be able to see the liquid or the receptacle that holds it, or this spell fails and is lost. You must also target an entire body of fluid, rather than only part of it. If you target an amount of fluid that is too large for you to change entirely, the spell fails and is lost. When you target fluid in this way, you can turn it into potable water, salt water, mildly corrosive acid or base, blood, or any other nontoxic, non-damaging fluid with no other game effects. After 1 day, if unused in its changed state, the fluid reverts to its original state. In so doing, the reverting fluid cannot cause harm.",
		"range": "close (25 ft + 5 ft per CASTERLEVEL/2)",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.134",
		"resistance": "No",
		"school": "conjuration",
		"witchwarper": "0"
	},
	{
		"name": "Clairaudience/Clairvoyance",
		"mystic": "3",
		"castingTime": "10 minutes",
		"shortText": "Hear or see at a distance for (CASTERLEVEL) minutes.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "3",
		"longText": "You create an invisible magical sensor at a specific location that enables you to hear or see (your choice) almost as if you were there. You don't need line of sight or line of effect to create this sensor in a specific spot within range but the locale must be either a place that's familiar to you or an obvious location such as inside a cave whose entrance you can see. The sensor doesn't move but you can rotate it in all directions to view the area as desired. This spell functions only on the plane of existence you are currently occupying.",
		"range": "Long (400 ft. + 40 ft./level)",
		"effect": "magical sensor",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.342",
		"resistance": "No",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Command",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "One creature obeys a select command for 1 round.",
		"duration": "1 round",
		"level": "1",
		"longText": "You give the target one of the following commands which it obeys to the best of its ability at its earliest opportunity. If the target can't carry out your command on its next turn the spell automatically fails. Approach - The target moves toward you as quickly and directly as possible for 1 round taking no other actions and triggering reactions (such as attacks of opportunity) for this movement as normal. Drop - The target drops whatever it is holding. It can't pick up any dropped item until its next turn. Fall - The target falls to the ground and remains prone for 1 round. It can otherwise act normally. Flee - The target moves away from you as quickly and directly as possible for 1 round taking no other actions and provoking reactions (such as attacks of opportunity) for this movement as normal. Halt - The target is dazed for 1 round.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.343",
		"resistance": "Yes",
		"target": "One living creature"
	},
	{
		"name": "Command (Greater)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Up to (CASTERLEVEL) creatures obey select command for (CASTERLEVEL) rounds.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "5",
		"longText": "This spell functions like command except you can affect up to (CASTERLEVEL) creatures and the targets continue the specified activity beyond 1 round. At the start of each commanded creature's action after the first it can attempt another Will saving throw to break free from the spell. Each creature must receive the same command. You give the targets one of the following commands which they obeys to the best of their ability at the earliest opportunity. If the targets can't carry out your command on its next turn the spell automatically fails. Approach - The targets move toward you as quickly and directly as possible for 1 round taking no other actions and triggering reactions (such as attacks of opportunity) for this movement as normal. Drop - The targets drop whatever they are holding. They can't pick up any dropped item until their next turn. Fall - The targets fall to the ground and remain prone for 1 round. They can otherwise act normally. Flee - The targets move away from you as quickly and directly as possible for 1 round taking no other actions and provoking reactions (such as attacks of opportunity) for this movement as normal. Halt - The targets are dazed for 1 round.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.343",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
	},
	{
		"name": "Command Undead",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Undead creature obeys your commands.",
		"duration": "(CASTERLEVEL) days",
		"level": "2",
		"longText": "This spell allows you a degree of control over an undead creature. If the target is intelligent it perceives your words and actions favorably (treat its attitude as friendly). It will not attack you while the spell lasts. You can give the target suggestions but you must succeed at an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries are not allowed.) An intelligent commanded undead never obeys suicidal or obviously harmful suggestions but it might be convinced that something very dangerous is worth doing. An unintelligent undead creature gets no saving throw against this spell. When you control a mindless being you can communicate only basic commands such as Come here Go there Fight Stand still and so on. Unintelligent undead won't resist suicidal or obviously harmful orders. Any act by you or your apparent allies that threatens the commanded undead (regardless of its Intelligence) breaks the spell. You command the undead creature by voice and it understands you no matter what language you speak.",
		"range": "Close",
		"save": "Will negates; see text",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.343",
		"resistance": "Yes",
		"target": "One undead creature",
		"technomancer": "2"
	},
	{
		"name": "Commune With Nature",
		"mystic": "5",
		"castingTime": "10 minutes",
		"shortText": "Learn about terrain for (CASTERLEVEL) miles.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You become one with nature attaining knowledge of the surrounding territory. You instantly gain knowledge of up to three facts from among the following subjects; the ground or terrain plants minerals bodies of water people general animal population presence of native creatures presence of powerful unnatural creatures or general state of the natural setting. In outdoor settings the spell operates in a radius of (CASTERLEVEL) miles. In natural underground settings-caves caverns and the like-the spell is less powerful and its radius is limited to (CASTERLEVEL*100) feet. The spell does not function where nature has been replaced by construction or settlements such as in cities factories and starships.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.344"
	},
	{
		"name": "Commune With Planet",
		"shortText": "Learn information about the planet you occupy, or about a planet in whose orbit you're within",
		"castingTime": "10 minutes",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You form a connection with a planet you are on or in orbit of, instantly learning up to three facts from among the following: major settlements, basic attributes (location in the galaxy, diameter and mass, gravity, atmosphere, and day and year length), ecological state (such as untamed, cultivated, polluted, destroyed by war, and so on), intelligent life, the presence of powerful or unusual creatures, and technological installations.",
		"range": "personal",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.134",
		"resistance": "No",
		"school": "divination",
		"mystic": "5"
	},
	{
		"name": "Comprehend Customs",
		"shortText": "Gain a +2 insight bonus to Culture checks about a specific culture made within the spell's duration.",
		"castingTime": "reaction",
		"duration": "1 hour per CASTERLEVEL",
		"level": "1",
		"longText": "This spell grants you a +2 insight bonus to Culture checks you attempt during the duration. The insight you gain might help you greet someone properly, know whether physical contact (a handshake, for example) is appropriate, or how to eat without making a mess or insulting your host. In addition, when you attempt Diplomacy checks to change attitudes during the duration, you can lower the DC by 5. This spell does not replace careful study of a culture, nor does it give insight beyond events that occur during the duration.",
		"range": "personal",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.134",
		"resistance": "No",
		"target": "Self",
		"school": "divination",
		"mystic": "1"
	},
	{
		"name": "Comprehend Languages",
		"castingTime": "1 standard action",
		"shortText": "You understand all spoken signed and written or tactile languages.",
		"duration": "(CASTERLEVEL*10) minutes (D)",
		"level": "1",
		"longText": "You can understand the spoken or signed words of creatures or read otherwise incomprehensible written or tactile messages. The ability to read does not necessarily impart insight into the material merely its literal meaning. The spell enables you to understand or read an unknown language not speak or write it. You can't use this spell to read magic writing or encoded messages (though it does reveal if a message is magic or encoded) but you can use it to read raw computer code or foreign programming languages allowing you to understand enough to attempt Computers checks on those materials without penalties.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.344",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Confusion",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Targets behave randomly for (CASTERLEVEL) rounds.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "4",
		"longText": "This spell causes confusion in all creatures in the area making them unable to determine their actions. Any confused creature that is attacked automatically attacks or attempts to attack its attackers on its next turn as long as it is still confused at the start of its next turn. Note that a confused creature will not make attacks of opportunity against any foe that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked). For confused creatures that have not been attacked roll on the following table at the start of each affected creature's turn each round to see what it does in that round. [D% - BEHAVIOR] 1-25 Act normally; 26-50 Do nothing but babble incoherently; 51-75 Deal 1d8 + Str modifier damage to self with item in hand; 76-100 Attack nearest creature. A confused creature that can't carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a confused target.",
		"range": "Medium",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.344",
		"resistance": "Yes",
		"target": "15-ft.-radius burst",
		"related": {
			"1": [
				"Confusion (Lesser)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Confusion (Lesser)",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "One living creature is confused for 1 round.",
		"duration": "1 round",
		"level": "1",
		"longText": "This spell causes a single creature to become confused for 1 round. Any confused creature that is attacked automatically attacks or attempts to attack its attackers on its next turn as long as it is still confused at the start of its next turn. Note that a confused creature will not make attacks of opportunity against any foe that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked). For confused creatures that have not been attacked roll on the following table at the start of each affected creature's turn each round to see what it does in that round. [D% - BEHAVIOR] 1-25 Act normally; 26-50 Do nothing but babble incoherently; 51-75 Deal 1d8 + Str modifier damage to self with item in hand; 76-100 Attack nearest creature. A confused creature that can't carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a confused target.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.344",
		"resistance": "Yes",
		"target": "One living creature",
		"related": {
			"4": [
				"Confusion"
			]
		},
		"witchwarper": "1"
	},
	{
		"name": "Contact Other Plane",
		"mystic": "5",
		"castingTime": "10 minutes",
		"shortText": "Ask questions of extraplanar entity.",
		"duration": "Concentration",
		"level": "5",
		"longText": "You send your mind to another plane of existence (an Elemental Plane or some plane further removed) in order to receive advice and information from powers there. The powers reply in a language you understand but they resent such contact and give only brief answers to your questions. All questions are answered with Yes No Maybe Never Irrelevant or some other one-word answer. You must concentrate on maintaining the spell in order to ask questions at the rate of one per round. A question is answered by the power during the same round. You can ask (CASTERLEVEL/2) questions. On rare occasions this divination may be blocked by an act of certain deities or forces. Contacting a minor planar power is relatively safe but may not result in useful answers. For each question you ask the GM secretly rolls 1d20. [1-2] The power gives you no answer the spell ends and you must attempt a DC 7 Intelligence check. On a failed check your Intelligence and Charisma scores each fall to 8 for a week and you are unable to cast spells for that period. [3-5] You receive a random answer to the question. [6-10] You receive an incorrect answer to the question. Based on the nature and needs of the creature contacted this may be a lie designed to harm you. [11-15] You receive no answer to the question. [16 or More] You receive a truthful and useful one-word answer. If the question can't be truthfully answered in this way no answer is received. Contact with minds further removed from your home plane increases the probability that you will incur a decrease in Intelligence and Charisma due to your brain being overwhelmed by the power's sheer strangeness and force but it also increases the chance of the power knowing the answer and answering correctly. You can add any value from +1 to +5 to the d20 roll to represent contacting increasingly powerful planar beings. However on a roll of 1 or 2 the result is still no answer the spell ends and you must attempt an Intelligence check to avoid losing Intelligence and Charisma. The DC of this Intelligence check is increased by the same amount added to the d20 check to contact a planar creature.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.344",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Control Atmosphere",
		"shortText": "Alter the corrosiveness, density, or toxicity of the surrounding atmosphere",
		"castingTime": "1 standard action",
		"area": "30 ft radius spread",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "4",
		"longText": "You can alter the atmosphere within the spell’s area to cause it to become more like the atmosphere of another planet. You can alter one aspect of the atmosphere—its corrosiveness, density, or toxicity. The possible effects of each of these changes are detailed below. Corrosiveness: You can make the atmosphere corrosive. Each creature and object in the area when you cast the spell must succeed at a Fortitude save or take 5d6 acid damage. Creatures and objects that remain in the area take 3d6 additional acid damage every 10 minutes (Fortitude half). Alternatively, you can make a normally corrosive atmosphere noncorrosive. In this case, the atmosphere within the spell’s area deals no acid damage for the duration of the spell. Density: You can make the atmosphere in the area one step thinner (going from severely thick to thick, thick to normal, normal to thin, or thin to severely thin) or thicker (going from severely thin to thin, thin to normal, normal to thick, or thick to severely thick). The spell cannot make an atmosphere thicker than severely thick or thinner than severely thin. In addition to the normal long-term effects of being in an atmosphere thinner or thicker than a creature is acclimated to, each creature in the area of the spell when it is cast must succeed at a Fortitude save or suffer the immediate effects described below. This is true even for creatures with environmental protection from equipment (such as armor), as the air within the armor is affected on a failed saving throw. Creatures that do not need to breathe are not affected by changes in atmospheric density. If the air is thicker than a creature is acclimated to, on a failed saving throw, that creature becomes sickened. For every step beyond the first that the air is thicker than the target’s acclimation, it takes a –1 penalty to its save against this effect. If the air is thinner than a creature is acclimated to, on a failed saving throw, it is fatigued. For every step beyond the first that the air is thinner than the target’s acclimation, it takes a –1 penalty to its saving throw against this effect. The effect ends if the creature moves out of the area, and it is not required to attempt a new saving throw upon reentering the area (instead it is subject only to the normal dangers of thicker or thinner air). Toxicity: You can make the atmosphere toxic. Each creature in the area of the spell when it is cast must succeed at a Fortitude save or suffer the immediate effects described below. Creatures with environmental protection from equipment already active (such as armor) are not exposed to the toxic atmosphere. A creature that fails its save contracts bubonic plague (no save) and immediately moves to the weakened state. Creatures that enter the area of toxic atmosphere later are exposed to inhaled bubonic plague and follow the normal disease rules for contracting the disease and progressing on the physical disease track. The disease is nonmagical, and those infected are still infected when the spell’s duration ends. Alternatively, you can make a normally toxic atmosphere nontoxic. In this case, the atmosphere within the spell’s area does not expose those who breathe it to any toxic disease for the duration of the spell.",
		"range": "Medium",
		"save": "Fortitude partial",
		"source": "Pact Worlds",
		"page": "p.204",
		"resistance": "No",
		"school": "transmutation",
		"mystic": "4",
		"witchwarper": "4",
		"FIXME": "Need support for listable choices and effects"
	},
	{
		"name": "Control Gravity",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Alter gravity in an area.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "6",
		"longText": "You can control gravity in an area causing it to reverse become zero-g or become extremely strong. A creature or object within the area that succeeds at its saving throw is unaffected (though if it stays in the area it must succeed at a new save each round or become affected) but it might still suffer secondary effects (such as an object flying up from reversed gravity or an object falling upon it when the spell ends). You choose how to have this spell affect gravity when you cast it and you cannot change it without recasting the spell. If two control gravity spells affect the same area they negate each other in the area of overlap. If you reverse gravity in an area you cause unattached objects and creatures in the area to fall upward and reach the top of the affected area in 1 round. If a solid object (such as a ceiling) is encountered in this fall falling objects and creatures strike it in the same manner as they would during a normal downward fall. If an object or creature reaches the top of the spell's area without striking anything it remains there oscillating slightly until the spell ends. At the end of the spell's duration affected objects and creatures fall downward. Creatures who can fly or levitate can keep themselves from falling in either direction. If you increase gravity in the area creatures and objects weigh twice as much as normal move at half speed can jump only half as far as normal and can lift and carry only half as much as normal. Any flying target has its maneuverability worsened by one step (from average to clumsy for example; minimum clumsy) and plummets to the ground unless it succeeds at a DC 25 Acrobatics check to fly to remain in the air. An area of zero-g works like the zero-g environment (see page 402). You can also use this spell to make areas of zero-g heavy gravity or light gravity act as normal gravity for the duration (see page 402).",
		"range": "Medium",
		"save": "Fortitude negates; see text",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.345",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL/2) ten-foot cubes [S]",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Control Machines",
		"castingTime": "1 standard action",
		"shortText": "Command technological constructs within range telepathically.",
		"duration": "Concentration up to (CASTERLEVEL) rounds",
		"level": "5",
		"longText": "You wrest control of the target constructs and command them telepathically. You can issue commands to any number of controlled constructs on your turn beginning when you cast this spell as part of the concentration required to sustain its duration (a standard action). If any of the constructs are under the control of a hostile creature that controlling creature can attempt a Will saving throw (DC equal to this spell's) to negate this spell's effect. Each construct under the control of another creature grants its controlling creature a separate saving throw to negate the effect for that construct. While this spell is in effect the affected constructs follow any command you give them even if it would be dangerous to the controlled constructs. At the end of the spell the constructs revert to their normal behavior. If they are intelligent they know and remember that you used magic to control them.",
		"range": "Medium",
		"save": "Will negates",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.345",
		"resistance": "No",
		"target": "Constructs of the technological subtype individual CRs no greater than (CASTERLEVEL+1) total CR no greater than (CASTERLEVEL*2) no two of which can be more than 30 ft. apart",
		"technomancer": "5"
	},
	{
		"name": "Control Undead",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Undead creatures follow your commands and don't attack you.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "6",
		"longText": "This spell enables you to control undead creatures for a short period of time. You command them by voice and they understand you no matter what language you speak. No matter what the controlled undead do not attack you. At the end of the spell the targets revert to their normal behavior. If any of the undead are under the control of a hostile creature that controlling creature can attempt a Will saving throw (DC = the spell's DC) to negate this spell's effect if the creature failed its initial saving throw. Each undead under the control of another creature grants its controlling creature a separate saving throw to negate the effect for that undead. Intelligent undead creatures remember that you controlled them and they may seek revenge after the spell's duration ends.",
		"range": "Close",
		"save": "Will negates",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.345",
		"resistance": "Yes",
		"target": "Undead creatures with individual CRs no greater than (CASTERLEVEL+1) and a total CR no greater than (CASTERLEVEL*2) no two of which can be more than 30 ft. apart",
		"technomancer": "6"
	},
	{
		"name": "Corrosive Haze",
		"castingTime": "1 standard action",
		"shortText": "Cloud deals 4d8 acid damage per round plus 10 additional damage.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "4",
		"longText": "A 5-foot cloud of acid-resistant nanites continually converts nearby water vapor into deadly acid. You can create the cloud in the same square as a creature and move it up to 30 feet in any direction as a move action on your turn. If the cloud enters (or is created in) a square containing a creature it can't move any farther that round and deals 4d6 acid damage to that creature (Reflex negates). The acidic cloud also corrodes any unattended objects along its path dealing them 4d8 acid damage. If you don't move the cloud it remains where it is; if it shares its square with any creature at the beginning of your turn that creature must succeed at a Reflex save or take 4d8 acid damage. Any creature that takes damage from the cloud takes 10 additional acid damage at the end of its next turn.",
		"range": "Medium",
		"save": "Reflex negates",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.346",
		"resistance": "Yes",
		"target": "5-ft.-diameter cloud of acid",
		"technomancer": "4"
	},
	{
		"name": "Cosmic Eddy",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Whirlwind deals 4d6 damage and knocks creatures prone.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "4",
		"longText": "You pull dormant mystical energy from the land and objects around you and use it to create a swirling eddy that batters your foes and can hinder their movement. The eddy deals 4d6 bludgeoning damage to each creature in the area. Additionally creatures in the area are knocked prone and are reduced to half speed while the spell is in effect. A creature that succeeds at a Reflex save takes only half damage and is not knocked prone but it is still reduced to half speed. Flying creatures within the eddy's area must attempt an Acrobatics check to fly (DC equals the spell's save DC) each round. Failure means the creature cannot move for that round. The spell deals damage and knocks creatures prone only once. However if a creature leaves the spell's area and then returns it is subject to the damage and other effects described above again (and can attempt another Reflex saving throw). Similarly if a creature is not in this spell's area when it is first cast but later moves into it it is subject to the damage and other effects described above. Small unattended items (no more than light bulk) are also thrown around in the eddy's area. At the end of the spell's duration such items land in a randomly determined space within the spell's area.",
		"range": "Medium",
		"save": "Reflex partial see text",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.346",
		"resistance": "Yes",
		"target": "20-ft.-radius spread",
		"witchwarper": "4"
	},
	{
		"name": "Create Ammunition",
		"shortText": "Create a specific type of ammunition, such as arrows or a battery.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "You create a specific type of ammunition, such as arrows or a battery, and conjure it in hand or a place within range. You can create ammunition with an item level of 1 or 2, and you create a number of charges or pieces of ammunition as if you had purchased the ammunition (for example, 20 arrows or a battery with 20 charges). If you use this spell to create a battery, the battery can be used for any function a battery performs. This spell cannot create ammunition made from special materials or with any special quality, and it cannot create grenades, rockets, missiles, or the like. The ammunition disappears when the duration ends.",
		"range": "close (25 ft + 4 ft per CASTERLEVEL/2)",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.134",
		"resistance": "No",
		"school": "conjuration (creation)",
		"technomancer": "1"
	},
	{
		"name": "Creation (Level 4)",
		"castingTime": "1 minute",
		"shortText": "Create one object made of vegetable matter.",
		"duration": "See text",
		"level": "4",
		"longText": "You create a nonmagical nontechnological unattended object of nonliving matter. The volume of the item created can't exceed (CASTERLEVEL) cubic feet (or (CASTERLEVEL) bulk). You must succeed at an appropriate Engineering or Profession check to make a complex item and you can't create a consumable item.  When you cast creation as a 4th-level spell it creates an object made out of vegetable matter (such as wood) that has an item level no greater than (CASTERLEVEL/3). The duration is (CASTERLEVEL) hours.",
		"range": "0 ft.",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.347",
		"resistance": "No",
		"target": "One nonmagical nontechnological object of nonliving matter up to (CASTERLEVEL) bulk; see text",
		"technomancer": "4",
		"related": {
			"5": [
				"Creation (Level 5)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Creation (Level 5)",
		"castingTime": "1 minute",
		"shortText": "Create a single object made of vegetable or mineral matter.",
		"duration": "See text",
		"level": "5",
		"longText": "You create a nonmagical nontechnological unattended object of nonliving matter. The volume of the item created can't exceed (CASTERLEVEL) cubic feet (or (CASTERLEVEL) bulk). You must succeed at an appropriate Engineering or Profession check to make a complex item and you can't create a consumable item.  When you cast creation as a 5th-level spell it creates an object made out of vegetable matter or material of a mineral nature; crystal metal stone or the like. The object can't have an item level greater than (CASTERLEVEL/2). The duration depends on the hardness and rarity of the created object as indicated on the following table. HARDNESS AND RARITY EXAMPLES DURATION - Vegetable matter (CASTERLEVEL*2) hours; Stone crystal base metals (CASTERLEVEL) hours; Precious metals (CASTERLEVEL*20) minutes; Gems (CASTERLEVEL*10) minutes; Rare metals* (CASTERLEVEL) rounds. *Includes adamantine alchemical silver mithral and skymetal alloys. You can't use a 5th-level creation spell to create a cold iron item.",
		"range": "0 ft.",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.347",
		"resistance": "No",
		"target": "One nonmagical nontechnological object of nonliving matter up to (CASTERLEVEL) bulk; see text",
		"technomancer": "5",
		"related": {
			"4": [
				"Creation (Level 4)"
			]
		},
		"witchwarper": "5"
	},
	{
		"name": "Crush Skull",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Deal 18d8 damage to living creature's head.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You manipulate the energy that swirls around the target's head pulling it inward and potentially crushing its skull. You must make a ranged attack against the target's EAC to ensure this spell hits the necessary weak spots in the target's head but you can add your key ability score modifier to this attack roll instead of your Dexterity modifier if it is higher. If you hit and the target fails a Fortitude saving throw it takes 18d8 damage. If the target succeeds at its saving throw it instead takes 4d8 damage. The target might die from damage even if it succeeds at its saving throw; in this case the spell is not a death effect. This spell has no effect against living creatures that don't have an anatomical head.",
		"range": "Close",
		"save": "Fortitude partial",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.347",
		"resistance": "Yes",
		"target": "One living creature",
		"witchwarper": "5"
	},
	{
		"name": "Dancing Lights",
		"castingTime": "1 standard action",
		"shortText": "Create and direct up to four lights.",
		"duration": "1 minute (D)",
		"level": "0",
		"longText": "You create up to four lights that resemble small headlights or flashlights. The dancing lights must stay within a 10-foot-radius area in relation to each other but otherwise move as you desire; forward or back up or down straight or turning corners or the like. The lights can move up to 100 feet per round. A light winks out if the distance between you and it exceeds the spell's range. You can have only one dancing lights spell active at a time. If you cast this spell while another casting is still in effect the previous casting is dispelled.",
		"range": "Medium",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.347",
		"resistance": "No",
		"target": "Up to four lights",
		"technomancer": "0",
		"witchwarper": "0"
	},
	{
		"name": "Darkvision",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Grant ability to see 60 feet in total darkness.",
		"duration": "(CASTERLEVEL) hours",
		"level": "2",
		"longText": "The target gains the ability to see 60 feet even in total darkness. Darkvision is black and white only but otherwise like normal sight.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.347",
		"resistance": "Yes (harmless)",
		"target": "One creature or camera",
		"technomancer": "2"
	},
	{
		"name": "Daze",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Humanoid creature of CR 3 or lower is dazed.",
		"duration": "1 round",
		"level": "0",
		"longText": "This spell short-circuits the mind of a humanoid creature with a CR of 3 or lower so that it is dazed (unable to take actions but taking no penalty to AC). Humanoids of CR 4 or higher are not affected. After a creature has been dazed by this spell it is immune to it for 1 minute.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.347",
		"resistance": "Yes",
		"target": "One humanoid creature of CR 3 or lower",
		"technomancer": "0",
		"witchwarper": "0"
	},
	{
		"name": "Daze Monster",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Target living creature of CR 5 or lower is dazed.",
		"duration": "1 round",
		"level": "2",
		"longText": "This spell short-circuits the mind of a creature with a CR of 5 or lower so that it is dazed (unable to take actions but taking no penalty to AC). Humanoids of CR 6 or higher are not affected. After a creature has been dazed by this spell it is immune to it for 1 minute.",
		"range": "Medium",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.347",
		"resistance": "Yes",
		"target": "One living creature of CR 5 or lower",
		"technomancer": "2",
		"witchwarper": "2"
	},
	{
		"name": "Dazzling Flares",
		"shortText": "Create bursts of distracting flares, imposing a -2 penalty on Perception checks made in the area.",
		"castingTime": "1 standard action",
		"duration": "1 round",
		"level": "0",
		"longText": "You evoke fist-sized pockets of existence from multiple realities, creating chemical reactions that result in up to a dozen flares. These flares appear at once, and they do so within a 10-foot-radius spread. You choose the flares’ colors, including colorless, and they make popping noises as they flicker in and out of reality. This popping can be as quiet as a human’s whisper or as loud as up to 20 humans shouting. You can cause the flares to emit a sulfurous or ozone smell as they pop. These distracting flares impose a –2 penalty on Perception checks attempted in the area. If you cast this spell while another casting of dazzling flares is still in effect, the previous casting ends.",
		"range": "close",
		"save": "Fortitude negates",
		"source": "Character Operations Manual",
		"page": "p.134",
		"resistance": "No",
		"school": "evocation",
		"effect": "popping, distracting flares within a 10 ft radius",
		"witchwarper": "0"
	},
	{
		"name": "Death Ward",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Target gains +4 bonus to saves against death spells and is immune to negative energy and gaining negative levels.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "4",
		"longText": "The target gains a +4 morale bonus to saving throws against all spells and effects with the death descriptor. The target can attempt a save to negate such effects even if one is not normally allowed. The target can't gain negative levels and is immune to any negative energy effects. This spell does not remove negative levels the target has already gained but it does remove the penalties from negative levels for the duration of its effect. Death ward does not protect against other sorts of attacks even if those attacks might be lethal.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.348",
		"resistance": "Yes (harmless)",
		"target": "One living creature"
	},
	{
		"name": "Deep Slumber",
		"mystic": "3",
		"castingTime": "1 round",
		"shortText": "Put a number of creatures whose CRs total 8 or less to sleep.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "3",
		"longText": "This spell causes living creatures in the area to fall into a magical sleep gaining the asleep condition (except normal noise doesn't wake up the sleeping creatures). Creatures with the lowest CR are affected first. Among creatures of equal CR those who are closest to the spell's point of origin are affected first. Deep slumber doesn't affect unconscious creatures constructs or undead creatures.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.348",
		"resistance": "Yes",
		"target": "One or more living creatures with a total CR of 8 or lower all within a 10-ft.-radius burst"
	},
	{
		"name": "Delay Countermeasures",
		"shortText": "Delay one computer's countermeasures",
		"castingTime": "1 standard action",
		"duration": "1 rounder per CASTERLEVEL",
		"level": "2",
		"longText": "Countermeasures on the target computer are suppressed. If you trigger any suppressed countermeasure, you are still alerted that you have done so, but it activates only after the spell ends.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.134",
		"resistance": "Yes",
		"target": "One computer",
		"school": "enchantment",
		"technomancer": "2"
	},
	{
		"name": "Destruction Protocol",
		"castingTime": "1 standard action",
		"shortText": "Turn nonhostile technological construct against your foes.",
		"duration": "Concentration up to (CASTERLEVEL) rounds",
		"level": "4",
		"longText": "Waves of inciting programming ebb from your touch reprogramming a construct to have murderous intentions toward your enemies. This spell must target a construct that is not already programmed or tasked with harming you. The target construct must have a CR lower than (CASTERLEVEL). If the target construct is under the control of another creature the controlling creature can attempt a Will saving throw (DC = the spell's DC) to negate this spell's effect. While this spell is in effect the construct is under your control. On your turn starting when you cast this spell you must direct it to attack a target; the construct then pursues and attacks this target as best it can. You can change which target the construct attacks as part of your concentration to continue this spell's duration (a standard action). When you stop concentrating or when the spell's duration otherwise ends the construct immediately stops following your commands to attack.",
		"range": "Touch",
		"save": "None",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.348",
		"resistance": "Yes",
		"target": "One nonhostile construct of the technological subtype; see text",
		"technomancer": "4"
	},
	{
		"name": "Detect Affliction",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Determine whether a creature or object has been poisoned is diseased is cursed or is suffering a similar affliction.",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "You determine whether a creature or object has been poisoned is diseased is cursed or is suffering a similar affliction. If the target is poisoned or diseased you automatically detect that fact and can determine the exact type of poison or disease with a successful DC 20 Intelligence or Wisdom check. If you are trained in Life Science or Medicine (depending on the nature of the poison or disease) you can attempt a DC 20 check of that skill if you fail your Wisdom or Intelligence check. If the target is cursed or suffering from a similar affliction you must succeed at a DC 20 Intelligence or Wisdom check to determine that fact. You can then determine the exact nature of the curse with a successful DC 25 Mysticism check.",
		"range": "Close",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.348",
		"resistance": "Yes (harmless)",
		"target": "One creature or object",
		"technomancer": "0"
	},
	{
		"name": "Detect Augmentation",
		"shortText": "Detect the presence of augmentations in the area.",
		"castingTime": "1 standard action",
		"area": "cone-shaped emanation",
		"duration": "concentration, up to 1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "You detect the presence of augmentations installed within creatures you can see within the area, which appear to you as glowing outlines around the systems in which the augmentations are installed. The spell allows you to determine the type of augmentation, such as biotech, cybernetic, magitech, or necrotech, and its item level, but it does not reveal the function of the augmentation. This spell does not reveal hidden or invisible creatures.",
		"range": "60 ft",
		"save": "None",
		"source": "Starfinder Armory",
		"page": "p.148",
		"resistance": "No",
		"school": "divination",
		"mystic": "1"
	},
	{
		"name": "Detect Magic",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Detect spells and magic items within 60 feet.",
		"duration": "Concentration up to (CASTERLEVEL) minutes",
		"level": "0",
		"longText": "You detect all magic spells effects items and objects (including those on or affecting creatures you can see) as well as hybrid items in the area. You can't detect magical traps in this way as they are created with additional magic that wards them from this common spell. Each round you concentrate on the same area you can determine if one magic source you detect is from a spell magic item or other effect and the caster level (or item level) of the effect. You can't determine if there are magic sources in areas you can't see or if there was a magic source in an area at one time but that has since expired.",
		"range": "60 ft.",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.348",
		"resistance": "No",
		"target": "Cone-shaped emanation",
		"technomancer": "0",
		"witchwarper": "0"
	},
	{
		"name": "Detect Radiation",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Detect radiation within 120 feet.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "1",
		"longText": "You detect radiation in the surrounding area and you can determine the specific intensity of the radiation of one area or object within the spell's area each round without taking an action (see Radiation on page 403 for more details). The spell can penetrate barriers but 3 feet of dirt or wood 1 foot of stone 1 inch of common metal a thin sheet of lead or any force field blocks it.",
		"range": "120 ft.",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.348",
		"resistance": "No",
		"target": "120-ft. spherical emanation centered on you",
		"technomancer": "1"
	},
	{
		"name": "Detect Tech",
		"castingTime": "1 standard action",
		"shortText": "Detect technological items with charges or that replenish charges within 60 feet.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You detect all technological items (even hybrid items) with charges or that replenish charges in the area including batteries power cells and generators (as well as such items that are on creatures you can see even if the creatures have hidden those items on themselves). You can't determine if there are technological items in areas you can't see nor can you detect technological traps in this way. The information this spell provides allows you to differentiate between charged items and items that replenish charges but it does not provide any further information nor does it tell you for example how many charges an item currently has or how many maximum charges it can hold. This spell can penetrate barriers but 3 feet of dirt or wood 1 foot of stone 1 inch of common metal a thin sheet of lead or any force field blocks it.",
		"range": "60 ft.",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.349",
		"resistance": "No",
		"target": "Cone-shaped burst",
		"technomancer": "1"
	},
	{
		"name": "Detect Thoughts",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Listen to surface thoughts.",
		"duration": "Concentration up to (CASTERLEVEL) minutes",
		"level": "1",
		"longText": "You detect the surface thoughts of intelligent creatures around you. The amount of information revealed depends on how long you study a particular area or target. [1st Round] You detect the presence or absence of thoughts from conscious creatures that have Intelligence scores of at least 1 (or an Intelligence modifier of -5) or higher. [2nd Round] You detect the number of thinking minds and the Intelligence score (or modifier) of each. If the highest Intelligence score is 26 (or a modifier of +8) or higher and at least 10 points higher than your own Intelligence score (or 5 points higher than your own Intelligence modifier) you are stunned for 1 round and the spell ends. This spell doesn't let you determine the location of the thinking minds if you can't see the creatures whose thoughts you are detecting. [3rd Round] You can read the surface thoughts of any mind in the area. A target who succeeds at its Will save prevents you from reading its thoughts and you must cast detect thoughts again to have another chance. Creatures of animal intelligence (an Intelligence score of 1 or 2 or an Intelligence modifier of -4 or lower) have simple instinctual thoughts. Each round you can turn to detect thoughts in a new area. The spell can penetrate barriers but 3 feet of dirt or wood 1 foot of stone 1 inch of common metal a thin sheet of lead or any force field blocks it.",
		"range": "60 ft.",
		"save": "Will negates; see text",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.349",
		"resistance": "No",
		"target": "Cone-shaped emanation",
		"witchwarper": "1"
	},
	{
		"name": "Digital Doorway",
		"shortText": "Teleport from one computer to another within range.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL or until expended",
		"level": "4",
		"longText": "You gain the ability to step into a piece of electronic equipment currently connected to a communication or information network (such as a comm unit or a computer connected to an infosphere), converting yourself into digital information and traveling along the network. Once uploaded onto a network, you teleport out from any device within 3,000 feet of the device that you entered; if no such device is in range, you emerge from the same device you entered. You are instantly aware of all unsecured devices connected to the same network as the one you entered, and you can attempt a Computers check (DC = 15 + 1-1/2 × the item’s level) to detect other devices (this does not require an action); a single check renders you aware of all devices whose DC to detect you exceeded. If the item is a computer, your Computers check result must also exceed the DC required to successfully hack it. This movement acts as the teleport spell, except there is no chance of missing your destination. When attempting to enter or exit a computer with one or more countermeasures, you automatically trigger any countermeasures that are not successfully disabled. When you emerge from a computer, you can attempt one Computers check, with the result compared to the DC of each countermeasure in place on that computer (this does not require an action); you suffer the effects of all countermeasures with a DC higher than the result of your check. Some countermeasures triggered in this manner are exceptionally dangerous, as noted below. Feedback: The digital virus uploaded into your data causes you to become exposed to the mindfire disease, but the disease has a save DC of 15 + half the item level of the destination device. Firewall: You arrive at the destination prone, and you remain flat-footed and off-target for 1 minute. Wipe: Your recent memories are scrambled, with minor elements removed, causing you to be confused for a number of rounds equal to half the item level of the destination device (minimum 1 round).",
		"range": "personal",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "Self",
		"school": "conjuration (teleport)",
		"technomancer": "4",
		"FIXME": "Listable items needed"
	},
	{
		"name": "Dimension Door",
		"castingTime": "1 standard action",
		"shortText": "Teleport a short distance.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "You instantly transfer yourself from your current location to any other spot within range. You always arrive at exactly the spot desired-whether by simply visualizing the area or by stating its direction. You can bring along objects as long as their weight doesn't exceed your maximum load. You can also bring up to four additional willing or unconscious Medium or smaller creatures (carrying gear or objects up to their maximum load) or their equivalent. A Large creature counts as two Medium creatures and a Huge creature counts as two Large creatures. All creatures to be transported must be in contact with one another and at least one of those creatures must be in contact with you. After using this spell you can't take any other actions until your next turn (and each creature traveling with you can't take any other actions until its next turn). If you arrive in a place that is already occupied by a solid body you and each creature traveling with you each take 1d6 damage and are shunted to a random open space on a suitable surface within 100 feet of the intended location. If there is no free space within 100 feet you and each creature traveling with you take 2d6 additional damage and are shunted to a free space within 1000 feet. If there is no free space within 1000 feet you and each creature traveling with you take 4d6 additional damage and the spell simply fails.",
		"range": "Long",
		"save": "None Will negates (object)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.349",
		"resistance": "No yes (object)",
		"target": "You and touched objects or touched willing or unconscious creatures",
		"technomancer": "4",
		"witchwarper": "4"
	},
	{
		"name": "Dimensional Anchor",
		"shortText": "Prevent a target from leaving the plane",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "4",
		"longText": "You fire a ray at the target, making a ranged attack against its EAC. On a hit, the target is covered in a shimmering field that prevents planar travel. The target can’t be affected by any effect that causes the target to move extradimensionally or to another plane, such as teleportation, summoning, plane shifting, astral travel, ethereal travel, and so on. An affected starship can’t enter or emerge from Drift travel.",
		"range": "Medium",
		"save": "None",
		"source": "Alien Archive 3",
		"page": "p.53",
		"resistance": "Yes (object)",
		"target": "one creature or object",
		"school": "abjuration",
		"mystic": "4",
		"technomancer": "4"
	},
	{
		"name": "Directed Denial of Strength Attack",
		"shortText": "Cause creatures to become encumbered",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "You flood targets’ minds with a magical effect similar to a computer virus that duplicates every sensation of lifting, carrying, and being burdened. Targets become encumbered, or they become overburdened if already encumbered.",
		"range": "Medium",
		"save": "Will negates",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "Yes",
		"target": "up to one creature per CASTERLEVEL, no two of which can be more than 30 ft apart",
		"school": "enchantment (mind-effecting)",
		"technomancer": "2"
	},
	{
		"name": "Discern Lies",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Reveal deliberate falsehoods.",
		"duration": "Concentration up to (CASTERLEVEL) rounds",
		"level": "4",
		"longText": "Each round you concentrate on one target within range. You know if the target deliberately and knowingly speaks a lie by discerning disturbances in its aura caused by lying. The spell does not reveal the truth or uncover unintentional inaccuracies and it doesn't necessarily reveal evasions. Each round you can concentrate on a different target.",
		"range": "Close",
		"save": "Will negates",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.349",
		"resistance": "No",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
	},
	{
		"name": "Discharge",
		"castingTime": "1 standard action",
		"shortText": "Disrupts or depowers one target technological item or construct.",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "You can dissipate the charges from one technological object temporarily depower one electrically powered technological object that does not use charges or severely hinder a construct with the technological subtype. If the spell targets an object with charges the object loses all of its remaining charges. If the object is powered by electrical means other than charges its functions are suppressed for 1d4 rounds. If the spell targets a creature not of the technological subtype it affects a random charged or electrically powered item in that creature's possession. If the target is a construct with the technological subtype it is staggered and cannot use any energy-based attacks for 1d4 rounds. A construct with the technological subtype that is affected by this spell can attempt a Fortitude saving throw at the end of each round to shrug off the effect.",
		"range": "Medium",
		"save": "Fortitude negates (object)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.350",
		"resistance": "No",
		"target": "One creature or technological object",
		"technomancer": "3"
	},
	{
		"name": "Discharge (Greater)",
		"castingTime": "1 standard action",
		"shortText": "Disrupts or depowers multiple technological items or constructs.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You can dissipate the charges from technological objects temporarily depower electrically powered technological objects that do not use charges or severely hinder a construct with the technological subtype. If the spell targets an object with charges the object loses all of its remaining charges. If the object is powered by electrical means other than charges its functions are suppressed for 1d4 rounds. If the spell targets a creature not of the technological subtype it affects a random charged or electrically powered item in that creature's possession. If the target is a construct with the technological subtype it is staggered and cannot use any energy-based attacks for 1d4 rounds. A construct with the technological subtype that is affected by this spell can attempt a Fortitude saving throw at the end of each round to shrug off the effect. This spell functions as discharge except it can discharge multiple technological objects. You can use it in one of two ways - an area discharge or a targeted discharge. [Area Discharge] When used in this way the spell affects everything within a 20-foot-radius burst. Each creature in the area is affected as though by discharge (affecting only one object in the creature's possession) and each unattended object is similarly affected. [Targeted Discharge] If this spell targets a single creature it can discharge (CASTERLEVEL/4) randomly determined objects from the target's charged or electrically powered possessions.",
		"range": "Medium",
		"save": "Fortitude negates (object)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.350",
		"resistance": "No",
		"target": "One creature or technological object or a 20-ft.-radius burst",
		"technomancer": "6"
	},
	{
		"name": "Disguise Self",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Change your appearance.",
		"duration": "(CASTERLEVEL*10) minutes (D)",
		"level": "1",
		"longText": "You make yourself-and any clothing armor weapons and equipment on you-look different. You can seem up to 1 foot shorter or taller thin fat or in between. You can't change your creature type (although you can appear as another subtype). Otherwise the extent of the apparent change is up to you. You could merely add or obscure a minor feature or you could look like an entirely different person or gender. The spell does not provide the abilities or mannerisms of the chosen form nor does it alter the perceived tactile (touch) or audible (sound) properties of you or your equipment. If you use this spell to create a disguise you gain a +10 circumstance bonus to the Disguise check (since it counts as altering your form). A creature that interacts with you directly can attempt a Will saving throw to recognize your appearance as an illusion.",
		"range": "Personal",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.350",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Disintegrate",
		"castingTime": "1 standard action",
		"shortText": "Ray reduces one creature or object to dust.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "Immense power shoots from your finger with the potential to disintegrate a target where it stands. When you cast this spell a thin green ray springs from your pointing finger. You must make a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit the target takes 14d20 damage. Any creature reduced to 0 Hit Points by this spell is entirely disintegrated leaving behind only a trace of fine dust. A disintegrated creature's equipment is unaffected. Only one target is affected per casting of this spell. When used against an object the ray simply disintegrates as much as a 10-foot cube of nonliving matter. Thus the spell disintegrates only part of any very large object or structure targeted. The ray affects even objects constructed entirely of force but it does not affect other magical effects that are not an object creature or force effect. A creature or object that succeeds at a Fortitude saving throw is partially affected taking only 4d20 damage. If this damage reduces the creature or object to 0 Hit Points the target is entirely disintegrated.",
		"range": "Medium",
		"save": "Fortitude partial (object)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.350",
		"resistance": "Yes",
		"target": "One creature or object or up to a 10-ft. cube of nonliving matter",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Dismissal (Level 4)",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Force a creature to return to its native plane.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "The spell instantly forces one or more extraplanar creatures off your current plane, whisking them away instantly-usually to the creature's home plane, but there is a 20% chance of sending the target to a random plane other than its own. You can improve the spell's chance of success by presenting one object or substance that the target fears, hates, or otherwise opposes; you gain a +1 circumstance bonus to your caster level check to overcome the target's spell resistance (if any), and the save DC of the spell increases by 2. At the GM's discretion, certain rare items might work twice as well, providing a +2 circumstance bonus to the caster level check to overcome spell resistance and increasing the spell's save DC by 4. When you cast dismissal as a 4th-level spell, it affects one extraplanar creature.",
		"range": "Close",
		"save": "Will negates, see text",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.350",
		"resistance": "Yes",
		"target": "See text",
		"technomancer": "4",
		"related": {
			"5": [
				"Dismissal (Level 5)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Dismissal (Level 5)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Force extraplanar creatures whose total CR is no greater than (CASTERLEVEL+2) to return to their native planes.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "The spell instantly forces one or more extraplanar creatures off your current plane, whisking them away instantly-usually to the creature's home plane, but there is a 20% chance of sending the target to a random plane other than its own. You can improve the spell's chance of success by presenting one object or substance that the target fears, hates, or otherwise opposes; you gain a +1 circumstance bonus to your caster level check to overcome the target's spell resistance (if any), and the save DC of the spell increases by 2. At the GM's discretion, certain rare items might work twice as well, providing a +2 circumstance bonus to the caster level check to overcome spell resistance and increasing the spell's save DC by 4. When you cast dismissal as a 5th-level spell, it affects a number of extraplanar creatures whose total CR can't exceed (CASTERLEVEL+2), no two of which can be more than 30 feet apart.",
		"range": "Close",
		"save": "Will negates, see text",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.350",
		"resistance": "Yes",
		"target": "See text",
		"technomancer": "5",
		"related": {
			"4": [
				"Dismissal (Level 4)"
			]
		},
		"witchwarper": "5"
	},
	{
		"name": "Dispel Magic",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Cancel one magical spell or effect.",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "You can use dispel magic to end one ongoing spell that has been cast on a creature or object to temporarily suppress the magical abilities of a magic item or to counter another spellcaster's spell. A dispelled spell ends as if its duration had expired. Some spells as detailed in their descriptions can't be defeated by dispel magic. Dispel magic can dispel (but not counter) spell-like abilities just as it does spells. The effect of a spell with an instantaneous duration can't be dispelled. You choose to use dispel magic in one of two ways as a targeted dispel or as a counter. [Targeted Dispel] One creature object or spell is the target of the dispel magic spell. You can also use a targeted dispel to specifically end one spell affecting the target or one spell affecting an area (such as zone of truth). You must name the specific spell effect to be targeted in this way or otherwise uniquely identify it (such as that burning wall or the spell that's giving him those duplicates). Attempt a dispel check (1d20 + your caster level) with a DC equal to 11 + the spell's caster level. If you succeed the spell ends. If you don't specify a spell and there is more than one possible spell on the target your targeted dispel attempts to dispel a spell at random. If you target a force an object or a creature that is the effect of an ongoing spell (such as unseen servant) you attempt a dispel check to end the spell that conjured the object or creature. If the object that you target is a magic item you attempt a dispel check against the item level (DC = 11 + the item level). If you succeed all the item's magical properties are suppressed for 1d4 rounds after which the item recovers its magical properties. A suppressed item becomes nonmagical for the duration of the effect. A magic item's nonmagical physical properties are unchanged; a suppressed holy laser pistol is still a laser pistol. Artifacts and deities are unaffected by mortal magic such as this. You can choose to automatically succeed at your dispel check against any spell you have cast. [Counter] You can use the energy of dispel magic to disrupt the casting of other spells. First select an opponent and take the ready action (see page 249) to cast dispel magic when that target casts a spell. This is considered a purely defensive action. When that readied action is triggered you cast dispel magic and must attempt a dispel check (1d20 + your caster level) to counter the other spellcaster's spell. The DC is equal to 11 + the other spellcaster's caster level. If the check is successful and the target is in range the spell fails and has no result.",
		"range": "Medium",
		"save": "None",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.351",
		"resistance": "No",
		"target": "One creature object spell or spellcaster",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Dispel Magic (Greater)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Cancel multiple spells or effects.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "This spell functions like dispel magic except it can end more than one spell on a target and it can be used to target multiple creatures. You choose to use greater dispel magic in one of three ways a targeted dispel an area dispel or a counter. [Targeted Dispel] This functions as a targeted dispel magic but you can dispel one spell for every 4 caster levels you have attempting a separate dispel check for each spell. Additionally greater dispel magic has a chance to dispel any curse that remove affliction can remove even if dispel magic can't dispel that effect. The DC of this check is equal to the curse's DC. [Area Dispel] When greater dispel magic is used in this way the spell affects everything within a 20-foot-radius burst. Attempt one dispel check and apply that check to each creature or object in the area as if it were targeted by dispel magic. If you don't specify spells and there is more than one possible spell on the target your targeted dispel attempts to dispel spells at random. Magic items themselves are not affected by an area dispel but additional magical effects on them may be dispelled. For each ongoing spell effect whose point of origin is within the area of the greater dispel magic spell apply the result of the dispel check to dispel the spell. For each ongoing spell whose area overlaps that of the greater dispel magic spell apply the result of the dispel check to end the effect but only within the overlapping area. If an object or a creature that is the effect of an ongoing spell is in the area apply the result of the dispel check to end the spell that conjured that object or creature (returning it whence it came) in addition to attempting to dispel one spell targeting the creature or object. You can choose to automatically succeed at your dispel check against any spell you have cast. [Counter] This functions as countering with dispel magic but you receive a +4 bonus to your dispel check to counter the other spellcaster's spell.",
		"range": "Medium",
		"save": "None",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.352",
		"resistance": "No",
		"target": "One creature object spell or spellcaster; or a 20-ft.-radius burst",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Displace Memory",
		"shortText": "You deposit a memory into a small object.",
		"castingTime": "1 round",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "You move one of your memories into the target object. You can select up to 5 minutes of continuous memory, or you can select every memory associated with one person, place, or object you name when you cast this spell. If you select continuous memory, you lose those memories, and if you try to recall them, you remember a blank gap instead of any details. If you select a person, place, or object, you remember events related to that thing, but not the presence or details of the thing you named. For example, if after a visit to Castrovel with your sister you use this spell to forget Castrovel, you remember traveling with your sister, but you forget where you went. Alternatively, if you used this spell to forget your sister, you remember going to Castrovel with someone, but not who was with you. Anyone touching the object into which you placed your memories can recall those memories by speaking a command word that you designate at the time of casting. Alternatively, you can designate no command word so that no one can recall the memories when touching the object. If the object is destroyed, the memories placed within return to you.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.134",
		"resistance": "No",
		"target": "one object of negligible bulk",
		"school": "transmutation",
		"mystic": "4"
	},
	{
		"name": "Displacement",
		"castingTime": "1 standard action",
		"shortText": "Attacks miss target 50% of the time.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "3",
		"longText": "The target of this spell appears to be about 2 feet away from its true location. The creature benefits from a 50% miss chance as if it had total concealment. Unlike actual total concealment displacement doesn't prevent enemies from targeting the creature normally. True seeing reveals the target's true location and negates the miss chance. If a creature with blindsense can also see the displaced creature the visual and blindsense information combined are enough for the creature with blindsense to attack the displaced creature without a miss chance unlike normal for blindsense.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.352",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Divination",
		"mystic": "4",
		"castingTime": "10 minutes",
		"shortText": "Gain useful advice for specific proposed actions.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "Similar to augury but more powerful a divination spell can provide you with a useful piece of advice in reply to a question concerning a specific goal event or activity that is to occur within 1 week. Casting this spell requires you to expend 1 Resolve Point. The advice granted by the spell can be as simple as a short phrase or it might take the form of a cryptic rhyme or omen. If you don't act on the information the conditions may change so that the information is no longer useful. The chance for a correct divination is 75%. If the die roll fails you know the spell failed unless specific magic yielding false information is at work. As with augury multiple castings of divination about the same topic by the same caster use the same die result as the first divination spell and yield the same answer each time.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.352"
	},
	{
		"name": "Divine Aspect",
		"shortText": "You adopt the intimidating aura of a god",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "3",
		"longText": "You take on a terrifying aura that evokes a specific god, an aspect of divinity, a mystic concept, or another mighty force. For the duration, you are immune to fear effects, and you gain frightful presence as a supernatural ability with a range of 30 feet and a Will save DC equal to the spell’s DC.",
		"range": "personal",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.135",
		"resistance": "No",
		"target": "Self",
		"school": "enchantment",
		"mystic": "3"
	},
	{
		"name": "Dominate Person",
		"mystic": "5",
		"castingTime": "1 round",
		"shortText": "Control humanoid telepathically.",
		"duration": "(CASTERLEVEL) days; see text",
		"level": "5",
		"longText": "You fire a bright purple ray at your target making a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit and your target fails its Will saving throw you establish a telepathic link with the target's mind and can control its actions. If you and the target have a common language you can generally force the target to perform as you desire within the limits of its abilities. If no common language exists you can communicate only basic commands such as Come here Go there Fight and Stand still. You know what the target is experiencing but you don't receive direct sensory input from it nor can it communicate with you telepathically. Once you have given a dominated creature a command it continues to attempt to carry out that command to the exclusion of all other activities except those necessary for day-to-day survival (such as sleeping eating and so forth). Changing your orders or giving a dominated creature a new command is a move action. By concentrating fully on the spell (a standard action) you can receive full sensory input as interpreted by the mind of the target though it still can't communicate with you. You don't actually see through the target's eyes but you still get a good idea of what's going on. The target resists this control and any target forced to take actions against its nature can attempt a new saving throw with a +2 bonus. Obviously self-destructive orders are not carried out. Once control is established the range at which it can be exercised is unlimited as long as you and the target are on the same plane. You don't need to see the target to control it. If you don't spend at least 1 round concentrating on the spell each following day the target can attempt a new saving throw to throw off the domination. You can be prevented from exercising control or using the telepathic link while the target is under the effects of some spells but such effects don't automatically dispel the domination.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.352",
		"resistance": "Yes",
		"target": "One humanoid"
	},
	{
		"name": "Ectoplasmic Barrage (Level 1)",
		"shortText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage. Each projectile in the barrage has the knockdown critical hit effect. In addition, ectoplasm extends to the Ethereal Plane, so it affects ethereal and incorporeal creatures. 1st: When you cast ectoplasmic barrage as a 1st-level spell, each projectile deals 2d6 damage on a hit.",
		"range": "Close",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.51",
		"resistance": "Yes",
		"target": "up to two creatures that are no more than 30 ft apart from each other",
		"school": "evocation",
		"mystic": "1",
		"witchwarper": "1",
		"related": {
            "2":["Ectoplasmic Barrage (Level 2)"],
            "3":["Ectoplasmic Barrage (Level 3)"],
            "4":["Ectoplasmic Barrage (Level 4)"],
            "5":["Ectoplasmic Barrage (Level 5)"],
            "6":["Ectoplasmic Barrage (Level 6)"]
        }
    },
    {
		"name": "Ectoplasmic Barrage (Level 2)",
		"shortText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage. Each projectile in the barrage has the knockdown critical hit effect. In addition, ectoplasm extends to the Ethereal Plane, so it affects ethereal and incorporeal creatures. 2nd: When you cast ectoplasmic barrage as a 2nd-level spell, each projectile deals 4d6 damage on a hit.",
		"range": "Close",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.51",
		"resistance": "Yes",
		"target": "up to two creatures that are no more than 30 ft apart from each other",
		"school": "evocation",
		"mystic": "2",
		"witchwarper": "2",
		"related": {
            "1":["Ectoplasmic Barrage (Level 1)"],
            "3":["Ectoplasmic Barrage (Level 3)"],
            "4":["Ectoplasmic Barrage (Level 4)"],
            "5":["Ectoplasmic Barrage (Level 5)"],
            "6":["Ectoplasmic Barrage (Level 6)"]
        }
    },
    {
		"name": "Ectoplasmic Barrage (Level 3)",
		"shortText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage. Each projectile in the barrage has the knockdown critical hit effect. In addition, ectoplasm extends to the Ethereal Plane, so it affects ethereal and incorporeal creatures. 3rd: When you cast ectoplasmic barrage as a 3rd-level spell, each projectile deals 7d6 damage on a hit.",
		"range": "Close",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.51",
		"resistance": "Yes",
		"target": "up to two creatures that are no more than 30 ft apart from each other",
		"school": "evocation",
		"mystic": "3",
		"witchwarper": "3",
		"related": {
            "1":["Ectoplasmic Barrage (Level 1)"],
            "2":["Ectoplasmic Barrage (Level 2)"],
            "4":["Ectoplasmic Barrage (Level 4)"],
            "5":["Ectoplasmic Barrage (Level 5)"],
            "6":["Ectoplasmic Barrage (Level 6)"]
        }
    },
    {
		"name": "Ectoplasmic Barrage (Level 4)",
		"shortText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage. Each projectile in the barrage has the knockdown critical hit effect. In addition, ectoplasm extends to the Ethereal Plane, so it affects ethereal and incorporeal creatures. 4th: When you cast ectoplasmic barrage as a 4th-level spell, each projectile deals 10d6 damage on a hit.",
		"range": "Close",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.51",
		"resistance": "Yes",
		"target": "up to two creatures that are no more than 30 ft apart from each other",
		"school": "evocation",
		"mystic": "4",
		"witchwarper": "4",
		"related": {
            "1":["Ectoplasmic Barrage (Level 1)"],
            "2":["Ectoplasmic Barrage (Level 2)"],
            "3":["Ectoplasmic Barrage (Level 3)"],
            "5":["Ectoplasmic Barrage (Level 5)"],
            "6":["Ectoplasmic Barrage (Level 6)"]
        }
    },
    {
		"name": "Ectoplasmic Barrage (Level 5)",
		"shortText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage. Each projectile in the barrage has the knockdown critical hit effect. In addition, ectoplasm extends to the Ethereal Plane, so it affects ethereal and incorporeal creatures. 5th: When you cast ectoplasmic barrage as a 5th-level spell, each projectile deals 13d6 damage on a hit. A struck target is also entangled for 1 round.",
		"range": "Close",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.51",
		"resistance": "Yes",
		"target": "up to two creatures that are no more than 30 ft apart from each other",
		"school": "evocation",
		"mystic": "5",
		"witchwarper": "5",
		"related": {
            "1":["Ectoplasmic Barrage (Level 1)"],
            "2":["Ectoplasmic Barrage (Level 2)"],
            "3":["Ectoplasmic Barrage (Level 3)"],
            "4":["Ectoplasmic Barrage (Level 4)"],
            "6":["Ectoplasmic Barrage (Level 6)"]
        }
    },
    {
		"name": "Ectoplasmic Barrage (Level 6)",
		"shortText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You fling psychic material, called ectoplasm, at the target, making a ranged attack against its KAC and dealing bludgeoning damage. Each projectile in the barrage has the knockdown critical hit effect. In addition, ectoplasm extends to the Ethereal Plane, so it affects ethereal and incorporeal creatures. 6th: When you cast ectoplasmic barrage as a 6th-level spell, each projectile deals 15d6 damage on a hit. A struck target is also entangled for 1d4 rounds.",
		"range": "Close",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.51",
		"resistance": "Yes",
		"target": "up to two creatures that are no more than 30 ft apart from each other",
		"school": "evocation",
		"mystic": "6",
		"witchwarper": "6",
		"related": {
            "1":["Ectoplasmic Barrage (Level 1)"],
            "2":["Ectoplasmic Barrage (Level 2)"],
            "3":["Ectoplasmic Barrage (Level 3)"],
            "4":["Ectoplasmic Barrage (Level 4)"],
            "5":["Ectoplasmic Barrage (Level 5)"]
        }
	},
	{
		"name": "Ectoplasmic Eruption",
		"shortText": "Swirling psychich matter, known as ectoplasm, erupts from a point you choose",
		"castingTime": "1 standard action",
		"area": "30 ft radius burst",
		"duration": "1 round per CASTERLEVEL",
		"level": "4",
		"longText": "Swirling psychic matter, known as ectoplasm, erupts from a point you choose. Those in the area take 6d6 bludgeoning damage. Those who fail the Reflex saving throw are entangled for the spell’s duration. The ectoplasm extends to the Ethereal Plane, so it affects ethereal and incorporeal creatures and objects. Such a creature entangled in the eruption is forced to partially materialize, so it cannot enter or pass through solid objects, takes half damage from nonmagical kinetic attacks, and takes full damage from magic and energy weapons, spells, spell-like effects, and supernatural effects. It reacts as a material creature to non-damaging spells.",
		"range": "Medium",
		"save": "Reflex half, see text",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.52",
		"resistance": "Yes",
		"school": "evocation",
		"mystic": "4",
		"witchwarper": "4"
	},
	{
		"name": "Ego Whip",
		"shortText": "You overwhelm your opponent's ego, diminishing its sense of self, hope, and confidence.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "You overwhelm your opponent’s ego, diminishing its sense of self, hope, and confidence. The target takes a –2 penalty to Intelligence-, Wisdom-, and Charisma-based checks; its spell save DCs; and its Will saving throws. In addition, the target is staggered for the duration. A successful initial Will save reduces the duration to 1 round.",
		"range": "Close",
		"save": "Will partial",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.52",
		"resistance": "Yes",
		"target": "One creature",
		"school": "enchantment (emotion, mind-effecting)",
		"mystic": "2",
		"witchwarper": "2"
	},
	{
		"name": "Electroplating",
		"shortText": "Give kinetic weapons the ability to bypass material-based damage reduction.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "When you cast this spell, you create a temporary quantity of silver in a cloud of charged nanoparticles, which you then direct to coat nearby melee or projectile weapons. The target weapons must deal bludgeoning, piercing, or slashing damage or the spell has no effect. For the spell’s duration, the metal plating on the weapons grants them the ability to overcome DR/silver and bypass DR/magic for the spell’s duration. If your caster level is 8th or higher, you can have weapons affected by this spell bypass DR/adamantine rather than DR/ silver. Weapons affected by this version of the spell are not considered adamantine for any other purpose (such as the ability to bypass hardness). If your caster level is 16th or higher, you can instead have affected weapons bypass DR that is bypassed by any other one metal with which you are familiar (either from having succeeded at a skill check to identify the weaknesses of a creature with DR, or from a successful Physical Science skill check to identify some other metal when you encountered it). Such weapons do not gain any other benefit from being made of the selected material.",
		"range": "Close",
		"save": "Fortitude negates (harmless, object)",
		"source": "Starfinder Armory",
		"page": "p.157",
		"resistance": "Yes (object)",
		"target": "One melee or projectile weapon per CASTERLEVEL, no two of which can be more than 30 ft apart; see text",
		"school": "transmutation",
		"technomancer": "2",
		"FIXME": "Could use paragraph breaks eventually"
	},
	{
		"name": "Emberstep",
		"shortText": "Leaves a trail of fire behind you",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "For the duration of this spell, you leave behind a trail of faintly burning embers in any square that you move through. These embers have no effect except for providing dim light in those squares. The embers disappear at the start of your next turn. As a reaction to another creature moving into a square of embers, you can ignite that square, causing flames to leap up and burn that creature. The affected creature takes 5d6 points of fire damage (Reflex half), and gains the burning condition for 1d4 points of fire damage on a failed Reflex save. In addition, that square no longer contains embers.",
		"range": "Personal",
		"save": "None",
		"source": "Starfinder #18: Assault on the Crucible",
		"page": "p.53",
		"resistance": "No",
		"target": "Self",
		"school": "evocation (fire)",
		"mystic": "2",
		"technomancer": "2"
	},
	{
		"name": "Enduring Worlds",
		"shortText": "Extend the infinite worlds feature’s duration.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "1",
		"longText": "You cast this spell during the duration of an ongoing environmental effect you’ve created using your infinite worlds class feature, refining your grasp on the overlapping realities around you. When you do so, this spell extends those effects for its duration. If you have used infinite worlds to create multiple effects, you can use this spell to extend any number of them.",
		"range": "Personal",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.135",
		"resistance": "No",
		"target": "Self",
		"school": "transmutation",
		"witchwarper": "1"
	},
	{
		"name": "Energy Ray",
		"castingTime": "1 standard action",
		"shortText": "Ray deals 1d3 acid cold electricity or fire damage.",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "When you cast this spell choose acid cold electricity or fire; the spell gains that descriptor. You fire a ray at the target and you must make a ranged attack against its EAC. On a hit the ray deals 1d3 damage of the chosen energy type.",
		"range": "Close",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.353",
		"resistance": "Yes",
		"target": "One creature or object",
		"technomancer": "0"
	},
	{
		"name": "Enervation",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Ray imposes 2 negative levels.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "You shoot a black ray at a target making a ranged attack against the target's EAC. If you hit the target gains 2 temporary negative levels. Negative levels stack. If the target survives it recovers from negative levels after %1 hours. An undead creature struck by the ray gains 10 temporary Hit Points for 1 hour.|min(15CASTERLEVEL)",
		"range": "Close",
		"save": "None",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.353",
		"resistance": "Yes",
		"target": "One creature"
	},
	{
		"name": "Enshrining Refuge",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Targets can't attack or be attacked but can exist comfortably.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "6",
		"longText": "All creatures within a 40-foot radius of the spell's point of origin are protected from violence. Any opponent attempting to directly attack a warded creature even with a targeted spell must attempt a Will saving throw. If the opponent succeeds it can attack that creature normally though it takes a -2 penalty to attacks against that creature for the duration of the spell. On a failed save the opponent can't follow through with the attack loses that action and can't directly attack the warded creature for the duration of the spell. Those not attempting to attack a warded creature remain unaffected. This spell doesn't prevent warded creatures from being affected by an attack with an area of effect though a warded creature receives a +2 bonus to saving throws against such attacks. Each warded creature can breathe normally no matter the surrounding atmosphere and it suffers no harm from being in a hot or cold environment. A warded creature can't attack without breaking the spell for itself but it can use harmless spells and abilities that don't require attack rolls and it can act otherwise.",
		"range": "Close",
		"save": "Will negates; see text",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.353",
		"resistance": "No",
		"target": "All creatures in 40-ft. radius burst",
		"witchwarper": "6"
	},
	{
		"name": "Entropic Grasp",
		"castingTime": "1 standard action",
		"shortText": "Touch decays a construct or nonmagical manufactured item once per round for (CASTERLEVEL) rounds.",
		"duration": "See text",
		"level": "3",
		"longText": "Any unattended manufactured (built from component parts including metal wood plastic glass and so on) item you touch crumbles into dust rust and decay. If the item is so large that it can't fit within a 3-foot radius a 3-foot-radius volume of the material is destroyed. This is an instantaneous effect. You can employ entropic grasp in combat by making a melee attack against your opponent's EAC. If you hit you instantaneously reduce a manufactured armor's KAC and EAC bonus by 3 (to a minimum of a +0 bonus). Damaged armor can be repaired using the Engineering skill; with a successful check the armor's armor bonuses are restored to their original values. Against a manufactured creature (generally constructs but not undead) this attack instead deals 6d12 damage. Weapons and equipment in use by an opponent are more difficult to affect with this spell. You attempt a sunder combat maneuver against the item. If successful you deal 6d6 damage to the weapon or item. Used in combat this spell lasts (CASTERLEVEL) rounds and you can make one melee attack each round on future rounds as a standard action. The target can attempt a save to negate each melee attack but success does not end the spell. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.353",
		"resistance": "No",
		"target": "One nonmagical manufactured object (or the volume of the object within a 3-ft.-radius of the touched point) or one manufactured creature touched each round",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Erase",
		"castingTime": "1 standard action",
		"shortText": "Remove writings of either magical or mundane nature.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "Erase removes writings of either magical or mundane nature from any written storage including paper computers or similar devices. You remove up to 1500 words worth of text (for computer files this could be a 1500-word data file or 1500 words of computer code). With this spell you can remove magic runes and glyphs created by spells of 3rd-level and lower. Nonmagical writing in a book or manual is automatically erased if you touch it and no one else is holding it. Magical writing and computer programs must be touched (either directly or by touching the physical drive that holds the file) to be erased and you must also succeed at a caster level check (1d20 + caster level) with a DC equal to 11 + the caster level for the magical writing or the item level of the computer's drive. Computers generally keep backups on a round-by-round basis and when you erase code from a computer it takes 1 round for the computer to access its backups. If you erase a file that stores continuous data (like a camera feed) the computer won't be able to recover the missing round. A natural 1 is always a failure on this check. If you fail to erase writing that is part of a trap (magical or otherwise) you set off that trap.",
		"range": "Close",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.353",
		"resistance": "No",
		"target": "One written data set",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Ethereal Jaunt",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "You become ethereal for 1 round per level.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "6",
		"longText": "You become ethereal along with your equipment. For the duration of the spell you are on the Ethereal Plane which overlaps the Material Plane. When the spell expires you return to material existence. An ethereal creature is invisible insubstantial and capable of moving in any direction even up or down albeit at half normal speed. As an insubstantial creature you can move through solid objects including living creatures. An ethereal creature can see and hear events and creatures on the Material Plane but everything looks gray and ephemeral. Sight and hearing on the Material Plane are limited to 60 feet and many kinds of senses (such as blindsense and blindsight) don't work across the planar boundary. Force effects and abjurations affect an ethereal creature normally but force effects originating on the Ethereal Plane don't affect targets on the Material Plane. An ethereal creature can't attack material creatures and spells you cast while ethereal affect only other ethereal things. Certain material creatures and objects have attacks or effects that work on the Ethereal Plane. Treat other ethereal creatures and ethereal objects as you would if you were both on the Material Plane. If you end the spell and become material while inside a material object (such as a solid wall) you are shunted to the nearest open space and take 1d6 damage per 5 feet that you so travel.",
		"range": "Personal",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.354",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Etheric Shards",
		"shortText": "You harden ethereal matter into interplanar blades that are invisible to those who cannot see into the Ethereal Plane.",
		"castingTime": "1 standard action",
		"area": "One 10 ft cube per CASTERLEVEL",
		"duration": "1 hour per CASTERLEVEL",
		"level": "3",
		"longText": "You harden ethereal matter into interplanar blades that are invisible to those who cannot see into the Ethereal Plane. Movement through an area of etheric shards is halved, even for incorporeal creatures, and creatures entering a 5-foot cube filled with etheric shards take 1d8 slashing damage and must succeed at a Reflex saving throw or gain the bleeding 1 condition. The damage from this bleeding stacks with itself and other sources of bleeding. A creature that remains motionless within the area takes no damage, but such a creature is flat-footed unless it moves enough to defend itself, which forces it to take damage and attempt a saving throw. Etheric shards are a magical trap. A creature trained in Mysticism and within 30 feet of the area can attempt a DC 35 Perception check to sense the shards. The shards cannot be disabled, but they can be dispelled.",
		"range": "Medium",
		"save": "Reflex partial or Reflex negates; see text",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.52",
		"resistance": "No",
		"school": "evocation (force)",
		"mystic": "3",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Explosive Blast",
		"castingTime": "1 standard action",
		"shortText": "Deal 9d6 fire damage to creatures in a 20-foot radius.",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "You magically transform a used battery into a powerful explosive device propelling it in a straight line to a grid intersection within range at which point it detonates dealing 9d6 fire damage to all creatures and objects in the area. If you send the battery through a narrow opening you must make a ranged attack (usually against an Armor Class of 10 for a narrow opening or an Armor Class of 15 for an extremely narrow opening) to avoid hitting the side and detonating it prematurely.",
		"range": "Medium",
		"save": "Reflex half",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.354",
		"resistance": "Yes",
		"target": "20-ft.-radius burst",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Fabricate Scrap",
		"shortText": "Turn 1 bulk of inert matter into an equal amount of junked electronic equipment, suitable for certain spells",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "You turn 1 bulk of inert matter, such as debris, dust, rocks, or other unattended 0-level items, into 1 bulk of junked electronic equipment suitable for targeting with spells such as battle junkbot, handy junkbot, healing junkbot, junk armor, or junksword. The junked electronics have no resale value and cannot be repaired into any functioning item. Any direct examination by a character trained in Engineering or Physical Science reveals the useless nature of the junk.",
		"range": "Close",
		"save": "Will negates (object)",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "Yes (object); see text",
		"school": "universal; see text",
		"effect": "Creates or converts 1 bulk of inert electronic equipment",
		"technomancer": "0"
	},
	{
		"name": "Fatigue",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Touched creature is fatigued.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "0",
		"longText": "You make a melee attack against a single target's EAC adding your key ability score modifier to the attack roll instead of your Strength modifier if it is higher. The target must succeed at a Fortitude save or be fatigued for the spell's duration. This spell has no effect on a creature that is already fatigued. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude negates",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.354",
		"resistance": "Yes",
		"target": "One creature",
		"witchwarper": "0"
	},
	{
		"name": "Fear (Level 1)",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Frighten a single living creature that's of CR 4 or lower for 1d4 rounds.",
		"duration": "See text",
		"level": "1",
		"longText": "With a single mental nudge you can unlock one target's deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as a 1st-level spell it affects one living creature of CR 4 or lower at close range ((25+5*CASTERLEVEL/2) feet). The target must succeed at a Will saving throw or be frightened for 1d4 rounds.",
		"range": "See text",
		"save": "Will partial",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.354",
		"resistance": "Yes",
		"target": "See text",
		"related": {
			"2": [
				"Fear (Level 2)"
			],
			"3": [
				"Fear (Level 3)"
			],
			"4": [
				"Fear (Level 4)"
			]
		},
		"witchwarper": "1"
	},
	{
		"name": "Fear (Level 2)",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Frighten multiple creatures of CR 4 or lower for 1 minute.",
		"duration": "See text",
		"level": "2",
		"longText": "With a single mental nudge you can unlock one or more targets' deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as a 2nd-level spell it affects (CASTERLEVEL/3) living creatures of CR 4 or lower at medium range ((100+CASTERLEVEL*10) feet) no two of which can be more than 30 feet apart. Each target must succeed at a Will saving throw or be frightened for 1 minute.",
		"range": "See text",
		"save": "Will partial",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.354",
		"resistance": "Yes",
		"target": "See text",
		"related": {
			"1": [
				"Fear (Level 1)"
			],
			"3": [
				"Fear (Level 3)"
			],
			"4": [
				"Fear (Level 4)"
			]
		},
		"witchwarper": "2"
	},
	{
		"name": "Fear (Level 3)",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Targets of CR 8 or lower within a cone are panicked for 1 minute.",
		"duration": "See text",
		"level": "3",
		"longText": "With a single mental nudge you can unlock one or more targets' deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as 3rd-level spell it affects all living creatures of CR 8 or lower in 30-foot cone-shaped burst. Each target must succeed at a Will save or become panicked for 1 minute. If cornered a panicked creature begins cowering.",
		"range": "See text",
		"save": "Will partial",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.354",
		"resistance": "Yes",
		"target": "See text",
		"related": {
			"1": [
				"Fear (Level 1)"
			],
			"2": [
				"Fear (Level 2)"
			],
			"4": [
				"Fear (Level 4)"
			]
		},
		"witchwarper": "3"
	},
	{
		"name": "Fear (Level 4)",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "All targets within a cone are panicked for 1 minute.",
		"duration": "See text",
		"level": "4",
		"longText": "With a single mental nudge you can unlock one or more targets' deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as 4th-level spell it affects all living creatures in 30-foot cone-shaped burst regardless of CR. Each target must succeed at a Will save or become panicked for 1 minute. If cornered a panicked creature begins cowering.",
		"range": "See text",
		"save": "Will partial",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.354",
		"resistance": "Yes",
		"target": "See text",
		"related": {
			"1": [
				"Fear (Level 1)"
			],
			"2": [
				"Fear (Level 2)"
			],
			"3": [
				"Fear (Level 3)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Feeblemind",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Target's Intelligence and Charisma scores drop to 1.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You fire a scintillating ray at your target making a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit and your target fails its Will saving throw the target creature's Intelligence and Charisma scores each drop to 1 (a modifier of -5). The affected creature is unable to use Intelligence- or Charisma-based skills cast spells understand language or communicate coherently. It still knows who its friends are and can follow them and even protect them. The target remains in this state until a miracle psychic surgery wish or similar spell is used to cancel the effect. It can't be removed by effects like break enchantment.",
		"range": "Medium",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.354",
		"resistance": "Yes",
		"target": "One creature"
	},
	{
		"name": "Flesh to Stone",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Turn a creature into a statue.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You fire a dull gray ray at your target making a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit and the target fails its Fortitude save the target along with all its carried gear turns into a mindless inert statue. If the statue resulting from this spell is broken or damaged the target (if ever returned to its original state) has similar damage or deformities. The creature is not dead but it gives off no sign of life even upon close inspection. Only creatures made of flesh are affected by this spell. If this spell is cast upon a stone creature that was once flesh it reverses the petrification.",
		"range": "Close",
		"save": "Fortitude negates",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.355",
		"resistance": "Yes",
		"target": "One creature",
		"witchwarper": "6"
	},
	{
		"name": "Flight (Level 1)",
		"castingTime": "1 standard action; see text",
		"shortText": "(CASTERLEVEL) creatures or objects fall slowly.",
		"duration": "See text",
		"level": "1",
		"longText": "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 1st-level spell you can target (CASTERLEVEL) Medium or smaller falling objects or creatures at close range ((25+5*CASTERLEVEL/2) feet). The targets must all be within 20 feet of each other. A Large creature or object counts as two Medium creatures or objects a Huge creature or object counts as four Medium creatures or objects and so on. The affected targets instantly fall slower at a rate of just 60 feet per round (equivalent to the end of a fall from a few feet). The targets take no damage upon landing while the spell is in effect. This spell doesn't affect charging or flying creatures. For each target this casting of the spell lasts until that target lands or (CASTERLEVEL) rounds (whichever happens first). This spell can be cast as a reaction but when you do so you can't take a standard action on your next round.",
		"range": "See text",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.355",
		"resistance": "Yes (harmless)",
		"target": "See text",
		"technomancer": "1",
		"related": {
			"2": [
				"Flight (Level 2)"
			],
			"3": [
				"Flight (Level 3)"
			],
			"4": [
				"Flight (Level 4)"
			],
			"5": [
				"Flight (Level 5)"
			],
			"6": [
				"Flight (Level 6)"
			]
		},
		"witchwarper": "1"
	},
	{
		"name": "Flight (Level 2)",
		"castingTime": "1 standard action; see text",
		"shortText": "Target moves up and down at your direction.",
		"duration": "See text",
		"level": "2",
		"longText": "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 2nd-level spell you can target yourself or one willing or unconscious creature or unattended object (total weight up to (CASTERLEVEL*100) pounds or (CASTERLEVEL*10) bulk) at close range. The spell allows you to move the target up or down as you wish. Each round as a move action you can mentally direct the target up or down as much as 20 feet. You can't move the target horizontally. A levitating creature that attacks with a melee or ranged weapon finds itself increasingly unstable; the first attack takes a -1 penalty to attack rolls the second a -2 penalty and so on to a maximum of -5. A full round spent stabilizing allows the creature to begin again at -1. This casting of the spell lasts (CASTERLEVEL) minutes and is dismissible.",
		"range": "See text",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.355",
		"resistance": "Yes (harmless)",
		"target": "See text",
		"technomancer": "2",
		"related": {
			"1": [
				"Flight (Level 1)"
			],
			"3": [
				"Flight (Level 3)"
			],
			"4": [
				"Flight (Level 4)"
			],
			"5": [
				"Flight (Level 5)"
			],
			"6": [
				"Flight (Level 6)"
			]
		},
		"witchwarper": "2"
	},
	{
		"name": "Flight (Level 3)",
		"castingTime": "1 standard action; see text",
		"shortText": "Target flies at a speed of 60 feet.",
		"duration": "See text",
		"level": "3",
		"longText": "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 3rd-level spell you can target one willing or unconscious touched creature and give it the power of flight. The target can fly at a speed of 60 feet with average maneuverability. Flying while under this spell's effects takes no more concentration than walking so the target can attack or cast spells normally. The target can charge but not run and it can't carry aloft more weight than its normal bulk limit. The target gains a +(CASTERLEVEL/2) bonus to Acrobatics checks to fly. If this spell expires or is dispelled while the target is aloft the target floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time it lands safely. If not it falls the rest of the distance taking 1d6 damage per 10 feet fallen. The spell lasts for (CASTERLEVEL) minutes.",
		"range": "See text",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.355",
		"resistance": "Yes (harmless)",
		"target": "See text",
		"technomancer": "3",
		"related": {
			"1": [
				"Flight (Level 1)"
			],
			"2": [
				"Flight (Level 2)"
			],
			"4": [
				"Flight (Level 4)"
			],
			"5": [
				"Flight (Level 5)"
			],
			"6": [
				"Flight (Level 6)"
			]
		},
		"witchwarper": "3"
	},
	{
		"name": "Flight (Level 4)",
		"castingTime": "1 standard action; see text",
		"shortText": "Target flies at a speed of 70 feet.",
		"duration": "See text",
		"level": "4",
		"longText": "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 4th-level spell you can target one willing or unconscious touched creature and affect it as per the 3rd-level version of the spell except the target's fly speed is increased by 10 feet and the spell lasts for (CASTERLEVEL*10) minutes.",
		"range": "See text",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.355",
		"resistance": "Yes (harmless)",
		"target": "See text",
		"technomancer": "4",
		"related": {
			"1": [
				"Flight (Level 1)"
			],
			"2": [
				"Flight (Level 2)"
			],
			"3": [
				"Flight (Level 3)"
			],
			"5": [
				"Flight (Level 5)"
			],
			"6": [
				"Flight (Level 6)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Flight (Level 5)",
		"castingTime": "1 standard action; see text",
		"shortText": "You can fly at a speed of 70 feet and can hustle over long distances.",
		"duration": "See text",
		"level": "5",
		"longText": "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 5th-level spell you can target yourself and be affected as per the 4th-level version of the spell except the spell lasts for (CASTERLEVEL) hours. When you use this flight speed for long-distance movement you can hustle without taking nonlethal damage (a forced march still requires Constitution checks). You can cover 140 miles in an 8-hour period of flight (or 80 miles at a speed of 50 feet).",
		"range": "See text",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.355",
		"resistance": "Yes (harmless)",
		"target": "See text",
		"technomancer": "5",
		"related": {
			"1": [
				"Flight (Level 1)"
			],
			"2": [
				"Flight (Level 2)"
			],
			"3": [
				"Flight (Level 3)"
			],
			"4": [
				"Flight (Level 4)"
			],
			"6": [
				"Flight (Level 6)"
			]
		},
		"witchwarper": "5"
	},
	{
		"name": "Flight (Level 6)",
		"castingTime": "1 standard action; see text",
		"shortText": "Multiple targets can fly at a speed of 60 feet.",
		"duration": "See text",
		"level": "6",
		"longText": "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 6th-level spell you can target multiple willing or unconscious creatures at close range (%1 feet) and affect them as per the 3rd-level version of the spell. You can target (CASTERLEVEL) creatures all of which must be within 30 feet of each other. This casting of the spell lasts (CASTERLEVEL*10) minutes.",
		"range": "See text",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.355",
		"resistance": "Yes (harmless)",
		"target": "See text",
		"technomancer": "6",
		"related": {
			"1": [
				"Flight (Level 1)"
			],
			"2": [
				"Flight (Level 2)"
			],
			"3": [
				"Flight (Level 3)"
			],
			"4": [
				"Flight (Level 4)"
			],
			"5": [
				"Flight (Level 5)"
			]
		},
		"witchwarper": "6"
	},
	{
		"name": "Fog Cloud",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Create a fog that obscures vision.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "2",
		"longText": "A bank of fog billows out from the point you designate. The fog obscures all sight including darkvision beyond 5 feet. A creature within 5 feet has concealment (attacks have a 20% miss chance) against its attacker. Creatures farther away have total concealment (50% miss chance and the attacker can't use sight to locate the target) against their attackers. A moderate wind (11+ mph) disperses the fog in 4 rounds; a strong wind (21+ mph) disperses the fog in 1 round. This spell doesn't function underwater or in a vacuum.",
		"range": "Medium",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.356",
		"resistance": "No",
		"target": "20-ft.-radius spread",
		"technomancer": "2",
		"witchwarper": "2"
	},
	{
		"name": "Force Blast",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Cone deals 2d6 force damage and bull rushes creatures.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You gather mystical energy and blast it outward in a mighty wave originating from your fingertips damaging and potentially knocking back your enemies. This spell deals 2d6 force damage to each creature in the area unless it succeeds at a Reflex saving throw for half damage. Additionally the force from this spell effectively attempts to bull rush all creatures in the area. Attempt a single bull rush combat maneuver using your caster level + your key ability score modifier as your attack bonus. Compare the result to each target's KAC + 8. If you're successful that creature is knocked back 5 feet plus 5 additional feet for every 5 by which your attack exceeds the creature's KAC + 8. If there is an obstacle in the way the creature stops at the obstacle instead.",
		"range": "30 ft.",
		"save": "Reflex partial see text",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.356",
		"resistance": "Yes",
		"target": "Cone-shaped burst",
		"witchwarper": "2"
	},
	{
		"name": "Ghost Sound",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Create minor illusory sounds.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "0",
		"longText": "You create a volume of sound that rises falls recedes approaches or remains fixed. You choose what type of sound this spell creates when casting it and cannot thereafter change the sound's basic character. The volume of sound created can produce as much noise as 20 normal humans. Thus you can create shouting singing talking marching running or walking sounds as well as sounds of battle or small explosions. You can make noises that sound like machines the general chatter of distant conversation or the roar of an alien predator but you can't make specific sounds such as intelligible speech or the exact hum of a particular starship's engines.",
		"range": "Close",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.356",
		"resistance": "No",
		"target": "Illusory sounds",
		"technomancer": "0",
		"witchwarper": "0"
	},
	{
		"name": "Gloom Mote",
		"shortText": "Create a mote of light from the Shadow Plane, which draws other nearby lights down into shadow.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "1",
		"longText": "You draw forth the energy of the Shadow Plane and form it into a floating mote of gloom. The mote creates dim light in a 5-foot radius. It also lowers the light level within 20 feet of it by one step, down to dim. As a move action, you can move the mote up to 60 feet in any direction. The mote winks out if the distance between you and it exceeds the spell’s range. You can have only one gloom mote spell active at a time. If you cast this spell while another gloom mote of yours is still in effect, the previous casting is dispelled.",
		"range": "Medium",
		"save": "None",
		"source": "Starfinder #12: Heart of Night",
		"page": "p.53",
		"resistance": "No",
		"school": "conjuration (creation, shadow)",
		"effect": "A mote of darkness",
		"mystic": "1",
		"technomancer": "1"
	},
	{
		"name": "Grave Words",
		"mystic": "0",
		"castingTime": "1 minute",
		"shortText": "Force a corpse to babble.",
		"duration": "1 round",
		"level": "0",
		"longText": "You can force a touched corpse talk to you but you can't ask it specific questions or communicate with it at all. The corpse utters random sentences for 1 round with a 10% chance this information is of some use to you. Useful information might include warnings about dangers in a wrecked starship the password to unlock a computer or the name of a supernatural creature seeking you or your allies. The GM makes the d% roll in secret and decides what information useful or not the corpse spews out in its babbling. Once a corpse has been subjected to grave words by any caster any new attempt to cast grave words on that corpse fails. A corpse must have a mouth or means to speak in order for this spell to function and the spell doesn't affect a corpse that has been turned into an undead creature.",
		"range": "Touch",
		"save": "None",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.357",
		"resistance": "No",
		"target": "One dead creature",
		"witchwarper": "0"
	},
	{
		"name": "Gravitational Singularity",
		"mystic": "6",
		"castingTime": "1 round",
		"shortText": "Particle with infinite density pulls creatures and objects into it dealing 12d6 damage each round to those inside.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "6",
		"longText": "You call into being a tiny particle of mass with infinite density. You must conjure the singularity in a square that is unoccupied by any creatures or objects. When you finish casting this spell the singularity immediately draws all Medium and smaller creatures and unattended objects of no more than light bulk within 30 feet toward it. Each round on your turn the singularity makes a single special combat maneuver against creatures within 30 feet with an attack bonus equal to 4 + your caster level + your key ability modifier. Compare the result to each creature's KAC + 8. If the singularity is successful that creature is moved 5 feet toward the singularity plus 5 additional feet for every 5 by which the result exceeds a target's KAC + 8. Unattended objects are automatically moved 10 feet toward the singularity each round. If a creature or object is moved into the square that contains the singularity it is sucked inside it and takes 12d6 damage at the end of its turn each round it remains within that space. A creature drawn into the singularity can take no actions except a full action to try to escape (it still takes damage during the rounds it attempts to escape). A creature must succeed at either an Athletics check (DC (CASTERLEVEL+CASTERLEVEL/2+15)) or a DC 22 Strength check to escape the singularity. The singularity can hold up to four Medium creatures or objects (two Small creatures or objects count as one Medium creature and so on); if it would pull in additional creatures those creatures are simply pulled into a square adjacent to the singularity. A creature within 50 feet of the singularity has its speed reduced by half when it moves away from the singularity. However it can move at double its normal speed when moving toward the singularity. If a creature moves within 30 feet of the singularity at any point in its movement it is subject to the combat maneuver described above. A creature that moves neither toward nor away from the singularity moves at its normal speed. When this spell ends the singularity disappears and creatures and objects that were sucked into the singularity appear in the space where you conjured it (or as close as possible to that space if they can't all fit within it).",
		"range": "Medium",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.357",
		"resistance": "No",
		"target": "5-ft.-cube gravitational singularity; see text"
	},
	{
		"name": "Gravity Well",
		"shortText": "Create a point of high gravity that knocks creatures in the area prone and pulls them closer to the center.",
		"castingTime": "1 standard action",
		"area": "20 ft radius",
		"duration": "1 round per CASTERLEVEL",
		"level": "4",
		"longText": "You alter the gravity in an area, making a central point of high gravity that pulls creatures toward it. Each creature in the area when the spell takes effect is knocked prone unless it succeeds at a Reflex saving throw. Any creature that starts its turn in the area must succeed at a Reflex saving throw or be drawn 15 feet closer to the center of the area. This movement provokes attacks of opportunity. Creatures adjacent to the spell’s origin point take a –2 penalty to the save to avoid being pulled.",
		"range": "Medium",
		"save": "Reflex negates, see text",
		"source": "Character Operations Manual",
		"page": "p.135",
		"resistance": "Yes",
		"school": "conjuration",
		"mystic": "4",
		"technomancer": "4",
		"witchwarper": "4"
	},
	{
		"name": "Grease",
		"castingTime": "1 standard action",
		"shortText": "Make a 10-ft. square or one object slippery.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "1",
		"longText": "You cover a solid surface with a layer of slippery grease. Any creature in the area when the spell is cast must succeed at a Reflex save or fall prone. A creature can walk within or through the area of grease at half normal speed with a successful DC 10 Acrobatics check. Failure means the creature can't move that round and must then succeed at a Reflex save or fall prone while failure by 5 or more means it falls prone (see the Acrobatics skill on page 135 for details). A creature that doesn't move on its turn doesn't need to attempt this check and isn't considered flat-footed. The spell can also be used to create a greasy coating on an item. Unattended material objects are always affected by this spell. If you attempt to affect an object in a creature's possession the creature can attempt a Reflex save to negate the effect. If the creature fails the initial saving throw it immediately drops the item and must attempt a new save each round it attempts to pick up hold or use the item. A creature wearing greased armor or clothing gains a +5 circumstance bonus to Acrobatics checks to escape a grapple and a +2 circumstance bonus to its AC against grapple combat maneuvers.",
		"range": "Close",
		"save": "Reflex partial see text",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.357",
		"resistance": "No",
		"target": "One 10-ft. square or one object",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Groundling",
		"shortText": "Give a target a burrow speed and DR 5/bludgeoning.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "3",
		"longText": "The target’s body forms an exoskeleton, and its appendages such as hands and feet become broad and pointed like spades. Armor that covers any of these appendages functions normally and molds to fit the appendages’ new shape. The target gains DR 5/ bludgeoning and a burrow speed equal to its land speed. This spell grants no ability to breathe while buried, so a breathing creature without environmental protections might be at risk of suffocation.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.135",
		"resistance": "Yes (harmless)",
		"target": "One willing creature touched",
		"school": "transmutation",
		"technomancer": "3"
	},
	{
		"name": "Handy Junkbot",
		"castingTime": "1 round",
		"shortText": "Create a temporary robot made of junk to perform Computers Engineering Piloting and Sleight of Hand tasks.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "3",
		"longText": "You turn a pile of technological junk into a robot that can accomplish helpful tasks. You must target inert nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system nonworking or unconnected computer or robot parts a destroyed robot or another such trashed mechanical system or any related electronic components or combination of the above as long as the junk is found in a large enough quantity. While casting this spell you use your magic and technological know-how to rearrange the junked parts and infuse them with energy and helpful programming. A handy junkbot is Small its KAC and EAC are each (CASTERLEVEL+10) and it has a number of Hit Points equal to one-quarter of your own (but no Stamina Points). It has a land speed of 30 feet and a fly speed of 15 feet with average maneuverability. It can accomplish all tasks described in the Computers Engineering Piloting and Sleight of Hand skills is considered trained in those skills and has a total skill bonus in each of (CASTERLEVEL+3). The junkbot is treated as if it is using a hacker's kit when using the Computers skill and an engineering kit when using the Engineering skill. A handy junkbot can never attack. The junkbot uses your saving throw bonuses if it is the target of a spell or another targeted effect. For purposes of spells and effects that target the junkbot it is treated as a construct with the technological and magical subtypes. You can give new basic commands to your handy junkbot telepathically on your turn as a move action and the junkbot can take actions as if it were a normal creature. You are aware when the junkbot has succeeded at or failed a skill check as well as when it has been attacked or destroyed but you can perceive nothing else through this basic telepathic link. When the handy junkbot is destroyed or this spell ends the electronic equipment you used to create it falls apart into refuse its circuitry fried beyond anything recognizable. You can't use this refuse as a target to create another junkbot.",
		"range": "Touch",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.357",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment; see text",
		"technomancer": "3",
		"related": {
			"3": [
				"Healing Junkbot"
			],
			"6": [
				"Battle Junkbot"
			]
		}
	},
	{
		"name": "Haste",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "(CASTERLEVEL) creatures move and act faster.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "3",
		"longText": "The targeted creatures move and act more quickly than normal. This extra speed has several effects. When making a full attack a hasted creature can also take a separate move action in order to move. The movement can occur before after or between the attacks from the full attack. All movement must occur at the same time. All of the hasted creature's modes of movement (including base burrow climb fly and swim speeds) increase by 30 feet to a maximum of twice the target's normal speed using that form of movement. This increase counts as an enhancement bonus and it affects the creature's jumping distance as normal for increased speed. Multiple haste effects don't stack. Haste counters and negates slow.",
		"range": "Close",
		"save": "Fortitude negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.358",
		"resistance": "Yes (harmless)",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Hateful Visage",
		"shortText": "The target’s illusory face grants them a bonus to Intimidate checks and the ability to frighten foes.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "4",
		"longText": "You pull alternate forms from horrifying realities and drape them upon the target, causing the target to exhibit almost any type of body horror imaginable. Your allies can tell this effect results from your layering of alternate realities onto this one and are unaffected. Against others, the target gains a +10 insight bonus to Intimidate checks. If the target successfully uses Intimidate to demoralize a foe, the foe is frightened instead of shaken. This bonus and change in condition are fear and mind-affecting effects.",
		"range": "Medium",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.135",
		"resistance": "No",
		"target": "One willing creature; see text",
		"school": "illusion",
		"witchwarper": "4"
	},
	{
		"name": "Haunted Armor",
		"shortText": "Armor interferes with the wearer’s movement.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "You divert a malevolent spirit from the River of Souls to haunt your opponent’s armor. This spell must target a suit of light, heavy, or powered armor. The armor becomes cumbersome, reducing the wearer’s speed by 10 feet and AC by 1. It also rattles, hisses, and screeches, imposing a –4 penalty on Stealth checks.",
		"range": "Close",
		"save": "Will negates",
		"source": "Character Operations Manual",
		"page": "p.136",
		"resistance": "Yes",
		"target": "One worn suit of armor; see text",
		"school": "necromancy",
		"mystic": "2"
	},
	{
		"name": "Haunted Combatant",
		"shortText": "Haunt an enemy’s weapons, interfering with attacks made with those weapons.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "You divert a malevolent spirit from the River of Souls to temporarily haunt and interfere with an opponent’s weapons. The spirit writhes and rattles around in the target’s manufactured weapons, imposing a –1 penalty on the target’s attack rolls with weapons other than natural weapons. The weapons on a target’s body continue to be haunted while the spell lasts, even if the original target dies. Anyone who picks up the haunted weapons during this time must attempt to save against this spell at a –1 penalty or be affected by it.",
		"range": "Close",
		"save": "Will negates",
		"source": "Character Operations Manual",
		"page": "p.136",
		"resistance": "Yes",
		"target": "One creature; see text",
		"school": "necromancy",
		"mystic": "2"
	},
	{
		"name": "Hazard",
		"shortText": "Deal 1d3 acid, cold, electricity, fire, or sonic damage in a 5-foot-radius burst.",
		"castingTime": "1 standard action",
		"area": "5 ft radius burst",
		"duration": "1 round",
		"level": "0",
		"longText": "When you cast this spell, choose acid, cold, electricity, fire, or sonic. The spell gains that descriptor. You summon a minor hazard from an alternate reality, creating a splash of acid rain, a blast of freezing air, a static electric discharge, a burst of fire, or a roar of thunder. Each creature in the area must succeed at a Reflex save or take 1d3 damage of the chosen type.",
		"range": "Close",
		"save": "Reflex negates",
		"source": "Character Operations Manual",
		"page": "p.136",
		"resistance": "Yes",
		"school": "evocation",
		"witchwarper": "0"
	},
	{
		"name": "Healing Junkbot",
		"castingTime": "1 round",
		"shortText": "Robot made of junk can perform Medicine tasks and drag unconscious creature to safety.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "3",
		"longText": "You turn a pile of technological junk into a robot that can perform basic healing tasks. You must target inert nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system nonworking or unconnected computer or robot parts a destroyed robot or another such trashed mechanical system or any related electronic components or combination of the above as long as the junk is found in a large enough quantity. While casting this spell you use your magic and technological know-how to rearrange the junked parts and infuse them with energy and medical skills. A healing junkbot is Small its KAC and EAC are each equal to (10+CASTERLEVEL) and it has a number of Hit Points equal to one-quarter of your own (but no Stamina Points). It has a land speed of 30 feet and a fly speed of 15 feet with average maneuverability. It is considered trained in the Medicine skill and can perform first aid treat deadly wounds and treat drugs or poison as if it had a medkit (though it can't provide long-term care or treat disease). The junkbot has a total skill bonus for Medicine checks of (CASTERLEVEL+3). A healing junkbot can drag or fly one unconscious creature at a time to any spot you designate. It can drag or fly a Small Medium or Large creature at half speed. It can drag or fly smaller creatures at normal speed but it can't move creatures bigger than Large. A healing junkbot can never attack. The junkbot uses your saving throw bonuses if it is the target of a spell or another targeted effect. For purposes of spells and effects that target it the junkbot is treated as a construct with the technological and magical subtypes. You can give new basic commands to your healing junkbot telepathically on your turn as a move action and the junkbot can take actions as if it were a normal creature. You are aware when the bot has succeeded at or failed a skill check as well as when it has been attacked or destroyed but you can perceive nothing else through this basic telepathic link. When the healing junkbot is destroyed or this spell ends the electronic equipment you used to create it falls apart into refuse its components and circuitry fried beyond anything recognizable. You can't use this refuse as a target to create another junkbot.",
		"range": "Touch",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.358",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment; see text",
		"technomancer": "3",
		"related": {
			"3": [
				"Handy Junkbot"
			],
			"6": [
				"Battle Junkbot"
			]
		}
	},
	{
		"name": "Heat Leech",
		"castingTime": "1 standard action",
		"shortText": "Deal 13d8 cold damage to creatures in a cone.",
		"duration": "Instantaneous; see text",
		"level": "5",
		"longText": "You drain the heat from all creatures and objects in the area dealing 13d8 cold damage. You can store the gathered heat energy in a used battery. If you do so and use that battery when casting explosive blast within 1 minute that spell deals 2d6 additional fire damage destroying the used battery. Otherwise the energy dissipates normally.",
		"range": "60 ft.",
		"save": "Reflex half",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.359",
		"resistance": "Yes",
		"target": "Cone-shaped burst",
		"technomancer": "5"
	},
	{
		"name": "Hold Monster",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Paralyze one creature.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "4",
		"longText": "The target becomes paralyzed and freezes in place. It is aware and breathes normally but can't take any physical actions even speech. A held creature can't cast spells. Each round on its turn the target can spend a full action to attempt a new saving throw to end the effect. This does not provoke attacks of opportunity. A winged creature that is paralyzed can't flap its wings and falls. A swimmer can't swim and may drown.",
		"range": "Medium",
		"save": "Will negates see text",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.359",
		"resistance": "Yes",
		"target": "One living creature",
		"related": {
			"2": [
				"Hold Person"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Hold Person",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Paralyze one humanoid.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "2",
		"longText": "The target becomes paralyzed and freezes in place. It is aware and breathes normally but can't take any physical actions even speech. A held creature can't cast spells. Each round on its turn the target can spend a full action to attempt a new saving throw to end the effect. This does not provoke attacks of opportunity. A winged creature that is paralyzed can't flap its wings and falls. A swimmer can't swim and may drown.",
		"range": "Medium",
		"save": "Will negates see text",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.359",
		"resistance": "Yes",
		"target": "One humanoid creature",
		"related": {
			"4": [
				"Hold Monster"
			]
		},
		"witchwarper": "2"
	},
	{
		"name": "Hold Portal",
		"castingTime": "1 standard action",
		"shortText": "Hold a door shut.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "1",
		"longText": "This spell magically holds shut a door gate shutter or window of any standard material (metal plastic stone wood and so on) or it reinforces an electronic lock. The magic affects the portal just as if it were securely closed and normally locked. A knock spell or a successful dispel magic spell can negate a hold portal spell. Add 5 to the normal DC for forcing open a portal or hacking an electronic lock affected by this spell.",
		"range": "Medium",
		"save": "None",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.359",
		"resistance": "No",
		"target": "One portal up to (CASTERLEVEL*20) sq. ft.",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Hologram Memory",
		"mystic": "3",
		"castingTime": "1 full action",
		"shortText": "Extract a creature's memory and replay it as a hologram.",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "You reach into the target's mind extract a specific memory and project that memory into a small hologram that plays in front of you and is visible to all creatures who can see it. The hologram memory can be no longer than 1 minute; if the extracted memory is longer than this the hologram simply ends. The hologram includes audio as well as visual components but it does not contain haptic olfactory or other components. The hologram typically plays a memory that takes place in a single scene though it can cut to multiple scenes if they are accurate to the memory and its length allows. The hologram plays the memory exactly as the target experienced it and from the target's perspective so it often lacks context. The target creature must remain quiet and still while the hologram plays or the spell and hologram end. This spell can target any living unconscious or deceased sentient creature with an Intelligence score of 3 or higher (or a modifier of -4 or higher). If the target is deceased it cannot have been dead for longer than 1 week or this spell fails; once a corpse has been subjected to hologram memory by any caster any subsequent attempts to cast hologram memory on that corpse fail. If the target is unwilling to share this memory (or if it would be unable to share the memory in the case of an unconscious or deceased target) it can attempt a Will saving throw with a +4 bonus to negate this spell and its effects.",
		"range": "Touch",
		"save": "Will negates see text",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.359",
		"resistance": "No",
		"target": "One living or deceased sentient creature; see text"
	},
	{
		"name": "Holographic Image (Level 1)",
		"castingTime": "1 standard action",
		"shortText": "Create a silent hologram of your design.",
		"duration": "See text",
		"level": "1",
		"longText": "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 1st-level spell it produces a purely visual hologram at long range ((400+CASTERLEVEL*40) feet). The image has no sound smell texture or temperature. The image can't extend beyond (CASTERLEVEL+4) 10-foot cubes. The image lasts for as long as you concentrate. You can move the image within the limits of the size of the effect.",
		"range": "See text",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "No",
		"target": "See text",
		"technomancer": "1",
		"related": {
			"2": [
				"Holographic Image (Level 2)"
			],
			"3": [
				"Holographic Image (Level 3)"
			],
			"4": [
				"Holographic Image (Level 4)"
			],
			"5": [
				"Holographic Image (Level 5)"
			],
			"6": [
				"Holographic Image (Level 6)"
			]
		}
	},
	{
		"name": "Holographic Image (Level 2)",
		"castingTime": "1 standard action",
		"shortText": "Create a hologram with some sound of your design.",
		"duration": "See text",
		"level": "2",
		"longText": "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 2nd-level spell it produces a hologram as per the 1st-level version of the spell except the hologram can include minor sounds but not understandable speech. The image lasts for as long as you concentrate plus 2 additional rounds.",
		"range": "See text",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "No",
		"target": "See text",
		"technomancer": "2",
		"related": {
			"1": [
				"Holographic Image (Level 1)"
			],
			"3": [
				"Holographic Image (Level 3)"
			],
			"4": [
				"Holographic Image (Level 4)"
			],
			"5": [
				"Holographic Image (Level 5)"
			],
			"6": [
				"Holographic Image (Level 6)"
			]
		}
	},
	{
		"name": "Holographic Image (Level 3)",
		"castingTime": "1 standard action",
		"shortText": "Create a hologram with sound smell and thermal effects of your design that lasts as long as you concentrate plus 3 additional rounds.",
		"duration": "See text",
		"level": "3",
		"longText": "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 3rd-level spell it produces a hologram as per the 1st-level version of the spell except the hologram can include sound smell and thermal illusions (but not speech). The image disappears when it is struck by an opponent unless you cause the hologram to react appropriately. The image lasts for as long as you concentrate plus 3 additional rounds.",
		"range": "See text",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "No",
		"target": "See text",
		"technomancer": "3",
		"related": {
			"1": [
				"Holographic Image (Level 1)"
			],
			"2": [
				"Holographic Image (Level 2)"
			],
			"4": [
				"Holographic Image (Level 4)"
			],
			"5": [
				"Holographic Image (Level 5)"
			],
			"6": [
				"Holographic Image (Level 6)"
			]
		}
	},
	{
		"name": "Holographic Image (Level 4)",
		"castingTime": "1 standard action",
		"shortText": "Create a hologram with sound smell and thermal effects that follows a script determined by you.",
		"duration": "See text",
		"level": "4",
		"longText": "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 4th-level spell it produces a hologram as per the 3rd-level version of the spell except the hologram follows a script determined by you. It follows that script for (CASTERLEVEL) minutes without you having to concentrate on it. The hologram can include intelligible speech if you wish.",
		"range": "See text",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "No",
		"target": "See text",
		"technomancer": "4",
		"related": {
			"1": [
				"Holographic Image (Level 1)"
			],
			"2": [
				"Holographic Image (Level 2)"
			],
			"3": [
				"Holographic Image (Level 3)"
			],
			"5": [
				"Holographic Image (Level 5)"
			],
			"6": [
				"Holographic Image (Level 6)"
			]
		}
	},
	{
		"name": "Holographic Image (Level 5)",
		"castingTime": "1 standard action",
		"shortText": "Create a detailed hologram that is permanent or is triggered by conditions you set.",
		"duration": "See text",
		"level": "5",
		"longText": "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 5th-level spell it produces a hologram as per the 4th-level version of the spell except the size of the hologram can't extend beyond a (20+CASTERLEVEL*10)-foot cube. You can choose to make the hologram permanent at the time of casting. By concentrating you can move the image within the limits of the range but it is static while you are not concentrating. Alternatively you can have the hologram activate when a specific condition (which you set at the time of casting) occurs. The event that triggers the hologram can be as general or as specific and detailed as desired but it must be based on an audible olfactory tactile or visual trigger. The trigger can't be based on some quality not normally obvious to the senses such as alignment. The spell lasts until it is triggered and then the hologram lasts for (CASTERLEVEL) rounds.",
		"range": "See text",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "No",
		"target": "See text",
		"technomancer": "5",
		"related": {
			"1": [
				"Holographic Image (Level 1)"
			],
			"2": [
				"Holographic Image (Level 2)"
			],
			"3": [
				"Holographic Image (Level 3)"
			],
			"4": [
				"Holographic Image (Level 4)"
			],
			"6": [
				"Holographic Image (Level 6)"
			]
		}
	},
	{
		"name": "Holographic Image (Level 6)",
		"castingTime": "1 standard action",
		"shortText": "Illusory double of your likeness can talk and cast spells.",
		"duration": "See text",
		"level": "6",
		"longText": "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 6th-level spell it creates a quasi-real illusory version of yourself at medium range ((100+CASTERLEVEL*10) feet). This hologram looks sounds and smells like you but it is intangible. The hologram mimics your actions (including speech) unless you use a move action to direct it to act differently. You can see through its eyes and hear through its ears as if you were standing where it is and during your turn you can switch from using its senses to using your own or back again as a move action. While you are using its senses your body is considered blinded and deafened. If you desire any spell you cast with a range of touch or greater can originate from the hologram instead of from you. The hologram can't cast spells on itself except for illusion spells. Spells cast in this manner affect other targets normally despite originating from the hologram. An object isn't deceived by illusions (treat as if it had succeeded at its Will saving throw). The hologram remains for (CASTERLEVEL) rounds and you must maintain line of effect to the hologram at all times. If your line of effect is obstructed the spell ends. If you use dimension door plane shift teleport or a similar spell that breaks your line of effect even momentarily the spell ends. This casting of the spell is a shadow effect.",
		"range": "See text",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "No",
		"target": "See text",
		"technomancer": "6",
		"related": {
			"1": [
				"Holographic Image (Level 1)"
			],
			"2": [
				"Holographic Image (Level 2)"
			],
			"3": [
				"Holographic Image (Level 3)"
			],
			"4": [
				"Holographic Image (Level 4)"
			],
			"5": [
				"Holographic Image (Level 5)"
			]
		}
	},
	{
		"name": "Holographic Terrain",
		"castingTime": "1 standard action",
		"shortText": "Create a large hologram that depicts terrain and structures.",
		"duration": "(CASTERLEVEL*2) hours (D)",
		"level": "5",
		"longText": "You make terrain look sound and smell like some other sort of terrain. Equipment structures and vehicles within the area can be hidden or changed in appearance. The illusion includes audible olfactory tactile and visual elements and is effective against cameras living creatures robots and scrying spells. This spell can't disguise or add creatures nor can it make them invisible (though creatures within the area might hide themselves within the illusion just as they can hide themselves within a real location).",
		"range": "Long",
		"save": "Will disbelief",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "No",
		"target": "(CASTERLEVEL) twenty-foot cubes [S]",
		"technomancer": "5"
	},
	{
		"name": "Hoverdisk",
		"shortText": "Conjure a hovering disk to ride or transport cargo.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL",
		"level": "2",
		"longText": "You create a thin, circular plane of force 3 feet in diameter and able to hover up to 3 feet above the ground. When you cast this spell, you can give the disk general instructions, such as “Take me across this field of lava,” or “Take the rescued shirren back to town.” You can tell the disk to go to any location you are familiar with, and it follows these instructions without error, even traveling beyond the spell’s range. If you give the disk no instructions, it follows 5 feet behind you. The disk can carry up to 20 bulk for each caster level you have, has a fly speed of 60 feet (no higher than 3 feet), and can move beyond the spell’s range. It moves at your command or the command of a creature you designate, as a move action, and it raises and lowers itself on similar command, so getting on or off the disk can be done as part of the move action to move into the disk’s space. As a standard action, you can give the disk new general instructions. If the spell ends before the disk completes its task, the disk completes as much as it can before disappearing. When the disk disappears, whatever it was carrying falls to the surface beneath it.",
		"range": "Close; see text",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.136",
		"resistance": "No",
		"school": "evocation (force)",
        "technomancer": "2",
        "related": {
            "5":["Hoverdisk, Mass"]
        }
	},
	{
		"name": "Hoverdisk, Mass",
		"shortText": "Create several hovering disks of force for creatures to ride or to transport cargo.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL",
		"level": "5",
		"longText": "This spell functions as hoverdisk, except as noted above. As part of casting this spell, you can give a single set of instructions to all disks, or you can give separate instructions to each disk. You must spend a standard action to give new or additional instructions to any one disk, although you can give a group of disks the same instructions as part of the same action.",
		"range": "Medium; see text",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.137",
		"resistance": "No",
		"school": "evocation (force)",
		"technomancer": "5",
		"related": {
            "2":["Hoverdisk"]
        }
	},
	{
		"name": "Hurl Forcedisk",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Disc deals 3d6 force damage to one target then ricochets to other targets dealing 2d6 force damage.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You create a spinning disk made of pure shimmering force and hurl it at one opponent within range potentially striking other nearby enemies as the disk ricochets. Choose the initial target and make a ranged attack against its EAC. If the attack hits the disk deals 3d6 force damage. The disk then ricochets to hit up to four more creatures of your choice each no more than 15 feet from the last target. Make a ranged attack against each successive target's EAC in turn; the disk deals 2d6 force damage to each secondary target struck (this damage is rolled separately for each target). The disk continues to ricochet in this way until it has attempted to strike five creatures or until there are no more valid targets or until you voluntarily end the spell. A creature can take damage only once from a single casting of this spell. The forcedisk is subject to spell resistance so you must attempt a caster level check (1d20 + your caster level) against each target with spell resistance before determining whether the target might take damage. If you fail this check the spell ends. The exact shape of the forcedisk is superficially changeable; as part of casting this spell a spellcaster can decide to make it shaped differently from a traditional disk. For example using this spell to create a starknife made of force is popular among Desna's followers. The spell still deals the amount of damage described above regardless of the disk's shape.",
		"range": "Medium",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.360",
		"resistance": "Yes",
		"target": "Up to five creatures; see text"
	},
	{
		"name": "Id Insinuation",
		"shortText": "By invading targets with your psychic presence, you isolate parts of their minds, preventing them from functioning in a coherent manner.",
		"castingTime": "1 standard action",
		"duration": "Concentration + 1 round",
		"level": "3",
		"longText": "By invading targets with your psychic presence, you isolate parts of their minds, preventing them from functioning in a coherent manner. Targets who fail their save are confused for the duration. Each round, a target rolls twice to determine their behavior due to the confused condition, and you choose which result applies.",
		"range": "Close",
		"save": "Will negates",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.52",
		"resistance": "Yes",
		"target": "Up to one creature per CASTERLEVEL/4, no two of which can be more than 30 ft apart",
		"school": "enchantment (compulsion, mind-effecting)",
		"mystic": "3",
		"witchwarper": "3"
	},
	{
		"name": "Identify",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Gain a +10 bonus to identify items of a magic or technological nature.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "1",
		"longText": "This spell allows you to attempt to identify the function of a magic item (with Mysticism) or technological device (with Engineering) each round. You gain a +10 insight bonus to skill checks to identify the properties and command words or passwords of items targeted when using this spell. This spell does not allow you to identify artifacts.",
		"range": "5 ft.",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.361",
		"resistance": "No",
		"target": "One magic or technological object",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Illusory Star Field",
		"shortText": "Use illusory stars to grant a +3 bonus to Bluff checks made to convince creatures of their location.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL",
		"level": "1",
		"longText": "This spell causes targets to see an illusory star pattern, naturally occurring space phenomena, or another general skyscape you choose the details of during casting. The spell’s effects grant a +3 circumstance bonus to Bluff checks or related skill checks to convince the targets of something related to the false skyscape, such as their location on a planet according to the stars.",
		"range": "Close",
		"save": "Will disbelieves",
		"source": "Character Operations Manual",
		"page": "p.137",
		"resistance": "No",
		"target": "Up to 3 cratures per CASTERLEVEL, no two of which can be more than 20 ft apart",
		"school": "illusion",
		"mystic": "1"
	},
	{
		"name": "Implant Data",
		"castingTime": "1 standard action",
		"shortText": "Embed one piece of data per level in a target computer or system.",
		"duration": "(CASTERLEVEL) hours or until triggered; see text",
		"level": "2",
		"longText": "You subtly rearrange the internal circuitry of a computer system or module programming it to convey a certain dataset when accessed (either normally or if it is hacked). You can implant up to (CASTERLEVEL) pieces of data. A piece of data consists of a simple fact such as a creature or object's location or physical description a creature or object's tangible or intangible value or another simple statement. When an affected computer system or module is accessed this implanted data is the first data the accessing individual gains regardless of what data the individual is actually looking for though the accessing individual can access the system or module's actual information if it looks beyond the implanted data. The implanted data vanishes from the system or module once the accessing individual has reviewed it. If this spell's duration ends before an individual accesses the implanted data the implanted data vanishes. The implanted data can be made permanent with a special ritual which takes 1 hour and requires materials worth 5000 credits. Once it's made permanent the implanted data temporarily vanishes after it is accessed but it returns 1 hour later.",
		"range": "Touch",
		"save": "None",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.361",
		"resistance": "No",
		"target": "One computer system or module",
		"technomancer": "2"
	},
	{
		"name": "Incompetence",
		"shortText": "Targeted creatures lose proficiency with one type of weapons",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "1",
		"longText": "You cause all targets of this spell to lose proficiency with one class of weapons of your choice (basic or advanced melee weapons, small arms, longarms, heavy weapons, grenades, or natural weapons) and suffer the normal penalties for attacks made with weapons they are not proficient with.",
		"range": "Close",
		"save": "Will negates",
		"source": "Starfinder Armory",
		"page": "p.157",
		"resistance": "Yes",
		"target": "One creature per CASTERLEVEL",
		"school": "enchantment (mind-effecting)",
		"technomancer": "1"
	},
	{
		"name": "Infect Blood",
		"shortText": "Alter a target’s blood to deal 3d8 damage per round and impose the sickened condition.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "3",
		"longText": "You alter the target’s internal chemistry, causing their body to reject its composition. The target takes 3d8 damage each round, but can attempt a Fortitude save for half damage, and has the sickened condition for the duration.",
		"range": "Close",
		"save": "Fortitude half; see text",
		"source": "Character Operations Manual",
		"page": "p.137",
		"resistance": "Yes",
		"target": "One living creature",
		"school": "transmutation",
		"technomancer": "3"
	},
	{
		"name": "Inflict Pain",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Wracking pain imposes -2 penalty to ability checks attack rolls and skill checks on one target.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "2",
		"longText": "You telepathically rack the target's mind and body with agonizing pain that imposes a -2 penalty to ability checks attack rolls and skill checks. A target that succeeds at a Will saving throw reduces the duration to 1 round.",
		"range": "Close",
		"save": "Will partial see text",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.361",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"6": [
				"Inflict Pain (Mass)"
			]
		}
	},
	{
		"name": "Inflict Pain (Mass)",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Wracking pain imposes -2 penalty to ability checks attack rolls and skill checks on (CASTERLEVEL) targets.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "6",
		"longText": "You telepathically rack the targets' minds and bodies with agonizing pain that imposes a -2 penalty to ability checks attack rolls and skill checks. A target that succeeds at a Will saving throw reduces the duration to 1 round.",
		"range": "Close",
		"save": "Will partial see text",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.361",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"related": {
			"2": [
				"Inflict Pain"
			]
		}
	},
	{
		"name": "Inject Nanobots",
		"castingTime": "1 standard action",
		"shortText": "Touch deals 4d8 damage to target and causes the confused condition.",
		"duration": "Instantaneous and (CASTERLEVEL) rounds; see text",
		"level": "2",
		"longText": "You concentrate key particles in your blood into tiny biological nanobots that you can inject into a foe with a touch disrupting and damaging its natural processes. Make a melee attack against the target's EAC; if you hit the nanobots deal 4d8 damage and swarm through the target's biological or mechanical systems causing the creature to be confused as per confusion for (CASTERLEVEL) rounds. If the target succeeds at a Fortitude save it takes only half damage and negates the confusion effect. A confused target can attempt a Will saving throw at the beginning of its turn each round to end the confusion effect. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude partial and Will partial see text",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.361",
		"resistance": "Yes",
		"target": "One living creature or construct",
		"technomancer": "2"
	},
	{
		"name": "Instant Upgrade",
		"shortText": "Briefly conjure a cybernetic augmentation.",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "2",
		"longText": "You conjure bits of technology infused with magic to create one functional, temporary cybernetic augmentation with a level equal to or lower than your caster level. You decide which cybernetic augmentation to create when you cast this spell. The target must have the chosen system available for augmentation. If the target’s chosen system already has its maximum number of augmentations, this spell has no effect. The augmentation appears without harm and functions for the spell’s duration, dissipating harmlessly into nothing when the spell ends.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.137",
		"resistance": "No",
		"target": "One willing creature",
		"school": "conjuration (creation)",
		"technomancer": "2"
	},
	{
		"name": "Instant Virus",
		"castingTime": "1 standard action",
		"shortText": "Inflict technological construct with disease.",
		"duration": "Instantaneous; see text",
		"level": "3",
		"longText": "You overwhelm your target's programming installing a dangerous self-replicating programming virus. This works like a physical or mental disease (your choice) except it ignores the target's immunity to diseases. The programming virus has a frequency of 1 hour and requires two consecutive saving throws to cure. Detect affliction can reveal the existence of this virus in a construct (the virus is considered a disease for purposes of that spell). Additionally remove affliction can remove this virus.",
		"range": "Touch",
		"save": "Fortitude negates see text",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.361",
		"resistance": "Yes",
		"target": "One construct with the technological subtype",
		"technomancer": "3"
	},
	{
		"name": "Intellect Fortress",
		"shortText": "When you or a creature within range is subjected to a mind‑affecting effect while this spell is active, you disrupt it with the power of pure logic.",
		"castingTime": "1 reaction",
		"area": "20 ft radius spherical emanation centered on you",
		"duration": "1 round",
		"level": "3",
		"longText": "When you or a creature within range is subjected to a mind‑affecting effect while this spell is active, you disrupt it with the power of pure logic. Mind-affecting effects deal only half damage—including ability score damage—to creatures in the area, before any reduction due to successful saves or other effects. When a creature within the area succeeds at a saving throw against an emotion or fear effect, they are not affected by that effect, even if that effect would have a partial effect on a successful saving throw. Ongoing emotion and fear effects are also suppressed for creatures within the area.",
		"range": "20 ft",
		"save": "None",
		"source": "Starfinder #23: Hive of Minds",
		"page": "p.52",
		"resistance": "Yes (Harmless)",
		"school": "abjuration",
		"mystic": "3",
		"technomancer": "3"
	},
	{
		"name": "Interplanetary Teleport",
		"castingTime": "1 standard action",
		"shortText": "Teleport between planets.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "This spell functions as teleport except there is no hard range limit and you don't need to have seen your destination. You can teleport to anywhere you are familiar with on the planet you are on while casting the spell or you can teleport to any other planet in the same solar system. You must have an unambiguous idea of which world you wish to travel to (the third planet from the sun is an acceptable destination but a habitable world with oceans is not). If you have a specific location on a planet in mind you arrive there without a chance of failure; otherwise you arrive at a location that would not immediately be life threatening. If no such safe landing zone exists on the world such as someone attempting to travel into the sun without the proper precautions in place the spell simply fails. You can also attempt to teleport to planets in different solar systems that you have visited before. This increases the casting time to 1 hour and costs a number of Resolve Points equal to the number of days it would take to reach the planet through Drift travel (assume a base engine with a Drift rating of 1; the GM rolls this randomly after you begin casting the spell). If you don't have enough Resolve Points you spend all the Resolve Points you have available and the spell fails.",
		"range": "Solar system or plane; see text",
		"save": "None Will negates (object)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.362",
		"resistance": "No yes (object)",
		"target": "You and touched objects or touched willing or unconscious creatures",
		"technomancer": "6"
	},
	{
		"name": "Invisibility",
		"castingTime": "1 standard action",
		"shortText": "Target is invisible for (CASTERLEVEL) minutes or until it attacks.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "2",
		"longText": "The creature or object touched becomes invisible (see page 264). If the target is a creature any gear it is carrying vanishes as well. If you cast the spell on someone else neither you nor your allies can see the target unless you can normally see invisible things or you employ magic to do so. The spell ends if the target attacks any creature. For purposes of this spell an attack includes any spell or harmful effect targeting a foe or whose area or effect includes a foe. Actions directed at unattended objects don't break the spell. Spells that specifically affect allies but not foes are not attacks for this purpose even when they include foes in their area. Causing harm indirectly is not an attack. Thus an invisible being can open doors talk eat climb stairs summon security forces and have them attack start a trash compactor with foes inside remotely trigger traps and so forth.",
		"range": "Touch",
		"save": "Will negates (harmless object) see text",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.362",
		"resistance": "Yes (harmless object)",
		"target": "One creature or object no more than (CASTERLEVEL*10) bulk",
		"technomancer": "2",
		"related": {
			"4": [
				"Invisibility (Greater)"
			],
			"6": [
				"Invisibility (Mass)"
			]
		},
		"witchwarper": "2"
	},
	{
		"name": "Invisibility (Greater)",
		"castingTime": "1 standard action",
		"shortText": "Target is invisible for (CASTERLEVEL) rounds even if it attacks.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "4",
		"longText": "The creature or object touched becomes invisible (see page 264). If the target is a creature any gear it is carrying vanishes as well. If you cast the spell on someone else neither you nor your allies can see the target unless you can normally see invisible things or you employ magic to do so. This spell doesn't end if the target attacks.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.362",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"technomancer": "4",
		"related": {
			"2": [
				"Invisibility"
			],
			"6": [
				"Invisibility (Mass)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Invisibility (Mass)",
		"castingTime": "1 standard action",
		"shortText": "Multiple targets are invisible for (CASTERLEVEL) minuts or until one target attacks or moves away from other targets affected by spell.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "6",
		"longText": "This spell functions like invisibility except the effect moves with the group and is broken when anyone in the group attacks. Individuals in the group can't see one another. Any individual who moves more than 180 feet from the nearest member of the group loses the benefit of this spell. If only two individuals are affected the one moving away from the other one loses its invisibility. If both are moving away from each other they both become visible when the distance between them exceeds 180 feet.",
		"range": "Long",
		"save": "Will negates (harmless object) see text",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.362",
		"resistance": "Yes (harmless object)",
		"target": "Any number of creatures no two of which can be more than 180 ft. apart",
		"technomancer": "6",
		"related": {
			"2": [
				"Invisibility"
			],
			"4": [
				"Invisibility (Greater)"
			]
		},
		"witchwarper": "6"
	},
	{
		"name": "Invisibility To Technology",
		"shortText": "Technological items can’t detect target.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "2",
		"longText": "The target and its gear cannot be detected by cameras, motion detectors, technological armor upgrades such as infrared sensors, biotech and cybernetic eyes or ears, or other technological devices, and it is invisible to constructs with the technological subtype. The target is missing from technological images captured while the spell lasts, security cameras do not display the target, microphones pick up no sounds the target makes, and the target cannot trigger technological traps. This spell creates disadvantages for the target, as well. Talking on a comm unit is impossible while subjected to this spell, and automatic doors do not open for the target. Items dropped, put down, or thrown by the target become visible to technology. Items picked up disappear if tucked into clothing or a bag carried by the target. Light remains visible to technology, but a source of light might be invisible. If any part of an item the target carries extends more than 10 feet from the target, that part becomes visible to technology. This spell ends under the same circumstances as an invisibility spell.",
		"range": "Touch",
		"save": "Will negates (harmless, object)",
		"source": "Character Operations Manual",
		"page": "p.137",
		"resistance": "Yes (harmless, object)",
		"target": "One creature or object",
		"school": "illusion",
		"technomancer": "2"
	},
	{
		"name": "Irradiate",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Flood area with dangerous radiation.",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "This spell floods the area of effect with dangerous radiation. The strength of the radiation you create depends on your caster level as detailed below. The central irradiated area is always a 10-foot-radius spread that expands normally per the rules for radiation areas of effect (see page 403). Creatures within the area are exposed to the radiation only once; the radiation does not linger in the area. The saving throw to resist the radiation effects is set by the spell rather than the standard save DC for radiation. Caster Level - 6th or lower Low Radiation Level; 7th-9th - Medium Radiation Level; 10th-16th - High Radiation Level; 17th or higher - Severe Radiation Level",
		"range": "Medium",
		"save": "Fortitude partial see text",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.362",
		"resistance": "No",
		"target": "10-ft.-radius spread; see text",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Jolting Surge",
		"castingTime": "1 standard action",
		"shortText": "Touch deals 4d6 electricity damage.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You touch a target with a device you're holding that uses electricity requiring a melee attack against the target's EAC. Alternatively you can instead touch an electrical device a target is wearing (or a target that is an electrical device such as a robot) with your hand gaining a +2 bonus to your attack roll. Either way if your attack hits the electrical device surges out of control dealing 4d6 electricity damage to your target. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.363",
		"resistance": "Yes",
		"target": "One creature or object",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Junk Armor",
		"shortText": "Turn junk into light armor or upgrade light armor to heavy armor",
		"castingTime": "1 standard action",
		"duration": "24 hours",
		"level": "1",
		"longText": "You turn a pile of technological junk into a suit of light armor, or use it to upgrade a suit of light armor to heavy armor. You must target inert, nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system, nonworking or unconnected computer or robot parts, a destroyed robot or another such trashed mechanical system, or any related electronic components or combination of the above, as long as the junk is found in sufficient quantity. You can cause the armor to be created on yourself or an adjacent willing or unconscious ally. Light or heavy armor you create requires proficiency to use without penalties as normal. If you use this spell to create light armor, the armor has an EAC bonus equal to your caster level, a KAC bonus equal to your caster level + 2, and a maximum Dex bonus equal to 1 + onequarter your caster level. Using junk armor to temporarily turn light armor into heavy armor increases the armor’s EAC bonus by 1 and its KAC bonus by 2, reduces its maximum Dexterity bonus by 3, and worsens its armor check penalty by 2.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "at least 1 bulk of inert electronic equipment",
		"school": "conjuration (creation)",
		"technomancer": "1"
	},
	{
		"name": "Junksword (Level 1)",
		"shortText": "Turn junk into a one-handed melee weapon",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "1",
		"longText": "You turn a pile of technological junk into a one-handed melee weapon that you can wield against your foes. You must target inert, nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system, nonworking or unconnected computer or robot parts, a destroyed robot or another such trashed mechanical system, or any related electronic components or combination of the above, as long as the junk is found in sufficient quantity. You are automatically proficient with this melee weapon, and you add 1-1/2 times your caster level to damage rolls with it (in place of a Weapon Specialization bonus). A junksword functions only for its creator, and once created it cannot leave your hand. Should you wish to sheathe it, the junksword obliges by collapsing into a wreath of junk that surrounds your hand like a glove. You can grant your junksword additional abilities based on the spell’s level. You can change one modification to your junksword as a move action, or you can completely reconfigure all of its modifications as a full action. 1st: Your junksword deals 1d4 bludgeoning and slashing damage and has the analog weapon special property. In addition, you can grant your junksword up to two of the following special properties: block, disarm, nonlethal, reach, or trip.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment",
		"school": "conjuration (creation)",
		"technomancer": "1",
		"related":{
            "2":["Junksword (Level 2)"],
            "3":["Junksword (Level 3)"],
            "4":["Junksword (Level 4)"],
            "5":["Junksword (Level 5)"],
            "6":["Junksword (Level 6)"]
        }
    },
    {
		"name": "Junksword (Level 2)",
		"shortText": "Turn junk into a one-handed melee weapon",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "2",
		"longText": "You turn a pile of technological junk into a one-handed melee weapon that you can wield against your foes. You must target inert, nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system, nonworking or unconnected computer or robot parts, a destroyed robot or another such trashed mechanical system, or any related electronic components or combination of the above, as long as the junk is found in sufficient quantity. You are automatically proficient with this melee weapon, and you add 1-1/2 times your caster level to damage rolls with it (in place of a Weapon Specialization bonus). A junksword functions only for its creator, and once created it cannot leave your hand. Should you wish to sheathe it, the junksword obliges by collapsing into a wreath of junk that surrounds your hand like a glove. You can grant your junksword additional abilities based on the spell’s level. You can change one modification to your junksword as a move action, or you can completely reconfigure all of its modifications as a full action. 2nd: Your junksword deals 1d8 bludgeoning and slashing damage and has the analog weapon special property. In addition, you can grant your junksword up to three of the special properties from the 1st-level list.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment",
		"school": "conjuration (creation)",
		"technomancer": "2",
		"related":{
            "1":["Junksword (Level 1)"],
            "3":["Junksword (Level 3)"],
            "4":["Junksword (Level 4)"],
            "5":["Junksword (Level 5)"],
            "6":["Junksword (Level 6)"]
        }
    },
    {
		"name": "Junksword (Level 3)",
		"shortText": "Turn junk into a one-handed melee weapon",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "3",
		"longText": "You turn a pile of technological junk into a one-handed melee weapon that you can wield against your foes. You must target inert, nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system, nonworking or unconnected computer or robot parts, a destroyed robot or another such trashed mechanical system, or any related electronic components or combination of the above, as long as the junk is found in sufficient quantity. You are automatically proficient with this melee weapon, and you add 1-1/2 times your caster level to damage rolls with it (in place of a Weapon Specialization bonus). A junksword functions only for its creator, and once created it cannot leave your hand. Should you wish to sheathe it, the junksword obliges by collapsing into a wreath of junk that surrounds your hand like a glove. You can grant your junksword additional abilities based on the spell’s level. You can change one modification to your junksword as a move action, or you can completely reconfigure all of its modifications as a full action. 3rd: Your junksword has either the analog or powered (capacity 30, usage 2) weapon special property (your choice). It deals 2d4 bludgeoning and slashing damage if it’s an analog weapon, or 2d4 electricity damage if it’s a powered weapon. In addition, you can grant your junksword up to three of the special properties from the 1st-level list, plus the staggered critical effect. If you select the powered option, your junksword’s battery is integrated and cannot be removed, recharged, replaced, or used to power other devices.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment",
		"school": "conjuration (creation)",
		"technomancer": "3",
		"related":{
            "1":["Junksword (Level 1)"],
            "2":["Junksword (Level 2)"],
            "4":["Junksword (Level 4)"],
            "5":["Junksword (Level 5)"],
            "6":["Junksword (Level 6)"]
        }
    },
    {
		"name": "Junksword (Level 4)",
		"shortText": "Turn junk into a one-handed melee weapon",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "4",
		"longText": "You turn a pile of technological junk into a one-handed melee weapon that you can wield against your foes. You must target inert, nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system, nonworking or unconnected computer or robot parts, a destroyed robot or another such trashed mechanical system, or any related electronic components or combination of the above, as long as the junk is found in sufficient quantity. You are automatically proficient with this melee weapon, and you add 1-1/2 times your caster level to damage rolls with it (in place of a Weapon Specialization bonus). A junksword functions only for its creator, and once created it cannot leave your hand. Should you wish to sheathe it, the junksword obliges by collapsing into a wreath of junk that surrounds your hand like a glove. You can grant your junksword additional abilities based on the spell’s level. You can change one modification to your junksword as a move action, or you can completely reconfigure all of its modifications as a full action. 4th: This functions as the 3rd-level junksword, but it deals 2d8 bludgeoning and slashing damage if it’s an analog weapon or 3d4 damage if it’s a powered weapon, and it gains the stunned critical effect (rather than staggered).",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment",
		"school": "conjuration (creation)",
		"technomancer": "4",
		"related":{
            "1":["Junksword (Level 1)"],
            "2":["Junksword (Level 2)"],
            "3":["Junksword (Level 3)"],
            "5":["Junksword (Level 5)"],
            "6":["Junksword (Level 6)"]
        }
    },
    {
		"name": "Junksword (Level 5)",
		"shortText": "Turn junk into a one-handed melee weapon",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "5",
		"longText": "You turn a pile of technological junk into a one-handed melee weapon that you can wield against your foes. You must target inert, nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system, nonworking or unconnected computer or robot parts, a destroyed robot or another such trashed mechanical system, or any related electronic components or combination of the above, as long as the junk is found in sufficient quantity. You are automatically proficient with this melee weapon, and you add 1-1/2 times your caster level to damage rolls with it (in place of a Weapon Specialization bonus). A junksword functions only for its creator, and once created it cannot leave your hand. Should you wish to sheathe it, the junksword obliges by collapsing into a wreath of junk that surrounds your hand like a glove. You can grant your junksword additional abilities based on the spell’s level. You can change one modification to your junksword as a move action, or you can completely reconfigure all of its modifications as a full action. 5th: This functions as the 3rd-level casting of junksword, but the junksword deals 3d10 bludgeoning and slashing damage if it’s an analog weapon or 3d6 electricity damage if it’s a powered weapon, and it gains the stunned critical effect (rather than staggered).",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment",
		"school": "conjuration (creation)",
		"technomancer": "5",
		"related":{
            "1":["Junksword (Level 1)"],
            "2":["Junksword (Level 2)"],
            "3":["Junksword (Level 3)"],
            "4":["Junksword (Level 4)"],
            "6":["Junksword (Level 6)"]
        }
    },
    {
		"name": "Junksword (Level 6)",
		"shortText": "Turn junk into a one-handed melee weapon",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "6",
		"longText": "You turn a pile of technological junk into a one-handed melee weapon that you can wield against your foes. You must target inert, nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system, nonworking or unconnected computer or robot parts, a destroyed robot or another such trashed mechanical system, or any related electronic components or combination of the above, as long as the junk is found in sufficient quantity. You are automatically proficient with this melee weapon, and you add 1-1/2 times your caster level to damage rolls with it (in place of a Weapon Specialization bonus). A junksword functions only for its creator, and once created it cannot leave your hand. Should you wish to sheathe it, the junksword obliges by collapsing into a wreath of junk that surrounds your hand like a glove. You can grant your junksword additional abilities based on the spell’s level. You can change one modification to your junksword as a move action, or you can completely reconfigure all of its modifications as a full action. 6th: This functions as the 3rd-level casting of junksword, but the junksword deals 6d6 bludgeoning and slashing damage if it’s an analog weapon or 3d8 electricity damage if it’s a powered weapon, and it gains the stunned critical effect (rather than staggered). Additionally, you can grant the junksword one of the following weapon fusions: dispelling, entangling, ghost killer, merciful, or spellthrower.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.205",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment",
		"school": "conjuration (creation)",
		"technomancer": "6",
		"related":{
            "1":["Junksword (Level 1)"],
            "2":["Junksword (Level 2)"],
            "3":["Junksword (Level 3)"],
            "4":["Junksword (Level 4)"],
            "5":["Junksword (Level 5)"]
        }
	},
	{
		"name": "Keen Senses",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Target gains low-light vision and a +2 bonus to Perception checks.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "1",
		"longText": "The target gains a +2 insight bonus to Perception checks and gains low-light vision. Targets that have low-light vision double the distance they can see under the effects of this spell.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.363",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"technomancer": "1"
	},
	{
		"name": "Knock",
		"castingTime": "1 standard action",
		"shortText": "Opens a locked or magically sealed door.",
		"duration": "Instantaneous; see text",
		"level": "2",
		"longText": "Knock opens barred computer-sealed locked or stuck doors as well as those subject to hold portal or security seal. When you complete the casting of this spell attempt a caster level check (1d20 + your caster level) against the DC of the lock or computer seal with a +10 bonus. If successful knock opens up to two means of closure. This spell opens secret doors (but doesn't identify secret doors you haven't found) as well as locked or trick-opening containers starship doors and similar secured entryways. It also loosens chains shackles or welds (provided they serve to hold something shut). If used to open a door closed with security seal the spell doesn't remove the seal but simply suspends its functioning for 10 minutes. In all other cases the door does not relock itself or become stuck again on its own. Knock does not raise barred gates or similar impediments (such as a force field barrier) or open any door or container larger than the spell's area nor does it affect ropes webs and the like.",
		"range": "Medium",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.363",
		"resistance": "No",
		"target": "One door container or portal with an area of up to (CASTERLEVEL*10) sq. ft.",
		"technomancer": "2",
		"witchwarper": "2"
	},
	{
		"name": "Know Coordinates",
		"shortText": "Briefly conjure a cybernetic augmentation.Learn the exact location of one creature on the same world as you.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You learn the exact location of one creature on the same planetary body as you, up to the size of a large planet, such as a gas giant. You must be able to identify the creature clearly from personal knowledge of who they are. If you and the creature you identify are not on the same planet-sized body, the spell fails. You can input the coordinates into any computer attached to an infosphere on the same planet to find general directions. If you use the Piloting skill’s navigation task to reach the coordinates, these directions make your familiarity seldom visited (DC 15) even if the area would normally be unfamiliar.",
		"range": "Personal",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.137",
		"resistance": "No",
		"target": "Self",
		"school": "divination",
		"mystic": "1",
		"technomancer": "1"
	},
	{
		"name": "Laser Net",
		"shortText": "Fill a chamber or hall with deadly laser beams.",
		"castingTime": "1 standard action",
		"area": "20 ft radius spread",
		"duration": "1 minute per CASTERLEVEL",
		"level": "2",
		"longText": "This spell creates a net of dangerous lasers between two solid points. The net can appear only if there are appropriate anchoring surfaces at both ends of the beams, such as two walls, a wall and a ceiling, or the like. Otherwise, the spell fails. Creatures that move through the laser net must succeed at a Reflex saving throw or take 1d6+1 fire damage per 5 feet of laser net they move through. Creatures that move no more than 5 feet in the laser net receive a +2 circumstance bonus to this saving throw, but creatures that move through more than 15 feet of the laser net in a single turn take a –2 penalty to the saving throw.",
		"range": "Medium",
		"save": "Reflex negates",
		"source": "Character Operations Manual",
		"page": "p.137",
		"resistance": "No",
		"school": "conjuration",
		"technomancer": "2"
	},
	{
		"name": "Life Bubble",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Encase targeted creatures with a shell of tolerable atmosphere.",
		"duration": "(CASTERLEVEL) days",
		"level": "1",
		"longText": "You surround the target creatures with a constant and movable 1-inch shell of tolerable living conditions customized for each creature. This shell enables the targets to breathe freely in a variety of atmospheric conditions (including in corrosive thick thin and toxic atmospheres) as well as underwater or in a vacuum. It also makes the targets immune to harmful gases and vapors including inhaled diseases and poisons as well as spells with a harmful gaseous effect. In addition the shell protects targets (and their equipment) from extreme temperatures (between -50 and 140 F) without having to attempt Fortitude saving throws as well as extreme pressures. Life bubble doesn't provide protection from energy damage negative or positive energy (such as found on the Negative and Positive Energy Planes) or radiation; it also doesn't provide the ability to see in conditions of poor visibility (such as in smoke or fog) or the ability to move or act normally in conditions that impede movement (such as underwater).",
		"range": "Medium",
		"save": "Will negates (harmless)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.363",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Lifting Frame",
		"shortText": "Holographic lifting frame increases the target’s Strength modifier for carrying capacity and destroying objects.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "1",
		"longText": "You create a holographic lifting frame around the target to subtly reinforce the target’s musculature and posture. For the duration, the target’s Strength modifier is +5 for carrying capacity and destroying objects using Strength.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.138",
		"resistance": "No",
		"target": "One willing creature",
		"school": "transmutation",
		"technomancer": "1"
	},
	{
		"name": "Logic Bomb",
		"castingTime": "1 standard action",
		"shortText": "Target computer deals 6d6 energy damage to the first creature that tries and fails to use it.",
		"duration": "(CASTERLEVEL) days or until triggered",
		"level": "2",
		"longText": "You infuse one computer system or module with protective energy inuring it against attempts to access it. As long as this spell is in effect the first time a creature unsuccessfully attempts to access destroy or manipulate the affected computer system or module (using the Computers skill or otherwise) it takes 6d6 damage (either cold electricity or fire damage; you choose when casting the spell and the spell gains the appropriate descriptor). The creature can attempt a Fortitude saving throw for half damage and spell resistance applies. This damage is in addition to any negative effects the creature suffers due to the system's other countermeasures.",
		"range": "Touch",
		"save": "See text",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.364",
		"resistance": "See text",
		"target": "One computer system or module",
		"technomancer": "2"
	},
	{
		"name": "Magic Missile",
		"castingTime": "1 standard action; see text",
		"shortText": "Two missiles deal 1d4+1 force damage.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You fire two missiles of magical energy that strike targets unerringly (the creatures must still be valid targets) and deal 1d4+1 force damage each. You can't target specific parts of a creature and objects are not damaged by the spell. You can target a single creature or several creatures but each missile can strike only one creature. You must designate targets before you attempt to overcome spell resistance or roll damage. You can cast this spell as a full action. If you do you fire three missiles instead of two.",
		"range": "Medium",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.364",
		"resistance": "Yes",
		"target": "Up to three creatures no two of which can be more than 15 ft. apart; see text",
		"technomancer": "1"
	},
	{
		"name": "Make Whole",
		"castingTime": "10 minutes",
		"shortText": "Restore 1d4 Hit Points to an object or construct.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "This spell functions as mending except it restores 5d6 Hit Points when cast on an object or construct creature. Make whole can fix destroyed magic items and it restores the magic properties of the item if your technomancer level is at least twice the item's level. Items with charges (such as batteries) and single-use items (such as potions and grenades) can't be repaired in this way. When you cast make whole on a construct the spell bypasses any immunity to magic as if the spell did not allow spell resistance.",
		"range": "Close",
		"save": "Will negates (harmless object)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.364",
		"resistance": "Yes (harmless object)",
		"target": "One object of up to (CASTERLEVEL) bulk or one construct of any size",
		"technomancer": "2",
		"witchwarper": "2"
	},
	{
		"name": "Manipulate Tech",
		"shortText": "Operate a weapon or technological item from a distance.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You can briefly align your will to the circuitry or structure of an unattended technological weapon or a technological item with a usage entry, provided the target has an item level equal to or lower than your caster level + 3. The target can even have the broken condition. When you do so, you can cause the item to act as if you activated it without moving it from its space. If the target is a weapon, you can cause it to fire or activate for the rest of your turn. Then, you can make one attack against a creature in range using your ranged attack bonus plus your Intelligence modifier or your melee attack bonus plus your Intelligence modifier, whichever is applicable for the weapon you activate. If the target is a technological item with a usage entry, the item activates for the time listed in that usage entry. This spell provides any charges or ammunition used by your activation.",
		"range": "Close",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.138",
		"resistance": "No",
		"target": "One piece of unattended technology; see text",
		"school": "transmutation",
		"technomancer": "2"
	},
	{
		"name": "Megavitamin",
		"shortText": "Create a small number of nutritional supplements.",
		"castingTime": "1 standard action",
		"duration": "24 hours",
		"level": "1",
		"longText": "You create 2d4 powerful vitamins. One of these supplements meets its eater’s food needs for 24 hours and causes the eater to regain 1 Hit Point. A creature can regain no more than 8 Hit Points from any megavitamin spell in a 24-hour period.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.138",
		"resistance": "No",
		"school": "conjuration",
		"effect": "2d4 vitamins",
		"mystic": "1"
	},
	{
		"name": "Mending",
		"castingTime": "10 minutes",
		"shortText": "Restore 5d6 Hit Points to an object or construct.",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "This spell repairs damaged objects and constructs restoring 1d4 Hit Points. If the object has the broken condition this condition is removed if the object is restored to at least half its original Hit Points. All of the pieces of an object must be present for this spell to function. A construct can benefit from this spell only once per day. Magic items can be repaired by this spell but magic items that are destroyed don't have their magic abilities restored. This spell doesn't reverse effects that warp or otherwise transmute items but it can still repair damage dealt to such items.",
		"range": "10 ft.",
		"save": "Will negates (harmless object)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.364",
		"resistance": "Yes (harmless object)",
		"target": "One object of up to 1 bulk",
		"technomancer": "0",
		"witchwarper": "0"
	},
	{
		"name": "Mental Block",
		"shortText": "Cause creatures to forget how to use their feats and abilities",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "3",
		"longText": "You cause targets of this spell to lose access to their procedural memory, preventing them from using any feat, extraordinary ability, spell, spell-like ability, or supernatural ability that requires an action of any kind. Each round at the end a target’s turn, that target can attempt another Will save to end this effect.",
		"range": "Medium",
		"save": "Will negates",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes",
		"target": "up to one creature per CASTERLEVEL, no two of which can be more than 30 ft apart",
		"school": "enchantment (mind-affecting)",
		"mystic": "3",
		"technomancer": "3"
	},
	{
		"name": "Mental Silence",
		"shortText": "You create an anti-telepathic field around yourself.",
		"castingTime": "1 standard action",
		"area": "30 ft radius spread centered on you",
		"duration": "1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "You create an anti-telepathic field around yourself. A creature within the area attempting to communicate or gain information using telepathy or limited telepathy, or attempting to cast the spells detect thoughts, mind link, mind probe, telepathic bond, telepathic message, or telepathy—or abilities that work as those spells, such as the mindlink and telepathic bond mystic class features—must succeed at a caster level check (DC = 15 + your caster level). On a failure, the effect targeting you fails.",
		"range": "30 ft",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.22",
		"resistance": "No",
		"school": "abjuration",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Miasma",
		"shortText": "Create air that sickens those who breathe it.",
		"castingTime": "1 standard action",
		"area": "30 ft radius spread",
		"duration": "1 round per CASTERLEVEL",
		"level": "4",
		"longText": "You turn the atmosphere in your immediate area into a hazy, green miasma that does not flow like normal air. It instead remains in its area for the duration and penetrates armor environmental protections. Creatures within the miasma have concealment against attackers. A creature that breathes in the miasma must attempt a Fortitude saving throw. On a failure, the creature is nauseated while it remains in the area and is sickened for a number of rounds equal to your caster level once it leaves the area. If the creature succeeds at its saving throw, it is instead sickened while in the spell’s area and unaffected after leaving that area. If a creature leaves the spell’s area but reenters it, the creature must attempt a new saving throw.",
		"range": "Medium",
		"save": "Fortitude partial",
		"source": "Character Operations Manual",
		"page": "p.138",
		"resistance": "No",
		"school": "conjuration (creation, poison)",
		"mystic": "4",
		"witchwarper": "4"
	},
	{
		"name": "Microbot Assault",
		"castingTime": "1 standard action",
		"shortText": "Cloud of tiny robots harasses creatures within it.",
		"duration": "Concentration + 1 round",
		"level": "2",
		"longText": "You pull latent technological energy from the air to form a cloud of fist-sized hindering microbots that fill an area you designate. The microbots begin in a 10-foot-square area when you create them and you can create the cloud so that it shares the space of other creatures. If no creatures are within the cloud's area the microbots pursue and harass the nearest creature that is hostile to you as best they can each round. Although the microbots generally know which creatures are your enemies you have no control over their targets or direction of travel. If there are multiple valid targets the microbots can harass the cloud will split into a maximum of four 5-foot-square segments and pursue different targets. The cloud (and any segments thereof) has a fly speed of 20 feet. Each round on your turn the microbot cloud grants harrying fire (see page 247) against the foes in its spaces. In addition the cloud grants covering fire (see page 246) to anyone attacked by foes in its spaces. The microbots constantly repair themselves and the cloud generates new microbots every few seconds so any attack against them is essentially ineffective.",
		"range": "Close",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.364",
		"resistance": "No",
		"target": "Distracting cloud of microbots",
		"technomancer": "2"
	},
	{
		"name": "Might Of The Ellicoth",
		"shortText": "Increase the amount of bulk a creature can carry",
		"castingTime": "1 standard action",
		"duration": "24 hours",
		"level": "1",
		"longText": "With a touch, you cause a surge of power to flow through the target’s slow-twitch muscle fiber (or its equivalent physiology if it has no muscle fibers), increasing the amount of bulk the creature can carry by 3.",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"school": "transmutation",
		"mystic": "1"
	},
	{
		"name": "Mind Link",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Instantly and telepathically communicate information to a creature.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You link your mind to that of a touched creature to swiftly communicate a large amount of complex information in an instant. You decide what the target learns limited to any amount of information that otherwise could be communicated in 10 minutes. This information comes in a series of visual images and emotional sensations and it isn't language dependent.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes (harmless)",
		"target": "One creature"
	},
	{
		"name": "Mind Probe",
		"mystic": "4",
		"castingTime": "1 minute",
		"shortText": "Potentially access a target creature's memories and its knowledge.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "4",
		"longText": "You gain access to the target's memories and knowledge and you can pry the information you want from them involuntarily. You can attempt to learn the answer to one question of your choice per round; after each question the target can attempt a Will saving throw to end the spell. If it fails the creature can attempt a Bluff check with a DC equal to 11 + your Sense Motive modifier. If it fails its Bluff check you gain the answer you desire. If it succeeds at its check you gain no information. If it succeeds by 5 or more it answers however it chooses and you believe that wrong answer to be the truth. Your questions are purely telepathic inquiries and the answers to those questions are imparted directly into your mind. You and the target don't need to speak the same language though less intelligent creatures may yield up only appropriate sensory images in answer to your questions.",
		"range": "Close",
		"save": "Will negates see text",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes",
		"target": "One creature"
	},
	{
		"name": "Mind Swap",
		"shortText": "Swap your mind with the target",
		"castingTime": "1 round",
		"duration": "1 hour per CASTERLEVEL",
		"level": "6",
		"longText": "Your mind moves into the target’s body, and its mind moves into yours. You do not need line of sight or line of effect to the target if you know its location. Each target gains the mind-swapped template graft. You can maintain the swap at any range on the same plane. You can shift back to your body as a standard action, and doing so ends the spell. If your new body is killed, you return to your body and the target dies. If your body is killed, you can remain in the host’s body for the duration or until it is killed. Then, you die if your body is still dead. However, if you recast this spell, you can reset the duration you remain in the target’s body. You can cast this spell from a body that is not your own, swapping minds with a new target and resetting the spell’s duration. However, you can return only to your body. If a creature saves against your casting of this spell, it is immune to your casting of this spell for 24 hours.",
		"range": "Medium",
		"save": "Will negates",
		"source": "Alien Archive 3",
		"page": "p.137",
		"resistance": "Yes",
		"target": "One creature",
		"school": "enchantment (compulsion, mind-affecting)",
		"mystic": "6"
	},
	{
		"name": "Mind Thrust (Level 1)",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Mentally deal 2d10 damage to one target.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 1st-level spell it deals 2d10 damage to the target.",
		"range": "Close",
		"save": "Will half",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"2": [
				"Mind Thrust (Level 2)"
			],
			"3": [
				"Mind Thrust (Level 3)"
			],
			"4": [
				"Mind Thrust (Level 4)"
			],
			"5": [
				"Mind Thrust (Level 5)"
			],
			"6": [
				"Mind Thrust (Level 6)"
			]
		}
	},
	{
		"name": "Mind Thrust (Level 2)",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Mentally deal 4d10 damage to one target.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 2nd-level spell it deals 4d10 damage to the target.",
		"range": "Close",
		"save": "Will half",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"1": [
				"Mind Thrust (Level 1)"
			],
			"3": [
				"Mind Thrust (Level 3)"
			],
			"4": [
				"Mind Thrust (Level 4)"
			],
			"5": [
				"Mind Thrust (Level 5)"
			],
			"6": [
				"Mind Thrust (Level 6)"
			]
		}
	},
	{
		"name": "Mind Thrust (Level 3)",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Mentally deal 7d10 damage to one target.",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 3rd-level spell it deals 7d10 damage to the target.",
		"range": "Close",
		"save": "Will half",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"1": [
				"Mind Thrust (Level 1)"
			],
			"2": [
				"Mind Thrust (Level 2)"
			],
			"4": [
				"Mind Thrust (Level 4)"
			],
			"5": [
				"Mind Thrust (Level 5)"
			],
			"6": [
				"Mind Thrust (Level 6)"
			]
		}
	},
	{
		"name": "Mind Thrust (Level 4)",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Mentally deal 10d10 damage to and fatigue a single target.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 4th-level spell it deals 10d10 damage to the target and the target is fatigued for 1 round if it fails its saving throw.",
		"range": "Close",
		"save": "Will half",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"1": [
				"Mind Thrust (Level 1)"
			],
			"2": [
				"Mind Thrust (Level 2)"
			],
			"3": [
				"Mind Thrust (Level 3)"
			],
			"5": [
				"Mind Thrust (Level 5)"
			],
			"6": [
				"Mind Thrust (Level 6)"
			]
		}
	},
	{
		"name": "Mind Thrust (Level 5)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Mentally deal 15d10 damage to and exhaust one target.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 5th-level spell it deals 15d10 damage to the target. The target is exhausted for 1 round if it fails its save and it is fatigued for 1 round if it succeeds at its saving throw.",
		"range": "Close",
		"save": "Will half",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"1": [
				"Mind Thrust (Level 1)"
			],
			"2": [
				"Mind Thrust (Level 2)"
			],
			"3": [
				"Mind Thrust (Level 3)"
			],
			"4": [
				"Mind Thrust (Level 4)"
			],
			"6": [
				"Mind Thrust (Level 6)"
			]
		}
	},
	{
		"name": "Mind Thrust (Level 6)",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Mentally deal 17d10 damage to exhaust and stun one target.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 6th-level spell it deals 17d10 damage to the target. The target is exhausted and stunned for 1 round if it fails its save and it is fatigued for 1 round if it succeeds at its saving throw.",
		"range": "Close",
		"save": "Will half",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.365",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"1": [
				"Mind Thrust (Level 1)"
			],
			"2": [
				"Mind Thrust (Level 2)"
			],
			"3": [
				"Mind Thrust (Level 3)"
			],
			"4": [
				"Mind Thrust (Level 4)"
			],
			"5": [
				"Mind Thrust (Level 5)"
			]
		}
	},
	{
		"name": "Mind of Three",
		"shortText": "You split your mind, retaining your normal consciousness but gaining two other personas.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL",
		"level": "3",
		"longText": "You split your mind, retaining your normal consciousness but gaining two other personas. These personas are nearly identical to your original personality, but each emphasize a different aspect of your personality. Your divided personas are aware of and can psychically communicate with one another, allowing them to coordinate their efforts and assist each other. At any point during the spell’s duration, you can focus a persona on assisting with a task, granting you one of the following abilities. A persona granting one of these abilities doesn’t take an action, but it causes that persona to merge with your normal consciousness, disappearing. When the two additional personas are reintegrated, the spell ends. When you fail a saving throw against a mind-affecting effect, you can compartmentalize it within one persona. If you do so, you are unaffected. When you fail an Intelligence-, Wisdom-, or Charisma-based skill check, you can reroll it. When you fail a caster level check, you can reroll it.",
		"range": "Personal",
		"save": "None",
		"source": "Starfinder #22: The Forever Reliquary",
		"page": "p.52",
		"resistance": "No",
		"target": "Self",
		"school": "enchantment (mind-affecting)",
		"mystic": "3",
		"technomancer": "3",
		"FIXME": "Could use bullet points"
	},
	{
		"name": "Miracle",
		"mystic": "s",
		"castingTime": "1 standard action",
		"shortText": "Requests a deity's intercession.",
		"longText": "When you cast miracle you state what you would like to have happen and request that the power to which you are connected intercede. A request that is out of line with the power's nature is refused. A miracle can do any of the following things - Duplicate any mystic spell of 6th level or lower; Duplicate any other spell of 5th level or lower; Undo the harmful effects of certain spells such as feeblemind; Produce any effect whose power level is in line with the above effects. At the GM's discretion you may try to use a miracle to produce greater effects than these but doing so may be dangerous or the spell may have only a partial effect. A duplicated spell allows saving throws and spell resistance as normal but the save DCs are the same as for a 7th-level spell. For the purpose of other effects that depend on spell level miracle counts as a 9th-level spell.",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.366",
		"resistance": "Yes",
		"level": "s"
	},
	{
		"name": "Mirror Image",
		"castingTime": "1 standard action",
		"shortText": "Create decoy duplicates of yourself.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "2",
		"longText": "This spell creates a number of illusory doubles of you that inhabit your square. These doubles make it difficult for enemies to precisely locate and attack you. When you cast mirror image it creates 1d4 figment images. These images remain in your space and move with you mimicking your movements sounds and actions exactly. Whenever you are attacked or are the target of a spell that requires an attack roll there is a possibility that the attack targets one of your images instead. If the attack hits roll randomly to see whether the selected target is real or a figment. If it is a figment the figment is destroyed. If the attack misses by 5 or less one of your figments is destroyed by the near miss and an attack that misses you due to a miss chance also destroys an image. Area spells and effects that don't require an attack roll affect you normally and don't destroy any of your figments. Spells with a range of touch are harmlessly discharged if used to destroy a figment. An attacker must be able to see the figments to be fooled. If you are invisible or the attacker is blind the spell has no effect. Blindsense doesn't help distinguish the figments from the real you but blindsight is sufficient to do so.",
		"range": "Personal",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.366",
		"technomancer": "2",
		"witchwarper": "2"
	},
	{
		"name": "Mislead",
		"castingTime": "1 standard action",
		"shortText": "Make yourself invisible and create an illusory double of your likeness.",
		"duration": "(CASTERLEVEL) rounds (D) and concentration + 3 rounds; see text",
		"level": "5",
		"longText": "You become invisible (as greater invisibility) and at the same time a figment double of you (as per a 3rd-level casting of holographic image) appears. The double appears within close range ((25+5*CASTERLEVEL/2) feet) but thereafter moves as you direct it (which requires concentration beginning on the first round after the casting). You can make the figment appear superimposed perfectly over your own body so that observers don't notice an image appearing and you turning invisible. You and the figment can then move in different directions. The double moves at your speed and can talk and gesture as if it were real but it can't attack or cast spells though it can pretend to do so. The illusory double lasts as long as you concentrate upon it plus 3 additional rounds. After you cease concentration the illusory double continues to carry out the same activity until the duration expires. The invisibility lasts for (CASTERLEVEL) rounds regardless of concentration.",
		"range": "Personal; see text",
		"save": "None or Will disbelief see text",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.366",
		"resistance": "No",
		"target": "One illusory double",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Modify Memory",
		"mystic": "5",
		"castingTime": "1 round; see text",
		"shortText": "Change 5 minutes of target's memories.",
		"duration": "Permanent",
		"level": "5",
		"longText": "You reach into the target's mind and modify up to 5 minutes of its memories in one of the following ways - Eliminate all memory of an event the target actually experienced. This spell cannot negate charm person suggestion or similar spells; Allow the target to recall with perfect clarity an event it actually experienced; Change the details of an event the target actually experienced; Implant a memory of an event the target never experienced. - Casting the spell takes 1 round. If the target fails its saving throw you proceed with the spell by spending as much as 5 minutes (a period of time equal to the amount of memory you want to modify) visualizing the memory you wish to modify in the target. If your concentration is disturbed before the visualization is complete or if the target moves beyond the spell's range at any point during this time the spell fails. A modified memory does not necessarily affect the target's actions particularly if it contradicts the creature's natural inclinations. An illogical modified memory is usually dismissed as a bad dream a hallucination or another similar excuse.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.366",
		"resistance": "Yes",
		"target": "One living creature",
		"witchwarper": "5"
	},
	{
		"name": "Mystic Cure (Level 1)",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Restore 1d8 + your Wisdom modifier Hit Points to a living creature.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  1d8 + your Wisdom modifier",
		"range": "Touch",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "One living creature",
		"related": {
			"2": [
				"Mystic Cure (Level 2)"
			],
			"3": [
				"Mystic Cure (Level 3)"
			],
			"4": [
				"Mystic Cure (Level 4)"
			],
			"5": [
				"Mystic Cure (Level 5)",
				"Mystic Cure (Mass)(Level 5)"
			],
			"6": [
				"Mystic Cure (Level 6)",
				"Mystic Cure (Mass)(Level 6)"
			]
		}
	},
	{
		"name": "Mystic Cure (Level 2)",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Restore 3d8 + your Wisdom modifier Hit Points to a living creature.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  3d8 + your Wisdom modifier",
		"range": "Touch",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "One living creature",
		"related": {
			"1": [
				"Mystic Cure (Level 1)"
			],
			"3": [
				"Mystic Cure (Level 3)"
			],
			"4": [
				"Mystic Cure (Level 4)"
			],
			"5": [
				"Mystic Cure (Level 5)",
				"Mystic Cure (Mass)(Level 5)"
			],
			"6": [
				"Mystic Cure (Level 6)",
				"Mystic Cure (Mass)(Level 6)"
			]
		}
	},
	{
		"name": "Mystic Cure (Level 3)",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Restore 5d8 + your Wisdom modifier Hit Points to a living creature.",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  5d8 + your Wisdom modifier",
		"range": "Touch",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "One living creature",
		"related": {
			"1": [
				"Mystic Cure (Level 1)"
			],
			"2": [
				"Mystic Cure (Level 2)"
			],
			"4": [
				"Mystic Cure (Level 4)"
			],
			"5": [
				"Mystic Cure (Level 5)",
				"Mystic Cure (Mass)(Level 5)"
			],
			"6": [
				"Mystic Cure (Level 6)",
				"Mystic Cure (Mass)(Level 6)"
			]
		}
	},
	{
		"name": "Mystic Cure (Level 4)",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Restore 12d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  7d8 + your Wisdom modifier. In addition unlike most healing when you cast mystic cure as a spell of 4th-level or higher you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level mystic cure spell an extra 7d8 Hit Points with a 5th-level mystic cure spell or an extra 9d8 Hit Points with a 6th-level mystic cure spell. The second option is to bring a target that died within 2 rounds back to life. In addition to healing such a creature the spell returns the target to life and the target takes a temporary negative level for 24 hours. This spell can't resuscitate creatures slain by death effects creatures turned into undead or creatures whose bodies were destroyed significantly mutilated disintegrated and so on. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "One living creature",
		"related": {
			"1": [
				"Mystic Cure (Level 1)"
			],
			"2": [
				"Mystic Cure (Level 2)"
			],
			"3": [
				"Mystic Cure (Level 3)"
			],
			"5": [
				"Mystic Cure (Level 5)",
				"Mystic Cure (Mass)(Level 5)"
			],
			"6": [
				"Mystic Cure (Level 6)",
				"Mystic Cure (Mass)(Level 6)"
			]
		}
	},
	{
		"name": "Mystic Cure (Level 5)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Restore 16d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  9d8 + your Wisdom modifier. In addition unlike most healing when you cast mystic cure as a spell of 4th-level or higher you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level mystic cure spell an extra 7d8 Hit Points with a 5th-level mystic cure spell or an extra 9d8 Hit Points with a 6th-level mystic cure spell. The second option is to bring a target that died within 2 rounds back to life. In addition to healing such a creature the spell returns the target to life and the target takes a temporary negative level for 24 hours. This spell can't resuscitate creatures slain by death effects creatures turned into undead or creatures whose bodies were destroyed significantly mutilated disintegrated and so on. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "One living creature",
		"related": {
			"1": [
				"Mystic Cure (Level 1)"
			],
			"2": [
				"Mystic Cure (Level 2)"
			],
			"3": [
				"Mystic Cure (Level 3)"
			],
			"4": [
				"Mystic Cure (Level 4)"
			],
			"5": [
				"Mystic Cure (Mass)(Level 5)"
			],
			"6": [
				"Mystic Cure (Level 6)",
				"Mystic Cure (Mass)(Level 6)"
			]
		}
	},
	{
		"name": "Mystic Cure (Level 6)",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Restore 20d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  11d8 + your Wisdom modifier. In addition unlike most healing when you cast mystic cure as a spell of 4th-level or higher you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level mystic cure spell an extra 7d8 Hit Points with a 5th-level mystic cure spell or an extra 9d8 Hit Points with a 6th-level mystic cure spell. The second option is to bring a target that died within 2 rounds back to life. In addition to healing such a creature the spell returns the target to life and the target takes a temporary negative level for 24 hours. This spell can't resuscitate creatures slain by death effects creatures turned into undead or creatures whose bodies were destroyed significantly mutilated disintegrated and so on. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "One living creature",
		"related": {
			"1": [
				"Mystic Cure (Level 1)"
			],
			"2": [
				"Mystic Cure (Level 2)"
			],
			"3": [
				"Mystic Cure (Level 3)"
			],
			"4": [
				"Mystic Cure (Level 4)"
			],
			"5": [
				"Mystic Cure (Level 5)",
				"Mystic Cure (Mass)(Level 5)"
			],
			"6": [
				"Mystic Cure (Mass)(Level 6)"
			]
		}
	},
	{
		"name": "Mystic Cure (Mass)(Level 5)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Restore 3d8 + your Wisdom modifier Hit Points to one living creature per level.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You restore a number of Hit Points to a number of targets. Choose one of these targets within 10 feet of you; if that target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all of that target's Hit Points you can transfer any number of your own Hit Points to that target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. The number of Hit Points mass mystic cure restores to each target depends on the spell's level.  3d8 + your Wisdom modifier",
		"range": "Close; see text",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"related": {
			"1": [
				"Mystic Cure (Level 1)"
			],
			"2": [
				"Mystic Cure (Level 2)"
			],
			"3": [
				"Mystic Cure (Level 3)"
			],
			"4": [
				"Mystic Cure (Level 4)"
			],
			"5": [
				"Mystic Cure (Level 5)"
			],
			"6": [
				"Mystic Cure (Level 6)",
				"Mystic Cure (Mass)(Level 6)"
			]
		}
	},
	{
		"name": "Mystic Cure (Mass)(Level 6)",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Restore 5d8 + your Wisdom modifier Hit Points to one living creature per level.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You restore a number of Hit Points to a number of targets. Choose one of these targets within 10 feet of you; if that target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all of that target's Hit Points you can transfer any number of your own Hit Points to that target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. The number of Hit Points mass mystic cure restores to each target depends on the spell's level.  5d8 + your Wisdom modifier",
		"range": "Close; see text",
		"save": "Will half (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless)",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"related": {
			"1": [
				"Mystic Cure (Level 1)"
			],
			"2": [
				"Mystic Cure (Level 2)"
			],
			"3": [
				"Mystic Cure (Level 3)"
			],
			"4": [
				"Mystic Cure (Level 4)"
			],
			"5": [
				"Mystic Cure (Level 5)",
				"Mystic Cure (Mass)(Level 5)"
			],
			"6": [
				"Mystic Cure (Level 6)"
			]
		}
	},
	{
		"name": "Nanite Form",
		"shortText": "Target becomes a cloud of floating nanites.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "3",
		"longText": "The target and its gear are transformed into a cloud of nanites that fills a 5-foot cube. This cloud of nanites cannot attack or cast spells, but it has construct immunities and all-around vision; can’t be entangled, flanked, flat-footed, off-kilter, off-target, pinned, prone, or staggered; and has immunity to critical hits. It takes only half damage from any effect that targets only one creature. Automatic fire must hit the target as if it were three targets to deal it damage. In addition, the target loses its land speed and gains a fly speed of 20 feet (perfect maneuverability). It can move through openings 1 inch wide without squeezing, and it can squeeze to move through microscopic openings.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.138",
		"resistance": "Yes",
		"target": "One willing creature",
		"school": "transmutation",
		"technomancer": "3"
	},
	{
		"name": "Necromantic Revitalization (Level 1)",
		"shortText": "Restore hit points to an undead creature",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "With a touch, you replenish the negative energies that animate your target, restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing, you can apply the remaining healing to yourself, as long as you are an undead creature. Necromantic revitalization restores a number of Hit Points to your target depending on the spell’s level. 1st: 1d8 + your Intelligence modifier 2nd: 3d8 + your Intelligence modifier 3rd: 5d8 + your Intelligence modifier 4th: 7d8 + your Intelligence modifier 5th: 9d8 + your Intelligence modifier 6th: 11d8 + your Intelligence modifier In addition, unlike with most healing, when you cast necromantic revitalization as a spell of 4th level or higher, you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level necromantic revitalization spell, an extra 7d8 Hit Points with a 5th-level necromantic revitalization spell, or an extra 9d8 Hit Points with a 6th-level necromantic revitalization spell. The second option is to restore a target that was destroyed within the past 2 rounds, bringing it back to its undead state with the number of Hit Points that would otherwise be restored by this spell. This spell can’t reanimate creatures that were destroyed by effects that specifically target or have a special effect against the undead (such as wall of fire) or creatures whose bodies were significantly mutilated, disintegrated, or otherwise obliterated. It also cannot restore an undead creature whose existence is tied to an object (such as a necrovite’s electroencephalon) if that object has been destroyed. Casting this spell doesn’t provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes (harmless)",
		"target": "One undead creature",
		"school": "necromancy",
		"mystic": "1",
		"technomancer": "1",
		"related": {
            "2":["Necromantic Revitalization (Level 2)"],
            "3":["Necromantic Revitalization (Level 3)"],
            "4":["Necromantic Revitalization (Level 4)"],
            "5":["Necromantic Revitalization (Level 5)"],
            "6":["Necromantic Revitalization (Level 6)"]
        }
    },
    {
		"name": "Necromantic Revitalization (Level 2)",
		"shortText": "Restore hit points to an undead creature",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "With a touch, you replenish the negative energies that animate your target, restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing, you can apply the remaining healing to yourself, as long as you are an undead creature. Necromantic revitalization restores a number of Hit Points to your target depending on the spell’s level. 1st: 1d8 + your Intelligence modifier 2nd: 3d8 + your Intelligence modifier 3rd: 5d8 + your Intelligence modifier 4th: 7d8 + your Intelligence modifier 5th: 9d8 + your Intelligence modifier 6th: 11d8 + your Intelligence modifier In addition, unlike with most healing, when you cast necromantic revitalization as a spell of 4th level or higher, you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level necromantic revitalization spell, an extra 7d8 Hit Points with a 5th-level necromantic revitalization spell, or an extra 9d8 Hit Points with a 6th-level necromantic revitalization spell. The second option is to restore a target that was destroyed within the past 2 rounds, bringing it back to its undead state with the number of Hit Points that would otherwise be restored by this spell. This spell can’t reanimate creatures that were destroyed by effects that specifically target or have a special effect against the undead (such as wall of fire) or creatures whose bodies were significantly mutilated, disintegrated, or otherwise obliterated. It also cannot restore an undead creature whose existence is tied to an object (such as a necrovite’s electroencephalon) if that object has been destroyed. Casting this spell doesn’t provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes (harmless)",
		"target": "One undead creature",
		"school": "necromancy",
		"mystic": "2",
		"technomancer": "2",
		"related": {
            "1":["Necromantic Revitalization (Level 1)"],
            "3":["Necromantic Revitalization (Level 3)"],
            "4":["Necromantic Revitalization (Level 4)"],
            "5":["Necromantic Revitalization (Level 5)"],
            "6":["Necromantic Revitalization (Level 6)"]
        }
    },
    {
		"name": "Necromantic Revitalization (Level 3)",
		"shortText": "Restore hit points to an undead creature",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "With a touch, you replenish the negative energies that animate your target, restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing, you can apply the remaining healing to yourself, as long as you are an undead creature. Necromantic revitalization restores a number of Hit Points to your target depending on the spell’s level. 1st: 1d8 + your Intelligence modifier 2nd: 3d8 + your Intelligence modifier 3rd: 5d8 + your Intelligence modifier 4th: 7d8 + your Intelligence modifier 5th: 9d8 + your Intelligence modifier 6th: 11d8 + your Intelligence modifier In addition, unlike with most healing, when you cast necromantic revitalization as a spell of 4th level or higher, you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level necromantic revitalization spell, an extra 7d8 Hit Points with a 5th-level necromantic revitalization spell, or an extra 9d8 Hit Points with a 6th-level necromantic revitalization spell. The second option is to restore a target that was destroyed within the past 2 rounds, bringing it back to its undead state with the number of Hit Points that would otherwise be restored by this spell. This spell can’t reanimate creatures that were destroyed by effects that specifically target or have a special effect against the undead (such as wall of fire) or creatures whose bodies were significantly mutilated, disintegrated, or otherwise obliterated. It also cannot restore an undead creature whose existence is tied to an object (such as a necrovite’s electroencephalon) if that object has been destroyed. Casting this spell doesn’t provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes (harmless)",
		"target": "One undead creature",
		"school": "necromancy",
		"mystic": "3",
		"technomancer": "3",
		"related": {
            "1":["Necromantic Revitalization (Level 1)"],
            "2":["Necromantic Revitalization (Level 2)"],
            "4":["Necromantic Revitalization (Level 4)"],
            "5":["Necromantic Revitalization (Level 5)"],
            "6":["Necromantic Revitalization (Level 6)"]
        }
    },
    {
		"name": "Necromantic Revitalization (Level 4)",
		"shortText": "Restore hit points to an undead creature",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "With a touch, you replenish the negative energies that animate your target, restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing, you can apply the remaining healing to yourself, as long as you are an undead creature. Necromantic revitalization restores a number of Hit Points to your target depending on the spell’s level. 1st: 1d8 + your Intelligence modifier 2nd: 3d8 + your Intelligence modifier 3rd: 5d8 + your Intelligence modifier 4th: 7d8 + your Intelligence modifier 5th: 9d8 + your Intelligence modifier 6th: 11d8 + your Intelligence modifier In addition, unlike with most healing, when you cast necromantic revitalization as a spell of 4th level or higher, you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level necromantic revitalization spell, an extra 7d8 Hit Points with a 5th-level necromantic revitalization spell, or an extra 9d8 Hit Points with a 6th-level necromantic revitalization spell. The second option is to restore a target that was destroyed within the past 2 rounds, bringing it back to its undead state with the number of Hit Points that would otherwise be restored by this spell. This spell can’t reanimate creatures that were destroyed by effects that specifically target or have a special effect against the undead (such as wall of fire) or creatures whose bodies were significantly mutilated, disintegrated, or otherwise obliterated. It also cannot restore an undead creature whose existence is tied to an object (such as a necrovite’s electroencephalon) if that object has been destroyed. Casting this spell doesn’t provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes (harmless)",
		"target": "One undead creature",
		"school": "necromancy",
		"mystic": "4",
		"technomancer": "4",
		"related": {
            "1":["Necromantic Revitalization (Level 1)"],
            "2":["Necromantic Revitalization (Level 2)"],
            "3":["Necromantic Revitalization (Level 3)"],
            "5":["Necromantic Revitalization (Level 5)"],
            "6":["Necromantic Revitalization (Level 6)"]
        }
    },
    {
		"name": "Necromantic Revitalization (Level 5)",
		"shortText": "Restore hit points to an undead creature",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "With a touch, you replenish the negative energies that animate your target, restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing, you can apply the remaining healing to yourself, as long as you are an undead creature. Necromantic revitalization restores a number of Hit Points to your target depending on the spell’s level. 1st: 1d8 + your Intelligence modifier 2nd: 3d8 + your Intelligence modifier 3rd: 5d8 + your Intelligence modifier 4th: 7d8 + your Intelligence modifier 5th: 9d8 + your Intelligence modifier 6th: 11d8 + your Intelligence modifier In addition, unlike with most healing, when you cast necromantic revitalization as a spell of 4th level or higher, you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level necromantic revitalization spell, an extra 7d8 Hit Points with a 5th-level necromantic revitalization spell, or an extra 9d8 Hit Points with a 6th-level necromantic revitalization spell. The second option is to restore a target that was destroyed within the past 2 rounds, bringing it back to its undead state with the number of Hit Points that would otherwise be restored by this spell. This spell can’t reanimate creatures that were destroyed by effects that specifically target or have a special effect against the undead (such as wall of fire) or creatures whose bodies were significantly mutilated, disintegrated, or otherwise obliterated. It also cannot restore an undead creature whose existence is tied to an object (such as a necrovite’s electroencephalon) if that object has been destroyed. Casting this spell doesn’t provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes (harmless)",
		"target": "One undead creature",
		"school": "necromancy",
		"mystic": "5",
		"technomancer": "5",
		"related": {
            "1":["Necromantic Revitalization (Level 1)"],
            "2":["Necromantic Revitalization (Level 2)"],
            "3":["Necromantic Revitalization (Level 3)"],
            "4":["Necromantic Revitalization (Level 4)"],
            "6":["Necromantic Revitalization (Level 6)"]
        }
    },
    {
		"name": "Necromantic Revitalization (Level 6)",
		"shortText": "Restore hit points to an undead creature",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "With a touch, you replenish the negative energies that animate your target, restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing, you can apply the remaining healing to yourself, as long as you are an undead creature. Necromantic revitalization restores a number of Hit Points to your target depending on the spell’s level. 1st: 1d8 + your Intelligence modifier 2nd: 3d8 + your Intelligence modifier 3rd: 5d8 + your Intelligence modifier 4th: 7d8 + your Intelligence modifier 5th: 9d8 + your Intelligence modifier 6th: 11d8 + your Intelligence modifier In addition, unlike with most healing, when you cast necromantic revitalization as a spell of 4th level or higher, you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level necromantic revitalization spell, an extra 7d8 Hit Points with a 5th-level necromantic revitalization spell, or an extra 9d8 Hit Points with a 6th-level necromantic revitalization spell. The second option is to restore a target that was destroyed within the past 2 rounds, bringing it back to its undead state with the number of Hit Points that would otherwise be restored by this spell. This spell can’t reanimate creatures that were destroyed by effects that specifically target or have a special effect against the undead (such as wall of fire) or creatures whose bodies were significantly mutilated, disintegrated, or otherwise obliterated. It also cannot restore an undead creature whose existence is tied to an object (such as a necrovite’s electroencephalon) if that object has been destroyed. Casting this spell doesn’t provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Will half (harmless)",
		"source": "Pact Worlds",
		"page": "p.206",
		"resistance": "Yes (harmless)",
		"target": "One undead creature",
		"school": "necromancy",
		"mystic": "6",
		"technomancer": "6",
		"related": {
            "1":["Necromantic Revitalization (Level 1)"],
            "2":["Necromantic Revitalization (Level 2)"],
            "3":["Necromantic Revitalization (Level 3)"],
            "4":["Necromantic Revitalization (Level 4)"],
            "5":["Necromantic Revitalization (Level 5)"]
        }
	},
	{
		"name": "Nightmare",
		"shortText": "Send a terrible nightmare to a distant target.",
		"castingTime": "10 minutes",
		"duration": "Instantaneous",
		"level": "3",
		"longText": "You precisely identify a target, such as by name or via a material connection like a personal possession or lock of its hair. The spell fails without expending a spell slot if the target isn’t asleep or in a resting state similar to sleep. If you’ve never met the target in person and lack a material connection to the target, the target gains a +5 bonus to the saving throw. If the spell works, the target remains resting for 1 minute, then has a nightmare, rouses, and becomes frightened for 2d6 rounds. The target can’t willingly reenter the affected resting state for 1 hour. To do so after this time has elapsed, the target must succeed at the saving throw again. If this save fails, the target can try again once per hour thereafter. After 24 hours have passed, this restless state ends.",
		"range": "Plane",
		"save": "Will negates",
		"source": "Starfinder #10: The Diaspora Strain",
		"page": "p.53",
		"resistance": "Yes",
		"target": "One living creature",
		"school": "illusion (mind-affecting)",
		"mystic": "3",
		"technomancer": "3"
	},
	{
		"name": "Nondetection",
		"castingTime": "1 standard action",
		"shortText": "Hide target from divination and surveillance.",
		"duration": "(CASTERLEVEL) hours",
		"level": "3",
		"longText": "The warded creature or object becomes difficult to detect by divination spells such as clairaudience/clairvoyance and spells with the word detect in their names. Nondetection also prevents location by magic items such as crystal balls and technological items such as cameras and surveillance systems. Casting this spell places significant stress on you and requires you to spend 1 Resolve Point. If a magic divination is attempted against the warded creature or item the caster of the divination must succeed at a caster level check (1d20 + caster level) against a DC equal to 11 + your caster level. If surveillance is attempted with remote cameras or sensors the viewer must succeed at a Perception check against a DC (11+CASTERLEVEL) to see the target. If you cast nondetection on yourself or on an item currently in your possession the DC for each these checks is (15+CASTERLEVEL). If cast on a creature nondetection wards the creature's gear as well as the creature itself. Nondetection protects the target only from discovery by items and remote sensors not by creatures. A camera mounted to a wall and monitored from a security booth is subject to nondetection but a camera in a creature (including constructs) is not.",
		"range": "Touch",
		"save": "Will negates (harmless object)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes (harmless object)",
		"target": "One creature or object",
		"technomancer": "3"
	},
	{
		"name": "Optimize Technology",
		"shortText": "Protect a vehicle, construct, or technological device from environmental hazards.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL",
		"level": "2",
		"longText": "You expend 1 Resolve Point to render a vehicle, construct, or technological device immune to corrosive atmospheres, water, heat, radiation, and other natural environmental dangers. If the target regains Hit Points while affected, its Hit Points are restored to their maximum.",
		"range": "Medium",
		"save": "Will negates (harmless, object)",
		"source": "Character Operations Manual",
		"page": "p.138",
		"resistance": "Yes (harmless, object)",
		"target": "One technological item of up to 1 bulk per CASTERLEVEL, or one technological vehicle or construct of any size",
		"school": "transmutation",
		"technomancer": "2"
	},
	{
		"name": "Overheat",
		"castingTime": "1 standard action",
		"shortText": "Deal 2d8 fire damage to creatures in cone.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You collect the heat generated by nearby bodies and devices and vent it outward in a thermal wave dealing 2d8 fire damage to creatures and objects in the area.",
		"range": "15 ft.",
		"save": "Reflex half",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.367",
		"resistance": "Yes",
		"target": "Cone-shaped burst",
		"technomancer": "1",
		"witchwarper": "1"
	},
	{
		"name": "Overload Systems",
		"castingTime": "1 standard action",
		"shortText": "Target creature has a 50% chance to lose each action.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "4",
		"longText": "By touching the target (usually requiring a melee attack roll against the target's EAC but you can add your key ability score modifier instead of your Strength modifier if it is higher) you flood the target's body with random jolts of electricity or other interference. On a failed Fortitude save the target is overwhelmed and potentially unable to perform tasks as normal. While this spell is in effect whenever the target takes any action or reaction there is a 50% chance that the target simply takes no action instead. Roll this chance separately for each action the target would take. For example if the target wishes to move and attack during its turn it would roll d% twice to determine whether it could take those actions-once before each action it wishes to take. Each attack of a full attack action counts as separate action. This spell is effective against living and unliving creatures and casting it doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.368",
		"resistance": "Yes",
		"target": "One creature",
		"technomancer": "4"
	},
	{
		"name": "Parallel Form",
		"shortText": "Disguise creatures’ forms and equipment, and give targets a bonus to Bluff checks to impersonate individuals",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "2",
		"longText": "You pluck details from alternate-reality versions of targets to weave parallel forms, making the targets appear and act differently. You affect the targets as if they were each under a disguise self spell, deciding the details when you cast this spell. In addition, parallel form provides the mannerisms of the chosen form, and the tactile and audible properties of the target’s equipment can seem different, although all the target’s gear must appear to be of the same sort (for example, a melee weapon can appear to be only another sort of melee weapon). If you cast this spell to make the target appear to be a specific individual, the target gains a +4 circumstance bonus to Bluff checks to claim to be that individual. A creature that interacts with the target and succeeds at a Will saving throw recognizes the parallel form as an illusion.",
		"range": "Close",
		"save": "Will desbelieves",
		"source": "Character Operations Manual",
		"page": "p.138",
		"resistance": "No",
		"target": "Up to one willing creature per CASTERLEVEL, no two of which can be more than 30 ft apart",
		"school": "illusion",
		"witchwarper": "2"
	},
	{
		"name": "Paranoia",
		"shortText": "Force a creature to lash out at everyone, even their friends.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "The target treats all other creatures as enemies and only itself as an ally. It must attempt attacks of opportunity whenever any creature provokes them. In addition, the target is shaken while adjacent to more than one creature.",
		"range": "Close",
		"save": "Will negates",
		"source": "Starfinder #10: The Diaspora Strain",
		"page": "p.53",
		"resistance": "Yes",
		"target": "One creature",
		"school": "illusion (mind-affecting)",
		"mystic": "2",
		"technomancer": "2"
	},
	{
		"name": "Passwall",
		"castingTime": "1 standard action",
		"shortText": "Create a passage through most walls.",
		"duration": "(CASTERLEVEL) hours (D)",
		"level": "5",
		"longText": "You can create a passage through metal plaster plastic stone or wooden walls but you can not create one through force fields starship bulkheads or other harder materials. The passage is 30 feet deep. If the wall's thickness is more than the depth of the passage created then a single casting of passwall simply makes a niche or short tunnel. Several castings of passwall can then form a continuing passage to breach very thick walls. When passwall ends creatures within the passage are ejected out the nearest exit. If someone dispels passwall or you dismiss it creatures in the passage are ejected out the far exit if there is more than one or out the sole exit.",
		"range": "Touch",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.368",
		"resistance": "No",
		"target": "5-ft.-by-8-ft. opening",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Patch Tech",
		"shortText": "Gain a +3 bonus to checks to arm explosives, disable devices, and repair items.",
		"castingTime": "1 standard action",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "1",
		"longText": "You gain a +3 insight bonus to Engineering checks to arm explosives, disable devices, and repair items.",
		"range": "Close",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.139",
		"resistance": "No",
		"target": "One technological item",
		"school": "divination",
		"technomancer": "1"
	},
	{
		"name": "Perfect Recall",
		"shortText": "Recall one memory unaltered by magic perfectly.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "2",
		"longText": "The target is able to recall memories with perfect clarity. If the target has been subjected to displace memory, modify memory, or a similar effect, this spell provides no recall of those lost memories. However, the target realizes its memories have been altered by such a spell or effect.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.139",
		"resistance": "No",
		"target": "One willing or unconscious creature",
		"school": "enchantment",
		"mystic": "2"
	},
	{
		"name": "Phantom Cycle",
		"shortText": "Summon a ghostly motorcycle.",
		"castingTime": "1 round",
		"duration": "1 hour per CASTERLEVEL",
		"level": "3",
		"longText": "You conjure a motorcycle out of raw magic. This phantom cycle is only partially real, with a shadowy finish, dark trim, and tires of ghostly mist. Only you can pilot this cycle, although anyone can be a passenger. For every caster level you have above 6th, your phantom cycle gains a 5-foot increase in speed, a 50-foot increase to its full speed, and a 5-mph increase to its overland movement.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.139",
		"resistance": "No",
		"school": "conjuration (creation)",
		"effect": "One magical vehicle",
		"technomancer": "3"
	},
	{
		"name": "Pinpoint Navigation",
		"shortText": "Gain +10 to Piloting checks for navigation.",
		"castingTime": "1 round",
		"duration": "1 hour per CASTERLEVEL",
		"level": "3",
		"longText": "You focus your mind on time and space around you, gaining supernatural insight about your physical place in the universe. You gain a +10 bonus to Piloting checks to navigate and astrogate, and you can plot a course in half the normal time.",
		"range": "Close",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.139",
		"resistance": "No",
		"target": "One humanoid",
		"school": "divination",
		"mystic": "3",
		"technomancer": "3"
	},
	{
		"name": "Planar Barrier",
		"mystic": "6",
		"castingTime": "6 rounds",
		"shortText": "Seal an area against all planar travel into or within it.",
		"duration": "24 hours",
		"level": "6",
		"longText": "Planar barrier seals an area against all planar travel into or within it. This includes all teleportation spells summoning spells plane shifting astral travel and ethereal travel. Such effects simply fail automatically. Starships cannot enter or emerge from Drift travel in an area affected by this spell. Dispel magic does not dispel your planar barrier effect unless the caster level of the creature attempting to dispel it is at least as high as your own. You can't have multiple overlapping planar barrier effects. If planar barrier effects woulds overlap the more recent effect stops at the boundary of the older effect. A planar barrier can be made permanent with a special ritual which takes 1 hour and requires materials worth 15000 credits per 60-foot cube.",
		"range": "Medium",
		"save": "None",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.368",
		"resistance": "Yes",
		"target": "(CASTERLEVEL) sixty-foot cubes [S]",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Planar Binding (Level 4)",
		"mystic": "4",
		"castingTime": "10 minutes",
		"shortText": "Trap an extraplanar creature of CR 4 or lower until it performs a task.",
		"duration": "Instantaneous; see text",
		"level": "4",
		"longText": "Casting this spell attempts a dangerous act; to lure a creature from another plane to a specifically prepared trap created by the spell within its range. The called creature is held in the trap until it agrees to perform one service in return for its freedom or breaks free. The kind of creature to be bound must be known and stated. If you wish to call a specific individual you must use that individual's proper name in casting the spell. The CR of the outsider you can call with planar binding depends on the spell's level.  One outsider of CR 4 or lower. The target creature can attempt a Will saving throw. If the creature succeeds at the saving throw it resists the spell. If it fails the creature is immediately drawn to the trap (spell resistance does not keep it from being called). The creature can escape from the trap by successfully using its spell resistance (meaning you fail a caster level check against its spell resistance) by dimensional travel or with a successful Charisma check (DC %1). It can try each method once per day and a natural 20 on this check always succeeds (and a natural 1 on your caster level check always fails). If it breaks loose it can flee or attack you. A planar barrier spell cast in the area prevents the creature from escaping via dimensional travel. If the creature does not break free of the trap you can keep it bound for as long as you dare. You can attempt to convince the creature to perform a task for you in exchange for release and perhaps some sort of reward. The creature decides which terms it is willing to accept and it must willingly agree to the terms; magical compulsion isn't sufficient. This continues until the creature promises to serve until it breaks free or until you decide to get rid of it by means of some other spell. It never agrees to unreasonable commands. Once the requested service has been completed the creature need only to inform you to be instantly sent back to its home plane. The creature might later seek revenge against you for having imprisoned it. If you assign some open-ended task that the creature can't complete through its own actions the spell remains in effect for 10 days and the creature gains an immediate chance to break free. A defined task that will take longer than 10 days usually counts as unreasonable. Note that a clever recipient can subvert some instructions. When you use this spell to call a creature with the air chaotic earth evil fire good lawful or water subtype the spell gains that descriptor.|15+CASTERLEVEL/2+CHA",
		"range": "Close",
		"save": "Will negates",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.369",
		"resistance": "Yes; see text",
		"target": "See text",
		"technomancer": "4",
		"related": {
			"5": [
				"Planar Binding (Level 5)"
			],
			"6": [
				"Planar Binding (Level 6)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Planar Binding (Level 5)",
		"mystic": "5",
		"castingTime": "10 minutes",
		"shortText": "Trap an extraplanar creature of CR 7 or lower until it performs a task.",
		"duration": "Instantaneous; see text",
		"level": "5",
		"longText": "Casting this spell attempts a dangerous act; to lure a creature from another plane to a specifically prepared trap created by the spell within its range. The called creature is held in the trap until it agrees to perform one service in return for its freedom or breaks free. The kind of creature to be bound must be known and stated. If you wish to call a specific individual you must use that individual's proper name in casting the spell. The CR of the outsider you can call with planar binding depends on the spell's level.  One outsider of CR 7 or lower. The target creature can attempt a Will saving throw. If the creature succeeds at the saving throw it resists the spell. If it fails the creature is immediately drawn to the trap (spell resistance does not keep it from being called). The creature can escape from the trap by successfully using its spell resistance (meaning you fail a caster level check against its spell resistance) by dimensional travel or with a successful Charisma check (DC %1). It can try each method once per day and a natural 20 on this check always succeeds (and a natural 1 on your caster level check always fails). If it breaks loose it can flee or attack you. A planar barrier spell cast in the area prevents the creature from escaping via dimensional travel. If the creature does not break free of the trap you can keep it bound for as long as you dare. You can attempt to convince the creature to perform a task for you in exchange for release and perhaps some sort of reward. The creature decides which terms it is willing to accept and it must willingly agree to the terms; magical compulsion isn't sufficient. This continues until the creature promises to serve until it breaks free or until you decide to get rid of it by means of some other spell. It never agrees to unreasonable commands. Once the requested service has been completed the creature need only to inform you to be instantly sent back to its home plane. The creature might later seek revenge against you for having imprisoned it. If you assign some open-ended task that the creature can't complete through its own actions the spell remains in effect for 10 days and the creature gains an immediate chance to break free. A defined task that will take longer than 10 days usually counts as unreasonable. Note that a clever recipient can subvert some instructions. When you use this spell to call a creature with the air chaotic earth evil fire good lawful or water subtype the spell gains that descriptor.|15+CASTERLEVEL/2+CHA",
		"range": "Close",
		"save": "Will negates",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.369",
		"resistance": "Yes; see text",
		"target": "See text",
		"technomancer": "5",
		"related": {
			"4": [
				"Planar Binding (Level 4)"
			],
			"6": [
				"Planar Binding (Level 6)"
			]
		},
		"witchwarper": "5"
	},
	{
		"name": "Planar Binding (Level 6)",
		"mystic": "6",
		"castingTime": "10 minutes",
		"shortText": "Trap an extraplanar creature of CR 10 or lower until it performs a task.",
		"duration": "Instantaneous; see text",
		"level": "6",
		"longText": "Casting this spell attempts a dangerous act; to lure a creature from another plane to a specifically prepared trap created by the spell within its range. The called creature is held in the trap until it agrees to perform one service in return for its freedom or breaks free. The kind of creature to be bound must be known and stated. If you wish to call a specific individual you must use that individual's proper name in casting the spell. The CR of the outsider you can call with planar binding depends on the spell's level.  One outsider of CR 10 or lower. The target creature can attempt a Will saving throw. If the creature succeeds at the saving throw it resists the spell. If it fails the creature is immediately drawn to the trap (spell resistance does not keep it from being called). The creature can escape from the trap by successfully using its spell resistance (meaning you fail a caster level check against its spell resistance) by dimensional travel or with a successful Charisma check (DC %1). It can try each method once per day and a natural 20 on this check always succeeds (and a natural 1 on your caster level check always fails). If it breaks loose it can flee or attack you. A planar barrier spell cast in the area prevents the creature from escaping via dimensional travel. If the creature does not break free of the trap you can keep it bound for as long as you dare. You can attempt to convince the creature to perform a task for you in exchange for release and perhaps some sort of reward. The creature decides which terms it is willing to accept and it must willingly agree to the terms; magical compulsion isn't sufficient. This continues until the creature promises to serve until it breaks free or until you decide to get rid of it by means of some other spell. It never agrees to unreasonable commands. Once the requested service has been completed the creature need only to inform you to be instantly sent back to its home plane. The creature might later seek revenge against you for having imprisoned it. If you assign some open-ended task that the creature can't complete through its own actions the spell remains in effect for 10 days and the creature gains an immediate chance to break free. A defined task that will take longer than 10 days usually counts as unreasonable. Note that a clever recipient can subvert some instructions. When you use this spell to call a creature with the air chaotic earth evil fire good lawful or water subtype the spell gains that descriptor.|15+CASTERLEVEL/2+CHA",
		"range": "Close",
		"save": "Will negates",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.369",
		"resistance": "Yes; see text",
		"target": "See text",
		"technomancer": "6",
		"related": {
			"4": [
				"Planar Binding (Level 4)"
			],
			"5": [
				"Planar Binding (Level 5)"
			]
		},
		"witchwarper": "6"
	},
	{
		"name": "Plane Shift",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "As many as eight creatures travel to another plane you choose.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You move yourself or some other creature to another plane of existence or alternate dimension. If several willing or unconscious creatures are linked by hand in a circle as many as eight can be affected by a single casting of plane shift. Arriving at a precise location on the intended plane is nigh impossible. From the Material Plane you can reach any other plane (except for the Drift) though you appear 5 to 500 miles (5d%) from the last place one of the targets (your choice) was located last time that target traveled to that plane. If it's the first time traveling to a particular plane for all targets you appear at a random location on the plane though you can use other means of transit such as interplanetary teleport to travel on the new plane. Mystics must have an object attuned to a specific plane or native to that plane in order to use plane shift to travel to a plane. A technomancer requires a planar navigational program for a specific plane in order to travel to that plane with plane shift. Special rituals jealously hoarded by powerful technomancers and mystics can allow you to travel to specific locations on the chosen plane or even to unknown worlds.",
		"range": "Touch",
		"save": "Will negates",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.369",
		"resistance": "Yes",
		"target": "One creature or up to eight willing or unconscious creatures",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Polymorph (Level 1)",
		"shortText": "Change the target's shape into that of another creature",
		"castingTime": "1 round",
		"duration": "1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "You change a willing target’s shape into a predetermined polymorphed form of your choice. When you select this spell as a spell known, you design four polymorphed forms for each spell level at which you can cast this spell. These forms should be premade, following the rules for spells with the polymorph descriptor (starting on page 141) and the restrictions for each spell level of this spell, and be as ready to use in play as all other aspects of a character are. Each time you gain a character level, you can change which forms you have available. You choose which of these predetermined polymorph forms the target changes into each time you cast the spell. 1st: Casting polymorph as a 1st-level spell allows you to transform the target into one of the four 1st-level polymorphed forms you know. Your polymorphed forms must comply with the additional restrictions that follow. Unlike most polymorph effects, these forms are close enough to the target’s true form to make the target recognizable, and they cannot duplicate any other specific individual. Each form must be of the animal or humanoid type. You can target only creatures that are Small or Medium with this spell, and all your polymorphed forms must be Small or Medium. CR: The maximum CR is 1. Defenses: The form can grant DR 1/magic or resistance 2 to one energy type. Movement: The form can grant a land speed of up to 30 feet or a swim speed of up to 20 feet. Racial Traits: You cannot grant racial traits. Senses: The form can grant low-light vision or tracking (scent), but not both. ",
		"range": "Close",
		"save": "None",
		"source": "Alien Archive 2",
		"page": "p.145",
		"resistance": "Yes (harmless)",
		"target": "One willing creature",
		"school": "transmutation (polymorph)",
		"mystic": "1",
		"technomancer": "1",
		"witchwarper": "1",
		"related": {
            "1":["Baleful Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Polymorph (Level 2)",
		"shortText": "Change the target's shape into that of another creature",
		"castingTime": "1 round",
		"duration": "1 minute per CASTERLEVEL",
		"level": "2",
		"longText": "You change a willing target’s shape into a predetermined polymorphed form of your choice. When you select this spell as a spell known, you design four polymorphed forms for each spell level at which you can cast this spell. These forms should be premade, following the rules for spells with the polymorph descriptor (starting on page 141) and the restrictions for each spell level of this spell, and be as ready to use in play as all other aspects of a character are. Each time you gain a character level, you can change which forms you have available. You choose which of these predetermined polymorph forms the target changes into each time you cast the spell. 2nd: Casting polymorph as a 2nd-level spell allows you to completely transform the target into one of the four 2ndlevel polymorphed forms you know. Your polymorphed forms must comply with the additional restrictions that follow. Each form must be an animal, fey, humanoid, magical beast, or monstrous humanoid. All your polymorphed forms must be Small or Medium. CR: The maximum CR is 3. Defensive Abilities: The form can grant DR 2/magic or resistance 5 to one energy type. Racial Traits: The form can grant only one racial trait to each polymorphed form, and you can’t grant racial traits that include spell-like abilities. Senses: The form can grant one of the following options: blindsense (scent) out to 5 feet, darkvision out to 60 feet, lowlight vision, or tracking (scent). Speed: The form can grant the target a maximum land speed of 40 feet, climb speed of 20 feet, or swim speed of 30 feet. ",
		"range": "Close",
		"save": "None",
		"source": "Alien Archive 2",
		"page": "p.145",
		"resistance": "Yes (harmless)",
		"target": "One willing creature",
		"school": "transmutation (polymorph)",
		"mystic": "2",
		"technomancer": "2",
		"witchwarper": "2",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Polymorph (Level 3)",
		"shortText": "Change the target's shape into that of another creature",
		"castingTime": "1 round",
		"duration": "1 minute per CASTERLEVEL",
		"level": "3",
		"longText": "You change a willing target’s shape into a predetermined polymorphed form of your choice. When you select this spell as a spell known, you design four polymorphed forms for each spell level at which you can cast this spell. These forms should be premade, following the rules for spells with the polymorph descriptor (starting on page 141) and the restrictions for each spell level of this spell, and be as ready to use in play as all other aspects of a character are. Each time you gain a character level, you can change which forms you have available. You choose which of these predetermined polymorph forms the target changes into each time you cast the spell. 3rd: Casting polymorph as a 3rd-level spell allows you to completely transform the target into one of the four 3rd-level polymorphed forms you know. Your polymorphed forms must comply with the additional restrictions that follow. Each form must be an aberration, animal, fey, humanoid, magical beast, monstrous humanoid, or vermin. See the vermin benefits in the Type and Subtype section of the polymorph rules. All your polymorphed forms must be Small or Medium. CR: The maximum CR is 6. Defensive Abilities: The form can grant DR 3/magic, resistance 5 to two different energy types, or resistance 10 to one energy type. Racial Traits: The form can grant up to two racial traits (which must be from the same race) to each polymorphed form, one of which can include spell-like abilities. Senses: The form can grant one of the following options: blindsense (scent, sound, or vibration) out to 15 feet, darkvision out to 60 feet, low-light vision, or tracking (scent). Speed: The form can grant the target a maximum land speed of 40 feet, a burrow speed of up to 20 feet, a climb speed of 20 feet, a fly speed of 20 feet (Ex) with clumsy maneuverability, or a swim speed of 30 feet. ",
		"range": "Close",
		"save": "None",
		"source": "Alien Archive 2",
		"page": "p.145",
		"resistance": "Yes (harmless)",
		"target": "One willing creature",
		"school": "transmutation (polymorph)",
		"mystic": "3",
		"technomancer": "3",
		"witchwarper": "3",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Polymorph (Level 4)",
		"shortText": "Change the target's shape into that of another creature",
		"castingTime": "1 round",
		"duration": "1 minute per CASTERLEVEL",
		"level": "4",
		"longText": "You change a willing target’s shape into a predetermined polymorphed form of your choice. When you select this spell as a spell known, you design four polymorphed forms for each spell level at which you can cast this spell. These forms should be premade, following the rules for spells with the polymorph descriptor (starting on page 141) and the restrictions for each spell level of this spell, and be as ready to use in play as all other aspects of a character are. Each time you gain a character level, you can change which forms you have available. You choose which of these predetermined polymorph forms the target changes into each time you cast the spell. 4th: Casting polymorph as a 4th-level spell allows you to completely transform the target into one of the four 4th-level polymorphed forms you know. Your polymorphed forms must comply with the additional restrictions that follow. Each form must be an aberration, animal, fey, humanoid, magical beast, monstrous humanoid, or vermin. See the vermin benefits in the Type and Subtype section of the polymorph rules. All your polymorphed forms must be Small, Medium, or Large. CR: The maximum CR is 9. Defensive Abilities: The form can grant DR 5/magic, resistance 5 to three different energy types, resistance 10 to two different energy types, or resistance 15 to one energy type. Racial Traits: The form can grant up to two racial traits to each polymorphed form; one can include spell-like abilities. Senses: The form can grant one of the following options: blindsense (scent, sound, or vibration) out to 30 feet, blindsight (scent, sound, or vibration) out to 5 feet, darkvision out to 60 feet and low-light vision, or tracking (scent). Speed: The form can grant the target a maximum land speed of 40 feet, a burrow speed of up to 30 feet, a climb speed of 30 feet, a fly speed of 30 feet (Ex) with clumsy maneuverability, or a swim speed of 40 feet. ",
		"range": "Close",
		"save": "None",
		"source": "Alien Archive 2",
		"page": "p.145",
		"resistance": "Yes (harmless)",
		"target": "One willing creature",
		"school": "transmutation (polymorph)",
		"mystic": "4",
		"technomancer": "4",
		"witchwarper": "4",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Polymorph (Level 5)",
		"shortText": "Change the target's shape into that of another creature",
		"castingTime": "1 round",
		"duration": "1 minute per CASTERLEVEL",
		"level": "5",
		"longText": "You change a willing target’s shape into a predetermined polymorphed form of your choice. When you select this spell as a spell known, you design four polymorphed forms for each spell level at which you can cast this spell. These forms should be premade, following the rules for spells with the polymorph descriptor (starting on page 141) and the restrictions for each spell level of this spell, and be as ready to use in play as all other aspects of a character are. Each time you gain a character level, you can change which forms you have available. You choose which of these predetermined polymorph forms the target changes into each time you cast the spell. 5th: Casting polymorph as a 5th-level spell allows you to completely transform the target into one of the four 5th-level polymorphed forms you know. Your polymorphed forms must comply with the additional restrictions that follow. Each form must be an aberration, animal, construct (only if cast as a technomancer spell), elemental, fey, humanoid, magical beast, monstrous humanoid, plant (only if cast as a mystic spell), or vermin. See the construct, elemental, plant, and vermin benefits in the Type and Subtype section of the polymorph rules. All your polymorphed forms must be Tiny, Small, Medium, or Large. CR: The maximum CR is 12. Defensive Abilities: The form can grant DR 5/—, resistance 10 to three different energy types, resistance 15 to two different energy types, or resistance 20 to one energy type. Racial Traits: The form can grant up to three racial traits to each polymorphed form; one can include spell-like abilities. Senses: The form can grant one of the following options: blindsense (scent, sound, or vibration) out to 30 feet, blindsight (scent, sound, or vibration) out to 15 feet, darkvision out to 90 feet and low-light vision, or tracking (scent). Speed: The form can grant the target a maximum land speed of 40 feet, a burrow speed of up to 40 feet, a climb speed of 40 feet, a fly speed of 40 feet (Ex) with average maneuverability, or a swim speed of 40 feet. ",
		"range": "Close",
		"save": "None",
		"source": "Alien Archive 2",
		"page": "p.145",
		"resistance": "Yes (harmless)",
		"target": "One willing creature",
		"school": "transmutation (polymorph)",
		"mystic": "5",
		"technomancer": "5",
		"witchwarper": "5",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
		"name": "Polymorph (Level 6)",
		"shortText": "Change the target's shape into that of another creature",
		"castingTime": "1 round",
		"duration": "1 minute per CASTERLEVEL",
		"level": "6",
		"longText": "You change a willing target’s shape into a predetermined polymorphed form of your choice. When you select this spell as a spell known, you design four polymorphed forms for each spell level at which you can cast this spell. These forms should be premade, following the rules for spells with the polymorph descriptor (starting on page 141) and the restrictions for each spell level of this spell, and be as ready to use in play as all other aspects of a character are. Each time you gain a character level, you can change which forms you have available. You choose which of these predetermined polymorph forms the target changes into each time you cast the spell. 6th: Casting polymorph as a 6th-level spell allows you to completely transform the target into one of the four 6th-level polymorphed forms you know. Your polymorphed forms must comply with the additional restrictions that follow. Each form must be an aberration, animal, construct (only if cast as a technomancer spell), elemental, fey, humanoid, magical beast, monstrous humanoid, plant (only if cast as a mystic spell), undead, or vermin. See the construct, elemental, plant, undead, and vermin benefits in the Type and Subtype section of the polymorph rules. All your polymorphed forms must be Diminutive, Tiny, Small, Medium, Large, or Huge. CR: The maximum CR is 15. Defensive Abilities: The form can grant DR 5/—, resistance 10 to three different energy types, resistance 15 to two different energy types, resistance 20 to one energy type, or immunity to disease, poison, or radiation. Racial Traits: The form can grant up to four racial traits to each polymorphed form; one can include spell-like abilities. Senses: The form can grant one of the following options: blindsense (scent, sound, or vibration) out to 30 feet, blindsight (scent, sound, or vibration) out to 15 feet, darkvision out to 90 feet and low-light vision, or tracking (scent). Speed: The form can grant the target a maximum land speed of 60 feet, a burrow speed of up to 60 feet, a climb speed of 60 feet, a fly speed of 60 feet (Ex) with perfect maneuverability, or a swim speed of 60 feet. ",
		"range": "Close",
		"save": "None",
		"source": "Alien Archive 2",
		"page": "p.145",
		"resistance": "Yes (harmless)",
		"target": "One willing creature",
		"school": "transmutation (polymorph)",
		"mystic": "6",
		"technomancer": "6",
		"witchwarper": "6",
		"related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
        "name": "Polymorph, Mass (Level 4)",
        "shortText": "Change multiple target's shapes to that of another creature",
        "castingTime": "1 round",
        "duration": "1 minute per CASTERLEVEL",
        "level": "4",
        "longText": "This spell functions as polymorph, except as noted in this description. Each target must take the same form. 4th: This spell can transform the targets as per the 1st-level version of polymorph.",
        "range": "Close",
        "save": "None",
        "resistance": "Yes (Harmless)",
        "target": "One willing creature",
        "school": "transmutation (polymorph)",
        "mystic": "4",
        "technomancer": "4",
        "witchwarper": "4",
        "related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
        "name": "Polymorph, Mass (Level 5)",
        "shortText": "Change multiple target's shapes to that of another creature",
        "castingTime": "1 round",
        "duration": "1 minute per CASTERLEVEL",
        "level": "5",
        "longText": "This spell functions as polymorph, except as noted in this description. Each target must take the same form. 5th: This spell can transform the targets as per the 2nd-level version of polymorph.",
        "range": "Close",
        "save": "None",
        "resistance": "Yes (Harmless)",
        "target": "One willing creature",
        "school": "transmutation (polymorph)",
        "mystic": "5",
        "technomancer": "5",
        "witchwarper": "5",
        "related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)", "Polymorph, Mass (Level 6)"]
        }
    },
    {
        "name": "Polymorph, Mass (Level 6)",
        "shortText": "Change multiple target's shapes to that of another creature",
        "castingTime": "1 round",
        "duration": "1 minute per CASTERLEVEL",
        "level": "6",
        "longText": "This spell functions as polymorph, except as noted in this description. Each target must take the same form. 6th: This spell can transform the targets as per the 3rd-level version of polymorph.",
        "range": "Close",
        "save": "None",
        "resistance": "Yes (Harmless)",
        "target": "One willing creature",
        "school": "transmutation (polymorph)",
        "mystic": "6",
        "technomancer": "6",
        "witchwarper": "6",
        "related": {
            "1":["Baleful Polymorph (Level 1)", "Polymorph (Level 1)"],
            "2":["Baleful Polymorph (Level 2)", "Polymorph (Level 2)"],
            "3":["Baleful Polymorph (Level 3)", "Polymorph (Level 3)"],
            "4":["Baleful Polymorph (Level 4)", "Baleful Polymorph, Mass (Level 4)", "Polymorph (Level 4)", "Polymorph, Mass (Level 4)"],
            "5":["Baleful Polymorph (Level 5)", "Baleful Polymorph, Mass (Level 5)", "Polymorph (Level 5)", "Polymorph, Mass (Level 5)"],
            "6":["Baleful Polymorph (Level 6)", "Baleful Polymorph, Mass (Level 6)", "Polymorph (Level 6)"]
        }
    },
	{
		"name": "Predict Foe",
		"shortText": "As a reaction, shout a warning to an ally and grant that ally concealment against an attack.",
		"castingTime": "1 standard action",
		"duration": "Concentration, up to 1 round per CASTERLEVEL",
		"level": "2",
		"longText": "You reach into the target’s mind, extracting a sense of its immediate intentions. For the duration, you can warn a creature the target intends to attack, providing that creature with concealment against the attack. You convey this warning, verbally or telepathically (transcending language), as part of concentrating on this spell. You can continue to concentrate on this spell, and the effect continues if you do, even if the target leaves your line of sight.",
		"range": "Close",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.139",
		"resistance": "Yes",
		"target": "One creature",
		"school": "divination",
		"mystic": "2"
	},
	{
		"name": "Prescience",
		"shortText": "Concentrate on an enemy, predict their actions, and prepare an appropriate response.",
		"castingTime": "1 standard action",
		"duration": "Concentration + 1 round",
		"level": "3",
		"longText": "You peer into the future of multiple realities, collating and perceiving actions the target is likely to take. When that target takes an action during the duration, as a reaction you can execute one of the following effects. These effects are resolved after the target declares an intended action but before that action is resolved. The target can attempt a Reflex save to negate your reaction’s effect. If the effect successfully interrupts the target’s action, that action is still expended unless otherwise noted. Once a target has been successfully affected three times by one casting of this spell, the spell ends. You can attempt each effect only once per casting. Trip the target. A target tripped after it declares its intent to cast a spell does not lose that spell slot. Hinder the target’s ranged weapon, imposing a –4 penalty on its next ranged attack roll or a –2 penalty to multiple ranged attack rolls during a full attack. Wrench the target’s weapon-wielding appendage, imposing a –4 penalty on its next melee attack roll or a –2 penalty on multiple melee attack rolls during a full attack. Short out an item—whether magic, hybrid, or technological—wasting the target’s declared action to activate that item. Jam a weapon or weapon-like object in place as the target attempts to draw or sheathe it, thwarting that attempt. Cause the target to fumble with ammunition, wasting its declared action to reload a weapon. Unleash a blast of force from eddying realities, causing the foe to waste its declared action to stand up from prone.",
		"range": "Close",
		"save": "Reflex partial; see text",
		"source": "Character Operations Manual",
		"page": "p.139",
		"resistance": "No",
		"target": "One creature",
		"school": "divination",
		"witchwarper": "3",
		"FIXME": "Could use bullet points in body"
	},
	{
		"name": "Preserve Specimen",
		"shortText": "You harmlessly render a willing or unconscious living creature inert, placing it in stasis where it does not need to eat, breathe, or sleep.",
		"castingTime": "1 standard action",
		"duration": "1 week per CASTERLEVEL",
		"level": "3",
		"longText": "You harmlessly render a willing or unconscious living creature inert, placing it in stasis where it does not need to eat, breathe, or sleep. The creature cannot attack, use any abilities, or move while affected by preserve specimen, nor does the creature age or change in any way. It is not aware of its surroundings and does not experience any sensation or passage of time. If the creature was affected by any diseases, poisons, or other afflictions or conditions before you cast preserve specimen, they cease to progress for the duration of the spell, but the creature retains them. Their progression resumes once the spell ends. Any attack against a creature affected by preserve specimen, or any spell or effect that would cause the specimen to take damage or attempt a saving throw, immediately ends this spell.",
		"range": "Close",
		"save": "Will negates",
		"source": "Character Operations Manual",
		"page": "p.23",
		"resistance": "Yes",
		"target": "One living willing or unconscious creature with an Intelligence bonus of +2 or lower",
		"school": "transmutation",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Private Sanctum",
		"castingTime": "10 minutes",
		"shortText": "Prevent anyone from viewing or scrying an area for 24 hours.",
		"duration": "24 hours (D)",
		"level": "5",
		"longText": "This spell ensures privacy. Anyone looking into the area from outside sees only a dark foggy mass. Darkvision cannot penetrate it. No sounds no matter how loud can escape the area so nobody can eavesdrop from outside. Those inside can see out normally. Divination (scrying) spells can't perceive anything within the area and those within are immune to detect thoughts. The ward prevents speech between those inside and those outside (because it blocks sound) and technological communication (as it blocks broadcasts) but it doesn't prevent other magic communication such as a telepathic message spell or telepathic communication. The spell does not prevent creatures or objects from moving into and out of the area.",
		"range": "Close",
		"save": "None",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.369",
		"resistance": "No",
		"target": "(CASTERLEVEL) thirty-foot cubes [S]",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Probability Prediction",
		"castingTime": "1 standard action",
		"shortText": "Reroll one attack roll save or check.",
		"duration": "(CASTERLEVEL) rounds (D); see text",
		"level": "3",
		"longText": "You open your mind to read the underlying probability of the universe. At any point during the duration of this spell you can discharge it to reroll any d20 roll (attack roll saving throw skill check etc.; see page 243). This takes no action but you must choose to do it before you learn the results of the first roll. You must take the result of the second roll even if it is worse.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.369",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Prying Eyes",
		"castingTime": "1 minute",
		"shortText": "Twenty floating eyes scout for you.",
		"duration": "(CASTERLEVEL) hours (D); see text",
		"level": "5",
		"longText": "You create 20 semitangible visible magical orbs called eyes. These eyes move out scout around and return as you direct them when casting the spell. Each eye can see 120 feet (normal vision only) in all directions. While the individual eyes are quite fragile they're small and difficult to spot. Each eye is a Fine construct (about the size of a small apple) with the magical subtype. They each have 1 Hit Point and EAC and KAC of 18 and they fly at a speed of 30 feet with a +20 bonus to Acrobatics checks to fly and a +16 bonus to Stealth checks. An eye has a +20 Perception bonus and is subject to darkness fog illusions and any other factors that affect your ability to receive visual information about your surroundings. An eye traveling in darkness must find its way by touch. When you create the eyes you specify instructions you want them to follow in a command of no more than 25 words. The eyes know anything you know. In order to report their findings the eyes must return to your hand. Each eye replays in your mind all that it has seen during its existence. It takes an eye 1 round to replay 1 hour of recorded images. After relaying all of its findings an eye simply disappears. If an eye ever gets more than 1 mile away from you it instantly ceases to exist. However your link with the eye is such that you won't know if the eye was destroyed because it wandered out of range or because of some other event. The eyes exist for up to (CASTERLEVEL) hours or until they return to you. Dispel magic can destroy the eyes. Roll separately for each eye caught in an area dispel.",
		"range": "1 mile",
		"effect": "20 magical sensors",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.370",
		"resistance": "No",
		"technomancer": "5"
	},
	{
		"name": "Psychic Surgery",
		"mystic": "6",
		"castingTime": "10 minutes",
		"shortText": "Cure all Intelligence Wisdom and Charisma damage and drain plus remove other mental afflictions and conditions.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "Psychic surgery heals the target of all Intelligence Wisdom and Charisma damage and it restores all points permanently drained from the target's Intelligence Wisdom and Charisma scores. It also eliminates all ongoing confusion fear and insanity effects. Psychic surgery also removes any mental afflictions that could be removed with dispel magic as well as mental diseases. Psychic surgery removes all effects magically altering the target's memory even instantaneous effects and it can restore a memory to perfect clarity (even if the memory loss is due to the mundane passage of time).",
		"range": "Touch",
		"save": "None",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.370",
		"resistance": "No",
		"target": "One willing or unconscious living creature"
	},
	{
		"name": "Psychokinetic Hand",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Telekinetically move an object of 1 bulk or less.",
		"duration": "Concentration",
		"level": "0",
		"longText": "You point your finger at the target object gaining the ability to lift it and move it at will from a distance. As a move action you can propel the object as far as 15 feet in any direction though the spell ends if the distance between you and the object ever exceeds the spell's range. You can't perform complex operations such as firing a gun or using a computer but you can shut a mechanical door or lid and work simple buttons to open or close automated doors or trigger an alarm.",
		"range": "Close",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.370",
		"resistance": "No",
		"target": "One unattended object of no more than 10 lbs. or 1 bulk",
		"technomancer": "0",
		"witchwarper": "0"
	},
	{
		"name": "Psychokinetic Strangulation",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Concentrate to immobilize target and deal 3d8 damage per round.",
		"duration": "Concentration up to (CASTERLEVEL) rounds",
		"level": "3",
		"longText": "You manipulate the mystical energy around a creature's throat into a viselike grip potentially choking the life out of your victim. Each round you concentrate on this spell it deals 3d8 bludgeoning damage and immobilizes the target. A creature immobilized in this way cannot move and must hold its breath (see page 404). The creature can still attack with any of its weapons (except any bite attacks) cast spells and so on. Each round the spell affects the target the target can attempt a Fortitude saving throw to halve the damage and avoid being immobilized.",
		"range": "Close",
		"save": "Fortitude partial see text",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.370",
		"resistance": "Yes",
		"target": "One creature that breathes"
	},
	{
		"name": "Puncture Veil",
		"shortText": "Tiny needles deal damage plus additional bleed damage for 3 rounds.",
		"castingTime": "1 standard action or 1 full action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You grasp onto a space-time filled with microscopic needles and use them to pierce into your reality. One creature takes 1d4 piercing damage and gains bleeding 1 for 3 rounds. You can cast this spell as a full action. If you do, you have two options. You can target two creatures within 20 feet of each other with the effect described above, or target only one creature, who takes 2d4 piercing damage and gains bleeding 2 for 3 rounds.",
		"range": "Medium",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.140",
		"resistance": "Yes",
		"target": "One or two creatures; see text",
		"school": "evocation",
		"witchwarper": "1"
	},
	{
		"name": "Pyre Wreath",
		"shortText": "Creates 3 orbs that can absorb fire damage for the user.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL",
		"level": "1",
		"longText": "This spell creates a circle of three fist-sized orbs of flame around the target creature. The orbs increase the light level by one step within a 10-foot-radius of the target. Anytime the target of the spell takes fire damage from an attack or spell, they can spend a reaction to have one of the orbs absorb the blow. That orb disappears and the amount of fire damage is reduced by 5. The orbs cannot be used to absorb fire damage that comes from a continuous or natural environmental effect, such as walking in lava or damage from the burning condition. The spell ends when all three orbs are expended in this manner.",
		"range": "Medium",
		"save": "Will negates (harmless)",
		"source": "Starfinder #18: Assault on the Crucible",
		"page": "p.53",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"school": "abjuration",
		"mystic": "1"
	},
	{
		"name": "Raise Dead",
		"mystic": "5",
		"castingTime": "1 minute",
		"shortText": "Restore life to a creature that died no more than (CASTERLEVEL) days ago.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You restore life to a deceased creature. You can raise a creature that has been dead for no longer than (CASTERLEVEL) days. In addition the target's soul must be free and willing to return. If the target's soul is not willing to return the spell fails; therefore a target that wants to return to life receives no saving throw against this spell. Casting this spell requires you to create a complex representation of the target deceased creature worth at least 5000 credits to serve as a beacon for the creature's soul. This object is consumed when you cast the spell. Coming back from the dead is an ordeal. The target of the spell gains 2 permanent negative levels when it is raised just as if it had been hit by a creature's ability that bestows permanent negative levels. If the target is 1st level it takes 2 Constitution drain instead (if this would reduce its Constitution to 0 or less it can't be raised). A raised creature returns with no Resolve Points no Stamina Points and no spell slots (until it rests to recover them normally). It has 5 Hit Points. Any ability scores reduced to 0 are raised to 1. Normal poison and normal disease are cured in the process of raising the target but magical diseases and curses are not undone. While the spell closes mortal wounds and repairs lethal damage of most kinds the body of the creature to be raised must be whole. Otherwise missing parts are still missing when the creature is brought back to life. The spell can't bring back a creature that has died of old age. Constructs elementals and outsiders can't be raised by this spell. It is possible to bring back a creature that has been turned into an undead creature but the beacon for the creature's soul must be more powerful and must be worth at least 15000 credits.",
		"range": "Touch",
		"save": "None see text",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.370",
		"resistance": "Yes (harmless)",
		"target": "One dead creature",
		"witchwarper": "5"
	},
	{
		"name": "Rapid Repair",
		"castingTime": "1 standard action",
		"shortText": "Construct or weapon regains 2d8 Hit Points per round for 1 minute.",
		"duration": "1 minute",
		"level": "5",
		"longText": "On each round the target construct or weapon regains 2d8 Hit Points. This does not stack with any fast healing the construct or weapon already has. You can't target a construct or weapon that has been brought to 0 Hit Points or destroyed.",
		"range": "Touch",
		"save": "Fortitude negates (harmless object)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.371",
		"resistance": "Yes (harmless object)",
		"target": "One construct or weapon",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Ray of Exhaustion",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Ray makes target exhausted.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "3",
		"longText": "You create an enervating ray of magic. You must make a ranged attack against your opponent's EAC. On a hit the target is immediately exhausted for the spell's duration. A creature that succeeds at a Fortitude saving throw is only fatigued unless it is already fatigued in which case it instead becomes exhausted despite the saving throw. This spell has no effect on a creature that is already exhausted. Unlike normal exhaustion or fatigue the effect ends as soon as the spell's duration expires.",
		"range": "Close",
		"save": "Fortitude partial see text",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.371",
		"resistance": "Yes",
		"target": "One creature",
		"witchwarper": "3"
	},
	{
		"name": "Read The Flames",
		"shortText": "Gives you a single use bonus in the near future.",
		"castingTime": "10 minutes",
		"duration": "24 hours",
		"level": "4",
		"longText": "While casting this spell, you must focus on a semi-controlled flame (such as one produced by a lighter or a weapon with the flaming weapon fusion), centering your mind and analyzing the blaze’s movements for subtle patterns that describe the underlying fundamentals of the universe. Once during the spell’s duration, you can center yourself as a standard action (this is a purely mental action) to remember your time spent scrutinizing the flame, choosing one of the benefits below. When the chosen effect ends, so does the spell. Mental Clarity: At some point during the next 10 minutes, you can reroll one skill check with a +4 circumstance bonus. Physical Clarity: You gain a +4 circumstance bonus to EAC and KAC until the end of your next turn. Spiritual Clarity: You can immediately attempt a new saving throw against any mind-affecting effect currently affecting you.",
		"range": "Personal",
		"save": "None",
		"source": "Starfinder #18: Assault on the Crucible",
		"page": "p.53",
		"resistance": "No",
		"target": "Self",
		"school": "divination",
		"mystic": "4",
		"FIXME": "could use bullet points or paragraphs"
	},
	{
		"name": "Reality Bend",
		"shortText": "Concentrate on an ally, and shift them up to 10 feet once per round when it’s most convenient.",
		"castingTime": "1 standard action",
		"duration": "concentration + 1 round",
		"level": "5",
		"longText": "You concentrate on overlapping realities and focus them on the target. Once per round, even when it is not your turn, you can move your target up to 10 feet into a space it is willing and able to occupy. This movement can occur only between resolved actions and does not trigger reactions. When you concentrate on this spell, you can shift your focus to a different target.",
		"range": "Medium",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.140",
		"resistance": "No",
		"target": "One willing creature; see text",
		"school": "transmutation",
		"witchwarper": "5"
	},
	{
		"name": "Reality Leap",
		"shortText": "Hop through to another spot within range in this reality with a 50% chance to arrive slightly off target.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You open an unstable tear in reality and leap into the unknown, emerging at another nearby but unpredictable point in this version of existence. When you cast this spell, you state the direction you wish to travel, the distance within range, and the specific square in which you’re trying to arrive. You can bring along objects, provided their weight doesn’t exceed your maximum load. You travel the correct direction and distance, but you have a 50% chance to arrive elsewhere than your intended square. If you do, use the Missing with a Thrown Weapon diagram to determine the direction you deviate from the intended destination. You arrive 1d6 squares away in that direction, although your deviation cannot cause you to exceed this spell’s range. If you arrive in a place already occupied by a solid object or body, you take 1d6 damage and are shunted to the nearest open space with a suitable surface.",
		"range": "Long",
		"save": "none, Will negates (object)",
		"source": "Character Operations Manual",
		"page": "p.140",
		"resistance": "no, yes (object)",
		"target": "Personal",
		"school": "conjuration (teleportation)",
		"witchwarper": "2"
	},
	{
		"name": "Reanimate (Level 5)",
		"shortText": "Reanimate a recently destroyed construct or undead",
		"castingTime": "1 minute",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You can reanimate a dead construct or destroyed undead creature that has been dead or destroyed for no longer than 1 day per caster level. If the target had a soul, that soul must be free and willing to return; a target that wants to be reanimated receives no saving throw against this spell, but if the target’s soul is not willing to return, the spell fails. Casting this spell requires you to create a complex representation of the target deceased creature worth at least 7,500 credits to serve as a blueprint regarding its reanimation. This object is consumed when you cast the spell. If the target is an undead whose existence is tied to an object (such as a necrovite and its electroencephalon), it cannot be brought back without a new version of that object (with at least the same price as the original). A reanimated creature returns with no Resolve Points, no Stamina Points, and no spell slots (until it rests to recover them normally). It has 5 Hit Points. Any ability scores reduced to 0 are raised to 1 (though any ability score it normally does not have is unchanged). Diseases, poisons, curses, and computer programming or viruses that affected the target at the time of its destruction remain in effect after reanimation. The spell closes wounds and repairs lethal damage of most kinds, but if the body of the creature to be reanimated isn’t whole, any missing parts are still missing when the creature is brought back to life. This spell can reanimate constructs and undead but cannot raise outsiders or restore life to other creatures. Reanimated undead return to unlife as the same type of undead that they were prior to their destruction.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.207",
		"resistance": "Yes (harmless)",
		"target": "One dead construct or undead creature",
		"school": "necromancy",
		"mystic": "5"
	},
	{
		"name": "Reanimate (Level 6)",
		"shortText": "Reanimate a recently destroyed construct or undead",
		"castingTime": "1 minute",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You can reanimate a dead construct or destroyed undead creature that has been dead or destroyed for no longer than 1 day per caster level. If the target had a soul, that soul must be free and willing to return; a target that wants to be reanimated receives no saving throw against this spell, but if the target’s soul is not willing to return, the spell fails. Casting this spell requires you to create a complex representation of the target deceased creature worth at least 7,500 credits to serve as a blueprint regarding its reanimation. This object is consumed when you cast the spell. If the target is an undead whose existence is tied to an object (such as a necrovite and its electroencephalon), it cannot be brought back without a new version of that object (with at least the same price as the original). A reanimated creature returns with no Resolve Points, no Stamina Points, and no spell slots (until it rests to recover them normally). It has 5 Hit Points. Any ability scores reduced to 0 are raised to 1 (though any ability score it normally does not have is unchanged). Diseases, poisons, curses, and computer programming or viruses that affected the target at the time of its destruction remain in effect after reanimation. The spell closes wounds and repairs lethal damage of most kinds, but if the body of the creature to be reanimated isn’t whole, any missing parts are still missing when the creature is brought back to life. This spell can reanimate constructs and undead but cannot raise outsiders or restore life to other creatures. Reanimated undead return to unlife as the same type of undead that they were prior to their destruction.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.207",
		"resistance": "Yes (harmless)",
		"target": "One dead construct or undead creature",
		"school": "necromancy",
		"technomancer": "6"
	},
	{
		"name": "Recall",
		"shortText": "Once during the duration, as a reaction, you can reroll a failed skill check to recall knowledge.",
		"castingTime": "1 standard action",
		"duration": "24 hours or until expended",
		"level": "1",
		"longText": "Once during the duration, as a reaction, you can reroll a failed skill check to recall knowledge.",
		"range": "Personal",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.23",
		"resistance": "No",
		"target": "Self",
		"school": "divination",
		"technomancer": "1"
	},
	{
		"name": "Recharge",
		"castingTime": "1 round",
		"shortText": "Replenish charges in a battery or item capable of holding charges.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You restore up to 10 charges to a battery or 5 charges to a technological item capable of being charged by a battery. Since this spell takes your personal energy you must spend 1 Resolve Point to cast it. If you recharge a battery there is a 20% chance the battery is destroyed by the attempt. If you restore more charges than the item can hold the item must succeed at a Fortitude saving throw or take 1d6 electricity damage for each excess charge. This spell provides no knowledge of how many charges an item can safely hold but you can choose to bestow fewer charges than the maximum allowed to reduce the risk; you must declare how many charges you are restoring before casting this spell.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.372",
		"resistance": "Yes (object)",
		"target": "One object",
		"technomancer": "2"
	},
	{
		"name": "Reflecting Armor",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Sheath of mystical force can reflect damage back on foe.",
		"duration": "(CASTERLEVEL*10) minutes or until dismissed (D); see text",
		"level": "1",
		"longText": "You create a shimmering skin-like coating of mystical force that covers your body allowing you to reflect damage you take back against your attacker. At any time during this spell's duration when you take Hit Point damage from an attack made with a weapon by a foe within 100 feet you can choose to dismiss the spell as a reaction. If you do the armor crackles with energy as it disappears arcing through the air to strike the attacking creature which takes an amount of force damage equal to the damage dealt to you at the time this spell was dismissed (maximum 10). The target can attempt a Reflex save for half damage.",
		"range": "Personal",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.372"
	},
	{
		"name": "Regenerate",
		"mystic": "6",
		"castingTime": "3 rounds",
		"shortText": "Grow back target's severed limbs restore 12d8 Hit Points and remove exhaustion and fatigue.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "The target's severed body members (fingers toes hands feet arms legs tails or even heads of multiheaded creatures) broken bones and ruined organs (including eyes) grow back. After the spell is cast the physical regeneration is complete in 1 round if the severed members are present and touching the creature. It takes 2d10 rounds otherwise. Regenerate also restores 12d8 Hit Points rids the target of exhaustion and fatigue and eliminates all nonlethal damage the target has taken. It has no effect on nonliving creatures (including undead).",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.372",
		"resistance": "Yes (harmless)",
		"target": "One living creature"
	},
	{
		"name": "Reincarnate",
		"mystic": "4",
		"castingTime": "10 minutes",
		"shortText": "Bring a target dead creature back to life in a random body.",
		"duration": "Instantaneous; see text",
		"level": "4",
		"longText": "When you cast this spell you bring back a dead creature in another body provided that its death occurred no more than 1 week before the casting of the spell and the target's soul is free and willing to return. If the target's soul is not willing to return the spell fails; therefore a target that wants to return receives no saving throw. Casting this spell requires a special monument worth at least 1000 credits to serve as a beacon for the departed creature's soul. This object is consumed when you cast the spell. Since the dead creature is returning in a new body all physical ills and afflictions are removed. The condition of the creature's remains is not a factor. So long as some small portion of the creature's body still exists it can be reincarnated but the portion receiving the spell must have been part of the creature's body at the time of death. The magic of the spell creates an entirely new young adult body for the soul to inhabit from the natural elements at hand. This process takes 1 hour to complete. When the body is ready the target is reincarnated. A reincarnated creature recalls the majority of its former life and form. It retains any class features feats and skill ranks it formerly had. Its class base attack bonus base save bonuses and Hit Points are unchanged. The creature should recalculate its ability scores from scratch as a member of its new race (remembering to include any ability score increases from leveling up). The target of the spell gains 2 permanent negative levels when it is reincarnated. If the target is 1st level it takes 2 Constitution drain instead (if the Constitution drain would reduce its Constitution to 0 or less the creature cannot be reincarnated). The target creature can decide whether its new body retains any of the implants it had in its former body. A spellcasting creature has a 50% chance of losing any given unused spell slot as if it had been used to cast a spell. For a humanoid creature the new incarnation is determined using the table on the facing page. For nonhumanoid creatures a similar table of creatures of the same type should be created. Elementals outsiders and undead creatures can't be reincarnated. Any creature that can't benefit from the mystic cure spell cannot be reincarnated. The spell can bring back a creature that has died of old age. The reincarnated creature gains all abilities associated with its new form including any forms of movement and speeds natural attacks extraordinary abilities and the like but it does not automatically speak the language of the new form it takes. [D%] 1-6 Android; 7-14 Dwarf; 15-22 Elf; 23-30 Gnome; 31-34 Half-elf; 35-38 Half-orc; 39-46 Halfling; 47-55 Human; 56-64 Lashunta; 65-73 Kasatha; 74-81 Shirren; 82-90 Vesk; 91-99 Ysoki; 100 Other (GM's choice). A miracle or wish spell can restore a reincarnated creature to its original form.",
		"range": "Touch",
		"save": "None see text",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.372",
		"resistance": "Yes (harmless)",
		"target": "One dead creature",
		"witchwarper": "4"
	},
	{
		"name": "Reject Augmentation",
		"shortText": "Targeted creature is sickened and can't use any augmentations for the duration",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "You urge the target creature’s natural systems to reassert themselves, causing its body to temporarily reject augmentations that have been installed in its systems. For the spell’s duration, the creature is sickened and can’t use any augmentations that require an action to activate. Creatures that don’t have augmentations are not affected by this spell.",
		"range": "Medium",
		"save": "Fortitude negates",
		"source": "Starfinder Armory",
		"page": "p.148",
		"resistance": "Yes",
		"target": "One creature",
		"school": "transmutation",
		"mystic": "2"
	},
	{
		"name": "Remote Operation",
		"shortText": "Remotely operate the controls of a computer or vehicle out to a short distance.",
		"castingTime": "1 standard action",
		"duration": "concentration + 1 round per CASTERLEVEL",
		"level": "1",
		"longText": "A holographic duplicate of the target’s controls appears within your reach. If the target has no controls, the spell fails. As part of concentrating on this spell, you (and only you) can use these holocontrols to operate the target as if you were able to touch its actual controls. The spell ends if the target moves out of range.",
		"range": "60 ft",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.140",
		"resistance": "Yes",
		"target": "One operable technological device no larger than a vehicle that is not a starship",
		"school": "conjuration",
		"technomancer": "1"
	},
	{
		"name": "Remove Affliction",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Neutralize curses diseases infestations poisons and other harmful conditions affecting a creature.",
		"duration": "Instantaneous or (CASTERLEVEL*10) minutes; see text",
		"level": "3",
		"longText": "You remove impurities from a creature or object potentially neutralizing the curses diseases infestations poisons and other harmful conditions affecting it. If the target is a creature you must attempt a caster level check (1d20 + your caster level) for each curse disease infestation and poison affecting it (DC = 4 + the DC of the affliction). Success means that affliction is removed. Additionally if the target is blind or deaf due to an affliction or damage remove affliction restores vision and hearing unless the appropriate organ has been entirely removed from the creature's body. A creature that is cured with remove affliction takes no additional effects from the curses diseases infestations or poisons removed and any temporary effects are ended but the spell does not reverse instantaneous effects such as Hit Point damage temporary ability damage or effects that don't go away on their own (such as poison states). This spell cannot remove the curse from a cursed item though a successful caster level check enables the creature afflicted with any such cursed item to remove the curse and get rid of it. Since the spell's duration is instantaneous it does not prevent the target from suffering from the same curse disease infestation or poison after a new exposure at a later date. You can instead cast this spell to neutralize the poison in a poisonous creature or object for (CASTERLEVEL*10) minutes. If you cast it on a creature the creature can attempt a Will saving throw to negate the effect. Remove affliction counters bestow curse.",
		"range": "Touch",
		"save": "Will negates (harmless object)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.373",
		"resistance": "Yes (harmless object)",
		"target": "One creature or object",
		"witchwarper": "3"
	},
	{
		"name": "Remove Condition",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Remove one moderate harmful condition affecting a creature.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You remove any one of the following conditions affecting the target; frightened nauseated shaken sickened or staggered. If the condition is the result of a disease or another ongoing effect this spell removes the condition but does not cure the disease or ongoing effect and the target can regain the condition from that effect as normal potentially immediately. Lesser remove condition also doesn't cure or remove other damage or conditions the target is suffering from any source even the same source that caused the removed condition. Since this spell's duration is instantaneous it does not prevent the target from gaining the condition again. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.373",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"related": {
			"1": [
				"Remove Condition (Lesser)"
			],
			"5": [
				"Remove Condition (Greater)"
			]
		},
		"witchwarper": "2"
	},
	{
		"name": "Remove Condition (Greater)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Remove all harmful conditions affecting a creature.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "You remove all one of the following conditions affecting the target; cowering dazed frightened nauseated panicked paralyzed shaken sickened staggered and stunned. If the condition is the result of a disease or another ongoing effect this spell removes the condition but does not cure the disease or ongoing effect and the target can regain the condition from that effect as normal potentially immediately. Lesser remove condition also doesn't cure or remove other damage or conditions the target is suffering from any source even the same source that caused the removed condition. Since this spell's duration is instantaneous it does not prevent the target from gaining the condition again. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.373",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"related": {
			"1": [
				"Remove Condition (Lesser)"
			],
			"2": [
				"Remove Condition"
			]
		},
		"witchwarper": "5"
	},
	{
		"name": "Remove Condition (Lesser)",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Remove one minor harmful condition affecting a creature.",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You remove any one of the following conditions affecting the target; shaken sickened or staggered. If the condition is the result of a disease or another ongoing effect this spell removes the condition but does not cure the disease or ongoing effect and the target can regain the condition from that effect as normal potentially immediately. Lesser remove condition also doesn't cure or remove other damage or conditions the target is suffering from any source even the same source that caused the removed condition. Since this spell's duration is instantaneous it does not prevent the target from gaining the condition again. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.373",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"related": {
			"2": [
				"Remove Condition"
			],
			"5": [
				"Remove Condition (Greater)"
			]
		},
		"witchwarper": "1"
	},
	{
		"name": "Remove Radioactivity",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Remove ongoing radiation effects from a creature or object.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "You remove all ongoing effects of radiation from a single target if you succeed at a caster level check (DC = the DC associated with the radiation effect). The target is cured of both the radiation's poison effects and the radiation sickness disease moving the target to the healthy state on both tracks. When cast on an area a single casting of remove radioactivity removes radiation from a 20-foot-radius area around the point you touch. This spell has no power to negate naturally radioactive materials and as long as such materials remain in an area the radiation that was removed may return.",
		"range": "Touch",
		"save": "Fortitude negates (harmless object)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes (harmless object)",
		"target": "One creature or object or one 20-ft.-radius area",
		"technomancer": "4",
		"witchwarper": "4"
	},
	{
		"name": "Resilient Sphere",
		"castingTime": "1 standard action",
		"shortText": "Force globe protects but traps one target.",
		"duration": "(CASTERLEVEL) minutes (D)",
		"level": "4",
		"longText": "A 10-foot-diameter globe of shimmering force encloses the target creature. The sphere contains the target for the spell's duration. The sphere functions in the same way as a wall of force except it can be negated by dispel magic. A target inside the sphere can breathe normally. The sphere can't be physically moved either by creatures outside it or by the struggles of those within.",
		"range": "Close",
		"save": "Reflex negates",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes",
		"target": "One Large or smaller creature",
		"technomancer": "4",
		"witchwarper": "4"
	},
	{
		"name": "Resist Radiation",
		"shortText": "Automatically succeed at saving throws against weak radiation and suppress radiation sickness.",
		"castingTime": "1 standard action",
		"duration": "1 hour per CASTERLEVEL",
		"level": "2",
		"longText": "You protect targets from radiation. They succeed at saving throws against low radiation and radiation sickness with a DC of 13 or lower. If the target has radiation sickness with a saving throw DC of 13 or lower, the sickness’s effects are suppressed for the duration. Against radiation and radiation sickness with higher save DCs, this spell instead grants targets a +2 circumstance bonus to the saving throws.",
		"range": "Medium",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.140",
		"resistance": "No",
		"target": "Up to one creature per CASTERLEVEL, no two of which can be more than 30 ft apart",
		"school": "abjuration",
		"mystic": "2"
	},
	{
		"name": "Resistant Aegis",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Grant up to 10 creatures DR 5/- or energy resistance 5 to all energy types.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "5",
		"longText": "This spell functions as lesser resistant armor except as indicated above and the wearers and their gear gain DR 5/- or energy resistance 5 that protects against all five energy types.",
		"range": "30 ft.",
		"save": "Fortitude negates (harmless)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes (harmless)",
		"target": "Up to 10 creatures wearing armor within range",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Resistant Armor",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Grant DR 5/- or energy resistance 5 against two energy types.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "4",
		"longText": "Resistant armor grants the target (and its gear) protection from your choice of either kinetic damage or energy damage. If you choose kinetic damage the target and her gear gain DR 10/- that protects against bludgeoning piercing and slashing damage. If you choose energy damage pick any three of acid cold electricity fire and sonic damage. The target and her gear gain energy resistance 10 that protects against the chosen types of energy. This damage reduction or energy resistance doesn't stack with any damage reduction or energy resistance the target already has and multiple castings of this spell don't stack.",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes (harmless)",
		"target": "One creature wearing armor",
		"technomancer": "4",
		"related": {
			"3": [
				"Resistant Armor (Lesser)"
			],
			"6": [
				"Resistant Armor (Greater)"
			]
		},
		"witchwarper": "4"
	},
	{
		"name": "Resistant Armor (Greater)",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Grant DR 10/- or energy resistance 10 against three energy types.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "6",
		"longText": "Greater resistant armor grants the target (and its gear) protection from your choice of either kinetic damage or energy damage. If you choose kinetic damage the target and her gear gain DR 15/- that protects against bludgeoning piercing and slashing damage. If you choose energy damage pick any four of acid cold electricity fire and sonic damage. The target and her gear gain energy resistance 15 that protects against the chosen types of energy. This damage reduction or energy resistance doesn't stack with any damage reduction or energy resistance the target already has and multiple castings of this spell don't stack.",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes (harmless)",
		"target": "One creature wearing armor",
		"technomancer": "6",
		"related": {
			"3": [
				"Resistant Armor (Lesser)"
			],
			"4": [
				"Resistant Armor"
			]
		},
		"witchwarper": "6"
	},
	{
		"name": "Resistant Armor (Lesser)",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Grant DR 15/- or energy resistance 15 against four energy types.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "3",
		"longText": "Lesser resistant armor grants the target (and its gear) protection from your choice of either kinetic damage or energy damage. If you choose kinetic damage the target and her gear gain DR 5/- that protects against bludgeoning piercing and slashing damage. If you choose energy damage pick any two of acid cold electricity fire and sonic damage. The target and her gear gain energy resistance 5 that protects against the chosen types of energy. This damage reduction or energy resistance doesn't stack with any damage reduction or energy resistance the target already has and multiple castings of this spell don't stack.",
		"range": "Touch",
		"save": "Fortitude negates (harmless)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes (harmless)",
		"target": "One creature wearing armor",
		"technomancer": "3",
		"related": {
			"4": [
				"Resistant Armor"
			],
			"6": [
				"Resistant Armor (Greater)"
			]
		},
		"witchwarper": "3"
	},
	{
		"name": "Restoration",
		"mystic": "4",
		"castingTime": "3 rounds",
		"shortText": "Restores ability score drain and negative levels.",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "This spell functions as lesser restoration except it also removes temporary negative levels or 1 permanent negative level. You must spend 5 Resolve Points when casting this spell to remove a permanent negative level. This spell can't be used to remove more than 1 permanent negative level from a target in a 1-week period. Restoration heals all temporary ability damage and it restores all points permanently drained from a single ability score (your choice if more than one is drained). It also eliminates any fatigue or exhaustion suffered by the target but it doesn't remove any underlying source of fatigue or exhaustion. A target that has benefited from the removal of fatigue or exhaustion from this spell can't benefit from either effect again for 24 hours.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"2": [
				"Restoration (Lesser)"
			]
		}
	},
	{
		"name": "Restoration (Lesser)",
		"mystic": "2",
		"castingTime": "3 rounds",
		"shortText": "Dispel magical ability penalty or cure 1d4 ability damage.",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "Lesser restoration dispels any magical effects reducing one of the target's ability scores or it heals 1d4 temporary ability damage to one of the target's ability scores. It also eliminates any fatigue suffered by the creature or improves an exhausted condition to fatigued but it doesn't remove any underlying source of fatigue or exhaustion. It also doesn't heal permanent ability drain. A target that has benefited from the removal of fatigue or the reduction of exhaustion from lesser restoration can't benefit from either effect again for 24 hours.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.374",
		"resistance": "Yes",
		"target": "One creature",
		"related": {
			"4": [
				"Restoration"
			]
		}
	},
	{
		"name": "Retrocognition",
		"mystic": "5",
		"castingTime": "1 minute",
		"shortText": "Gain psychic impressions of past events in a certain location.",
		"duration": "Concentration up to (CASTERLEVEL) minutes",
		"level": "5",
		"longText": "This spell allows you to gain psychic impressions from past events that occurred in your current location. Retrocognition reveals psychic impressions from events that occurred over the course of the last hour throughout the first minute of the spell's duration followed by impressions from the next hour back throughout the next minute you concentrate and so on. If a psychically traumatic or turbulent event happened during that period you must succeed at a Will saving throw (DC = 15 20 or 25 depending on the severity of the traumatic or turbulent event) or lose your concentration on the spell. If you fail this saving throw the spell ends. At mystic level 16th and higher you can choose to collect impressions from over the course of a longer interval of time than an hour beginning at 1 week per minute of concentration (as listed below). The amount of detail you receive diminishes so this eventually makes it harder to distinguish impressions left by anything but the most major events. In most circumstances you can't glean information about what occurred during the Gap with this spell. [Mystic Level] 16th-17th 1 week per minute; 18th-19th 1 year per minute; 20th 1 decade per minute.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.375"
	},
	{
		"name": "Rewire Flesh",
		"castingTime": "1 standard action",
		"shortText": "Turn target partially into a robot dealing 3d6 damage per round and reducing speed.",
		"duration": "(CASTERLEVEL) rounds (D); see text",
		"level": "4",
		"longText": "Like rewriting the code that makes up a computer program you manipulate the target's DNA to painfully rewire that target's biological functions to mimic the cold and rigid processes of a robot. The target must succeed at a Will saving throw or all of its movement speeds are halved and it takes 3d6 slashing damage per round on its turn as its internal organs shift and transform to become more like the inner components of a robot. Each round the target can attempt a Fortitude saving throw to halve the damage this spell causes. While this spell is in effect the target's body becomes visibly more robotic; its voice is tinny and halting its movements are jerky and its face is unmoving and emotionless. The target has the flat-footed condition and it takes a -2 penalty to all Sense Motive checks as well as to all Charisma-based and Dexterity-based skill and ability checks.",
		"range": "Medium",
		"save": "Will negates and Fortitude half see text",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.375",
		"resistance": "Yes",
		"target": "One living creature",
		"technomancer": "4",
		"related": {
			"6": [
				"Rewire Flesh (Mass)"
			]
		}
	},
	{
		"name": "Rewire Flesh (Mass)",
		"castingTime": "1 standard action",
		"shortText": "Deal 3d6 damage per round and reducing targets' speed during that time.",
		"duration": "(CASTERLEVEL) rounds (D); see text",
		"level": "6",
		"longText": "Like rewriting the code that makes up a computer program you manipulate the targets' DNA to painfully rewire their biological functions to mimic the cold and rigid processes of a robot. The targets must succeed at a Will saving throw or all their movement speeds are halved and they take 3d6 slashing damage per round on their turn as their internal organs shift and transform to become more like the inner components of a robot. Each round the targets can attempt a Fortitude saving throw to halve the damage this spell causes. While this spell is in effect the targets' bodies becomes visibly more robotic; their voices are tinny and halting their movements are jerky and their faces are unmoving and emotionless. The targets have the flat-footed condition and take a -2 penalty to all Sense Motive checks as well as to all Charisma-based and Dexterity-based skill and ability checks.",
		"range": "Medium",
		"save": "Will negates and Fortitude half see text",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.376",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL) living creatures no two of which can be more than 30 ft. apart",
		"technomancer": "6",
		"related": {
			"4": [
				"Rewire Flesh"
			]
		}
	},
	{
		"name": "Scan Environment",
		"shortText": "You analyze the naturally occurring environment in the area, learning the state of the atmosphere, biomes, and gravity.",
		"castingTime": "1 minute",
		"area": "emanation with radius of 1 mile per CASTERLEVEL centered on you",
		"duration": "concentration, up to 1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "You analyze the naturally occurring environment in the area, learning the state of the atmosphere, biomes, and gravity. You do not learn the location of or direction to these conditions, only their presence. However, after concentrating for a time, you can learn the following additional information. 1 Minute: Forecast the weather for the next 48 hours, including the direction it will come from. 5 Minutes: Learn which atmospheres, biomes, and gravity are in the area, if they vary, as well as the direction and distance to those elements. 10 Minutes: Learn if anything in the area presents an environmental hazard, including cold or heat dangers (at what temperature range), radiation (at what severity), smoke effects, and underwater conditions. You gain a general sense of where and how far away these dangers are.",
		"range": "1 mile per CASTERLEVEL",
		"page": "p.23",
		"school": "divination",
		"mystic": "1",
		"technomancer": "1",
		"witchwarper": "1",
		"FIXME": "could use bullet points"
	},
	{
		"name": "Security Protocol",
		"shortText": "Protect a building or starship with various technological and magical defenses.",
		"castingTime": "30 minutes",
		"duration": "2 hours per CASTERLEVEL",
		"level": "6",
		"longText": "You protect one building or starship you are within by outfitting it with various technological and magical effects. This spell can protect a contiguous area delineated by walls or other enclosed structures, such as part of a large indoor complex, but you must designate the area along the walls or other significant partitions that separate rooms and corridors—the area cannot protect only part of any room or hallway. Once cast, this spell creates the following effects. Effects that allow saving throws or spell resistance say so. Spell effects are treated as if you had cast that spell at your caster level, have a save DC equal to this spell’s, and last as long as this spell does. Confusion: Where choices in direction exist, a minor confusing effect imposes a 50% chance that the creature goes in a random wrong direction. This is an enchantment, mind-affecting effect. Spell resistance applies. Doors: Doors you choose are affected as if by security seal. Fog: Areas you designate are filled with dense fog clouds that obscure the area like a fog cloud spell, up to a number of clouds equal to half your caster level. Hidden Doors: One door per caster level can be concealed with a 1st-level holographic image that makes it appear to be a plain wall. This effect allows a Will saving throw to disbelieve the illusion, with a DC equal to this spell’s DC. Laser Nets: Areas you designate are protected as if by the laser net spell . This effect allows Reflex saves as described in that spell, with a DC equal to this spell’s DC. In addition, when you cast this spell, you can place one of the following effects. Dancing lights in four corridors, as the spell. Grease in two places. This effect allows Reflex saving throws as described in that spell, with a DC equal to this spell’s DC. Logic bomb on two computers in the area. This effect allows a Fortitude saving throw as described in that spell, and spell resistance applies. A smog bank in two places.",
		"range": "See text",
		"save": "See text",
		"source": "Character Operations Manual",
		"page": "p.140",
		"resistance": "See text",
		"target": "One buiilding or starship up to 200 sq ft per CASTERLEVEL in size; see text",
		"school": "abjuration",
		"technomancer": "6",
		"FIXME": "Needs special formatting, etc"
	},
	{
		"name": "Security Seal",
		"castingTime": "1 standard action",
		"shortText": "Magically lock a portal a container or a security system.",
		"duration": "24 hours",
		"level": "2",
		"longText": "A security seal spell magically locks a single door container with a lid or latch portal or computer system. Casting this spell requires you to spend 1 Resolve Point. You can freely bypass your own security seal without affecting it. If the sealed object has a lock the DC to open that lock increases by 5 while it remains attached to the object. If the object doesn't have a lock this spell creates one that can only be opened with a successful DC 20 Engineering check to disable devices. If the sealed object has computer security the DC to bypass that security increases by 5. A door or object secured with this spell can be opened only by breaking in or with a successful dispel magic or knock spell. Add 5 to the normal DC to break open a door or portal affected by this spell. A knock spell removes the security seal automatically counting as one means of closure.",
		"range": "Touch",
		"save": "None",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.376",
		"resistance": "No",
		"target": "One door container or portal up to (CASTERLEVEL*30) sq. ft. in size",
		"technomancer": "2"
	},
	{
		"name": "See Invisibility",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "See invisible creatures or objects.",
		"duration": "(CASTERLEVEL*10) minutes (D)",
		"level": "2",
		"longText": "You can see any invisible or ethereal objects or beings within your range of vision as if they were normally visible. Such creatures are visible to you as translucent shapes allowing you easily to discern the difference between visible and invisible or ethereal creatures. The spell doesn't reveal the method used to obtain invisibility doesn't reveal illusions or enable you to see through opaque objects and doesn't reveal creatures that are simply concealed hiding or otherwise hard to see.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.376",
		"technomancer": "2",
		"witchwarper": "2"
	},
	{
		"name": "Seeking Shot",
		"shortText": "Cause a single attack to ignore cover and concealment",
		"castingTime": "1 standard action",
		"duration": "See text",
		"level": "1",
		"longText": "You create a spiritual link between a weapon you touch and one target you can perceive with a precise sense at the time of casting. The next attack made with that weapon against that target (as long as it is within 1 minute) ignores cover and concealment. If the attack is a ranged attack, it does not need a line of effect as long as some route exists between the weapon and the target (regardless of how circuitous that route is). The attack is subject to the normal penalties from range increments.",
		"range": "Touch",
		"save": "None",
		"source": "Pact Worlds",
		"page": "p.207",
		"resistance": "No",
		"target": "One weapon",
		"school": "divination",
		"mystic": "1"
	},
	{
		"name": "Shadow Body",
		"shortText": "Merge yourself with the essence of Shadow, giving you great powers for a time.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL",
		"level": "5",
		"longText": "You transform the matter of your body and any objects you carry or wear into the essence of the Shadow Plane. You are visible as an unattached shadow in bright light or normal light, but you gain total concealment in dim light or darkness (reduced to concealment against creatures that have darkvision). Your body and gear are incorporeal, but you can’t fly or pass through solid objects or creatures, and your gear can’t be removed from you or used by anyone. You can move at your normal speed along any surface, including horizontal and vertical surfaces and liquids, and difficult terrain doesn’t slow you. However, you can’t attack physically or manipulate objects. You can speak, cast spells that require no items to cast, and perform mental actions. If you can use spells that have a range of touch and such a spell requires an attack roll, you target EAC. If you lose consciousness, you and your gear return to your natural form.",
		"range": "Personal",
		"save": "None",
		"source": "Starfinder #10: The Diaspora Strain",
		"page": "p.53",
		"resistance": "No",
		"target": "Self",
		"school": "transmutation (polymorph, shadow)",
		"mystic": "5",
		"technomancer": "5"
	},
	{
		"name": "Shadow Jump",
		"shortText": "Travel through the Shadow Plane to move to a distant shadow.",
		"castingTime": "1 standard action",
		"duration": "concentration, 1 round + 1 round per CASTERLEVEL/3",
		"level": "4",
		"longText": "Your body forms a connection to the Shadow Plane, allowing you to teleport through it, rather than the Astral Plane, with ease. While this spell is active, as a move action, you can teleport to any area of dim light or darkness you can see within range. If you leave a threatened space, you have concealment (20% miss chance) against any foe that makes an attack of opportunity against you.",
		"range": "Close",
		"save": "None, Will negates (object)",
		"source": "Starfinder #12: Heart of Night",
		"page": "p.53",
		"resistance": "No, yes (object)",
		"target": "You and touched objects",
		"school": "conjuration (shadow, teleportation)",
		"mystic": "4",
		"technomancer": "4"
	},
	{
		"name": "Shadow Walk",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Step into a shadowy realm to travel to a destination rapidly.",
		"duration": "(CASTERLEVEL) hours (D)",
		"level": "6",
		"longText": "To use shadow walk you must be in an area of dim light. You and any creature or vehicle you touch are then transported along a coiling path of shadowstuff to the edge of the Material Plane where it borders the Plane of Shadow. The effect is largely illusory but the path is quasi-real. All targets affected must be in direct contact with one another. A Large target counts as two Medium targets a Huge target counts as four Medium targets and so forth. Creatures you transport this way can opt to follow you wander off through the plane or stumble back into the Material Plane (50% chance for either of the latter results if the creatures are lost or abandoned by you). Creatures unwilling to accompany you into the Plane of Shadow can attempt a Will saving throw to negate the effect. In the region of shadow you move at a rate of 200 miles per hour. Because of the blurring of reality between the Plane of Shadow and the Material Plane you can't make out details of the terrain or areas you pass over during transit nor can you predict perfectly where your travel will end. It's impossible to judge distances accurately making the spell virtually useless for scouting or spying. Furthermore when the spell effect ends you are shunted 1d10 * 100 feet in a random horizontal direction from your desired endpoint. If this would place you within a solid object you (and any creatures with you) are shunted to the nearest empty space available but the strain of this activity renders each creature fatigued (no saving throw). Shadow walk can also be used to travel to other planes that border on the Plane of Shadow (except for the Drift) but this usage requires you to travel across the Plane of Shadow to arrive at a border with another plane of reality which takes 1d4 hours.",
		"range": "Touch",
		"save": "Will negates (object)",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.376",
		"resistance": "Yes (object)",
		"target": "Up to (CASTERLEVEL) Medium creatures or vehicles",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Shadowy Fleet",
		"castingTime": "1 standard action",
		"shortText": "Illusion of starships deals 3d6 piercing damage and 3d6 fire damage to all creatures in the affected area.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "6",
		"longText": "You create a powerful vision of a fleet of hostile starships overhead that appears to rain fiery laser shots mercilessly at your enemies. The ships appear to be 1000 feet overhead and target a 60-foot-radius area that you designate on the ground. You can't cast this spell indoors unless you are within a structure that a fleet of starships could believably fit within. Each round this spell is in effect the starships deal 3d6 piercing damage and 3d6 fire damage to all hostile creatures in the area as the ships appear to shoot lasers at your enemies. If a creature interacts with the illusion (such as by taking damage) it can attempt a Will saving throw to take only half of this damage per round for the remainder of the spell. Regardless of whether a creature disbelieves the illusion each round it takes damage from this spell it can attempt a Reflex saving throw to instead take half damage; thus if a creature that succeeded at its Will saving throw also succeeds at its Reflex save in a given round it takes one-quarter the spell's damage that round.",
		"range": "Long",
		"save": "Will disbelief and Reflex half see text",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.376",
		"resistance": "Yes",
		"target": "60-ft. radius",
		"technomancer": "6"
	},
	{
		"name": "Share Language",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Target understands chosen languages.",
		"duration": "24 hours",
		"level": "1",
		"longText": "For 24 hours the target can read understand and communicate to the best of its ability in up to three languages that you already know. This doesn't change the physical nature of the creature (if it lacks a means of speech it still can't talk) or its attitude toward you. It does however allow intelligent creatures that normally have no language to understand and (if physically capable) communicate in the languages granted by this spell.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.377",
		"resistance": "Yes (harmless)",
		"target": "One creature"
	},
	{
		"name": "Share Memory",
		"shortText": "Target shares memory with you and five others.",
		"castingTime": "1 round",
		"duration": "Concentration up to 1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "You allow the target to share a memory with you and up to five other creatures, all of whom must be willing and within 30 feet of the target when you cast this spell. You designate which memories the target shares when you cast this spell, although the target can guide you in this designation. The designated memory can be as specific as “the conversation you just had with the captain” or as vague as “your favorite childhood memory of being with your father.” For the duration, those sharing the memory experience it through the target’s senses as the target did. Anyone sharing the memory can cease participation at any time. If you end the effect for yourself, or the target ceases sharing, the spell ends. If the memory’s length exceeds the duration, it plays out while this spell lasts and then ends with the duration. This spell does not work on memories that have been magically altered or removed through spells such as displace memory or modify memory.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.141",
		"resistance": "Yes",
		"target": "One willing creature",
		"school": "divination",
		"mystic": "1"
	},
	{
		"name": "Shield Other",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "You take half of the target's Hit Point damage.",
		"duration": "(CASTERLEVEL) hours (D)",
		"level": "2",
		"longText": "This spell wards the target and creates a mystic connection between you and the target so that some of its wounds are transferred to you. Casting this spell requires you to spend 1 Resolve Point. The target takes only half damage from all wounds and attacks (including those dealt by special abilities) that deal Hit Point damage and you take the amount of damage not taken by the target. Only Hit Point damage is transferred in this manner; the target's Stamina Points are damaged as normal. If you still have Stamina Points you take the damage to your Stamina Points before Hit Points as with normal damage. Forms of harm that do not involve Hit Points such as charm effects temporary ability damage ability drain permanent negative levels and death effects are not affected. When the spell ends subsequent damage is no longer divided between the target and you but damage already split is not reassigned to the target. If you and the target of the spell move out of range of each other the spell ends.",
		"range": "Close",
		"save": "Will negates (harmless)",
		"school": "Abjuration",
		"source": "Core Rulebook",
		"page": "p.377",
		"resistance": "Yes (harmless)",
		"target": "One creature"
	},
	{
		"name": "Shifting Surge",
		"shortText": "A creature or weapon can deal a different type of energy damage as well as extra damage.",
		"castingTime": "1 standard action",
		"duration": "1 round",
		"level": "1",
		"longText": "You touch a willing creature and affect one of its energy damage attacks or weapons, changing the energy damage type of one of its attacks to one other type until the end of your next turn. Even if you don’t change the damage, the next affected attack that hits deals 2d6 additional damage if it targets only one target, or 1d6 additional damage if it affects an area or multiple targets.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.141",
		"resistance": "Yes",
		"target": "One willing creature or object",
		"school": "transmutation",
		"witchwarper": "1"
	},
	{
		"name": "Shrink Object (Level 1)",
		"shortText": "You shrink the target item, transmuting it into a smaller version of itself.",
		"castingTime": "1 round",
		"duration": "1 day per CASTERLEVEL",
		"level": "1",
		"longText": "You shrink the target item, transmuting it into a smaller version of itself. You can target an attended object only if the creature attending the object is willing, and you cannot target worn objects. While shrunken, the object takes up less space and bulk, but it ceases to function. When the spell ends, the object returns to normal size, moving through any nearby opening it can to reach a space that can accommodate it, but it does not expand with any force and does no harm to containers too small for it. This spell can affect objects of a size and bulk limited by the spell’s level. Likewise, the spell’s level determines the target’s size after the spell takes effect. For this spell, vehicles and other objects without a specified weight count as an object with bulk equal to the number of squares of the object’s space squared. 1st: You can target an object up to 1 cubic foot in size and weighing up to 10 bulk. The target’s dimensions are reduced to a 6-inch cube, and its bulk is reduced to L.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"source": "Character Operations Manual",
		"page": "p.29",
		"resistance": "Yes",
		"target": "One object touched; see text",
		"school": "transmutation",
		"technomancer": "1",
		"witchwarper": "1",
		"related": {
            "2":["Shrink Object (Level 2)"],
            "3":["Shrink Object (Level 3)"],
            "4":["Shrink Object (Level 4)"],
            "5":["Shrink Object (Level 5)"],
            "6":["Shrink Object (Level 6)"]
        }
    },
    {
		"name": "Shrink Object (Level 2)",
		"shortText": "You shrink the target item, transmuting it into a smaller version of itself.",
		"castingTime": "1 round",
		"duration": "1 day per CASTERLEVEL",
		"level": "2",
		"longText": "You shrink the target item, transmuting it into a smaller version of itself. You can target an attended object only if the creature attending the object is willing, and you cannot target worn objects. While shrunken, the object takes up less space and bulk, but it ceases to function. When the spell ends, the object returns to normal size, moving through any nearby opening it can to reach a space that can accommodate it, but it does not expand with any force and does no harm to containers too small for it. This spell can affect objects of a size and bulk limited by the spell’s level. Likewise, the spell’s level determines the target’s size after the spell takes effect. For this spell, vehicles and other objects without a specified weight count as an object with bulk equal to the number of squares of the object’s space squared. 2nd: As the 1st-level version, but you shrink an object up to 4 cubic feet in size weighing up to 40 bulk. If you target an object that’s 1 cubic foot or smaller and weighs no more than 10 bulk, its dimensions are further reduced to a 1-inch cube and its bulk is reduced to negligible.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"source": "Character Operations Manual",
		"page": "p.29",
		"resistance": "Yes",
		"target": "One object touched; see text",
		"school": "transmutation",
		"technomancer": "2",
		"witchwarper": "2",
		"related": {
            "1":["Shrink Object (Level 1)"],
            "3":["Shrink Object (Level 3)"],
            "4":["Shrink Object (Level 4)"],
            "5":["Shrink Object (Level 5)"],
            "6":["Shrink Object (Level 6)"]
        }
    },
    {
		"name": "Shrink Object (Level 3)",
		"shortText": "You shrink the target item, transmuting it into a smaller version of itself.",
		"castingTime": "1 round",
		"duration": "1 day per CASTERLEVEL",
		"level": "3",
		"longText": "You shrink the target item, transmuting it into a smaller version of itself. You can target an attended object only if the creature attending the object is willing, and you cannot target worn objects. While shrunken, the object takes up less space and bulk, but it ceases to function. When the spell ends, the object returns to normal size, moving through any nearby opening it can to reach a space that can accommodate it, but it does not expand with any force and does no harm to containers too small for it. This spell can affect objects of a size and bulk limited by the spell’s level. Likewise, the spell’s level determines the target’s size after the spell takes effect. For this spell, vehicles and other objects without a specified weight count as an object with bulk equal to the number of squares of the object’s space squared. 3rd: As the 1st-level version, but you can shrink an object up to 7 cubic feet in size weighing up to 70 bulk. If you target an object that’s 4 cubic feet or smaller and weighs no more than 40 bulk, its dimensions are further reduced to a 1-inch cube and its bulk is reduced to negligible.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"source": "Character Operations Manual",
		"page": "p.29",
		"resistance": "Yes",
		"target": "One object touched; see text",
		"school": "transmutation",
		"technomancer": "3",
		"witchwarper": "3",
		"related": {
            "1":["Shrink Object (Level 1)"],
            "2":["Shrink Object (Level 2)"],
            "4":["Shrink Object (Level 4)"],
            "5":["Shrink Object (Level 5)"],
            "6":["Shrink Object (Level 6)"]
        }
    },
    {
		"name": "Shrink Object (Level 4)",
		"shortText": "You shrink the target item, transmuting it into a smaller version of itself.",
		"castingTime": "1 round",
		"duration": "1 day per CASTERLEVEL",
		"level": "4",
		"longText": "You shrink the target item, transmuting it into a smaller version of itself. You can target an attended object only if the creature attending the object is willing, and you cannot target worn objects. While shrunken, the object takes up less space and bulk, but it ceases to function. When the spell ends, the object returns to normal size, moving through any nearby opening it can to reach a space that can accommodate it, but it does not expand with any force and does no harm to containers too small for it. This spell can affect objects of a size and bulk limited by the spell’s level. Likewise, the spell’s level determines the target’s size after the spell takes effect. For this spell, vehicles and other objects without a specified weight count as an object with bulk equal to the number of squares of the object’s space squared. 4th: As the 1st-level version, but you can shrink an object up to 10 cubic feet in size weighing up to 100 bulk. If you target an object that’s 7 cubic feet or smaller and weighs no more than 70 bulk, dimensions are further reduced to a 1-inch cube and its bulk is reduced to negligible.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"source": "Character Operations Manual",
		"page": "p.29",
		"resistance": "Yes",
		"target": "One object touched; see text",
		"school": "transmutation",
		"technomancer": "4",
		"witchwarper": "4",
		"related": {
            "1":["Shrink Object (Level 1)"],
            "2":["Shrink Object (Level 2)"],
            "3":["Shrink Object (Level 3)"],
            "5":["Shrink Object (Level 5)"],
            "6":["Shrink Object (Level 6)"]
        }
    },
    {
		"name": "Shrink Object (Level 5)",
		"shortText": "You shrink the target item, transmuting it into a smaller version of itself.",
		"castingTime": "1 round",
		"duration": "1 day per CASTERLEVEL",
		"level": "5",
		"longText": "You shrink the target item, transmuting it into a smaller version of itself. You can target an attended object only if the creature attending the object is willing, and you cannot target worn objects. While shrunken, the object takes up less space and bulk, but it ceases to function. When the spell ends, the object returns to normal size, moving through any nearby opening it can to reach a space that can accommodate it, but it does not expand with any force and does no harm to containers too small for it. This spell can affect objects of a size and bulk limited by the spell’s level. Likewise, the spell’s level determines the target’s size after the spell takes effect. For this spell, vehicles and other objects without a specified weight count as an object with bulk equal to the number of squares of the object’s space squared. 5th: As the 1st-level version, but you can shrink an object up to 13 cubic feet in size weighing up to 130 bulk. If you target an object that’s 10 cubic feet or smaller and weighs no more than 10 bulk, its dimensions are further reduced to a 1-inch cube and its bulk is reduced to negligible.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"source": "Character Operations Manual",
		"page": "p.29",
		"resistance": "Yes",
		"target": "One object touched; see text",
		"school": "transmutation",
		"technomancer": "5",
		"witchwarper": "5",
		"related": {
            "1":["Shrink Object (Level 1)"],
            "2":["Shrink Object (Level 2)"],
            "3":["Shrink Object (Level 3)"],
            "4":["Shrink Object (Level 4)"],
            "6":["Shrink Object (Level 6)"]
        }
    },
    {
		"name": "Shrink Object (Level 6)",
		"shortText": "You shrink the target item, transmuting it into a smaller version of itself.",
		"castingTime": "1 round",
		"duration": "1 day per CASTERLEVEL",
		"level": "6",
		"longText": "You shrink the target item, transmuting it into a smaller version of itself. You can target an attended object only if the creature attending the object is willing, and you cannot target worn objects. While shrunken, the object takes up less space and bulk, but it ceases to function. When the spell ends, the object returns to normal size, moving through any nearby opening it can to reach a space that can accommodate it, but it does not expand with any force and does no harm to containers too small for it. This spell can affect objects of a size and bulk limited by the spell’s level. Likewise, the spell’s level determines the target’s size after the spell takes effect. For this spell, vehicles and other objects without a specified weight count as an object with bulk equal to the number of squares of the object’s space squared. 6th: As the 1st-level version, but you can shrink an object up to 16 cubic feet in size weighing up to 160 bulk. If you target an object that’s 13 cubic feet or smaller and weighs no more than 130 bulk, its dimensions are further reduced to a 1-inch cube and its bulk is reduced to negligible.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"source": "Character Operations Manual",
		"page": "p.29",
		"resistance": "Yes",
		"target": "One object touched; see text",
		"school": "transmutation",
		"technomancer": "6",
		"witchwarper": "6",
		"related": {
            "1":["Shrink Object (Level 1)"],
            "2":["Shrink Object (Level 2)"],
            "3":["Shrink Object (Level 3)"],
            "4":["Shrink Object (Level 4)"],
            "5":["Shrink Object (Level 5)"]
        }
	},
	{
		"name": "Slice Reality",
		"shortText": "Tear gashes in reality, dealing 2d6 damage to all targets or 2d6 damage plus staggering a single target.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "2",
		"longText": "You expose targets to churning entropy which turns parts of their body sickly and black. Each target takes 2d6 damage. A successful Fortitude save halves this damage. You can focus on only one target rather than multiple. If you target only a single creature with this spell, the target is also staggered for a number of rounds equal to your caster level.",
		"range": "Medium",
		"save": "Fortitude half",
		"source": "Character Operations Manual",
		"page": "p.141",
		"resistance": "Yes",
		"target": "1 creature + 1 additional creature per CASTERLEVEL/3",
		"school": "evocation",
		"witchwarper": "2"
	},
	{
		"name": "Slithering Chain",
		"shortText": "Summon a chain from the Shadow Plane to trip your enemy.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "1",
		"longText": "You call forth a chain from the Shadow Plane, causing it to burst out from the ground and attempt to hinder a target within the spell’s range. The chain attempts a trip combat maneuver against the target; its attack bonus is equal to your base attack bonus + your key ability score modifier + 4. If the chain successfully trips the target, that target must attempt a Will saving throw or become shaken for 1d4 rounds. You can cast this spell as a full action. If you do, you summon two chains instead of one. Each chain attempts its combat maneuver separately and they must attack two different targets within the spell’s range.",
		"range": "Close",
		"save": "Will partial",
		"source": "Starfinder #12: Heart of Night",
		"page": "p.53",
		"resistance": "No",
		"school": "conjuration (summoning)",
		"effect": "a chain (or chains) sharpened at one end",
		"mystic": "1"
	},
	{
		"name": "Slow",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "(CASTERLEVEL) creatures move and act slower.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "3",
		"longText": "An affected creature moves and attacks at a drastically slowed rate. Creatures affected by this spell are staggered (see page 277) and can take only a single move action or standard action each turn but not both and it can't take full actions. A slowed creature moves at half its normal speed (round down to the next 5-foot increment). Multiple slow effects don't stack. Slow counters and negates haste.",
		"range": "Close",
		"save": "Will negates",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.377",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Smog Bank",
		"shortText": "Noxious fog cloud sickens creatures.",
		"castingTime": "1 standard action",
		"area": "20 ft radius spread",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "3",
		"longText": "You create a noxious cloud similar to fog cloud that is harmful to living creatures. Smog bank obscures sight just as fog cloud does. Living creatures without environmental protections that are in the area when the spell is cast or who enter the area must attempt a Fortitude save or be sickened for as long as they remain in the cloud and for 1d4+1 rounds thereafter.",
		"range": "Medium",
		"save": "Fortitude negates; see text",
		"source": "Character Operations Manual",
		"page": "p.141",
		"resistance": "No",
		"school": "conjuration (creation)",
		"technomancer": "3"
	},
	{
		"name": "Snuff Life",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Instantly kill or massively damage (CASTERLEVEL/2) creatures depending on targets' CRs.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You twist the essence of life that flows through your targets snuffing the spark out of weaker creatures and debilitating or disabling others. This spell's effects depend on each target's CR. A creature of CR 5 or lower is slain by this spell. If it succeeds at a Fortitude saving throw it is instead reduced to 1 Hit Point. A creature of CR 6-10 takes 10d20 damage and is stunned for 3 rounds. If it succeeds at a Fortitude saving throw it takes half damage and negates the stunned effect. A creature of CR 11-14 takes 8d20 damage and is staggered for 3 rounds. If it succeeds at a Fortitude saving throw it takes half damage and negates the staggered effect. A creature of CR 15 or higher takes 6d20 damage. If it succeeds at a Fortitude saving throw it takes half damage. Regardless of whether the target succeeds at its saving throw it still might die from the damage this spell deals though in this case the spell is not a death effect.",
		"range": "Medium",
		"save": "Fortitude partial see text",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.377",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL/2) creatures no two of which can be more than 30 ft. apart"
	},
	{
		"name": "Song Of The Cosmos",
		"shortText": "Creatures near you must succeed at a Will saving throw or be fascinated for 1 round.",
		"castingTime": "1 standard action",
		"area": "20 ft radius spread centered on you",
		"duration": "1 round",
		"level": "2",
		"longText": "You thrum a discordant tune that underlies existence and hints at the deep secrets of the universe. Creatures in the area must succeed at a Will saving throw or be fascinated for the duration.",
		"save": "Will negates",
		"source": "Character Operations Manual",
		"page": "p.141",
		"resistance": "Yes",
		"school": "enchantment (compulsion, mind-affecting)",
		"mystic": "2",
		"witchwarper": "2",
		"related": {
            "4": ["Song Of The Cosmos, Greater"]
        }
	},
	{
		"name": "Song Of The Cosmos, Greater",
		"shortText": "Creatures near you are fascinated or dazzled for 1d4 rounds.",
		"castingTime": "1 standard action",
		"area": "20 ft radius spread centered on you",
		"duration": "1d4+1 rounds",
		"level": "4",
		"longText": "As song of the cosmos, except as noted above, and creatures that fail their Will saves are also dazzled for the duration.",
		"save": "Will negates",
		"source": "Character Operations Manual",
		"page": "p.141",
		"resistance": "Yes",
		"school": "enchantment (compulsion, mind-affecting)",
		"mystic": "4",
		"witchwarper": "4",
		"related": {
            "2":["Song Of The Cosmos"]
        }
	},
	{
		"name": "Soothing Protocol",
		"castingTime": "1 standard action",
		"shortText": "Calm a target hostile technological construct.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "4",
		"longText": "Waves of calming programming ebb from your touch potentially stabilizing a construct's harmful intentions toward you and your allies. The target construct must have a CR lower than (CASTERLEVEL); if it does the construct is convinced that you and your allies pose no threat. It can't take violent actions against you or your allies and it can't do anything that would otherwise harm or threaten you (though it continues to carry out orders to take actions that do not harm or threaten you). Any aggressive action or damage dealt by you or your allies to a construct soothed in this way or its allies immediately ends this spell's effects (and could cause the construct to attack you if it was doing so previously). If an affected construct is under the control of a spellcaster or another creature the controlling creature can spend a full\\ action to remove soothing protocol as long as it can either touch the construct or give it an order.",
		"range": "Touch",
		"save": "None",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.377",
		"resistance": "Yes",
		"target": "One construct with the technological subtype; see text",
		"technomancer": "4"
	},
	{
		"name": "Speak with Dead",
		"mystic": "3",
		"castingTime": "10 minutes",
		"shortText": "Corpse answers up to six questions.",
		"duration": "(CASTERLEVEL) minute",
		"level": "3",
		"longText": "You grant the semblance of life to a corpse allowing it to answer questions. You can ask up to six questions. The corpse's knowledge is limited to what it knew during life including the languages it spoke. Answers are brief cryptic or repetitive especially if the creature would have opposed you in life. If the dead creature was friendly or helpful toward you in life the spell works automatically. Otherwise the corpse can attempt a Will saving throw to resist the spell as if it were alive. On a successful save the corpse can refuse to answer your questions or attempt to deceive you using its Bluff skill. The target can speak only about what it knew in life. It can't answer any questions that pertain to events that occurred after its death. If the corpse has been subjected to speak with dead within the past week this spell fails. You can cast this spell on a corpse that has been deceased for any amount of time but the body must be mostly intact to be able to respond. A damaged corpse might be able to give partial answers or partially correct answers but it must have at least a mouth in order to speak at all. This spell does not affect a corpse that has been turned into an undead creature.",
		"range": "10 ft.",
		"save": "Will negates see text",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.378",
		"resistance": "No",
		"target": "One dead creature",
		"witchwarper": "3"
	},
	{
		"name": "Spider Climb",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Grant ability to walk on walls and ceilings.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "2",
		"longText": "The target can climb and travel on vertical surfaces or even traverse ceilings as well as a spider does. An affected creature with four limbs must have three limbs free (not holding equipment or being used to perform skills and so on) to climb in this manner. A creature with six limbs needs only four available. In general other creatures must have 75% of their limbs available to benefit from this spell. The target gains a climb speed of 20 feet (and the +8 racial bonus to Athletics checks to climb granted by that climb speed); furthermore it doesn't need to attempt Athletics checks to climb to traverse a vertical or horizontal surface (even upside down). An affected creature climbing in this way is not flat-footed while climbing and opponents get no special bonus to their attacks against it. The creature however can't use the run action while climbing.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.378",
		"resistance": "Yes",
		"target": "One creature",
		"technomancer": "2"
	},
	{
		"name": "Spirit-bound Armor",
		"shortText": "A benevolent spirit steadies a creature wearing armor, offsetting flat-footed and off-kilter penalties.",
		"castingTime": "1 standard action",
		"duration": "1 round per CASTERLEVEL",
		"level": "1",
		"longText": "You divert a benevolent spirit from the River of Souls to temporarily inhabit a suit of armor. The spirit steadies the nerves and balance of the creature wearing the armor. If the target becomes flat-footed during the duration, it ignores the penalty to AC that condition imposes. Similarly, the off-kilter condition has no effect on the target while this spell is in effect.",
		"range": "Close",
		"save": "Will (harmless)",
		"source": "Character Operations Manual",
		"page": "p.141",
		"resistance": "Yes",
		"target": "One suit of armor",
		"school": "necromancy",
		"mystic": "1"
	},
	{
		"name": "Spirit-bound Computer",
		"shortText": "A benevolent spirit inhabits a computer and can make Computers checks you request.",
		"castingTime": "1 standard action",
		"duration": "Concentration, up to 1 minute per CASTERLEVEL",
		"level": "1",
		"longText": "You divert a benevolent spirit from the River of Souls to inhabit a computer. You can communicate with the spirit while you concentrate; the spirit is trained in Computers and can make Computers checks you request with a total bonus equal to 3 + your caster level + your key ability score modifier.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.142",
		"resistance": "Yes",
		"target": "One computer system",
		"school": "necromancy",
		"mystic": "1"
	},
	{
		"name": "Stabilize",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Cause a dying creature to stabilize.",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "If the target of this spell has 0 Hit Points and is dying it automatically stabilizes. If the creature later takes damage it is no longer stable.",
		"range": "Close",
		"save": "Will negates (harmless)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.378",
		"resistance": "Yes (harmless)",
		"target": "One living creature"
	},
	{
		"name": "Star Storm",
		"shortText": "Hailing plasma deals 6d8 electricity damage and 6d8 fire damage to creatures and objects in the area.",
		"castingTime": "1 standard action",
		"area": "Cylinder (40 ft radius, 40 ft high)",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "Stellar plasma rains down in the area, dealing 6d8 electricity damage and 6d8 fire damage to creatures and objects in the area.",
		"range": "Medium",
		"save": "Reflex half",
		"source": "Character Operations Manual",
		"page": "p.142",
		"resistance": "Yes",
		"school": "evocation",
		"mystic": "6",
		"witchwarper": "6"
	},
	{
		"name": "Status",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Monitor condition and position of allies.",
		"duration": "(CASTERLEVEL) hours",
		"level": "2",
		"longText": "When you need to keep track of comrades who get separated status allows you to mentally monitor their relative positions and general conditions. You are aware of the direction of and distance to the creatures and any conditions or states affecting them; confused diseased dying nauseated panicked poisoned staggered stunned unconscious unharmed wounded wounded and out of Stamina points and the like. Once the spell has been cast upon the targets the distance between them and the caster does not affect the spell as long as they are on the same plane of existence. If a target leaves the plane (including via Drift travel) or dies the spell ceases to function for that creature.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.379",
		"resistance": "Yes (harmless)",
		"target": "Up to (CASTERLEVEL/3) living creatures touched",
		"witchwarper": "2"
	},
	{
		"name": "Subjective Reality",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "You convince yourself one creature or object is an illusion.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "6",
		"longText": "Choose one object or creature you can see within long range ((400+CASTERLEVEL*40) feet). You alter your perceptions to become convinced the target is an illusion. For you the target becomes transparent and does not create sound or smell. Until the spell ends you can move through the target unimpeded and the target can move through you. The target's nonmagical attacks can't harm you and the target's magical attacks deal half damage to you. The target's non-damaging magical abilities have only a 50% chance of affecting you and you are immune to all its sonic language-dependent and scent-based attacks. However your attacks deal no damage to the target and your magical abilities don't affect the target at all. You or the target can affect each other normally through intermediaries. For instance while the target would be immune to the direct effects of your charm monster spell if you charmed another creature that then attacked the target creature the target would not be immune to the damage from that attack.",
		"range": "Personal",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.379",
		"witchwarper": "6"
	},
	{
		"name": "Suggestion",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Compel a target to follow stated course of action.",
		"duration": "(CASTERLEVEL) hours or until completed",
		"level": "3",
		"longText": "You influence the actions of the target creature by suggesting a course of activity (limited to a sentence or two). The suggestion must be worded in such a manner as to make the activity sound reasonable. Asking the creature to do some obviously harmful act automatically negates the effect of the spell. The suggested course of activity can continue for the entire duration of the spell. If the suggested activity can be completed in a shorter time the spell ends when the target finishes what it was asked to do. You can instead specify conditions that will trigger a special activity during the duration. If the condition is not met before the spell's duration expires the activity is not performed. A very reasonable suggestion imparts a penalty (such as -1 or -2) to the target's saving throw.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.379",
		"resistance": "Yes",
		"target": "One living creature",
		"related": {
			"6": [
				"Suggestion (Mass)"
			]
		},
		"witchwarper": "3"
	},
	{
		"name": "Suggestion (Mass)",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Compel (CASTERLEVEL) targets to follow stated course of action.",
		"duration": "(CASTERLEVEL) hours or until completed",
		"level": "6",
		"longText": "You influence the actions of the target creatures by suggesting a course of activity (limited to a sentence or two). The suggestion must be worded in such a manner as to make the activity sound reasonable. Asking the creatures to do some obviously harmful act automatically negates the effect of the spell. The suggested course of activity can continue for the entire duration of the spell. If the suggested activity can be completed in a shorter time the spell ends when the target finishes what it was asked to do. You can instead specify conditions that will trigger a special activity during the duration. If the condition is not met before the spell's duration expires the activity is not performed. A very reasonable suggestion imparts a penalty (such as -1 or -2) to the target's saving throw. All of the affected creatures are subject to the same suggestion.",
		"range": "Medium",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.379",
		"resistance": "Yes",
		"target": "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart",
		"related": {
			"3": [
				"Suggestion"
			]
		}
	},
	{
        "notes": "This entry has been trimmed for length and is missing content.",
		"name": "Summon Creature (Level 1)",
		"shortText": "This spell summons an extraplanar creature.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "1",
		"longText": "This spell summons an extraplanar creature (typically an elemental, magical beast native to another plane, or outsider, but also occasionally even extraplanar constructs). The summoned creature appears where you designate and acts immediately on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it to not attack, to attack particular enemies, or to perform other actions. When you gain this spell as a spell known, select four creatures from the appropriate list in Table 8: Summon Creature for each level at which you can cast this spell. For example, for the 1st-level summon creature spell, you could choose Tiny air, earth, fire, and water elementals. Note that a particular alignment or class is sometimes required to choose certain creatures, as listed in Table 8. In place of a single selection, you can choose a creature from a lower-level summoning list; doing so allows you the option of summoning multiple such creatures at a time. Each time you gain a character level, you can change these selections. You can gain summon creature a second time at the highest spell level you know, selecting four additional appropriate creatures at each level you can cast this spell. You choose which of the selected creatures you summon each time you cast the spell. 1st: When you cast summon creature as a 1st-level spell, you summon one creature from your selection of creatures from the 1st-level summoning list.",
		"range": "Medium",
		"save": "None",
		"source": "Alien Archive",
		"page": "p.144",
		"resistance": "No",
		"school": "conjuration (summoning)",
		"effect": "One or more summoned creatures",
		"mystic": "1",
		"technomancer": "1",
		"witchwarper": "1",
		"related":{
            "2":["Summon Creature (Level 2)"],
            "3":["Summon Creature (Level 3)"],
            "4":["Summon Creature (Level 4)"],
            "5":["Summon Creature (Level 5)"],
            "6":["Summon Creature (Level 6)"]
        }
    },
    {
        "notes": "This entry has been trimmed for length and is missing content.",
		"name": "Summon Creature (Level 2)",
		"shortText": "This spell summons an extraplanar creature.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "This spell summons an extraplanar creature (typically an elemental, magical beast native to another plane, or outsider, but also occasionally even extraplanar constructs). The summoned creature appears where you designate and acts immediately on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it to not attack, to attack particular enemies, or to perform other actions. When you gain this spell as a spell known, select four creatures from the appropriate list in Table 8: Summon Creature for each level at which you can cast this spell. For example, for the 1st-level summon creature spell, you could choose Tiny air, earth, fire, and water elementals. Note that a particular alignment or class is sometimes required to choose certain creatures, as listed in Table 8. In place of a single selection, you can choose a creature from a lower-level summoning list; doing so allows you the option of summoning multiple such creatures at a time. Each time you gain a character level, you can change these selections. You can gain summon creature a second time at the highest spell level you know, selecting four additional appropriate creatures at each level you can cast this spell. You choose which of the selected creatures you summon each time you cast the spell. 2nd: When you cast summon creature as a 2nd-level spell, you summon one creature from your selection of creatures from the 2nd-level summoning list. If the chosen creature is from a lower-level summoning list, you summon three such creatures instead.",
		"range": "Medium",
		"save": "None",
		"source": "Alien Archive",
		"page": "p.144",
		"resistance": "No",
		"school": "conjuration (summoning)",
		"effect": "One or more summoned creatures",
		"mystic": "2",
		"technomancer": "2",
		"witchwarper": "2",
		"related":{
            "2":["Summon Creature (Level 2)"],
            "3":["Summon Creature (Level 3)"],
            "4":["Summon Creature (Level 4)"],
            "5":["Summon Creature (Level 5)"],
            "6":["Summon Creature (Level 6)"]
        }
    },
    {
        "notes": "This entry has been trimmed for length and is missing content.",
		"name": "Summon Creature (Level 3)",
		"shortText": "This spell summons an extraplanar creature.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "3",
		"longText": "This spell summons an extraplanar creature (typically an elemental, magical beast native to another plane, or outsider, but also occasionally even extraplanar constructs). The summoned creature appears where you designate and acts immediately on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it to not attack, to attack particular enemies, or to perform other actions. When you gain this spell as a spell known, select four creatures from the appropriate list in Table 8: Summon Creature for each level at which you can cast this spell. For example, for the 1st-level summon creature spell, you could choose Tiny air, earth, fire, and water elementals. Note that a particular alignment or class is sometimes required to choose certain creatures, as listed in Table 8. In place of a single selection, you can choose a creature from a lower-level summoning list; doing so allows you the option of summoning multiple such creatures at a time. Each time you gain a character level, you can change these selections. You can gain summon creature a second time at the highest spell level you know, selecting four additional appropriate creatures at each level you can cast this spell. You choose which of the selected creatures you summon each time you cast the spell. 3rd: When you cast summon creature as a 3rd-level spell, you summon one creature from your selection of creatures from the 3rd-level summoning list. If the chosen creature is from a lower-level summoning list, you summon three such creatures instead.",
		"range": "Medium",
		"save": "None",
		"source": "Alien Archive",
		"page": "p.144",
		"resistance": "No",
		"school": "conjuration (summoning)",
		"effect": "One or more summoned creatures",
		"mystic": "3",
		"technomancer": "3",
		"witchwarper": "3",
		"related":{
            "1":["Summon Creature (Level 1)"],
            "2":["Summon Creature (Level 2)"],
            "4":["Summon Creature (Level 4)"],
            "5":["Summon Creature (Level 5)"],
            "6":["Summon Creature (Level 6)"]
        }
    },
    {
        "notes": "This entry has been trimmed for length and is missing content.",
		"name": "Summon Creature (Level 4)",
		"shortText": "This spell summons an extraplanar creature.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "4",
		"longText": "This spell summons an extraplanar creature (typically an elemental, magical beast native to another plane, or outsider, but also occasionally even extraplanar constructs). The summoned creature appears where you designate and acts immediately on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it to not attack, to attack particular enemies, or to perform other actions. When you gain this spell as a spell known, select four creatures from the appropriate list in Table 8: Summon Creature for each level at which you can cast this spell. For example, for the 1st-level summon creature spell, you could choose Tiny air, earth, fire, and water elementals. Note that a particular alignment or class is sometimes required to choose certain creatures, as listed in Table 8. In place of a single selection, you can choose a creature from a lower-level summoning list; doing so allows you the option of summoning multiple such creatures at a time. Each time you gain a character level, you can change these selections. You can gain summon creature a second time at the highest spell level you know, selecting four additional appropriate creatures at each level you can cast this spell. You choose which of the selected creatures you summon each time you cast the spell. 4th: When you cast summon creature as a 4th-level spell, you summon one creature from your selection of creatures from the 4th-level summoning list. If the chosen creature is from a lower-level summoning list, you summon three such creatures instead.",
		"range": "Medium",
		"save": "None",
		"source": "Alien Archive",
		"page": "p.144",
		"resistance": "No",
		"school": "conjuration (summoning)",
		"effect": "One or more summoned creatures",
		"mystic": "4",
		"technomancer": "4",
		"witchwarper": "4",
		"related":{
            "1":["Summon Creature (Level 1)"],
            "2":["Summon Creature (Level 2)"],
            "3":["Summon Creature (Level 3)"],
            "5":["Summon Creature (Level 5)"],
            "6":["Summon Creature (Level 6)"]
        }
    },
    {
        "notes": "This entry has been trimmed for length and is missing content.",
		"name": "Summon Creature (Level 5)",
		"shortText": "This spell summons an extraplanar creature.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "5",
		"longText": "This spell summons an extraplanar creature (typically an elemental, magical beast native to another plane, or outsider, but also occasionally even extraplanar constructs). The summoned creature appears where you designate and acts immediately on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it to not attack, to attack particular enemies, or to perform other actions. When you gain this spell as a spell known, select four creatures from the appropriate list in Table 8: Summon Creature for each level at which you can cast this spell. For example, for the 1st-level summon creature spell, you could choose Tiny air, earth, fire, and water elementals. Note that a particular alignment or class is sometimes required to choose certain creatures, as listed in Table 8. In place of a single selection, you can choose a creature from a lower-level summoning list; doing so allows you the option of summoning multiple such creatures at a time. Each time you gain a character level, you can change these selections. You can gain summon creature a second time at the highest spell level you know, selecting four additional appropriate creatures at each level you can cast this spell. You choose which of the selected creatures you summon each time you cast the spell. 5th: When you cast summon creature as a 5th-level spell, you summon one creature from your selection of creatures from the 5th-level summoning list. If the chosen creature is from a lower-level summoning list, you summon three such creatures instead.",
		"range": "Medium",
		"save": "None",
		"source": "Alien Archive",
		"page": "p.144",
		"resistance": "No",
		"school": "conjuration (summoning)",
		"effect": "One or more summoned creatures",
		"mystic": "5",
		"technomancer": "5",
		"witchwarper": "5",
		"related":{
            "1":["Summon Creature (Level 1)"],
            "2":["Summon Creature (Level 2)"],
            "3":["Summon Creature (Level 3)"],
            "4":["Summon Creature (Level 4)"],
            "6":["Summon Creature (Level 6)"]
        }
    },
    {
        "notes": "This entry has been trimmed for length and is missing content.",
		"name": "Summon Creature (Level 6)",
		"shortText": "This spell summons an extraplanar creature.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "6",
		"longText": "This spell summons an extraplanar creature (typically an elemental, magical beast native to another plane, or outsider, but also occasionally even extraplanar constructs). The summoned creature appears where you designate and acts immediately on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it to not attack, to attack particular enemies, or to perform other actions. When you gain this spell as a spell known, select four creatures from the appropriate list in Table 8: Summon Creature for each level at which you can cast this spell. For example, for the 1st-level summon creature spell, you could choose Tiny air, earth, fire, and water elementals. Note that a particular alignment or class is sometimes required to choose certain creatures, as listed in Table 8. In place of a single selection, you can choose a creature from a lower-level summoning list; doing so allows you the option of summoning multiple such creatures at a time. Each time you gain a character level, you can change these selections. You can gain summon creature a second time at the highest spell level you know, selecting four additional appropriate creatures at each level you can cast this spell. You choose which of the selected creatures you summon each time you cast the spell. 6th: When you cast summon creature as a 6th-level spell, you summon one creature from your selection of creatures from the 6th-level summoning list. If the chosen creature is from a lower-level summoning list, you summon three such creatures instead.",
		"range": "Medium",
		"save": "None",
		"source": "Alien Archive",
		"page": "p.144",
		"resistance": "No",
		"school": "conjuration (summoning)",
		"effect": "One or more summoned creatures",
		"mystic": "6",
		"technomancer": "6",
		"witchwarper": "6",
		"related":{
            "1":["Summon Creature (Level 1)"],
            "2":["Summon Creature (Level 2)"],
            "3":["Summon Creature (Level 3)"],
            "4":["Summon Creature (Level 4)"],
            "5":["Summon Creature (Level 5)"]
        }
	},
	{
		"name": "Supercharge Weapon",
		"castingTime": "1 standard action",
		"shortText": "Touched weapon deals extra damage.",
		"duration": "See text",
		"level": "1",
		"longText": "You supercharge the target weapon. If the weapon's next attack hits (provided it is made before the end of the next round) the attack deals 4d6 additional damage if the weapon is a single target attack or 2d6 additional damage if the weapon attacks all creatures in an area. This bonus damage is of the same type as the weapon's normal damage.",
		"range": "Touch",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.379",
		"resistance": "No",
		"target": "One weapon",
		"technomancer": "1"
	},
	{
		"name": "Sympathetic Vibration",
		"castingTime": "10 minutes",
		"shortText": "Deal 2d10 damage per round to freestanding structure.",
		"duration": "Up to (CASTERLEVEL) rounds",
		"level": "6",
		"longText": "By attuning yourself to a freestanding structure or vehicle (this doesn't include starships) you can create a damaging vibration within it. Once it begins the vibration deals 2d10 sonic damage per round to the target bypassing hardness. You can choose at the time of casting to limit the duration of the spell; otherwise it lasts for (CASTERLEVEL) rounds. If the spell is cast upon a target that is not freestanding the surrounding material dissipates the effect and no damage occurs. Sympathetic vibration can't affect creatures (even if they are constructs).",
		"range": "Touch",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.379",
		"resistance": "Yes",
		"target": "One freestanding structure or vehicle",
		"technomancer": "6"
	},
	{
		"name": "Synapse Overload",
		"castingTime": "1 standard action",
		"shortText": "Target takes 18d8 damage and is staggered for 1 minute.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "To affect the target you must hit with a melee attack against its EAC; you can add your key ability score modifier to this attack roll instead of your Strength modifier if it is higher. You then overload the target's mind causing the target's synapses to violently trigger. The target takes 18d8 damage and is staggered for 1 minute. A target can negate the staggered effect with a successful Fortitude saving throw but still takes full damage. Casting this spell doesn't provoke attacks of opportunity.",
		"range": "Touch",
		"save": "Fortitude partial",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.380",
		"resistance": "Yes",
		"target": "One living creature",
		"technomancer": "5"
	},
	{
		"name": "Synaptic Pulse",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Stun all creatures within 20 feet for 1 round.",
		"duration": "1 round",
		"level": "3",
		"longText": "You stun all creatures in range for 1 round.",
		"range": "20 ft.",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.380",
		"resistance": "Yes",
		"target": "20-ft.-radius spread centered on you",
		"related": {
			"5": [
				"Synaptic Pulse (Greater)"
			]
		}
	},
	{
		"name": "Synaptic Pulse (Greater)",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Stun all creatures within 20 feet for 1d4 rounds.",
		"duration": "1d4 rounds",
		"level": "5",
		"longText": "You stun all creatures in range for 1d4 rounds. With a successful Will saving throw a creature is instead sickened for 1 round.",
		"range": "20 ft.",
		"save": "Will partial",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.380",
		"resistance": "Yes",
		"target": "20-ft.-radius spread centered on you",
		"related": {
			"3": [
				"Synaptic Pulse"
			]
		}
	},
	{
		"name": "Telekinesis",
		"castingTime": "1 standard action",
		"shortText": "Move an object attack creatures or hurl objects or creatures with your mind.",
		"duration": "Concentration (up to (CASTERLEVEL) rounds) or instantaneous; see text",
		"level": "5",
		"longText": "You move objects or creatures by concentrating on them. Depending on your desired effect (choose one from below) the spell can perform a variety of combat maneuvers provide a gentle sustained force or exert a single short violent thrust. [Combat Maneuver] Once per round you can use telekinesis to perform a ranged attack that acts as a bull rush disarm grapple (including pin) or trip combat maneuver. Resolve these attempts as normal but use your caster level plus your key ability score modifier as your attack bonus. No saving throw is allowed against these attempts but spell resistance applies normally. This version of the spell can last (CASTERLEVEL) rounds but it ends if you cease concentrating. [Sustained Force] A sustained force moves an object of no more than (CASTERLEVEL*25) pounds or (CASTERLEVEL*2) bulk up to 20 feet per round in any direction (including up or down). A creature can negate the effect on an object it holds with a successful Will save or with spell resistance. This version of the spell lasts (CASTERLEVEL) rounds but it ends if you cease concentrating. The spell ends if the object is forced beyond the spell's range. You can telekinetically manipulate an object as if with one hand. For example a lever can be pulled a key turned a button pushed an object rotated and so on if the force required is within the weight limitation. You might even be able to untie simple knots though a delicate activity such as this requires a successful DC 15 Intelligence check. [Violent Thrust] The spell energy can be spent in a single round. You can hurl up to 15 objects or creatures that are within range (no two of which can be more than 10 feet apart) toward any target within 150 feet of all the objects. You can hurl up to a total weight of 400 pounds or 40 bulk. You must make attack rolls (one per creature or object thrown) to hit the target with the items using your base attack bonus plus your key ability score modifier as your attack bonus. All objects cause damage ranging from 1 damage per 25 pounds or 2 bulk (for less dangerous objects) to 1d10 damage per 25 pounds or 2 bulk (for extremely dangerous objects such as weapons or bladed or spiked objects). Objects and creatures that miss the target land in a square adjacent to the target. Creatures that fall within the weight capacity of the spell can be hurled but they can attempt Will saving throws (or rely on spell resistance) to negate the effect as can those whose held possessions are targeted by the spell. If a thrown creature is hurled against a solid surface it takes 1d6 damage as if it had fallen 10 feet.",
		"range": "Long",
		"save": "None Will negates (object) see text",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.380",
		"resistance": "Yes (object) see text",
		"target": "See text",
		"technomancer": "5"
	},
	{
		"name": "Telekinetic Projectile",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Telekinetically hurl an object dealing 1d6 damage to the target and object.",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "You fling an object weighing up to 5 pounds (less than 1 bulk) at the target making a ranged attack against its KAC. If you hit you deal 1d6 bludgeoning damage to both the target and the object. The type of object thrown doesn't change the damage type or any other properties of the attack.",
		"range": "Close",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.380",
		"resistance": "No",
		"target": "One object and one creature"
	},
	{
		"name": "Telepathic Bond",
		"mystic": "4",
		"castingTime": "1 standard action",
		"shortText": "Link allows allies to communicate.",
		"duration": "(CASTERLEVEL*10) minutes (D)",
		"level": "4",
		"longText": "You forge a telepathic bond between yourself and a number of willing creatures each of which must have an Intelligence score of 3 or higher (or a modifier of -4 or higher). Each creature included in the link is linked to all the others. The creatures can communicate telepathically through the bond regardless of language. No special power or influence is established as a result of the bond. Once the bond is formed it works over any distance (although not from one plane to another). If desired you can leave yourself out of the telepathic bond forged. This decision must be made at the time of casting.",
		"range": "Close",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.381",
		"resistance": "No",
		"target": "You plus up to (CASTERLEVEL/3) willing creatures no two of which can be more than 30 ft. apart"
	},
	{
		"name": "Telepathic Jaunt",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Use your telepathic bond with a creature to teleport to its location.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "Telepathic jaunt thrums along the mental connection you have with a creature with which you currently have an active telepathic bond via your mystic telepathic bond class feature (but not via the telepathic bond spell) and it instantly teleports you to that creature. This spell teleports you to a random unoccupied square adjacent to the creature with which you have the telepathic bond. If no such square is available you teleport to the closest eligible square; if the nearest eligible square is more than 50 feet away from the creature this spell fails. You can be transported any distance within a plane even across the galaxy but you can't travel between planes and you can't transport yourself to a creature if one of you is traveling via Drift travel and the other isn't. In addition to yourself you can transport any objects you carry as long as their weight doesn't exceed your maximum load. You can also bring up to six additional willing or unconscious Medium or smaller creatures (each carrying gear or objects up to its maximum load) or their equivalent. A Large creature counts as two Medium creatures and a Huge creature counts as two Large creatures. All creatures to be transported must be in contact with one another and at least one of those creatures must be in contact with you. Exceeding this limit causes the spell to fail. There must be sufficient space near the creature with which you have the telepathic bond for all the creatures you are teleporting or this spell fails.",
		"range": "Touch",
		"save": "None Will negates (object)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.381",
		"resistance": "No yes (object)",
		"target": "You and touched objects and other touched willing or unconscious creatures"
	},
	{
		"name": "Telepathic Message",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Send a short telepathic message and hear simple telepathic replies.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "0",
		"longText": "You can send a short telepathic message and hear simple telepathic replies. Any living creature within 10 feet of you or an intended recipient also receives your telepathic message if it succeeds at a DC 25 Perception check. You must be able to see or hear each recipient. The creatures that receive the message can reply telepathically but no more than a single message can be sent each round and each message cannot exceed 10 words. A technomancer casting this spell can also use it to send a message to a computer or a construct with the technological subtype if the receiving target is designed to receive messages.",
		"range": "Medium",
		"save": "None",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.381",
		"resistance": "No",
		"target": "Up to (CASTERLEVEL) creatures",
		"technomancer": "0"
	},
	{
		"name": "Telepathy",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Communicate mentally with any creatures within 100 feet.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "5",
		"longText": "You can mentally communicate with any other creature within 100 feet that has a language. It is possible to address multiple creatures at once telepathically although maintaining a telepathic conversation with more than one creature at a time is just as difficult as speaking and listening to multiple people simultaneously. You can't use telepathy to locate creatures to communicate with them but once you've established telepathic communication you don't require line of effect to maintain it.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.381"
	},
	{
		"name": "Teleport",
		"castingTime": "1 standard action",
		"shortText": "Instantly teleport as far as 2000 miles.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "This spell instantly transports you to a designated destination within 2000 miles. Interplanar and interplanetary travel is not possible and neither is travel between two moving starships during combat though you might be able to teleport to a planet's surface from an orbiting starship. You can bring along objects as long as their weight doesn't exceed your maximum bulk limit. You can also bring up to five additional willing or unconscious Medium or smaller creatures (carrying gear or objects up to its maximum load) or their equivalent. A Large creature counts as two Medium creatures and a Huge creature counts as four Medium creatures. All creatures to be transported must be in contact with one another and at least one of those creatures must be in contact with you. As the caster you need not attempt a saving throw nor is spell resistance applicable to you. Only objects held or in use by another creature receive saving throws and benefit from spell resistance. You must have some clear idea of the location and layout of the destination. The clearer your mental image the more likely the teleportation works. Areas of strong physical or magical energy can make teleportation more hazardous or even impossible. To see how well the teleportation works roll d% and consult Table 10-1. Refer to the following information for definitions of the terms on the table. [Familiarity] Very familiar describes a place you have been very often and where you feel at home. Studied carefully describes a place you know well either because you can currently physically see it or because you've been there often. Seen casually describes a place you have been to more than once but with which you are not very familiar. Viewed once describes a place you have seen once in person or have extensively studied through scrying magic remote cameras or recorded images (for a remote-viewed location you still need to have a clear idea of the location; you can't teleport to an unknown location that you've seen in a holovid). False destination describes a place that doesn't truly exist or if you are teleporting to an otherwise familiar location it is a place that no longer exists as such or has been so completely altered as to no longer be familiar to you. When traveling to a false destination roll 1d20+80 to obtain results on the table rather than rolling d% since there is no real destination for you to hope to arrive at or even be off target from. {On Target] You appear where you want to be. [Off Target] You appear safely a random distance away from the destination in a random direction. The distance off target is d% of the distance that was to be traveled. The direction off target is determined randomly. [Similar Area] You wind up in an area that's visually or thematically similar to the target area. Generally you appear in the closest similar place within range. If no such area exists within the spell's range the spell simply fails instead. [Mishap] You and anyone else teleporting with you have gotten scrambled. You each take 2d10 damage and you reroll on the chart to see where you wind up. For these rerolls roll 1d20+80. Each time mishap comes up the creatures take more damage and must reroll. [TELEPORTATION RESULTS] Very familiar - 1-97 On Target 98-99 Off Target 100 Similar Area; Studied Carefully - 1-94 On Target 95-97 Off Target 98-99 Similar Area 100 Mishap; Seen Casually - 1-88 On Target 89-94 Off Target 95-98 Similar Area 99-100 Mishap; Viewed Once - 1-76 On Target 77-88 Off Target 89-96 Similar Area 97-100 Mishap; False Destination - 81-92 Similar Area 93-100 Mishap;",
		"range": "2000 miles",
		"save": "None Will negates (object)",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.381",
		"resistance": "No yes (object)",
		"target": "You and touched objects and other touched willing or unconscious creatures",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Terraform",
		"castingTime": "1 hour",
		"shortText": "Alter terrain and climate.",
		"duration": "(CASTERLEVEL) days; see text",
		"level": "6",
		"longText": "You alter the area's terrain and climate to a new terrain and climate type appropriate to the planet or plane. For example you might transform a desert into plains. To cast this spell you must spend 10 Resolve Points along with technological gear worth 30000 credits (which is magically augmented to do much of the terraforming then consumed by the spell). A xenodruid mystic instead uses crystals and incenses worth 30000 credits. This magically alters the area's climate and normal plants to those appropriate to the new terrain but it doesn't affect creatures or the configuration of the ground. Transforming rocky hills into forested areas converts grasses into shrubs and small trees but it doesn't flatten the hills or change the animals to suit the new environment. You can alter the climate by one step (cold temperate or warm). The maximum extent of the terrain change is up to the GM but in general it changes to a similar terrain type or by one step within that terrain type (such as from a typical forest to a forest with massive trees or light undergrowth from a shallow bog to a deep bog and so on). Multiple castings of the spell in the same area can create an area with radically different terrain and climate than the surrounding land. The GM can decide that certain terrain shifts are unsustainable and shorten the duration or that some are suitable for the area and extend the duration. This spell could have many secondary effects based on the nature of the change the type of bordering terrain and so on; these should be determined by the GM on a case-by-case basis. For example transforming a desert requires drawing water up from underground to sustain the plants which could deplete the water table in nearby areas.",
		"range": "100 ft.",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.382",
		"resistance": "No",
		"target": "100-ft.-radius emanation centered on you",
		"technomancer": "6"
	},
	{
		"name": "Token Spell",
		"mystic": "0",
		"castingTime": "1 standard action",
		"shortText": "Perform simple magical effects.",
		"duration": "1 hour",
		"level": "0",
		"longText": "Token spells are often some of the first minor changes that spellcasters produce when they begin experimenting with magic. Once cast token spell enables you to perform simple magical effects for 1 hour. The effects are minor and have severe limitations. You can slowly lift one item of light bulk. You can alter items in a 1-foot cube each round coloring cleaning soiling cooling warming or flavoring them. You can create small objects but they look artificial and are extremely fragile (they can't be used as tools or weapons). You can illuminate an object to shed dim light in a 30-foot radius. Token spell lacks the power to duplicate any other spell effects. Any actual change to an object (beyond moving cleaning or soiling it) persists for only 1 hour.",
		"range": "10 ft.",
		"save": "None",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.382",
		"resistance": "Yes",
		"target": "See text",
		"technomancer": "0",
		"witchwarper": "0"
	},
	{
		"name": "Tongues",
		"mystic": "3",
		"castingTime": "1 standard action",
		"shortText": "Target can speak and understand any language.",
		"duration": "(CASTERLEVEL*10) minutes",
		"level": "3",
		"longText": "This spell grants the creature touched the ability to speak and understand the spoken or signed language of any intelligent creature whether it is a racial tongue or a regional dialect. The target can speak only one language at a time although it may be able to understand several languages. Tongues does not enable the target to speak with creatures who don't speak. The target can make itself understood as far as its voice carries.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.383",
		"resistance": "No",
		"target": "One creature",
		"technomancer": "3",
		"witchwarper": "3"
	},
	{
		"name": "Transfer Charge",
		"castingTime": "1 standard action",
		"shortText": "Move charges from one power source to another source of the same type.",
		"duration": "Instantaneous",
		"level": "0",
		"longText": "You can transfer any number of charges from one battery to another battery or from one power cell to another power cell. You can only transfer charges using two objects of the exact same type (two batteries of the same size two identical power cells or the like); you transfer charges from the source object to the receiving object. You must declare how many charges you are transferring before casting this spell. If you transfer more charges from the source than the receiving item can hold the receiving item must succeed at a Fortitude saving throw or take 1d6 electricity damage. This spell provides no knowledge of how many charges a receiving item can safely hold but you can choose to transfer fewer charges than the maximum allowed to reduce the risk.",
		"range": "Touch",
		"save": "Fortitude negates (object)",
		"school": "Transmutation",
		"source": "Core Rulebook",
		"page": "p.383",
		"resistance": "Yes (object)",
		"target": "Two objects of the same type; see text",
		"technomancer": "0"
	},
	{
		"name": "Transfer Consciousness",
		"shortText": "Transfer your mind into a computer or willing technological construct, and control its functions.",
		"castingTime": "1 round",
		"duration": "10 minutes per CASTERLEVEL",
		"level": "5",
		"longText": "You transfer your mind into a computer or technological construct. If you transfer your mind into a computer, its tier can be no higher than half your caster level. If you transfer into a construct, it must be willing or, if nonsapient, not hostile to you. The construct’s CR or level can be no higher than your caster level. While your mind is in a computer system, you have direct control over its commands. You can perform Computers checks related to that system in half the usual time. If you transfer your mind into a technological construct, you have access to its functions, allowing you to control the creature directly. You can’t cast the construct’s spells or use its spell-like or supernatural abilities. You can cast your own spells. While this spell lasts, your body falls prone and helpless, as if you were unconscious. When the spell ends, your mind transfers back to your body instantly, provided your body and the target are on the same plane. Otherwise, you die.",
		"range": "Touch",
		"save": "Will negates",
		"source": "Character Operations Manual",
		"page": "p.142",
		"resistance": "Yes",
		"target": "One computer or willing technological construct; see text",
		"school": "divination",
		"technomancer": "5"
	},
	{
		"name": "Transport Passengers",
		"shortText": "Create extradimensional seating space inside a vehicle or Tiny starship.",
		"castingTime": "1 minute",
		"duration": "1 hour per CASTERLEVEL",
		"level": "4",
		"longText": "You create an extradimensional space in the passenger area of a vehicle or Tiny starship, allowing it to carry one additional Medium creature per caster level. This spell must be cast on a vehicle able to carry more than one passenger, or the spell fails. The extradimensional space appears in the vehicle’s seating area or the starship’s bridge or passenger section, and it looks like a thin, glowing gap in reality. Creatures that step through this gap are shunted into the extradimensional space, which appears to be and functions as another compartment in the vehicle. A creature can exit the extradimensional space as part of a move action to move through the gap in reality, though a creature cannot exit the extradimensional space unless room to accommodate it exists in the normal seating area. Creatures that are encumbered or overburdened cannot enter the extradimensional space. If a creature is larger than Medium, each size category counts as one additional creature for determining the capacity of the extradimensional space. Creatures within the extradimensional space can’t interact with anything outside the vehicle, nor can creatures outside the vehicle perceive or interact with occupants and contents of the space. If the vehicle is destroyed or the extradimensional space is dispelled, the extradimensional space collapses. Anything within the extradimensional space when the vehicle or starship is destroyed, the space is dispelled, or this spell ends are shunted to the nearest open spaces outside the target.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.142",
		"resistance": "No",
		"target": "One vehicle or Tiny starship; see text",
		"school": "transmutation",
		"technomancer": "4"
	},
	{
		"name": "True Seeing",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Target can see things as they really are.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "6",
		"longText": "You confer upon the target the ability to see all things within 120 feet as they actually are. The target sees through normal and magical darkness notices secret doors hidden by magic sees the exact locations of creatures or objects that are invisible or displaced sees through illusions and sees the true form of changed or transmuted things. Further the target can focus its vision to see into the Ethereal Plane (but not into extradimensional spaces). True seeing however does not penetrate solid objects. It in no way confers X-ray vision or its equivalent. It does not negate concealment including that caused by fog and the like. True seeing does not help the viewer see through mundane disguises spot creatures who are simply hiding or notice secret doors hidden by mundane means.",
		"range": "Touch",
		"save": "Will negates (harmless)",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.383",
		"resistance": "Yes (harmless)",
		"target": "One creature",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Umbral Tendrils",
		"shortText": "Assault a group of creatures with shadowy tentacles.",
		"castingTime": "1 standard action",
		"area": "20 ft radius spread",
		"duration": "1 round + 1 round per CASTERLEVEL/3",
		"level": "3",
		"longText": "You summon a vision of a writhing mass of shadowy tendrils to assault creatures within 10 feet of the ground in the area. This area is difficult terrain. The first time a creature enters the area (including when the effect appears) on its turn, and each round the creature remains there, the creature takes 4d6 bludgeoning damage and becomes entangled. If the tendrils are in dim light or darkness, the DC of the Will save increases by 2. A creature that succeeds at a Will saving throw halves the damage it takes and avoids becoming entangled. The same casting of this spell can’t render such a creature entangled again. By succeeding at subsequent saves, such a creature reduces damage it takes from the same casting of the spell to one-quarter normal.",
		"range": "Medium",
		"save": "Will half; see text",
		"source": "Starfinder #12: Heart of Night",
		"page": "p.53",
		"resistance": "Yes",
		"school": "illusion (shadow)",
		"mystic": "3"
	},
	{
		"name": "Unseen Servant",
		"castingTime": "1 standard action",
		"shortText": "Invisible force obeys your commands.",
		"duration": "(CASTERLEVEL) hours",
		"level": "1",
		"longText": "The spell conjures an invisible mindless shapeless force that performs simple tasks at your command (a move action). It can run and fetch things open unstuck doors and hold chairs as well as clean and mend. The servant can perform only one activity at a time but it repeats the same activity over and over again if told to do so as long as you remain within range. It has an effective Strength score of 2 (so it can lift up to 20 pounds or 2 bulk or drag up to 100 pounds or 10 bulk). It can trigger traps and such but it can't exert enough force to activate certain pressure plates and other devices. It can't perform any task that requires a skill check with a DC higher than 10 or that requires a check using a skill that can't be used untrained. This servant can't fly climb or swim (though it can walk on water). Its land speed is 15 feet. The servant can't attack in any way; it is never allowed to make attack rolls. It can't be killed but it dissipates if it takes 6 or more damage from area attacks; it gets no saving throws against attacks.",
		"range": "Close",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.383",
		"resistance": "No",
		"target": "One invisible mindless shapeless servant",
		"technomancer": "1"
	},
	{
		"name": "Unspeakable Presences",
		"shortText": "Enemies in the area take 4d6 damage per round, cannot move, and might be devoured whole.",
		"castingTime": "1 standard action",
		"area": "60 ft radius",
		"duration": "1 round per CASTERLEVEL",
		"level": "6",
		"longText": "You swap the space beneath your enemies with the gnashing maws, tentacles, and claws of hideous beasts from another reality. A foe in the area takes 4d6 damage per round and cannot move until it succeeds at a Reflex saving throw, which it can attempt at the end of each of its turns. At that point, the opponent can be affected again only if it leaves the spell’s area and then returns. A creature that takes damage from this spell 3 rounds in a row must succeed at a Fortitude save or be consumed by the unspeakable presences. That creature dies, and when the spell ends, its body and gear disappear into the realities from whence the presences came. This is a death effect. Only miracle, warp reality, and wish can bring back a creature slain this way.",
		"range": "Long",
		"save": "None; see text",
		"source": "Character Operations Manual",
		"page": "p.142",
		"resistance": "No",
		"school": "transmutation",
		"witchwarper": "6"
	},
	{
		"name": "Unwilling Guardian",
		"castingTime": "1 standard action",
		"shortText": "Charm a target into protecting you during combat.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "5",
		"longText": "Your overwhelming presence bores into the target's mind cowing its will. This turns it into an automaton-like guardian that protects you at all costs. As soon as it is able the target mindlessly moves along the most direct route toward you and stops when it is within 10 feet of you (provoking attacks of opportunity for movement as normal). If you are being attacked in melee by a creature within 10 feet the target instead takes the quickest route to intercept that creature from a square within 10 feet of you and attack it on your behalf. While this spell is in effect the target attacks any creature that attacks you in melee though it can't move more than 10 feet from you to do so. If multiple creatures are attacking you in melee you can choose which creature the target attacks on your behalf as part of combat banter. If you are the target of ranged attacks and your guardian is not attacking a melee assailant on your behalf it moves to provide cover against the ranged attacks. Due to the strong momentary connection between you and your unwilling guardian if you are the single target of a hostile creature's spell or effect the creature must succeed at a caster level check (DC = 6 + your caster level) or the spell or effect instead targets your guardian. This spell has no effect on area of effect or multi-target spells or other effects that include you as a target. When this spell ends the target regains control of its faculties entirely and it knows and remembers that you used magic to control it. Once a creature has been the target of unwilling guardian it can't be targeted with this spell again for 24 hours if cast by the same spellcaster.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.383",
		"resistance": "Yes",
		"target": "One creature with CR lower than (CASTERLEVEL); see text",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Usher Apocolypse",
		"shortText": "Deal fire damage, create difficult terrain, and potentially anchor foes to the ground in the area.",
		"castingTime": "1 standard action",
		"area": "60 ft radius",
		"duration": "1 round per CASTERLEVEL",
		"level": "6",
		"longText": "You create a quasi-real apocalypse to tear through the area, causing several effects. When the spell first takes effect, illusory hellfire crashes to the ground, dealing 6d6 fire damage to your enemies in the area. Creatures can attempt a Will saving throw to disbelieve the fiery vision and take only half damage. Then, for the duration, two more effects continue. An illusion makes the ground appear to be unstable crust over lava, which your foes treat as difficult terrain. Grasping hands appear to reach out from the ground to grab at enemies. Each time an enemy starts its turn in the area, it must succeed at a Reflex saving throw or be unable to leave its space for the turn.",
		"range": "Long",
		"save": "Will disbelieves and Reflex partial; see text",
		"source": "Character Operations Manual",
		"page": "p.142",
		"resistance": "Yes",
		"school": "illusion (shadow)",
		"witchwarper": "6"
	},
	{
		"name": "Veil",
		"castingTime": "1 standard action",
		"shortText": "Change appearance of a group of creatures.",
		"duration": "Concentration + (CASTERLEVEL) hours (D)",
		"level": "6",
		"longText": "You instantly change the appearance of the targets and then maintain that appearance for the spell's duration. You can make the targets appear to be anything you wish. The targets look feel and smell just like what the spell makes them resemble. Affected creatures return to their normal appearances if slain. You must succeed at a Disguise check to duplicate the appearance of a specific individual. This spell gives you a +10 bonus to such a check (since it counts as altering your form). An unwilling target can negate the spell's effect on it by succeeding at a Will saving throw or by relying on spell resistance. Those who interact with the targets can attempt Will saving throws to disbelieve the illusion but spell resistance doesn't help pierce the illusion.",
		"range": "Long",
		"save": "Will negates or disbelief see text",
		"school": "Illusion",
		"source": "Core Rulebook",
		"page": "p.384",
		"resistance": "Yes see text",
		"target": "Up to one or more creatures no two of which can be more than 30 ft. apart",
		"technomancer": "6",
		"witchwarper": "6"
	},
	{
		"name": "Venomous Weapon",
		"shortText": "You touch a weapon that deals bludgeoning, piercing, or slashing damage and imbue it with poison.",
		"castingTime": "1 standard action",
		"duration": "1 minute per CASTERLEVEL, or the next 5 attacks",
		"level": "2",
		"longText": "You touch a weapon that deals bludgeoning, piercing, or slashing damage and imbue it with poison. The next five attacks made using the weapon are poisoned. Each creature damaged by these attacks must succeed at a Fortitude save or be sickened for 2d4 rounds.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.23",
		"resistance": "No",
		"target": "Weapon touched",
		"school": "conjuration (poison)",
		"effect": "imbues weapon with poison",
		"mystic": "2",
		"witchwarper": "2"
	},
	{
		"name": "Vigilant Junkbot",
		"shortText": " Create a temporary robot made of junk that can protect you from ranged or melee attacks.",
		"castingTime": "1 round",
		"duration": "1 round per CASTERLEVEL",
		"level": "2",
		"longText": "You turn the target into a robot that can guard you. This spell works like handy junkbot insofar as targeting parameters and your inability to target the same equipment after the spell ends. The junkbot you create is Tiny and appears in your space. A vigilant junkbot can take no actions. Instead, you instruct the junkbot to perform its melee protocol or ranged protocol. You can change the protocol telepathically as a move action. In its melee protocol, the junkbot attaches to you, granting you a +1 bonus to KAC for every 4 technomancer levels you have. In its ranged protocol, the vigilant junkbot hovers at strategic angles to cover you, granting you concealment against ranged attacks. Additionally, when you take damage from an attack that matches the protocol (melee or ranged), the junkbot takes the first 3 damage. Any additional damage passes to you. Enemies can target the junkbot instead of you. Its KAC and EAC are each 10 + your caster level, and it has Hit Points equal to one-quarter of your own (but no Stamina Points). The junkbot uses your saving throw bonuses, and it is a construct with the magical and technological subtypes.",
		"range": "Touch",
		"save": "None",
		"source": "Character Operations Manual",
		"page": "p.143",
		"resistance": "No",
		"target": "1 bulk of inert electronic equipment; see text",
		"school": "transmutation",
		"technomancer": "2"
	},
	{
		"name": "Viral Destruction",
		"shortText": "Create a virus in a recently dead body, allowing it to strike again and potentially spread the virus further.",
		"castingTime": "1 reaction",
		"duration": "Instantaneous; see text",
		"level": "3",
		"longText": "You can cast this spell only immediately after a creature in range dies. On its next turn in the initiative order, the corpse stands up (if applicable; this does not require a move action), can take a single move action to move up to its speed, and makes a single attack using the weapons and bonuses it had when alive (though it can’t use class features, spell-like abilities, or spells). You can choose the target of the affected creature’s attack or allow the target corpse to select a target entirely at random. If the target of this spell was friendly or helpful toward you in life, the spell works automatically; otherwise, the corpse can attempt a Will saving throw to negate this spell, as if the creature were still alive. After making its attack, the creature that you have targeted with viral destruction falls and is dead as normal. However, if this attack kills the affected creature’s target or if it knocks it unconscious, that target must succeed at a Will saving throw (using the spell’s DC) or be subject to viral destruction and make a single attack on its next turn before returning to its normal dead or unconscious state. If the secondary target of viral destruction is merely unconscious and becomes conscious again before its next action, that creature is freed from the viral destruction effect and the spell ends. Each attack caused by this spell can transfer the viral destruction effect to its target if that target is knocked unconscious or killed by the attack, until the spell has affected a number of creatures equal to your mystic level.",
		"range": "Close",
		"save": "Will negates; see text",
		"source": "Starfinder #2: Temple of the Twelve",
		"page": "p.51",
		"resistance": "Yes",
		"target": "One newly dead creature; see text",
		"school": "necromancy",
		"mystic": "3"
	},
	{
		"name": "Vision",
		"mystic": "6",
		"castingTime": "1 standard action",
		"shortText": "Answer a question about a person place or object.",
		"duration": "See text",
		"level": "6",
		"longText": "You pose a question about some person place or object while casting this spell. If the person or object is at hand or if you are in the place in question and you succeed at a caster level check (1d20 + your caster level DC 20) you receive a vision about that person place or object. The information gained includes everything available about the target that could be discovered by spending weeks in dedicated research with excellent-quality but standard reference works. If the person or object is not at hand or you are not in the place and you know only detailed information about the person place or object the DC of the caster level check is 25 and the information gained is incomplete (though it often provides enough information to help you find the person place or thing thus allowing a better vision result next time). If you know only rumors the DC is 30 and the information gained is vague (though it often directs you to more detailed information thus allowing a better vision result next time). In most circumstances you can't glean information about what occurred during the Gap with this spell. Casting this spell requires access to a computer or similar device which displays the information gained. Additionally casting this spell places considerable strain on you requiring you to spend 1 Resolve Point.",
		"range": "Personal",
		"school": "Divination",
		"source": "Core Rulebook",
		"page": "p.384"
	},
	{
		"name": "Wall Of Stone",
		"shortText": "Wall has 15 Hit Points per inch of thickness and hardness 10.",
		"castingTime": "1 standard action",
		"duration": "Instantaneous",
		"level": "4",
		"longText": "You cause a flat, vertical stone wall to spring into existence. The stress of casting this spell requires you to spend 1 Resolve Point. The wall can fit into any space of surrounding nonliving material if its area is sufficient to do so. The wall can’t be conjured so that it occupies the same space as a creature or another object. It must always be a flat plane, though you can shape its edges to fit the available space. A wall of stone is 4 inches thick. You can double the wall’s area by halving its thickness. Each 5-foot square of the wall has hardness 10 and 15 Hit Points per inch of thickness. A section of wall that is reduced to 0 Hit Points is breached. The DC of the Strength check for a creature to break through the wall with a single attack is 25. The wall is firmly anchored to its surroundings, and it doesn’t easily tip over; it can’t be summoned into any area where it is likely to fall or collapse. Like any stone wall, this wall is subject to perforation and other natural phenomena, though it doesn’t rust or corrode under typical circumstances. The metal created by this spell is not suitable for use in the creation of other objects and can’t be sold.",
		"range": "Close",
		"save": "None",
		"source": "Starfinder #17: Solar Strike",
		"page": "p.58",
		"resistance": "No",
		"school": "conjuration (creation)",
		"effect": "Stone wall with area up to one 5 ft square per CASTERLEVEL",
		"technomancer": "4"
	},
	{
		"name": "Wall of Fire",
		"castingTime": "1 standard action",
		"shortText": "Blazing curtain deals 2d6 fire damage out to 10 feet and 1d6 fire damage out to 20 feet; passing through the wall deals 5d6 fire damage.",
		"duration": "Concentration + (CASTERLEVEL) rounds",
		"level": "4",
		"longText": "An immobile blazing curtain of opaque shimmering violet fire springs into existence. One side of the wall selected by you sends forth waves of heat dealing 2d6 fire damage to creatures within 10 feet and 1d6 fire damage to those beyond 10 feet but within 20 feet. The wall deals this damage when it appears and on your turn each subsequent round. In addition the wall deals 5d6 fire damage to any creature passing through it. The wall deals double damage to undead creatures. If you evoke the wall so that it appears where creatures are each creature takes damage as if passing through the wall. If any 5-foot length of wall takes 20 or more cold damage in 1 round that length goes away.",
		"range": "Medium",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.384",
		"resistance": "Yes",
		"target": "Wall up to (CASTERLEVEL*20) ft. long or a ring with a radius up to (CASTERLEVEL/2*5) ft.; either form 20 ft. high",
		"technomancer": "4",
		"witchwarper": "4"
	},
	{
		"name": "Wall of Force",
		"castingTime": "1 standard action",
		"shortText": "Invisible wall is difficult to destroy.",
		"duration": "(CASTERLEVEL) rounds (D)",
		"level": "5",
		"longText": "Wall of force creates an invisible wall of pure force. You can form the wall into a flat vertical plane whose area is up to (CASTERLEVEL) ten-foot squares. The wall must be continuous and unbroken when formed. If its surface is broken by any object or creature the spell fails. This counts as a force field for effects that can't penetrate a force field. The wall can't move and is not easily destroyed. A wall of force is immune to dispel magic. A greater dispel magic specifically targeting the wall of force can dispel it but treat the wall of force's caster level as being 5 higher than the actual caster level. A wall of force can be damaged by spells and attacks as normal but a wall of force has hardness 30 and 300 Hit Points. Disintegrate instantly destroys a wall of force. Breath weapons and spells can't pass through a wall of force in either direction though dimension door teleport and similar effects can bypass the barrier. The wall blocks ethereal creatures as well as material ones (though ethereal creatures can usually circumvent the wall by going around it through material floors and ceilings). Gaze attacks operate normally through a wall of force.",
		"range": "Close",
		"save": "None",
		"school": "Evocation",
		"source": "Core Rulebook",
		"page": "p.384",
		"resistance": "No",
		"target": "Wall with area up to (CASTERLEVEL) ten-foot squares",
		"technomancer": "5",
		"witchwarper": "5"
	},
	{
		"name": "Wall of Steel",
		"castingTime": "1 standard action",
		"shortText": "Wall has 45 Hit Points per inch of thickness and hardness 15.",
		"duration": "Instantaneous",
		"level": "6",
		"longText": "You cause a flat vertical steel wall to spring into existence. The stress of casting this spell requires you to spend 1 Resolve Point. The wall can fit into any space of surrounding nonliving material if its area is sufficient to do so. The wall can't be conjured so that it occupies the same space as a creature or another object. It must always be a flat plane though you can shape its edges to fit the available space. A wall of steel is 4 inches thick. You can double the wall's area by halving its thickness. Each 5-foot square of the wall has hardness 15 and 45 Hit Points per inch of thickness. A section of wall that is reduced to 0 Hit Points is breached. The DC of the Strength check for a creature to break through the wall with a single attack is 30. The wall is firmly anchored to its surroundings and it doesn't easily tip over; it can't be summoned into any area where it is likely to fall or collapse. Like any steel wall this wall is subject to perforation and other natural phenomena though it doesn't rust or corrode under typical circumstances. The metal created by this spell is not suitable for use in the creation of other objects and can't be sold.",
		"range": "Medium",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.385",
		"resistance": "No",
		"target": "Steel wall with area up to (CASTERLEVEL*5) five-foot squares; see text",
		"technomancer": "6"
	},
	{
		"name": "Warp Reality",
		"shortText": "Alter reality to better suit you.",
		"castingTime": "1 standard action",
		"level": "s",
		"longText": "Beckoning to all realities at once, you pull in new possibilities and alter your world to suit you. A warp reality spell can produce one of the following effects. Duplicate any witchwarper spell of 6th level or lower. Duplicate any other spell of 5th level or lower. Undo the harmful effects of certain spells, such as feeblemind. Produce an effect of a power level in line with the above. At the GM’s discretion, warp reality can produce greater effects but can be dangerous or might have only a partial effect. A duplicated spell allows saving throws and spell resistance as normal, but the save DCs are as for a 7th-level spell. For other effects based on spell level, warp reality is a 9th-level spell.",
		"source": "Character Operations Manual",
		"page": "p.143",
		"school": "universal",
		"witchwarper": "s"
	},
	{
		"name": "Waves of Fatigue",
		"mystic": "5",
		"castingTime": "1 standard action",
		"shortText": "Several targets become fatigued.",
		"duration": "Instantaneous",
		"level": "5",
		"longText": "Waves of negative energy render all living creatures in the spell's area fatigued. This spell has no effect on a creature that is already fatigued.",
		"range": "30 ft.",
		"save": "None",
		"school": "Necromancy",
		"source": "Core Rulebook",
		"page": "p.385",
		"resistance": "Yes",
		"target": "Cone-shaped burst"
	},
	{
		"name": "Wish",
		"castingTime": "1 standard action",
		"shortText": "Alters reality (within limits).",
		"longText": "By simply speaking aloud you can alter reality to better suit you. Even wish however has its limits. A wish spell can produce any one of the following effects - Duplicate any technomancer spell of 6th level or lower; Duplicate any other spell of 5th level or lower; Undo the harmful effects of certain spells such as feeblemind; Produce any effect whose power level is in line with the above effects. At the GM's discretion you may try to use a wish to produce greater effects than these but doing so may be dangerous or the spell may have only a partial effect. A duplicated spell allows saving throws and spell resistance as normal but the save DCs are the same as for a 7th-level spell. For the purpose of other effects that depend on spell level wish counts as a 9th-level spell.",
		"school": "Universal",
		"source": "Core Rulebook",
		"page": "p.385",
		"level": "s",
		"technomancer": "s"
	},
	{
		"name": "Wisp Ally",
		"mystic": "1",
		"castingTime": "1 standard action",
		"shortText": "Create wisp of energy that shines light and distracts an enemy.",
		"duration": "(CASTERLEVEL) rounds",
		"level": "1",
		"longText": "You draw forth otherworldly energy to create a small spherical floating wisp that can distract your enemies in combat. This wisp can move 60 feet per round in any direction and you can direct it as a move action on your turn. If the wisp occupies the same space as an enemy the wisp provides your choice of either harrying fire or covering fire (see pages 246-247) against the enemy each round on your turn and it follows that enemy within range automatically unless you direct it to change targets. The wisp is made of pure light and energy and can't be damaged in combat though it can be dispelled as normal. In addition to the function described above the wisp sheds light in a 20-foot radius in a color of your choice (chosen when you cast the spell).",
		"range": "Close",
		"save": "None",
		"school": "Conjuration",
		"source": "Core Rulebook",
		"page": "p.385",
		"resistance": "No",
		"target": "One distracting glowing servant",
		"witchwarper": "1"
	},
	{
		"name": "Zone of Truth",
		"mystic": "2",
		"castingTime": "1 standard action",
		"shortText": "Creatures within range can't lie.",
		"duration": "(CASTERLEVEL) minutes",
		"level": "2",
		"longText": "Creatures within the emanation area can't speak any deliberate and intentional lies. Each potentially affected creature can attempt a Will saving throw to avoid the effect when the spell is cast or when that creature first enters the emanation area. Affected creatures are aware of this enchantment and they can therefore avoid answering questions to which they would normally respond with a lie or they can be evasive as long as they remain within the boundaries of the truth. Creatures who leave the area are free to speak as they choose.",
		"range": "Close",
		"save": "Will negates",
		"school": "Enchantment",
		"source": "Core Rulebook",
		"page": "p.385",
		"resistance": "Yes",
		"target": "20-ft.-radius emanation"
	}
];

var app = new Vue({
  el: '#app',
  data:data,
  created: function () {
    if(this.application.majorVer == localStorage.getItem('majorVer')) {
      if(localStorage.getItem('page') != undefined) {
        this.page = localStorage.getItem('page');
      }
      if(localStorage.getItem('characters') != undefined) {
        this.characters = JSON.parse(localStorage.getItem('characters'));
      }
    }
  },
  methods: {
    getSpellCounts: function (charClass,charLevel) {
      if(charClass == '' || charClass == undefined) {
        return [];
      }
      else if(parseInt(charLevel) == undefined || parseInt(charLevel) < 1) {
        return [];
      }
      else return this[charClass + 'Count'][charLevel];
    },
    returnLevel: function(input) {
      return parseInt(input[1]);
    },
    getSpellIndexFromName: function(name) {
      for(var i in this.spells) {
        if (this.spells[i].name == name) {
          return i;
        }
      }
      console.error('getSpellIndexFromName could not find "' + name + '".');
    },
    getVariantFromClass: function(spell,charClass) {
      if(this.spells[this.getSpellIndexFromName(spell)][charClass.toLowerCase()] != undefined) {
        return 'light';
      }
      else return 'danger';
    },
    alreadyInSpellList: function(charIndex,charClass,level,event) {
      var response = false;
      if(event != undefined) {
        for(var i in this.characters[charIndex].spells[level]) {
          if(this.characters[charIndex].spells[level][i].name == event) {
            response = true;
          }
        }
      }
      return response;
    },
    addToCharSpellList: function (charIndex,charClass,level,event) {
      if(event != undefined) {
        if(this.alreadyInSpellList(charIndex,charClass,level,event) == false) {
          this.characters[charIndex].spells[level].push({cls:charClass,name:event});
          unsaved = true;
        }
      }
    },
    removeFromCharSpellList: function (charIndex,level,spell) {
      this.characters[charIndex].spells[level].splice(spell,1);
      unsaved = true;
    },
    isNotCorrectClass: function (spell,charClass) {
      if(spell.technomancer != undefined) {
        if(charClass.toLowerCase() == 'technomancer') {
          return false;
        }
      }
      if(spell.mystic != undefined) {
        if(charClass.toLowerCase() == 'mystic') {
          return false;
        }
      }
      if(spell.witchwarper != undefined) {
        if(charClass.toLowerCase() == 'witchwarper') {
          return false;
        }
      }
      return true;
    },
    returnRemainingSpellCount: function(count,charIndex,level) {
      return parseInt(count) - this.characters[charIndex].spells[level].length;
    },
    returnLimitedSpellList: function(index,charClass,level) {
      var array = [];
      var skip = false;
      for(var i in this.spells) {
        if(this.spells[i][charClass.toLowerCase()] != undefined) {
          if(this.spells[i][charClass.toLowerCase()] == level) {
            for(var ii in this.characters[index].spells[level]) {
              if(this.characters[index].spells[level][ii].name == this.spells[i].name) {
                skip = true;
              }
            }
            if(!skip) { array.push(this.spells[i].name); }
            else skip = false;
          }
        }
      }
      return array;
    },
    addCharacter: function() {
      var uid = getUID();
      this.characters.push({
        'id':uid,
        'name':'',
        'class':'',
        'level':0,
        'abilityBonus':0,
        'spells':[[],[],[],[],[],[],[]]
      });
      unsaved = true;
    },
    deleteCharacter: function (index) {
      this.characters.splice(index,1);
      unsaved = true;
    },
    getAbility: function (charClass) {
      var abil = 'Key Ability';
      for(var i in this.keyAbility) {
        if(charClass == i) {
          abil = this.keyAbility[charClass];
        }
      }
      return abil;
    },
    setPage: function(name) {
      this.page = name;
      localStorage.setItem('page',name);
    },
    displaySpellLevel: function(level) {
      if(this.levels[level].state == true) { return true; }
      else return false;
    },
    showAll: function() {
      for(var i in this.levels) {
        this.levels[i].state = true;
        this.showMystic = true;
        this.showTechno = true;
        this.showWitch = true;
      }
    },
    showNone: function() {
      for(var i in this.levels) {
        this.levels[i].state = false;
        this.showMystic = false;
        this.showTechno = false;
        this.showWitch = false;
      }
    },
    showAllLevels: function() {
      for(var i in this.levels) {
        this.levels[i].state = true;
      }
    },
    showNoneLevels: function() {
      for(var i in this.levels) {
        this.levels[i].state = false;
      }
    },
    includeFromFormInput: function(index) {
      if(this.spells[index].startsWith(this.formInput)) {
        return true;
      }
      else return false;
    },
    toggleClass: function(input) {
      if(input == 'mystic') {
        if(this.showMystic == true) { this.showMystic = false; }
        else { this.showMystic = true; }
      }
      else if(input == 'technomancer') {
        if(this.showTechno == true) { this.showTechno = false; }
        else { this.showTechno = true; }
      }
      else if(input == 'witchwarper') {
        if(this.showWitch == true) { this.showWitch = false; }
        else { this.showWitch = true; }
      }
      else { console.log('Error: unknown Class supplied to toggleClass() method.'); }
    },
    warnClassSelection: function() {
      if(!this.showMystic && !this.showTechno && !this.showWitch) { return true; } else return false;
    },
    warnLevelSelection: function() {
      for(var i in this.levels) {
        if(this.levels[i].state == true) { return false; }
      }
      return true;
    },
    displaySpell: function(index) {
      var displaySearch;
      if(this.formInput != '') {
        if(this.spells[index].name.toLowerCase().includes(this.formInput.toLowerCase())) {
          displaySearch = true; //form is not blank, and is a match
        }
        else { displaySearch = false; } //form is not blank, and does not match the search
      }
      else { displaySearch = true; } //form is blank, so don't filter on a search term
      var displayMystic = false;
      var displayTechno = false;
      var displayWitch = false;
      var displayLevel = false;
      if(this.spells[index].mystic != undefined && this.showMystic) { displayMystic = true; }
      if(this.spells[index].technomancer != undefined && this.showTechno) { displayTechno = true; }
      if(this.spells[index].witchwarper != undefined && this.showWitch) { displayWitch = true; }
      if(this.displaySpellLevel(this.spells[index].level)) { displayLevel = true; }
      if(displaySearch && displayLevel && (displayMystic || displayTechno || displayWitch)) {
        return true;
      }
      else return false;
    },
    searchSpells: function() {
      this.formInput = document.getElementById('searchInput').value;
    },
    clearForm: function() {
      document.getElementById('searchInput').value = '';
      this.formInput = '';
    },
    saveData: function() {
      localStorage.setItem('characters',JSON.stringify(this.characters));
      localStorage.setItem('majorVer',this.application.majorVer);
      unsaved = false;
    }
  }
});

function getUID() {
  var id = 'id-' + Math.random().toString(36).substr(2, 16);
  return id;
};

function unloadPage(){ 
    if(unsaved){
        return "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";
    }
}

window.onbeforeunload = unloadPage;