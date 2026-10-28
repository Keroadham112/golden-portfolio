import { social } from '../data'

const labels = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  tiktok: 'TikTok',
  youtube: 'YouTube',
}

// بيظهر بس لو فيه لينكات متسجلة في social جوه data.js
export default function SocialLinks({ light = false, className = '' }) {
  const links = Object.entries(social).filter(([, url]) => url)
  if (!links.length) return null
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full border px-4 py-2 font-poppins text-sm transition-colors hover:border-gold ${
            light ? 'border-charcoal/15 text-charcoal/75 hover:text-gold' : 'border-ivory/15 text-ivory/75 hover:text-gold-light'
          }`}
        >
          {labels[key] ?? key}
        </a>
      ))}
    </div>
  )
}
