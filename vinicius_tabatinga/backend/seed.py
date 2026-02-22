"""Script para popular o banco com posts de exemplo para o blog."""
from datetime import datetime, timedelta, timezone
from sqlmodel import Session, select
from database import engine
from models import Post

SAMPLE_POSTS = [
    Post(
        title="Cuidados pós-operatórios na cirurgia de catarata",
        slug="cuidados-pos-operatorios-catarata",
        description="Conheça os principais cuidados após a cirurgia de catarata para uma recuperação segura e tranquila.",
        content="""# Cuidados pós-operatórios na cirurgia de catarata

A cirurgia de catarata é um procedimento seguro e eficaz. Para garantir o melhor resultado, é fundamental seguir algumas orientações no período pós-operatório.

## Nos primeiros dias

- **Use o colírio** exatamente como indicado pelo seu médico
- **Evite esfregar os olhos** — use o protetor ocular à noite
- **Não levante peso** ou faça esforços físicos intensos
- **Evite ambientes com poeira** ou vento forte

## Proteção e higiene

- Lave as mãos antes de manusear os colírios
- Mantenha os olhos protegidos durante o dia com óculos escuros
- Evite maquiagem na região dos olhos por pelo menos duas semanas

## Quando retornar ao médico

Siga rigorosamente o calendário de retornos. Entre em contato imediatamente se notar:
- Dor intensa que não melhora com analgésicos
- Piora súbita da visão
- Vermelhidão ou secreção excessiva

Com os cuidados adequados, a recuperação costuma ser rápida e sem complicações.
""",
        cover_image="https://images.unsplash.com/photo-1581594693980-74ee25ad6377?w=800&q=80",
        published_at=datetime.now(timezone.utc) - timedelta(days=5),
    ),
    Post(
        title="Quando trocar os óculos? Sinais de que está na hora",
        slug="quando-trocar-oculos-sinais",
        description="Descubra os principais sinais que indicam que está na hora de trocar sua armação ou lentes.",
        content="""# Quando trocar os óculos? Sinais de que está na hora

Você usa óculos há anos e não sabe se está na hora de trocar? Aqui estão os principais sinais que merecem uma visita ao oftalmologista.

## Sua visão está embaçada

Se as letras parecem *borradas* ou você precisa apertar os olhos para ler, provavelmente o grau mudou. A prescrição pode ter variado e os óculos atuais não estão mais adequados.

## Dores de cabeça frequentes

Dores de cabeça ao usar os óculos, especialmente ao ler ou usar telas, podem indicar:

1. Grau desatualizado
2. Centro óptico desalinhado
3. Astigmatismo não corrigido

## Armação danificada ou desconfortável

- Hastes tortas ou frouxas
- Lentes riscadas que atrapalham a visão
- Armação que escorrega constantemente

Nesses casos, além de ajustes, pode ser hora de investir em um novo par.

## Conclusão

A recomendação é fazer exames de rotina pelo menos a cada um ou dois anos. Não espere os sintomas piorarem — a prevenção faz toda a diferença.
""",
        cover_image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        published_at=datetime.now(timezone.utc) - timedelta(days=12),
    ),
    Post(
        title="Glaucoma: o que você precisa saber sobre a doença silenciosa",
        slug="glaucoma-o-que-voce-precisa-saber",
        description="Entenda o que é glaucoma, como prevenir e por que os exames de rotina são fundamentais.",
        content="""# Glaucoma: o que você precisa saber sobre a doença silenciosa

O glaucoma é uma das principais causas de **cegueira irreversível** no mundo. A boa notícia: com diagnóstico precoce, é possível controlar a doença.

## O que é glaucoma?

É uma neuropatia óptica caracterizada pela perda progressiva das fibras do nervo óptico, geralmente associada ao aumento da pressão intraocular (PIO).

> A doença é chamada de "silenciosa" porque, na maioria dos casos, não apresenta sintomas nas fases iniciais.

## Fatores de risco

| Fator | Descrição |
|-------|-----------|
| Idade | Mais comum após 40 anos |
| Histórico familiar | Parentes com glaucoma |
| Pressão alta | Hipertensão arterial |
| Miopia alta | Grau elevado de miopia |

## Tratamento

O tratamento visa reduzir a PIO através de colírios, laser ou cirurgia. O acompanhamento regular é essencial para estabilizar a doença e preservar a visão.
""",
        cover_image="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
        published_at=datetime.now(timezone.utc) - timedelta(days=20),
    ),
    Post(
        title="Cirurgia refrativa: LASIK e PRK explicadas",
        slug="cirurgia-refrativa-lasik-prk",
        description="Descubra as diferenças entre LASIK e PRK e qual pode ser a melhor opção para você.",
        content="""# Cirurgia refrativa: LASIK e PRK explicadas

Sonha em se livrar dos óculos? A cirurgia refrativa pode ser a solução. Conheça as duas técnicas mais utilizadas.

## LASIK (Laser-Assisted In Situ Keratomileusis)

Na LASIK, cria-se uma **flap** (abertura) na córnea com um instrumento ou laser. O laser remodela o tecido subjacente e o flap é recolocado. A recuperação costuma ser mais rápida.

**Vantagens:**
- Recuperação em poucos dias
- Menor desconforto no pós-operatório
- Resultados estáveis

## PRK (PhotoRefractive Keratectomy)

Na PRK, a camada superficial da córnea (epitélio) é removida antes do laser. O tecido se regenera naturalmente em alguns dias.

**Indicada quando:**
- Córnea mais fina
- Atividades de alto impacto
- Alguns graus de ceratocone

## Qual escolher?

Só o oftalmologista pode indicar a melhor opção após uma avaliação completa. Agende sua consulta para conhecer as possibilidades.
""",
        cover_image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
        published_at=datetime.now(timezone.utc) - timedelta(days=28),
    ),
]


def run():
    with Session(engine) as session:
        added = 0
        for post in SAMPLE_POSTS:
            existing = session.exec(select(Post).where(Post.slug == post.slug)).first()
            if not existing:
                session.add(post)
                added += 1
        session.commit()
        if added > 0:
            print(f"{added} post(s) de exemplo criado(s) com sucesso!")
        else:
            print("Todos os posts de exemplo já existem.")
        print(f"Total de posts no blog: {len(session.exec(select(Post)).all())}")


if __name__ == "__main__":
    from database import init_db
    init_db()
    run()
