const disposeData = [
  {
    category: "Paper hamburger wrappers",
    keywords: [
      "dirty burger wrappers",
      "hamburger wrappers",
      "A&W Burger Wrapper",
    ],
    instruction: {
      heading1: "​Food-soiled paper wrappers",
      body1: {
        condition:
          "Put dirty burger wrappers in your green cart for composting (sauce-covered or lots of food chunks).",
        bin: "Compost",
      },
      heading2: "Clean paper wrappers",
      body2: {
        condition: "​Recycle clean burger wrappers (some grease is ok)",
        bin: "Recycling",
      },
    },
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/hamburger-paper-wrapper-160px.jpg",
    ],
    votes: 0,
  },
  {
    category: "Appliances - Residential air conditioners",
    keywords: [
      "A/C unit",
      "portable heater",
      "portable air conditioner",
      "air conditioner",
    ],
    instruction: {
      heading1: "​Empty air conditioning units",
      body1: {
        condition:
          "Take empty air conditioning units to a City landfill for recycling.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "There will be a refrigerant removal surcharge (even if the refrigerant has been removed) and weight charges.",
      "Some private companies may accept or buy appliances. Refer to your city's Recycling Hotline for opportunities.",
    ],
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/appliances-airconditioners-160px.jpg",
    votes: 0,
  },
  {
    category: "Meat trays - foam",
    keywords: ["meat trays", "styrofoam"],
    instruction: {
      heading1: "​Foam trays",
      body1: {
        condition:
          "​Put foam meat trays, absorbent pads, and meat tray liners in your black cart as garbage.​​​",
        bin: "Garbage",
      },
    },
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/foam-meat-tray-160px.jpg",
    ],
    votes: 0,
  },
  {
    category: "Electronic toys",
    keywords: [
      "electronic toys",
      "electronic action figures and dolls",
      "battery-powered ride-on toys (12-volt battery max.)",
      "Electronic toy cameras",
      "Remote control vehicles and toys",
      "Electronic learning aids and books",
      "Electronic board or tabletop games",
    ],
    instruction: {
      heading1: "​Electronic toys",
      body1: {
        condition:
          "Take old and broken electronic toys to an electronics recycling drop-off. Items must have a power cord or run on a battery/charger.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Do NOT put power tools in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
  },
  {
    category: "Satellite dishes and TV accessories",
    keywords: [
      "Karaoke machine",
      "small satellite dish (residential use)",
      "TV sound bars",
      "Internet media streamers",
      "Apple TV",
      "Google chromecast",
      "separately sold remote controls",
    ],
    instruction: {
      heading1: "​Satellite dishes and TV accessories",
      body1: {
        condition:
          "Take old and broken satellite dishes and TV accessories to an electronics recycling drop-off. Items must have a power cord or run on a battery/charger.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
  },
  {
    category: "Paper condiment cups",
    keywords: ["paper cups", "paper containers", "Ketchup cup - paper"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put paper condiment cups or ketchup cups in your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-condiment-160px.jpg",
    ],
  },
  {
    category: "Single-use condiment packets",
    keywords: [
      "Ketchup packet",
      "mini ketchup packet",
      "mustard packet",
      "relish packet",
      "soy sauce packet",
      "vinegar packet",
    ],
    instruction: {
      heading1: "Single-use condiment packets​",
      body1: {
        condition:
          "Put ketchup packets and other single-serving condiment packages into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Common condiment packets include mustard, relish, soy sauce, vinegar and more.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/condiment-packets-160px.jpg",
    ],
  },
  {
    category: "Plastic - Single-serve coffee pods",
    keywords: [
      "coffee pods",
      "nespresso pods",
      "nescafe pods",
      "cappuccino pods",
      "Keurig K-cups",
    ],
    instruction: {
      heading1: "​Plastic, Aluminium and other single-serve coffee pods",
      body1: {
        condition:
          "Put plastic, aluminum and other single-serve coffee pods in your black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "​Coffee grounds",
      body2: {
        condition:
          "Coffee grounds inside the pod can be put in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Coffee pods and discs are too small and light for to be sorted properly at the recycling facility.",
      "Some coffee pod manufacturers may have their own recycling solutions such as Nespresso. Check the manufacturer's website for details.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastics-coffee-pods-160px.jpg",
    ],
  },
  {
    category: "Compostable coffee pods",
    keywords: ["Keurig K-cups - compostable", "coffee pods - compostable"],
    instruction: {
      heading1: "​Compostable coffee pods",
      body1: {
        condition:
          "Put compostable coffee pods into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Though marked 'compostable', these coffee pods don't break down quickly enough for The City's composting process and may contain synthetic, plastic or other non-compostable materials. To ensure we're creating the highest quality compost possible, please leave these items out of your green cart.​​",
    ],
    votes: 0,
  },
  {
    category: "Keys",
    keywords: ["keys", "key chains", "key rings", "key locks", "door keys"],
    instruction: {
      heading1: "Old and Used Keys​",
      body1: {
        condition: "Put old and used keys into the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: ["Some private metal recyclers may accept keys."],
    votes: 0,
  },
  {
    category: "Kitchen and bathroom countertops",
    keywords: [
      "marble tops",
      "granite tops",
      "countertops",
      "kitchen countertops",
      "bathroom countertops",
    ],
    instruction: {
      heading1: "Small quantities of countertops​",
      body1: {
        condition:
          "Put broken or used pieces of kitchen countertops and bathroom countertops into your black cart as garbage. This includes laminate, granite, wood and all types of common countertop materials. Size restrictions - Pieces must be less than: 15 cm (six inches) in diameter, 1.25 m (four feet) in length. Make sure the lid of the cart can close.",
        bin: "Garbage",
      },
      heading2: "​Large quantities of countertops",
      body2: {
        condition:
          "Take used or broken countertops from a renovation or demolition to a City landfill.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Some private companies may accept reusable building materials such as countertops.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/granite-160px.jpg",
    ],
  },
  {
    category: "Cat litter and pet waste",
    keywords: [
      "Cat litter",
      "Dog litter",
      "Pet waste",
      "Pet litter",
      "Cat food leftovers",
      "Dog food leftovers",
      "Pet food leftovers",
    ],
    instruction: {
      heading1: "​Pet waste - domestic",
      body1: {
        condition:
          "Put pet waste and kitty litter (all varieties) in your green cart for composting.",
        bin: "Compost",
      },
      heading2: "​Pet waste - commercial amounts",
      body2: {
        condition:
          "If you are a business looking to dispose of pet waste and cat litter, check your local business waste disposal service options for a landfill",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Pet waste must be put in a certified compostable bag or paper bag for dust control in order to protect your collector. Place the tied up/rolled up bag in your green cart for composting.",
      "If you live in a multi-family complex, check with your compost collection company to see if they accept pet waste.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/kittylitter-160px.jpg",
    ],
  },
  {
    category: "Facial tissue and toilet paper",
    keywords: [
      "Tissue",
      "Toilet paper",
      "Toilet tissue",
      "Facial tissue",
      "Paper napkins",
      "Paper towels",
      "Kleenex",
    ],
    instruction: {
      heading1: "Facial tissue and toilet paper​",
      body1: {
        condition:
          "Put used or clean facial tissues (such as Kleenex or Scotties tissue) and toilet paper in your green cart for composting. Most bodily fluids (saliva, tears, mucus etc.) are acceptable.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Put tissues with blood in your black cart as garbage.",
      "Put tissues soiled with makeup, cleaning products or other chemicals in your black cart as garbage.",
      "Do not flush facial tissues down the toilet as it is harmful to your home's pipes and the environment.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/used-tissue-160px.jpg",
    ],
  },
  {
    category: "Cardboard – Tissue boxes",
    keywords: ["Kleenex box", "Cardboard box", "Empty tissue box"],
    instruction: {
      heading1: "​Empty tissue boxes",
      body1: {
        condition:
          "Recycle empty tissue boxes (e.g. Kleenex boxes) in your blue cart of at a community recycling depot",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove the plastic window from the box and bundle with other plastic bags for recycling.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cardboard-tissueboxes-160px.jpg",
    ],
  },
  {
    category: "Juice pouches and drink pouches (foil/plastic)",
    keywords: [
      "Juice box",
      "Juice pouch",
      "Drink pouch",
      "Kool-Aid pouch",
      "foil pouch",
    ],
    instruction: {
      heading1: "​Ready-to-serve drink pouches",
      body1: {
        condition:
          "Recycle ready-to-serve drink pouches such as Kool-Aid, Minute Maid, Capri Sun etc. in your blue cart or at a community recycling depot. You will be eligible for a refund on any applicable deposit paid at the time of purchase",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Make sure to remove any straws before recycling. This does not include pouches that have a built-in plastic spout.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/drink-pouch-160px.jpg",
    ],
  },
  {
    category: "Paper labels on containers",
    keywords: ["paper label", "label - paper"],
    instruction: {
      heading1: "Paper labels​",
      body1: {
        condition:
          "Recycle paper container labels in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove paper labels from plastic containers, glass jars and food cans where possible. Recycle each item separately in your blue cart.",
      "Paper labels/stickers that are not easily removed are ok to leave on container.",
      "Put stickers into the black cart as garbage.",
      "By removing labels, this helps to make the containers cleaner and more ready for being recycled into a new product. The paper labels are then also recycled into new paper products.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-label-160px.jpg",
    ],
  },
  {
    category: "Plastic labels on containers",
    keywords: ["plastic label", "label - plastic", "label"],
    instruction: {
      heading1: "Plastic labels​",
      body1: {
        condition:
          "Put plastic container labels into the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Cut off plastic labels from plastic containers, glass jars and food cans and put the label in the garbage.",
      "Plastic labels are made of a rigid, non-stretchy type of plastic that is not acceptable for recycling. To prevent contaminating the other recyclables, make sure to remove these labels from your containers before recycling the containers.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-label-160px.jpg",
    ],
  },
  {
    category: "Where do I take paint and paint cans?",
    keywords: [
      "paint cans",
      "paint",
      "lacquer",
      "stains",
      "varnishes",
      "paint thinners",
      "thinners",
      "wood preservatives",
      "paint strippers and solvents",
      "alkyd",
      "latex",
      "oil-based paints",
    ],
    instruction: {
      heading1: "​Household harzadous paints and paint can wastes",
      body1: {
        condition:
          "Safely dispose paint and paint cans at a household hazardous waste drop-off location for free at a designated fire hall close to you or a city landfill",
        bin: "Landfill",
      },
      heading2:
        "​Commercial quantities of harzadous waste - paint and paint cans",
      body2: {
        condition:
          "If you are a commercial painting business, see your city's guide on disposing Commercial Paint to safely dispose of your leftover volumes of commercial paint.",
        bin: "Commercial disposal",
      },
    },
    moreInfo: [
      "Liquid paint must be sealed in the original can or another spill-proof container with the contents clearly labelled.",
      "We accept all paint cans including dried out paint and empty cans.",
      "We accept up to 20 litres of household chemicals per week.",
      "Never flush chemicals down your toilet, sink or drain as they harm the environment and may damage the pipes in your home.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householdhazardouswaste-paint-160px.jpg",
    ],
  },
  {
    category: "Hardwood and laminate flooring",
    keywords: [
      "laminate flooring",
      "hardwood flooring",
      "hardwood",
      "floors - wooden",
    ],
    instruction: {
      heading1: "​Small quantities of flooring",
      body1: {
        condition:
          "Put small quantities of hardwood flooring and laminate flooring into your black cart as garbage. Pieces must be less than 15cm (6 inches) in diameter and 1.25m (4 feet) in length. ",
        bin: "Garbage",
      },
      heading2: "​Large quantities of flooring",
      body2: {
        condition:
          "Some private companies may accept reusable building materials - check the Alberta Recycling Hotline for options. Take large quantities of flooring from a renovation or demolition to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: ["Make sure the lid of your cart can close."],
    votes: 0,
    image: [""],
  },
  {
    category: "Floor lamps large household items",
    keywords: [
      "floor lamp",
      "Suitcases and luggage",
      "Dog kennels and cat trees",
      "Patio furniture (chairs, table, umbrella)",
      "Patio umbrella",
      "Large picture frames",
      "Storage bins and trunks (Rubbermaid bins)",
      "Strollers",
      "Ironing board",
      "Paintings and sculptures",
      "Trophies",
      "Whiteboards and bulletin boards]",
    ],
    instruction: {
      heading1: "Useable household goods​",
      body1: {
        condition:
          "Reuse useable household goods, give to family and friends or donate to participating charities such as: Calgary Drop In Centre, Women in Need Society, Other donation options",
        bin: "Donate",
      },
      heading2: "Broken and unusable household goods​",
      body2: {
        condition:
          "Put broken or unusable housewares in your black cart as garbage. If the items are too large for the black cart, take them to a City landfill Throw n Go for disposal (charges apply).",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Break down items so they fit inside your black cart.",
      "Pieces must be less than 1.25 m (four feet) in length.",
      "Do not overpack or jam items as they will not empty out of the bin on collection day.",
      "Make sure the cart lid can close.",
    ],
    votes: 0,
    image: [""],
  },
  {
    category: "Landscape and gardening fabric",
    keywords: ["landscape fabric", "gardening fabric"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put landscape and gardening fabric in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
  {
    category: "Laptops and electronic notebooks",
    keywords: [""],
    instruction: {
      heading1: "​Useable laptops",
      body1: {
        condition:
          "Donate working computers other computer accessories to local charities: Calgary Drop In Centre, Women in Need Society, Other donation options",
        bin: "Donate",
      },
      heading2: "​Unusable laptops",
      body2: {
        condition:
          "Take old and broken laptops, electronic notebooks, laptop batteries and charging cords to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "Some restrictions apply.",
      "If you take electronics to a landfill and bring other garbage in your load landfill charges will apply.",
      "Clear all personal information from electronics prior to dropping off (e.g. wipe hard drives, clear SIM cards etc.)",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [""],
  },
  {
    category: "Rubber and plastic gloves",
    keywords: [
      "rubber gloves",
      "plastic gloves",
      "latex gloves",
      "nitrile gloves",
      "dishwashing gloves",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put disposable gloves in your black cart as garbage.​​​​​​​​",
        bin: "Garbage",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/rubber-gloves-160px.jpg",
    ],
  },
  {
    category: "LED light bulbs",
    keywords: ["light bulbs", "bulbs"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put LED light bulbs in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/led-lightbulb-160px.jpg",
    ],
  },
  {
    category: "Beans and lentils",
    keywords: [
      "beans",
      "kidney beans",
      "lentils",
      "pulses",
      "navy beans",
      "barley",
      "black eyed peas",
      "chick peas",
      "split peas",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put all dried, cooked or uncooked beans and lentils into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/beans-160px.jpg",
    ],
  },
  {
    category: "Chocolate and candy",
    keywords: ["licorice", "chocolate", "candy", "lollipop", "marshmallow"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put leftover chocolate and candy into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Remove all wrappers and packaging before composting.",
      "Put chewing gum into your black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/candy-160px.jpg",
    ],
  },
  {
    category: "Metal - Lids",
    keywords: [
      "lids - metal",
      "jam jar lids",
      "pickle jar lids",
      "tuna can lids",
      "metal container lid",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle jam jar lids, pickle jar lids, tuna can lids and other metal container lids: in your blue cart or at a community recycling depot",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Size restrictions: Metal lids must be larger than 5 cm (approx. two inches) in diameter.",
      "Tip: if the lid is about the size of the palm of your hand, it's ok to recycle.",
      "Where possible, place cut out metal lids inside the empty tin can and squeeze the top closed.",
      "Recycle metal lid separately from glass/plastic containers.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-lids.jpg",
    ],
  },
  {
    category: "Bottle caps and milk jug lids",
    keywords: [
      "beer caps",
      "pop lids",
      "milk caps",
      "wine caps",
      "aluminium caps",
      "bottle lids",
      "beverage lids",
      "cannabis drink lid covers",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put small metal lids and small plastic lids in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Tip: If the lid is smaller than the palm of your hand, it belongs in the garbage.",
      "Why can't this be recycled? Even if they are made from a recyclable material, caps are too small and light to be sorted properly by the sorting machines at the recycling facility and end up contaminating other recyclables. If you take your beverage containers directly back to a bottle depot, it is ok to leave lids and caps on in that case.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-bottle-caps.jpg",
    ],
  },
  {
    category: "Plastic - Large container lids",
    keywords: [
      "yoghurt tub lid",
      "margarine container lids",
      "cottage cheese container lids",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle large plastic container lids: in your blue cart or at a community recycling depot",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Size restrictions: Plastic lids must be larger than 7.5 cm (approx. three inches) in diameter.",
      "Tip: if the lid is about the size of the palm of your hand, it's ok to recycle.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-lids-160px.jpg",
    ],
  },
  {
    category: "Light ballasts",
    keywords: ["light ballast"],
    instruction: {
      heading1: "Small quantities of light ballasts​",
      body1: {
        condition:
          "Take up to five light ballasts to any City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
      heading2: "​Large quantities of light ballasts",
      body2: {
        condition:
          "If you need to dispose of more than five light ballasts, contact 311 to generate a service request.",
        bin: "Commercial disposal",
      },
    },
    moreInfo: [
      "If you are a business with light ballasts to dispose of, please Google 'Business Waste resources for options'.",
    ],
    votes: 0,
    image: [""],
  },
  {
    category: "Light bulbs – Compact fluorescent",
    keywords: ["CFL bulbs", "compact flourescent bulbs"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Safely dispose compact fluorescent light (CFL) bulbs for free at a household hazardous waste drop-off location: Designated fire hall or at the City landfill Throw 'n' Go area - if you bring with other garbage, landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Wrap each CFL bulb in paper, place in a bag and tie it closed for drop off",
      "If you are a business with CFL bulbs to dispose of, please Google 'Business Waste resources' for options.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/glass-lightbulbsfluorescent-160px.jpg",
    ],
  },
  {
    category: "Light bulbs - Incandescent and halogen",
    keywords: [
      "halogen light bulb",
      "incandescent light bulb",
      "household light bulb",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Reuse working incandescent light bulbs (traditional household bulbs) or halogen light bulbs by giving to family/friends or posting on an online website like Kijiji. Put old and broken incandescent light bulbs or halogen light bulbs in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Package items safely by putting the pieces into a puncture-resistant, non-breakable container (e.g. plastic tub, plastic pail, laundry detergent container, etc.)",
      "Or wrap in two layers of paper and place in a tied bag.",
      "Label as 'sharps' with a permanent marker and put in your black cart.",
      "You can also take properly packaged light bulbs to a City landfill. Landfill charges will apply.​​​",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/glass-lightbulbsincandescent-160px.jpg",
    ],
  },
  // {
  //   category: "Light bulbs - Fluorescent tubes",
  //   keywords: [""],
  //   instruction: {
  //     heading1: "​",
  //     body1: {
  //       condition: "",
  //       bin: "",
  //     },
  //     heading2: "​",
  //     body2: {
  //       condition: "",
  //       bin: "",
  //     },
  //   },
  //   moreInfo: [""],
  //   votes: 0,
  //   image: [""],
  // },
  // {
  //   category: "",
  //   keywords: [""],
  //   instruction: {
  //     heading1: "​",
  //     body1: {
  //       condition: "",
  //       bin: "",
  //     },
  //   },
  //   moreInfo: [""],
  //   votes: 0,
  //   image: [""],
  // },
  // {
  //   category: "",
  //   keywords: [""],
  //   instruction: {
  //     heading1: "​",
  //     body1: {
  //       condition: "",
  //       bin: "",
  //     },
  //   },
  //   moreInfo: [""],
  //   votes: 0,
  //   image: [""],
  // },
  // {
  //   category: "",
  //   keywords: [""],
  //   instruction: {
  //     heading1: "​",
  //     body1: {
  //       condition: "",
  //       bin: "",
  //     },
  //   },
  //   moreInfo: [""],
  //   votes: 0,
  //   image: [""],
  // },
  // {
  //   category: "",
  //   keywords: [""],
  //   instruction: {
  //     heading1: "​",
  //     body1: {
  //       condition: "",
  //       bin: "",
  //     },
  //   },
  //   moreInfo: [""],
  //   votes: 0,
  //   image: [""],
  // },
  // {
  //   category: "",
  //   keywords: [""],
  //   instruction: {
  //     heading1: "​",
  //     body1: {
  //       condition: "",
  //       bin: "",
  //     },
  //   },
  //   moreInfo: [""],
  //   votes: 0,
  //   image: [""],
  // },
  // {
  //   category: "",
  //   keywords: [""],
  //   instruction: {
  //     heading1: "​",
  //     body1: {
  //       condition: "",
  //       bin: "",
  //     },
  //   },
  //   moreInfo: [""],
  //   votes: 0,
  //   image: [""],
  // },
  {
    category: "Sponges and cleaners",
    keywords: [
      "S.O.S. soap pad",
      "SOS soap pad",
      "SOS pad",
      "scrubbers",
      "scrubbing pads",
      "cleaning erasers",
      "steel wool pads",
    ],
    instruction: {
      heading1: "​Sponges and cleaners",
      body1: {
        condition: "Put sponges and cleaners in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "This includes scrubbers, scrubbing pads, cleaning erasers and steel wool pads.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sponges-160px.jpg",
    ],
  },
  {
    category: "Twist ties, staples and fasteners",
    keywords: [
      "safety pin",
      "twist ties",
      "twist tie",
      "staple",
      "staples",
      "fasteners",
      "fastener",
      "thumb tacks",
      "thumb tack",
      "paper clip",
      "paper clips",
      "safety pins",
      "screws",
      "screw",
      "button",
      "buttons",
      "hooks",
      "bread tags",
      "bread tag",
      "nails",
      "nail",
      "nuts and bolts",
    ],
    instruction: {
      heading1: "Twist ties, staples and fasteners​",
      body1: {
        condition:
          "Put used and broken fasteners into your black cart as garbage. This includes: twist ties, staples, thumb tacks, paper clips, safety pins, screws, buttons, hooks, bread tags, nails, nuts and bolts (double bagged and tied closed before disposing).",
        bin: "Garbage",
      },
    },
    moreInfo: ["Reuse fasteners where possible."],
    votes: 0,
  },
  {
    category: "Plastic safety seal",
    keywords: ["safety seal - plastic"],
    instruction: {
      heading1: "Plastic safety seal",
      body1: {
        condition: "Put plastic safety seals in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Safety seals are often put on containers to prevent them from being opened. This includes mouthwash bottles, pop bottles, medicine, pill bottles and more.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-safety-seal-160px.jpg",
    ],
  },
  {
    category: "Vegetables",
    keywords: [
      "salad",
      "salad greens",
      "corn cobs",
      "corn cob",
      "corn husks",
      "herbs",
      "vegetable peelings",
      "stems",
      "seeds",
      "stalks",
      "skins",
      "vegetables",
      "vegetable",
    ],
    instruction: {
      heading1: "​Vegetables",
      body1: {
        condition:
          "Put all types of vegetables (raw or cooked) into your green cart for composting. This includes salad greens, corn cobs, corn husks, herbs, vegetable peelings, stems, seeds, stalks, and skins.",
        bin: "Compost",
      },
    },
    moreInfo: ["Remove all vegetable stickers before composting."],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/corn-on-the-cob-160px.jpg",
    ],
  },
  {
    category: "Plastic takeout food containers",
    keywords: [
      "salad container",
      "sandwich wedge container",
      "takeout containers - plastic",
    ],
    instruction: {
      heading1: "Plastic takeout food containers​",
      body1: {
        condition:
          "Recycle plastic takeout food containers marked with recycling symbol 1-7. Remove any remaining food and rinse the container before recycling.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "This includes sandwich wedge containers, deli containers, salad kit containers, and dessert cups.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-container-160px.jpg",
    ],
  },
  {
    category: "Salad dressings and condiments",
    keywords: [
      "salad dressing",
      "condiments",
      "viniagrette",
      "cream",
      "ketchup",
      "mustard",
      "relish",
      "mayonnaise",
      "barbecue sauce",
      "BBQ sauce",
      "steak sauce",
      "hot sauce",
      "sriracha sauce",
    ],
    instruction: {
      heading1: "Salad dressings and condiments​",
      body1: {
        condition:
          "Put all salad dressing and condiments into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Soak up runny condiments with newspaper or used paper towels/napkins.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/ketchup-condiments-160px.jpg",
    ],
  },
  {
    category: "Salad dressing and condiment bottles",
    keywords: [
      "salad dressing bottle",
      "condiment bottle",
      "condiment bottles",
    ],
    instruction: {
      heading1: "​Salad dressing and condiment bottles",
      body1: {
        condition:
          "Recycle plastic salad dressing bottles and condiment bottles with the recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Make sure the containers are rinsed out before recycling. Put lids in the black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/salad-dressing-160px.jpg",
    ],
  },
  {
    category: "Non-stretchy plastic bags",
    keywords: [
      "plastic salad kit bag",
      "salad kit bag - plastic",
      "cereal and cracker box liners",
      "Fruit bags e.g. grape bags, cherry bags",
      "fruit bags",
      "cherry bags",
      "vegetable bags",
      "prewashed spinach bags",
      "cheese string wrappers",
      "food pouch bags",
      "frozen food pouches",
      "beef jerky pouches",
      "beef jerky bags",
      "beef jerky bag",
      "food seals",
      "container seals",
      "woven plastic bags",
      "mesh fruit bag",
      "mesh vegetable bag",
      "mesh bag",
    ],
    instruction: {
      heading1: "​Non-stretchy plastic bags",
      body1: {
        condition:
          "Put non-stretchy plastic bags and film into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "This includes rigid and crinkly bags, even if it has a recycling number on it.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-grape-bag-160px.jpg",
    ],
  },
  {
    category: "Salad kit containers",
    keywords: ["salad kit container", "lettuce container"],
    instruction: {
      heading1: "​Salad kit containers",
      body1: {
        condition:
          "Recycle salad kit containers and produce containers with the recycling symbol 1-7",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "These containers are often used to hold produce such as lettuce, strawberries, grapes and more.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/salad-container-160px.jpg",
    ],
  },
  {
    category: "Spices and herbs",
    keywords: [
      "salt",
      "ginger",
      "poppy seeds",
      "sesame seeds",
      "cocoa nibs",
      "caraway seeds",
      "chicory root",
      "chiles",
      "chili powder",
      "pepper",
      "salts",
      "seasoning",
    ],
    instruction: {
      heading1: "​Spices and herbs",
      body1: {
        condition:
          "Put all types of dried and fresh spices, herbs, bark and roots in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Loose spice flakes must be put in a certified compostable bag or paper bag and tied closed/rolled closed before composting.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/spice-160px.jpg",
    ],
  },
  {
    category: "Sand",
    keywords: ["sand"],
    instruction: {
      heading1: "Small quantities of sand​",
      body1: {
        condition:
          "Put small amounts of sand in your green cart for composting. Sand must be bagged for dust control. Put paper bags inside of green cart or set one foot to the side of your cart on collection day. Paper yard waste bags have a 20 kg weight limit. Make sure bags are rolled up and can be easily lifted.",
        bin: "Compost",
      },
      heading2: "Large quantities of sand",
      body2: {
        condition:
          "Take large amounts of sand to a City landfill (disposal only).",
        bin: "Landfill",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sand-160px.jpg",
    ],
  },
  {
    category: "Power tools",
    keywords: [
      "sander",
      "drill",
      "drills",
      "die grinder",
      "angle grinder",
      "miter saw",
      "table saw",
      "scroll saw",
      "circular saw",
      "nail gun",
      "air compressor",
      "shop vacuum",
      "drum machine",
      "powered caulking gun",
      "sander",
      "belt sander",
      "disc sander",
      "soldering iron",
      "pipe cutter",
    ],
    instruction: {
      heading1: "Usable power tools",
      body1: {
        condition:
          "Donate working power tools to participating charities or private recyclers. Refer to Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable power tools",
      body2: {
        condition:
          "Take old and broken power tools to an electronics recycling drop-off. Items must have a power cord or run on a battery/charger and be for residential use.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "This includes portable electronic air tools as well as mounted, work bench or floor power tools.",
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/power-tools/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout8261/column-1-r0/image.img.jpeg/1612282998905/householditems-tools.jpeg",
    ],
  },
  {
    category: "Sandpaper, steel wool",
    keywords: ["sandpaper, steel wool"],
    instruction: {
      heading1: "​Sandpaper, steel wool",
      body1: {
        condition:
          "Put sandpaper and steel wool in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sandpaper-305px.jpg",
    ],
  },
  {
    category: "Cookie, dessert and sandwich bags",
    keywords: [
      "sandwich bag - paper",
      "paper sandwich bag",
      "cookie bag",
      "paper sandwich bags",
      "Starbucks bag - paper",
      "paper starbucks bag",
      "takeout cookie/sandwich bag - paper",
      "Tim Hortons bag - paper",
    ],
    instruction: {
      heading1: "​Food-soiled paper bags",
      body1: {
        condition:
          "Put dirty paper bags in your green cart for composting (sauce-covered, icing-covered or lots of food chunks).",
        bin: "Compost",
      },
      heading2: "Clean paper bags",
      body2: {
        condition:
          "Recycle paper bags (some grease is ok) in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tim-horton-bag-160px.jpg",
    ],
  },
  {
    category: "Where do I put plastic bags?",
    keywords: [
      "grocery bag",
      "shopping bag",
      "dry cleaner bag",
      "bread bag",
      "frozen vegetable bag",
      "freezer bag",
      "resealable bag",
      "ziploc bag",
      "vacuum seal bags and packaging",
      "plastic wrap",
      "saran wrap",
      "plastic packaging on household items such as toilet paper and paper towels",
      "bubble wrap",
    ],
    instruction: {
      heading1: "​Stretchy bags",
      body1: {
        condition:
          "Bundle plastic bags together for recycling in your blue cart or community recycling depot.",
        bin: "Recycling",
      },
      heading2: "Not stretchy",
      body2: {
        condition:
          "Put plastic bags that don't stretch, such as cereal or cracker bags, in your black cart as garbage. If you're not sure if a bag is stretchy, put in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Bundle clean bags into a single plastic bag (also one that stretches). Tie the bundled bag closed by tying handles together twice or knotting bag at top.",
      "Do not use elastics or twist ties.",
      "Remove stickers and labels off the bags where possible. If some of the sticker is left behind, that’s ok.",
      "Tip: Hang a bag off a hook/door handle and fill up with plastic bags as you finish using them. Once full, double-knot bag closed for recycling.",
      "Bundling your bags into one bag allows workers to separate them for recycling. Loose plastic bags fly around, get stuck in other quality recyclables and jam equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastics-bags-160px.jpg",
    ],
  },
  {
    category: "Resealable deli meat and cheese package",
    keywords: ["sandwich meat - resealable package"],
    instruction: {
      heading1: "​Resealable deli meat and cheese package",
      body1: {
        condition:
          "Put plastic resealable food containers in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "These packs have a reseable top with a harder plastic bottom. They are commonly used for deli meat and cheese slices.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/resealable-deli-meat-pack-160px.jpg",
    ],
  },
  {
    category: "Sandwich wrappers - paper",
    keywords: [
      "sandwich wrapper - paper",
      "Subway sandwich wrapper",
      "checkered sandwich sheet",
      "brown paper wrappers",
    ],
    instruction: {
      heading1: "Food-soiled sandwich sheets​",
      body1: {
        condition:
          "Put dirty paper sandwich sheets in your green cart for composting (sauce-covered or lots of food chunks).",
        bin: "Compost",
      },
      heading2: "Clean sandwich sheets",
      body2: {
        condition: "Recycle paper sandwich wrappers (some grease is ok).",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/subway-wrapper-160px.jpg",
    ],
  },
  {
    category: "Tampons and sanitary napkins",
    keywords: [
      "sanitary napkin",
      "sanitary napkins",
      "tampon applicator",
      "tampon",
      "sanitary liner",
      "napkin",
    ],
    instruction: {
      heading1: "​Tampons and sanitary napkins",
      body1: {
        condition:
          "Put tampons and these related items in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Wrap soiled items in toilet paper or put in a garbage bag before disposing.",
      "Never flush sanitary products down the toilet as it can harm drainage pipes and the environment.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tampon-160px.jpg",
    ],
  },
  {
    category: "How do I dispose of plastic film?",
    keywords: [
      "saran wrap",
      "plastic film",
      "cling wrap",
      "glad stretch wrap",
      "bubble wrap",
      "shrink wrap",
    ],
    instruction: {
      heading1: "​How do I dispose of plastic film?",
      body1: {
        condition:
          "Recycle clean, stretchy plastic wrap, bubble wrap and other plastic film.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Bundle plastic film in a see-through plastic bag (one that stretches) and tie the handles closed.",
      "Put plastic bags that don't stretch, such as cereal or cracker bags, in your black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-film-160px.jpg",
    ],
  },
  {
    category: "Satellite dishes and TV accessories",
    keywords: [
      "satellite dish",
      "small satellite dish",
      "internet media streamer",
      "karaoke machine",
      "TV sound bar",
      "separately sold remote control",
    ],
    instruction: {
      heading1: "​Satellite dishes and TV accessories",
      body1: {
        condition:
          "Take old and broken satellite dishes and TV accessories to an electronics recycling drop-off. Items must have a power cord or run on a battery/charger.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
  },
  {
    category: "Cell phones and smartphones",
    keywords: [
      "satellite phone",
      "cell phone",
      "cellphone",
      "flip phone",
      "phablet",
      "smartphone",
      "pager",
    ],
    instruction: {
      heading1: "Usable cell phones​",
      body1: {
        condition:
          "Donate working cell phones and smart phones to local charities.",
        bin: "Donate",
      },
      heading2: "Old and broken cell phones",
      body2: {
        condition:
          "Take old and broken cell phones to a local retailer for recycling free-of-charge. Find a list of locations at Call2Recycle.You can also take cell phones to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Delete all personal information from your cell phone before recycling it. Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      [
        "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cell-phones.jpg",
      ],
    ],
  },
  {
    category: "Sauces, dips and gravy",
    keywords: [
      "sauce",
      "dip",
      "gravy",
      "pasta sauce",
      "pizza sauce",
      "cranberry sauce",
      "hummus dip",
      "plum sauce",
      "soy sauce",
      "Worcestershire sauce",
      "tomato sauce",
    ],
    instruction: {
      heading1: "​Sauces, dips and gravy",
      body1: {
        condition:
          "Put all sauces, dips and gravy into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Soak up runny sauces with newspaper or used paper towels/napkins.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sauce-dip-160px.jpg",
    ],
  },
  {
    category: "Meat, poultry, pork and bones",
    keywords: [
      "sausage",
      "meat",
      "poultry",
      "bones",
      "pork",
      "ground meat",
      "beef",
      "processed meat",
    ],
    instruction: {
      heading1: "Meat, poultry, pork and bones​",
      body1: {
        condition:
          "Put all raw and cooked meat into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/chicken-bones-160px.jpg",
    ],
  },
  {
    category: "Sausage casing",
    keywords: ["sausage casing"],
    instruction: {
      heading1: "Edible sausage casings​",
      body1: {
        condition:
          "Put edible sausage casings into your green cart for composting. Make sure to remove any metal enclosures and put in the garbage.",
        bin: "Compost",
      },
      heading2: "Non-edible sausage casings",
      body2: {
        condition:
          "Put sausage casings that need to be peeled off in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sausage-casing-160px.jpg",
    ],
  },
  {
    category: "Wood – Untreated",
    keywords: ["sawdust"],
    instruction: {
      heading1: "Small quantities of untreated wood​",
      body1: {
        condition:
          "Put small amounts of wood in your green cart. Wood pieces must be less than 15 cm in diameter and less than 1.25 meters in length. Make sure the lid of the cart can close. Put wood shavings and sawdust in a certified compostable bag or paper bag. Place the tied up/rolled up bag in your green cart.",
        bin: "Compost",
      },
      heading2: "Large quantities of untreated wood",
      body2: {
        condition:
          "Take large amounts of untreated wood from renovations and demolitions to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "If you are a business with untreated wood to dispose of, see our Business Waste resources for options.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/wood-untreatedwood-160px.jpg",
    ],
  },
  {
    category: "Shellfish and seafood",
    keywords: [
      "scallops",
      "oysters",
      "lobster",
      "lobsters",
      "crab",
      "crabs",
      "mussels",
      "clams",
      "shrimp",
      "crayfish",
      "prawns",
      "fish",
      "squid",
      "octopus",
      "shellfish",
      "seafood",
    ],
    instruction: {
      heading1: "Shellfish and seafood​",
      body1: {
        condition:
          "Put all shellfish, seafood and shells into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/crab-160px.jpg",
    ],
  },
  {
    category: "Printers, scanners and fax machines",
    keywords: ["scanner", "printer", "printers", "fax machine", "typewriter"],
    instruction: {
      heading1: "Printers, scanners and fax machines​",
      body1: {
        condition:
          "Take old and broken printers, scanners, fax machines, typewriters and accompanying cables and cords to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Clear all personal information from electronics prior to dropping off (e.g. wipe hard drives, clear SIM cards etc.)",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
  },
  {
    category: "Small household items",
    keywords: [
      "scissors",
      "dishes",
      "plates",
      "lamps",
      "lampshades",
      "knives",
      "window blinds",
      "umbrellas",
      "umbrella",
      "air mattress",
      "picture frame",
      "garden hose",
      "snow shovel",
      "sewing machine",
      "wicker basket",
    ],
    instruction: {
      heading1: "​Useable household goods",
      body1: {
        condition:
          "Reuse useable household goods, give to family and friends or donate to participating charities such as: Calgary Drop In Centre, Women in Need Society.",
        bin: "Donate",
      },
      heading2: "Broken and unusable household goods",
      body2: {
        condition:
          "Put small unusable housewares in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Package glass items and knives safely by putting them into a puncture-resistant, non-breakable container (e.g. plastic tub, plastic pail, laundry detergent container, etc.)",
      "Or wrap in two layers of paper and place in a tied bag.",
      "Label as 'sharps' with a permanent marker and place in your black cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householditems-cookware-160px.jpg",
    ],
  },
  {
    category: "How to dispose of leftover scrap fabric, yarn and thread",
    keywords: ["scrap fabric", "yarn", "thread"],
    instruction: {
      heading1: "​How to dispose of leftover scrap fabric, yarn and thread",
      body1: {
        condition:
          "Put small pieces of fabric, yarn and thread in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/yarn-160px.jpg",
    ],
  },
  {
    category: "Metal - Scrap metal and unusable metal items",
    keywords: [
      "scrap metal",
      "unusable metal items",
      "generator",
      "car parts",
      "hot water tank",
      "water heater",
      "water boiler",
      "furnace",
      "snowblower",
      "garburator",
      "air compressor",
      "aluminum siding",
      "chain link fence",
      "barbed wire",
      "chicken wire",
      "metal wire fencing",
      "aluminum ladder",
      "slides",
      "swing sets",
      "playgrounds",
    ],
    instruction: {
      heading1: "​Private recycling",
      body1: {
        condition:
          "Take scrap metal to a metal recycler. See Alberta's Recycling Hotline. Some private companies may buy scrap metal, charge a fee or accept items for free. Recon Metal, Calgary Metal, Federal Metals, Blackfoot Metals.",
        bin: "metal recycler",
      },
      heading2: "City landfill recycling",
      body2: {
        condition:
          "You can also take scrap metal to a City landfill for recycling. Landfill charges will apply.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Remove oil and gas from generators before recycling.",
      "All fluids must be drained from enginer and transmission before recycling car parts.",
      "Chain link fence must be in rolls.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-disc-brakes-160px.jpg",
    ],
  },
  {
    category: "Lottery scratch tickets",
    keywords: ["scratch ticket"],
    instruction: {
      heading1: "​Lottery scratch tickets",
      body1: {
        condition:
          "Put lotto scratch 'n win tickets into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
  },
  {
    category: "Hand tools",
    keywords: ["screwdriver", "hammer", "chisel", "trowel", "wrench"],
    instruction: {
      heading1: "​Usable tools",
      body1: {
        condition:
          "Reuse or don​ate usable hand tools such as hammers, chisels, trowels, screwdrivers, and wrenches. Post on an online bartering website like Kijiji. Some private companies may accept resuable building materials. Check the Alberta Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable tools",
      body2: {
        condition:
          "Put hand tools that are no longer usable into your black cart as garbage. Double bag and tied closed before disposing.​​​​​",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/hammer-160px.jpg",
    ],
  },
  {
    category: "Digital cameras and camcorders",
    keywords: [
      "security camera",
      "digital camera",
      "camcorder",
      "DLSR camera",
      "dash camera",
      "back-up camera",
      "doorbell camera",
    ],
    instruction: {
      heading1: "​Usable digital cameras",
      body1: {
        condition:
          "Donate working digital cameras and camcorders to participating charities. See Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable digital cameras",
      body2: {
        condition:
          "Take old and broken cameras to an electronics recycling drop-off.​​​​​",
        bin: "Recycling drop-off",
      },
      moreInfo: [
        "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
        "Some restrictions apply. For full details, see Electronics Recycling program.",
        "Clear all personal information from electronics prior to dropping off (e.g. remove camera memory cards etc.)",
        "Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility.",
        "London Drugs locations in Calgary will also accept cameras for recycling.",
      ],
      votes: 0,
      image: [
        "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/digital-camera-160px.jpg",
      ],
    },
  },
  {
    category: "Nuts, seeds, and shells",
    keywords: [
      "seeds",
      "nuts",
      "peanuts",
      "peanut shells",
      "wanuts",
      "pecans",
      "cashews",
      "brazil nuts",
      "almonds",
      "tree nuts",
      "pistachios",
      "pistachio shells",
      "pumpkin seeds",
      "sunflower seeds",
      "popcorn",
      "popcorn kernels",
      "shells - nuts and seeds",
    ],
    instruction: {
      heading1: "​Nuts, seeds, and shells",
      body1: {
        condition:
          "Put all nuts, seeds and shells into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/nut-shells-160px.jpg",
    ],
  },
  {
    category: "CPUs, all-in-one computers and servers",
    keywords: ["server", "CPUs", "CPU", "all-in-one computer"],
    instruction: {
      heading1: "​CPUs, all-in-one computers and servers",
      body1: {
        condition:
          "Take old and broken CPUs (central processing units), all-in-one computers and servers to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Clear all personal information from electronics prior to dropping off (e.g. wipe your hard drives, clear SIM cards etc.)",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
  },
  {
    category: "Shampoo and conditioner bottles",
    keywords: ["shampoo bottle", "conditioner bottle"],
    instruction: {
      heading1: "​Shampoo and conditioner bottles",
      body1: {
        condition:
          "Recycle clean plastic shampoo bottles and conditioner bottles with the recycling symbol 1-7 on it in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Rinse out containers before recycling.",
      "Remove any hand pumps and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/shampoo-bottle-160px.jpg",
    ],
  },
  {
    category: "Pencils, crayons and markers",
    keywords: ["sharpie pen", "pencil", "crayon", "marker"],
    instruction: {
      heading1: "​Usable pencils and crayons",
      body1: {
        condition:
          "Pencils (regular and mechanical), crayons, coloring pencils and pencil crayons that are still usable can be donated to charities or given to friends and family for reuse.",
        bin: "Donate",
      },
      heading2: "Broken and unusable pencils and crayons",
      body2: {
        condition:
          "Put pencils that are broken or too short to use as well as dried up/empty markers in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
  },
  {
    category: "Aerosols - hairspray and personal care",
    keywords: [
      "shaving cream - aerosol",
      "hairspray - aerosol",
      "mousse - aerosol",
      "sunscreen - aerosol",
      "deodorant - aerosol",
      "bug repellent - aerosol",
      "air freshener - aerosol",
    ],
    instruction: {
      heading1: "Aerosols - hairspray and personal care​",
      body1: {
        condition:
          "Safely dispose aerosol cans (including expired cans) for free at a household hazardous waste drop-off location such as a designated fire hall or city landfill throw 'n' go area.",
        bin: "hazardous waste",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/aerosol-spray-160px.jpg",
    ],
  },
  {
    category: "Shaving razors and razor blades",
    keywords: ["shaving razor", "razor blade"],
    instruction: {
      heading1: "​Shaving razors and razor blades",
      body1: {
        condition:
          "Put properly packaged razors and razor blades (including plastic and metal handles) in your black cart as garbage. This is for the safety of your collector and landfill staff.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Package unusable or broken razors safely by putting the pieces into a puncture-resistant, non-breakable, sealed container (e.g. plastic bleach bottle, laundry detergent bottle, plastic pail with lid).",
      "Or wrap the razor pieces in two layers of paper, put in a bag and tie closed.",
      'Label as "sharps" with a permanent marker and place in your black cart as garbage.',
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/shaving-razor-160px.jpg",
    ],
  },
  {
    category: "Pots, pans and other metal cooking items",
    keywords: [
      "sheet pan",
      "metal cooking items",
      "baking pan",
      "baking sheet",
      "cookie sheet",
      "muffin tray",
      "cutlery",
      "frying pan",
      "cooking pot",
    ],
    instruction: {
      heading1: "​Usable pots and pans",
      body1: {
        condition:
          "Donate usable pots, frying pans, bakeware and cutlery to participating charities or private metal recyclers. Refer to Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable pots and pans",
      body2: {
        condition:
          "Put broken pots, frying pans, cookie sheets, baking sheets, muffin trays and cutlery in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "You can also take them to a City landfill for metal recycling. Landfill charges will apply.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cookware-160px.jpg",
    ],
  },
  {
    category: "Sheet protectors and page protectors",
    keywords: [
      "plastic sheet protector",
      "plastic page protector",
      "laminated paper",
      "sheet protector",
      "page protector",
    ],
    instruction: {
      heading1: "​Sheet protectors and page protectors",
      body1: {
        condition:
          "Reuse plastic sheet and page protectors where possible. Put used plastic sheet protectors, page protectors and laminated paper into the black cart as garbage.​​​​​",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sheet-protector-160px.jpg",
    ],
  },
  {
    category: "Plastic shipping bags and bubble mailers",
    keywords: [
      "shipping bag - plastic",
      "bubble mailer",
      "plastic shipping bag",
      "plastic mailing envelope",
      "plastic envelope",
      "shipping air pillows",
      "plastic bubble mailing envelopes",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle plastic shipping bags in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "You must bundle with other plastic bags before recycling.",
      "Mailing labels are ok to leave on the packaging if they don’t easily come off.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/bubble-mailer-305px.jpg",
    ],
  },
  {
    category: "Where do I take clothing, shoes and textiles?",
    keywords: [
      "shirt",
      "shoes",
      "textiles",
      "clothing",
      "clothes",
      "pants",
      "sweater",
      "dresses",
      "outerwear",
      "jackets",
      "coats",
      "footwear",
      "purses",
      "backpack",
      "wallet",
      "belt",
      "household linens",
      "bedding",
      "towels",
      "curtains",
      "pillows",
      "duvet",
      "blanket",
      "underwear",
      "hat",
      "mittens",
      "scarf",
      "suitcase",
      "duffel bag",
      "wool items",
      "leather",
    ],
    instruction: {
      heading1: "How do I donate usable clothing and shoes?",
      body1: {
        condition:
          "​Contact local charities to find out what type of reusable clothes, shoes and damaged textiles are accepted in their drop off bins",
        bin: "Donate",
      },
      heading2: "Can I recycle clothing, shoes and textiles?",
      body2: {
        condition:
          "Yes. Take clothing and textiles, even damaged goods, to any City landfill for free textile recycling. The Throw 'N' Go bins accept a variety of textiles.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Even if the material is ripped or damaged, make sure that all clothing and fabrics are clean before bringing in for recycling.",
      "Place items inside a bag before dropping off at the City landfill Throw ’n’ Go. This helps keeps the clothing dry and makes it easier to collect.",
      "If you bring other garbage in your load, landfill charges will apply.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/clothing-and-shoes-160px.jpg",
    ],
  },
  {
    category: "Paper gift bags and shopping bags",
    keywords: ["shopping bag - paper", "paper shopping bag"],
    instruction: {
      heading1: "​Paper gift bags and shopping bags",
      body1: {
        condition:
          "When your paper bags and gift bags can no longer be re-used, recycle them in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Bags with paper handles are ok to recycle.",
      "Remove ribbons, string handles, shoe strings and metal rivets them and put in your black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-bags.jpg",
    ],
  },
  {
    category: "Cakes, muffins and pastries",
    keywords: [
      "shortbread",
      "cake",
      "muffins",
      "pastries",
      "cheesecake",
      "ice cream cake",
      "fruit cake",
      "donuts",
      "cupcakes",
      "cookies",
      "wafers",
      "biscuits",
      "graham crackers",
      "pies",
      "pie",
      "tart",
      "croissant",
      "gingerbread cookies",
    ],
    instruction: {
      heading1: "​Cakes, muffins and pastries",
      body1: {
        condition:
          "Put leftover cakes, muffins and pastries into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/pastries-160px.jpg",
    ],
  },
  {
    category: "Plastic shower curtains and liners",
    keywords: ["shower curtain", "shower liner", "plastic shower curtain"],
    instruction: {
      heading1: "​Plastic shower curtains and liners",
      body1: {
        condition:
          "Put plastic shower curtains and liners in your black cart as garbage.​​​​",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/shower-curtain-160px.jpg",
    ],
  },
  {
    category: "Stand up flexible pouch",
    keywords: [
      "shredded cheese bag",
      "stand up pouch",
      "laundry detergent bag",
      "laundry detergent pouch",
    ],
    instruction: {
      heading1: "​Stand up flexible pouch",
      body1: {
        condition:
          "Put stand up pouches in your black cart as garbage. Examples of items that use stand up pouches include: frozen fruit and frozen vegetables, cereal, beef jerky, coffee, trail mix, dried fruit, shredded cheese, dishwasher and laundry detergent tabs, dog food",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be recycled? These pouches are made of multiple layers of materials (usually a mix of plastic/paper/metal) which are not easily separated for recycling.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-fruit-pouch-cpia-305px.jpg",
    ],
  },
  {
    category: "Paper – Shredded",
    keywords: ["shredded paper"],
    instruction: {
      heading1: "Paper – Shredded​",
      body1: {
        condition:
          "Recycle bagged, shredded paper and documents in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Put your shredded paper in a see-through or transparent plastic bag and tie the handles closed.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-shreddedpaper-160px.jpg",
    ],
  },
  {
    category: "Plastic overwrap and shrink wrap packaging",
    keywords: ["stretchy plastic overwrap"],
    instruction: {
      heading1: "​Plastic overwrap and shrink wrap packaging",
      body1: {
        condition:
          "Recycle clean, stretchy plastic overwrap in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Separate overwrap from other materials (e.g. cardboard flat) for recycling.",
      "Bundle overwrap in a clear, see-through plastic bag (also one that stretches) and tie the handles closed.",
      "Put plastic overwrap that doesn't stretch, such as cereal or cracker bags, in your black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-bottle-overwrap-305px.jpg",
    ],
  },
  {
    category: "Pasta and rice",
    keywords: [
      "sidekicks pasta",
      "pasta",
      "rice",
      "spaghetti",
      "lasagna",
      "couscous",
      "quinoa",
      "noodles",
      "dehydrated/powdered side dishes",
      "instant mashed potatoes",
      "kraft dinner",
    ],
    instruction: {
      heading1: "​Pasta and rice",
      body1: {
        condition:
          "Put dried or cooked pasta, rice, and grains into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/spaghetti-160px.jpg",
    ],
  },
  {
    category: "Chalk",
    keywords: ["sidewalk chalk", "chalk"],
    instruction: {
      heading1: "​Chalk",
      body1: {
        condition:
          "​Put classroom chalk sticks and sidewalk chalk into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fexperimentexchange.com%2Fchemistry-matter%2Fmake-sidewalk-chalk%2F&psig=AOvVaw0-oYtzAeAPocb5oOn41jVI&ust=1637689362422000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDpxLfCrPQCFQAAAAAdAAAAABAK",
    ],
  },
  {
    category: "Silica gel packets",
    keywords: ["silica gel"],
    instruction: {
      heading1: "Silica gel packets​",
      body1: {
        condition: "Put silica gel packets in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "If the packets break open, make sure to bag the individual gel beads before disposing.",
    ],
    votes: 0,
    image: [
      "https://pouchmakers.com/pub/media/catalog/product/cache/917cd59432aa4a8bb54d66fedb6c7727/s/i/silica_gel_01.jpg",
    ],
  },
  {
    category: "Silicone items – all types",
    keywords: [
      "silicone baking mats",
      "silicone reusable bags",
      "silicone cutlery",
      "silicone oven mitts",
      "silicone pot holders",
    ],
    instruction: {
      heading1: "Silicone items – all types​",
      body1: {
        condition:
          "Put all products made of silicone into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
  },
  {
    category: "Single-use condiment packets",
    keywords: [
      "single-serving condiment packet",
      "ketchup packet",
      "mustard packet",
      "relish packet",
      "soy sauce packet",
      "vinegar packet",
    ],
    instruction: {
      heading1: "Single-use condiment packets​",
      body1: {
        condition:
          "Put ketchup packets and other single-serving condiment packages into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/condiment-packets-160px.jpg",
    ],
  },
  {
    category: "Multi-material packaging",
    keywords: [
      "single-use powder packet",
      "chip bags",
      "hand pumps (from soap bottles, lotion bottles, spray bottles, etc.)",
      "granola bar wrappers",
      "dog food and other pet food bags",
      "cookie bags",
      "Pringles chips containers",
      "food seals on items like yogurt tubs or peanut butter jars",
      "single-use powder packets for items such as hot chocolate, protein powder, and tea bags",
      "ground coffee or bean pouches",
      "baby food pouches",
      "toothpaste",
      "deodorant",
      "dental floss",
      "laminated paper",
    ],
    instruction: {
      heading1: "Multi-material packaging​",
      body1: {
        condition:
          "Put multi-material packaging in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't these items be recycled? Mixed packaging or mixed material packaging are often made up of a mix of paper/plastic/foil. As the materials are not easily separated, they are not acceptable for recycling.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/baby-food-pouch-160px.jpg",
    ],
  },
  {
    category: "Toilets, sinks and bathtubs",
    keywords: ["sink", "toilet", "bathtub"],
    instruction: {
      heading1: "Toilets, sinks and bathtubs​",
      body1: {
        condition:
          "Take your toilet or bathroom fixtures to a City landfill for disposal. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Some private companies may accept reusable building materials. Check the Alberta Recycling Hotline for options.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/constructionwaste-toiletssinkstubs-160px.jpg",
    ],
  },
  {
    category: "Six-pack plastic lids",
    keywords: ["six-pack lid holder"],
    instruction: {
      heading1: "Six-pack plastic lids​",
      body1: {
        condition:
          "Take usable beer can holders (also known as PakTech can holders) back to a Calgary brewery to be reused again. Contact the brewery directly to see if they accept these lids.",
        bin: "return",
      },
    },
    moreInfo: [
      "Why can’t they go in the blue bin? Even if they have a recycling symbol on it, this type of can holder is incompatible with the sorting machines and ends up contaminating the other recyclables.",
      "Outcast Brewing (4 can holders only), Tool Shed Brewing (4 and 6 can holders), Annex Ales (4 and 6 can holders), Village Brewery (4 and 6 can holders), Other Paktech recycling locations (including broken six-pack and four-pack beverage lids)",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastics-six-pack-holders-160px.jpg",
    ],
  },
  {
    category: "Six-pack rings",
    keywords: ["six-pack plastic rings"],
    instruction: {
      heading1: "Six-pack rings​",
      body1: {
        condition:
          "Cut six-pack holders or plastic rings into small pieces and put them in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/six-pack-rings-160px.jpg",
    ],
  },
  {
    category: "Sports equipment",
    keywords: [
      "skates",
      "cleats",
      "balls",
      "hockey sticks",
      "golf clubs",
      "baseball gloves",
      "kiddie pools",
      "infatable pools",
      "yoga mats",
    ],
    instruction: {
      heading1: "Usable sports equipment​",
      body1: {
        condition:
          "Usable sports equipment can be donated to various charities. Refer to Alberta's Recycling Hotline for more information. You may also sell your athletic equipment to second hand sports stores.",
        bin: "Donate",
      },
      heading2: "Unusable sports equipment",
      body2: {
        condition:
          "Put unusable sports equipment in your black cart as garbage.​",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/toyssportsequipment-sportsequipment-160px.jpg",
    ],
  },
  {
    category: "Products made with wax",
    keywords: [
      "ski wax",
      "candles",
      "cheese wax",
      "car wax",
      "hair waxing products",
      "floor wax",
      "lip balm wax",
      "mustache wax",
      "beard wax",
      "snowboard wax",
      "crayons",
      "paraffin and beeswax products",
    ],
    instruction: {
      heading1: "Products made with wax​",
      body1: {
        condition:
          "Put all types of wax products into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://ae01.alicdn.com/kf/HTB1Knk5XcfrK1Rjy1Xdq6yemFXaH/XCMAN-Racing-Ski-Snowboard-Wax-For-Use-In-Any-Kind-Of-Snow-All-Temperature-Wax-Kit.jpg",
    ],
  },
  {
    category: "Digital medical equipment",
    keywords: [
      "sleep apnea machine",
      "blood pressure monitor",
      "glucose monitor",
      "digital thermometer",
    ],
    instruction: {
      heading1: "​Digital medical equipment",
      body1: {
        condition:
          "Take old and broken digital medical equipment to an electronics recycling drop-off. Items must have a power cord or run on a battery/charger and applies to portable medical devices for personal/home use only.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.bikeinn.com/f/13781/137815634/rs7-digital-thermometer-infrared.jpg",
    ],
  },
  {
    category: "Sliced cheese wrappers",
    keywords: ["sliced cheese wrappers - plastic"],
    instruction: {
      heading1: "Sliced cheese wrappers​",
      body1: {
        condition:
          "​Put plastic sliced cheese wrappers in your black cart as garbage. This type of plastic wrapper is commonly used in brands like Kraft Singles cheese slices.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this plastic be recycled? Only stretchy plastic bags like grocery bags and plastic film are accepted for recycling. Plastic cheese wrappers are much stiffer and are not stretchy.​​",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sliced-cheese-wrappers-160px.jpg",
    ],
  },
  {
    category: "Small kitchen appliances - heating",
    keywords: [
      "slow cooker",
      "coffeemaker",
      "coffee maker",
      "expresso maker",
      "capuccino maker",
      "toaster",
      "toaster oven",
      "kettle",
      "rice cooker",
      "food steamer",
      "bread maker",
      "pressure cooker",
      "deep fryer",
      "chocolate fountain",
      "egg cooker",
      "hot plate",
      "induction cooker",
      "portable stove",
      "panini press",
      "popcorn maker",
      "steamer - food",
    ],
    instruction: {
      heading1: "​Appliances in good condition",
      body1: {
        condition: "Donate working appliances to local charities.",
        bin: "Donate",
      },
      heading2: "Old and broken appliances",
      body2: {
        condition:
          "Take old and broken small kitchen appliances to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "This is for countertop heating appliances that have a power cord or runs on a battery/charger.",
      "Remove all food residue and cooking oil from appliance before taking to a drop-off location.",
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://secure.img1-fg.wfcdn.com/im/47849726/resize-h445%5Ecompr-r85/1038/103837482/Black+%2526+Decker+12-Cup+Coffee+Maker.jpg",
    ],
  },
  {
    category: "Fountain pop and soft drink cups",
    keywords: ["slurpee cup", "takeout cup - soft drink"],
    instruction: {
      heading1: "​Fountain pop and soft drink cups",
      body1: {
        condition:
          "Recycle empty soft drink cups, fountain pop cups and paper cups in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove the lid and straw and put in the black cart as garbage.",
      "Rinse out the cup before recycling.",
      "If you have a compostable soft drink cup, see Compostable Takeout Containers.",
      "Why can't this be composted? Paper cups have a plastic lining to prevent the container from becoming soggy. To ensure we are creating the highest quality compost possible, leave this item out of your green cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/wax-paper-cup-160px.jpg",
    ],
  },
  {
    category: "Fitbits and other wearables",
    keywords: [
      "smartwatch",
      "Fitbits",
      "fitness trackers",
      "Apple watch",
      "wearables",
    ],
    instruction: {
      heading1: "​Usable wearables",
      body1: {
        condition:
          "Wearables suchs as Fitbits, fitness trackers, and Apple Watches in good working condition can be reused by friends and family or donated to charities that accept household items. See Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable wearables",
      body2: {
        condition:
          "Put old and broken fitness trackers, Fitbits, Apple Watches and smartwatches in your black cart as garbage.​",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/electronic-wearables-160px.jpg",
    ],
  },
  {
    category: "Smoke detectors",
    keywords: ["smoke detector"],
    instruction: {
      heading1: "​Smoke detectors",
      body1: {
        condition:
          "Put old and expired smoke detectors into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: ["Remove any batteries before disposing of the smoke detector."],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/smokedetector-160px.jpg",
    ],
  },
  {
    category: "Barbecue grills",
    keywords: ["smoker - barbecue", "BBQ"],
    instruction: {
      heading1: "​Private recycling",
      body1: {
        condition:
          "Take scrap metal to a private metal recycler. Find options through the Alberta Recycling Hotline. Some private companies may buy scrap metal, charge a fee or accept items for free.",
        bin: "metal recycler",
      },
      heading2: "City landfill recycling",
      body2: {
        condition:
          "Take scrap metal to any City landfill T​hrow 'n' Go for recycling. Landfill rates will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Remove any propane tanks and take to a household hazard waste drop-off for safe disposal.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/barbecue-160px.jpg",
    ],
  },
  {
    category: "Soap - all types",
    keywords: ["soap"],
    instruction: {
      heading1: "​Soap - all types",
      body1: {
        condition: "Put leftover bars of soap into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Drain leftover liquid soap, hand soap and dishwashing liquid down your sink.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/soap-160px.jpg",
    ],
  },
  {
    category: "Plastic soap bottle",
    keywords: ["soap bottle - plastic"],
    instruction: {
      heading1: "Plastic soap bottle​",
      body1: {
        condition:
          "Recycle empty soap bottles with the recycling symbol 1-7 in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: ["Remove the hand pump and put in your black cart as garbage."],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/soap-bottle-160px.jpg",
    ],
  },
  {
    category: "Soap box",
    keywords: ["soap box", "paper soap box"],
    instruction: {
      heading1: "Soap box​",
      body1: {
        condition:
          "Recycle empty paper soap boxes into your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    votes: 0,
  },
  {
    category: "Sod and loam",
    keywords: ["sod"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "​Put residential quantities of sod in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Carts have a 60 kg weight limit. If you can easily roll the cart, it should be ok.",
      "Paper yard waste bags have a 20 kg weight limit. Make sure bags are rolled up and can be easily lifted.",
      "Fill your green cart first. If your green cart is full, use paper yard waste bags.",
      "To reduce weight, try to remove excess dirt from the back of the sod.",
      "Composting for sod is not available at City landfills. If you take sod to the landfill, you will be charged the basic sanitary rate​.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/yardwaste-sod-160px.jpg",
    ],
  },
  {
    category: "Milk, juice, pop and other drinks",
    keywords: ["soda pop", "milk", "juice", "pop", "drinks"],
    instruction: {
      heading1: "​Milk, juice, pop and other drinks",
      body1: {
        condition: "Pour old milk, juice, pop and other drinks down your sink.",
        bin: "sink",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/orange-juice-160px.jpg",
    ],
  },
  {
    category: "Sodastream CO2 canisters",
    keywords: ["Sodastream C02 canister"],
    instruction: {
      heading1: "Sodastream CO2 canisters​",
      body1: {
        condition:
          "Return or exchange your Sodastream CO2 canister at a participating retailer that stocks exchange carbonators. When you return your empty carbonator, the retailer will sell you a full one for the price of the gas contents only.",
        bin: "return",
      },
    },
    moreInfo: [
      "Locations include Bed Bath & Beyond, Canadian Tire, The Bay, and Wal-Mart.",
    ],
    votes: 0,
  },
  {
    category: "Where do I take sofas, chairs, tables and other funiture?",
    keywords: [
      "sofa",
      "chair",
      "table",
      "furniture",
      "wicker basket",
      "couch",
      "bookshelf",
      "bed",
      "chair",
      "stool",
      "wicker furniture",
    ],
    instruction: {
      heading1: "​Furniture in good condition",
      body1: {
        condition:
          "Donate or drop-off items to participating charities. See Alberta's Recycling Hotline.",
        bin: "Donate",
      },
      heading2: "Old and broken furniture",
      body2: {
        condition:
          "Take unusable furniture like couches, bookshelves and beds to a City landfill. Landfill charges will apply. Put smaller items like lawn chairs, stools and tables in your black cart as garbage.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "City garbage collectors do not collect bulky items like large pieces of furniture.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householditems-furniture-160px.jpg",
    ],
  },
  {
    category: "Clean fill",
    keywords: ["soil - clean fill"],
    instruction: {
      heading1: "Clean fill​",
      body1: {
        condition: "Bring clean fill to a City landfill for disposal.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Self-haul residential clean fill is accepted at no charge. You may use a standard residential vehicle like a car or truck.",
      "If you use a trailer or commercial vehicle, landfill charges will apply",
      "If you are a commercial business with clean fill, see the Commercial Clean Fill page.",
      "Acceptable: dirt, clay, gravel (less than 6 inches in size)",
      "Clean fill cannot contain any debris. Sod, grass, wood, branches, twigs, large rocks, garbage, construction materials etc. are NOT allowed.",
      "If other items are mixed in with the clean fill, it is the landfill's discretion as to what rate will be charged.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/yardwaste-cleanfill-160px.jpg",
    ],
  },
  {
    category: "Garden soil and potting soil",
    keywords: ["soil - all types", "garden soil", "potting soil"],
    instruction: {
      heading1: "​Garden soil and potting soil",
      body1: {
        condition: "Put all types of soil in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Carts have a 60 kg weight limit. If you can easily roll your cart, it should be ok.",
      "Paper yard waste bags have a 20 kg weight limit. Make sure bags are rolled up and can be easily lifted.",
      "Fill your green cart first. If your green cart is full, use paper yard waste bags. Set extra bags one foot to the side of your green cart on collection day.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/garden-soil-160px.jpg",
    ],
  },
  {
    category: "Plastic - Drink cups",
    keywords: ["solo cup", "solo cups"],
    instruction: {
      heading1: "Plastic – Drink cups​",
      body1: {
        condition:
          "Recycle plastic drink cups marked with a recycling symbol 1-7 in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastics-drinkcups-160px.jpg",
    ],
  },
  {
    category: "Electronics – Gaming consoles and devices",
    keywords: [
      "Sony Playstation",
      "Sony Playstation systems",
      "gaming console",
      "gaming consoles",
      "Xbox",
      "Xbox One",
      "Xbox 360",
      "video game system",
      "joystick",
      "gaming controller",
      "gaming headset",
      "earbuds",
    ],
    instruction: {
      heading1: "​Usable gaming consoles and devices",
      body1: {
        condition: "Donate working gaming consoles to local charities.",
        bin: "Donate",
      },
      heading2: "Old and broken gaming consoles and devices",
      body2: {
        condition:
          "Take old and broken consoles, video game systems, joysticks, gaming controllers, headsets, earbuds and accompanying remotes and cables to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/electronics-video-game-console.jpg",
    ],
  },
  {
    category: "Soup, chili and stews",
    keywords: ["soup", "chili", "stew"],
    instruction: {
      heading1: "​Soup, chili and stews",
      body1: {
        condition:
          "Put soup, chili and stews into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Drain any liquids down the sink before putting in your green cart.",
      "Use newspaper, flyers and used paper towels to soak up any excess liquid.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/soup-160px.jpg",
    ],
  },
  {
    category: "Food and beverage cans",
    keywords: [
      "soup can",
      "canned food containers",
      "tuna can",
      "cookie tin",
      "candy tin",
      "biscuit tin",
      "coffee can",
      "pop can",
      "beverage can",
      "tin container",
    ],
    instruction: {
      heading1: "Food and beverage cans​",
      body1: {
        condition:
          "Recycle empty and clean food and beverage cans in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Place cut out metal lids inside the empty tin can and squeeze the top closed (see image).",
      "Paper labels are ok to leave on.",
      "Take pop and other drink cans to an albertadepot.ca for a refund on any applicable deposit paid at the time of purchase.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-foodcans-160px.jpg",
    ],
  },
  {
    category: "Food and beverage cartons (Tetra Pak, Purepak etc.)",
    keywords: [
      "soup carton",
      "broth carton",
      "liquid egg white carton",
      "chai tea carton",
      "milk carton",
      "milk alternative carton",
      "juice carton",
    ],
    instruction: {
      heading1: "​Food and beverage cartons (Tetra Pak, Purepak etc.)",
      body1: {
        condition:
          "Recycle empty and clean food and beverage cartons in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "This packaging may be labelled as Purepak containers or Tetra Pak containers. Some of these containers may have a screw top cap or flip-top lid for pouring.",
      "Rinse the cartons before recycling.",
      "Remove lids and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/tetra-pak-cartons/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout675/column-1-r0/image.img.jpeg/1614955680357/cartons.jpeg",
    ],
  },
  {
    category: "Paper soup cup",
    keywords: ["soup cup - paper", "Tim Hortons soup cup"],
    instruction: {
      heading1: "​Paper soup cup",
      body1: {
        condition:
          "Recycle paper soup cups and paper lids in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove plastic lids and cutlery and put in the black cart as garbage.",
      "Rinse out the cup before recycling.",
      "If you have a compostable container, see Compostable Takeout Containers.",
      "Why can't this be composted? Paper cups have a plastic lining to prevent the container from becoming soggy. To ensure we are creating the highest quality compost possible, leave this item out of your green cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-soup-cup-160px.jpg",
    ],
  },
  {
    category: "Humidifiers and heaters",
    keywords: [
      "space heater",
      "humidifier",
      "portable heater",
      "oil-filled heater",
      "patio heater",
      "heater/fan combo",
      "dehumidifier",
      "vaporizer",
    ],
    instruction: {
      heading1: "​Humidifiers and heaters",
      body1: {
        condition:
          "Take old and broken humidifiers and heaters to an electronics recycling drop-off. Items must have a power cord/plug or run on a battery/charger.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/medium-sized-appliances/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout5005/column-1-r0/image.img.jpeg/1612296296628/space-heater-160px.jpeg",
    ],
  },
  {
    category: "Drywall, cement and grout",
    keywords: [
      "spackling paste",
      "drywall",
      "cement",
      "grout",
      "wallpaper supplies",
    ],
    instruction: {
      heading1: "Small quantities of drywall​",
      body1: {
        condition:
          "Put small quantities of drywall, all types of wallpaper, joint compound, spackling paste, cement and grout into your black cart as garbage. Carts have a 60 kg weight limit. If you can easily roll your cart, it should be ok. Make sure the lid of the cart can close.",
        bin: "Garbage",
      },
      heading2: "Large quantities of drywall",
      body2: {
        condition:
          "Take leftover drywall, wallpaper supplies, cement and grout from your home improvement project to a City landfill. Landfill charges will apply. If you bring a separated load of drywall only, a reduced landfill rate is applied.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Please note: drywall is not compostable in green carts.",
      "If you are a business with drywall to dispose of, see our Business Waste resources.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/construction-demolition-waste-drywall-160px.jpg",
    ],
  },
  {
    category: "Pasta box",
    keywords: ["spaghetti box"],
    instruction: {
      heading1: "Pasta box​",
      body1: {
        condition:
          "Recycle empty pasta boxes in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove the plastic window from the box and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/pasta-box-160px.jpg",
    ],
  },
  {
    category: "Speakers and digital audio equipment",
    keywords: [
      "speakers",
      "digital audio equipment",
      "speaker",
      "home speaker",
      "music speaker",
      "computer speakers",
      "stereo speakers",
      "bluetooth speaker",
      "USB speakerphones",
      "sound bar speakers",
      "speaker systems",
      "digital audio workstation",
      "amplifier",
      "microphone",
      "synthesizer",
      "soundboard",
      "mixing console",
      "digital mixer",
      "splitter box",
      "webcam",
      "amp",
      "amplifier",
    ],
    instruction: {
      heading1: "​Speakers and digital audio equipment",
      body1: {
        condition:
          "Take old and broken computer speakers and digital audio or visual equipment to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/speakers-160px.jpg",
    ],
  },
  {
    category: "Mouldy or spoiled food",
    keywords: ["spoiled food"],
    instruction: {
      heading1: "Mouldy or spoiled food​",
      body1: {
        condition:
          "Put spoiled or mouldy food in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Make sure to separate food from its container/packaging before putting in your green cart.",
    ],
    votes: 0,
  },
  {
    category: "Chemicals - Cleaning",
    keywords: [
      "spot remover",
      "bleach",
      "oven cleaner",
      "glass cleaner",
      "ammonia",
      "disinfectants",
      "toilet bowl cleaner",
      "any container with a hazard symbol on it (flammable, poisonous, etc.)",
    ],
    instruction: {
      heading1: "Chemicals - Cleaning​",
      body1: {
        condition:
          "Safely dispose any household cleaning products marked with a hazard symbol, for free at a household hazardous waste drop-off site such as a designated fire station or the city landfill Throw 'N' Go area.",
        bin: "hazardous waste",
      },
    },
    moreInfo: [
      "Use original containers where possible, or use a sealed, spill-proof container and make sure it is clearly labelled.",
      "You can bring up to 20 litres of household chemicals per week.",
      "Never flush chemicals down your toilet, sink or drain as they harm the environment and/or the pipes in your home.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/hhhw-cleaning-chemicals-160px.jpg",
    ],
  },
  {
    category: "Aerosol cans, spray paint and CO2 cartridges",
    keywords: [
      "spray paint",
      "spray foam",
      "aerosol cans",
      "CO2 cartridges",
      "WD-40 oil",
      "cooking oil spray",
      "whipped cream spray",
      "compressed air duster",
    ],
    instruction: {
      heading1: "Aerosol cans, spray paint and CO2 cartridges​",
      body1: {
        condition:
          "Safely dispose aerosol cans and C02 cartridges for free at a household hazardous waste drop-off location such as a designated fire hall or a city landfill Throw 'N' Go area.",
        bin: "hazardous waste",
      },
    },
    moreInfo: [
      "Aerosol/CO2 containers do not have to be empty for disposal.",
      "Do not puncture or crush aerosol/CO2 containers.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-aerosolcans-160px.jpg",
    ],
  },
  {
    category: "Food pouches, tubes and squeeze pouches",
    keywords: [
      "squeeze pouch",
      "baby food pouch",
      "applesauce pouch",
      "breast milk storage bag",
      "yogurt tube",
      "miso paste bag",
      "dish soap refill bag",
      "barbecue sauce and other sauce bags",
      "tomato paste tube",
      "anchovy tube",
      "frosting tube",
      "icing bag",
    ],
    instruction: {
      heading1: "​Food pouches, tubes and squeeze pouches",
      body1: {
        condition:
          "Put food pouches, food tubes and squeeze pouches into the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this item be recycled? These pouches and tubes are often made of layers of non-stretchy plastics and/or foils that are not easily separated for recycling. Some of these items may also be too small for sorting and include other components that cannot be recycled.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/baby-food-pouch-160px.jpg",
    ],
  },
  {
    category: "Stainless steel water bottles and travel mugs",
    keywords: [
      "stainless steel mug",
      "stainless steel water bottle",
      "stainless steel travel mug",
    ],
    instruction: {
      heading1: "​Stainless steel water bottles and travel mugs",
      body1: {
        condition:
          "​Take household metal items to a private metal recycler through the Alberta Recycling Hotline or The Yellow Pages under Metal Recycling. Some private companies may buy scrap metal, charge a fee or accept items for free. Or Take household metal items to any City landfill Throw 'n' Go for metal recycling. Landfill rates will apply.",
        bin: "metal recycler",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-water-bottle-160px.jpg",
    ],
  },
  {
    category: "Home gym equipment",
    keywords: [
      "stair climber",
      "weight lifting equipment",
      "treadmill",
      "elliptical",
      "spin bike",
      "exercise equipment",
      "workout bench",
    ],
    instruction: {
      heading1: "Usable exercise equipment​",
      body1: {
        condition:
          "Usable exercise equipment can be donated to various charities. Refer to Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Broken or unusable exercise equipment",
      body2: {
        condition:
          "Treadmills, ellipticals, spin bikes, weight lifting equiment and other exercise equipment can be taken to a City landfill for scrap metal recycling or disposal. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    votes: 0,
    image: [
      "https://contents.mediadecathlon.com/p1876548/k$f9f1652a3eb40406a0546ae28a9b0337/t900c-treadmill.jpg?&f=800x800",
    ],
  },
  {
    category: "Vacuum cleaners and floor cleaning appliances",
    keywords: [
      "steam mop",
      "vacuum cleaner",
      "robot vacuum",
      "Roomba",
      "cordless vacuum",
      "carpet cleaner",
      "floor scrubber",
      "floor polisher",
      "wet-hard floor cleaner",
      "robotic pool cleaner",
      "steam mop",
    ],
    instruction: {
      heading1: "​Vacuum cleaners and floor cleaning appliances",
      body1: {
        condition:
          "Take old and broken vacuums, floor and surface cleaners to an electronics recycling drop-off. This is for cleaning appliances that have a power cord or runs on a battery/charger.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "Remove any vacuum dust from the cleaner before bringing it to a drop-off location.",
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/appliances-vacuum-cleaners/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout810/column-1-r0/image.img.jpeg/1612282801808/householditems-vacuum.jpeg",
    ],
  },
  {
    category: "Garment care appliances",
    keywords: [
      "steamer - garment and clothing",
      "clothing steamer",
      "garment steamer",
      "pant press",
      "clothing iron",
      "boot dryer",
      "glove dryer",
      "clothes shaver",
    ],
    instruction: {
      heading1: "​Garment care appliances",
      body1: {
        condition:
          "Take old and broken garment care appliances to an electronics recycling drop-off. Items must have a power cord or run on a battery/charger.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/71cSp62H+mL._AC_SL1500_.jpg"],
  },
  {
    category: "Cereal and grains",
    keywords: [
      "steel cut oats",
      "cereal",
      "grain",
      "breakfast cereal",
      "oatmeal",
      "porridge",
      "quick oats",
      "chia seeds",
      "hemp hearts",
      "granola",
      "granola bars and protein bars",
      "breakfast bars",
      "cheerios",
    ],
    instruction: {
      heading1: "Cereal and grains​",
      body1: {
        condition:
          "Put leftover cereals and grains in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Drain any milk or liquid down the sink before composting food.",
      "Use newspaper, flyers and used paper towels to soak up any excess liquid.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/oatmeal-160px.jpg",
    ],
  },
  {
    category: "Stickers and labels",
    keywords: ["sticker", "stickers", "label"],
    instruction: {
      heading1: "​Stickers and labels",
      body1: {
        condition:
          "Put sticker, labels and the backing sheets they come on in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
  },
  {
    category: "Paper - Letters, greeting cards, envelopes and sticky notes",
    keywords: [
      "sticky notes and post-it notes",
      "stick note",
      "post-it note",
      "letters",
      "greeting card",
      "envelope",
      "sticky note",
    ],
    instruction: {
      heading1: "Paper - Letters, greeting cards, envelopes and sticky notes​",
      body1: {
        condition:
          "Recycle letters, greeting cards, sticky notes and envelopes in your blue bin or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove the plastic window from the envelope and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-office-stationery.jpg",
    ],
  },
  {
    category: "Plastic cutlery",
    keywords: [
      "stir stick - plastic",
      "plastic fork",
      "plastic spoon",
      "plastic knife",
      "plastic straw",
      "chopsticks",
    ],
    instruction: {
      heading1: "Plastic cutlery​",
      body1: {
        condition: "Put plastic cutlery in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be recycled? Plastic cutlery is too small to be sorted properly at the recycling facility. They end up mixed in with the other materials and contaminating the recyclables.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-cutlery-160px.jpg",
    ],
  },
  {
    category: "Toothpicks and other disposable wooden utensils",
    keywords: [
      "stir stick - wood",
      "toothpick",
      "popsicle stick",
      "barbecue skewer",
      "bamboo cutlery",
      "bamboo plate",
      "wood plate",
      "barbecue cedar plank",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put wooden food sticks and utensils in your green cart for composting including:",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Please note: Only disposable/one-time use wood sticks and utensils are acceptable.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/popsicle-stick-160px.jpg",
    ],
  },
  {
    category: "Rocks",
    keywords: ["stones"],
    instruction: {
      heading1: "Small quantities of rocks​",
      body1: {
        condition:
          "Put small quantities of rocks in your black cart as garbage. Carts have a 60 kg weight limit. If you can easily roll the cart, it should be ok. No boulders or large rocks. Rocks must be the size of your hand or smaller to go in your black cart.",
        bin: "Garbage",
      },
      heading2: "Large quantities of rocks",
      body2: {
        condition:
          "Take large quantities and/or large-sized rocks and stones to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    votes: 0,
  },
  {
    category: "Floor lamps and large household items",
    keywords: [
      "storage bin",
      "trunk",
      "suitcase",
      "luggage",
      "dog kennel",
      "cat tree",
      "cat kennel",
      "floor lamp",
      "patio furniture",
      "patio chair",
      "patio umbrella",
      "patio table",
      "large picture frame",
      "stroller",
      "ironing board",
      "painting",
      "sculpture",
      "trophy",
      "whiteboard",
      "bulletin board",
    ],
    instruction: {
      heading1: "Useable household goods​",
      body1: {
        condition:
          "Reuse useable household goods, give to family and friends or donate to participating charities.",
        bin: "Donate",
      },
      heading2: "Broken and unusable household goods",
      body2: {
        condition:
          "Put broken or unusable housewares in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Break down items so they fit inside your black cart.",
      "Pieces must be less than 1.25 m (four feet) in length.",
      "Do not overpack or jam items as they will not empty out of the bin on collection day.",
      "Make sure the cart lid can close.",
      "If the items are too large for the black cart, take them to a City landfill Throw n Go for disposal (charges apply).",
    ],
    votes: 0,
    image: [
      "https://cdn-images.article.com/products/SKU13680/2890x1500/image50230.jpg",
    ],
  },
  {
    category: "Where do I take large appliances (stove, dishwasher)?",
    keywords: ["stove", "oven", "washer", "dryer", "dishwasher"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take clean appliances to a City landfill for recycling. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Some private companies may accept or buy appliances. Refer to Alberta's Recycling Hotline for opportunities.",
    ],
    votes: 0,
    image: [
      "https://homedepot.scene7.com/is/image/homedepotcanada/p_1001551503.jpg?wid=1000&hei=1000&op_sharpen=1",
    ],
  },
  {
    category: "Plastic - Clamshell containers",
    keywords: [
      "strawberry plastic container",
      "raspberry plastic container",
      "blueberry plastic container",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle clean plastic clamshell containers marked with a recycling symbol 1-7 in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Clamshells are often used for salad kits, sandwich trays, and berry containers for strawberries, blueberries, raspberries etc.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/blue_cart/clamshell-tray-610px.jpg",
    ],
  },
  {
    category: "Paper straw",
    keywords: ["straws - paper"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put paper straws in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "If the straw has a glossy shine on the inside or outside, it must be labelled as “compostable” in order to go in the green bin. This ensures that the straw does not contain any plastic and is ok to compost. If the paper straw is not labelled as compostable, put in the black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-straw-160px.jpg",
    ],
  },
  {
    category: "Street sweepings",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put street sweepings such as gravel, dust, rocks and other debris into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Gravel, dust, rocks and other debris must be double bagged and tied closed. Make sure it is under the 20kg (45 pound) weight limit – if you can easily lift it with one hand, it’s okay.",
      "For your collector’s safety, place all bagged debris inside your black cart for removal.",
      "Do not leave debris loose in your black cart. This will help keep the air free of dust and keep collection trucks clean as well.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/gravel-rocks-305px.jpg",
    ],
  },
  {
    category: "Synthetic string and twine",
    keywords: [
      "string - plastic/synthetic",
      "plastic string",
      "synthetic string",
    ],
    instruction: {
      heading1: "Reusable spolts of string and twine​",
      body1: {
        condition: "Reuse spools of string and twine if possible.",
        bin: "reuse",
      },
      heading2: "Unusable spools of string and twine",
      body2: {
        condition:
          "Put unusable synthetic and plastic string and twine in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/synthetic-twine-160px.jpg",
    ],
  },
  {
    category: "String and twine - natural fibre",
    keywords: ["string and twine - natural fibre (jute, sisal, cotton, hemp)"],
    instruction: {
      heading1: "Usable​",
      body1: {
        condition: "Reuse spools of string and twine.",
        bin: "reuse",
      },
      heading2: "Unusable",
      body2: {
        condition:
          "Put natural fibre string and twine into your green cart for composting. This includes cotton, jute, sisal and hemp types of string and twine.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/natural-twine-160px.jpg",
    ],
  },
  {
    category: "Lawnmowers and trimmers",
    keywords: [
      "string trimmer",
      "lawnmower",
      "hedge trimmer",
      "weed wacker",
      "edger",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take scrap metal to a private metal recycler through the Alberta Recycling Hotline or The Yellow Pages under Metal Recycling. Some private companies may buy scrap metal, charge a fee or accept items for free. Or take scrap metal to any City landfill Throw 'n' Go for recycling. Landfill charges will apply.",
        bin: "metal recycler",
      },
    },
    moreInfo: ["Drain all oils and fuels before bringing in for disposal."],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/lawnmower-160px.jpg",
    ],
  },
  {
    category: "Toys",
    keywords: ["stuffed animal"],
    instruction: {
      heading1: "Usable toys​",
      body1: {
        condition:
          "Donate useable toys to participating charities. See Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable toys",
      body2: {
        condition:
          "Put unusable toys (including plastic toys) in your black cart as garbage.​​​",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "If you have Mattel brand toys such as Barbie, Matchbox or Mega, you can participate in their toy takeback pilot program. These toys can be sent back to the company free of charge for reuse and recycling. More information can be found at the Mattel Playback website.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/toyssportsequipment-toys-160px.jpg",
    ],
  },
  {
    category:
      "Where do I put foam packaging (polystyrene, styrofoam, EPE, EPS)?",
    keywords: [
      "styrofoam",
      "foam coffee cup",
      "foam plate",
      "foam takeout container",
      "foam meat tray",
      "shipping packing materials",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put all types of foam in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Put foam into a garbage bag to keep it from blowing away during collection/disposal.",
      "Why can't polystyrene foam be recycled or composted? Foam products are too light for the sorting machines to sort during the recycling process and ends up contaminating the other recyclables. They also contain plastic which doesn't break down during composting and will contaminate the finished compost.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/polystyrene-styrofoam-150px.jpg",
    ],
  },
  {
    category: "Flour, sugar and baking ingredients",
    keywords: [
      "sugar",
      "flour",
      "baking soda",
      "baking powder",
      "evaporated milk",
      "milk powder",
      "pancake mix",
      "waffle mix",
      "cake mix",
      "yeast",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put old, used or spoiled baking ingredients into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/flour-160px.jpg",
    ],
  },
  {
    category: "Flour and sugar bags",
    keywords: ["sugar bag - paper", "flour bag", "sugar bag"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put empty paper flour bags and sugar bags into your blue cart for recycling. All paper layers can be recycled.​​",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Shake out any leftover flour/sugar into your green cart first.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/flour-bag-160px.jpg",
    ],
  },
  {
    category: "Lotion tube",
    keywords: [
      "sunscreen bottle - tube",
      "sunscreen tube",
      "body lotion tube",
      "ointment tube",
      "hand lotion tube",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put all types of lotion tubes into your black cart as garbage. This includes sunscreen, body lotion, ointment and hand lotion tubes.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/lotion-tube-160px.jpg",
    ],
  },
  {
    category: "Body lotion bottle",
    keywords: [
      "sunscreen bottle - plastic",
      "face lotion bottle",
      "hand lotion bottle",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle empty and clean lotion bottles, moisturizer bottles and other skincare bottles with the recycling symbol 1-7 in your blue cart or at a community recycling depot",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove any hand pumps/eye droppers and put in your black cart as garbage.",
      "Clean bottles by removing lid and leave bottle below showerhead for a few days – as you shower, the water will naturally drain out the last bits of product.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/body-lotion-160px.jpg",
    ],
  },
  {
    category: "Leftover lotion, creams and ointments",
    keywords: [
      "sunscreen - expired, leftover",
      "leftover cream",
      "leftover ointment",
      "leftover lotion",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put leftover lotion, creams, ointments and essential oils into the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "If the material is in a tube, put both the lotion and tube in the garbage.",
      "If the material is in a bottle, empty the leftover lotion into the garbage. Rinse out and recycle the bottle.",
      "Dispose of leftover essential oils in the container it came in and put in the garbage.",
    ],
    votes: 0,
  },
  {
    category: "Vitamin and supplement bottles",
    keywords: ["supplements bottle - plastic", "vitamins bottle"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle empty vitamin bottles and supplement bottles with the recycling symbol 1-7 in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove caps and child-proof lids and put in the garbage.",
      "Remove cotton ball insulation and gel packets  and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/vitamin-supplement-bottles-160px.jpg",
    ],
  },
  {
    category: "Disposable cleaning pads and dusters",
    keywords: [
      "Swiffer cleaning pads and dusters",
      "Swiffer cloth refills",
      "WetJet pad",
      "wet mopping cloths",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put disposable cleaning pads and dusters into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "This includes items like Swiffer cloth refills, WetJet pads, wet mopping cloths, and dry cloths.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/swiffer-160px.jpg",
    ],
  },
  {
    category: "Water toys",
    keywords: [
      "swim belt",
      "inflatable raft",
      "inflatable tube",
      "inflatable float",
      "pool noodle",
      "water wings",
      "floatation device",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put broken water toys into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/81chyc5v57L._AC_SL1500_.jpg"],
  },
  {
    category: "Needles and syringes",
    keywords: ["syringe", "needle"],
    instruction: {
      heading1:
        "Household needles - Dispose of it safely at participating pharmacies​",
      body1: {
        condition:
          "Many pharmacies provide safe disposal for needles, syringes, diabetic lancets and other sharps. Contact your pharmacy to see if they participate in sharps disposal. Needles must be properly packaged to prevent injuries. Many pharmacies offer sharps containers at their locations.",
        bin: "pharmacy",
      },
      heading2: "Household needles - Dispose of it safely in black cart",
      body2: {
        condition:
          "Put properly packaged needles can be placed in your black cart. This is for the safety of your collector and landfill staff.",
        bin: "",
      },
    },
    moreInfo: [
      'Needles must go into a puncture-resistant, non- breakable, sealed container (e.g. plastic bleach bottle, laundry detergent container, plastic pail with lid). Label the bottle as "sharps" with a permanent marker then put in your black cart.',
      "Do not use cardboard boxes as they can rip/break open. Never put needles in your blue cart or community recycling depot as they can't be recycled.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/medical-needlessyringes-160px.jpg",
    ],
  },
  {
    category: "Tablets and iPads",
    keywords: [
      "tablet",
      "iPad",
      "iPad mini",
      "Samsung Galaxy tablet",
      "other Android tablets",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take old and broken tablets and tablet charging cords and cables to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Clear all personal information from electronics prior to dropping off (e.g. wipe hard drives, clear SIM cards etc.)",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
      "For other options, please visit Alberta Recycling Management Authority for locations.",
    ],
    votes: 0,
    image: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-wifi-space-gray-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1626464534000",
    ],
  },
  {
    category: "Jam, peanut butter and spreads",
    keywords: [
      "tahini",
      "jam",
      "peanut butter",
      "nut butter",
      "nutella",
      "chutney",
      "marmalade",
      "maple syrup",
      "almond butter",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put all jams and peanut butters in your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/jams-160px.jpg",
    ],
  },
  {
    category: "Fast food bag",
    keywords: ["takeout bag - paper", "paper lunch bag", "brown paper bag"],
    instruction: {
      heading1: "​Food-soiled paper bags",
      body1: {
        condition:
          "Reuse food-soiled paper bags in your kitchen compost pail. Put in your green cart for composting (sauce-covered or lots of food chunks).",
        bin: "Compost",
      },
      heading2: "Clean paper bags",
      body2: {
        condition:
          "​Recycle clean paper bags (some grease is ok) in your blue bin or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/fast-food-paper-bag-160px.jpg",
    ],
  },
  {
    category: "Paper takeout bag - plastic window",
    keywords: ["takeout bag - paper with plastic window"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle clean paper takeout bags in your blue cart or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "This includes takeout boxes and dessert bags used at coffee shops and restaurants as well as bakery bags used at grocery stores.",
      "Put all food scraps in the green cart for composting.",
      "Remove the plastic window and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-bag-window-169px.jpg",
    ],
  },
  {
    category: "Takeout food containers and cups – paper and compostable paper",
    keywords: [
      "takeout container - paper and compostable paper",
      "paper coffee cup",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put food-soiled takeout containers and cups made of paper in your green cart.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "This includes regular paper and compostable paper takeout boxes and coffee cups.",
      "If the container has a glossy shine to it, it must be labelled as “compostable” in order to go in the green bin. This ensures that the container does not contain any plastic and is ok to compost. If the paper container is not labelled as compostable, rinse and empty out to put in your blue cart for recycling instead.",
      "If you live in an apartment, condo, townhouse or other multi-family complex, check with your compost collection company to see if they accept compostable paper containers.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/compostable-takeout-containers/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout6383/column-1-r0/image.img.jpeg/1630009205894/paper-takeout-containers.jpeg",
    ],
  },
  {
    category: "Burger box",
    keywords: ["takeout containers - burger box"],
    instruction: {
      heading1: "​Food-soiled burger boxes",
      body1: {
        condition:
          "Put dirty burger boxes in your green cart for composting (sauce-covered or lots of food chunks).",
        bin: "Compost",
      },
      heading2: "Clean burger boxes",
      body2: {
        condition:
          "Recycle clean burger boxes (some grease is ok) in your blue bin or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/burger-box-160px.jpg",
    ],
  },
  {
    category: "Chinese food takeout box – cardboard",
    keywords: [
      "takeout containers - Chinese food - cardboard",
      "paper Chinese food box",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle paper or cardboard Chinese food take out boxes in your blue bin or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove the metal handle and put in the black cart as garbage.",
      "Rinse out the container before recycling.",
      "Why can't this be composted? Takeout food boxes have a plastic lining to prevent the container from becoming soggy. To ensure we are creating the highest quality compost possible, leave this item out of your green cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/asian-take-out-box-160px.jpg",
    ],
  },
  {
    category: "Compostable takeout containers and cups - plastic",
    keywords: [
      "takeout containers - compostable plastic",
      "compostable plastic container",
      "compostable plastic cutlery",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put plastic containers, cutlery and cups labelled “compostable” in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be composted? Though marked \"compostable\", this cutlery won't break down quickly enough for The City's composting process and will contaminate the finished compost.",
      "Why can't this be recycled? We do not accept compostable plastic containers in the blue cart as they are mixed with other additives that are not recyclable. When combined with other regular plastic recyclables, these compostable plastics will reduce the quality of the new materials that can be produced.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/compostable-plastic-cup-160px.jpg",
    ],
  },
  {
    category: "Foil takeout containers",
    keywords: ["takeout containers- foil", "aluminum foil takeout box"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle aluminum foil takeout boxes in your blue bin or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Crumble the foil container into a ball before recycling.",
      "Put the paper/foil lid into the black cart as garbage.",
    ],
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/81GLxSGZJjL._AC_SL1500_.jpg"],
  },
  {
    category: "French fry boxes",
    keywords: ["takeout containers - fries box"],
    instruction: {
      heading1: "Food-soiled french fry boxes​",
      body1: {
        condition:
          "Put dirty fries boxes into your green cart for composting (sauce-coverered or lots of food chunks).",
        bin: "Compost",
      },
      heading2: "Clean french fry boxes",
      body2: {
        condition:
          "​Recycle paper french fry boxes (some grease is ok) in your blue bin or at a community recyling depot.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/french-fry-box-160px.jpg",
    ],
  },
  {
    category: "Takeout food boxes – lined paper",
    keywords: ["takeout containers - lined paper"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle paper/cardboard food containers and take out boxes in your blue bin or at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Put leftover food in your green cart for composting.",
      "If the container has a glossy shine to it, it probably has a plastic lining. Rinse out any food residue before recycling the takeout box.",
      'If you have a contained labelled as "compostable", see Compostable Takeout Containers.',
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/takeout-box-160px.jpg",
    ],
  },
  {
    category: "Fast food bucket",
    keywords: [
      "takeout containers - paper bucket",
      "KFC bucket",
      "KFC Chicken bucket",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle paper fast food buckets and paper lids",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Put all food scraps into the green cart for composting.",
      "Some grease on cardboard is ok.",
      "Why can't this be composted?",
      "Fast food buckets have a plastic lining to prevent the container from becoming soggy. To ensure we are creating the highest quality compost possible, leave this item out of your green cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/fast-food-bucket-160px.jpg",
    ],
  },
  {
    category: "Paper food tray",
    keywords: ["takeout containers - paper tray"],
    instruction: {
      heading1: "Food-soiled food tray​",
      body1: {
        condition:
          "Put dirty paper food trays in your green cart for composting (sauce-covered or lots of food chunks).",
        bin: "Compost",
      },
    },
    heading2: "Clean food tray",
    body2: {
      condition: "​Recycle clean paper food trays (some grease is ok).",
      bin: "Recycling",
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-food-tray-160px.jpg",
    ],
  },
  {
    category: "Plastic - Party food trays",
    keywords: ["takeout containers - plastic party trays"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle clean plastic party trays and food trays marked with recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-party-tray-160px.jpg",
    ],
  },
  {
    category: "Takeout drink trays",
    keywords: ["takeout drink tray - paper"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle paper takeout drink trays, cup holders and drink carriers.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/takeout-drink-tray-160px.jpg",
    ],
  },
  {
    category: "Paper frozen yogurt cup",
    keywords: ["takeout frozen yogurt cup - paper"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle paper froyo cups and ice cream cups.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove the lid and straw and put in the black cart as garbage.",
      "Rinse out the cup before recycling.",
      "If you have a compostable container, see Compostable Takeout Containers.",
      "Why can't this be composted? Paper cups have a plastic lining to prevent the container from becoming soggy. To ensure we are creating the highest quality compost possible, leave this item out of your green cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/frozen-yogurt-cup-160px.jpg",
    ],
  },
  {
    category: "Hamburger and hot dog foil wrappers",
    keywords: [
      "takeout wrapper - foil/paper",
      "hamburger foil wrapper",
      "hot dog foil wrapper",
      "wrapper - foil",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put food wrappers made of foil and paper in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be recycled? These wrappers are a multi-material made of a laminated mix of paper and foil. As the two materials cannot be separated, it is not recyclable.​​​​​​​",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/hamburger-foil-wrapper-160px.jpg",
    ],
  },
  {
    category: "French fry bags",
    keywords: ["takeout fries bag - paper"],
    instruction: {
      heading1: "Food-soiled paper bag​",
      body1: {
        condition:
          "Put dirty French fry bags in your green cart for composting (sauce-covered, lots of food chunks).",
        bin: "Compost",
      },
    },
    heading2: "Clean paper bags",
    body2: {
      condition: "​Recycle clean paper bags (some grease is ok).",
      bin: "Recycling",
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/french-fry-bag.jpg",
    ],
  },
  {
    category: "Compressed gas tanks and cylinders",
    keywords: ["tank, compressed - gas", "compressed gas tank", "air tank - welding"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take old compressed gas tanks to participating retail locations (e.g. grocery stores, gas stations) for recycling and receive a credit towards the purchase of a new tank. For private recycling options, contact the Alberta Recycling Hotline at hotline@recycle.ab.ca",
        bin: "return",
      },
    },
    moreInfo: [
      "If you are a business with compressed gas tanks and cylinders to dispose of, please see our Business Waste resources.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/gastanks-compressedgas-160px.jpg",
    ],
  },
  {
    category: "Tape and glue",
    keywords: [
      "tape",
      "glue",
      "masking tape",
      "duct tape",
      "scotch tape",
      "liquid glue",
      "glue stick",
      "glue container",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put old or unusable tape and glues in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tape-160px.jpg",
    ],
  },
  {
    category: "Plastic - Miscellaneous plastics",
    keywords: [
      "tarp",
      "plastic toys",
      "plastic toy",
      "laundry basket",
      "DVD case",
      "CD case",
      "casssette tape case",
      "plastic patio furniture",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put miscellaneous plastic items into the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be recycled? Plastics that are too large, too small, or odd shapes cannot be processed properly at the recycling facility. Even if they have a recycling symbol 1-7, it cannot be recycled. Only recycle proper plastic containers like jugs, bottles, and tubs.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/laundry-basket-160px.jpg",
    ],
  },
  {
    category: "Plastic - Single-serve coffee pods",
    keywords: [
      "Tassimo T-Discs pods",
      "coffee pods",
      "single-serve coffee pod",
      "Nespresso pod",
      "Nespresso coffee pod",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put plastic, aluminum and other single-serve coffee pods in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Coffee grounds inside the pod can be put in your green cart for composting.",
      "Why can't coffee pods be recycled? Coffee pods and discs are too small and light for to be sorted properly at the recycling facility.",
      "Some coffee pod manufacturers may have their own recycling solutions such as Nespresso. Check the manufacturer's website for details.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastics-coffee-pods-160px.jpg",
    ],
  },
  {
    category: "Compostable coffee pods",
    keywords: ["Tassimo T-Discs pod - compostable"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put compostable coffee pods into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Coffee grounds inside the pod can be put in your green cart for composting.",
      "Why can't coffee pods be composted? Though marked \"compostable\", these coffee pods don't break down quickly enough for The City's composting process and may contain synthetic, plastic or other non-compostable materials. To ensure we're creating the highest quality compost possible, please leave these items out of your green cart.​​",
    ],
    votes: 0,
    image: [
      "https://www.capsul-in-pro.com/wp-content/uploads/2018/09/10082018-DSC03092.png",
    ],
  },
  {
    category: "Tea bags and coffee grounds",
    keywords: ["tea bag", "coffee grounds"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put used coffee grounds, coffee beans, coffee filters and paper tea bags (including the string and paper tags) into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Drain any excess liquid down the sink before composting filters and tea bags.",
      "Remove any staples from the tea bag before composting.",
      "Put nylon and other fabric-based tea bags into the garbage (tea leaves can be separated out for the compost).​​",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tea-bag-coffee-filter-160px.jpg",
    ],
  },
  {
    category: "Single-serving food packets",
    keywords: [
      "tea bag packet",
      "single-serving food packet",
      "hot chocolate powder packet",
      "oatmeal packet",
      "Ener-C packet",
      "vitamin powder packet",
      "iced tea powder packet",
      "Crystal Light powder packet",
      "powdered beverage mix packet",
      "nutritional powder packet",
      "latte packet",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put individual-sized serving food packets into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be recycled or composted? These individual serving packets are often a multi-material made of a mix of paper, foil and/or plastic that cannot be easily separated for recycling. These plastic-lined or foil-lined packets are also not suitable for composting.​​​​​",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tea-bag-packaging-160px.jpg",
    ],
  },
  {
    category: "Coffee and hot chocolate canister",
    keywords: [
      "tea canister",
      "coffee canister",
      "beverage powder mix canister",
      "iced tea powder canister",
      "ground coffee canister",
      "coffee bean canister",
      "hot chocolate canister",
      "loose leaf tea canister",
      "tea bag canister",
      "Tetley tea canister",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put coffee canisters and hot chocolate canisters into your black cart as garbage. These canisters usually consist of a paper/cardboard body, metal bottom and/or rim and foil lining. Recycle the plastic lid in your blue cart.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't these canisters be recycled? These containers are made of multiple/mixed materials (paper tube, foil lining, metal bottom) that cannot be easily separated for recycling. The container as a whole is not recyclable.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tim-hortons-coffee-canister-160px.jpg",
    ],
  },
  {
    category: "Ceramic and porcelain",
    keywords: ["tea pot", "tea cup", "ceramic", "porcelain"],
    instruction: {
      heading1: "Usable ceramic and porcelain items​",
      body1: {
        condition:
          "Useable household ceramic and porcelain items can be donated to various charities. Refer to Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Broken and unusable ceramic and porcelain items",
      body2: {
        condition:
          "Put small, unusable and broken ceramic and porcelain items like tea pots and tea cups in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Package items safely by putting the pieces into a puncture-resistant, non-breakable, sealed container (e.g. plastic tub, plastic pail, laundry detergent container etc.)",
      "Or wrap in two layers of paper and place in a tied bag.",
      "Label as 'sharps' with a permanent marker and place in your black cart.​​​",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/glass-ceramicporcelain-160px.jpg",
    ],
  },
  {
    category: "Paper - Telephone books and catalogues",
    keywords: ["telephone book"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle telephone books and catalogues.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove plastic wrapping and bag with your other bags for recycling.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-telephonebookscatalogues-160px.jpg",
    ],
  },
  {
    category: "Televisions",
    keywords: ["TV", "television"],
    instruction: {
      heading1: "​30 inches or larger",
      body1: {
        condition:
          "Take TVs that are 30 inches or larger, TV remote controls and HDMI cables to one of the following locations: East Calgary Landfill, Syphill Landfill, Quantum Lifecycle Partners, 'Habitat for Humanity Calgary ReStore - NE location only, Shanked Computer Recycling Inc., Technotrash Alberta, or Shepard Landfill.",
        bin: "Landfill",
      },
      heading2: "30 inches or smaller",
      body2: {
        condition:
          "Take TVs that are 30 inches or smaller, TV remote controls and HDMI cables to an electronics recycling drop-off location.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you are business with electronics to recycle, see Electronics Processors.​​​​​​​​",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "For other options, please visit Alberta Recycling Management Authority for locations.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/electronics-tv-160px.jpg",
    ],
  },
  {
    category: "Tetra Pak frozen juice containers",
    keywords: ["Tetra Pak frozen juice container"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle empty Tetr Pak frozen juice containers.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Where possible, remove the plastic lid from the container and recycle the two parts separately.",
    ],
    votes: 0,
    image: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a1720912766338.56033b362a858.jpg",
    ],
  },
  {
    category: "Where do I take books?",
    keywords: ["textbook", "book", "books", "novel"],
    instruction: {
      heading1: "Books in good condition​",
      body1: {
        condition:
          "Donate or drop-off used books to a charity or used book store.",
        bin: "Donate",
      },
      heading2: "Old and unusable books",
      body2: {
        condition:
          "If you can't find a new home for used books or they're falling apart, place them in your blue cart or drop them off for free at a community recycling depot.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove hard covers and spines and recycle them as separate items.",
      "Put leather, canvas and plastic book covers in your black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-hardcoverbooks-160px.jpg",
    ],
  },
  {
    category: "Receipts (thermal paper)",
    keywords: ["thermal paper", "receipt", "retail receipt"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle your retail receipts.",
        bin: "Recycling",
      },
    },
    moreInfo: ["Remove staples, paperclips or other metal before recycling."],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/receipts-160px.jpg",
    ],
  },
  {
    category: "Mercury thermometers",
    keywords: ["thermometer - mercury", "mercury thermometer"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Safely dispose thermometers for free at a household hazardous waste drop-off location such as a designated fire hall or at a city landfill Throw 'n' Go area.",
        bin: "hazardous waste",
      },
    },
    moreInfo: [
      "Put thermometer in a non-breakable sealed container (e.g. plastic bleach bottle).",
      'Clearly label the bottle "thermometer or mercury".',
      "Call 911 if a thermometer, thermostat or wall-mounted blood pressure cuff is broken and mercury is released.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/medical-mercurythermometers-160px.jpg",
    ],
  },
  {
    category: "Thermostats",
    keywords: ["thermostat"],
    instruction: {
      heading1: "​Manual dial thermostats",
      body1: {
        condition:
          "Older thermostats with manual dials may contain mercury. Safely dispose of these thermostats for free at a household hazardous waste drop-off location such as a designated fire hall or city landfill Throw 'n' Go area.",
        bin: "hazardous waste",
      },
      heading2: "Programmable thermostats",
      body2: {
        condition:
          "Modern digital thermostats (programmable with a display) do not contain mercury. They can be placed in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Package thermostat in a puncture-resistant, non-breakable, sealed container like a yogurt or margine tub.",
      'Label the container as "thermostat" or "mercury" with a permanent marker.',
      "Call 911 if a thermometer, thermostat, or wall-mounted blood pressure cuff is broken and mercury is released.",
    ],
    votes: 0,
    image: [
      "https://digitalassets.resideo.com/damroot/RDEDesktop/10013/RTH221B1039-c4-6.jpg",
    ],
  },
  {
    category: "Tile",
    keywords: ["tiles"],
    instruction: {
      heading1: "​Small quantities of tile",
      body1: {
        condition:
          "Put small quantities of tile and used flooring into your black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "Large quantities of tile",
      body2: {
        condition:
          "Take large quantites of tile to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Carts have a 60 kg weight limit. If you can easily roll your cart, it should be ok. Please ensure the lid of the cart can close.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/construction-demolition-waste-tile-160px.jpg",
    ],
  },
  {
    category: "Radios and stereos",
    keywords: [
      "timer",
      "radio",
      "stereo",
      "transistor radio",
      "satellite radio",
      "cassette player",
      "tape deck",
      "boombox",
      "CD player",
      "alarm clock",
      "MP3 player",
      "iPod",
      "portable tape player",
      "portable two-way radios",
      "walkie-talkiies",
      "CB radio",
      "FM transmitter",
      "turntable",
      "record player",
      "baby monitor",
    ],
    instruction: {
      heading1: "​Usable stereos and radios",
      body1: {
        condition:
          "Some local charities accept donations at various drop-off locations or offer a free pick-up service.",
        bin: "Donate",
      },
      heading2: "Old and broken radio and stereos",
      body2: {
        condition:
          "Take old and broken radios and stereos to an electronics recycling drop-off",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/electronics-radios-160px.jpg",
    ],
  },
  {
    category: "Aluminum foil, plates and containers",
    keywords: [
      "tin foil",
      "aluminum foil",
      "aluminum container",
      "aluminum plate",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle aluminum foil, tin foil, pie tins and tin plates and takeout containers.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Rinse off any food residue and crumple the foil into a ball before recycling.",
      "If foil is covered in lots of oil, grease, meat juices etc. that cannot be cleaned put in your black cart as garbage.",
      "Put foil food seals (e.g. such as yogurt tubs) in your black cart as garbage. They are made out of aluminum and plastic, which cannot be recycled.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-aluminumfoil-160px.jpg",
    ],
  },
  {
    category: "Christmas decorations",
    keywords: ["tinsel"],
    instruction: {
      heading1: "Usable Christmas decorations​",
      body1: {
        condition:
          "Reuse Christmas decorations, give them to family and friends, or donate usable Christmas ornaments to a participating charity. See the Alberta Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Broken and unusuable Christmas decorations",
      body2: {
        condition:
          "Put unusable Christmas ornaments and tinsel in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Package broken glass and sharp items safely by putting the pieces into a puncture-resistant, non-breakable container (e.g. plastic tub, plastic pail, laundry detergent container, etc.)",
      "Or wrap in two layers of paper and place in a tied bag.",
      "Labels as 'sharps' with a permanent marker and place in your black cart.",
    ],
    votes: 0,
    image: [
      "https://s7.orientaltrading.com/is/image/OrientalTrading/xmasdecorationslp-xmasornaments-102121-1x1?$1x1main$&$NOWA$",
    ],
  },
  {
    category: "Tires",
    keywords: ["tire", "tires"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "​Take tires to a City landfill Throw 'n' Go for free recycling. We accept all vehicle tires, including tires with rims.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "You may bring up to 12 tires per visit.",
      "Check landfill locations and hours before you visit.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tires-160px.jpg",
    ],
  },
  {
    category: "Facial tissue and toilet paper",
    keywords: ["tissue - facial", "facial tissue", "toilet paper", "Kleenex"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put used or clean facial tissues (such as Kleenex or Scotties tissue) and toilet paper in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Most bodily fluids (saliva, tears, mucus etc.) are acceptable.",
      "Put tissues with blood in your black cart as garbage.",
      "Put tissues soiled with makeup, cleaning products or other chemicals in your black cart as garbage.",
      "Do not flush facial tissues down the toilet as it is harmful to your home's pipes and the environment.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/used-tissue-160px.jpg",
    ],
  },
  {
    category: "Cardboard – Tissue boxes",
    keywords: ["tissue box", "Kleenex box"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle empty tissue boxes (e.g. Kleenex boxes).",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove the plastic window from the box and bundle with other plastic bags for recycling.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cardboard-tissueboxes-160px.jpg",
    ],
  },
  {
    category: "Paper - Gift wrap (glossy or matte)",
    keywords: ["tissue paper", "gift wrap", "wrapping paper"],
    instruction: {
      heading1: "​Reuse gift wrap",
      body1: {
        condition:
          "Save wrapping paper and tissue paper to reuse for future gifts and other occasions.",
        bin: "reuse",
      },
      heading2: "Recycle gift wrap",
      body2: {
        condition:
          "Recycle glossy or matte birthday gift wrap, Christmas wrapping paper and tissue paper.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove all ribbons, string and as much tape as possible from the paper.",
      "Crumple paper wrap up into a ball and put in blue cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-giftwrapglossymatte-160px.jpg",
    ],
  },
  {
    category: "Nail clippings",
    keywords: ["toenail clippings"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put real fingernail clippings, toenail clippings and pet nail clippings in your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/nail-clippings-160px.jpg",
    ],
  },
  {
    category: "Brushes - all types",
    keywords: [
      "toilet bowl brush",
      "brush",
      "paint brush",
      "hair brush",
      "comb",
      "cooking brush",
      "pastry brush",
      "makeup brush",
      "toilet bowl brush holder",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put all types of brushes into the black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/brushes-all-types/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout/column-0e14182c-4a6a-44ea-b553-154a1eccbfcc0/image.img.jpeg/1636480562860/hair-brushes.jpeg",
    ],
  },
  {
    category: "Toilet paper roll, Paper towel roll",
    keywords: ["toilet pape roll", "paper towel roll", "toilet paper tube"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle empty toilet paper tubes and paper towel rolls.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cardboard-toiletpapertowelrolls-160px.jpg",
    ],
  },
  {
    category: "Printer cartridges and toner",
    keywords: ["toner cartridge", "printer cartridge"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take empty printer ink cartridges and toner to participating retailers and businesses for recycling. See Alberta Recycling Hotline for options.",
        bin: "Recycling",
      },
    },
    moreInfo: ["Do not put in your blue cart or community recycling depot."],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/ink-cartridges-305px.jpg",
    ],
  },
  {
    category: "Toothbrush",
    keywords: ["toothbrush"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put used toothbrushes in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/toothbrush2-160px.jpg",
    ],
  },
  {
    category: "Toothpaste",
    keywords: ["toothpaste"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put toothpaste and all types of toothpaste tubes into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/toothpaste-160px.jpg",
    ],
  },
  {
    category: "Potato chip bags",
    keywords: ["tortilla chip bag", "potato chip bag", "chip bag"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put all chip bags in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be recycled? Chip bags are made of a mix of plastic/foil/paper that has been laminated together. These layers cannot be separated which is why chip bags belong in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/chip-bag-160px.jpg",
    ],
  },
  {
    category: "Bread and grains",
    keywords: [
      "bread",
      "grains",
      "baguette",
      "french bread",
      "pita bread",
      "bagel",
      "tortilla wrap",
      "buns",
      "dinner roll",
      "flatbread",
      "naan bread",
      "pizza bread",
      "english muffin",
      "melba toast",
      "croutons",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put all bread and grains into your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/bread-160px.jpg",
    ],
  },
  {
    category: "Electronic toys",
    keywords: [
      "toys - electronic",
      "electronic action figure",
      "electronic doll",
      "battery-powered ride-on toys",
      "electronic ride-on toy cars, trucks, quads",
      "electronic toy camera",
      "remote control vehicle",
      "electronic learning aid",
      "electronic board game",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take old and broken electronic toys to an electronics recycling drop-off. Items must have a power cord or run on a battery/charger.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load,  landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put power tools in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://i5.walmartimages.com/asr/0839a5d4-8760-43be-b53f-821e35c7fee6.8235383cd6d43a7d8fb86734446f6895.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
    ],
  },
  {
    category: "Toys or Sports Equipment",
    keywords: [
      "toys - sports equipment",
      "hockey equipment",
      "baseball equipment",
      "basketball equipment",
      "football equipment",
      "soccer equipment",
      "exercise equipment",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Many local charities accept donations of usable household goods at various drop-off locations or offer a free pick-up service. Refer to the Alberta Recycling Hotline for opportunities.",
        bin: "Donate",
      },
    },
    votes: 0,
    image: [
      "https://activeforlife.com/content/uploads/2015/03/sports-gear.jpg",
    ],
  },
  {
    category: "Lighting fixtures",
    keywords: [
      "track lighting",
      "light fixtures",
      "ceiling lights",
      "wall lights",
      "wall sconces",
    ],
    instruction: {
      heading1: "​Small quantities of light fixtures",
      body1: {
        condition:
          "Put old and broken light fixtures, ceiling lights, wall sconces and wall lights into your black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "Larger sizes or quantities of light fixtures",
      body2: {
        condition:
          "Some private companies may accept reusable building materials - check the Alberta Recycling Hotline for options. Take large quantities of light fixtures to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      'Put broken glass pieces into a puncture-resistant, non-breakable, sealed container (e.g. plastic tub) or by wrapping it in two layers of paper and bagging them. Label as "sharps" with a permanent marker and place in your black cart as garbage.​​​',
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/light-fixture-160px.jpg",
    ],
  },
  {
    category: "Pet training pads",
    keywords: ["training pads", "pee pad"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put training pads and dog (puppy) pads into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/61rV7AbNcQL._AC_SL1000_.jpg"],
  },
  {
    category: "Travel-size bottles",
    keywords: ["travel-size bottles"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put plastic travel size bottles with the recycling symbol 1-7 on it.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove hand pumps and lids and put in the black cart as garbage.",
      "This includes travel size containers for shampoo, conditioner, soap, and other toiletries.​​",
    ],
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/51t2yU1MTtL._SL1000_.jpg"],
  },
  {
    category: "Paper frozen dinner trays",
    keywords: ["tray - microwavable paper", "paper frozen dinner tray"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle paper frozen dinner trays.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Put food scraps into the green cart for composting.",
      "Rinse out the tray before recycling.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/frozen-dinner-paper-tray-160px.jpg",
    ],
  },
  {
    category: "Plastic microwave dinner trays",
    keywords: ["trays - microwavable plastic", "plastic microwave dinner tray"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle plastic frozen dinnner trays (any color) with the recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Put all food scraps in the green cart for composting.",
      "Remove all plastic cellophane and put in the black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/microwave-frozen-dinner-tray-160px.jpg",
    ],
  },
  {
    category: "Yard waste",
    keywords: [
      "tree trimmings",
      "leaves",
      "pine cones",
      "cones",
      "plants",
      "flowers",
      "branches",
      "twigs",
      "hedge prunings",
      "grass clippings",
      "untreated mulch",
      "hay",
      "pine needles",
      "tree fruits",
      "crab apples",
      "rhubarb leaves",
      "moss",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put all yard waste into your green cart for composting, including:",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Place yard waste in paper yard waste bags. Make sure bags are rolled up and can be easily lifted.",
      "Set bags at least 0.5 m (2 ft) to the side of your green cart. Do not lean bags on the cart or on top of the cart lid.",
      "For larger quantities of yard waste, take to a City landfill for composting. Charges may apply - learn more at calgary.ca/yardwaste​. Note: sod is not accepted for composting at City landfills.​",
      "During the busy yard season, we will collect material inside green carts, but may limit the number of yard waste bags we pick up to make sure everyone gets service.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/branch-160px.jpg",
    ],
  },
  {
    category: "Diseased trees and shrubs",
    keywords: ["trees - diseased", "diseased shrubs", "diseased tree"],
    instruction: {
      heading1: "​Small quantities of diseased trees",
      body1: {
        condition:
          "Put small quantities of bagged diseased trees and shrubs directly into the black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "Large quantities of diseased trees",
      body2: {
        condition:
          "Take large quantities of diseased trees to a City landfill for disposal. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Diseased trees and shrubs must be bagged and tied closed to prevent the disease from spreading.",
      "The bagged trees must fit inside of the black cart. Make sure the lid can be pulled over. Bags of yard waste set beside the cart will not be collected.",
      "Diseased trees and shrubs should never go in the green cart.",
      "Your load must only contain infested trees/shrubs as this material must be disposed of in a separate section at the landfill, away from other yard waste.",
      "Diseased trees and shrubs includes those affected by: aphids, ash leaf cone roller, ash psyllid, black knot fungus, bronze leaf disease, elm scale, fire blight, oystershell scale, satin moth, or yellow-headed spruce sawfly.",
      "Why can't diseased trees and shrubs be composted? Plant diseases and insect infestations can spread during transportation and processing at the composting facility. By taking these troublesome species to the landfill we maintain high compost quality and reduce the spread of plant diseases and pests in our community.",
    ],
    votes: 0,
    image: [
      "https://www.elitetreecare.com/wp-content/uploads/2016/06/black-knot.jpg",
    ],
  },
  {
    category: "Plastic - Tupperware and food storage containers",
    keywords: ["tupperware"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle plastic food storage containers marked with recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tupperware-plastic-containers-160px.jpg",
    ],
  },
  {
    category: "Incontinence pads, liners and underpads",
    keywords: [
      "underpad - incontinence",
      "incontinence pad",
      "incontinence liner",
      "adult diaper",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put pads, liners, underpads, adult diapers and other incontinence products in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/81AqYD6HibL._AC_SL1500_.jpg"],
  },
  {
    category: "Optical drives and portable hard drives",
    keywords: [
      "USB drive",
      "optical drive",
      "portable hard drive",
      "external hard drive",
      "flash drive",
      "memory stick",
      "thumb drive",
      "CD-ROM drive",
      "CD burner",
      "DVD-ROM drive",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take optical drives and portable hard drives to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/external-hard-drive-160px.jpg",
    ],
  },
  {
    category: "Recreational vehicles, utility trailers and campers",
    keywords: [
      "utility trailer",
      "recreational vehicle",
      "camper",
      "RV",
      "vehicle",
    ],
    instruction: {
      heading1: "Private recycling/disposal​",
      body1: {
        condition:
          "Some private companies and charities may buy used recreational vehicles, charge a fee or accept items for free. Check with the company to see what type of vehicles they accept.",
        bin: "Donate",
      },
      heading2: "City landfill disposal",
      body2: {
        condition:
          "Take old recreational vehicles (that don't have a motor) to a City landfill. Utility trailers, fifth wheels and campers are accepted at the discretion of landfill staff. Landfill fees and the Hard to Handle surcharge will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "All liquids, sewage, refrigerators/appliances, gas and other tanks and tires must be removed in advance.",
    ],
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/712LUmiieIL._AC_SL1500_.jpg"],
  },
  {
    category: "Vacuum cleaner bags and vacuum cleaner dirt",
    keywords: ["vacuum bags", "vacuum cleaner bags", "vacuum cleaner dirt"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put cleaner bags and vacuum dirt, debris and lint in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Dust and powders must be double bagged and tied closed for dust control before putting in your black cart as garbage.",
      "Why can't vacuum cleaner dirt be composted? Vacuum cleaner dirt is not compostable in the green cart because it can include non-compostable material that will not breakdown during the composting process and will contaminate the finished compost.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/vacuum-dust-160px.jpg",
    ],
  },
  {
    category: "Dust and powders",
    keywords: ["vacuum dust", "dust", "powder"],
    instruction: {
      heading1: "",
      body1: {
        condition: "​Put dust and powders in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Dust and powders must be double bagged and tied closed for dust control before putting in your black cart as garbage.",
      "This includes any dusty material such as vacuum dust and other small particles.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/vacuum-dust-160px.jpg",
    ],
  },
  {
    category: "Plastic vacuum seal bags and packaging",
    keywords: ["vacuum seal bags and packaging"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle empty and clean plastic vacuum seal bags and packaging.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Bundle vacuum seal bags and packaging with your other plastic bags, tie close and put in your blue cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/vacuum-seal-packaging-160px.jpg",
    ],
  },
  {
    category: "Plumbing and pipes",
    keywords: [
      "valves - plumbing",
      "plumbing parts",
      "PVC pipes",
      "metal pipes",
      "valves and fittings",
    ],
    instruction: {
      heading1: "​Small quantities of plumbing parts",
      body1: {
        condition:
          "Put small quantities of PVC pipes, metal pipes, valves and fittings in your black cart as garbage. Pieces must be less than 15 cm in diameter and less than 1.25 meters in length. Make sure the lid of the cart can close.",
        bin: "Garbage",
      },
      heading2: "Large quantities of plumbing parts",
      body2: {
        condition:
          "Some private metal recyclers may buy scrap metal, charge a fee or accept items for free. Find a list of locations at Alberta's Recycling Hotline or The Yellow Pages under Metal Recycling. Take large quantities of plumbing parts from a renovation or demolition to a City landfill. Landfill charges will apply.",
        bin: "metal recycler",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/pipes-160px.jpg",
    ],
  },
  {
    category: "Small bathroom appliances",
    keywords: [
      "vanity mirror with lighting",
      "electric razor",
      "electric toothbrush",
      "curling iron",
      "crimper",
      "hot roller",
      "curler set",
      "flat iron",
      "hair straightener",
      "hair dryer",
      "beard trimmer",
      "electric hair clippers",
      "oral irrigator",
      "electric massager",
      "automatic soap dispenser",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take old and broken small bathroom appliances to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/electric-toothbrush-razor/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout7151/column-1-r0/image.img.jpeg/1612281720395/householditems-hair-drier.jpeg",
    ],
  },
  {
    category: "E-cigarettes, vapes and vape cartridges",
    keywords: ["vape pen", "vape cartridge", "e-cigarette"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put old and used e-cigarettes, vape pens, vape cartridges, and e-liquid containers in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Remove any batteries from vape pens and e-cigarettes before putting in the garbage. See battery disposal info here.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/uep/wrs/what-goes-where/e-cigarettes-vape-pens-cartridges/_jcr_content/root/bottomcontentpar/responsivegrid/grid_layout_1667710273/column-525c84d9-08fb-444c-a0d7-b5dd5bc734750/image.img.jpeg/1617743209215/e-cigarettes.jpeg",
    ],
  },
  {
    category: "Personal hygiene items",
    keywords: [
      "vaseline",
      "wet wipes",
      "disinfecting wipes",
      "wet naps",
      "flushable wipes",
      "disposable wipes",
      "band-aids",
      "personal wipes",
      "cosmetic wipes",
      "dental floss",
      "cotton balls",
      "Q-tips",
      "cotton swabs",
      "cosmetics and makeup",
      "petroleum jelly",
      "condoms",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put personal hygiene products in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Never flush personal hygiene items down the toilet, sink or drain as they can be harmful to the environment and may cause damage to the pipes in your home.",
      "Why can't it be composted? Many hygiene products are often used for make-up removal, cleaning and other chemicals that do not belong in the green cart. Hygiene products may also be made of a mix of organic and synthetic fibres, plastic or manufactured products that will not breakdown during the composting process.",
      "To ensure we're creating the highest quality compost possible, leave these items out of your green cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cotton-balls-160px.jpg",
    ],
  },
  {
    category: "Plastic petroleum jelly container",
    keywords: ["vaseline container", "petroleum jelly container"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle empty petroleum jelly containers with the recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/vaseline-container-160px.jpg",
    ],
  },
  {
    category: "VCR and DVD players",
    keywords: [
      "VCR player",
      "DVD player",
      "disc players",
      "Blu-ray player",
      "cable boxes",
      "digital video recorder",
      "PVR",
      "DVR",
    ],
    instruction: {
      heading1: "Usable VCRs and DVD players​",
      body1: {
        condition: "Donate working VCRs and DVD players to local charities.",
        bin: "Donate",
      },
      heading2: "Old and broken VCRs and DVD players",
      body2: {
        condition:
          "Take old and broken VCRs and DVD players to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply.",
      "Some restrictions apply. For full details, see Electronics Recycling program.",
      "Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/electronics-vcrsdvdplayers-160px.jpg",
    ],
  },
  {
    category: "Plastic mesh food bags",
    keywords: ["vegetable mesh bag", "mesh food bag"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put plastic mesh food bags in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "These mesh bags are commonly used to hold grocery produce like onions, avocados, and oranges.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/mesh-bag-160px.jpg",
    ],
  },
  {
    category: "Butter and lard",
    keywords: ["vegetable shortening", "butter", "lard", "margarine"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put all types of butter and lard into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Solidify the butter and lard to make it easier to put in your kitchen pail.",
      "Use newspaper or used paper towels to soak up any melted butter and oils.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/butter-160px.jpg",
    ],
  },
  {
    category: "Video tapes and cassette tapes",
    keywords: ["video tapes"],
    instruction: {
      heading1: "​Usable video and cassette tapes",
      body1: {
        condition:
          "Donate working video (VHS and Beta) and cassette tapes to participating charities. Refer to Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable video and cassette tapes",
      body2: {
        condition:
          "Put old and broken video and cassette tapes in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/electronics-videotapes-160px.jpg",
    ],
  },
  {
    category: "Vinyl gutters and downspouts",
    keywords: [
      "vinyl downspout",
      "vinyl gutter",
      "vinyl eavestrough",
      "plastic downspout",
      "plastic eavestrough",
    ],
    instruction: {
      heading1: "Small quantities of vinyl gutters",
      body1: {
        condition:
          "Put small quantities of vinyl gutters, eavestroughs and plastic downspouts in your black cart as garbage. Make sure the lid of your cart can close.",
        bin: "Garbage",
      },
      heading2: "Larger sizes or quantities of vinyl gutters",
      body2: {
        condition:
          "Take larger pieces or amounts of vinyl gutters to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    votes: 0,
    image: [
      "https://images.thdstatic.com/productImages/7c4413d7-57d9-4f71-b73a-3933d084c66b/svn/amerimax-home-products-gutter-fittings-m0506-c3_600.jpg",
    ],
  },
  {
    category: "Vinyl records",
    keywords: ["vinyl records"],
    instruction: {
      heading1: "​Usable vinyl records",
      body1: {
        condition:
          "Reuse or donate vinyl records to friends and family, post on online bartering websites like Kijiji or donate to charity.",
        bin: "Donate",
      },
      heading2: "Unusable or broken vinyl records",
      body2: {
        condition:
          "Put broken or unusable vinyl records into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Put paper/cardboard vinyl record covers into your blue cart for recycling.​​​​​​​",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/vinyl-record-160px.jpg",
    ],
  },
  {
    category: "Vinyl siding",
    keywords: [
      "vinyl siding",
      "exterior siding",
      "corrugated panels",
      "corner posts",
      "corner mouldings",
      "vinyl trim",
      "veneer siding",
    ],
    instruction: {
      heading1: "Small quantities of exterior siding​",
      body1: {
        condition:
          "Put small quantities of exterior siding into your black cart as garbage. This includes vinyl siding, corrugated panels, corner posts, corner mouldings, vinyl trim and veneer siding. Make sure the lid of the cart can close.",
        bin: "Garbage",
      },
      heading2: "Large quantities of exterior siding",
      body2: {
        condition:
          "Take large quantities of vinyl siding to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/vinyl-siding-160px.jpg",
    ],
  },
  {
    category: "Prescription drugs and other medicine",
    keywords: [
      "vitamins",
      "pills",
      "drugs",
      "cough syrup",
      "prescription medication",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Most pharmacies accept unused portions of drugs, pills, cough syrup, vitamins, over-the-counter and prescription medication for safe disposal.",
        bin: "pharmacy",
      },
    },
    moreInfo: [
      "Contact your local pharmacy in advance to ensure that they will accept drugs and medication",
      "Visit the Alberta Pharmacists' Association for a full list of participating pharmacies.",
      "Do not dispose of medicine in the garbage, compost or down the sink or toilet as it can be harmful to the environment.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/medical-medicationsdrugs-160px.jpg",
    ],
  },
  {
    category: "Yard waste - Grass clippings",
    keywords: ["grass clippings"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Leave grass clippings on your lawn after you mow; or put grass clippings in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Put grass clippings in loose in cart or use a paper yard waste bag to prevent clippings sticking to the cart.",
      "Put excess grass clippings in paper yard waste bags.",
      "Bags have a 20 kg weight limit. Make sure bags are rolled up and can be easily lifted.",
      "Set bags at least 0.5m (two feet) to the side of your green cart. Do not lean bags against the cart or on top of the cart lid.",
      "During the busy yard season, we will collect material inside green carts, but may limit the number of extra paper bags we pick up to make sure everyone gets service.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/yardwaste-grassclippings-160px.jpg",
    ],
  },
  {
    category: "Yard waste - Leaves",
    keywords: ["leaves"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put leaves in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Fill your green cart first.",
      "If your green cart is full, put the leaves in a paper yard waste bag.",
      "Bags have a 20 kg weight limit. Make sure bags are rolled up and can be easily lifted.",
      "Set bags at least 30 cm (one foot) to the side of your green cart. Do not lean them on the cart or place them on the cart lid.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/leaves-pinecones-160px.jpg",
    ],
  },
  {
    category: "Peel-off lids and food seals",
    keywords: [
      "yogurt container seal",
      "food seals",
      "peel-off lids",
      "single-serving pudding cup seal",
      "plastic film cover on a microwave dinner",
      "peanut butter container seal",
      "fruit cup seal",
      "applesauce cup seal",
      "hummus and other dips container seal",
      "baby food jar seal",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "​Put peel-off lids and food seals into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Why can't this be recycled? Sometimes these food seals may be made of multiple materials like foil and plastic that cannot be separated for recycling. Other food seals may be a non-stretchy plastic film that also cannot be recycled.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/food-seal-160px.jpg",
    ],
  },
  {
    category: "Single-serving snack cups",
    keywords: ["yogurt cup", "pudding cup", "snack cup"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle single-serve snack cups (such as yogurt cups and pudding cups) with the recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    moreInfo: ["Remove food seals/peel-off lids and put in the garbage."],
    votes: 0,
    image: ["https://m.media-amazon.com/images/I/71DWQtyiQVL._AC_SL1500_.jpg"],
  },
  {
    category: "Cheese and dairy products",
    keywords: [
      "yogurt",
      "cheese",
      "blue cheese",
      "shredded cheese",
      "cottage cheese",
      "sour cream",
      "cream cheese",
      "butter",
      "dairy products",
      "cheese products",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put cheese and dairy products in your green cart for composting.",
        bin: "Compost",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/dairy-and-cheese-160px.jpg",
    ],
  },
  {
    category: "Plastic storage bags",
    keywords: ["zipper storage bag"],
    instruction: {
      heading1: "​Usable storage bags",
      body1: {
        condition:
          "Reuse empty storage bags, give to family and friends, post on online bartering websites like Kijiji or donate to charity.",
        bin: "Donate",
      },
      heading2: "Broken storage bags",
      body2: {
        condition:
          "Put old and broken storage bags into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Plastic storage bags are often used for garments, bed sheets, duvet covers, cosmetics, accessories and other textiles. They usually have a zipper enclosure and may be clear or colored/patterned.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/storage-bag-160px.jpg",
    ],
  },
  {
    category: "Battery - Non-rechargeable",
    keywords: [
      "alkaline batteries",
      "non-rechargeable batteries",
      "lithium primary batteries",
      "single-use household batteries",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take non-rechargeable batteries to a participating retailer for recycling, free of charge.",
        bin: "recycling retailer",
      },
    },
    moreInfo: [
      "Retailer locations include Best Buy, Home Depot, Ikea, Lowes, MEC, Staples, The Source, RONA, Apple Store, London Drugs, Princess Auto, ListenUP! Canada, UBreakifix.",
      "This includes lithium primary batteries and alkaline/single-use household batteries. These batteries are commonly found in watches, car remotes, TV remote controls, and calculators.",
      "For safety precautions, tape over the ends (positive and negative terminals) of each individual lithium battery. This also applies to button style batteries. Separate your taped lithium batteries by putting inside a Ziploc bag and sealing shut.",
      "Taping off the ends of your batteries will ensure that they cannot touch each other to prevent a fire from occurring.",
      "Why can’t batteries go into the carts? Batteries need to be separated and taken to a different location for safe handling. If they end up in any of the bins, the batteries can get crushed leading to fires at the recycling facility, composting facility and landfill sites.",
      "For a full list of options, visit the Call2Recycle battery recycling website.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/batteries-160px.jpg",
    ],
  },
  {
    category: "Chemicals - Automotive",
    keywords: [
      "engine oil",
      "chain oil",
      "motor oil",
      "antifreeze",
      "brake fluid",
      "power steering fluid",
      "transmission fluid",
      "container with hazard symbol on it",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Safely dispose automotive chemicals for free at a household hazardous waste drop-off location such as a designated fire hall or a city landfill Throw 'n' Go area.",
        bin: "hazardous waste",
      },
    },
    moreInfo: [
      "Use original containers where possible, or use a sealed, spill-proof container and make sure it is clearly labelled.",
      "We accept up to 20 litres of household chemicals per week.",
      "Never flush chemicals down your toilet, sink or drain as they harm the environment and may damage the pipes in your home.",
      "If you are a business with automotive chemicals to dispose of, visit the Alberta Recycling Management Authority for drop-off locations or see our Business Waste resources.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householdhazardouswaste-vehicle-160px.jpg",
    ],
  },
  {
    category: "Battery - Rechargeable",
    keywords: [
      "lithium-ion batteries",
      "rechargeable batteries",
      "nickel cadmium batteries",
      "small sealed lead acid batteries",
      "nickel zinc batteries",
      "nickel metal hydride batteries",
      "lithium polymer batteries",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take rechargeable batteries to a participating retailer for recycling, free of charge.",
        bin: "recycling retailer",
      },
    },
    moreInfo: [
      "Retailer locations include Best Buy, Home Depot, Ikea, Lowes, MEC, Staples, The Source, RONA, Apple Store, London Drugs, Princess Auto, ListenUP! Canada, UBreakifix.",
      "Rechargeable batteries are commonly found in cellphones, digital cameras, laptop computers, cordless power tools and other household appliances.",
      "For safety precautions, tape over the ends (positive and negative terminals) of each individual lithium battery. This also applies to button style batteries. Separate your taped lithium batteries by putting inside a Ziploc bag and sealing shut.",
      "Taping off the ends of your batteries will ensure that they cannot touch each other to prevent a fire from occurring.",
      "Why can’t batteries go into the carts? Batteries need to be separated and taken to a different location for safe handling. If they end up in any of the bins, the batteries can get crushed by equipment leading to fires at the recycling facility, composting facility and landfill sites.",
      "Find a list of locations on the Call2Recycle battery recycling website.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/batteries-rechargeable-160px.jpg",
    ],
  },
  {
    category: "Pill and medicine bottles - plastic",
    keywords: [
      "prescription pill bottle",
      "medicine bottle",
      "pill bottle",
      "blood glucose test strips",
      "pill vials",
      "cough syrup bottles",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Recycle empty and clean plastic prescription bottles:",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "This also includes blood glucose test strip bottles, pill vials, cough syrup bottles, and medicine bottles.",
      "For leftover drugs, pills and medicine see our prescription drugs page.",
      "Remove caps and put in the garbage.",
      "Remove cotton ball insulation and gel packets and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/pill-bottle-160px.jpg",
    ],
  },
  {
    category: "Watches",
    keywords: ["watch"],
    instruction: {
      heading1: "Usable watches​",
      body1: {
        condition:
          "Digital watches and analog watches in good working order can be given to family and friends or donated to participating charities that accept accessories. See Alberta's Recycling Hotline for options.",
        bin: "Donate",
      },
      heading2: "Unusable watches",
      body2: {
        condition:
          "Put watches that cannot be repaired in the black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Replacing the battery or repairing the watch strap can make the item usable again.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/watch-160px.jpg",
    ],
  },
  {
    category: "Reusable water bottles and baby bottles",
    keywords: [
      "water bottle - plastic, reusable",
      "reusable water bottle",
      "baby bottle",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle reusable plastic water bottles and baby bottles marked with recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Remove lids, straws and nipples and put them in your black cart as garbage.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/water-bottle-160px.jpg",
    ],
  },
  {
    category: "Appliances - Refrigerators, freezers and water coolers",
    keywords: ["water cooler", "refrigerator", "freezer"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take empty refrigerators, freezers and water coolers to a City landfill for recycling. There will be a refrigerant removal surcharge (even if the refrigerant has been removed) and weight charges.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Some private companies may accept or buy appliances. Refer to Alberta's Recycling Hotline or contact these local metal recyclers: Recon Metal, Calgary Metal, Federal Metal, Blackfoot Metals.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/appliances-refrigerators-160px.jpg",
    ],
  },
  {
    category: "Water filters and refrigerator filters",
    keywords: ["water filter", "refrigerator filter"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put water filters, refrigerator filters and similar purifiers in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Some manufacturers may accept their water filters for recycling. Contact the manufacturer of your filter to find out how to recycle their product. Common water filter brands include Greenway, Brondell, EveryDrop, Frigidaire and more.",
      "For Brita filter recycling, see options here.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/water-filter-160px.jpg",
    ],
  },
  {
    category: "Water Softener",
    keywords: ["water softener, equipment and bags", "water softener"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take water softener equipment to a City landfill for disposal. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Put water softener salt and bags in your black cart as garbage.",
    ],
    votes: 0,
    image: ["https://cdn.rona.ca/images/11965020_L.jpg"],
  },
  {
    category: "Wax and coated paper",
    keywords: [
      "wax paper",
      "coated paper",
      "coated paper products",
      "butcher paper",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put coated paper products in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Coated paper includes wax paper and butchers' meat wrap paper.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-butchers-paper.jpg",
    ],
  },
  {
    category: "Waxed cups",
    keywords: ["waxed cups"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put waxed cups in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Tip: Scratch your fingernail along the inside of the cup – if it is a waxed cup, you will see a noticeable layer of wax under your fingernail.",
    ],
    votes: 0,
    image: ["https://www.schoolnursesupplyinc.com/assets/images/22058.jpg"],
  },
  {
    category: "Weeds - common",
    keywords: [
      "weeds - common",
      "dandelions",
      "quack grass",
      "broadleaf plantains",
      "clover",
      "chickweed",
      "pigweed",
      "Lamb's quarters",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put common weeds in your green cart for composting",
        bin: "Compost",
      },
    },
    moreInfo: [
      "If you have prohibited, noxious or invasive weeds, do NOT put in green cart.",
      "Why can weed seeds be composted? The high temperatures maintained in The City’s indoor composting process ensures weed seeds from common species will decompose and are not present in the finished compost.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/yardwaste-otheryardwaste-160px.jpg",
    ],
  },
  {
    category: "Weeds - noxious and invasive",
    keywords: [
      "weeds - noxious",
      "invasive weeds",
      "blueweed",
      "Canada thistle",
      "common tansy",
      "diffuse knapweed",
      "leafy spurge",
      "nodding thistle",
      "purple loosestrife",
      "scentless chamomile",
      "spotted knapweed",
      "toadflax",
      "creeping bellflower",
    ],
    instruction: {
      heading1: "​Small quantities",
      body1: {
        condition:
          "Put small quantities of bagged noxious and invasive weeds directly into the black cart as garbage. The bagged noxious and invasive weeds must fit inside of the black cart. Make sure the lid can be pulled over. Bags of yard waste set beside the cart will not be collected.",
        bin: "Garbage",
      },
      heading2: "Large quantities of noxious and invasive weeds",
      body2: {
        condition:
          "Take large quantities of noxious and invasive weeds to a City landfill for disposal. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Noxious and invasive weeds must be bagged and tied closed to prevent seeds from spreading",
      "Your load must only contain noxious and invasive weeds as this material must be disposed of in a separate section at the landfill.",
      "Why can’t noxious and invasive weeds be composted? These invasive species can aggressively spread during transportation and processing at the composting facility. By taking these troublesome species to the landfill we maintain high compost quality and reduce the spread of noxious and invasive weeds in our community.",
    ],
    votes: 0,
    image: [
      "https://cdn.shopify.com/s/files/1/0319/9841/0892/products/chrysanthemumvulgare_1165x.jpg?v=1616685751",
    ],
  },
  {
    category: "Windshield wiper fluid container",
    keywords: ["windshield fluid container"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Recycle empty windshield wiper fluid jugs with the recycling symbol 1-7.",
        bin: "Recycling",
      },
    },
    moreInfo: ["Rinse out the container before recycling."],
    votes: 0,
    image: [
      "https://canadiantire.scene7.com/is/image/CanadianTire/0294105_1?defaultImage=image_na_EN&fmt=jpg&fit=constrain,1&wid=573&hei=499",
    ],
  },
  {
    category: "Windshield glass",
    keywords: ["windshield glass"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Put properly packaged windshield glass in your black cart as garbage or take it to a city landfill for disposal. Landfill charges will apply.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "Package glass shards safely by putting the pieces into a puncture-resistant, non-breakable, sealed container (e.g. plastic tub, plastic pail, laundry detergent container etc.)",
      "Or wrap the glass in two layers of paper and place in a tied bag.",
      "Label as 'sharps' with a permanent marker and place in your black cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/glass-160px.jpg",
    ],
  },
  {
    category: "Corks",
    keywords: ["wine corks"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put natural wine corks in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: [
      "Natural wine corks break apart, synthetic corks do not.",
      "Put synthetic corks in your black cart.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/wine-corks-160px.jpg",
    ],
  },
  {
    category: "Electrical cords, plugs and wires",
    keywords: [
      "wire - electrical",
      "electrical cords",
      "electrical plugs",
      "electrical wires",
      "extension cords",
      "power bars",
      "network cables",
      "ethernet cables",
      "coaxial cables",
      "phone cords",
    ],
    instruction: {
      heading1: "​Small quantities of electrical cords",
      body1: {
        condition:
          "Put broken and used electrical cords and wires in your black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "Large quantities of electrical cords",
      body2: {
        condition:
          "Take old electrical cords to a City landfill for scrap metal recycling. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/extension-cord-160px.jpg",
    ],
  },
  {
    category: "Wood",
    keywords: ["wood", "timber"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "See these entries for specific information: creosote-treated wood, pallets, pressure treated wood, plywood, particle board, OSB, MDF, and untreated wood.",
        bin: "N/A",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/construction-demolition-waste-wood-305px.jpg",
    ],
  },
  {
    category: "Wood – Creosote-treated",
    keywords: ["wood - creosote treated", "railway ties"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take creosote-treated wood and railway ties to Shepard Landfill.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Please note: a permit is required.",
      "To obtain a permit, complete an online service request or contact 311. The Industrial Waste rate will be charged.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/wood-creosote-treatedwood-160px.jpg",
    ],
  },
  {
    category: "Wood - plywood, particle board/OSB and MDF",
    keywords: [
      "plywood",
      "particle board",
      "OSB wood",
      "MDF wood",
      "oriented strand board",
      "wood panelling",
      "hardboard",
      "wood - OSB",
      "wood - MDF",
    ],
    instruction: {
      heading1: "Small quantities of manufactured wood​",
      body1: {
        condition:
          "Put manufactured wood in your black cart as garbage. Manufactured wood pieces must fit inside the black cart.",
        bin: "Garbage",
      },
      heading2: "Large sizes or quantities of manufactured wood",
      body2: {
        condition:
          "Take large pieces or amounts of manufactured wood to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/particle-plywood-160px.jpg",
    ],
  },
  {
    category: "Wood – Pressure treated",
    keywords: ["wood - painted", "wood - stained"],
    instruction: {
      heading1: "Small quantities of treated wood​",
      body1: {
        condition: "Put treated wood in your black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "Larger sizes or quantities of treated wood",
      body2: {
        condition:
          "Take larger pieces or amounts of treated wood to a City landfill. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    moreInfo: [
      "Wood that's been stained, chemically treated, pressure treated, painted and/or has nails, screws or other hardware attached is considered treated wood.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/wood-treatedwood-160px.jpg",
    ],
  },
  {
    category: "Wood - Pallets",
    keywords: ["wood - pallets", "pallets", "pallet"],
    instruction: {
      heading1: "​",
      body1: {
        condition:
          "Take wooden pallets to any City landfill for recycling. Landfill charges will apply.",
        bin: "Landfill",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/wood-pallet-160px.jpg",
    ],
  },
  {
    category: "Wrappers - granola and snack bars",
    keywords: [
      "wrapper - granola bar",
      "wrapper - snack bar",
      "chocolate bar wrapper",
      "energy bar wrapper",
      "protein bar wrapper",
      "candy bar wrapper",
    ],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put all food bar wrappers in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [
      "This includes wrappers for granola bars, chocolate bars, candy bars, energy bars, protein bars, fruit packs, and other snack bars.",
    ],
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/granola-bar-wrapper-160px.jpg",
    ],
  },
  {
    category: "Mandarin orange wrappers",
    keywords: ["wrapper - mandarin orange"],
    instruction: {
      heading1: "​Food-soiled wrapper",
      body1: {
        condition:
          "Put food-soiled mandarin orange wrappers in your green cart for composting (used for orange peel, seeds, wet from fruit etc.)",
        bin: "Compost",
      },
      heading2: "Clean wrapper",
      body2: {
        condition: "Recycle clean mandarin orange wrappers.",
        bin: "Recycling",
      },
    },
    moreInfo: [
      "Mandarin oranges often come covered in a white or green tissue wrapper.",
    ],
    votes: 0,
    image: [
      "http://www.squirrellyminds.com/images/112813-orange-wrapper-advent-tree-title.jpg",
    ],
  },
  {
    category: "Gift wrap (foil)",
    keywords: ["wrapping paper (foil)", "foil gift wrap"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put foil wrapping paper in your black cart as garbage.",
        bin: "Garbage",
      },
    },
    votes: 0,
    image: [
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/paper-foilgiftwrap-160px.jpg",
    ],
  },
  {
    category: "Wreaths, boughs and garlands",
    keywords: ["wreath", "boughs", "garlands"],
    instruction: {
      heading1: "​Real Christmas wreaths",
      body1: {
        condition:
          "Put real Christmas wreaths, garlands and boughs in your green cart for composting.",
        bin: "Compost",
      },
      heading2: "Artificial Christmas wreaths",
      body2: {
        condition:
          "Reuse artificial Christmas wreaths, boughs and garlands, give to friends and family or donate to a participating charity. Put broken wreaths in the black cart as garbage.",
        bin: "Donate",
      },
    },
    moreInfo: [
      "Remove all ribbons, wires, staples, non-wooden frames and other accessories and put in the garbage.",
    ],
    votes: 0,
    image: [
      "https://www.flowersincalgary.com/uploads/thumbnails/Christmas%20Wreath%20Calgary.jpg.37adc8ee.jpg",
    ],
  },
  {
    category: "Air purifiers and fans",
    keywords: ["electric fan", "destop fan", "window fan", "portable fan", "fan", "air purifier", "ionizer", "plugged air freshners"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Take old and broken air purifiers and cooling fans to an electronics recycling drop-off. Items must have a power cord/plug or run on a battery/charger.",
        bin: "Landfill",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
  {
    category: "Air freshener refils and cartridges",
    keywords: ["scented oil refils", "car freshener scents", "plug-in refills", "aromatherapy refills", "essential oil bottles", "diffuser stick","potpourri"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put all types of air freshener refills and cartridges into your black cart as garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
  {
    category: "Aluminum siding and gutters",
    keywords: ["metal gutters", "eavestroughs", "downsprouts", "aluminum gutter",],
    instruction: {
      heading1: "Small quantities​",
      body1: {
        condition: "Put quantities of less than 15cm (Diameter) or 1.25m (length) of aluminum siding, metal gutters, eavestroughs and downspouts into your black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "Larger sizes or quantities ",
      body2: {
        condition:
          "Large quantities of aluminium siding can also be brought to a City landlfill for scrap metal recycling.",
        bin: "Landfill",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-gutter-160px.jpg"],
  },
  {
    category: "Poinsettas and holiday plants",
    keywords: ["poinsetta", "amaryllis", "holiday plant"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Remove all plastic/foil wrapper and put in the garbage.",
        bin: "Garbage",
      },
    },
    moreInfo: ["Plastic pots with recycling symbol 1-7 can be recycled in blue cart."],
    votes: 0,
    image: [""],
  },
  {
    category: "Ammunition and explosives",
    keywords: ["ammo", "bullet", "explosive"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "​Contact the Calgary Police Service at (403) 266-1234 for safe disposal of ammunition, explosives and flares.​​​",
        bin: "",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
  {
    category: "Animal and pet bedding",
    keywords: ["animal bedding", "pet bedding", "cage bedding"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Place the tied up/rolled up bag in your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: ["Compostable bedding and cage lining materials include: Cedar, corn, paper, pine, bambooo, Coco husk, plantation soil, sand, Timothy and Alfalfa hay, Flyers and newspaper"],
    votes: 0,
    image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/animal-bedding-160px.jpg"],
  },
  {
    category: "Disposing of animals",
    keywords: ["roadkill", "dead animal", "animal corpse", "pet remains"],
    instruction: {
      heading1: "Small animal​",
      body1: {
        condition: "Put small animal carcasses (e.g. birds, mice, fish, rabbits) in your green cart for composting.",
        bin: "Compost",
      },
      heading2: "Large animal​",
      body2: {
        condition: "Take large carcasses or parts (e.g. deer, moose, elk, sheep) to a City landfill for disposal. Tell scale-house staff what you have. They will give you directions to the designated disposal area.",
        bin: "Landfill",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
  {
    category: "Electronics - Home phones",
    keywords: ["home phone", "landline", "house phone"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Take old and broken telephones to an electronics recycling drop-off.",
        bin: "Recycling drop-off",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: ["https://www.calgary.ca/uep/wrs/what-goes-where/electronics-home-phones/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout2861/column-1-r0/image.img.jpeg/1612214614321/electronics-telephone-160px.jpeg"],
  },
  {
    category: "Soap - all types",
    keywords: ["soap"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put leftover bars of soap into your black cart as garbage. Drain leftover liquid soap, hand soap and dishwashing liquid down your sink.",
        bin: "Garbage",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
  {
    category: "Deodorant",
    keywords: ["stick deodorant"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Put all types of deodorant into your black cart as garbage. This includes roll-on, liquid and solid deodorants.",
        bin: "Garbage",
      },
    },
    moreInfo: ["Deodorant containers are a 'multi-material' made of multiple types of plastic parts that are not recyclable."],
    votes: 0,
    image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/deodorant-160px.jpg"],
  },
  {
    category: "Chemicals - Hobby, arts and crafts",
    keywords: ["artist paint", 'art paint', "model glue", "photo developing fluids"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Safely dispose hazardous hobby and craft supplies for free at a household hazardous waste drop-off site:",
        bin: "Landfill",
      },
    },
    moreInfo: ["Use original containers where possible, or use a sealed, spill-proof container and make sure it is clearly labelled. You can bring up to 20 litres of household chemicals per week. Never flush chemicals down your toilet, sink or drain as they harm the environment and/or the pipes in your home."],
    votes: 0,
    image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householdhazardouswaste-hobbyartscrafts-160px.jpg"],
  },
  {
    category: "Asbestos",
    keywords: ["asbestos"],
    instruction: {
      heading1: "​",
      body1: {
        condition: "You can take asbestos to the Shepard Landfill for safe disposal.",
        bin: "Landfill",
      },
    },
    moreInfo: ["The asbestos must be specially packaged before it can be accepted."],
    votes: 0,
    image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/constructionwaste-asbestos-160px.jpg"],
  },
  {
    category: "Asphalt",
    keywords: ["asphalt", "asphalt shingles"],
    instruction: {
      heading1: "Small quantities of asphalt​",
      body1: {
        condition: "Put small quantities of less than 60 kg of asphalt in your black cart as garbage.",
        bin: "Garbage",
      },
      heading2: "Large quantities of asphalt​",
      body2: {
        condition: "Take large quantities of asphalt to a City landfill. ",
        bin: "Landfill",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/constructionwaste-asphalt-160px.jpg"],
  },
  {
    category: "Cars and trucks",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "Some private companies and charities may buy used or end-of-life vehicles, charge a fee or accept items for free. Check with the company to see what type of vehicles they accept.",
        bin: "Donate",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
  {
  category: "Avocadoes",
  keywords: ["avocado", "avocadoes"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put avocadoes, skins and pits into your green cart for composting.​​​​",
      bin: "Compost",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/avocado-pit-160px.jpg"],
},
{
  category: "Car seats",
  keywords: ["car seat"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Take cart seats to a City landfill for disposal.",
      bin: "Landfill",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: [""],
},
{
  category: "Cooking oil, fats, and grease",
  keywords: ["cooking oil","fats","grease", "bacon fat"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put up to two litres of cooking oil, fats, sauces, drippings and grease in your green cart for composting.",
      bin: "Compost",
    },
  },
  moreInfo: ["Solidify fats and grease by letting it cool at room temperature or in fridge. Mix oil with an absorbent material such as paper towel, sawdust or kitty litter."],
  votes: 0,
  image: ["https://www.calgary.ca/uep/wrs/what-goes-where/cooking-oil-or-grease/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout382/column-1-r0/image.img.jpeg/1620236673485/cooking-oil-and-grease.jpeg"],
},
{
  category: "Balloons",
  keywords: ["balloon"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put new and used (deflated, ripped, popped) party balloons in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: ["This includes latex balloons and mylar balloons."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/balloons-160px.jpg"],
},
{
  category: "Lighters",
  keywords: ["lighter", "barbeque lighter"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put empty lighters such as barbeque and cigarette lighters in your black cart as garbage.​​",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/lighter-160px.jpg"],
},
{
  category: "Weight scales",
  keywords: ["weight scale"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Take old and broken digital and electronic weight scales to an electronics recycling drop-off.",
      bin: "Recyling drop-off",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: [""],
},
{
  category: "Chemicals - Bear spray and pepper spray",
  keywords: ["bear spray", "pepper spray"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Safely dispose of bear spray and pepper spray for free at a household hazardous waste drop-off",
      bin: "Landfill",
    },
  },
  moreInfo: ["You can bring up to 20 litres of household chemicals per week."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/bear-spray-160px.jpg"],
},
{
  category: "Plastic – Bedding plant pots",
  keywords: [""],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Recycle bedding plant containers marked with a recycling symbol 1-7",
      bin: "Recycling",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-bedding-plant-pots.jpg"],
},
{
  category: "Bicycles",
  keywords: ["bike", "bicycle"],
  instruction: {
    heading1: "Usable bikes​",
    body1: {
      condition: "Donate usable bikes to participating charities.",
      bin: "Donate",
    },
    heading2: "Unusable bikes​",
    body2: {
      condition: "Break down and put unusable bicycles or parts in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/toyssportsequipment-bicycle-160px.jpg"],
},
{
  category: "Helmets - all types",
  keywords: ["helmet"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put used and broken helmets in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/helmet-160px.jpg"],
},
{
  category: "Binders",
  keywords: ["Binder"],
  instruction: {
    heading1: "​Usable binders",
    body1: {
      condition: "Donate usable binders to participating charities.",
      bin: "Donate",
    },
    heading2: "​Unusable binders",
    body2: {
      condition: "Remove any paper sheets, folders and dividers and put in your blue cart for recycling.",
      bin: "Recylcling",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/uep/wrs/what-goes-where/binders/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout/column-1f7002f7-fc92-49c3-ac08-05b295293dc20/image.img.jpeg/1636480655475/green-binder.jpeg"],
},
{
  category: "Bio-Medical waste",
  keywords: ["bio-medical waste", "medical waste"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Refer to Alberta's Recycling Hotline for private companies to dispose of medical waste safely. ",
      bin: "",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/medical-biomedicalwaste-160px.jpg"],
},
{
  category: "Biodegradable products",
  keywords: ["oxo-gradable", "biodegradable", "cleaning wipes"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put products labelled as 'biodegradable' or 'oxo-gradable' in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: ["Products include bags, plastic cutlery and take out containers."],
  votes: 0,
  image: [""],
},
{
  category: "Blister packaging",
  keywords: ["blister packaging", "blister packet"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put plastic blister packaging into your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/blister-packaging-160px.jpg"],
},
{
  category: "Body wash bottle",
  keywords: ["body wash bottle", "bubble bath bottle"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Recycle empty and clean body wash bottles and bubble bath bottles with the recycling 1-7:",
      bin: "Recycling",
    },
  },
  moreInfo: ["Remove any hand pumps and put in the black cart as garbage."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/body-wash-bottle-160px.jpg"],
},
{
  category: "Meat, poultry, pork and bones",
  keywords: ["meat", "beef", "pultry", "pork", "bones", "processed meat", "jerky", "sausage", "bacon"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put all raw and cooked meat into your green cart for composting.",
      bin: "Compost",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/chicken-bones-160px.jpg"],
},
{
  category: "Ribbons and bows",
  keywords: ["ribbon", "bow"],
  instruction: {
    heading1: "Unusable ribbons and bows​",
    body1: {
      condition: "Put unusable ribbons and bows in your black cart as garbage.​",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householditems-ribbons-bows.jpg"],
},
{
  category: "Dryer lint and dryer sheets",
  keywords: ["dryer lint", "dryer sheets"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put dryer lint and dryer sheets in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/dryer-lint-160px.jpg"],
},
{
  category: "Mattress, box spring or futon",
  keywords: ["mattress", "box spring", "futon", "bed"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Donate or drop-off a mattress at a charity. Some organizations accept mattresses in good condition for donation. ",
      bin: "Donate",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householditems-mattress.jpg"],
},
{
  category: "Brick and masonry block",
  keywords: ["brick", "masonry block"],
  instruction: {
    heading1: "​Small quantities of bricks and masonry blocks",
    body1: {
      condition: "Put small quantities of less than 60 kg of bricks and masonry blocks into your black cart as garbage.",
      bin: "Garbage",
    },
    heading2: "Large quantities of bricks and masonry blocks​",
    body2: {
      condition: "Take large quantities of brick and masonry blocks to a City landfill. ",
      bin: "Landfill",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/constructionwaste-bricksmasonry-160px.jpg"],
},
{
  category: "Butter wrapper",
  keywords: ["butter wrapper"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put empty butter and margarine wrappers into your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/butter-wrapper-160px.jpg"],
},
{
  category: "Cakes, muffins and pastries",
  keywords: ["cake", "muffin", "pastry"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put leftover cakes, muffins and pastries into your green cart for composting.",
      bin: "Compost",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: [""],
},
{
  category: "Cabinets and drawers",
  keywords: [""],
  instruction: {
    heading1: "Small quantities of cabinets​",
    body1: {
      condition: "Put broken or used pieces smaller than 15cm (diameter) and 1.25m (length) of cabinets and drawers into your black cart as garbage.",
      bin: "Garbage",
    },
    heading2: "Large quantities of cabinets​",
    body2: {
      condition: "Take used or broken cabinets and drawers from a renovation or demolition to a City landfill.",
      bin: "Landfill",
    },
  },
  moreInfo: ["Some private companies such as Habitat for Humanity Restore may accept reusable building materials such as cabinets and drawers."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cabinet-160px.jpg"],
},
{
  category: "Film cameras",
  keywords: ["film camera", "polaroid camera"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "You can put old and broken film cameras, Polaroid film cameras and other instant film cameras in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/film-camera-160px.jpg"],
},
{
  category: "Propane tanks and canisters",
  keywords: ["propane tank", "propane canister"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Safely dispose of propane tanks such as standard barbecue tanks, small camping canisters and butane canisters for free at a household hazardous waste drop-off",
      bin: "Landfill",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/gastanks-propane-160px.jpg"],
},
{
  category: "Cardboard",
  keywords: ["box", "cereal box", "egg carton", "pizza box","tissue box","toilet paper roll", "paper towel roll" ],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put cardboard into your blue cart or community recycling depot for recycling.",
      bin: "Recycling",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cardboard-box-160px.jpg"],
},
{
  category: "Carpets",
  keywords: ["carpet"],
  instruction: {
    heading1: "Small quantities of carpet​",
    body1: {
      condition: "Put small quantities (less than 1.25m in length) of carpet and carpet underlay into your black cart as garbage.",
      bin: "Garbage",
    },
    heading2: "Large quantities of carpet​",
    body2: {
      condition: "ake large sizes or amounts of carpet to a City landfill.",
      bin: "Landfill",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householditems-carpet-160px.jpg"],
},
{
  category: "Chapstick",
  keywords: [""],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put chapstick tubes into your black as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/chapstick-160px.jpg"],
},
{
  category: "Charcoal and coal products",
  keywords: ["charcoal","coal"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "put charcoal and coal products into your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/charcoal-160px.jpg"],
},
{
  category: "Cigarette butts",
  keywords: ["cigarette butts"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put cigarette butts in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: ["Make sure the cigarette is extinguished before throwing away."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cigarette-butts-160px.jpg"],
},
{
  category: "Concrete",
  keywords: ["concrete"],
  instruction: {
    heading1: "Small quantities of concrete​",
    body1: {
      condition: "Put small quantities (less than 60 kg) of concrete in your black cart as garbage.",
      bin: "Garbage",
    },
    heading1: "Large quantities of concrete​",
    body1: {
      condition: "Take large loads of concrete and cinder blocks to a City landfill. ",
      bin: "Landfill",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/constructionwaste-concrete-160px.jpg"],
},
{
  category: "Contact lenses and cases",
  keywords: ["contacts","contact lense", "contact case"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put contact lenses, contact lens cases and disposable contact lens packaging in your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: ["Some optometrists and vision centres may offer their own recycling programs"],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/contact-lens-case-160px.jpg"],
},
{
  category: "Diapers",
  keywords: ["diaper"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put soiled diapers and diaper liners in your black cart as garbage",
      bin: "Garbage",
    },
  },
  moreInfo: ["Double bag and tie used diapers for disposal in your black cart."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/dirty-diaper-160px.jpg"],
},
{
  category: "Gasoline or diesel fuel",
  keywords: ["gaslone", "gas", "diesel"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Safely dispose gas and diesel for free at a household hazardous waste drop-off location",
      bin: "Landfill",
    },
  },
  moreInfo: ["You can bring up to 20 litres of household chemicals per week."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/gasolinedieselfuel-160px.jpg"],
},
{
  category: "Doors and windows",
  keywords: ["door", "window"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Take broken or used doors and windows from a renovation or demolition to a City landfill.",
      bin: "Landfill",
    },
  },
  moreInfo: ["Some private companies may accept reusable building materials such as doors and windows."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/window-160px.jpg"],
},
{
  category: "Makeup and cosmetics",
  keywords: ["eyeshadow palettes","lipstick and lip gloss","mascara tubes","eyeliner", "brow pencils","Makeup brushes"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put old and used makeup cases, tubes and cosmetics containers into your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/makeup-cosmetics-160px.jpg"],
},
{
  category: "Pet hair, fur and feathers",
  keywords: ["pet hair", "fur", "feathers"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put pet hair, fur and feathers in a certified compostable bag or paper bag. Place the tied up/rolled up bag in your green cart for composting.",
      bin: "Compost",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/pet-hair-160px.jpg"],
},
{
  category: "Fireworks",
  keywords: ["fireworks"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Contact the Calgary Police Service at (403) 266-1234 for safe disposal.​​",
      bin: "",
    },
  },
  moreInfo: ["O​​nly trained and certified professionals with a fireworks permit are allowed to ignite or fire fireworks within the city of Calgary."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/fireworksammunition-fireworks-160px.jpg"],
},
{
  category: "Flowers",
  keywords: ["flower"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put flowers in your green cart for composting.",
      bin: "Compost",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/flowers-160px.jpg"],
},
{
  category: "Fruit",
  keywords: ["apples", "oranges", "mango", "banana", "blackberry", "grapefruit", "dragonfruit", "starfruit", "lemon", "limes", "blueberry", "pomegranate", "durian", "cherries", "plums", "raspberry", "strawberry", "juniper", "cranberry", "fruit", "fruit peel", "fruit core", "fruit seeds"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put all types of fruit (raw or cooked) into your green cart for composting.",
      bin: "Compost",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/fruit-peels-160px.jpg"],
},
{
  category: "Glow sticks",
  keywords: ["glow stick"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put glow sticks into your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/glow-sticks-160px.jpg"],
},
{
  category: "Street sweepings",
  keywords: ["gravel", "street sweeping", "dust", "rocks", "debris"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Put street sweepings such as gravel, dust, rocks and other debris into your black cart as garbage.",
      bin: "Garbage",
    },
  },
  moreInfo: ["Make sure it is under the 20kg"],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/gravel-rocks-305px.jpg"],
},
{
  category: "Chemicals – Health care",
  keywords: ["hydrogen peroxide", "rubbing alcohol", "hazard symbol"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Safely dispose personal care chemicals for free at a household hazardous waste drop-off site",
      bin: "Landfill",
    },
  },
  moreInfo: ["You can bring up to 20 litres of household chemicals per week."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/hydrogen-peroxide-160px.jpg"],
},
{
  category: "Chemicals - Gardening",
  keywords: ["herbicide","fertilizer","insecticides","pesticides"],
  instruction: {
    heading1: "​",
    body1: {
      condition: "Safely dispose chemicals used to control weeds, pests and other outdoor nuisances, for free at a household hazardous waste drop-off site",
      bin: "Landfill",
    },
  },
  moreInfo: ["You can bring up to 20 litres of household chemicals per week."],
  votes: 0,
  image: ["https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householdhazardouswaste-gardening-160px.jpg"],
},
{
  category: "Fibreglass insulation",
  keywords: ["fibreglass", "insulation"],
  instruction: {
    heading1: "Small quantities of insulation​",
    body1: {
      condition: "Put small amounts of fibreglass insulation in your black cart as garbage.",
      bin: "Garbage",
    },
    heading2: "Large quantities of insulation​",
    body2: {
      condition: "Take large loads of fibreglass insulation to a City landfill.",
      bin: "Landfill",
    },
  },
  moreInfo: [""],
  votes: 0,
  image: [""],
},

// {
//     category: "",
//     keywords: [""],
//     instruction: {
//       heading1: "​",
//       body1: {
//         condition: "",
//         bin: "",
//       },
//     },
//     moreInfo: [""],
//     votes: 0,
//     image: [""],
//   },
];

// heading2: "",
//       body2: {
//         condition:
//           "",
//         bin: "",
//       },

export default disposeData;
