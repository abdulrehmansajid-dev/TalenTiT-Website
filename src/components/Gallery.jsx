import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

// ============================================================================
// Category Detection Helper
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

// ============================================================================
// Load and Group Images
// ============================================================================
const useGalleryAlbums = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Use Vite's import.meta.glob to dynamically load all images
        const imageModules = import.meta.glob('../assets/Gallery/*.{jpg,jpeg,png,webp}', { eager: true })

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
// Lightbox Modal
// ============================================================================
const LightboxModal = ({ album, currentImageIndex, onClose, onNext, onPrev }) => {
  const currentImage = album.images[currentImageIndex]

  useEffect(() => {
    // Prevent body scroll
    document.body.style.overflow = 'hidden'

    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full h-full md:max-w-4xl md:max-h-[90vh] md:rounded-3xl overflow-hidden bg-slate-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{album.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{currentImage.filename}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center overflow-hidden bg-black">
          <img
            src={currentImage.url}
            alt={currentImage.filename}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Navigation & Counter */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-slate-950">
          {/* Left Arrow */}
          <button
            onClick={onPrev}
            disabled={album.images.length <= 1}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="text-center">
            <span className="text-sm font-semibold text-white">
              {currentImageIndex + 1} / {album.images.length}
            </span>
          </div>

          {/* Right Arrow */}
          <button
            onClick={onNext}
            disabled={album.images.length <= 1}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Strip */}
        {album.images.length > 1 && (
          <div className="px-6 py-4 border-t border-white/10 bg-slate-950 overflow-x-auto">
            <div className="flex gap-2">
              {album.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    // Navigation handled by parent component
                    // This is just for visual selection
                  }}
                  className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex
                      ? 'border-orange-600 shadow-lg shadow-orange-600/30'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => {
                      // Parent will need to handle this
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================================
// Album Card
// ============================================================================
const AlbumCard = ({ album, onViewAlbum }) => {
  const coverImage = album.images[0]

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5">
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
        <img
          src={coverImage.url}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <CategoryBadge category={album.category} />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 line-clamp-2">
          {album.title}
        </h3>

        {/* Photo Count */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm text-slate-600 font-medium">
            {album.images.length} {album.images.length === 1 ? 'photo' : 'photos'}
          </span>
        </div>

        {/* View Album Button */}
        <button
          onClick={() => onViewAlbum(album)}
          className="w-full px-5 py-3 rounded-full bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          View Album
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Orange accent on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-orange-600/0 group-hover:border-orange-600/100 transition-colors duration-300 pointer-events-none" />
    </div>
  )
}

// ============================================================================
// Main Gallery Component
// ============================================================================
export default function Gallery() {
  const albums = useGalleryAlbums()
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Featured albums (first 3 or specific names)
  const featuredAlbumTitles = ['Train the Trainer', 'Hospitality Attitude Training', 'Leadership Summit Georgia']
  const featuredAlbums = useMemo(() => {
    const found = featuredAlbumTitles
      .map((title) => albums.find((a) => a.title === title))
      .filter(Boolean)

    // If not all featured found, use first 3
    if (found.length < 3) {
      return albums.slice(0, 3)
    }

    return found
  }, [albums])

  // Filter albums by category
  const filteredAlbums = useMemo(() => {
    if (selectedCategory === 'All') {
      return albums
    }
    return albums.filter((album) => album.category === selectedCategory)
  }, [albums, selectedCategory])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(albums.map((a) => a.category))
    return ['All', ...Array.from(cats).sort()]
  }, [albums])

  // Lightbox handlers
  const handleViewAlbum = (album) => {
    setSelectedAlbum(album)
    setCurrentImageIndex(0)
  }

  const handleCloseLightbox = () => {
    setSelectedAlbum(null)
    setCurrentImageIndex(0)
  }

  const handleNextImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedAlbum.images.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length)
    }
  }

  return (
    <div className="bg-white" id="gallery">
      {/* ======== Hero Section ======== */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-20 sm:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-block px-4 py-2 rounded-full bg-orange-600/20 border border-orange-600/40 mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange-400">
              Training Gallery
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Moments That Reflect <span className="text-orange-500">Learning, Growth & Excellence.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore moments from our corporate training programs, leadership workshops, service excellence sessions, team building activities, and professional development events.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">{albums.length > 0 ? '30+' : '–'}</p>
              <p className="text-sm text-slate-300">Training Moments</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">{categories.length - 1}+</p>
              <p className="text-sm text-slate-300">Program Categories</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">100%</p>
              <p className="text-sm text-slate-300">Corporate Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======== Featured Albums Section ======== */}
      {featuredAlbums.length > 0 && (
        <section className="py-16 sm:py-20 px-6 sm:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mb-2">Featured Training Moments</h2>
          <p className="text-slate-600 mb-10">Highlights from our most impactful programs</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredAlbums.map((album, idx) => (
              <AlbumCard
                key={idx}
                album={album}
                onViewAlbum={handleViewAlbum}
              />
            ))}
          </div>
        </section>
      )}

      {/* ======== Filter Section ======== */}
      <section className="py-12 sm:py-16 px-6 sm:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-950 mb-6">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-white border border-slate-300 text-slate-700 hover:border-orange-600 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Albums Grid Section ======== */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mb-2">Explore Our Gallery Albums</h2>
        <p className="text-slate-600 mb-10">
          {selectedCategory === 'All'
            ? `Discover all ${albums.length} training albums`
            : `Showing ${filteredAlbums.length} album${filteredAlbums.length === 1 ? '' : 's'} in ${selectedCategory}`}
        </p>

        {filteredAlbums.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAlbums.map((album, idx) => (
              <AlbumCard
                key={idx}
                album={album}
                onViewAlbum={handleViewAlbum}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No albums found in this category.</p>
          </div>
        )}
      </section>

      {/* ======== CTA Section ======== */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Want to Create Impactful Learning Experiences for Your Team?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Get in touch to discuss customized training, coaching, and development programs for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all duration-200 hover:shadow-lg hover:shadow-orange-600/30"
          >
            Request Training Proposal
          </Link>
        </div>
      </section>

      {/* ======== Lightbox Modal ======== */}
      {selectedAlbum && (
        <LightboxModal
          album={selectedAlbum}
          currentImageIndex={currentImageIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  )
}
