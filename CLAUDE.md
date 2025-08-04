# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev          # Start Next.js development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Package management
npm install          # Install dependencies
```

## Project Architecture

This is a Next.js 14 application implementing Coinbase Onramp integration with guest checkout functionality. The app structure follows Next.js App Router conventions.

### Key Components

- **Onramp Widget** (`components/onramp/onramp-widget.tsx`): Main component that orchestrates the entire onramp flow, handling both authenticated users and guest checkout
- **CDP Authentication** (`lib/cdp-auth.ts`): Core authentication logic using CDP SDK for JWT generation and session token management
- **Session API** (`app/api/onramp/session/route.ts`): Server-side endpoint for creating secure session tokens, supports both guest and authenticated flows

### Authentication Flow

The application supports two authentication modes:
1. **CDP Wallet Authentication**: Uses `@coinbase/cdp-hooks` for email-based sign-in with OTP verification
2. **Guest Checkout**: Allows purchases without Coinbase accounts using debit cards or Apple Pay

Session tokens are generated server-side using CDP API credentials and are single-use with 5-minute expiration.

### Guest Checkout Implementation

Guest checkout bypasses wallet requirements by:
- Creating session tokens with empty `addresses` array
- Enforcing $5-$500 transaction limits 
- Supporting only debit cards and Apple Pay
- Restricting to US residents only

### Environment Configuration

Required environment variables:
- `CDP_API_KEY_NAME`: Your CDP API key identifier
- `CDP_API_KEY_PRIVATE_KEY`: PEM-formatted private key from CDP dashboard
- `NEXTAUTH_SECRET`: Next.js authentication secret
- `NEXTAUTH_URL`: Application URL (localhost:3000 for development)

### Security Considerations

- JWT tokens expire after 2 minutes and use ES256 algorithm
- Session tokens are single-use and expire after 5 minutes
- Input validation using Zod schemas on all API endpoints
- Private keys are server-side only, never exposed to client

### Dependencies

- **Core**: Next.js 14, React 18, TypeScript
- **CDP Integration**: `@coinbase/cdp-core`, `@coinbase/cdp-hooks`, `@coinbase/cdp-react`, `@coinbase/cdp-sdk`
- **UI**: Tailwind CSS, Radix UI components, Framer Motion for animations
- **Validation**: Zod for runtime type checking