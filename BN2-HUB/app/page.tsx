"use client";

import { useState } from "react";
import {
  Activity, ArrowDownRight, ArrowRight, Bell, BookOpen, CalendarDays,
  CheckCircle2, ChevronDown, CircleHelp, Clock3, Command, FileText,
  Headphones, Laptop, LayoutDashboard, LifeBuoy, LogOut, Menu, MessageSquare,
  Monitor, Plus, Search, Settings, ShieldCheck, Sparkles, Users, X
} from "lucide-react";

const navigation = [
  { label: "Vue d’ensemble", icon: LayoutDashboard },
  { label: "Assistance", icon: Headphones, count: "2" },
  { label: "Collaborateurs", icon: Users },
  { label: "Matériel", icon: Laptop },
  { label: "Documents", icon: FileText },
  { label: "Historique", icon: Activity },
];
const tickets = [
  { id: "BN2-2026-0048", title: "Accès à la boîte mail", category: "Microsoft 365", status: "En cours", tone: "blue", date: "Aujourd’hui · 09:42" },
  { id: "BN2-2026-0046", title: "Installation d’un nouvel écran", category: "Matériel", status: "En attente", tone: "amber", date: "Hier · 15:18" },
  { id: "BN2-2026-0041", title: "Mise à jour des accès", category: "Comptes & accès", status: "Résolue", tone: "green", date: "12 nov. · 11:06" },
];
const modules = [
  { title: "Demander de l’aide", desc: "Signaler un problème ou poser une question.", icon: LifeBuoy, tag: "Assistance" },
  { title: "Collaborateurs", desc: "Préparer une arrivée ou un départ.", icon: Users, tag: "RH & IT" },
  { title: "Matériel", desc: "Demander un équipement ou une installation.", icon: Monitor, tag: "Équipement" },
  { title: "Documents", desc: "Retrouver vos documents et procédures.", icon: BookOpen, tag: "Ressources" },
];

