import { Wrench, Package, Users, GraduationCap } from "lucide-react";

export const services = [
  {
    id: "maintenance",
    slug: "maintenance",
    icon: Wrench,
    color: "from-blue-500 to-blue-600",
    features: [
      "Preventive maintenance programs",
      "Corrective maintenance services",
      "Overhaul and refurbishment",
      "Emergency repair support",
      "Depot management",
    ],
  },
  {
    id: "parts",
    slug: "parts",
    icon: Package,
    color: "from-emerald-500 to-emerald-600",
    features: [
      "Original equipment parts",
      "Certified replacement components",
      "Global supply chain network",
      "Just-in-time delivery",
      "Quality assurance",
    ],
  },
  {
    id: "consulting",
    slug: "consulting",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    features: [
      "Maintenance strategy development",
      "Operations optimization",
      "Asset lifecycle management",
      "Regulatory compliance support",
      "Cost reduction analysis",
    ],
  },
  {
    id: "training",
    slug: "training",
    icon: GraduationCap,
    color: "from-orange-500 to-orange-600",
    features: [
      "Technical skills training",
      "Safety certification programs",
      "Management development",
      "On-site training delivery",
      "E-learning solutions",
    ],
  },
];

export type Service = (typeof services)[number];
