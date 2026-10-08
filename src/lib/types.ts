/** Optional image for a text block (body para, summary, or capabilities). */
export type ContentBlock = {
  text: string;
  image?: string;
  imageAlt?: string;
};

export type Content = {
  title: string;
  subtitle?: string;
  body: ContentBlock[];
  summary?: ContentBlock;
  capabilities?: {
    items: string[];
    image?: string;
    imageAlt?: string;
  };
};
