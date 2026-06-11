-- ============================================================
-- PrimeTI Tecnologia — Supabase Schema
-- Como usar: Cole este arquivo no SQL Editor do Supabase
-- Painel: https://supabase.com/dashboard > SQL Editor
-- ============================================================

-- ============================================================
-- TABELAS
-- ============================================================

-- Leads: formulário de contato e solicitações de orçamento
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

-- Newsletter: assinantes de e-mail
CREATE TABLE IF NOT EXISTS newsletter (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  email      TEXT        UNIQUE NOT NULL,
  ativo      BOOLEAN     DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page views: analytics simples
CREATE TABLE IF NOT EXISTS page_views (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  pagina     TEXT        NOT NULL DEFAULT '/',
  referrer   TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- Visitors anônimos só podem inserir — nunca ler dados.
-- Somente usuários autenticados (admin) podem SELECT/UPDATE/DELETE.
-- ============================================================

ALTER TABLE leads      ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Leads: anon INSERT apenas
CREATE POLICY "anon_insert_leads"
  ON leads FOR INSERT TO anon
  WITH CHECK (true);

-- Newsletter: anon INSERT apenas
CREATE POLICY "anon_insert_newsletter"
  ON newsletter FOR INSERT TO anon
  WITH CHECK (true);

-- Page views: anon INSERT apenas
CREATE POLICY "anon_insert_page_views"
  ON page_views FOR INSERT TO anon
  WITH CHECK (true);

-- Admin (authenticated): acesso total
CREATE POLICY "auth_all_leads"
  ON leads FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "auth_all_newsletter"
  ON newsletter FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "auth_all_page_views"
  ON page_views FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- ============================================================
-- ÍNDICES (performance)
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_leads_email      ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created    ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_lido       ON leads(lido);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter(email);
CREATE INDEX IF NOT EXISTS idx_pv_created       ON page_views(created_at DESC);

-- ============================================================
-- VIEWS ÚTEIS (leitura via dashboard Supabase)
-- ============================================================

-- Leads não lidos (novos contatos)
CREATE OR REPLACE VIEW v_leads_novos AS
  SELECT id, nome, email, telefone, servico, mensagem, origem, created_at
  FROM   leads
  WHERE  lido = FALSE
  ORDER  BY created_at DESC;

-- Resumo de visitas por dia
CREATE OR REPLACE VIEW v_visitas_por_dia AS
  SELECT DATE(created_at) AS dia,
         COUNT(*)          AS total
  FROM   page_views
  GROUP  BY DATE(created_at)
  ORDER  BY dia DESC;

-- Total de inscritos na newsletter ativos
CREATE OR REPLACE VIEW v_newsletter_ativos AS
  SELECT COUNT(*) AS total
  FROM   newsletter
  WHERE  ativo = TRUE;

-- ============================================================
-- OPCIONAL: Notificação por e-mail via pg_net + webhook
-- Ative a extensão pg_net em Supabase Dashboard > Extensions
-- Depois configure um webhook no Supabase (Database > Webhooks)
-- apontando para seu endpoint de e-mail (SendGrid, Resend, etc.)
-- ============================================================
