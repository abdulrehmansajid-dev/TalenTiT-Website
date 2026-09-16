import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

// ============================================================================
// Category Detection Helper (matches Gallery.jsx)
// ============================================================================
const getCategory = (title) => {
  const lower = title.toLowerCase()
  if (lower.includes('leadership') || lower.includes('summit') || lower.includes('manager') || lower.includes('dynamic leadership')) {
    return 'Leadership'
  }
  if (lower.includes('service') || lower.includes('complaints') || lower.includes('customer') || lower.includes('hospitality') || lower.includes('attitude') || lower.includes('brand awareness')) {
    return 'Service Excellence'
  }
  if (lower.includes('team building')) {
    return 'Team Building'
  }
  if (lower.includes('train the trainer') || lower.includes('trainer')) {
    return 'Train the Trainer'
  }
  if (lower.includes('stress') || lower.includes('time management') || lower.includes('performance')) {
    return 'Performance & Productivity'
  }
  return 'Employee Development'
}

// ============================================================================
// Normalize Album Title
// ============================================================================
const normalizeAlbumTitle = (filename) => {
  // Remove file extension
  let name = filename.split('.').slice(0, -1).join('.')

  // Replace underscores and hyphens with spaces
  name = name.replace(/[_-]/g, ' ')

  // Remove trailing numbering like (1), (2), (3), etc.
  name = name.replace(/\s*\(\d+\)\s*$/, '')

  // Clean up extra spaces
  name = name.replace(/\s+/g, ' ').trim()

  return name
}



const normalizeForMatch = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const displayTitleOverrides = {
  'Dynamic Leadership Program': 'Dynamic Leadership Training',
}

const getDisplayTitle = (album) => displayTitleOverrides[album.title] || album.title

const findAlbumByTitle = (albums, title) => {
  const target = normalizeForMatch(title)
  return albums.find((album) => normalizeForMatch(album.title) === target)
}

// ============================================================================
// Load and Group Images
// ============================================================================
const useGalleryAlbums = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Use Vite's import.meta.glob to dynamically load all images
        const imageModules = import.meta.glob(
          '../assets/Gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
          { eager: true }
        )

        // Group images by normalized album title
        const albumMap = {}
        Object.entries(imageModules).forEach(([filepath, module]) => {
          const filename = filepath.split('/').pop()
          const albumTitle = normalizeAlbumTitle(filename)
          const imageUrl = module.default

          if (!albumMap[albumTitle]) {
            albumMap[albumTitle] = {
              title: albumTitle,
              category: getCategory(albumTitle),
              images: [],
            }
          }

          albumMap[albumTitle].images.push({
            filename,
            url: imageUrl,
          })
        })

        // Convert map to array and sort by album title
        const albumsArray = Object.values(albumMap).sort((a, b) =>
          a.title.localeCompare(b.title)
        )

        setAlbums(albumsArray)
      } catch (error) {
        console.error('Error loading gallery images:', error)
      }
    }

    loadImages()
  }, [])

  return albums
}

// ============================================================================
// Category Badge
// ============================================================================
const CategoryBadge = ({ category }) => {
  const categoryColors = {
    Leadership: 'bg-blue-100 text-blue-800',
    'Service Excellence': 'bg-green-100 text-green-800',
    'Team Building': 'bg-purple-100 text-purple-800',
    'Train the Trainer': 'bg-amber-100 text-amber-800',
    'Performance & Productivity': 'bg-red-100 text-red-800',
    'Employee Development': 'bg-cyan-100 text-cyan-800',
  }

  const colors = categoryColors[category] || 'bg-slate-100 text-slate-800'

  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${colors}`}>
      {category}
    </span>
  )
}

// ============================================================================
// Album Card (Preview Version - Links to Full Gallery)
// ============================================================================
const PreviewAlbumCard = ({ album }) => {
  const coverImage = album.images[0]

  return (
    <Link
      to="/gallery"
      className="group relative flex h-full flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md shadow-[#04172f]/5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#ea580c]/35 hover:shadow-lg hover:shadow-[#04172f]/8"
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
        <img
          src={coverImage.url}
          alt={getDisplayTitle(album)}
          className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Category Badge */}
        <div className="mb-2">
          <CategoryBadge category={album.category} />
        </div>

        {/* Title */}
        <h3 className="card-title text-[1.05rem] sm:text-[1.15rem] mb-2 line-clamp-2">
          {getDisplayTitle(album)}
        </h3>

        {/* Photo Count */}
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm text-slate-600 font-medium">
            {album.images.length} {album.images.length === 1 ? 'photo' : 'photos'}
          </span>
        </div>
      </div>

      {/* Orange accent on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-[#ea580c]/0 group-hover:border-[#ea580c]/100 transition-colors duration-200 pointer-events-none" />
    </Link>
  )
}

// ============================================================================
// Main Gallery Preview Component
// ============================================================================
export default function GalleryPreview() {
  const albums = useGalleryAlbums()

  // Preferred album names for the homepage preview.
  // Leadership Summit Georgia is intentionally excluded from homepage preview.
  const preferredNames = [
    'Train The Trainer',
    'Hospitality Attitude Training',
    'Dynamic Leadership Program',
    'Team Building Activities',
    'Complaints Handling & Service Recovery',
    'Customer Service Training Le Pre Abu Dhabi',
  ]

  const excludedPreviewTitles = ['Leadership Summit Georgia']

  // Get best 6 albums (preferred first, then fill with remaining)
  const previewAlbums = useMemo(() => {
    const excluded = new Set(excludedPreviewTitles.map(normalizeForMatch))
    const preferred = preferredNames
      .map((name) => findAlbumByTitle(albums, name))
      .filter(Boolean)
      .filter((album, index, list) =>
        list.findIndex((item) => item.title === album.title) === index
      )
      .filter((album) => !excluded.has(normalizeForMatch(album.title)))

    const remaining = albums.filter(
      (album) =>
        !excluded.has(normalizeForMatch(album.title)) &&
        !preferred.some((p) => p.title === album.title)
    )

    return [...preferred, ...remaining].slice(0, 6)
  }, [albums])

  if (previewAlbums.length === 0) {
    return null // Don't render if no albums
  }

  return (
    <section className="bg-slate-50" id="gallery-preview">
      <div className="site-container site-section">
        <SectionHeader
          title="Training Gallery"
          description="A glimpse into our training sessions, leadership programs, workshops, and team development experiences."
          centered
        />

        <div className="section-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {previewAlbums.map((album, idx) => (
            <PreviewAlbumCard key={idx} album={album} />
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="btn-primary"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
