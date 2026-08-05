export type ServiceSlug =
  | "website-development"
  | "digital-marketing"
  | "seo"
  | "meta-ads";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "x" | "facebook" | "youtube";
};

export type SiteConfig = {
  name: string;
  legalName: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: string;
  locale: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: ServiceSlug | "other";
  message: string;
};

export type ApiSuccessResponse<T = undefined> = {
  success: true;
  data?: T;
  message?: string;
};

export type ApiErrorResponse = {
  success: false;
  error: string;
  issues?: Record<string, string[]>;
};

export type ApiResponse<T = undefined> = ApiSuccessResponse<T> | ApiErrorResponse;
