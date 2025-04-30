// src/lib/api.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetch all collections
 * Using revalidation for better static generation compatibility
 */
export async function getCollections() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/collections`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) throw new Error("Failed to fetch collections");
    const data = await res.json();
    return data.collections || [];
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

/**
 * Fetch interior images by collectionId
 * For static pages (SSG/ISR)
 */
export async function getInteriorImagesByCollectionStatic(
  collectionId,
  page = 1,
  limit = 12
) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/interior-images?collectionRef=${collectionId}&page=${page}&limit=${limit}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!res.ok) throw new Error("Failed to fetch interior images");
    return await res.json();
  } catch (error) {
    console.error("Error fetching interior images statically:", error);
    return { interiorImages: [], totalPages: 0, currentPage: 1 };
  }
}

/**
 * Fetch interior images by collectionId
 * For client components or dynamic routes
 */
export async function getInteriorImagesByCollection(
  collectionId,
  page = 1,
  limit = 12
) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/interior-images?collectionRef=${collectionId}&page=${page}&limit=${limit}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch interior images");
    return await res.json();
  } catch (error) {
    console.error("Error fetching interior images:", error);
    return { interiorImages: [], totalPages: 0, currentPage: 1 };
  }
}

/**
 * Fetch a single interior image by ID
 * Using revalidation with shorter time for better UX
 */
export async function getInteriorImageById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/interior-images/${id}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!res.ok) throw new Error("Interior image not found");
    return await res.json();
  } catch (error) {
    console.error("Error fetching interior image:", error);
    return null;
  }
}

/**
 * Fetch all blogs
 * Using revalidation for better static generation compatibility
 */
export const getBlogs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { blogs: [] };
  }
};

/**
 * Fetch a single blog by slug
 * Using revalidation for better static generation compatibility
 */
export const getBlogBySlug = async (slug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog post");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return { blog: null };
  }
};
