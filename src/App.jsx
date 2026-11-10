import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowUpRight, Asterisk, ChevronLeft, ChevronRight, Expand, Menu, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { contactLinks } from './data/contact.js';
import { categories, expertise, projects, tools } from './data/portfolio.js';
import { auraProject } from './data/aura.js';
import { honeybeeProject } from './data/honeybee.js';
import { moviePosterProjects } from './data/moviePosters.js';

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="topbar"><a className="wordmark" href="#home" onClick={close}>ASIF<span> K A</span><i>®</i></a>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'}><a href="#work" onClick={close}>Work</a><a href="#about" onClick={close}>About</a><a href="#skills" onClick={close}>Expertise</a><a href="#contact" className="nav-contact" onClick={close}>Let’s talk <ArrowUpRight size={14} /></a></nav>
  </header>;
}
function SectionLabel({ number, children }) { return <div className="section-label"><span>{number}</span><span>{children}</span><i /></div>; }
function Hero() { return <section className="hero" id="home"><div className="hero-glow" /><div className="hero-kicker"><span className="availability-dot" /> INDEPENDENT DESIGNER <span className="kicker-divider">/</span> FREELANCE & REMOTE</div>
  <h1>ASIF <span>K A</span><sup>®</sup></h1><div className="hero-bottom"><div className="hero-title"><p>Graphic Designer <span>&</span><br/>Creative Visual Artist</p><span className="hero-location">BASED IN INDIA · AVAILABLE FOR FREELANCE & REMOTE OPPORTUNITIES</span></div><div className="hero-intro"><p>Turning ideas into<br/><em>visual stories.</em></p><div className="hero-actions"><a className="button button-light" href="#work">View my work <ArrowDownRight size={16}/></a><a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={15}/></a></div></div></div>
  <a href="#work" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a><span className="hero-index">PORTFOLIO — 2026</span></section>; }
