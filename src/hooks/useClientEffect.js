import { useEffect } from 'react'
import { initCursor } from '../lib/cursor'
import { initReveal } from '../lib/reveal'

/**
 * useClientSystems
 * Mounts the vanilla-JS cursor + IntersectionObserver scroll-reveal once after
 * the React tree has painted. Returns nothing. Cleanup runs on unmount.
 *
 * Note on timing: reveal observers are attached after mount, so any `.reveal`
 * element rendered by React on first paint will be observed. Sections added
 * later (e.g. via routing) would need re-init — not the case for this SPA.
 */
export function useClientSystems() {
  useEffect(() => {
    const cursor = initCursor()
    const revealObserver = initReveal()

    return () => {
      cursor?.cleanup?.()
      revealObserver?.disconnect?.()
    }
  }, [])
}
