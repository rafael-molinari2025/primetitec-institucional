/* RM PrimeTI Tecnologia — i18n.js
   Troca de idioma: Português (Brasil) · Português (Portugal) · English
   O HTML é sempre entregue em pt-BR; as demais traduções são aplicadas em runtime. */
(function () {
  'use strict';

  var STORAGE_KEY   = 'primetitec_lang';
  var SUPPORTED     = ['pt-BR', 'pt-PT', 'en'];
  var DEFAULT_LANG  = 'pt-BR';

  var LANG_META = {
    'pt-BR': { flag: '🇧🇷', code: 'PT-BR' },
    'pt-PT': { flag: '🇵🇹', code: 'PT'    },
    'en':    { flag: '🇬🇧', code: 'EN'    }
  };

  var META = {
    index: {
      'pt-BR': {
        title: 'RM PrimeTI Tecnologia | Manutenção de Computadores e Notebooks · Consultoria em TI · Sistemas',
        description: 'RM PrimeTI Tecnologia: Manutenção de Computadores e Notebooks com garantia, Consultoria em TI e Desenvolvimento de Sites e Sistemas em BH e região. CNPJ: 62.938.903/0001-75.'
      },
      'pt-PT': {
        title: 'RM PrimeTI Tecnologia | Reparação de Computadores e Portáteis · Consultoria em TI · Sistemas',
        description: 'RM PrimeTI Tecnologia: reparação de computadores e portáteis com garantia, consultoria em TI e desenvolvimento de sites e sistemas em Belo Horizonte (BH), Brasil.'
      },
      'en': {
        title: 'RM PrimeTI Tecnologia | Computer & Laptop Repair · IT Consulting · Custom Systems',
        description: 'RM PrimeTI Tecnologia: computer and laptop repair with warranty, IT consulting, and website/system development in Belo Horizonte (BH), Brazil.'
      }
    },
    privacy: {
      'pt-BR': {
        title: 'Política de Privacidade | RM PrimeTI Tecnologia',
        description: 'Política de Privacidade e Proteção de Dados da RM PrimeTI Tecnologia, em conformidade com a LGPD (Lei nº 13.709/2018).'
      },
      'pt-PT': {
        title: 'Política de Privacidade | RM PrimeTI Tecnologia',
        description: 'Política de Privacidade e Proteção de Dados da RM PrimeTI Tecnologia, em conformidade com a LGPD brasileira (Lei nº 13.709/2018).'
      },
      'en': {
        title: 'Privacy Policy | RM PrimeTI Tecnologia',
        description: 'Privacy and Data Protection Policy of RM PrimeTI Tecnologia, in compliance with Brazil’s LGPD (Law No. 13.709/2018).'
      }
    }
  };

  var T = {};

  /* ============================================================
     PORTUGUÊS (PORTUGAL)
     ============================================================ */
  T['pt-PT'] = {
    'nav.home': 'Início', 'nav.services': 'Serviços', 'nav.plans': 'Planos',
    'nav.systems': 'Sistemas', 'nav.portfolio': 'Portefólio', 'nav.products': 'Produtos',
    'nav.faq': 'FAQ', 'nav.contact': 'Contacto', 'nav.openMenu': 'Abrir menu',

    'lang.selectLabel': 'Selecionar idioma',

    'cookie.ariaLabel': 'Aviso de privacidade',
    'cookie.title': 'A sua privacidade importa',
    'cookie.text': 'Utilizamos cookies para melhorar a sua experiência e analisar o tráfego, em conformidade com a <a href="/politica-de-privacidade.html">LGPD</a>.',
    'cookie.decline': 'Recusar',
    'cookie.accept': 'Aceitar todos',

    'hero.ariaLabel': 'Secção inicial',
    'hero.badge': 'Consultoria em TI e Desenvolvimento de Sistemas',
    'hero.title1': 'A sua empresa',
    'hero.title2': 'precisa de tecnologia',
    'hero.title3': 'que funciona?',
    'hero.subtitle': 'Consultoria em TI e desenvolvimento de sites e sistemas personalizados, com atendimento ágil e foco em resultados reais para o seu negócio.',
    'hero.btn1': 'Preciso de Reparação Agora',
    'hero.btn2': 'Ver Todos os Serviços',
    'hero.pill1': 'Equipa especializada em TI',
    'hero.pill2': 'Garantia em contrato',
    'hero.pill3': 'Resposta em até 2h',
    'hero.scroll': 'Deslize para explorar',

    'features.ariaLabel': 'Diferenciais',
    'features.f1': 'Atendimento Garantido', 'features.f2': 'Suporte Rápido',
    'features.f3': 'Suporte Especializado', 'features.f4': 'Empresa Registada',

    'services.tag': 'O que fazemos',
    'services.title': 'Os Nossos <span class="gradient-text">Serviços</span>',
    'services.subtitle': 'Soluções completas em tecnologias de informação para impulsionar o crescimento do seu negócio',
    'services.svc1.ariaLabel': 'Montagem e Reparação de Computadores',
    'services.mostPopular': 'Mais Popular',
    'services.mostPopularAria': 'Serviço mais popular',
    'services.featuresAria': 'Recursos incluídos',
    'services.svc1.title': 'Montagem e Reparação',
    'services.svc1.desc': 'Serviço completo de montagem, reparação e manutenção preventiva e corretiva de computadores e portáteis de todas as marcas e modelos, com diagnóstico preciso.',
    'services.svc1.f1': 'Diagnóstico completo',
    'services.svc1.f2': 'Substituição de componentes',
    'services.svc1.f3': 'Formatação e reinstalação',
    'services.svc1.f4': 'Montagem personalizada (PC Gamer)',
    'services.svc1.cta': 'Pedir Reparação',
    'services.svc2.title': 'Consultoria em TI',
    'services.svc2.desc': 'Análise, planeamento e implementação de infraestrutura tecnológica. Ajudamos a sua empresa a tomar as melhores decisões com eficiência, segurança e visão estratégica.',
    'services.svc2.f1': 'Análise de infraestrutura',
    'services.svc2.f2': 'Segurança da informação',
    'services.svc2.f3': 'Gestão de redes empresariais',
    'services.svc2.f4': 'Suporte técnico especializado',
    'services.svc2.cta': 'Pedir Consultoria',
    'services.svc3.title': 'Desenvolvimento de Sites e Sistemas',
    'services.svc3.desc': 'Criamos sites modernos e sistemas web personalizados para o seu negócio. Do design ao lançamento, entregamos soluções que convertem e crescem consigo.',
    'services.svc3.f1': 'Sites institucionais e landing pages',
    'services.svc3.f2': 'Sistemas web personalizados',
    'services.svc3.f3': 'E-commerce completo',
    'services.svc3.f4': 'Integrações e APIs',
    'services.svc3.cta': 'Pedir Desenvolvimento',

    'plans.tag': 'Planos e investimento',
    'plans.title': 'Planos para <span class="gradient-text">Empresas</span>',
    'plans.subtitle': 'Contrato mensal de manutenção — chega de esperar o computador avariar para chamar o técnico. Escolha o plano ideal para a dimensão da sua empresa.',
    'plans.essential.name': 'Essencial',
    'plans.perMonth': '/mês',
    'plans.essential.f1': 'Até 5 computadores',
    'plans.essential.f2': 'Suporte remoto + 1 visita técnica/mês',
    'plans.essential.f3': 'Manutenção preventiva',
    'plans.essential.f4': 'Atualizações e orientação da equipa',
    'plans.cta': 'Quero este plano',
    'plans.pro.name': 'Profissional',
    'plans.pro.f1': 'Até 10 computadores',
    'plans.pro.f2': 'Suporte remoto ilimitado + 2 visitas/mês',
    'plans.pro.f3': 'Manutenção preventiva',
    'plans.pro.f4': 'Cópia de segurança básica',
    'plans.pro.f5': 'Prioridade no atendimento',
    'plans.biz.name': 'Empresarial',
    'plans.biz.f1': 'Até 20 computadores',
    'plans.biz.f2': 'Atendimento prioritário',
    'plans.biz.f3': 'Cópia de segurança, gestão de rede e infraestrutura',
    'plans.biz.f4': 'Relatório mensal do estado dos equipamentos',
    'plans.note': 'Valores acima de 20 computadores ou estruturas com servidores: orçamento personalizado.',
    'plans.includedTitle': 'O que está sempre incluído',
    'plans.inc1': 'Manutenção preventiva e corretiva de computadores e portáteis',
    'plans.inc2': 'Formatação, limpeza, otimização e remoção de vírus',
    'plans.inc3': 'Suporte remoto ágil em horário comercial',
    'plans.inc4': 'Orientação e boas práticas de segurança para a equipa',
    'plans.inc5': 'Garantia de 90 dias em todos os serviços realizados',
    'plans.excludedTitle': 'Não incluído <span>(cobrado à parte, sempre com aprovação prévia)</span>',
    'plans.excludedText': 'Peças e componentes de substituição · Licenças de software · Serviços de grande dimensão fora do âmbito do plano.',

    'biz.tag': 'Para empresas',
    'biz.title': 'Sistemas para <span class="gradient-text">Empresas</span>',
    'biz.subtitle': 'Software à medida para quem percebe de Departamento Pessoal, Fiscal e RH — não só de código',
    'biz.lead': 'A maioria dos programadores entrega ecrã e base de dados. A RM PrimeTI entrega isso <strong>e</strong> a regra de negócio por trás — porque conhecemos na prática a rotina de DP, o cálculo fiscal e as exigências laborais que o seu sistema precisa de respeitar.',
    'biz.diffAriaLabel': 'O nosso diferencial',
    'biz.diff1.title': 'Departamento Pessoal',
    'biz.diff1.text': 'Folha de pagamento, ponto, férias, rescisão e admissão com as regras da legislação laboral brasileira (CLT) aplicadas corretamente.',
    'biz.diff2.title': 'Fiscal',
    'biz.diff2.text': 'Apuramento de impostos, emissão de faturas e obrigações acessórias integradas ao seu processo real.',
    'biz.diff3.title': 'Recursos Humanos',
    'biz.diff3.text': 'Admissão, avaliação, benefícios e comunicação interna num fluxo que reflete como a sua equipa trabalha.',
    'biz.cardTag': 'À medida',
    'biz.cardTitle': 'Sistema à medida para a sua empresa',
    'biz.cardText': 'Levantamos a regra de negócio junto de quem vive o processo no dia a dia, e construímos um sistema que se encaixa na sua operação — não o contrário.',
    'biz.cardF1': 'Levantamento de requisitos com quem opera o processo',
    'biz.cardF2': 'Sistema desenvolvido e testado com a sua equipa',
    'biz.cardF3': 'Suporte e ajustes após a entrega',
    'biz.cardCta': 'Pedir Proposta',

    'portfolio.tag': 'O Nosso Trabalho',
    'portfolio.title': 'Projetos <span class="gradient-text">Realizados</span>',
    'portfolio.subtitle': 'Uma amostra dos projetos que entregámos com qualidade e dedicação',
    'portfolio.p1.cat': 'Site Institucional',
    'portfolio.p1.title': 'Site para Clínica Médica',
    'portfolio.p1.desc': 'Site responsivo com marcação online, SEO local e integração com o Google Agenda.',
    'portfolio.responsive': 'Responsivo',
    'portfolio.p2.cat': 'Sistema Web',
    'portfolio.p2.title': 'Sistema de Gestão Empresarial',
    'portfolio.p2.desc': 'Dashboard com controlo de vendas, stock, clientes e relatórios em tempo real.',
    'portfolio.p3.cat': 'Consultoria',
    'portfolio.p3.title': 'Infraestrutura de Rede Empresarial',
    'portfolio.p3.desc': 'Projeto e implementação de rede segura para empresa com mais de 50 colaboradores em MG.',
    'portfolio.p4.cat': 'E-commerce',
    'portfolio.p4.title': 'Loja Virtual Completa',
    'portfolio.p4.desc': 'E-commerce com carrinho, pagamento integrado (Mercado Pago) e painel de encomendas.',
    'portfolio.payment': 'Pagamento',
    'portfolio.p5.cat': 'Manutenção',
    'portfolio.p5.title': 'Recuperação de Portátil',
    'portfolio.p5.desc': 'Substituição de ecrã, teclado e placa-mãe com 90 dias de garantia e laudo técnico.',
    'portfolio.hardware': 'Hardware',
    'portfolio.warranty90': 'Garantia 90d',
    'portfolio.report': 'Laudo',
    'portfolio.p6.cat': 'Montagem',
    'portfolio.p6.title': 'PC Gamer Personalizado',
    'portfolio.p6.desc': 'Montagem completa com seleção de componentes, testes de stress e overclock seguro.',
    'portfolio.performance': 'Performance',

    'products.tag': 'O Nosso Portefólio',
    'products.title': 'Produtos <span class="gradient-text">PrimeTI</span>',
    'products.subtitle': 'Sistemas desenvolvidos pela nossa equipa para transformar diferentes segmentos de negócio',
    'products.nexus.tag': 'Rede Social',
    'products.nexus.desc': 'Rede social completa para ligação, interação e criação de comunidades. Ligue pessoas, partilhe ideias e expanda o seu círculo.',
    'products.access': 'Aceder à plataforma',
    'products.belle.tag': 'Agenda',
    'products.belle.desc': 'Sistema de marcações online elegante e inteligente. Os seus clientes marcam sozinhos, 24h por dia, 7 dias por semana.',
    'products.recebi.tag': 'Financeiro',
    'products.recebi.desc': 'Controlo financeiro simplificado e intuitivo. Faça a gestão de recebimentos, cobranças e fluxo de caixa com total segurança.',

    'reviews.tag': 'Prova real',
    'reviews.title': 'Veja as nossas <span class="gradient-text">avaliações no Google</span>',
    'reviews.text': 'Um testemunho no site qualquer um escreve. Uma avaliação verificada no Google é de um cliente real. Veja o que dizem sobre a RM PrimeTI antes de fechar negócio.',
    'reviews.cta': 'Ver avaliações no Google',

    'about.tag': 'Quem somos',
    'about.title': 'Sobre a <span class="gradient-text">PrimeTI</span>',
    'about.p1': 'A <strong>RM PrimeTI Tecnologia</strong> é uma empresa especializada em soluções de tecnologias de informação, comprometida em entregar qualidade, inovação e resultados reais aos nossos clientes.',
    'about.p2': 'Atuamos em consultoria de TI e desenvolvimento de sistemas, sempre com foco na excelência técnica e no sucesso do cliente. A nossa equipa de especialistas está pronta para transformar desafios tecnológicos em oportunidades de crescimento.',
    'about.valuesAria': 'Os nossos valores',
    'about.v1.title': 'Confiabilidade',
    'about.v1.text': 'Entregamos o que prometemos, sempre no prazo',
    'about.v2.title': 'Inovação',
    'about.v2.text': 'Sempre na vanguarda das tendências tecnológicas',
    'about.v3.title': 'Parceria',
    'about.v3.text': 'Crescemos junto com os nossos clientes',
    'about.tileServers': 'Servidores', 'about.tileSecurity': 'Segurança',
    'about.tileData': 'Dados', 'about.tileNetworks': 'Redes',

    'faq.tag': 'Dúvidas',
    'faq.title': 'Perguntas <span class="gradient-text">Frequentes</span>',
    'faq.subtitle': 'Respondemos às principais dúvidas sobre os nossos serviços',
    'faq.q1.q': 'Quanto tempo demora a desenvolver um site?',
    'faq.q1.a': 'Sites institucionais simples ficam prontos em 7 a 15 dias úteis. Projetos mais complexos com sistemas integrados podem demorar de 30 a 60 dias. Alinhamos o prazo antes de iniciar.',
    'faq.q2.q': 'Fazem atendimento ao domicílio?',
    'faq.q2.a': 'Sim! Oferecemos atendimento técnico presencial para reparação de computadores e portáteis, além de suporte em redes e infraestrutura de TI diretamente na sua empresa ou residência, em BH e região.',
    'faq.q3.q': 'Qual a garantia para os serviços de manutenção?',
    'faq.q3.a': 'Oferecemos 90 dias de garantia para todos os serviços de manutenção realizados. Peças substituídas têm a garantia do fabricante. Trabalhamos exclusivamente com componentes de qualidade.',
    'faq.q4.q': 'É possível recuperar dados de um HD ou SSD avariado?',
    'faq.q4.a': 'Em muitos casos, sim. Realizamos diagnóstico gratuito para avaliar as hipóteses de recuperação. O sucesso depende do tipo e extensão do dano. Contacte-nos para verificar o seu caso sem compromisso.',
    'faq.q5.q': 'Atendem empresas de todas as dimensões?',
    'faq.q5.a': 'Sim! Atendemos desde profissionais independentes e pequenos negócios até empresas de média dimensão. Temos soluções adaptadas à realidade de cada cliente, com preços acessíveis e sem contratos abusivos.',
    'faq.q6.q': 'O site desenvolvido funciona bem no telemóvel?',
    'faq.q6.a': 'Sem dúvida! Todos os nossos sites são desenvolvidos com design responsivo mobile-first, funcionando perfeitamente em smartphones, tablets e computadores. O SEO para mobile também é aplicado em todos os projetos.',
    'faq.q7.q': 'Fazem alojamento e manutenção do site após a entrega?',
    'faq.q7.a': 'Sim! Oferecemos planos de alojamento e manutenção mensal com atualizações, cópias de segurança automáticas, suporte técnico e monitorização. Você foca-se no seu negócio e a PrimeTI trata da tecnologia.',
    'faq.q8.q': 'Como funciona a consultoria em TI?',
    'faq.q8.a': 'Começamos com uma reunião de diagnóstico para perceber a situação da sua empresa. De seguida, elaboramos um plano de ação com as melhores soluções dentro do seu orçamento. Acompanhamos a implementação de ponta a ponta.',

    'qq.tag': 'Sem compromisso',
    'qq.title': 'Peça um <span class="gradient-text">Orçamento Rápido</span>',
    'qq.subtitle': 'Preencha em menos de 1 minuto e receba uma proposta personalizada.',
    'qq.b1': 'Resposta em até 2 horas',
    'qq.b2': 'Sem taxa de visita técnica',
    'qq.b3': 'Orçamento 100% gratuito',
    'qq.descLabel': 'Descreva rapidamente o que precisa',
    'qq.descPlaceholder': 'Ex.: Preciso de um site para a minha clínica com formulário de marcação...',
    'qq.submit': 'Pedir Orçamento Grátis',

    'form.name': 'Nome <span class="req">*</span>',
    'form.namePlaceholder': 'O seu nome',
    'form.whatsapp': 'WhatsApp <span class="req">*</span>',
    'form.desiredService': 'Serviço pretendido <span class="req">*</span>',
    'form.selectService': 'Selecione o serviço...',
    'form.opt.maintenance': 'Reparação de Computador / Portátil',
    'form.opt.monthlyPlan': 'Plano Mensal para Empresas',
    'form.opt.assembly': 'Montagem de Computador / PC Gamer',
    'form.opt.consulting': 'Consultoria em TI',
    'form.opt.network': 'Infraestrutura de Rede',
    'form.opt.website': 'Desenvolvimento de Site',
    'form.opt.system': 'Desenvolvimento de Sistema',
    'form.opt.other': 'Outros',
    'form.opt.assemblyShort': 'Montagem de Computador',
    'form.opt.bizSystems': 'Sistemas para Empresas (DP/Fiscal/RH)',
    'form.select': 'Selecione...',
    'form.badge': 'Formulário de Contacto',
    'form.heading': 'Prefere enviar uma mensagem?',
    'form.subheading': 'Preencha o formulário. A nossa equipa responde em até 24h úteis.',
    'form.fullName': 'Nome completo <span class="req">*</span>',
    'form.fullNamePlaceholder': 'O seu nome completo',
    'form.email': 'E-mail <span class="req">*</span>',
    'form.whatsappPhone': 'WhatsApp / Telefone',
    'form.serviceInterest': 'Serviço de interesse',
    'form.message': 'Mensagem',
    'form.messagePlaceholder': 'Descreva o que precisa ou as suas dúvidas...',
    'form.send': 'Enviar mensagem',
    'form.privacy': 'Dados protegidos. Não enviamos spam.',

    'cta.ariaLabel': 'Chamada para ação',
    'cta.title': 'Pronto para transformar a sua empresa com tecnologia?',
    'cta.text': 'Contacte-nos agora e descubra como a PrimeTI pode levar o seu negócio ao próximo nível.',
    'cta.button': 'Falar com Especialista',

    'contact.tag': 'Fale connosco',
    'contact.title': 'Entre em <span class="gradient-text">Contacto</span>',
    'contact.subtitle': 'Estamos prontos para ajudar. Escolha o canal mais conveniente para si.',
    'contact.wppAria': 'Contacto via WhatsApp',
    'contact.startChat': 'Iniciar conversa',
    'contact.emailAria': 'Contacto por e-mail',
    'contact.email': 'E-mail',
    'contact.sendMessage': 'Enviar mensagem',
    'contact.infoAria': 'Dados da empresa',
    'contact.registeredCompany': 'Empresa registada',

    'footer.tagline': 'Transformando negócios através da tecnologia com excelência e inovação desde o primeiro dia.',
    'footer.newsletterText': 'Receba dicas de TI e novidades',
    'footer.newsletterAria': 'E-mail para newsletter',
    'footer.subscribe': 'Subscrever',
    'footer.subscribeAria': 'Subscrever newsletter',
    'footer.navigation': 'Navegação',
    'footer.plansForCompanies': 'Planos para Empresas',
    'footer.systemsForCompanies': 'Sistemas para Empresas',
    'footer.aboutUs': 'Sobre nós',
    'footer.privacyPolicy': 'Política de Privacidade',
    'footer.pcAssembly': 'Montagem de PCs',
    'footer.maintenance': 'Manutenção',
    'footer.webDev': 'Desenvolvimento Web',
    'footer.customSystems': 'Sistemas Personalizados',
    'footer.bizSystemsFull': 'Sistemas para Empresas (DP/Fiscal/RH)',
    'footer.rights': 'RM PrimeTI Tecnologia. Todos os direitos reservados.',
    'footer.madeWith': 'Desenvolvido com',
    'footer.by': 'pela',

    'misc.backToTop': 'Voltar ao topo',
    'misc.wppFloatAria': 'Contactar via WhatsApp',
    'misc.wppTooltip': 'Fale connosco!',
    'misc.wppFloatHref': 'https://wa.me/5531990656645?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20consultoria%20em%20TI%20e%20desenvolvimento%20de%20sistemas%20da%20PrimeTI.',

    'js.qqRequired': 'Preencha os campos obrigatórios (*).',
    'js.sending': 'A enviar…',
    'js.qqSuccess': '✓ Pedido recebido! Entraremos em contacto brevemente.',
    'js.qqRedirect': '✓ A redirecionar para o WhatsApp…',
    'js.leadRequired': 'Por favor, preencha Nome e E-mail.',
    'js.invalidEmail': 'Indique um e-mail válido.',
    'js.leadSuccess': '✓ Mensagem enviada com sucesso! Responderemos brevemente.',
    'js.leadError': 'Erro ao enviar. Tente pelo WhatsApp: (31) 99065-6645',
    'js.emailAlreadyRegistered': 'E-mail já registado. Obrigado!',
    'js.subscribed': '✓ Subscrito!',
    'js.checkEmailConfirmation': 'Obrigado! Verifique o seu e-mail para confirmação.',
    'js.error': 'Erro',
    'js.subscribeError': 'Erro ao subscrever. Tente novamente.',

    /* Política de Privacidade */
    'pp.backLink': 'Voltar ao site',
    'pp.backToSite': '← Voltar ao site principal',
    'pp.h1': 'Política de Privacidade',
    'pp.updated': 'Última atualização: 11 de junho de 2026',
    'pp.summary': '<strong>Resumo:</strong> Recolhemos apenas os dados necessários para o atender (nome, e-mail, telefone). Não vendemos os seus dados a terceiros. Pode solicitar a eliminação a qualquer momento pelo e-mail <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a>. Esta política está em conformidade com a <strong>Lei n.º 13.709/2018 (LGPD)</strong>, a lei brasileira de proteção de dados.',
    'pp.s1.title': '1. Quem somos — Responsável pelo Tratamento dos Dados',
    'pp.s1.p1': '<strong>RM PrimeTI Tecnologia</strong>, pessoa coletiva de direito privado, com o CNPJ n.º 62.938.903/0001-75, sedeada em Minas Gerais, Brasil, é a <strong>responsável</strong> pelos dados pessoais recolhidos através do site <a href="https://www.primetitec.com.br">www.primetitec.com.br</a>.',
    'pp.s1.p2': 'Contacto para questões de privacidade: <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a>',
    'pp.s2.title': '2. Que dados recolhemos e porquê',
    'pp.s2_1.title': '2.1 Formulários de contacto e orçamento',
    'pp.s2_1.intro': 'Quando preenche os nossos formulários, recolhemos:',
    'pp.s2_1.li1': '<strong>Nome completo</strong> — para identificação e personalização do atendimento',
    'pp.s2_1.li2': '<strong>E-mail</strong> — para envio de respostas e propostas',
    'pp.s2_1.li3': '<strong>Telefone / WhatsApp</strong> (opcional) — para contacto ágil quando necessário',
    'pp.s2_1.li4': '<strong>Serviço de interesse e mensagem</strong> — para perceber a sua necessidade e oferecer a solução adequada',
    'pp.s2_1.legal': '<strong>Base legal:</strong> Execução de contrato ou diligências pré-contratuais (Art. 7.º, V, LGPD); interesse legítimo (Art. 7.º, IX, LGPD).',
    'pp.s2_2.title': '2.2 Newsletter',
    'pp.s2_2.p1': 'Ao subscrever a nossa newsletter, recolhemos apenas o seu <strong>e-mail</strong> para envio de conteúdos sobre tecnologia e novidades da empresa. Pode cancelar a qualquer momento clicando em "cancelar subscrição" em qualquer e-mail recebido.',
    'pp.s2_2.legal': '<strong>Base legal:</strong> Consentimento (Art. 7.º, I, LGPD).',
    'pp.s2_3.title': '2.3 Dados de navegação (cookies e analytics)',
    'pp.s2_3.intro': 'Com o seu consentimento, recolhemos dados de navegação de forma anonimizada:',
    'pp.s2_3.li1': '<strong>Páginas visitadas e referência de origem</strong> — através de base de dados interna (Supabase)',
    'pp.s2_3.li2': '<strong>Métricas de utilização</strong> — através do Google Analytics 4 e Microsoft Clarity (mapas de calor)',
    'pp.s2_3.legal': '<strong>Base legal:</strong> Consentimento (Art. 7.º, I, LGPD), obtido através do banner de cookies.',
    'pp.s3.title': '3. Cookies',
    'pp.s3.thCookie': 'Cookie', 'pp.s3.thPurpose': 'Finalidade', 'pp.s3.thValidity': 'Validade',
    'pp.s3.row1purpose': 'Guarda a preferência de consentimento de cookies',
    'pp.s3.row1validity': 'Sessão / localStorage',
    'pp.s3.row2purpose': 'Google Analytics — análise de tráfego anonimizado',
    'pp.s3.row2validity': 'Até 2 anos',
    'pp.s3.row3purpose': 'Microsoft Clarity — mapa de calor e gravação de sessão',
    'pp.s3.row3validity': 'Até 1 ano',
    'pp.s3.after': 'Pode recusar cookies a qualquer momento — o seu consentimento pode ser revertido limpando os dados do site no seu navegador.',
    'pp.s4.title': '4. Com quem partilhamos os seus dados',
    'pp.s4.intro': 'Os seus dados são partilhados apenas com <strong>operadores técnicos</strong> para efeitos de prestação do serviço:',
    'pp.s4.li1': '<strong>Supabase Inc.</strong> (EUA) — armazenamento seguro de leads e newsletter em base de dados encriptada. <a href="https://supabase.com/privacy" target="_blank" rel="noopener">Política de privacidade da Supabase</a>',
    'pp.s4.li2': '<strong>Google LLC</strong> (EUA) — Analytics, apenas se consentir. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política da Google</a>',
    'pp.s4.li3': '<strong>Microsoft Corporation</strong> (EUA) — Clarity, apenas se consentir. <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener">Política da Microsoft</a>',
    'pp.s4.outro': '<strong>Não vendemos, alugamos nem cedemos os seus dados pessoais a terceiros</strong> para fins comerciais.',
    'pp.s5.title': '5. Transferência internacional de dados',
    'pp.s5.p': 'Ao utilizar os nossos serviços, os seus dados podem ser processados nos Estados Unidos, onde os nossos operadores (Supabase, Google, Microsoft) mantêm infraestrutura. Estas transferências são realizadas com salvaguardas adequadas (cláusulas contratuais-tipo e certificações de segurança).',
    'pp.s6.title': '6. Segurança dos dados',
    'pp.s6.intro': 'Adotamos medidas técnicas e organizativas para proteger os seus dados:',
    'pp.s6.li1': 'Ligações encriptadas via <strong>HTTPS/TLS</strong>',
    'pp.s6.li2': 'Base de dados com <strong>Row Level Security (RLS)</strong> — os visitantes do site só podem inserir dados, nunca ler ou editar',
    'pp.s6.li3': 'Acesso ao painel administrativo restrito a utilizadores autenticados',
    'pp.s6.li4': 'Chaves de API anónimas sem privilégios administrativos no front-end',
    'pp.s6.after': 'Em caso de incidente de segurança que possa afetar os seus dados, notificaremos a ANPD e os titulares afetados dentro do prazo estabelecido pela LGPD.',
    'pp.s7.title': '7. Os seus direitos como titular dos dados (LGPD, Art. 18)',
    'pp.s7.li1': '<strong>Confirmação e acesso</strong> — saber se tratamos os seus dados e ter acesso a eles',
    'pp.s7.li2': '<strong>Correção</strong> — solicitar a correção de dados incompletos, inexatos ou desatualizados',
    'pp.s7.li3': '<strong>Anonimização, bloqueio ou eliminação</strong> — de dados desnecessários ou excessivos',
    'pp.s7.li4': '<strong>Portabilidade</strong> — receber os seus dados em formato estruturado',
    'pp.s7.li5': '<strong>Eliminação</strong> — solicitar a eliminação dos dados tratados com base em consentimento',
    'pp.s7.li6': '<strong>Informação</strong> — ser informado sobre com quem os seus dados são partilhados',
    'pp.s7.li7': '<strong>Revogação do consentimento</strong> — retirar o consentimento a qualquer momento',
    'pp.s7.li8': '<strong>Oposição</strong> — contestar o tratamento realizado em desacordo com a lei',
    'pp.s7.after': 'Para exercer qualquer direito, envie um e-mail para <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a> com o assunto "Solicitação LGPD". Responderemos em até <strong>15 dias úteis</strong>.',
    'pp.s8.title': '8. Retenção dos dados',
    'pp.s8.li1': '<strong>Leads / formulários de contacto:</strong> mantidos por até 2 anos após o último contacto, ou enquanto existir relação comercial',
    'pp.s8.li2': '<strong>Newsletter:</strong> mantidos enquanto não solicitar o cancelamento da subscrição',
    'pp.s8.li3': '<strong>Dados de navegação (analytics):</strong> anonimizados após 14 meses pela configuração padrão do Google Analytics',
    'pp.s9.title': '9. Links para sites externos',
    'pp.s9.p': 'O nosso site contém links para sites de terceiros (Google, GitHub, parceiros). Esta Política de Privacidade aplica-se exclusivamente ao <strong>www.primetitec.com.br</strong> e aos subdomínios dos nossos produtos. Recomendamos a leitura das políticas dos sites externos antes de partilhar os seus dados com eles.',
    'pp.s10.title': '10. Alterações a esta política',
    'pp.s10.p': 'Podemos atualizar esta Política periodicamente. A data da última atualização é indicada no topo desta página. Alterações significativas serão comunicadas por e-mail aos subscritores da nossa newsletter.',
    'pp.s11.title': '11. Contacto e Encarregado de Proteção de Dados',
    'pp.s11.card': '<strong>RM PrimeTI Tecnologia</strong><br>CNPJ: 62.938.903/0001-75 — Minas Gerais, Brasil<br>E-mail de privacidade: <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a><br>Contacto comercial: <a href="mailto:comercial@primetitec.com.br">comercial@primetitec.com.br</a> | (31) 99065-6645',
    'pp.s11.after': 'Também pode apresentar reclamações junto da <strong>Autoridade Nacional de Proteção de Dados brasileira (ANPD)</strong>: <a href="https://www.gov.br/anpd" target="_blank" rel="noopener">www.gov.br/anpd</a>'
  };

  /* ============================================================
     ENGLISH
     ============================================================ */
  T['en'] = {
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.plans': 'Plans',
    'nav.systems': 'Systems', 'nav.portfolio': 'Portfolio', 'nav.products': 'Products',
    'nav.faq': 'FAQ', 'nav.contact': 'Contact', 'nav.openMenu': 'Open menu',

    'lang.selectLabel': 'Select language',

    'cookie.ariaLabel': 'Privacy notice',
    'cookie.title': 'Your privacy matters',
    'cookie.text': 'We use cookies to improve your experience and analyze traffic, in compliance with Brazil’s <a href="/politica-de-privacidade.html">LGPD</a>.',
    'cookie.decline': 'Decline',
    'cookie.accept': 'Accept all',

    'hero.ariaLabel': 'Hero section',
    'hero.badge': 'IT Consulting & Custom Software Development',
    'hero.title1': 'Does your business',
    'hero.title2': 'need technology',
    'hero.title3': 'that works?',
    'hero.subtitle': 'IT consulting and custom website/system development, with agile service and a focus on real results for your business.',
    'hero.btn1': 'I Need Repair Now',
    'hero.btn2': 'View All Services',
    'hero.pill1': 'Specialized IT team',
    'hero.pill2': 'Warranty in contract',
    'hero.pill3': 'Response within 2h',
    'hero.scroll': 'Scroll to explore',

    'features.ariaLabel': 'Highlights',
    'features.f1': 'Guaranteed Service', 'features.f2': 'Fast Support',
    'features.f3': 'Specialized Support', 'features.f4': 'Registered Company',

    'services.tag': 'What we do',
    'services.title': 'Our <span class="gradient-text">Services</span>',
    'services.subtitle': 'Complete information technology solutions to drive your business growth',
    'services.svc1.ariaLabel': 'Computer Assembly and Repair',
    'services.mostPopular': 'Most Popular',
    'services.mostPopularAria': 'Most popular service',
    'services.featuresAria': 'Included features',
    'services.svc1.title': 'Assembly and Repair',
    'services.svc1.desc': 'Complete assembly, repair, and preventive/corrective maintenance of computers and laptops of all brands and models, with precise diagnostics.',
    'services.svc1.f1': 'Full diagnostics',
    'services.svc1.f2': 'Component replacement',
    'services.svc1.f3': 'Formatting and reinstallation',
    'services.svc1.f4': 'Custom builds (Gaming PC)',
    'services.svc1.cta': 'Request Repair',
    'services.svc2.title': 'IT Consulting',
    'services.svc2.desc': 'Analysis, planning, and implementation of technology infrastructure. We help your company make the best decisions with efficiency, security, and strategic vision.',
    'services.svc2.f1': 'Infrastructure analysis',
    'services.svc2.f2': 'Information security',
    'services.svc2.f3': 'Corporate network management',
    'services.svc2.f4': 'Specialized technical support',
    'services.svc2.cta': 'Request Consulting',
    'services.svc3.title': 'Website and System Development',
    'services.svc3.desc': 'We build modern websites and custom web systems for your business. From design to deployment, we deliver solutions that convert and grow with you.',
    'services.svc3.f1': 'Institutional sites and landing pages',
    'services.svc3.f2': 'Custom web systems',
    'services.svc3.f3': 'Full e-commerce',
    'services.svc3.f4': 'Integrations and APIs',
    'services.svc3.cta': 'Request Development',

    'plans.tag': 'Plans and investment',
    'plans.title': 'Plans for <span class="gradient-text">Businesses</span>',
    'plans.subtitle': 'Monthly maintenance contract — stop waiting for the computer to break before calling a technician. Choose the ideal plan for your company’s size.',
    'plans.essential.name': 'Essential',
    'plans.perMonth': '/mo',
    'plans.essential.f1': 'Up to 5 computers',
    'plans.essential.f2': 'Remote support + 1 technical visit/month',
    'plans.essential.f3': 'Preventive maintenance',
    'plans.essential.f4': 'Updates and team guidance',
    'plans.cta': 'I want this plan',
    'plans.pro.name': 'Professional',
    'plans.pro.f1': 'Up to 10 computers',
    'plans.pro.f2': 'Unlimited remote support + 2 visits/month',
    'plans.pro.f3': 'Preventive maintenance',
    'plans.pro.f4': 'Basic backup',
    'plans.pro.f5': 'Priority service',
    'plans.biz.name': 'Enterprise',
    'plans.biz.f1': 'Up to 20 computers',
    'plans.biz.f2': 'Priority service',
    'plans.biz.f3': 'Backup, network and infrastructure management',
    'plans.biz.f4': 'Monthly equipment health report',
    'plans.note': 'Above 20 computers or setups with servers: custom quote.',
    'plans.includedTitle': 'What’s always included',
    'plans.inc1': 'Preventive and corrective maintenance of computers and laptops',
    'plans.inc2': 'Formatting, cleanup, optimization, and virus removal',
    'plans.inc3': 'Agile remote support during business hours',
    'plans.inc4': 'Security guidance and best practices for the team',
    'plans.inc5': '90-day warranty on all services performed',
    'plans.excludedTitle': 'Not included <span>(billed separately, always with prior approval)</span>',
    'plans.excludedText': 'Replacement parts and components · Software licenses · Large-scale services outside the plan’s scope.',

    'biz.tag': 'For businesses',
    'biz.title': 'Systems for <span class="gradient-text">Businesses</span>',
    'biz.subtitle': 'Custom software from people who understand HR/Payroll, Tax, and People Operations — not just code',
    'biz.lead': 'Most developers deliver a screen and a database. RM PrimeTI delivers that <strong>and</strong> the business logic behind it — because we know first-hand the payroll routine, tax calculations, and labor requirements your system needs to respect.',
    'biz.diffAriaLabel': 'Our difference',
    'biz.diff1.title': 'HR / Payroll',
    'biz.diff1.text': 'Payroll, time tracking, vacation, termination, and onboarding with Brazilian labor law (CLT) rules applied correctly.',
    'biz.diff2.title': 'Tax',
    'biz.diff2.text': 'Tax calculation, invoice issuance, and ancillary obligations integrated into your real process.',
    'biz.diff3.title': 'Human Resources',
    'biz.diff3.text': 'Onboarding, performance reviews, benefits, and internal communication in a flow that reflects how your team actually works.',
    'biz.cardTag': 'Custom-built',
    'biz.cardTitle': 'A custom system for your business',
    'biz.cardText': 'We gather business rules together with the people who live the process day to day, and build a system that fits your operation — not the other way around.',
    'biz.cardF1': 'Requirements gathering with the people who run the process',
    'biz.cardF2': 'System developed and tested with your team',
    'biz.cardF3': 'Support and adjustments after delivery',
    'biz.cardCta': 'Request Proposal',

    'portfolio.tag': 'Our Work',
    'portfolio.title': 'Completed <span class="gradient-text">Projects</span>',
    'portfolio.subtitle': 'A sample of the projects we’ve delivered with quality and dedication',
    'portfolio.p1.cat': 'Institutional Website',
    'portfolio.p1.title': 'Website for a Medical Clinic',
    'portfolio.p1.desc': 'Responsive website with online scheduling, local SEO, and Google Calendar integration.',
    'portfolio.responsive': 'Responsive',
    'portfolio.p2.cat': 'Web System',
    'portfolio.p2.title': 'Business Management System',
    'portfolio.p2.desc': 'Dashboard with sales, inventory, customer, and real-time reporting controls.',
    'portfolio.p3.cat': 'Consulting',
    'portfolio.p3.title': 'Corporate Network Infrastructure',
    'portfolio.p3.desc': 'Design and deployment of a secure network for a company with 50+ employees in Minas Gerais.',
    'portfolio.p4.cat': 'E-commerce',
    'portfolio.p4.title': 'Full Online Store',
    'portfolio.p4.desc': 'E-commerce with cart, integrated payment (Mercado Pago), and order dashboard.',
    'portfolio.payment': 'Payment',
    'portfolio.p5.cat': 'Maintenance',
    'portfolio.p5.title': 'Laptop Recovery',
    'portfolio.p5.desc': 'Screen, keyboard, and motherboard replacement with a 90-day warranty and technical report.',
    'portfolio.hardware': 'Hardware',
    'portfolio.warranty90': '90-day warranty',
    'portfolio.report': 'Report',
    'portfolio.p6.cat': 'Assembly',
    'portfolio.p6.title': 'Custom Gaming PC',
    'portfolio.p6.desc': 'Full build with component selection, stress testing, and safe overclocking.',
    'portfolio.performance': 'Performance',

    'products.tag': 'Our Portfolio',
    'products.title': '<span class="gradient-text">PrimeTI</span> Products',
    'products.subtitle': 'Systems built by our team to transform different business segments',
    'products.nexus.tag': 'Social Network',
    'products.nexus.desc': 'A complete social network for connection, interaction, and community building. Connect people, share ideas, and grow your circle.',
    'products.access': 'Access platform',
    'products.belle.tag': 'Scheduling',
    'products.belle.desc': 'An elegant, smart online scheduling system. Your customers book on their own, 24/7.',
    'products.recebi.tag': 'Finance',
    'products.recebi.desc': 'Simplified, intuitive financial control. Manage receivables, billing, and cash flow with total security.',

    'reviews.tag': 'Real proof',
    'reviews.title': 'Check our <span class="gradient-text">Google reviews</span>',
    'reviews.text': 'Anyone can write a testimonial on a website. A verified Google review comes from a real customer. See what people say about RM PrimeTI before you decide.',
    'reviews.cta': 'See reviews on Google',

    'about.tag': 'Who we are',
    'about.title': 'About <span class="gradient-text">PrimeTI</span>',
    'about.p1': '<strong>RM PrimeTI Tecnologia</strong> is a company specialized in information technology solutions, committed to delivering quality, innovation, and real results for our clients.',
    'about.p2': 'We work in IT consulting and system development, always focused on technical excellence and client success. Our team of specialists is ready to turn technology challenges into growth opportunities.',
    'about.valuesAria': 'Our values',
    'about.v1.title': 'Reliability',
    'about.v1.text': 'We deliver what we promise, always on time',
    'about.v2.title': 'Innovation',
    'about.v2.text': 'Always at the forefront of technology trends',
    'about.v3.title': 'Partnership',
    'about.v3.text': 'We grow together with our clients',
    'about.tileServers': 'Servers', 'about.tileSecurity': 'Security',
    'about.tileData': 'Data', 'about.tileNetworks': 'Networks',

    'faq.tag': 'Questions',
    'faq.title': 'Frequently Asked <span class="gradient-text">Questions</span>',
    'faq.subtitle': 'We answer the most common questions about our services',
    'faq.q1.q': 'How long does it take to build a website?',
    'faq.q1.a': 'Simple institutional sites are ready in 7 to 15 business days. More complex projects with integrated systems can take 30 to 60 days. We agree on the timeline before starting.',
    'faq.q2.q': 'Do you offer on-site service?',
    'faq.q2.a': 'Yes! We offer in-person technical service for computer and laptop repair, plus network and IT infrastructure support directly at your company or home in Belo Horizonte (BH) and the surrounding region.',
    'faq.q3.q': 'What warranty do you offer on maintenance services?',
    'faq.q3.a': 'We offer a 90-day warranty on all maintenance services performed. Replaced parts carry the manufacturer’s warranty. We work exclusively with quality components.',
    'faq.q4.q': 'Can data be recovered from a damaged HDD or SSD?',
    'faq.q4.a': 'In many cases, yes. We perform a free diagnosis to assess recovery chances. Success depends on the type and extent of the damage. Contact us to check your case with no obligation.',
    'faq.q5.q': 'Do you serve businesses of all sizes?',
    'faq.q5.a': 'Yes! We serve everyone from freelancers and small businesses to mid-sized companies. We have solutions tailored to each client’s reality, with accessible prices and no abusive contracts.',
    'faq.q6.q': 'Does the website work well on mobile?',
    'faq.q6.a': 'Absolutely! All our websites are built with mobile-first responsive design, working perfectly on smartphones, tablets, and desktops. Mobile SEO is applied to every project as well.',
    'faq.q7.q': 'Do you host and maintain the site after delivery?',
    'faq.q7.a': 'Yes! We offer hosting and monthly maintenance plans with updates, automatic backups, technical support, and monitoring. You focus on your business, and PrimeTI takes care of the technology.',
    'faq.q8.q': 'How does IT consulting work?',
    'faq.q8.a': 'We start with a diagnostic meeting to understand your company’s situation. Then we put together an action plan with the best solutions within your budget. We follow the implementation from start to finish.',

    'qq.tag': 'No obligation',
    'qq.title': 'Request a <span class="gradient-text">Quick Quote</span>',
    'qq.subtitle': 'Fill it out in under 1 minute and get a personalized proposal.',
    'qq.b1': 'Response within 2 hours',
    'qq.b2': 'No technical visit fee',
    'qq.b3': '100% free quote',
    'qq.descLabel': 'Briefly describe what you need',
    'qq.descPlaceholder': 'E.g.: I need a website for my clinic with a booking form...',
    'qq.submit': 'Request Free Quote',

    'form.name': 'Name <span class="req">*</span>',
    'form.namePlaceholder': 'Your name',
    'form.whatsapp': 'WhatsApp <span class="req">*</span>',
    'form.desiredService': 'Desired service <span class="req">*</span>',
    'form.selectService': 'Select a service...',
    'form.opt.maintenance': 'Computer / Laptop Repair',
    'form.opt.monthlyPlan': 'Monthly Plan for Businesses',
    'form.opt.assembly': 'Computer Build / Gaming PC',
    'form.opt.consulting': 'IT Consulting',
    'form.opt.network': 'Network Infrastructure',
    'form.opt.website': 'Website Development',
    'form.opt.system': 'System Development',
    'form.opt.other': 'Other',
    'form.opt.assemblyShort': 'Computer Assembly',
    'form.opt.bizSystems': 'Business Systems (HR/Payroll, Tax, HR)',
    'form.select': 'Select...',
    'form.badge': 'Contact Form',
    'form.heading': 'Prefer to send a message?',
    'form.subheading': 'Fill out the form. Our team replies within 24 business hours.',
    'form.fullName': 'Full name <span class="req">*</span>',
    'form.fullNamePlaceholder': 'Your full name',
    'form.email': 'Email <span class="req">*</span>',
    'form.whatsappPhone': 'WhatsApp / Phone',
    'form.serviceInterest': 'Service of interest',
    'form.message': 'Message',
    'form.messagePlaceholder': 'Describe what you need or your questions...',
    'form.send': 'Send message',
    'form.privacy': 'Your data is protected. We don’t send spam.',

    'cta.ariaLabel': 'Call to action',
    'cta.title': 'Ready to transform your business with technology?',
    'cta.text': 'Contact us now and find out how PrimeTI can take your business to the next level.',
    'cta.button': 'Talk to a Specialist',

    'contact.tag': 'Get in touch',
    'contact.title': 'Contact <span class="gradient-text">Us</span>',
    'contact.subtitle': 'We’re ready to help. Choose the most convenient channel for you.',
    'contact.wppAria': 'Contact via WhatsApp',
    'contact.startChat': 'Start chat',
    'contact.emailAria': 'Contact by email',
    'contact.email': 'Email',
    'contact.sendMessage': 'Send message',
    'contact.infoAria': 'Company details',
    'contact.registeredCompany': 'Registered company',

    'footer.tagline': 'Transforming businesses through technology with excellence and innovation since day one.',
    'footer.newsletterText': 'Get IT tips and news',
    'footer.newsletterAria': 'Email for newsletter',
    'footer.subscribe': 'Subscribe',
    'footer.subscribeAria': 'Subscribe to newsletter',
    'footer.navigation': 'Navigation',
    'footer.plansForCompanies': 'Plans for Businesses',
    'footer.systemsForCompanies': 'Systems for Businesses',
    'footer.aboutUs': 'About us',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.pcAssembly': 'PC Assembly',
    'footer.maintenance': 'Maintenance',
    'footer.webDev': 'Web Development',
    'footer.customSystems': 'Custom Systems',
    'footer.bizSystemsFull': 'Business Systems (HR/Payroll, Tax, HR)',
    'footer.rights': 'RM PrimeTI Tecnologia. All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.by': 'by',

    'misc.backToTop': 'Back to top',
    'misc.wppFloatAria': 'Contact us on WhatsApp',
    'misc.wppTooltip': 'Chat with us!',
    'misc.wppFloatHref': 'https://wa.me/5531990656645?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20consultoria%20em%20TI%20e%20desenvolvimento%20de%20sistemas%20da%20PrimeTI.',

    'js.qqRequired': 'Please fill in the required fields (*).',
    'js.sending': 'Sending…',
    'js.qqSuccess': '✓ Request received! We’ll be in touch shortly.',
    'js.qqRedirect': '✓ Redirecting to WhatsApp…',
    'js.leadRequired': 'Please fill in Name and Email.',
    'js.invalidEmail': 'Please enter a valid email.',
    'js.leadSuccess': '✓ Message sent successfully! We’ll get back to you shortly.',
    'js.leadError': 'Failed to send. Try WhatsApp instead: (31) 99065-6645',
    'js.emailAlreadyRegistered': 'Email already registered. Thank you!',
    'js.subscribed': '✓ Subscribed!',
    'js.checkEmailConfirmation': 'Thank you! Check your email for confirmation.',
    'js.error': 'Error',
    'js.subscribeError': 'Failed to subscribe. Please try again.',

    /* Privacy Policy */
    'pp.backLink': 'Back to site',
    'pp.backToSite': '← Back to main site',
    'pp.h1': 'Privacy Policy',
    'pp.updated': 'Last updated: June 11, 2026',
    'pp.summary': '<strong>Summary:</strong> We only collect the data needed to serve you (name, email, phone). We do not sell your data to third parties. You can request deletion at any time by emailing <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a>. This policy complies with Brazil’s <strong>Law No. 13.709/2018 (LGPD)</strong>, the Brazilian data protection law.',
    'pp.s1.title': '1. Who we are — Data Controller',
    'pp.s1.p1': '<strong>RM PrimeTI Tecnologia</strong>, a private legal entity registered under Brazilian company ID (CNPJ) No. 62.938.903/0001-75, headquartered in Minas Gerais, Brazil, is the <strong>controller</strong> of the personal data collected through the website <a href="https://www.primetitec.com.br">www.primetitec.com.br</a>.',
    'pp.s1.p2': 'Contact for privacy matters: <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a>',
    'pp.s2.title': '2. What data we collect and why',
    'pp.s2_1.title': '2.1 Contact and quote forms',
    'pp.s2_1.intro': 'When you fill out our forms, we collect:',
    'pp.s2_1.li1': '<strong>Full name</strong> — for identification and personalized service',
    'pp.s2_1.li2': '<strong>Email</strong> — to send replies and proposals',
    'pp.s2_1.li3': '<strong>Phone / WhatsApp</strong> (optional) — for quick contact when needed',
    'pp.s2_1.li4': '<strong>Service of interest and message</strong> — to understand your need and offer the right solution',
    'pp.s2_1.legal': '<strong>Legal basis:</strong> Contract performance or pre-contractual steps (Art. 7, V, LGPD); legitimate interest (Art. 7, IX, LGPD).',
    'pp.s2_2.title': '2.2 Newsletter',
    'pp.s2_2.p1': 'When you subscribe to our newsletter, we collect only your <strong>email</strong> to send technology content and company updates. You can unsubscribe at any time by clicking "unsubscribe" in any email you receive.',
    'pp.s2_2.legal': '<strong>Legal basis:</strong> Consent (Art. 7, I, LGPD).',
    'pp.s2_3.title': '2.3 Browsing data (cookies and analytics)',
    'pp.s2_3.intro': 'With your consent, we collect anonymized browsing data:',
    'pp.s2_3.li1': '<strong>Pages visited and referral source</strong> — via our internal database (Supabase)',
    'pp.s2_3.li2': '<strong>Usage metrics</strong> — via Google Analytics 4 and Microsoft Clarity (heatmaps)',
    'pp.s2_3.legal': '<strong>Legal basis:</strong> Consent (Art. 7, I, LGPD), obtained through the cookie banner.',
    'pp.s3.title': '3. Cookies',
    'pp.s3.thCookie': 'Cookie', 'pp.s3.thPurpose': 'Purpose', 'pp.s3.thValidity': 'Duration',
    'pp.s3.row1purpose': 'Stores your cookie consent preference',
    'pp.s3.row1validity': 'Session / localStorage',
    'pp.s3.row2purpose': 'Google Analytics — anonymized traffic analysis',
    'pp.s3.row2validity': 'Up to 2 years',
    'pp.s3.row3purpose': 'Microsoft Clarity — heatmaps and session recording',
    'pp.s3.row3validity': 'Up to 1 year',
    'pp.s3.after': 'You can decline cookies at any time — your consent can be reverted by clearing this site’s data in your browser.',
    'pp.s4.title': '4. Who we share your data with',
    'pp.s4.intro': 'Your data is shared only with <strong>technical service providers</strong> for the purpose of delivering our service:',
    'pp.s4.li1': '<strong>Supabase Inc.</strong> (USA) — secure storage of leads and newsletter data in an encrypted database. <a href="https://supabase.com/privacy" target="_blank" rel="noopener">Supabase Privacy Policy</a>',
    'pp.s4.li2': '<strong>Google LLC</strong> (USA) — Analytics, only if you consent. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Policy</a>',
    'pp.s4.li3': '<strong>Microsoft Corporation</strong> (USA) — Clarity, only if you consent. <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener">Microsoft Policy</a>',
    'pp.s4.outro': '<strong>We do not sell, rent, or transfer your personal data to third parties</strong> for commercial purposes.',
    'pp.s5.title': '5. International data transfer',
    'pp.s5.p': 'By using our services, your data may be processed in the United States, where our service providers (Supabase, Google, Microsoft) maintain infrastructure. These transfers are carried out with appropriate safeguards (standard contractual clauses and security certifications).',
    'pp.s6.title': '6. Data security',
    'pp.s6.intro': 'We adopt technical and organizational measures to protect your data:',
    'pp.s6.li1': 'Encrypted connections via <strong>HTTPS/TLS</strong>',
    'pp.s6.li2': 'Database with <strong>Row Level Security (RLS)</strong> — website visitors can only insert data, never read or edit it',
    'pp.s6.li3': 'Access to the admin panel restricted to authenticated users',
    'pp.s6.li4': 'Anonymous API keys with no administrative privileges on the front end',
    'pp.s6.after': 'In the event of a security incident that could affect your data, we will notify the ANPD (Brazil’s data protection authority) and affected data subjects within the timeframe established by the LGPD.',
    'pp.s7.title': '7. Your rights as a data subject (LGPD, Art. 18)',
    'pp.s7.li1': '<strong>Confirmation and access</strong> — know whether we process your data and access it',
    'pp.s7.li2': '<strong>Correction</strong> — request correction of incomplete, inaccurate, or outdated data',
    'pp.s7.li3': '<strong>Anonymization, blocking, or deletion</strong> — of unnecessary or excessive data',
    'pp.s7.li4': '<strong>Portability</strong> — receive your data in a structured format',
    'pp.s7.li5': '<strong>Deletion</strong> — request deletion of data processed based on consent',
    'pp.s7.li6': '<strong>Information</strong> — be informed about who your data is shared with',
    'pp.s7.li7': '<strong>Withdrawal of consent</strong> — withdraw consent at any time',
    'pp.s7.li8': '<strong>Objection</strong> — object to processing carried out in violation of the law',
    'pp.s7.after': 'To exercise any right, send an email to <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a> with the subject "LGPD Request". We will respond within <strong>15 business days</strong>.',
    'pp.s8.title': '8. Data retention',
    'pp.s8.li1': '<strong>Leads / contact forms:</strong> kept for up to 2 years after the last contact, or while a business relationship exists',
    'pp.s8.li2': '<strong>Newsletter:</strong> kept until you request unsubscription',
    'pp.s8.li3': '<strong>Browsing data (analytics):</strong> anonymized after 14 months per Google Analytics’ default configuration',
    'pp.s9.title': '9. Links to external sites',
    'pp.s9.p': 'Our site contains links to third-party sites (Google, GitHub, partners). This Privacy Policy applies exclusively to <strong>www.primetitec.com.br</strong> and our products’ subdomains. We recommend reading external sites’ policies before sharing your data with them.',
    'pp.s10.title': '10. Changes to this policy',
    'pp.s10.p': 'We may update this Policy periodically. The last update date is shown at the top of this page. Significant changes will be communicated by email to our newsletter subscribers.',
    'pp.s11.title': '11. Contact and Data Protection Officer',
    'pp.s11.card': '<strong>RM PrimeTI Tecnologia</strong><br>Brazilian company ID (CNPJ): 62.938.903/0001-75 — Minas Gerais, Brazil<br>Privacy email: <a href="mailto:privacidade@primetitec.com.br">privacidade@primetitec.com.br</a><br>Business contact: <a href="mailto:comercial@primetitec.com.br">comercial@primetitec.com.br</a> | +55 (31) 99065-6645',
    'pp.s11.after': 'You may also file complaints with Brazil’s <strong>National Data Protection Authority (ANPD)</strong>: <a href="https://www.gov.br/anpd" target="_blank" rel="noopener">www.gov.br/anpd</a>'
  };

  /* ============================================================
     ENGINE
     ============================================================ */
  var originalsCaptured = false;
  var ATTR_MODES = [
    { attr: 'data-i18n',            prop: 'html' },
    { attr: 'data-i18n-aria-label', prop: 'aria-label' },
    { attr: 'data-i18n-placeholder',prop: 'placeholder' },
    { attr: 'data-i18n-title',      prop: 'title' },
    { attr: 'data-i18n-href',       prop: 'href' }
  ];

  function captureOriginals() {
    if (originalsCaptured) return;
    ATTR_MODES.forEach(function (mode) {
      var els = document.querySelectorAll('[' + mode.attr + ']');
      els.forEach(function (el) {
        if (mode.prop === 'html') {
          el.setAttribute('data-i18n-orig', el.innerHTML);
        } else {
          el.setAttribute('data-i18n-orig-' + mode.prop, el.getAttribute(mode.prop) || '');
        }
      });
    });
    originalsCaptured = true;
  }

  function getSavedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (_) { /* ignore */ }
    return DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    captureOriginals();

    var dict = T[lang] || {};

    ATTR_MODES.forEach(function (mode) {
      var els = document.querySelectorAll('[' + mode.attr + ']');
      els.forEach(function (el) {
        var key = el.getAttribute(mode.attr);
        if (lang === DEFAULT_LANG) {
          var orig = mode.prop === 'html'
            ? el.getAttribute('data-i18n-orig')
            : el.getAttribute('data-i18n-orig-' + mode.prop);
          if (orig === null) return;
          if (mode.prop === 'html') el.innerHTML = orig;
          else el.setAttribute(mode.prop, orig);
          return;
        }
        var val = dict[key];
        if (val === undefined) return;
        if (mode.prop === 'html') el.innerHTML = val;
        else el.setAttribute(mode.prop, val);
      });
    });

    applyMarketVisibility(lang);

    document.documentElement.lang = lang;

    var page = document.body.getAttribute('data-page');
    if (page && META[page] && META[page][lang]) {
      var m = META[page][lang];
      if (m.title) document.title = m.title;
      if (m.description) {
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', m.description);
      }
    }

    updateSwitcherUI(lang);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }

    document.dispatchEvent(new CustomEvent('primetitec:langchange', { detail: { lang: lang } }));
  }

  function applyMarketVisibility(lang) {
    var hide = lang !== DEFAULT_LANG;
    document.body.classList.toggle('lang-intl', hide);
    document.querySelectorAll('[data-br-only]').forEach(function (el) {
      if (el.tagName === 'OPTION') {
        el.hidden = hide;
        if (hide && el.selected) {
          var select = el.parentElement;
          if (select) select.selectedIndex = 0;
        }
      } else {
        el.classList.toggle('lang-hidden', hide);
      }
    });
  }

  function updateSwitcherUI(lang) {
    document.querySelectorAll('.lang-switcher').forEach(function (root) {
      var meta = LANG_META[lang];
      var flagEl = root.querySelector('.lang-current .lang-flag');
      var codeEl = root.querySelector('.lang-current .lang-code');
      if (flagEl && meta) flagEl.textContent = meta.flag;
      if (codeEl && meta) codeEl.textContent = meta.code;
      root.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });
    });
  }

  function wireSwitchers() {
    document.querySelectorAll('.lang-switcher').forEach(function (root) {
      var toggle = root.querySelector('.lang-current');
      if (!toggle) return;

      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = root.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });

      root.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.addEventListener('click', function () {
          applyLanguage(opt.getAttribute('data-lang'));
          root.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    });

    document.addEventListener('click', function () {
      document.querySelectorAll('.lang-switcher.open').forEach(function (root) {
        root.classList.remove('open');
        var toggle = root.querySelector('.lang-current');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('.lang-switcher.open').forEach(function (root) {
        root.classList.remove('open');
        var toggle = root.querySelector('.lang-current');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function init() {
    captureOriginals();
    wireSwitchers();
    applyLanguage(getSavedLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Público — usado por forms.js / main.js para mensagens dinâmicas */
  window.i18n = {
    t: function (key, fallback) {
      var lang = getSavedLang();
      if (lang === DEFAULT_LANG) return fallback !== undefined ? fallback : key;
      var val = T[lang] && T[lang][key];
      return val !== undefined ? val : (fallback !== undefined ? fallback : key);
    },
    getLang: getSavedLang,
    setLang: applyLanguage
  };
})();
