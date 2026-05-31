# React Native Stabilization Playbook

Original, non-confidential reference material for inherited React Native apps that need stronger release confidence.

## What This Demo Shows

- How to separate build health, crash triage, performance issues, and cleanup work
- How to define a short first milestone that reduces production risk
- How to document release blockers without mixing them with feature requests

## Suggested First Pass

1. Confirm Android and iOS builds on current branches.
2. Capture app version, OS version, device, and reproduction steps for top issues.
3. Separate production blockers from maintenance tasks.
4. Review dependency risk before upgrading everything at once.
5. Ship one measurable confidence milestone.

## Public Checklist

### Build Health

- Android debug and release builds complete
- iOS debug and release builds complete
- Environment variables and signing steps are documented
- Crash reporting is active in the build used for QA

### Production Risk

- Top crash groups are identified
- Login, payment, notifications, and scanner flows are smoke-tested
- Release rollback path is written down
- Third-party SDK versions are reviewed for upgrade risk

### First Milestone Candidates

- Fix the highest-frequency crash
- Repair one broken production build path
- Stabilize one core user flow
- Improve one slow screen with before/after checks

## Why This Exists

This is portfolio-safe proof of approach. It does not include private project code, private client names, or internal delivery details.