export default function Home() {
  const [active, setActive] = useState("Vue d’ensemble");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(false);
  const filtered = tickets.filter(t => (t.title + t.id + t.category).toLowerCase().includes(query.toLowerCase()));

  return (
    <main className={dark ? "app-shell dark" : "app-shell"}>
      <aside className={mobileOpen ? "sidebar mobile-open" : "sidebar"}>
        <div className="brand"><span className="brand-mark">b</span><span>BN2<span className="brand-light"> HUB</span><small>ESPACE CLIENT</small></span><button className="icon-btn mobile-close" onClick={() => setMobileOpen(false)} aria-label="Fermer"><X size={18}/></button></div>
        <div className="workspace"><div className="workspace-logo">A</div><div><strong>Atelier Nova</strong><span>Espace entreprise</span></div><ChevronDown size={15}/></div>
        <div className="nav-label">MENU PRINCIPAL</div>
        <nav className="nav-list">
          {navigation.map(item => { const Icon = item.icon; return <button key={item.label} onClick={() => {setActive(item.label);setMobileOpen(false);}} className={active === item.label ? "nav-item active" : "nav-item"}><Icon size={18}/><span>{item.label}</span>{item.count && <em>{item.count}</em>}</button>; })}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-icon"><CircleHelp size={17}/></div><strong>Besoin d’un coup de main ?</strong><p>Notre équipe est là pour vous aider.</p><button onClick={() => setActive("Assistance")}>Contacter le support <ArrowRight size={14}/></button></div>
          <button className="nav-item"><Settings size={18}/><span>Paramètres</span></button>
          <div className="profile"><div className="avatar">NS</div><div><strong>Nicolas Simon</strong><span>Administrateur</span></div><button className="icon-btn" aria-label="Déconnexion"><LogOut size={16}/></button></div>
        </div>
      </aside>

      {mobileOpen && <button className="mobile-scrim" onClick={() => setMobileOpen(false)} aria-label="Fermer le menu"/>}
      <section className="main-area">
        <header className="topbar">
          <button className="icon-btn mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Ouvrir le menu"><Menu size={20}/></button>
          <div className="breadcrumbs">Espace client <span>/</span> <strong>{active}</strong></div>
          <div className="top-actions"><label className="searchbox"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher..." /><kbd>⌘ K</kbd></label><button className="icon-btn theme-toggle" onClick={()=>setDark(!dark)} aria-label="Changer le thème"><Sparkles size={18}/></button><button className="icon-btn notification" aria-label="Notifications"><Bell size={18}/><i/></button><div className="top-avatar">NS</div></div>
        </header>

        <div className="content">
          <div className="welcome-row"><div><div className="eyebrow"><span className="live-dot"/> VOTRE ESPACE BN2</div><h1>{active === "Vue d’ensemble" ? "Bonjour Nicolas" : active}<span className="heading-period">.</span></h1><p className="welcome-sub">{active === "Vue d’ensemble" ? "Voici ce qui se passe dans votre environnement informatique." : "Retrouvez ici les informations et les actions liées à votre entreprise."}</p></div><button className="primary-btn" onClick={()=>setShowNew(true)}><Plus size={17}/> Nouvelle demande</button></div>

          {active === "Vue d’ensemble" ? <>
            <div className="stat-grid">
              <article className="stat-card"><div className="stat-top"><span>Demandes ouvertes</span><span className="stat-icon blue"><MessageSquare size={18}/></span></div><div className="stat-number">02</div><div className="stat-foot"><span className="positive"><ArrowDownRight size={14}/> 1 de moins</span> que la semaine passée</div></article>
              <article className="stat-card"><div className="stat-top"><span>Temps de réponse moyen</span><span className="stat-icon violet"><Clock3 size={18}/></span></div><div className="stat-number">1h 24<span className="stat-unit">min</span></div><div className="stat-foot">Sur les 30 derniers jours</div></article>
              <article className="stat-card"><div className="stat-top"><span>Équipements suivis</span><span className="stat-icon cyan"><Monitor size={18}/></span></div><div className="stat-number">08</div><div className="stat-foot">Ordinateurs et périphériques</div></article>
              <article className="stat-card"><div className="stat-top"><span>Disponibilité du support</span><span className="stat-icon green"><ShieldCheck size={18}/></span></div><div className="stat-number status-online">Disponible</div><div className="stat-foot"><span className="positive"><CheckCircle2 size={14}/> Opérationnel</span> · jours ouvrables</div></article>
            </div>

            <div className="section-heading"><div><h2>Accès rapides</h2><p>Les actions les plus utiles, en un seul endroit.</p></div></div>
            <div className="module-grid">{modules.map((m,i)=>{const Icon=m.icon;return <button className="module-card" key={m.title} onClick={()=>setActive(i===0?"Assistance":m.title==="Collaborateurs"?"Collaborateurs":m.title)}><span className="module-icon"><Icon size={19}/></span><span className="module-tag">{m.tag}</span><strong>{m.title}</strong><p>{m.desc}</p><span className="module-arrow"><ArrowRight size={17}/></span></button>})}</div>

            <div className="section-heading ticket-heading"><div><h2>Demandes récentes</h2><p>Suivez l’avancement de vos demandes auprès de BN2.</p></div><button className="text-btn" onClick={()=>setActive("Assistance")}>Toutes les demandes <ArrowRight size={15}/></button></div>
            <div className="ticket-panel"><div className="ticket-table-head"><span>DEMANDE</span><span>CATÉGORIE</span><span>STATUT</span><span>DERNIÈRE ACTIVITÉ</span><span/></div>{filtered.map(t=><div className="ticket-row" key={t.id}><div className="ticket-title"><strong>{t.title}</strong><small>{t.id}</small></div><span className="ticket-category">{t.category}</span><span><i className={"status-pill "+t.tone}/>{t.status}</span><span className="ticket-date">{t.date}</span><button className="row-arrow" aria-label="Ouvrir la demande"><ArrowRight size={16}/></button></div>)}{filtered.length===0&&<div className="empty-state">Aucune demande ne correspond à votre recherche.</div>}</div>
            <div className="bottom-grid"><article className="info-card"><div className="info-heading"><span className="info-icon"><CalendarDays size={18}/></span><div><h3>Prochain rendez-vous</h3><p>Votre agenda avec BN2 Consulting</p></div></div><div className="appointment"><div className="date-block"><strong>24</strong><span>NOV.</span></div><div><strong>Point de suivi informatique</strong><span>Lundi · 10:00 – 10:30</span></div><ArrowRight size={17}/></div></article><article className="info-card ai-card"><div className="ai-orb"><Sparkles size={19}/></div><div><span className="module-tag">ASSISTANT BN2</span><h3>Une question informatique ?</h3><p>Notre assistant peut vous guider avant même de créer une demande.</p><button onClick={()=>setActive("Assistant IA")}>Discuter avec l’assistant <ArrowRight size={14}/></button></div></article></div>
          </> : <div className="placeholder-panel"><span className="placeholder-icon"><Command size={24}/></span><h2>{active}</h2><p>Cette section fait partie du template maître BN2 HUB. Elle sera connectée aux données de votre entreprise dans les prochaines étapes.</p><button className="primary-btn" onClick={()=>setActive("Vue d’ensemble")}>Retour à l’accueil <ArrowRight size={16}/></button></div>}
          <footer className="footer"><span>© 2026 BN2 Consulting</span><span>Une informatique plus simple, au quotidien.</span><span><i className="footer-dot"/> Tous les systèmes sont opérationnels</span></footer>
        </div>
      </section>

      {showNew && <div className="modal-backdrop" onClick={()=>setShowNew(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="icon-btn modal-close" onClick={()=>setShowNew(false)} aria-label="Fermer"><X size={18}/></button><span className="modal-icon"><Headphones size={20}/></span><div className="eyebrow">ASSISTANCE BN2</div><h2>Créer une demande</h2><p>Décrivez votre besoin. L’équipe BN2 Consulting prendra le relais.</p><label className="field-label">Sujet de la demande<input placeholder="Ex. : Problème de connexion à Outlook"/></label><label className="field-label">Catégorie<select defaultValue=""><option value="" disabled>Choisir une catégorie</option><option>Microsoft 365</option><option>Matériel</option><option>Réseau & Wi-Fi</option><option>Comptes & accès</option><option>Autre</option></select></label><label className="field-label">Description<textarea placeholder="Expliquez-nous ce qui se passe..."/></label><div className="modal-actions"><button className="secondary-btn" onClick={()=>setShowNew(false)}>Annuler</button><button className="primary-btn" onClick={()=>setShowNew(false)}>Continuer <ArrowRight size={15}/></button></div><small className="demo-note">Prototype visuel — aucune demande n’est encore envoyée.</small></div></div>}
    </main>
  );
}
