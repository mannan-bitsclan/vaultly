export const BLOGS = [
  // Problem A - Ghost Charges
  {
    id: 1,
    problem: "A",
    color: "#4949f2",
    category: "Ghost Charges",
    part: "1 of 4",
    readTime: "4 min",
    title: "How Silent SaaS Trials Drain Your Budget Without a Single Notification",
    excerpt:
      "Free trials convert automatically. No email. No alert. No approval required. Here is exactly how a $0 sign-up becomes a $99 monthly charge your finance team won't catch for three billing cycles — and why the vendor designed it that way.",
  },
  {
    id: 2,
    problem: "A",
    color: "#4949f2",
    category: "Ghost Charges",
    part: "2 of 4",
    readTime: "5 min",
    title: "The 72-Hour Window: Why Teams Don't Catch Ghost Charges Until It's Too Late",
    excerpt:
      "Subscription charges are processed in the same window as every other legitimate transaction. By the time someone flags it as suspicious, the charge has cleared and the next billing cycle is already scheduled. Timing is a feature, not a bug.",
  },
  {
    id: 3,
    problem: "A",
    color: "#4949f2",
    category: "Ghost Charges",
    part: "3 of 4",
    readTime: "3 min",
    title: "Ghost Charges vs. Billing Errors: The $99 Nobody Approved and Nobody Noticed",
    excerpt:
      "There is a clear difference between a billing mistake and a ghost charge. One is accidental. The other is deliberate, automatic, and architecturally designed to go unnoticed. Most teams cannot tell them apart until they run a full audit.",
  },
  {
    id: 4,
    problem: "A",
    color: "#4949f2",
    category: "Ghost Charges",
    part: "4 of 4",
    readTime: "6 min",
    title: "How an Allowlist Card Blocks Every Unauthorized Charge Before a Single Dollar Moves",
    excerpt:
      "The fix is not monitoring dashboards or budget alerts — those are reactive. The fix is an allowlist-based card that only authorizes merchants you have already confirmed. Every unknown vendor is blocked at the authorization layer before money ever moves.",
  },
  // Problem B - Security Cascade
  {
    id: 5,
    problem: "B",
    color: "#a78bfa",
    category: "Security Cascade",
    part: "1 of 4",
    readTime: "4 min",
    title: "Why One Shared Card Across All Your SaaS Tools Is a Security Time Bomb",
    excerpt:
      "A single card number shared across GitHub, AWS, Figma, and a dozen other tools feels convenient — until it is compromised. The same feature that makes one card easy to manage makes it catastrophic to lose. Convenience and security are in direct conflict here.",
  },
  {
    id: 6,
    problem: "B",
    color: "#a78bfa",
    category: "Security Cascade",
    part: "2 of 4",
    readTime: "5 min",
    title: "The Cascade Effect: How One Stolen Card Number Shuts Down Eleven Tools at Once",
    excerpt:
      "A breach does not stay contained to one vendor. It fans outward across every subscription sharing the same payment method. The attack surface is not one compromised tool — it is your entire operational stack, exposed simultaneously with no warning.",
  },
  {
    id: 7,
    problem: "B",
    color: "#a78bfa",
    category: "Security Cascade",
    part: "3 of 4",
    readTime: "4 min",
    title: "Two Days to Re-Link Everything: The Real Hidden Cost of a Payment Breach",
    excerpt:
      "Re-linking eleven tools after a breach takes two full working days. That is over $1,600 in senior engineering time, two disrupted sprints, four vendor support tickets, and a finance team scrambling to reconcile charges. Prevention costs a fraction of recovery.",
  },
  {
    id: 8,
    problem: "B",
    color: "#a78bfa",
    category: "Security Cascade",
    part: "4 of 4",
    readTime: "5 min",
    title: "Card Isolation: How Purpose-Built Virtual Cards Contain Breach Damage to One Vendor",
    excerpt:
      "When each subscription runs on its own isolated card number, a breach is contained by design. Voiding the affected card takes one tap. The rest of your stack keeps running without interruption, re-linking, or a single email to a vendor support team.",
  },
  // Problem C - The Fronting Tax
  {
    id: 9,
    problem: "C",
    color: "#34d399",
    category: "Fronting Tax",
    part: "1 of 4",
    readTime: "3 min",
    title: "The Hidden Cost of Shared Subscriptions: Why Someone Always Ends Up Paying Twice",
    excerpt:
      "Group plans are cheaper per seat in theory. In practice, one person pays the full amount upfront and spends the next three weeks recovering $400 across four Slack threads. The per-seat savings disappear into the cost of chasing people down.",
  },
  {
    id: 10,
    problem: "C",
    color: "#34d399",
    category: "Fronting Tax",
    part: "2 of 4",
    readTime: "4 min",
    title: "Why Slack Is the World's Most Expensive Reimbursement System",
    excerpt:
      "Every message sent chasing a teammate for their share of a tool subscription costs attention, goodwill, and time. When your head of product is sending payment reminders, you have turned a $40-per-month tool into a $400 quarterly admin problem.",
  },
  {
    id: 11,
    problem: "C",
    color: "#34d399",
    category: "Fronting Tax",
    part: "3 of 4",
    readTime: "4 min",
    title: "Senior Talent Shouldn't Be Running Internal Debt Collection for Software Subscriptions",
    excerpt:
      "The average senior hire costs over $100 per hour fully loaded. Three hours a month spent recovering shared subscription costs is $3,600 per year in misallocated senior time — spent on a problem that should not exist at all in a well-run team.",
  },
  {
    id: 12,
    problem: "C",
    color: "#34d399",
    category: "Fronting Tax",
    part: "4 of 4",
    readTime: "5 min",
    title: "Split It Before You Buy It: How Social Cards Eliminate the Fronting Problem Permanently",
    excerpt:
      "The structural fix to fronting is collecting money before the charge runs, not chasing it afterward. A shared card funded by a payment link means every member settles their share before the first billing cycle — nobody fronts, nobody chases, nobody waits.",
  },
  // Problem D - Zombie Tools
  {
    id: 13,
    problem: "D",
    color: "#fb923c",
    category: "Zombie Tools",
    part: "1 of 4",
    readTime: "4 min",
    title: "The Offboarding Blind Spot: Why Ex-Employees Keep Costing You Money for Over a Year",
    excerpt:
      "Most offboarding checklists cover email access, Slack, and Notion. Almost none cover the three SaaS tools an employee signed up for personally and expensed once. Those subscriptions stay active, keep billing, and have no owner — sometimes for 14 months.",
  },
  {
    id: 14,
    problem: "D",
    color: "#fb923c",
    category: "Zombie Tools",
    part: "2 of 4",
    readTime: "5 min",
    title: "What a December Audit Reveals: $2,100 Tied to Emails That No Longer Exist",
    excerpt:
      "Every team that runs a real, line-by-line spend audit finds the same pattern: active subscriptions attached to departed employees, cancelled projects, and tools nobody has opened in six months. The numbers are never small enough to ignore.",
  },
  {
    id: 15,
    problem: "D",
    color: "#fb923c",
    category: "Zombie Tools",
    part: "3 of 4",
    readTime: "3 min",
    title: "Zombie SaaS: The $2,400 Problem With No Alert, No Flag, and No Expiry Date",
    excerpt:
      "Zombie subscriptions do not send warnings. They do not expire. They charge silently every month with no active user, no project, and no owner. The only way to find them is to go actively looking — and most teams never do until the damage is already done.",
  },
  {
    id: 16,
    problem: "D",
    color: "#fb923c",
    category: "Zombie Tools",
    part: "4 of 4",
    readTime: "5 min",
    title: "The Kill-Switch Model: How to Build Subscription Expiry Into Every Tool From Day One",
    excerpt:
      "The fix is not a quarterly audit — audits are retrospective and expensive. The fix is a card-level kill switch that voids billing access in one tap the moment an employee leaves, no cancellation portal, no hold music, no vendor permission required.",
  },
];
