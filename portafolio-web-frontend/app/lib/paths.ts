const rawBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/devcarlosGM-portfolio' : '');

const normalizedBasePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+/, '').replace(/\/+$/, '')}`
  : '';

const joinWithBasePath = (path: string) => {
  const trimmed = path.replace(/^\/+/, '');

  if (!trimmed) {
    return normalizedBasePath || '/';
  }

  return normalizedBasePath ? `${normalizedBasePath}/${trimmed}` : `/${trimmed}`;
};

export const withBasePath = (path: string) => joinWithBasePath(path);

export const withBasePathTrailingSlash = (path: string) => {
  const value = joinWithBasePath(path);
  return value.endsWith('/') ? value : `${value}/`;
};
