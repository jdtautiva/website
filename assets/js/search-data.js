// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/website/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Research Groups",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/people/";
          },
        },{id: "post-investigador-de-la-fcjea-participa-en-workshop-internacional-sobre-el-futuro-de-la-educación-organizado-por-el-tec-de-monterrey-universidad-católica-de-temuco",
        
          title: 'Investigador de la FCJEA participa en workshop internacional sobre el futuro de la... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "El pasado 14 de mayo, el Dr. Julián Díaz, académico de la Facultad de Ciencias Jurídicas, Económicas y Administrativas (FCJEA) de la Universidad Católica de Temuco, participó en el workshop […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://fcjea.uct.cl/noticias/investigador-de-la-fcjea-participa-en-workshop-internacional-sobre-el-futuro-de-la-educacion-organizado-por-el-tec-de-monterrey/", "_blank");
          
        },
      },{id: "post-investigador-de-la-fcjea-participa-en-workshop-internacional-sobre-el-futuro-de-la-educación-organizado-por-el-tec-de-monterrey-universidad-católica-de-temuco",
        
          title: 'Investigador de la FCJEA participa en workshop internacional sobre el futuro de la... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "El pasado 14 de mayo, el Dr. Julián Díaz, académico de la Facultad de Ciencias Jurídicas, Económicas y Administrativas (FCJEA) de la Universidad Católica de Temuco, participó en el workshop […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://fcjea.uct.cl/noticias/investigador-de-la-fcjea-participa-en-workshop-internacional-sobre-el-futuro-de-la-educacion-organizado-por-el-tec-de-monterrey/", "_blank");
          
        },
      },{id: "post-conectando-investigación-y-sociedad-workshop-internacional-sobre-publicaciones-de-alto-impacto-en-management-universidad-católica-de-temuco",
        
          title: 'Conectando investigación y sociedad: Workshop internacional sobre publicaciones de alto impacto en Management... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "El pasado mes se celebró en la Universidad de San Andrés (Buenos Aires, Argentina) el Workshop: How to publish in high impact journals in management, un encuentro diseñado para académicos del […]",
        section: "Posts",
        handler: () => {
          
            window.open("https://fcjea.uct.cl/noticias/conectando-investigacion-y-sociedad-workshop-internacional-sobre-publicaciones-de-alto-impacto-en-management/", "_blank");
          
        },
      },{id: "post-minerales-críticos-uct-destaca-oportunidades-para-chile-argentina-y-la-formación-universitaria-gt-uct",
        
          title: 'Minerales críticos: UCT destaca oportunidades para Chile, Argentina y la formación universitaria &gt;... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.uct.cl/actualidad/noticias/minerales-criticos-uct-destaca-oportunidades-para-chile-argentina-y-la-formacion-universitaria/", "_blank");
          
        },
      },{id: "post-realizan-workshop-interdisciplinario-sobre-metodologías-innovadoras-para-la-investigación-gt-uct",
        
          title: 'Realizan workshop interdisciplinario sobre metodologías innovadoras para la investigación &gt; UCT <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.uct.cl/actualidad/noticias/realizan-workshop-interdisciplinario-sobre-metodologias-innovadoras-para-la-investigacion/", "_blank");
          
        },
      },{id: "post-crece-el-pib-en-la-araucanía-en-medio-de-desafíos-estructurales-como-desempleo-y-falta-de-inversión",
        
          title: 'Crece el PIB en La Araucanía en medio de desafíos estructurales como desempleo... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A pesar del crecimiento de 3,2% reportado por el Banco Central en el Producto Interno Bruto (PIB) regional, La Araucanía enfrenta problemas como el desempleo, la informalidad laboral y la falta de inversión.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.elmostrador.cl/mercados/2025/01/08/crece-el-pib-en-la-araucania-en-medio-de-desafios-estructurales-como-desempleo-y-falta-de-inversion/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/website/books/the_godfather/";
            },},{id: "news-published-the-article-navigating-climate-change-climate-change-awareness-and-strategies-in-micro-small-and-medium-sized-enterprises-in-a-developing-economy",
          title: 'Published the article “Navigating climate change: Climate change awareness and strategies in micro,...',
          description: "",
          section: "News",},{id: "news-published-the-article-navigating-climate-pressures-a-bibliometric-and-systematic-literature-review-of-climate-change-strategies-in-small-and-medium-sized-enterprises",
          title: 'Published the article “Navigating climate pressures: A bibliometric and systematic literature review of...',
          description: "",
          section: "News",},{id: "news-published-the-article-integrating-neuroscience-into-b2b-sales-research-foundations-frontiers-and-expert-directions",
          title: 'Published the article “Integrating neuroscience into B2B sales research: foundations, frontiers, and expert...',
          description: "",
          section: "News",},{id: "news-published-the-article-unseen-barriers-unspoken-limits-a-necessary-condition-analysis-of-women-s-career-advancement",
          title: 'Published the article “Unseen Barriers, Unspoken Limits: A Necessary Condition Analysis of Women’s...',
          description: "",
          section: "News",},{id: "news-presented-the-article-titled-geoturism-and-entrepreneurship-policy-driven-development-in-the-kutralkura-unesco-global-geopark",
          title: 'Presented the article titled “Geoturism and Entrepreneurship: Policy-Driven Development in the Kutralkura UNESCO...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%64%74%61%75%74%69%76%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jdtautiva", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jdtautiva", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9808-3179", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Julian-Diaz-Tautiva/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/website/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4d2omk8AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57388166900", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
