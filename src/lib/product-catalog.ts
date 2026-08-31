export type ProductCatalogItem = {
  id: string;
  name: string;
  categoryLabel: string;
  image: {
    src: string;
    mobileSrc: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ProductCategory = {
  id: string;
  routeSlug: string;
  path: string;
  number: string;
  label: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  products: readonly ProductCatalogItem[];
};

export const productCategories = [
  {
  "id": "mesh-decks",
  "routeSlug": "pallet-rack-wire-mesh-decking",
  "path": "/products/pallet-rack-wire-mesh-decking.php",
  "number": "01",
  "label": "STORAGE & LOGISTICS",
  "title": "Wire Mesh Decks and Wire Containers for Storage Systems",
  "description": "Heavy-duty wire mesh decking, pallet rack shelves, collapsible wire containers and mobile storage solutions manufactured for warehouse storage, industrial racking and material handling.",
  "seoTitle": "Wire Mesh Decking & Storage Containers",
  "seoDescription": "Explore pallet rack wire mesh decking, collapsible wire containers and industrial storage solutions manufactured in Egypt by Abdelhamid.",
  "products": [
    {
      "id": "warehouse-pallet-rack-wire-mesh-decking-project-01",
      "name": "Warehouse Pallet Rack Wire Mesh Decking Project 01",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/warehouse-pallet-rack-wire-mesh-decking-project-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/warehouse-pallet-rack-wire-mesh-decking-project-01-mobile.webp",
        "alt": "Warehouse pallet rack wire mesh decking project",
        "width": 1600,
        "height": 2138
      }
    },
    {
      "id": "warehouse-pallet-rack-wire-mesh-decking-project-03",
      "name": "Warehouse Pallet Rack Wire Mesh Decking Project 03",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/warehouse-pallet-rack-wire-mesh-decking-project-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/warehouse-pallet-rack-wire-mesh-decking-project-03-mobile.webp",
        "alt": "Warehouse pallet rack wire mesh decking project",
        "width": 1600,
        "height": 2133
      }
    },
    {
      "id": "warehouse-pallet-rack-wire-mesh-decking-project-02",
      "name": "Warehouse Pallet Rack Wire Mesh Decking Project 02",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/warehouse-pallet-rack-wire-mesh-decking-project-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/warehouse-pallet-rack-wire-mesh-decking-project-02-mobile.webp",
        "alt": "Warehouse pallet rack wire mesh decking project",
        "width": 1600,
        "height": 2669
      }
    },
    {
      "id": "pallet-rack-wire-mesh-deck-panel",
      "name": "Pallet Rack Wire Mesh Deck Panel",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-deck-panel-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-deck-panel-mobile.webp",
        "alt": "Galvanized pallet rack wire mesh deck panel with welded support channels",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "pallet-rack-wire-mesh-decking",
      "name": "Pallet Rack Wire Mesh Decking",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-decking-installed-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-decking-installed-mobile.webp",
        "alt": "Wire mesh decking installed on pallet rack beams for industrial warehouse storage",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-mesh-deck-support-channel",
      "name": "Wire Mesh Deck Support Channel",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/wire-mesh-deck-support-channel-detail-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/wire-mesh-deck-support-channel-detail-mobile.webp",
        "alt": "Close-up of pallet rack wire mesh deck support channel and beam connection",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "pallet-rack-wire-mesh-deck-support-channel",
      "name": "Pallet Rack Wire Mesh Deck Support Channel",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-deck-support-channel-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-deck-support-channel-mobile.webp",
        "alt": "Pallet rack wire mesh deck with reinforced support channel for warehouse storage systems",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "pallet-rack-wire-mesh-deck-support-channel-detail",
      "name": "Pallet Rack Wire Mesh Deck Support Channel Detail",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-deck-support-channel-detail-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/pallet-rack-wire-mesh-deck-support-channel-detail-mobile.webp",
        "alt": "Close-up of pallet rack wire mesh decking showing reinforced support channel construction",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "collapsible-wire-mesh-pallet-container",
      "name": "Collapsible Wire Mesh Pallet Container",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/collapsible-wire-mesh-pallet-container-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/collapsible-wire-mesh-pallet-container-mobile.webp",
        "alt": "Collapsible galvanized wire mesh pallet container for warehouse storage and material handling",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-mesh-container-with-drop-gate",
      "name": "Wire Mesh Container with Drop Gate",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/wire-mesh-container-with-drop-gate-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/wire-mesh-container-with-drop-gate-mobile.webp",
        "alt": "Galvanized wire mesh storage container with front drop gate for warehouse material handling",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "mobile-wire-mesh-container-with-casters",
      "name": "Mobile Wire Mesh Container with Casters",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/mobile-wire-mesh-container-with-casters-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/mobile-wire-mesh-container-with-casters-mobile.webp",
        "alt": "Mobile galvanized wire mesh container with caster wheels for warehouse storage and transport",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "multi-tier-wire-roll-container-trolley",
      "name": "Multi-Tier Wire Roll Container Trolley",
      "categoryLabel": "STORAGE & LOGISTICS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/multi-tier-wire-roll-container-trolley-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20mesh%20decks%20and%20wire%20containers%20for%20storage%20systems/multi-tier-wire-roll-container-trolley-mobile.webp",
        "alt": "Multi-tier wire roll container trolley with shelves and caster wheels for warehouse material handling",
        "width": 1600,
        "height": 2133
      }
    }
  ]
}
  ,
  {
  "id": "rest-various-products",
  "routeSlug": "specialized-wire-mesh-products",
  "path": "/products/specialized-wire-mesh-products.php",
  "number": "02",
  "label": "VARIOUS PRODUCTS",
  "title": "Specialized Wire Mesh Products",
  "description": "Specialized wire mesh products including material handling carts, cages, roll containers, kennel systems and custom wire fencing solutions.",
  "seoTitle": "Specialized Industrial Wire Mesh Products",
  "seoDescription": "Explore custom wire mesh cages, roll containers, material-handling carts and fabricated industrial wire products from Abdelhamid.",
  "products": [
    {
      "id": "mobile-wire-mesh-material-handling-cart",
      "name": "Mobile Wire Mesh Material Handling Cart",
      "categoryLabel": "VARIOUS PRODUCTS",
      "image": {
        "src": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/mobile-wire-mesh-material-handling-cart-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/mobile-wire-mesh-material-handling-cart-mobile.webp",
        "alt": "Mobile wire mesh material handling cart with caster wheels for industrial transport and storage",
        "width": 1600,
        "height": 1999
      }
    },
    {
      "id": "double-compartment-wire-dog-kennel",
      "name": "Double Compartment Wire Dog Kennel",
      "categoryLabel": "VARIOUS PRODUCTS",
      "image": {
        "src": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/double-compartment-wire-dog-kennel-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/double-compartment-wire-dog-kennel-mobile.webp",
        "alt": "Heavy-duty double compartment wire dog kennel with metal frame and removable trays",
        "width": 1600,
        "height": 1999
      }
    },
    {
      "id": "padel-court-wire-mesh-fence-system",
      "name": "Padel Court Wire Mesh Fence System",
      "categoryLabel": "VARIOUS PRODUCTS",
      "image": {
        "src": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/padel-court-wire-mesh-fence-system-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/padel-court-wire-mesh-fence-system-mobile.webp",
        "alt": "Black wire mesh fencing system for enclosed padel courts with integrated lighting posts",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "mobile-wire-roll-container-trolley",
      "name": "Mobile Wire Roll Container Trolley",
      "categoryLabel": "VARIOUS PRODUCTS",
      "image": {
        "src": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/mobile-wire-roll-container-trolley-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/mobile-wire-roll-container-trolley-mobile.webp",
        "alt": "Mobile wire roll container trolley with open front and caster wheels for warehouse material handling",
        "width": 1600,
        "height": 1999
      }
    },
    {
      "id": "enclosed-wire-mesh-cage",
      "name": "Enclosed Wire Mesh Cage",
      "categoryLabel": "VARIOUS PRODUCTS",
      "image": {
        "src": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/enclosed-wire-mesh-cage-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/specialized%20wire%20mesh%20products/enclosed-wire-mesh-cage-mobile.webp",
        "alt": "Heavy-duty enclosed wire mesh cage for secure industrial material handling",
        "width": 1600,
        "height": 1999
      }
    }
  ]
}
  ,
  {
  "id": "shopping-baskets",
  "routeSlug": "retail-display-racks-shopping-baskets",
  "path": "/products/retail-display-racks-shopping-baskets.php",
  "number": "03",
  "label": "RETAIL & DISPLAY",
  "title": "Shopping Baskets and Display Articles for Shops and Supermarkets",
  "description": "Wire shopping carts, baskets, display racks, hooks and merchandising accessories manufactured for supermarkets, shops and modern retail environments.",
  "seoTitle": "Retail Display Racks & Shopping Baskets",
  "seoDescription": "Explore wire shopping baskets, retail display racks, gridwall panels, hooks and supermarket display systems manufactured by Abdelhamid.",
  "products": [
    {
      "id": "wire-shopping-cart",
      "name": "Wire Shopping Cart",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-shopping-cart-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-shopping-cart-mobile.webp",
        "alt": "Metal wire shopping cart for supermarkets, grocery stores and retail environments",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-shopping-basket-with-handles",
      "name": "Wire Shopping Basket with Handles",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-shopping-basket-with-handles-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-shopping-basket-with-handles-mobile.webp",
        "alt": "Metal wire shopping basket with carrying handles for supermarkets and retail stores",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "freestanding-wire-display-rack",
      "name": "Freestanding Wire Display Rack",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/freestanding-wire-display-rack-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/freestanding-wire-display-rack-mobile.webp",
        "alt": "Freestanding wire display rack for retail stores, supermarkets and product merchandising",
        "width": 1600,
        "height": 2400
      }
    },
    {
      "id": "wire-gridwall-display-panel",
      "name": "Wire Gridwall Display Panel",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-gridwall-display-panel-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-gridwall-display-panel-mobile.webp",
        "alt": "Wire gridwall display panel for hanging retail merchandise and store accessories",
        "width": 1600,
        "height": 2400
      }
    },
    {
      "id": "tall-wire-display-stand",
      "name": "Tall Wire Display Stand",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/tall-wire-display-stand-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/tall-wire-display-stand-mobile.webp",
        "alt": "Tall freestanding wire display stand for retail product merchandising",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-retail-display-basket",
      "name": "Wire Retail Display Basket",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-retail-display-basket-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-retail-display-basket-mobile.webp",
        "alt": "Wire retail display basket for supermarket shelves and merchandise presentation",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-shopping-basket",
      "name": "Wire Shopping Basket",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-shopping-basket-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-shopping-basket-mobile.webp",
        "alt": "Metal wire shopping basket for supermarkets, shops and retail environments",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "double-prong-retail-display-hook",
      "name": "Double-Prong Retail Display Hook",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/double-prong-retail-display-hook-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/double-prong-retail-display-hook-mobile.webp",
        "alt": "Double-prong wire display hook for hanging retail merchandise on display panels",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "circular-retail-display-hook",
      "name": "Circular Retail Display Hook",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/circular-retail-display-hook-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/circular-retail-display-hook-mobile.webp",
        "alt": "Circular wire retail display hook for hanging and presenting store merchandise",
        "width": 1600,
        "height": 533
      }
    },
    {
      "id": "straight-retail-display-hook",
      "name": "Straight Retail Display Hook",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/straight-retail-display-hook-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/straight-retail-display-hook-mobile.webp",
        "alt": "Straight wire retail display hook for shop and supermarket merchandising systems",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-bottle-display-rack",
      "name": "Wire Bottle Display Rack",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-bottle-display-rack-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-bottle-display-rack-mobile.webp",
        "alt": "Wire bottle display rack for organized retail presentation of bottled products",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "wire-clothes-hanger",
      "name": "Wire Clothes Hanger",
      "categoryLabel": "RETAIL & DISPLAY",
      "image": {
        "src": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-clothes-hanger-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/shopping%20baskets%20and%20display%20articles%20for%20shops%20and%20supermarket/wire-clothes-hanger-mobile.webp",
        "alt": "Metal wire clothes hanger for garment display in retail stores",
        "width": 1600,
        "height": 1200
      }
    }
  ]
}
  ,
  {
  "id": "wire-products",
  "routeSlug": "custom-industrial-wire-products",
  "path": "/products/custom-industrial-wire-products.php",
  "number": "04",
  "label": "WIRE MANUFACTURING",
  "title": "Various Wire Products",
  "description": "Precision wire products including grill baskets, formed wire components, display racks, wire furniture parts and automotive seat wire frames manufactured for diverse industrial applications.",
  "seoTitle": "Custom Industrial Wire Products",
  "seoDescription": "Explore custom formed wire products, baskets, guards, furniture frames and automotive seat wire components manufactured by Abdelhamid.",
  "products": [
    {
      "id": "double-wire-grill-basket",
      "name": "Double Wire Grill Basket",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/double-wire-grill-basket-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/double-wire-grill-basket-mobile.webp",
        "alt": "Double wire grill basket with handle for food grilling and cooking applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-grill-basket",
      "name": "Wire Grill Basket",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/wire-grill-basket-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/wire-grill-basket-mobile.webp",
        "alt": "Wire grill basket with handle for grilling food and general cooking applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "hanging-wire-utility-basket",
      "name": "Hanging Wire Utility Basket",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/hanging-wire-utility-basket-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/hanging-wire-utility-basket-mobile.webp",
        "alt": "Hanging wire utility basket for organized storage and general industrial or retail applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "custom-formed-wire-bracket",
      "name": "Custom Formed Wire Bracket",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/custom-formed-wire-bracket-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/custom-formed-wire-bracket-mobile.webp",
        "alt": "Custom formed wire bracket manufactured for specialized industrial applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "formed-wire-s-hook",
      "name": "Formed Wire S-Hook",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/formed-wire-s-hook-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/formed-wire-s-hook-mobile.webp",
        "alt": "Formed metal wire S-hook for hanging, securing and industrial support applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-display-shelf-rack",
      "name": "Wire Display Shelf Rack",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/wire-display-shelf-rack-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/wire-display-shelf-rack-mobile.webp",
        "alt": "Wire display shelf rack for organized product presentation and retail merchandising",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "cylindrical-wire-guard",
      "name": "Cylindrical Wire Guard",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/cylindrical-wire-guard-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/cylindrical-wire-guard-mobile.webp",
        "alt": "Cylindrical wire guard manufactured for protective and specialized industrial applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-frame-folding-chair",
      "name": "Wire Frame Folding Chair",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/wire-frame-folding-chair-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/wire-frame-folding-chair-mobile.webp",
        "alt": "Metal wire frame folding chair manufactured from formed and welded wire components",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-frame-chair",
      "name": "Wire Frame Chair",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/wire-frame-chair-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/wire-frame-chair-mobile.webp",
        "alt": "Metal wire frame chair manufactured from formed wire and welded steel components",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "automotive-seat-wire-frame-01",
      "name": "Automotive Seat Wire Frame 01",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-01-mobile.webp",
        "alt": "Automotive seat wire frame component manufactured for car seat structure and support systems",
        "width": 1600,
        "height": 900
      }
    },
    {
      "id": "automotive-seat-wire-frame-02",
      "name": "Automotive Seat Wire Frame 02",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-02-mobile.webp",
        "alt": "Automotive seat wire frame component for vehicle seat support and internal structure",
        "width": 1600,
        "height": 900
      }
    },
    {
      "id": "automotive-seat-wire-frame-03",
      "name": "Automotive Seat Wire Frame 03",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-03-mobile.webp",
        "alt": "Formed automotive seat wire frame component for car seat structural support",
        "width": 1600,
        "height": 900
      }
    },
    {
      "id": "automotive-seat-wire-frame-04",
      "name": "Automotive Seat Wire Frame 04",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-04-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-04-mobile.webp",
        "alt": "Automotive seat wire frame component manufactured for vehicle seating applications",
        "width": 1600,
        "height": 1999
      }
    },
    {
      "id": "automotive-seat-wire-frame-05",
      "name": "Automotive Seat Wire Frame 05",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-05-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-05-mobile.webp",
        "alt": "Custom formed automotive seat wire frame component for car seat manufacturing",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "automotive-seat-wire-frame-06",
      "name": "Automotive Seat Wire Frame 06",
      "categoryLabel": "WIRE MANUFACTURING",
      "image": {
        "src": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-06-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/various%20wire%20products/automotive-seat-wire-frame-06-mobile.webp",
        "alt": "Automotive seat wire frame component for vehicle seat assembly and structural support",
        "width": 1600,
        "height": 900
      }
    }
  ]
}
  ,
  {
  "id": "pan-supports",
  "routeSlug": "gas-cooker-pan-supports",
  "path": "/products/gas-cooker-pan-supports.php",
  "number": "05",
  "label": "COOKER COMPONENTS",
  "title": "Pan Supports for Gas Cookers",
  "description": "Precision-formed pan supports manufactured for gas cookers, providing stable cookware positioning, durability and reliable burner support.",
  "seoTitle": "Gas Cooker Pan Supports",
  "seoDescription": "Explore durable formed-wire pan supports for gas cookers and household cooking appliances, manufactured in Egypt by Abdelhamid.",
  "products": [
    {
      "id": "pan-supports-gas-cooker-pan-support-01",
      "name": "Gas Cooker Pan Support 01",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-01-mobile.webp",
        "alt": "Rectangular metal pan support for gas cooker burners and stable cookware positioning",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "pan-supports-gas-cooker-pan-support-02",
      "name": "Gas Cooker Pan Support 02",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-02-mobile.webp",
        "alt": "Rounded rectangular gas cooker pan support manufactured from formed metal wire",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-pan-support-03",
      "name": "Gas Cooker Pan Support 03",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-03-mobile.webp",
        "alt": "Heavy-duty gas cooker pan support with reinforced wire structure for cookware",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-pan-support-04",
      "name": "Gas Cooker Pan Support 04",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-04-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-04-mobile.webp",
        "alt": "Formed wire pan support for multi-burner gas cooker and household cooking appliances",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-pan-support-05",
      "name": "Gas Cooker Pan Support 05",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-05-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-05-mobile.webp",
        "alt": "Gas cooker pan support with shaped burner openings for stable cookware support",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-pan-support-06",
      "name": "Gas Cooker Pan Support 06",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-06-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-06-mobile.webp",
        "alt": "Reinforced rectangular wire pan support for gas cooker burner assemblies",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-pan-support-07",
      "name": "Gas Cooker Pan Support 07",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-07-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-07-mobile.webp",
        "alt": "Formed metal gas cooker pan support designed for household cooking appliances",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-pan-support-08",
      "name": "Gas Cooker Pan Support 08",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-08-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-08-mobile.webp",
        "alt": "Rectangular gas cooker pan support with welded wire construction for cookware stability",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-pan-support-09",
      "name": "Gas Cooker Pan Support 09",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-09-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/pan%20supports%20for%20gas%20cookers/gas-cooker-pan-support-09-mobile.webp",
        "alt": "Compact single-burner gas cooker pan support manufactured from formed metal wire",
        "width": 1600,
        "height": 1200
      }
    }
  ]
}
  ,
  {
  "id": "gas-cooker-shelves",
  "routeSlug": "gas-cooker-oven-wire-shelves",
  "path": "/products/gas-cooker-oven-wire-shelves.php",
  "number": "06",
  "label": "COOKER COMPONENTS",
  "title": "Wire Shelves for Gas Cookers",
  "description": "Wire shelves, oven racks, pan supports and formed wire components manufactured for gas cookers and household cooking appliances.",
  "seoTitle": "Gas Cooker & Oven Wire Shelves",
  "seoDescription": "Explore gas cooker and oven wire shelves, racks and support brackets manufactured for reliable household appliance applications.",
  "products": [
    {
      "id": "gas-cooker-wire-shelf-01",
      "name": "Gas Cooker Wire Shelf 01",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-01-mobile.webp",
        "alt": "Metal gas cooker wire shelf with formed supports for household cooking appliances",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-wire-shelf-02",
      "name": "Gas Cooker Wire Shelf 02",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-02-mobile.webp",
        "alt": "Chrome wire shelf for gas cookers and household oven cooking appliances",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-wire-shelf-03",
      "name": "Gas Cooker Wire Shelf 03",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-03-mobile.webp",
        "alt": "Formed metal wire shelf for gas cooker and oven interior support applications",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-wire-shelf-04",
      "name": "Gas Cooker Wire Shelf 04",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-04-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-04-mobile.webp",
        "alt": "Gas cooker wire rack with parallel supports for household cooking appliances",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-wire-shelf-05",
      "name": "Gas Cooker Wire Shelf 05",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-05-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-05-mobile.webp",
        "alt": "Rectangular wire shelf for gas cooker and oven rack applications",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-wire-shelf-06",
      "name": "Gas Cooker Wire Shelf 06",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-06-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-06-mobile.webp",
        "alt": "Metal oven wire rack manufactured for gas cookers and household cooking appliances",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-shelves-gas-cooker-pan-support-01",
      "name": "Gas Cooker Pan Support 01",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-pan-support-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-pan-support-01-mobile.webp",
        "alt": "Cross-shaped metal pan support for gas cooker burner and cookware support",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-shelves-gas-cooker-pan-support-02",
      "name": "Gas Cooker Pan Support 02",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-pan-support-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-pan-support-02-mobile.webp",
        "alt": "Formed metal gas cooker pan support for stable cookware positioning over burners",
        "width": 1600,
        "height": 900
      }
    },
    {
      "id": "gas-cooker-wire-support-bracket-01",
      "name": "Gas Cooker Wire Support Bracket 01",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-support-bracket-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-support-bracket-01-mobile.webp",
        "alt": "Formed wire support bracket manufactured for gas cooker component applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-wire-support-bracket-02",
      "name": "Gas Cooker Wire Support Bracket 02",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-support-bracket-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-support-bracket-02-mobile.webp",
        "alt": "Bent metal wire support bracket for gas cooker and household appliance assemblies",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-wire-support-bracket-03",
      "name": "Gas Cooker Wire Support Bracket 03",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-support-bracket-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-support-bracket-03-mobile.webp",
        "alt": "Custom formed wire support bracket for gas cooker internal component assemblies",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-wire-shelf-07",
      "name": "Gas Cooker Wire Shelf 07",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-07-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-07-mobile.webp",
        "alt": "Wide metal gas cooker wire shelf for oven and cooking appliance applications",
        "width": 1600,
        "height": 900
      }
    },
    {
      "id": "gas-cooker-wire-shelf-08",
      "name": "Gas Cooker Wire Shelf 08",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-08-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-08-mobile.webp",
        "alt": "Gas cooker oven wire rack with welded parallel wire construction",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-wire-shelf-09",
      "name": "Gas Cooker Wire Shelf 09",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-09-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-09-mobile.webp",
        "alt": "Rectangular gas cooker wire shelf manufactured for household oven applications",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-wire-shelf-10",
      "name": "Gas Cooker Wire Shelf 10",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-10-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-10-mobile.webp",
        "alt": "Welded wire oven shelf for gas cookers and household cooking appliances",
        "width": 1600,
        "height": 1067
      }
    },
    {
      "id": "gas-cooker-wire-shelf-11",
      "name": "Gas Cooker Wire Shelf 11",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-11-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-11-mobile.webp",
        "alt": "Formed gas cooker wire rack with rounded outer frame for oven applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "gas-cooker-wire-shelf-12",
      "name": "Gas Cooker Wire Shelf 12",
      "categoryLabel": "COOKER COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-12-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20for%20gas%20cookers/gas-cooker-wire-shelf-12-mobile.webp",
        "alt": "Metal gas cooker wire shelf with welded rack construction for cooking appliances",
        "width": 1600,
        "height": 1200
      }
    }
  ]
}
  ,
  {
  "id": "refrigerator-shelves",
  "routeSlug": "refrigerator-wire-shelves-baskets",
  "path": "/products/refrigerator-wire-shelves-baskets.php",
  "number": "07",
  "label": "APPLIANCE COMPONENTS",
  "title": "Wire Shelves and Baskets for Fridges and Refrigerators",
  "description": "Wire shelves and baskets manufactured for refrigerators and fridges, providing durable storage, organization and long-term appliance performance.",
  "seoTitle": "Refrigerator Wire Shelves & Baskets",
  "seoDescription": "Explore refrigerator wire shelves and baskets manufactured for durable food storage, organization and long-term appliance performance.",
  "products": [
    {
      "id": "refrigerator-wire-shelf-01",
      "name": "Refrigerator Wire Shelf 01",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-01-mobile.webp",
        "alt": "Formed metal refrigerator wire shelf for organized food storage and household appliance applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-shelf-02",
      "name": "Refrigerator Wire Shelf 02",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-02-mobile.webp",
        "alt": "Metal refrigerator wire shelf with formed edges for fridge storage and household appliance use",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-basket-01",
      "name": "Refrigerator Wire Basket 01",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-01-mobile.webp",
        "alt": "Metal refrigerator wire basket for organized fridge storage and household appliance applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-basket-02",
      "name": "Refrigerator Wire Basket 02",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-02-mobile.webp",
        "alt": "Formed wire refrigerator basket for food storage and internal fridge organization",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-basket-03",
      "name": "Refrigerator Wire Basket 03",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-03-mobile.webp",
        "alt": "Wide metal refrigerator wire basket for durable internal fridge storage and organization",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-basket-04",
      "name": "Refrigerator Wire Basket 04",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-04-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-basket-04-mobile.webp",
        "alt": "Compact refrigerator wire basket manufactured for household fridge storage applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-shelf-03",
      "name": "Refrigerator Wire Shelf 03",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-03-mobile.webp",
        "alt": "Shaped refrigerator wire shelf manufactured for internal fridge storage and appliance applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-shelf-04",
      "name": "Refrigerator Wire Shelf 04",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-04-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-04-mobile.webp",
        "alt": "Rectangular metal refrigerator wire shelf for household fridge storage and organization",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-shelf-05",
      "name": "Refrigerator Wire Shelf 05",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-05-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-05-mobile.webp",
        "alt": "Welded refrigerator wire shelf with parallel wire construction for fridge storage applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "refrigerator-wire-shelf-06",
      "name": "Refrigerator Wire Shelf 06",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-06-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20shelves%20and%20baskets%20for%20fridges%20and%20refrigerators/refrigerator-wire-shelf-06-mobile.webp",
        "alt": "Metal refrigerator wire shelf with reinforced wire construction for household appliance storage",
        "width": 1600,
        "height": 1200
      }
    }
  ]
}
  ,
  {
  "id": "cable-trays",
  "routeSlug": "industrial-wire-cable-trays",
  "path": "/products/industrial-wire-cable-trays.php",
  "number": "08",
  "label": "CABLE MANAGEMENT",
  "title": "Wire Cable Trays",
  "description": "Wire cable trays, straight sections and curved bends manufactured for safe, organized and efficient electrical cable routing and cable management.",
  "seoTitle": "Industrial Wire Cable Trays",
  "seoDescription": "Explore straight and curved industrial wire cable trays manufactured for safe, organized electrical cable routing and management.",
  "products": [
    {
      "id": "wire-cable-tray-90-bend-01",
      "name": "Wire Cable Tray 90° Bend 01",
      "categoryLabel": "CABLE MANAGEMENT",
      "image": {
        "src": "/assets/images/products/optimized/wire%20cable%20trays/wire-cable-tray-90-degree-bend-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20cable%20trays/wire-cable-tray-90-degree-bend-01-mobile.webp",
        "alt": "Galvanized wire cable tray 90-degree bend for routing electrical cables around corners",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "wire-cable-tray-90-bend-02",
      "name": "Wire Cable Tray 90° Bend 02",
      "categoryLabel": "CABLE MANAGEMENT",
      "image": {
        "src": "/assets/images/products/optimized/wire%20cable%20trays/wire-cable-tray-90-degree-bend-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20cable%20trays/wire-cable-tray-90-degree-bend-02-mobile.webp",
        "alt": "Curved wire cable tray 90-degree bend for organized industrial cable management",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "straight-wire-cable-tray",
      "name": "Straight Wire Cable Tray",
      "categoryLabel": "CABLE MANAGEMENT",
      "image": {
        "src": "/assets/images/products/optimized/wire%20cable%20trays/straight-wire-cable-tray-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20cable%20trays/straight-wire-cable-tray-mobile.webp",
        "alt": "Straight galvanized wire cable tray for electrical cable routing and industrial installations",
        "width": 1600,
        "height": 1200
      }
    }
  ]
}
  ,
  {
  "id": "dishwasher-racks",
  "routeSlug": "dishwasher-wire-racks",
  "path": "/products/dishwasher-wire-racks.php",
  "number": "09",
  "label": "APPLIANCE COMPONENTS",
  "title": "Wire Racks for Dishwashers",
  "description": "Precision-formed wire racks manufactured for dishwashers, providing durable loading support, organized dish placement and reliable appliance performance.",
  "seoTitle": "Dishwasher Wire Racks",
  "seoDescription": "Explore formed dishwasher wire racks with durable loading support for plates, dishes and kitchenware in household appliances.",
  "products": [
    {
      "id": "dishwasher-wire-rack-01",
      "name": "Dishwasher Wire Rack 01",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20racks%20for%20dish%20washers/dishwasher-wire-rack-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20racks%20for%20dish%20washers/dishwasher-wire-rack-01-mobile.webp",
        "alt": "Metal dishwasher wire rack with wheels and formed supports for organized dish loading",
        "width": 1600,
        "height": 1132
      }
    },
    {
      "id": "dishwasher-wire-rack-02",
      "name": "Dishwasher Wire Rack 02",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20racks%20for%20dish%20washers/dishwasher-wire-rack-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20racks%20for%20dish%20washers/dishwasher-wire-rack-02-mobile.webp",
        "alt": "Dishwasher wire rack with plate supports and roller wheels for household appliance use",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "dishwasher-wire-rack-03",
      "name": "Dishwasher Wire Rack 03",
      "categoryLabel": "APPLIANCE COMPONENTS",
      "image": {
        "src": "/assets/images/products/optimized/wire%20racks%20for%20dish%20washers/dishwasher-wire-rack-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/wire%20racks%20for%20dish%20washers/dishwasher-wire-rack-03-mobile.webp",
        "alt": "Formed metal dishwasher wire rack designed for dishes, plates and kitchenware organization",
        "width": 1600,
        "height": 1132
      }
    }
  ]
}
  ,
  {
  "id": "protection-screens",
  "routeSlug": "air-conditioner-fan-guards",
  "path": "/products/air-conditioner-fan-guards.php",
  "number": "10",
  "label": "AIR CONDITIONING",
  "title": "Protection Screens for Air Conditioning Units",
  "description": "Protective wire fan guards and screens manufactured for air-conditioning units and ventilation equipment, providing durable protection while maintaining airflow.",
  "seoTitle": "Air Conditioner Fan Guards & Screens",
  "seoDescription": "Explore air-conditioner fan guards and protection screens manufactured for reliable HVAC and ventilation equipment protection.",
  "products": [
    {
      "id": "air-conditioning-fan-guard-01",
      "name": "Air Conditioning Fan Guard 01",
      "categoryLabel": "AIR CONDITIONING",
      "image": {
        "src": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-01-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-01-mobile.webp",
        "alt": "Circular metal fan guard for air conditioning units and ventilation equipment",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "air-conditioning-fan-guard-02",
      "name": "Air Conditioning Fan Guard 02",
      "categoryLabel": "AIR CONDITIONING",
      "image": {
        "src": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-02-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-02-mobile.webp",
        "alt": "Concentric wire fan guard for protecting air conditioning unit fan assemblies",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "air-conditioning-fan-guard-03",
      "name": "Air Conditioning Fan Guard 03",
      "categoryLabel": "AIR CONDITIONING",
      "image": {
        "src": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-03-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-03-mobile.webp",
        "alt": "Raised circular wire fan guard for air conditioning unit and ventilation equipment protection",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "air-conditioning-fan-guard-04",
      "name": "Air Conditioning Fan Guard 04",
      "categoryLabel": "AIR CONDITIONING",
      "image": {
        "src": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-04-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-fan-guard-04-mobile.webp",
        "alt": "Round wire protection grille for air conditioning and ventilation fan applications",
        "width": 1600,
        "height": 1200
      }
    },
    {
      "id": "air-conditioning-unit-protection-screen",
      "name": "Air Conditioning Unit Protection Screen",
      "categoryLabel": "AIR CONDITIONING",
      "image": {
        "src": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-unit-protection-screen-desktop.webp",
        "mobileSrc": "/assets/images/products/optimized/protection%20screens%20for%20air%20conditioning%20unit/air-conditioning-unit-protection-screen-mobile.webp",
        "alt": "Rectangular protection screen with circular fan opening for air conditioning units",
        "width": 1600,
        "height": 1200
      }
    }
  ]
},
] as const satisfies readonly ProductCategory[];

export function getProductCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.routeSlug === slug);
}
