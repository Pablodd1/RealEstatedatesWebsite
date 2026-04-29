"use client"
import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: 'dot' | 'heart' | 'house' | 'sparkle'
}

interface FloatingCard {
  id: number
  x: number
  y: number
  width: number
  height: number
  rotation: number
  duration: number
  delay: number
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: Particle[] = []
    const floatingCards: FloatingCard[] = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 20,
        type: ['dot', 'heart', 'house', 'sparkle'][Math.floor(Math.random() * 4)] as Particle['type'],
      })
    }

    for (let i = 0; i < 8; i++) {
      floatingCards.push({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 15,
        width: Math.random() * 80 + 60,
        height: Math.random() * 60 + 50,
        rotation: (Math.random() - 0.5) * 30,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 15,
      })
    }

    particles.forEach((p) => {
      const el = document.createElement('div')
      el.className = `particle particle-${p.type}`
      el.style.cssText = `
        left: ${p.x}%;
        top: ${p.y}%;
        width: ${p.size}px;
        height: ${p.size}px;
        --duration: ${p.duration}s;
        --delay: ${p.delay}s;
      `
      container.appendChild(el)
    })

    floatingCards.forEach((card) => {
      const el = document.createElement('div')
      el.className = 'floating-card'
      el.innerHTML = `
        <div class="card-image"></div>
        <div class="card-content">
          <div class="card-price">$${Math.floor(Math.random() * 200 + 100)}k</div>
          <div class="card-details">${Math.floor(Math.random() * 3 + 1)} bd · ${Math.floor(Math.random() * 2 + 1)} ba</div>
        </div>
      `
      el.style.cssText = `
        left: ${card.x}%;
        top: ${card.y}%;
        width: ${card.width}px;
        height: ${card.height}px;
        --duration: ${card.duration}s;
        --delay: ${card.delay}s;
        --rotation: ${card.rotation}deg;
      `
      container.appendChild(el)
    })

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div ref={containerRef} className="particle-background" />
}