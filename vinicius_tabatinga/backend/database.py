from sqlmodel import create_engine, Session, SQLModel
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./blog.db")
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})


def init_db():
    """Cria as tabelas no banco de dados."""
    SQLModel.metadata.create_all(engine)


def get_session():
    """Factory de sessão para injeção de dependência."""
    with Session(engine) as session:
        yield session
