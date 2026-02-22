from datetime import datetime


class PostRead:
    id: int
    title: str
    slug: str
    description: str
    content: str | None = None  # None na listagem, preenchido na leitura individual
    cover_image: str | None
    published_at: datetime
    created_at: datetime
    updated_at: datetime


class PostListOut:
    id: int
    title: str
    slug: str
    description: str
    cover_image: str | None
    published_at: datetime
