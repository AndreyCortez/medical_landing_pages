#!/usr/bin/env python3
"""
Sincroniza as configurações do site (site_config.json) com o index.html
para fins de SEO. As meta tags e o JSON-LD são atualizados no HTML para que
o conteúdo esteja presente no documento completo, independente do carregamento
via API no frontend.

Execute após alterar backend/config/site_config.json:
  python scripts/sync_seo.py

Ou adicione ao pré-build no package.json do frontend.
"""
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = PROJECT_ROOT / "backend" / "config" / "site_config.json"
INDEX_PATH = PROJECT_ROOT / "frontend" / "index.html"


def load_config() -> dict:
    with open(CONFIG_PATH, encoding="utf-8") as f:
        return json.load(f)


def build_json_ld(config: dict) -> str:
    c = config["contact"]
    return json.dumps(
        {
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": config["site_name"],
            "description": config["site_description"],
            "telephone": c["whatsapp_number"],
            "email": c["email"],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": c["address"],
            },
            "openingHours": c["hours"],
            "url": config.get("site_url", "https://viniciustabatinga.com.br"),
        },
        ensure_ascii=False,
        indent=2,
    )


def update_index_html(config: dict) -> None:
    content = INDEX_PATH.read_text(encoding="utf-8")

    # Atualizar title
    content = re.sub(
        r'<title>[^<]*</title>',
        f'<title>{config["site_title"]}</title>',
        content,
        count=1,
    )

    # Atualizar meta description
    content = re.sub(
        r'<meta name="description" content="[^"]*"',
        f'<meta name="description" content="{config["site_description"]}"',
        content,
        count=1,
    )

    # JSON-LD: inserir ou substituir
    json_ld = build_json_ld(config)
    schema_script = f'<script type="application/ld+json">\n{json_ld}\n    </script>'

    if 'application/ld+json' in content:
        content = re.sub(
            r'<script type="application/ld\+json">[\s\S]*?</script>',
            schema_script,
            content,
            count=1,
        )
    else:
        # Inserir antes do </head>
        content = content.replace("</head>", f"    {schema_script}\n  </head>")

    # JSON-LD já inclui nome, telefone, email, endereço - Google indexa normalmente
    INDEX_PATH.write_text(content, encoding="utf-8")
    print(f"✓ index.html atualizado com dados de {config['site_name']}")


def main():
    if not CONFIG_PATH.exists():
        print(f"Erro: {CONFIG_PATH} não encontrado")
        return 1
    if not INDEX_PATH.exists():
        print(f"Erro: {INDEX_PATH} não encontrado")
        return 1

    config = load_config()
    update_index_html(config)
    return 0


if __name__ == "__main__":
    exit(main())
