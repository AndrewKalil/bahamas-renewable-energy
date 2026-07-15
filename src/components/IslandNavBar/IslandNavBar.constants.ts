import {
  BatteryCharging,
  Cpu,
  HelpCircle,
  Home,
  LayoutGrid,
  Mail,
  Sun,
  Workflow,
} from "lucide-react";
import type { IslandNavItem } from "@kalortech/shared-components";

export const NAV_SECTION_IDS = [
  "hero",
  "why",
  "packages",
  "equipment",
  "runtime",
  "process",
  "faq",
  "contact",
] as const;

/** Must match MAX_VISIBLE_ITEMS_MOBILE breakpoint in @kalortech/shared-components */
export const NAV_MOBILE_BREAKPOINT = 820;

/**
 * Desktop (6 visible): Home · Why Solar · Packages · Equipment · Battery Runtime · Get a Quote
 * Overflow dropdown: How It Works · FAQ
 */
export const NAV_ITEMS_DESKTOP: IslandNavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "why", label: "Why Solar", icon: Sun },
  { id: "packages", label: "Packages", icon: LayoutGrid },
  { id: "equipment", label: "Equipment", icon: Cpu },
  { id: "runtime", label: "Battery Runtime", icon: BatteryCharging },
  { id: "contact", label: "Get a Quote", icon: Mail },
  { id: "process", label: "How It Works", icon: Workflow },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

/**
 * Mobile (4 visible): Home · Why Solar · Packages · Get a Quote
 * Overflow dropdown: Equipment · Battery Runtime · How It Works · FAQ
 */
export const NAV_ITEMS_MOBILE: IslandNavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "why", label: "Why Solar", icon: Sun },
  { id: "packages", label: "Packages", icon: LayoutGrid },
  { id: "contact", label: "Get a Quote", icon: Mail },
  { id: "equipment", label: "Equipment", icon: Cpu },
  { id: "runtime", label: "Battery Runtime", icon: BatteryCharging },
  { id: "process", label: "How It Works", icon: Workflow },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];
