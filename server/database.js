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
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/hamburger-paper-wrapper-160px.jpg",
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
    moreInfo:
      "There will be a refrigerant removal surcharge (even if the refrigerant has been removed) and weight charges. Some private companies may accept or buy appliances. Refer to your city's Recycling Hotline for opportunities.",
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
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/foam-meat-tray-160px.jpg",
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
    moreInfo:
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Do NOT put power tools in your blue cart as these items can damage the equipment at the recycling facility.",
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
    moreInfo:
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    votes: 0,
  },
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
    moreInfo:
      "This includes scrubbers, scrubbing pads, cleaning erasers and steel wool pads.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sponges-160px.jpg",
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
    moreInfo: "Reuse fasteners where possible.",
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
    moreInfo:
      "Safety seals are often put on containers to prevent them from being opened. This includes mouthwash bottles, pop bottles, medicine, pill bottles and more.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-safety-seal-160px.jpg",
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
    moreInfo: "Remove all vegetable stickers before composting.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/corn-on-the-cob-160px.jpg",
  },
  {
    category: "Plastic takeout food containers",
    keywords: ["salad container", "sandwich wedge container"],
    instruction: {
      heading1: "Plastic takeout food containers​",
      body1: {
        condition:
          "Recycle plastic takeout food containers marked with recycling symbol 1-7. Remove any remaining food and rinse the container before recycling.",
        bin: "Recycling",
      },
    },
    moreInfo:
      "This includes sandwich wedge containers, deli containers, salad kit containers, and dessert cups.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-container-160px.jpg",
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
    moreInfo:
      "Soak up runny condiments with newspaper or used paper towels/napkins.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/ketchup-condiments-160px.jpg",
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
    moreInfo:
      "Make sure the containers are rinsed out before recycling. Put lids in the black cart as garbage.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/salad-dressing-160px.jpg",
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
    moreInfo:
      "This includes rigid and crinkly bags, even if it has a recycling number on it.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-grape-bag-160px.jpg",
  },
  {
    category: "Salad kit containers",
    keywords: ["salad kit container"],
    instruction: {
      heading1: "​Salad kit containers",
      body1: {
        condition:
          "Recycle salad kit containers and produce containers with the recycling symbol 1-7",
        bin: "Recycling",
      },
    },
    moreInfo:
      "These containers are often used to hold produce such as lettuce, strawberries, grapes and more.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/salad-container-160px.jpg",
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
    moreInfo:
      "Loose spice flakes must be put in a certified compostable bag or paper bag and tied closed/rolled closed before composting.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/spice-160px.jpg",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sand-160px.jpg",
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
    moreInfo:
      "This includes portable electronic air tools as well as mounted, work bench or floor power tools. If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
    votes: 0,
    image:
      "https://www.calgary.ca/uep/wrs/what-goes-where/power-tools/_jcr_content/root/maincontentpar/responsivegrid/grid/column-0-r0/grid_layout8261/column-1-r0/image.img.jpeg/1612282998905/householditems-tools.jpeg",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sandpaper-305px.jpg",
  },
  {
    category: "Cookie, dessert and sandwich bags",
    keywords: [
      "sandwich bag - paper",
      "paper sandwich bag",
      "cookie bag",
      "paper sandwich bags",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tim-horton-bag-160px.jpg",
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
    moreInfo:
      "Bundle clean bags into a single plastic bag (also one that stretches). Tie the bundled bag closed by tying handles together twice or knotting bag at top. Do not use elastics or twist ties. Remove stickers and labels off the bags where possible. If some of the sticker is left behind, that’s ok. Tip: Hang a bag off a hook/door handle and fill up with plastic bags as you finish using them. Once full, double-knot bag closed for recycling. Bundling your bags into one bag allows workers to separate them for recycling. Loose plastic bags fly around, get stuck in other quality recyclables and jam equipment at the recycling facility.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastics-bags-160px.jpg",
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
    moreInfo:
      "These packs have a reseable top with a harder plastic bottom. They are commonly used for deli meat and cheese slices.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/resealable-deli-meat-pack-160px.jpg",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/subway-wrapper-160px.jpg",
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
    moreInfo:
      "Wrap soiled items in toilet paper or put in a garbage bag before disposing. Never flush sanitary products down the toilet as it can harm drainage pipes and the environment.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/tampon-160px.jpg",
  },
  {
    category: "How do I dispose of plastic film?",
    keywords: [
      "saran wrap",
      "plastic film",
      "cling wrap",
      "glad stretch wrap",
      "bubble wrap",
    ],
    instruction: {
      heading1: "​How do I dispose of plastic film?",
      body1: {
        condition:
          "Recycle clean, stretchy plastic wrap, bubble wrap and other plastic film.",
        bin: "Recycling",
      },
    },
    moreInfo:
      "Bundle plastic film in a see-through plastic bag (one that stretches) and tie the handles closed. Put plastic bags that don't stretch, such as cereal or cracker bags, in your black cart as garbage.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/plastic-film-160px.jpg",
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
    moreInfo:
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Some restrictions apply. For full details, see Electronics Recycling program. Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
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
    moreInfo:
      "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Some restrictions apply. For full details, see Electronics Recycling program. Delete all personal information from your cell phone before recycling it. Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/cell-phones.jpg",
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
    ],
    instruction: {
      heading1: "​Sauces, dips and gravy",
      body1: {
        condition:
          "Put all sauces, dips and gravy into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo:
      "Soak up runny sauces with newspaper or used paper towels/napkins.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sauce-dip-160px.jpg",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/chicken-bones-160px.jpg",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/sausage-casing-160px.jpg",
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
    moreInfo:
      "If you are a business with untreated wood to dispose of, see our Business Waste resources for options.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/wood-untreatedwood-160px.jpg",
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
    ],
    instruction: {
      heading1: "Shellfish and seafood​",
      body1: {
        condition:
          "Put all shellfish, seafood and shells into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/crab-160px.jpg",
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
    moreInfo:
      "Some restrictions apply. For full details, see Electronics Recycling program. If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Clear all personal information from electronics prior to dropping off (e.g. wipe hard drives, clear SIM cards etc.) Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
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
    moreInfo:
      "Package glass items and knives safely by putting them into a puncture-resistant, non-breakable container (e.g. plastic tub, plastic pail, laundry detergent container, etc.) Or wrap in two layers of paper and place in a tied bag. Labels as 'sharps' with a permanent marker and place in your black cart.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/householditems-cookware-160px.jpg",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/yarn-160px.jpg",
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
    moreInfo:
      "Remove oil and gas from generators before recycling. All fluids must be drained from enginer and transmission before recycling car parts. Chain link fence must be in rolls.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/metal-disc-brakes-160px.jpg",
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
    moreInfo: "",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/hammer-160px.jpg",
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
      moreInfo:
        "If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Some restrictions apply. For full details, see Electronics Recycling program. Clear all personal information from electronics prior to dropping off (e.g. remove camera memory cards etc.) Do NOT put electronics in your blue cart as these items can damage equipment at the recycling facility. London Drugs locations in Calgary will also accept cameras for recycling.",
      votes: 0,
      image:
        "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/digital-camera-160px.jpg",
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
    ],
    instruction: {
      heading1: "​Nuts, seeds, and shells",
      body1: {
        condition:
          "Put all nuts, seeds and shells into your green cart for composting.",
        bin: "Compost",
      },
    },
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/nut-shells-160px.jpg",
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
    moreInfo:
      "Some restrictions apply. For full details, see Electronics Recycling program. If you take electronics to a landfill and bring other garbage in your load, landfill charges will apply. Clear all personal information from electronics prior to dropping off (e.g. wipe your hard drives, clear SIM cards etc.) Do NOT put electronics in your blue cart as these items can damage the equipment at the recycling facility.",
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
    moreInfo:
      "Rinse out containers before recycling. Remove any hand pumps and put in the garbage.",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/shampoo-bottle-160px.jpg",
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
    moreInfo: "",
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
    moreInfo: "",
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/aerosol-spray-160px.jpg",
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
    moreInfo:
      'Package unusable or broken razors safely by putting the pieces into a puncture-resistant, non-breakable, sealed container (e.g. plastic bleach bottle, laundry detergent bottle, plastic pail with lid). Or wrap the razor pieces in two layers of paper, put in a bag and tie closed. Label as "sharps" with a permanent marker and place in your black cart as garbage.',
    votes: 0,
    image:
      "https://www.calgary.ca/content/dam/www/uep/wrs/publishingimages/what-goes-where/items/shaving-razor-160px.jpg",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
  {
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: "",
    votes: 0,
    image: "",
  },
];

// heading2: "",
//       body2: {
//         condition:
//           "",
//         bin: "",
//       },
