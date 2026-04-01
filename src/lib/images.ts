/**
 * Imagery from abetterlifechiropractic.com (iMatrix / CDN) — use next/image only.
 */

const IMG = "https://cdcssl.ibsrv.net/ibimg/smb/1600x1600_80/webmgr/0k/0/h/images";

export const logoUrl =
  "https://abetterlifechiropractic.com/storage/app/media/Logo_trimmed.png";

export const heroSlides = [
  `${IMG}/banner001.jpg.webp?d7ba91f85a9ef5a88546b511292187b7`,
  `${IMG}/slide1.jpg.webp?21d5c3fe3c0a2fdbce9f68cb165eef26`,
  `${IMG}/slide2.jpg.webp?db7d4f4fdbf60b19b614eb3372d2eefb`,
  `${IMG}/slide3.jpg.webp?c71e3f758730729415095fdc7fc79879`,
  `${IMG}/slide4.jpg.webp?15a531e1eb44dc84b81f9d2ce27da199`,
] as const;

export const doctorPhoto =
  "https://cdcssl.ibsrv.net/ibimg/smb/1023x1023_80/webmgr/0k/0/h/images/IMG_6924_-_Copy.jpg.webp?2383d4ec0c608110e680e97e01ca7ad6";

const G =
  "https://cdcssl.ibsrv.net/ibimg/smb/600x600_80/webmgr/0k/0/h/_SHARED";

export const galleryPhotos = [
  { src: `${G}/gallery_1.jpg.webp?ceb343d9bac94644e9fcc3920a12a14c`, alt: "Chiropractic care — patient consultation" },
  { src: `${G}/gallery_2.jpg.webp?18eabfdabd459d9afb33c29f5c8494f9`, alt: "Therapeutic care at A Better Life Chiropractic" },
  { src: `${G}/gallery_3.jpg.webp?a4bcb6145a00892784e298145c4d2c4f`, alt: "Wellness and spinal health" },
  { src: `${G}/gallery_4.jpg.webp?81d39440fa4cb6edde1382dcd2d2a2f9`, alt: "Family-friendly chiropractic office" },
  { src: `${G}/gallery_5.jpg.webp?9f8e78f6fe163dd228742e1f4087cc3b`, alt: "Treatment and comfort" },
  { src: `${G}/gallery_6.jpg.webp?4fe8fccfe1e75328376412b3602d1a5b`, alt: "Naples chiropractic services" },
] as const;
