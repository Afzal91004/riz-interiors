const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch all collections
export async function getCollections() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/collections`);
    if (!res.ok) throw new Error("Failed to fetch collections");
    const data = await res.json();
    return data.collections || [];
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

// Fetch interior images by collectionId
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

// Fetch a single interior image by ID
export async function getInteriorImageById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/interior-images/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Interior image not found");
    return await res.json();
  } catch (error) {
    console.error("Error fetching interior image:", error);
    return null;
  }
}

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
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

export const getBlogBySlug = async (slug) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog post");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return { blog: null };
  }
};
