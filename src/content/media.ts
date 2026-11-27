/**
 * Photography, textures and video used across the site.
 *
 * Every asset is stored locally in /public/media and listed here once, so a
 * temporary image can be replaced by a genuine Mota Content Media photo by
 * swapping the file (keep the name) or editing a single entry.
 *
 * Licences (checked November 2026; full list in /public/media/CREDITS.md):
 *   - Photos: Unsplash License (free for commercial use, no attribution
 *     required). Source images on images.unsplash.com.
 *   - Video and video stills: Mixkit Free License (free for commercial use,
 *     no attribution required). Source clips on assets.mixkit.co.
 *
 * These are illustrative creative-industry images. They do not show
 * Mota Content Media staff, clients or premises, and the copy must never
 * suggest that they do.
 */

export type Photo = {
  /** Path without the width suffix, e.g. /media/photos/about-collaboration */
  src: string;
  /** Available widths: files are named `${src}-${width}.webp`. */
  widths: readonly number[];
  /** Intrinsic aspect, for layout stability. */
  width: number;
  height: number;
  alt: string;
  source: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;
const mixkit = (id: number) => `https://mixkit.co (clip ${id})`;

const photo = (name: string, widths: readonly number[], width: number, height: number, alt: string, source: string): Photo => ({
  src: `/media/photos/${name}`,
  widths,
  width,
  height,
  alt,
  source,
});

const LARGE = [640, 1280, 1920] as const;
const MEDIUM = [640, 1280] as const;

export const photos = {
  heroPoster: photo("hero-poster", MEDIUM, 1280, 720, "", mixkit(41627)),

  aboutCollaboration: photo(
    "about-collaboration",
    LARGE,
    1920,
    1280,
    "A creative team planning a project together around a wall of sticky notes",
    unsplash("1552664730-d307ca884978"),
  ),
  aboutPodcastSession: photo(
    "about-podcast-session",
    LARGE,
    1920,
    1266,
    "Two people recording a podcast conversation with studio microphones and headphones",
    unsplash("1559523161-0fc0d8b38a7a"),
  ),
  aboutEditingDesk: photo(
    "about-editing-desk",
    LARGE,
    1920,
    1177,
    "A creative professional wearing headphones, working at a desk with a large monitor",
    unsplash("1613909207039-6b173b755cc1"),
  ),

  serviceContentWriting: photo(
    "service-content-writing",
    LARGE,
    1920,
    1442,
    "A fountain pen writing by hand on lined paper",
    unsplash("1455390582262-044cdead277a"),
  ),
  serviceAudioProduction: photo(
    "service-audio-production",
    LARGE,
    1920,
    1280,
    "A recording studio with a mixing console, monitors and guitars on the wall",
    unsplash("1598488035139-bdbb2231ce04"),
  ),
  serviceVideoProduction: photo(
    "service-video-production",
    LARGE,
    1920,
    1280,
    "A camera operator filming a dancer in a studio lit with blue and pink light",
    unsplash("1601506521937-0121a7fc2a6b"),
  ),
  serviceGraphicDesign: photo(
    "service-graphic-design",
    LARGE,
    1920,
    2400,
    "Colour swatch cards and printed palettes spread across a design desk",
    unsplash("1561070791-2526d30994b5"),
  ),
  serviceSocialMedia: photo(
    "service-social-media",
    MEDIUM,
    1280,
    720,
    "A content creator adjusting a camera rig with a flip-out monitor while filming",
    mixkit(34475),
  ),
  serviceDigitalMarketing: photo(
    "service-digital-marketing",
    LARGE,
    1920,
    1280,
    "A performance analytics dashboard with charts on a large screen",
    unsplash("1551288049-bebda4e38f71"),
  ),

  whyCameraInHand: photo(
    "why-camera-in-hand",
    LARGE,
    1920,
    1080,
    "Hands holding a professional camera with a large lens",
    unsplash("1520390138845-fd2d229dd553"),
  ),

  projectBrandDesk: photo(
    "project-brand-desk",
    LARGE,
    1920,
    1281,
    "A designer's desk seen from above, with a monitor, sketches and stationery",
    unsplash("1541462608143-67571c6738dd"),
  ),
  projectVideoPoster: photo(
    "project-video-poster",
    [640, 960],
    960,
    540,
    "A photographer directing a model in a pink studio",
    mixkit(41625),
  ),
  projectEditorialPress: photo(
    "project-editorial-press",
    LARGE,
    1920,
    1282,
    "Printed pages running through a printing press",
    unsplash("1503694978374-8a2fa686963a"),
  ),
  projectSocialCreators: photo(
    "project-social-creators",
    MEDIUM,
    1280,
    720,
    "Two creators filming themselves with a smartphone gimbal on a rooftop at sunset",
    mixkit(34479),
  ),
  projectAudioPoster: photo(
    "project-audio-poster",
    [640, 960],
    960,
    540,
    "A podcast host speaking into a studio microphone",
    mixkit(2951),
  ),
  projectGrowthLaptop: photo(
    "project-growth-laptop",
    LARGE,
    1920,
    1368,
    "A laptop on a desk displaying marketing analytics charts",
    unsplash("1460925895917-afdab827c52f"),
  ),

  finaleSoundEngineer: photo(
    "finale-sound-engineer",
    LARGE,
    1920,
    1280,
    "A sound engineer at a studio console between two monitor speakers",
    unsplash("1563330232-57114bb0823c"),
  ),
} as const;

/** Large monochrome textures for section backgrounds (decorative). */
export const textures = {
  books: "/media/textures/texture-books.webp",
  wireframe: "/media/textures/texture-wireframe.webp",
  microphone: "/media/textures/texture-microphone.webp",
  camera: "/media/textures/texture-camera.webp",
  mixingConsole: "/media/textures/texture-mixing-console.webp",
} as const;

export type Video = { src: string; poster: Photo; label: string };

/** Local, web-optimised H.264 files (no audio track). */
export const videos = {
  /** ~23 s silent montage: photo studio, podcast, edit suite, creator, camera, DJ desk, monitors. */
  heroShowreel: { src: "/media/video/hero-showreel.mp4", poster: photos.heroPoster, label: "Creative production montage" },
  projectVideoCampaign: {
    src: "/media/video/project-video-campaign.mp4",
    poster: photos.projectVideoPoster,
    label: "Video preview: behind the scenes of a studio photo and film shoot",
  },
  projectAudioSession: {
    src: "/media/video/project-audio-session.mp4",
    poster: photos.projectAudioPoster,
    label: "Video preview: a podcast recording session in a studio",
  },
} as const satisfies Record<string, Video>;
