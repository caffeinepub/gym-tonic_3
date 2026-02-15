# Specification

## Summary
**Goal:** Build a small English marketing site for “Gym & Tonic” with Internet Identity sign-in, an Account area showing membership + “Tonic” cafe access, and a mobile-friendly “Tonic Access Pass”, backed by a Motoko actor that stores membership/entitlements by principal.

**Planned changes:**
- Create marketing pages/sections describing the gym concept, supported workout styles (weight training, calisthenics, rowing/cardio), holistic fitness outlook, and the membership-inclusive in-house cafe “Tonic”.
- Apply a consistent modern fitness-cafe visual theme (avoiding blue/purple as dominant colors) with consistent typography, spacing, and UI patterns.
- Add Internet Identity sign-in and an Account area that prompts sign-in when signed out and displays membership status (Active/Inactive) plus “Tonic Access” (Included/Not included) when signed in.
- Add a “Tonic Access Pass” view that shows “Tonic”, the user identifier, membership state, and “Access: Granted/Not granted”, optimized for phone-sized viewports.
- Implement backend data model + APIs to store/retrieve membership and Tonic access keyed by the caller’s principal, plus an admin-only method (restricted to a configured admin principal list) to set/update records.
- Add generated static image assets under `frontend/public/assets/generated` (including hero + logo) and reference them directly from the frontend (no backend image serving).

**User-visible outcome:** Visitors can browse a branded “Gym & Tonic” marketing site; users can sign in with Internet Identity to view their membership and Tonic access, and show a digital “Tonic Access Pass” indicating whether access is granted.
