const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  path: string;
  urlParamsObject?: Record<string, string>;
  options?: RequestInit;
}

interface BlogFilters {
  search?: string;
  category?: string;
  tag?: string;
  page?: number;
  pageSize?: number;
}

export async function fetchAPI({ path, urlParamsObject = {}, options = {} }: FetchOptions) {
  try {
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      ...options,
    };

    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your Strapi server is running`);
  }
}

export async function getBlogPosts(filters: BlogFilters = {}) {
  const {
    search = '',
    category = '',
    tag = '',
    page = 1,
    pageSize = 10
  } = filters;

  const path = '/blog-posts';
  const urlParamsObject: Record<string, string> = {
    'pagination[page]': String(page),
    'pagination[pageSize]': String(pageSize),
    'sort': 'publishedAt:desc',
    'populate': '*',
  };

  // Add search filter
  if (search) {
    urlParamsObject['filters[$or][0][title][$containsi]'] = search;
    urlParamsObject['filters[$or][1][content][$containsi]'] = search;
    urlParamsObject['filters[$or][2][excerpt][$containsi]'] = search;
  }

  // Add category filter
  if (category) {
    urlParamsObject['filters[category][$eq]'] = category;
  }

  // Add tag filter
  if (tag) {
    urlParamsObject['filters[tags][$contains]'] = tag;
  }

  const response = await fetchAPI({ path, urlParamsObject });
  return response;
}

export async function getBlogPost(slug: string) {
  const path = '/blog-posts';
  const urlParamsObject = {
    'filters[slug][$eq]': slug,
    'populate': '*',
  };

  const response = await fetchAPI({ path, urlParamsObject });
  return response.data[0];
}

export async function getCategories() {
  const path = '/blog-posts';
  const urlParamsObject = {
    'fields': ['category'],
    'pagination[limit]': '-1',
  };

  const response = await fetchAPI({ path, urlParamsObject });
  const categories = [...new Set(response.data.map((post: any) => post.attributes.category))];
  return categories;
}

export async function getTags() {
  const path = '/blog-posts';
  const urlParamsObject = {
    'fields': ['tags'],
    'pagination[limit]': '-1',
  };

  const response = await fetchAPI({ path, urlParamsObject });
  const tags = [...new Set(response.data.flatMap((post: any) => post.attributes.tags || []))];
  return tags;
}

export async function searchBlogPosts(query: string, page = 1, pageSize = 10) {
  return getBlogPosts({ search: query, page, pageSize });
}

export async function getBlogPostsByCategory(category: string, page = 1, pageSize = 10) {
  return getBlogPosts({ category, page, pageSize });
}

export async function getBlogPostsByTag(tag: string, page = 1, pageSize = 10) {
  return getBlogPosts({ tag, page, pageSize });
}