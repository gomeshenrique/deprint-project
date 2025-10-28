import { BannerCarouselContent } from "@/components/banner-carousel-content";
import type { Banner, BannersResponse } from "@/lib/types";

async function fetchBanners(): Promise<Banner[]> {
  const baseUrl = process.env.STRAPI_BASE_URL || "";
  const apiKey = process.env.STRAPI_KEY || "";

  if (!baseUrl || !apiKey) {
    console.warn("Strapi URL or API Key not configured");
    return [];
  }

  try {
    const response = await fetch(
      `${baseUrl}/api/banners?fields=order&populate=*&sort=order:asc`,
      {
        headers: {
          Authorization: `bearer ${apiKey}`,
        },
        next: { revalidate: 3600 }, // Cache por 1 hora (3600 segundos)
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch banners: ${response.statusText}`);
    }

    const data: BannersResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}

export async function BannerCarousel() {
  const banners = await fetchBanners();

  return <BannerCarouselContent banners={banners} />;
}
