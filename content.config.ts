// Rebrand = edit this file + swap images. Image paths: set `img` on a project (e.g. "/images/tangra-3bhk.jpg").
export const site = {
  name: "Naina Home Decore", bn: "নয়না হোম ডেকোর", initials: "NH",
  tagline: "Flats, houses and shopfronts across Kolkata, designed and fitted by one team.",
  address: "14/13 Asgar Mistry Ln, Seal Lane, Tangra, Kolkata 700046",
  phone: "+918240708314", phoneDisplay: "+91 82407 08314",
  email: "hello@nainahomedecore.in", hours: "Mon–Sat, 10 am to 7 pm",
  rating: 4.6, reviews: 44,
  colors: { ground: "#DCD2C3", paper: "#EDE6DA", ink: "#1B140F", veneer: "#96602F", cove: "#E3A13C", marble: "#43302A" },
};
export const wa = (msg: string) => `https://wa.me/${site.phone.replace("+", "")}?text=${encodeURIComponent(msg)}`;
export type Project = { slug: string; title: string; area: string; kind: "Residential" | "Commercial"; room: string; sqft: number; scope: string; materials: string[]; brief: string; tones: [string, string, string]; img?: string };
export const projects: Project[] = [
  { slug: "tangra-dining-kitchen", title: "Dining and kitchen, Tangra", area: "Tangra", kind: "Residential", room: "Kitchen & dining", sqft: 320, scope: "Cove-lit tray ceiling, walnut-veneer shutters, stone backsplash, loose furniture", materials: ["Walnut veneer", "Brown marble", "Brass", "Limewash"], brief: "An open kitchen and dining room that needed one calm material story and light that works at night.", tones: ["#B9A58C", "#6B4428", "#2E211A"] },
  { slug: "salt-lake-2bhk", title: "2BHK full home, Salt Lake", area: "Salt Lake", kind: "Residential", room: "Full home", sqft: 920, scope: "Modular kitchen, wardrobes, false ceiling, lighting, curtains", materials: ["Laminate", "Fluted ply", "Cane", "Oak tone vinyl"], brief: "A young family's first flat, planned around storage and a study corner.", tones: ["#D5C7B0", "#8A7A62", "#3B3027"] },
  { slug: "ballygunge-living", title: "Living room, Ballygunge", area: "Ballygunge", kind: "Residential", room: "Living room", sqft: 380, scope: "TV wall, seating, console, lighting, soft furnishing", materials: ["Teak veneer", "Boucle", "Travertine tile"], brief: "An older flat opened up so the living room finally gets the balcony light.", tones: ["#C9B9A0", "#7A5A3C", "#26201B"] },
  { slug: "new-town-3bhk", title: "3BHK full home, New Town", area: "New Town", kind: "Residential", room: "Full home", sqft: 1280, scope: "Turnkey: civil changes, joinery, ceiling, lighting, furnishing", materials: ["Marine ply", "Quartz", "Wallpaper", "Brass"], brief: "A turnkey handover on a fixed timeline, with every room signed off before work began.", tones: ["#BFAE97", "#5C4636", "#2A211B"] },
  { slug: "park-street-cafe", title: "Café, Park Street", area: "Park Street", kind: "Commercial", room: "Café", sqft: 640, scope: "Layout, counter, seating, signage, lighting", materials: ["Terrazzo", "Reeded glass", "Powder-coated steel"], brief: "A narrow café planned so staff and guests never cross paths at the counter.", tones: ["#CDBFA8", "#8B4A2E", "#1F1814"] },
  { slug: "tangra-showroom", title: "Showroom, Tangra", area: "Tangra", kind: "Commercial", room: "Showroom", sqft: 760, scope: "Display joinery, track lighting, reception desk", materials: ["Mild steel", "Oak veneer", "Microcement"], brief: "A leather-goods showroom where the shelving does the selling.", tones: ["#B5A48C", "#4E3A2E", "#241B16"] },
];
export const services = [
  { name: "Full-home interiors", line: "Planning, joinery, ceilings, lighting and furnishing, handed over ready to live in." },
  { name: "Modular kitchens and wardrobes", line: "Measured on site, built to the way you cook and store." },
  { name: "Living and bedroom makeovers", line: "One room at a time, when a full renovation is too much." },
  { name: "Commercial fit-outs", line: "Cafés, showrooms and offices, planned around how staff and customers move." },
  { name: "Lighting and ceilings", line: "Cove, track and pendant lighting designed with the ceiling, not added after." },
  { name: "Curtains and soft furnishing", line: "Fabrics chosen against your walls and floors in your own light." },
];
export const testimonials = [
  { quote: "The design ideas were creative, practical, and perfectly suited to our space.", name: "Shreyal Sipani", source: "Google review" },
  { quote: "This attention to detail truly reflected in the final outcome of our space.", name: "Google review summary", source: "" },
];
export const rateTable = {
  perSqft: { Essential: 1800, Signature: 2600, Bespoke: 3800 } as Record<string, number>,
  property: { Flat: 1, House: 1.1, Shop: 1.15 } as Record<string, number>,
  bhk: { "1 BHK": 550, "2 BHK": 850, "3 BHK": 1200, "4 BHK": 1600 } as Record<string, number>,
  spread: 0.12,
};
