interface BlogAuthor {
    avatar: string;
    bio: string;
    body: any; // You can define a specific interface for "body" if needed
    created: number;
    deleted_at: number;
    email: string;
    facebook: string;
    full_name: string;
    google_plus: string;
    gravatar_url: string;
    id: number;
    linkedin: string;
    portal_id: number;
    slug: string;
    twitter: string;
    updated: number;
    user_id: number;
    username: string;
    website: string;
  }
  
  interface Widget {
    body: any; // You can define a specific interface for "body" if needed
    name: string;
    meta: any; // You can define a specific interface for "meta" if needed
    type: string;
    id: string;
    css: any; // You can define a specific interface for "css" if needed
  }
  
  interface BlogPost {
    archived: boolean;
    author_user_id: number;
    blog_author: BlogAuthor;
    blog_author_id: number;
    campaign: string | null;
    campaign_name: string | null;
    cloned_from: any; // You can define a specific interface for "cloned_from" if needed
    comment_count: number;
    content_group_id: number;
    created: number;
    deleted_at: number;
    featured_image: string;
    footer_html: string;
    freeze_date: number;
    has_user_changes: boolean;
    head_html: string;
    html_title: string;
    id: number;
    is_draft: boolean;
    meta_description: string;
    name: string;
    performable_url: string | null;
    portal_id: number;
    post_body: string;
    post_summary: string;
    preview_key: string;
    processing_status: string;
    publish_date: number;
    publish_immediately: boolean | null;
    published_url: string;
    rss_body: string;
    rss_summary: string;
    slug: string;
    state: string;
    style_override_id: string | null;
    subcategory: string;
    topic_ids: number[];
    updated: number;
    url: string;
    widget_containers: any; // You can define a specific interface for "widget_containers" if needed
    widgetcontainers: any; // You can define a specific interface for "widgetcontainers" if needed
    widgets: { [key: string]: Widget }; // Use index signature to allow dynamic widget keys
  }
  
  export  interface BlogApiResponse {
    total: number;
    objects: BlogPost[];
    limit: number;
    offset: number;
  }
  