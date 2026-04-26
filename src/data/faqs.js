export const FAQS = [
  {
    q: "Who is Vaultly built for?",
    a: "Vaultly is built for SaaS teams, startups, and growing companies managing multiple software subscriptions. It is most valuable for teams of five or more who deal with ghost charges, forgotten free trials, shared tool costs, or subscriptions that keep running after employees leave.",
  },
  {
    q: "How is Vaultly different from a regular virtual card?",
    a: "A regular virtual card is just a card number. Vaultly cards carry programmable logic that evaluates every charge in real time before the merchant receives approval. The card itself enforces spending rules — blocking, flagging, or allowing charges in under 200ms — instead of simply recording what already happened.",
  },
  {
    q: "What are zombie subscriptions and why should I care?",
    a: "Zombie subscriptions are software tools your team keeps paying for even though nobody uses them — often after a trial, a project, or an employee departure. The average team wastes $4,400 per year on zombie tools. They generate no alerts and no automatic shutoff, so they drain budgets silently for months.",
  },
  {
    q: "What is a ghost charge?",
    a: "A ghost charge is an unrecognized or unauthorized charge on your company card — typically from a free trial that auto-converted to paid, a duplicate billing, or a vendor nobody on the team approved. Ghost charges average $99 per incident and typically go unnoticed for three to six months.",
  },
  {
    q: "How much money is my team actually wasting on subscriptions?",
    a: "Teams waste an average of $700 per employee per year on ghost charges and zombie subscriptions. For a 12-person team, that is over $8,400 disappearing annually without anyone noticing. Vaultly automatically recovers an average of 92% of that wasted spend by blocking unauthorized and forgotten charges in real time.",
  },
  {
    q: "What happens when a team member leaves but their subscriptions keep running?",
    a: "When an employee leaves, any subscription tied to a shared company card continues billing indefinitely with no alert and no automatic cancellation. Vaultly solves this by letting you instantly lock or cancel the card assigned to that person, stopping all associated subscription charges on their last day.",
  },
  {
    q: "What is the risk of using one company card across all subscriptions?",
    a: "Using one card for all subscriptions means a single breach exposes your entire tool stack at once. One compromised card can disrupt AWS, GitHub, Figma, and every other linked service simultaneously. Re-linking all tools after a breach typically takes a team two or more full working days to resolve.",
  },
  {
    q: "How long does it typically take teams to catch a zombie subscription?",
    a: "Most teams catch zombie subscriptions during quarterly or annual audits — meaning a forgotten tool can run undetected for three to twelve months. At an average cost of $99 per incident per month, a single zombie subscription can drain $300 to $1,200 before anyone on the team notices it.",
  },
  {
    q: "How does the 200ms charge interception work?",
    a: "When a merchant attempts to charge a Vaultly card, the card's embedded programmable logic evaluates the charge against your pre-set rules before returning an approval or decline to the merchant. This entire evaluation happens in under 200 milliseconds — faster than a standard card authorization — with no friction for approved charges.",
  },
  {
    q: "How does Vaultly block unauthorized charges in real time?",
    a: "Vaultly evaluates every incoming charge attempt against your pre-configured merchant rules before the transaction is authorized. If the merchant, charge amount, or category falls outside your rules, the card declines the charge instantly before it processes. Charges are stopped proactively, not reversed after the fact.",
  },
  {
    q: "What happens if a Vaultly card is compromised or stolen?",
    a: "If a Vaultly card is compromised, only the subscriptions assigned to that specific card are affected — not your entire tool stack. You lock or cancel the card immediately, and all other Vaultly cards and their subscriptions continue operating without interruption. Damage is contained by design.",
  },
  {
    q: "Does Vaultly store my payment information?",
    a: "Vaultly operates at the card authorization layer, handling charge logic programmatically rather than storing payment data in a traditional sense. For specific details on data handling, PCI compliance, and storage policies, contact the Vaultly team directly or review the privacy documentation at vaultly.bitsclan.us.",
  },
  {
    q: "Can I control who on my team can issue or use Vaultly cards?",
    a: "Yes. Vaultly includes team-level access controls that let administrators define which team members can issue cards, which cards each person can access, and what spending rules apply per card. Each card operates independently with its own permissions and merchant rule set.",
  },
  {
    q: "Can Vaultly help if we use contractor or freelancer tools that need separate billing?",
    a: "Yes. Vaultly's card-per-purpose model is well-suited for contractor billing. You issue a dedicated card for contractor tools, set the merchant rules for that engagement, and lock or close the card when the contract ends. This stops all associated charges immediately with no need to log into individual services.",
  },
  {
    q: "What happens to subscriptions when I lock a card on Vaultly?",
    a: "When you lock a Vaultly card, every future charge attempt from merchants assigned to that card is declined. Each linked subscription will fail on its next billing date, effectively cancelling it automatically — without requiring you to log into each individual service to cancel separately.",
  },
  {
    q: "We already do quarterly audits — why do we still need Vaultly?",
    a: "Quarterly audits catch waste after three months. Vaultly stops it the moment it occurs. The average ghost charge runs for four-plus months before an audit finds it — costing $400 or more per incident before anyone acts. Vaultly eliminates the gap between when waste starts and when your team discovers it.",
  },
  {
    q: "What if a legitimate charge gets blocked accidentally?",
    a: "The Fortress Card only blocks merchants not yet on your approved list. If a legitimate new merchant is declined, you approve them in seconds and the charge can be reprocessed. The system builds your approved list over time, so false positives become increasingly rare the longer you use it.",
  },
];
