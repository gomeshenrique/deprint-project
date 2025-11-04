import { BannerCarouselContent } from "@/components/banner-carousel-content";
import type { Banner, StrapiResponse } from "@/lib/types";

async function fetchBanners(): Promise<StrapiResponse<Banner> | null> {
  const baseUrl = process.env.STRAPI_BASE_URL || "";
  const apiKey = process.env.STRAPI_KEY || "";

  if (!baseUrl || !apiKey) {
    console.warn("Strapi URL or API Key not configured");
    return null;
  }

  try {
    const response = await fetch(
      `${baseUrl}/api/banners?fields=order&populate=[image_desk][fields][0]=name&populate[image_desk][fields][1]=url&populate[image_desk][fields][2]=width&populate[image_desk][fields][3]=height&populate[image_desk][fields][4]=alternativeText&populate=[image_mobile][fields][0]=name&populate[image_mobile][fields][1]=url&populate[image_mobile][fields][2]=width&populate[image_mobile][fields][3]=height&populate[image_mobile][fields][4]=alternativeText&sort=order:asc`,
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

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return null;
  }
}

export async function BannerCarousel() {
  const banners = await fetchBanners();

  return <BannerCarouselContent banners={banners} />;
}