function ProjectPreview({ project, onClose }) {
  if (!project) return null;
  return <dialog ref={(node) => { if (node && !node.open) node.showModal(); }} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="project-dialog-panel"><button className="project-dialog-close" type="button" onClick={onClose} aria-label="Close project preview"><X size={18}/></button>
      <img src={project.image} alt={`${project.title} ${project.category.toLowerCase()} concept`} />
      <div className="project-dialog-copy"><span className="dialog-kicker">{project.category.toUpperCase()} · PERSONAL CONCEPT</span><h2 id="project-dialog-title">{project.title}</h2><p className="project-dialog-category">{project.category}</p><p className="project-disclaimer project-dialog-disclaimer">{project.disclaimer}</p></div>
    </div>
  </dialog>;
}
function ImagePreview({ image, onClose, projectName = 'AURA', gallery = [], activeIndex = 0, onNavigate }) {
  if (!image) return null;
  const hasNavigation = gallery.length > 1 && onNavigate;
  return <dialog ref={(node) => { if (node && !node.open) node.showModal(); }} className="project-dialog aura-lightbox" aria-label={`Image preview: ${image.caption}`} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="project-dialog-panel"><button className="project-dialog-close" type="button" onClick={onClose} aria-label="Close image preview"><X size={18}/></button>
      {hasNavigation && <button className="lightbox-nav lightbox-nav-previous" type="button" onClick={() => onNavigate((activeIndex - 1 + gallery.length) % gallery.length)} aria-label="Previous design"><ChevronLeft size={22}/></button>}
      <img src={image.src} alt={image.alt}/>
      {hasNavigation && <button className="lightbox-nav lightbox-nav-next" type="button" onClick={() => onNavigate((activeIndex + 1) % gallery.length)} aria-label="Next design"><ChevronRight size={22}/></button>}
      <div className="project-dialog-copy"><span className="dialog-kicker">{projectName} · PROJECT IMAGE</span><p className="project-dialog-category">{image.caption ?? image.title ?? 'Full-size image'}{hasNavigation && <span className="lightbox-position">{String(activeIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span>}</p></div>
    </div>
  </dialog>;
}
function AuraReveal({ children, className = '' }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(section); }
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return <div ref={sectionRef} className={`aura-reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}
function AuraArtwork({ image, onPreview, className = '' }) {
  return <button className={`aura-artwork ${className}`} type="button" onClick={() => onPreview(image)} aria-label={`View full-size ${image.caption}`}>
    <span className="aura-artwork-frame"><img src={image.src} alt={image.alt} loading="lazy"/><span className="aura-expand"><Expand size={15}/></span></span>
    <span className="aura-artwork-caption">{image.caption}</span>
  </button>;
}
function AuraSection({ id, number, title, description, children }) {
  return <AuraReveal className="aura-section"><div className="aura-section-heading"><span className="aura-section-number">{number} / 06</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div><div id={id}>{children}</div></AuraReveal>;
}
function AuraProjectPage({ onBack }) {
  const [previewImage, setPreviewImage] = useState(null);
  const identity = auraProject.sections.find((section) => section.id === 'brand-identity');
  const productDesign = auraProject.sections.find((section) => section.id === 'product-design');
  const packaging = auraProject.sections.find((section) => section.id === 'packaging-system');
  const campaign = auraProject.sections.find((section) => section.id === 'social-campaign');
  return <div className="aura-project-page">
    <AuraReveal className="aura-hero">
      <div className="aura-hero-copy"><nav className="work-breadcrumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span><a href="#work" onClick={(event) => { event.preventDefault(); onBack(); }}>Selected Work</a><span>/</span><span>{auraProject.category}</span><span>/</span><span aria-current="page">AURA</span></nav>
        <span className="aura-category-label">BRAND IDENTITY & PACKAGING</span><span className="aura-hero-number">01 / 06</span><h1>{auraProject.title}</h1><p className="aura-hero-subtitle">{auraProject.subtitle}</p><p className="aura-tagline">{auraProject.tagline}</p><p className="aura-hero-description">{auraProject.description}</p>
        <button className="back-to-categories aura-back-link" type="button" onClick={onBack}><ArrowLeft size={15}/> Back to Brand Identity & Packaging</button>
      </div><AuraArtwork image={auraProject.heroImage} onPreview={setPreviewImage} className="aura-hero-artwork"/>
    </AuraReveal>
    <AuraSection id="brand-identity" number="02" title={identity.title} description={identity.description}>
      <div className="aura-identity-layout"><AuraArtwork image={identity.images[0]} onPreview={setPreviewImage} className="aura-identity-artwork"/><div className="aura-identity-note"><span>VISUAL LANGUAGE</span><p>Deep purple brings depth and presence; silver typography adds a quiet metallic refinement. Minimal compositions keep the identity elegant and distinctly premium.</p></div></div>
    </AuraSection>
    <AuraSection id="product-design" number="03" title={productDesign.title} description={productDesign.description}>
      <div className="aura-gallery aura-gallery-product">{productDesign.images.map((image) => <AuraArtwork key={image.src} image={image} onPreview={setPreviewImage}/>)}</div>
    </AuraSection>
    <AuraSection id="packaging-system" number="04" title={packaging.title} description={packaging.description}>
      <div className="aura-gallery aura-gallery-packaging">{packaging.images.map((image) => <AuraArtwork key={image.src} image={image} onPreview={setPreviewImage}/>)}</div>
    </AuraSection>
    <AuraSection id="social-campaign" number="05" title={campaign.title} description={campaign.description}>
      <div className="aura-gallery aura-gallery-campaign">{campaign.images.map((image) => <AuraArtwork key={image.src} image={image} onPreview={setPreviewImage}/>)}</div>
    </AuraSection>
    <AuraSection id="project-credits" number="06" title="Project Credits" description="A personal concept study in luxury fragrance branding.">
      <div className="aura-credits-grid">{auraProject.credits.map((credit) => <div className="aura-credit" key={credit.label}><span>{credit.label}</span><p>{credit.value}</p></div>)}</div>
      <p className="aura-disclaimer">{auraProject.disclaimer}</p>
      <button className="back-to-categories aura-back-link aura-back-bottom" type="button" onClick={onBack}><ArrowLeft size={15}/> Back to Brand Identity & Packaging</button>
    </AuraSection>
    <ImagePreview image={previewImage} onClose={() => setPreviewImage(null)}/>
  </div>;
}
function HoneybeeProjectPage({ onBack }) {
  const [previewImage, setPreviewImage] = useState(null);
  const [intro, ...campaignImages] = honeybeeProject.images;
  return <div className="honeybee-project-page">
    <AuraReveal className="honeybee-hero">
      <div className="honeybee-hero-copy">
        <nav className="work-breadcrumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span><a href="#work" onClick={(event) => { event.preventDefault(); onBack(); }}>Selected Work</a><span>/</span><span>{honeybeeProject.category}</span><span>/</span><span aria-current="page">HoneyBee Studio</span></nav>
        <span className="aura-category-label">SOCIAL MEDIA & MARKETING DESIGNS</span><span className="aura-hero-number">BRAND LAUNCH CAMPAIGN</span>
        <h1>{honeybeeProject.title}</h1><p className="honeybee-tagline">{honeybeeProject.tagline}</p><p className="aura-hero-description">{honeybeeProject.description}</p>
        <button className="back-to-categories aura-back-link" type="button" onClick={onBack}><ArrowLeft size={15}/> Back to Projects</button>
      </div>
      <AuraArtwork image={intro} onPreview={setPreviewImage} className="honeybee-hero-artwork"/>
    </AuraReveal>
    <AuraReveal className="aura-section honeybee-campaign-section">
      <div className="aura-section-heading"><span className="aura-section-number">CAMPAIGN / 02—05</span><div><h2>Brand launch campaign.</h2><p>A sequence of social creatives introducing the studio, its services, values and way to connect.</p></div></div>
      <div className="honeybee-gallery">{campaignImages.map((image, index) => <AuraArtwork key={image.src} image={image} onPreview={setPreviewImage} className={`honeybee-gallery-artwork honeybee-gallery-artwork-${index + 2}`}/>)}</div>
      <div className="honeybee-project-details"><div><span>PROJECT</span><p>{honeybeeProject.campaign}</p></div><div><span>CATEGORY</span><p>{honeybeeProject.category}</p></div><div><span>VISUAL IDENTITY</span><p>{honeybeeProject.visualIdentity}</p></div></div>
      <button className="back-to-categories aura-back-link honeybee-back-bottom" type="button" onClick={onBack}><ArrowLeft size={15}/> Back to Projects</button>
    </AuraReveal>
    <ImagePreview image={previewImage} onClose={() => setPreviewImage(null)} projectName="HONEYBEE STUDIO"/>
  </div>;
}
function MoviePosterProjectPage({ project, onBack, onAllCategories }) {
  const [previewImage, setPreviewImage] = useState(null);
  const artwork = { src: project.image, alt: `${project.title} fan-made movie poster concept`, title: project.title, caption: project.title };
  return <div className="movie-poster-detail">
    <AuraReveal className="movie-poster-detail-hero">
      <nav className="work-breadcrumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span><a href="#work" onClick={(event) => { event.preventDefault(); onAllCategories(); }}>Selected Work</a><span>/</span><a href="#work/category/movie-posters" onClick={(event) => { event.preventDefault(); onBack(); }}>Movie Posters</a><span>/</span><span aria-current="page">{project.title}</span></nav>
      <div className="movie-poster-detail-layout">
        <AuraArtwork image={artwork} onPreview={setPreviewImage} className="movie-poster-detail-artwork"/>
        <div className="movie-poster-detail-copy"><span className="aura-category-label">MOVIE POSTER CONCEPT</span><h1>{project.title}</h1><p className="movie-poster-description">{project.description}</p><div className="movie-poster-disclaimer">{project.disclaimer}</div>
          <div className="movie-poster-detail-links"><button className="back-to-categories" type="button" onClick={onBack}><ArrowLeft size={15}/> Back to Movie Posters</button><button className="back-to-categories" type="button" onClick={onAllCategories}><ArrowLeft size={15}/> Back to Categories</button></div>
        </div>
      </div>
    </AuraReveal>
    <ImagePreview image={previewImage} onClose={() => setPreviewImage(null)} projectName={project.title}/>
  </div>;
}
const categoryRoutePrefix = '#work/category/';
function readWorkRoute() {
  const match = window.location.hash.match(/^#work\/category\/([^/]+)(?:\/([^/]+))?$/);
  if (!match || !categories.some((category) => category.id === match[1])) return { categoryId: null, projectId: null };
  const project = match[2] ? projects.find((item) => item.categoryId === match[1] && item.pageSlug === match[2]) : null;
  return { categoryId: match[1], projectId: project?.id ?? null };
}
function Work() {
  const [route, setRoute] = useState(readWorkRoute);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCorporateIndex, setSelectedCorporateIndex] = useState(null);
  const activeCategory = categories.find((category) => category.id === route.categoryId) ?? null;
  const activeProject = projects.find((project) => project.id === route.projectId && project.categoryId === route.categoryId) ?? null;
  const categoryProjects = activeCategory ? projects.filter((project) => project.categoryId === activeCategory.id) : [];
  const corporateGallery = activeCategory?.id === 'corporate-commercial' ? categoryProjects.map((project) => ({ src: project.image, alt: project.title, caption: project.title })) : [];
  const scrollToWork = () => window.requestAnimationFrame(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = readWorkRoute();
      setRoute(nextRoute);
      if (nextRoute.categoryId) scrollToWork();
    };
    if (route.categoryId) scrollToWork();
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const openCategory = (categoryId) => {
    setSelectedCorporateIndex(null);
    window.history.pushState({ categoryId }, '', `${categoryRoutePrefix}${categoryId}`);
    setRoute({ categoryId, projectId: null });
    scrollToWork();
  };
  const openProject = (project) => {
    window.history.pushState({ categoryId: project.categoryId, projectId: project.id }, '', `${categoryRoutePrefix}${project.categoryId}/${project.pageSlug}`);
    setRoute({ categoryId: project.categoryId, projectId: project.id });
    scrollToWork();
  };
  const backToCategories = () => {
    setSelectedCorporateIndex(null);
    window.history.pushState({}, '', '#work');
    setRoute({ categoryId: null, projectId: null });
    scrollToWork();
  };
  const backToCategory = () => {
    if (!activeCategory) return backToCategories();
    window.history.pushState({ categoryId: activeCategory.id }, '', `${categoryRoutePrefix}${activeCategory.id}`);
    setRoute({ categoryId: activeCategory.id, projectId: null });
    scrollToWork();
  };

  return <section className="work section-wrap" id="work"><SectionLabel number="01">SELECTED WORK</SectionLabel>
    {activeProject?.pageSlug === 'aura' ? <AuraProjectPage onBack={backToCategory}/> : activeProject?.pageSlug === 'honeybee-studio' ? <HoneybeeProjectPage onBack={backToCategory}/> : moviePosterProjects.some((project) => project.id === activeProject?.id) ? <MoviePosterProjectPage project={activeProject} onBack={backToCategory} onAllCategories={backToCategories}/> : <>
      <div className="section-heading"><h2>Selected <em>projects.</em></h2><p>{activeCategory ? `${categoryProjects.length} ${categoryProjects.length === 1 ? 'project' : 'projects'} in this category.` : <>Explore work<br/>by category.</>}</p></div>
      {activeCategory ? <div className="category-view">
        <nav className="work-breadcrumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span><a href="#work" onClick={(event) => { event.preventDefault(); backToCategories(); }}>Selected Work</a><span>/</span><span aria-current="page">{activeCategory.title}</span></nav>
        <button className="back-to-categories" type="button" onClick={backToCategories}><ArrowLeft size={15}/> Back to All Categories</button>
        {categoryProjects.length ? <div className={`project-grid ${activeCategory.id === 'movie-posters' ? 'movie-poster-grid' : ''} ${activeCategory.id === 'corporate-commercial' ? 'corporate-project-grid' : ''}`}>{categoryProjects.map((project, index) => {
          const contents = <><div className="project-image"><img src={project.image} alt={`${project.title} ${project.category.toLowerCase()} concept`} loading="lazy"/><span className="project-open"><ArrowUpRight size={18}/></span><span className="project-num">{String(index + 1).padStart(2, '0')} / {String(categoryProjects.length).padStart(2, '0')}</span></div><div className="project-meta"><div><h3>{project.title}</h3><span>{project.category}</span>{project.disclaimer && <small className="project-disclaimer">{project.disclaimer}</small>}</div><span className="project-year">{project.pageSlug ? 'VIEW PROJECT' : 'PREVIEW'} <ArrowUpRight size={13}/></span></div></>;
          return project.pageSlug
            ? <a className="project-card" href={`${categoryRoutePrefix}${project.categoryId}/${project.pageSlug}`} key={project.id} onClick={(event) => { event.preventDefault(); openProject(project); }} aria-label={`Open ${project.title} project`}>{contents}</a>
            : <button className="project-card" type="button" key={project.id} onClick={() => activeCategory.id === 'corporate-commercial' ? setSelectedCorporateIndex(index) : setSelectedProject(project)} aria-label={`Preview ${project.title}`}>{contents}</button>;
        })}</div> : <div className="category-empty"><span>{activeCategory.title}</span><p>Projects for this category are being added.</p></div>}
        {selectedCorporateIndex !== null && activeCategory?.id === 'corporate-commercial' && <ImagePreview image={corporateGallery[selectedCorporateIndex]} onClose={() => setSelectedCorporateIndex(null)} projectName="CORPORATE & COMMERCIAL" gallery={corporateGallery} activeIndex={selectedCorporateIndex} onNavigate={setSelectedCorporateIndex}/>}
        <ProjectPreview project={selectedProject} onClose={() => setSelectedProject(null)}/>
      </div> : <div className="category-grid">{categories.map((category, index) => {
        const count = projects.filter((project) => project.categoryId === category.id).length;
        return <a className="category-card" href={`${categoryRoutePrefix}${category.id}`} key={category.id} onClick={(event) => { event.preventDefault(); openCategory(category.id); }} aria-label={`Open ${category.title}, ${count} ${count === 1 ? 'project' : 'projects'}`}>
          <div className="category-card-top"><span className="category-number">{String(index + 1).padStart(2, '0')}</span><span className="category-arrow"><ArrowUpRight size={18}/></span></div><h3>{category.title}</h3><span className="category-count">{String(count).padStart(2, '0')} {count === 1 ? 'PROJECT' : 'PROJECTS'}</span>
        </a>;
      })}</div>}
    </>}
  </section>;
}
function About() { return <section className="about section-wrap" id="about"><SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel><div className="about-content"><div className="about-mark">A<span>.</span></div><div className="about-copy"><h2>Good design makes you <em>feel something.</em></h2><p>I’m Asif, a graphic designer and freelance creative who turns ideas into clear, memorable visual stories. I work across brand identity, marketing design and imagery, with a focus on thoughtful composition and polished detail.</p><p>Photo manipulation and retouching are a core part of my practice, alongside an AI-assisted workflow that helps me explore ideas and shape creative directions. Every final design is guided by the brief, the audience and the story it needs to tell.</p><a className="text-link" href="#contact">Let’s make something together <ArrowUpRight size={15}/></a></div></div></section>; }
function Skills() { return <section className="expertise section-wrap" id="skills"><SectionLabel number="03">WHAT I BRING</SectionLabel><div className="expertise-columns"><div><h2>My kind of<br/><em>creative.</em></h2><p className="expertise-note">Thoughtful visuals. Clear ideas.<br/>Made with intention.</p></div><div className="skill-list">{expertise.map((skill, i)=><div className="skill-row" key={skill}><span>{String(i + 1).padStart(2, '0')}</span><h3>{skill}</h3><ArrowUpRight size={17}/></div>)}</div></div><div className="tools-line"><span>IN MY TOOLKIT</span><div>{tools.map(t=><span key={t}>{t}</span>)}</div></div></section>; }
function Contact() { return <section className="contact section-wrap" id="contact"><SectionLabel number="04">HAVE A GOOD ONE IN MIND?</SectionLabel><div className="contact-inner"><div><p className="contact-kicker">LET’S MAKE IT MEAN SOMETHING</p><h2>Have a project?<br/><em>Let’s make it.</em></h2></div><div className="contact-circle" aria-label="Contact links below"><span>LET’S<br/>CONNECT</span><ArrowDown size={24}/></div></div><div className="contact-links" aria-label="Contact and social links">{contactLinks.map((link) => link.href
    ? <a href={link.href} key={link.label} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'}><span>{link.label}</span><ArrowUpRight size={15}/></a>
    : <span className="contact-link-placeholder" key={link.label} aria-label={`${link.label}: ${link.placeholder}`}><span>{link.label}</span><small>{link.placeholder}</small></span>
  )}</div><p className="contact-note">I’m always up for good people and interesting ideas.</p></section>; }
function Footer() { return <footer className="footer"><a className="wordmark" href="#home">ASIF<span> K A</span><i>®</i></a><span className="footer-note">INDEPENDENT DESIGNER · INDIA</span><a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17}/></a><span className="copyright">© {new Date().getFullYear()} ASIF K A</span></footer>; }
export default function App() { return <><div className="site-shell"><Header/><main><Hero/><Work/><About/><Skills/><Contact/></main><Footer/></div></>; }










