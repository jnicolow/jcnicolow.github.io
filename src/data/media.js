/**
 * Site images: `src/assets/media/{hero,about,gallery}/` (see globs below).
 * CV PDF: `src/assets/media/cv/` — imported once as `cvPdfUrl`.
 * Each import.meta.glob MUST use a string literal (Vite limitation).
 */

import cvPdfAsset from '../assets/media/cv/Nicolow_Joel_CV.pdf?url'

/** Resolved URL to the CV PDF (bundled by Vite) */
export const cvPdfUrl = cvPdfAsset

function sortedUrls (modules) {
  return Object.keys(modules)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((path) => {
      const mod = modules[path]
      return typeof mod === 'string' ? mod : mod.default
    })
}

/** Random order each page load — avoids alphabetically similar filenames clustering together */
function shuffleArray (arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function basenameLabel (path) {
  const base = path.split(/[/\\]/).pop() || 'Photo'
  return base.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
}

const heroModules = {
  ...import.meta.glob('../assets/media/hero/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/hero/*.WEBP', { eager: true, import: 'default' })
}

const aboutModules = {
  ...import.meta.glob('../assets/media/about/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/about/*.WEBP', { eager: true, import: 'default' })
}

const galleryModules = {
  ...import.meta.glob('../assets/media/gallery/*.jpg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.jpeg', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.webp', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.JPG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.JPEG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.PNG', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/media/gallery/*.WEBP', { eager: true, import: 'default' })
}

export const heroPhotos = shuffleArray(sortedUrls(heroModules))

export const aboutPhotos = shuffleArray(sortedUrls(aboutModules))

/** Every image in `gallery/` — shuffled order; captions derived from filename */
export const galleryItems = shuffleArray(
  Object.keys(galleryModules)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((path) => {
      const mod = galleryModules[path]
      const src = typeof mod === 'string' ? mod : mod.default
      const caption = basenameLabel(path)
      return {
        src,
        alt: caption || 'Gallery photo',
        caption
      }
    })
)
