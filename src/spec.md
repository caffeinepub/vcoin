# Specification

## Summary
**Goal:** Build a Web2-style VCoin presale website with a public site plus two protected dashboards (User Panel and Admin Panel), backed by Motoko canister storage, supporting manual deposit verification, stage-based buy calculations, referrals, and vesting/lock displays.

**Planned changes:**
- Public site pages: Home plus English informational pages (Whitepaper-style overview, Smart Contract Architecture description, Roadmap 2025–2030).
- Authentication + role-based access: user registration/login; admin login with initial credentials; enforce admin password change on first login; users can only access their own data; admins can access global controls.
- Anti-duplicate registration without email/OTP: unique email (case-insensitive), store a stable client fingerprint, apply rate limits per fingerprint and any available IP-equivalent signal; show clear English block reasons.
- Consistent UI theme across public, user, and admin areas; collapsible one-click open/close sidebar for both dashboards with mobile usability.
- Presale stages and buy calculations (off-chain): stage config (Stage 1 $0.05/80M, Stage 2 $0.08/70M, Stage 3 $0.12/50M), admin can set current stage and/or override price; user Buy page calculates USDT from VCN and blocks purchases beyond remaining supply.
- Admin-controlled USDT wallet address setting stored in backend; Buy page always reads and displays the latest address from backend.
- Manual deposit flow: user submits buy intent + transaction hash + payment screenshot upload; deposits stored as Pending; user sees Deposit History with Pending/Approved/Rejected + rejection reason.
- Admin deposit review: view pending deposits, open details including screenshot, approve (credits tokens) or reject (with reason); approved deposits become immutable.
- Token balances and vesting (calculation-only): credit purchased tokens as Locked until configured launch year/timestamp (default 2027); show Locked/Unlocked balances; vesting progress page with monthly schedule post-launch; admin can configure launch/vesting parameters.
- Referral system: auto referral code per user + shareable referral link; optional referral code on signup (immutable relationship); on deposit approval compute rewards (buyer +10% if referred; uplines L1 10%, L2 5%, L3 1%, L4 0.5%, L5 0.5%) credited as Locked; show Referral Earnings breakdown.
- Referral Network Tree view in user dashboard (up to 5 levels) using pagination/expansion to stay responsive.
- Admin dashboard metrics and tools: totals (registered users, tokens sold, USDT collected), current stage, pending verifications; controls for stage/price changes, manual token credit/debit per user with audit note, manage/override referral rewards, announcement popup create/edit/disable shown to users.
- File upload handling for payment screenshots: accept common image formats, validate size, store as stable asset reference accessible to admins; show thumbnail/preview in user history and admin review.
- Backend audit trail for sensitive admin actions (approve/reject, stage/price, wallet address, credit/debit, referral overrides, announcements) with who/what/when and before/after where applicable; admin UI to view logs with filters.
- Ensure all user-facing messages are in English with clear statuses/errors across major flows.

**User-visible outcome:** Users can register/login, view a professional dashboard with a collapsible sidebar, calculate a presale buy amount, submit a manual deposit with screenshot, track deposit status, see locked balances, referral earnings, and a referral tree; admins can securely log in, change the default password, configure stages/pricing and wallet address, review/approve/reject deposits, manage balances/referrals/announcements, and view audit logs—everything persisted in the Motoko canister.
