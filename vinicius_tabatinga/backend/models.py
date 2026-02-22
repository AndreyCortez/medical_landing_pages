from datetime import datetime
from sqlmodel import Field, SQLModel
import re
import unicodedata


def slugify(text: str) -> str:
    """Gera slug amigável a partir do título."""
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^\w\s-]", "", text.lower())
    text = re.sub(r"[-\s]+", "-", text).strip("-")
    return text or "post"


class Post(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    slug: str = Field(unique=True, index=True)
    description: str = ""
    content: str
    cover_image: str | None = None
    published_at: datetime = Field(default_factory=datetime.utcnow)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
