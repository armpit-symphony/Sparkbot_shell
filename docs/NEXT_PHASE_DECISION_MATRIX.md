# Next Phase Decision Matrix

Updated: 2026-05-24

Context: active staging baseline lock is `active-staging-baseline-mock-lima-ui-lock` (`bbc4ebd`), based on `active-staging-baseline-lock` (`9142f71`).
Release status: `GREEN_CANDIDATE`, `NOT_RELEASED`, no runtime behavior.

## Option A — Pause / Preserve Static Baseline

- keep `armpit-symphony/Sparkbot_shell` as a static staging shell
- benefits: maximal safety, least risk, strongest source-boundary control
- costs: slower demo-product momentum
- cleanup: periodic doc/link refresh and boundary revalidation

## Option B — Mock LIMA Contract UI Review/Polish Only

- keep the current static UI-display and refresh copy/discoverability only
- benefits: cleaner public-facing messaging without runtime risk
- constraints: no runtime calls, no provider/model/connector integration
- required: maintain current no-side-effect invariant labels

## Option C — Frontend-Only Mock Contract Response Expansion

- add more static mock contract examples only (data + presentation)
- benefits: richer contract-readiness discovery
- constraints: still zero runtime, no actions, no fetch/network

## Option D — Begin Functional Contract Runtime Planning

- docs + architecture planning for future runtime contract integrations
- explicitly requires Phil approval before implementation
- must preserve no runtime behavior in this branch

## Option E — Wave 2 Source Import Planning

- classify more Sparkbot frontend surfaces for potential static import
- keep no direct runtime import, no R&D source copy

## Option F — Public Release Action

- release actions only with explicit Phil approval
- still requires repo home/version/tag/destination/announcement decisions

## Recommendation

- **Preferred next**: Option A or B.
- Option B should be a review-only cleanup pass if Phil wants immediate visual/clarity confirmation.
- Runtime implementation is still blocked.
