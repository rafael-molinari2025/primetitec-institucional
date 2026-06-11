-- ============================================================
-- RM PrimeTI Tecnologia — Supabase Schema (idempotente)
-- Pode ser executado múltiplas vezes sem erros.
-- Como usar: SQL Editor do Supabase → cole tudo → Run
-- ============================================================

-- ============================================================
-- TABELAS
-- ============================================================

CREATE TABLE IF NOT EXISTS leads (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  nome       TEXT        NOT NULL,
  email      TEXT        NOT NULL,
  telefone   TEXT,
  servico    TEXT,
  mensagem   TEXT,
  origem     TEXT        DEFAULT 'formulario_site',
  lido       BOOLEAN     DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS newsletter (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  email      TEXT        UNIQUE NOT NULL,
  ativo      BOOLEAN     DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS page_views (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  pagina     TEXT        NOT NULL DEFAULT '/',
  referrer   TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE leads      ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Remove políticas antigas (para reexecução segura)
DROP POLICY IF EXISTS "anon_insert_leads"       ON leads;
DROP POLICY IF EXISTS "anon_insert_newsletter"  ON newsletter;
DROP POLICY IF EXISTS "anon_insert_page_views"  ON page_views;
DROP POLICY IF EXISTS "auth_all_leads"          ON leads;
DROP POLICY IF EXISTS "auth_all_newsletter"     ON newsletter;
DROP POLICY IF EXISTS "auth_all_page_views"     ON page_views;

-- Visitantes anônimos: somente INSERT
CREATE POLICY "anon_insert_leads"
  ON leads FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_insert_newsletter"
  ON newsletter FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_insert_page_views"
  ON page_views FOR INSERT TO anon WITH CHECK (true);

-- Usuários autenticados (admin): acesso total
CREATE POLICY "auth_all_leads"
  ON leads FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_all_newsletter"
  ON newsletter FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_all_page_views"
  ON page_views FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- ÍNDICES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_leads_email      ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created    ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_lido       ON leads(lido);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter(email);
CREATE INDEX IF NOT EXISTS idx_pv_created       ON page_views(created_at DESC);

-- ============================================================
-- VIEWS ÚTEIS
-- ============================================================

CREATE OR REPLACE VIEW v_leads_novos AS
  SELECT id, nome, email, telefone, servico, mensagem, origem, created_at
  FROM   leads
  WHERE  lido = FALSE
  ORDER  BY created_at DESC;

CREATE OR REPLACE VIEW v_visitas_por_dia AS
  SELECT DATE(created_at) AS dia,
         COUNT(*)          AS total
  FROM   page_views
  GROUP  BY DATE(created_at)
  ORDER  BY dia DESC;

CREATE OR REPLACE VIEW v_newsletter_ativos AS
  SELECT COUNT(*) AS total
  FROM   newsletter
  WHERE  ativo = TRUE;
