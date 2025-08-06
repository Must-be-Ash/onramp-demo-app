import { OnrampWidget } from '@/components/onramp'

// list of components:
// components/onramp/amount-selector.tsx
// components/onramp/auth-flow.tsx
// components/onramp/index.ts
// components/onramp/onramp-button.tsx
// components/onramp/onramp-footer.tsx
// components/onramp/onramp-header.tsx
// components/onramp/onramp-widget.tsx
// components/onramp/wallet-display.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <OnrampWidget />
    </main>
  )
}