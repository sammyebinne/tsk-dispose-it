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
    keywords: ["salad container", "sandwich wedge container"],
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
    keywords: ["salad kit container"],
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
    keywords: ["shredded cheese bag", "stand up pouch"],
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
    keywords: ["sidewalk chalk"],
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
        bin: "",
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
    keywords: ["slurpee cup"],
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
    keywords: ["smartwatch"],
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
    keywords: ["sofa", "chair", "table", "furniture"],
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
    keywords: ["soup"],
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
    keywords: ["soup cup - paper"],
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
    category: "",
    keywords: [""],
    instruction: {
      heading1: "​",
      body1: {
        condition: "",
        bin: "",
      },
    },
    moreInfo: [""],
    votes: 0,
    image: [""],
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
    moreInfo: [""],
    votes: 0,
    image: [""],
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
    moreInfo: [""],
    votes: 0,
    image: [""],
  },
];

// heading2: "",
//       body2: {
//         condition:
//           "",
//         bin: "",
//       },
