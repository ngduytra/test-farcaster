import { data } from '@remix-run/node'

// You can also move this to an environment variable or config file
export const loader = async () => {
  const manifest = {
    accountAssociation: {
      header:
        'eyJmaWQiOjEzNjkxODAsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhDMEZFRjg4MjlBMzlCNTE1MUY2NDMwNzgzMGQzM2UzMDk0MGU0YTU4In0',
      payload: 'eyJkb21haW4iOiJ0ZXN0LWZhcmNhc3Rlci1zaWdtYS52ZXJjZWwuYXBwIn0',
      signature:
        '4NpWf0V77b+m3nqJtdxNjtVQJU9sXcbV1kmbd6zZ4w1pNTUXcjYBPmh2dCnhuGg4s9KlnXt4PasdNK3XwqNY7xw=',
    },
    baseBuilder: {
      allowedAddresses: [
        '0xAcE1616Add1E71A4587396d2c321B72f2745d32a',
        '0x3c8c6d894B832AF5a3C2f57b978e05caB0bdB586',
      ],
    },
    miniapp: {
      version: '1',
      name: 'DivergentVN',
      homeUrl: 'https://test-farcaster-sigma.vercel.app/',
      imageUrl: 'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      buttonTitle: '🚀 Launch',
      iconUrl: 'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      splashImageUrl:
        'https://test-farcaster-sigma.vercel.app/images/test-gif-loading.gif',
      splashBackgroundColor: '#000000',

      subtitle: 'Divergent',
      description:
        'DivergentVN is an AI-powered app to improve your mental health.',
      primaryCategory: 'finance',
      tags: ['finance'],
      heroImageUrl:
        'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      tagline: 'Save instantly',
      ogTitle: 'DivergentVN',
      ogDescription: 'Think DivergentVN as CapCut meets Pump.fun. Prompt NFT',
      ogImageUrl: 'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      castShareUrl: 'https://test-farcaster-sigma.vercel.app',
      canonicalDomain: 'test-farcaster-sigma.vercel.app',
    },
  }

  const manifestProduction = {
    accountAssociation: {
      header:
        'eyJmaWQiOjEzNjkxODAsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhDMEZFRjg4MjlBMzlCNTE1MUY2NDMwNzgzMGQzM2UzMDk0MGU0YTU4In0',
      payload: 'eyJkb21haW4iOiJ0ZXN0LWZhcmNhc3Rlci1zaWdtYS52ZXJjZWwuYXBwIn0',
      signature:
        '4NpWf0V77b+m3nqJtdxNjtVQJU9sXcbV1kmbd6zZ4w1pNTUXcjYBPmh2dCnhuGg4s9KlnXt4PasdNK3XwqNY7xw=',
    },
    baseBuilder: {
      allowedAddresses: [
        '0xAcE1616Add1E71A4587396d2c321B72f2745d32a',
        '0x3c8c6d894B832AF5a3C2f57b978e05caB0bdB586',
      ],
    },
    miniapp: {
      version: '1',
      name: 'DivergentVN production',
      homeUrl: 'https://test-farcaster-sigma.vercel.app/',
      imageUrl: 'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      buttonTitle: '🚀 Launch',
      iconUrl: 'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      splashImageUrl:
        'https://test-farcaster-sigma.vercel.app/images/test-gif-loading.gif',
      splashBackgroundColor: '#ffffff',

      subtitle: 'Your AI Companion',
      description:
        'DivergentVN is an AI-powered app to improve your mental health.',
      primaryCategory: 'finance',
      tags: ['finance'],
      heroImageUrl:
        'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      tagline: 'Save instantly',
      ogTitle: 'DivergentVN',
      ogDescription: 'Think DivergentVN as CapCut meets Pump.fun. Prompt NFT',
      ogImageUrl: 'https://test-farcaster-sigma.vercel.app/images/32ratio.png',
      castShareUrl: 'https://test-farcaster-sigma.vercel.app',
      canonicalDomain: 'test-farcaster-sigma.vercel.app',
    },
  }

  if (import.meta.env.VITE_ENV === 'production') {
    return data(manifestProduction, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    })
  }

  return data(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  })
}
