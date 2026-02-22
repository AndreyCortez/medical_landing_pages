import json
from pathlib import Path

from fastapi import FastAPI, Depends, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from contextlib import asynccontextmanager

from database import init_db, get_session
from models import Post

CONFIG_PATH = Path(__file__).resolve().parent / "config" / "site_config.json"


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(
    title="Dr. Vinicius Tabatinga API",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _load_site_config() -> dict:
    """Carrega configurações do site a partir do arquivo JSON."""
    try:
        with open(CONFIG_PATH, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {
            "site_name": "Dr. Vinicius Tabatinga",
            "site_title": "Dr. Vinicius Tabatinga | Oftalmologista",
            "site_description": "Oftalmologista. Agende sua consulta.",
            "cta_label": "Agendar Consulta",
            "contact": {
                "whatsapp_number": "5511999999999",
                "whatsapp_message": "Olá Dr. Vinicius, gostaria de agendar uma consulta.",
                "email": "contato@viniciustabatinga.com.br",
                "phone_display": "(11) 99999-9999",
                "address": "Tabatinga, SP",
                "hours": "Segunda a Sexta-feira: 8h às 18h",
                "map_embed_url": "https://www.google.com/maps?q=Tabatinga,SP,Brazil&output=embed",
            },
        }


@app.get("/")
def read_root():
    return {"message": "Welcome to Dr. Vinicius Tabatinga API"}


@app.get("/api/config")
def get_site_config():
    """Retorna as configurações do site (nome, contato, mensagem padrão, etc.)."""
    return _load_site_config()


@app.get("/api/posts", response_model=dict)
def list_posts(
    session: Session = Depends(get_session),
    limit: int = Query(default=10, le=50, ge=1),
    offset: int = Query(default=0, ge=0),
):
    """Lista posts do blog com paginação."""
    statement = (
        select(Post)
        .order_by(Post.published_at.desc())
    )
    total = len(session.exec(statement).all())
    posts = session.exec(statement.offset(offset).limit(limit)).all()

    items = [
        {
            "id": p.id,
            "title": p.title,
            "slug": p.slug,
            "description": p.description,
            "cover_image": p.cover_image,
            "published_at": p.published_at.isoformat(),
        }
        for p in posts
    ]
    return {"items": items, "total": total}


@app.get("/api/posts/by-slug/{slug}")
def get_post_by_slug(slug: str, session: Session = Depends(get_session)):
    """Retorna um post pelo slug."""
    post = session.exec(select(Post).where(Post.slug == slug)).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post não encontrado")
    return {
        "id": post.id,
        "title": post.title,
        "slug": post.slug,
        "description": post.description,
        "content": post.content,
        "cover_image": post.cover_image,
        "published_at": post.published_at.isoformat(),
        "created_at": post.created_at.isoformat(),
        "updated_at": post.updated_at.isoformat(),
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
