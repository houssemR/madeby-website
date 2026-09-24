/* The forty hats the app actually ships, in their eight collections and in
   the app's own order (lib/data/studio_rewards.dart). The site draws the real
   art rather than claiming a number. */
export const HAT_COLLECTIONS = [
  { name: 'Cozy craft',    hats: ['bobble', 'beret', 'flower', 'straw', 'kerchief'] },
  { name: 'Winter',        hats: ['elf', 'earflap', 'snowcap', 'antlers', 'santa'] },
  { name: 'Seasons',       hats: ['pumpkin', 'witch', 'leafcrown', 'bunny', 'bonnet'] },
  { name: 'Just silly',    hats: ['propeller', 'cone', 'duck', 'egg', 'pancakes'] },
  { name: 'Antiquity',     hats: ['viking', 'galea', 'corinthian', 'laurel', 'nemes'] },
  { name: 'Old world',     hats: ['scholar', 'kabuto', 'mongol', 'ziggurat', 'quetzal'] },
  { name: 'Gala',          hats: ['bandeau', 'crown', 'tophat', 'coronet', 'fedora'], premium: true },
  { name: 'Atelier',       hats: ['pearls', 'turban', 'picturehat', 'panama', 'sable'], premium: true },
];

export const ALL_HATS = HAT_COLLECTIONS.flatMap((c) => c.hats);
