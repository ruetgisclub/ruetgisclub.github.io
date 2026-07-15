/* ==============================================================================
   RUET GIS CLUB — shared site script
   Handles: mobile nav, active nav highlighting, and rendering data.js content
   into Members / Notices / Activities / Resources / Home / Member-profile pages.
   ============================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  wireMobileNav();
  highlightActiveNav();
  renderHeroStats();
  renderAdvisors();
  renderCurrentEC();
  renderPastCommittees();
  renderGeneralMembers();
  renderAlumni();
  renderNotices();
  renderActivities();
  renderResources();
  renderMemberProfile();
  renderFooterMeta();
});

/* ---------------------------- Nav behavior ---------------------------- */
function wireMobileNav() {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobile-nav");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => menu.classList.toggle("open"));
}

function highlightActiveNav() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.getAttribute("data-nav") === page) a.classList.add("active");
  });
}

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/* ---------------------------- Home: stats ---------------------------- */
function renderHeroStats() {
  const el = document.getElementById("heroStats");
  if (!el || typeof SITE === "undefined") return;
  el.innerHTML = SITE.stats.map(s => `
    <div class="stat">
      <div class="num">${s.num}</div>
      <span class="label">${s.label}</span>
    </div>`).join("");
}

function renderFooterMeta() {
  const y = document.getElementById("copyYear");
  if (y) y.textContent = new Date().getFullYear();
  const emailEls = document.querySelectorAll("[data-site-email]");
  if (typeof SITE !== "undefined") emailEls.forEach(e => e.textContent = SITE.email);
}

/* ---------------------------- Members: advisors ---------------------------- */
function renderAdvisors() {
  if (typeof ADVISORS === "undefined") return;

  const el = document.getElementById("advisorGrid");
  if (el) {
    el.innerHTML = ADVISORS.map(a => `
      <div class="person">
        <!-- Checks if a photo exists, otherwise falls back to initials -->
        <div class="avatar">${a.photo ? `<img src="${a.photo}" alt="${a.name}">` : initials(a.name)}</div>
        <div>
          <div class="role">Advisor</div>
          <div class="name">${a.name}</div>
          <div class="meta">${a.title}<br>${a.dept}</div>
        </div>
      </div>`).join("");
  }

  const speechEl = document.getElementById("advisorSpeeches");
  if (speechEl) {
    const withSpeech = ADVISORS.filter(a => a.speech);
    speechEl.innerHTML = withSpeech.map(a => `
      <div class="card">
        <p class="text-soft" style="line-height:1.75;font-size:15px;">&ldquo;${a.speech}&rdquo;</p>
        <div class="mt-16" style="font-weight:700;">${a.name}</div>
        <div class="meta text-soft" style="font-size:13px;">${a.title}, ${a.dept}</div>
      </div>`).join("");
  }
}

// Reusable SVG icons
const iconWeb = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
const iconLi = `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;

/* ---------------------------- Members: current EC ---------------------------- */
function renderCurrentEC() {
  const el = document.getElementById("ecGrid");
  if (!el || typeof CURRENT_EC === "undefined") return;
  el.innerHTML = CURRENT_EC.map(m => `
    <div class="person" style="display:flex; justify-content:space-between; align-items:center;">
      <a href="member.html?slug=${encodeURIComponent(m.slug)}" style="display:flex; align-items:center; gap:16px; flex-grow:1; text-decoration:none; color:inherit;">
        <div class="avatar">${m.photo ? `<img src="${m.photo}" alt="${m.name}">` : initials(m.name)}</div>
        <div>
          <div class="role">${m.role}</div>
          <div class="name">${m.name}</div>
          <div class="meta">${m.batch || m.series || "URP"} ${m.studentId ? "&middot; ID " + m.studentId : ""}</div>
        </div>
      </a>
      <div class="social-icons-row" style="padding-left:16px;">
        ${m.website ? `<a href="${m.website}" target="_blank" title="Website">${iconWeb}</a>` : ""}
        ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" title="LinkedIn">${iconLi}</a>` : ""}
      </div>
    </div>`).join("");
}

/* ---------------------------- Members: past committees ---------------------------- */
function renderPastCommittees() {
  const el = document.getElementById("pastCommittees");
  if (!el || typeof PAST_COMMITTEES === "undefined") return;
  
  el.innerHTML = PAST_COMMITTEES.map(group => `
    <details class="acc">
      <summary>${group.label} <span class="text-soft" style="font-weight:400;font-size:13px;">(${group.members.length} members)</span></summary>
      <div class="acc-body">
        <div class="grid grid-3">
          ${group.members.map(m => `
            <div class="card" style="padding:16px; display:flex; flex-direction:column;">
              <div class="role" style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;color:var(--rgc-orange-dark);">${m.role}</div>
              <div style="font-weight:700;margin-top:4px;">
                ${m.slug ? `<a href="member.html?slug=${encodeURIComponent(m.slug)}" style="color:inherit; text-decoration:none;">${m.name}</a>` : m.name}
              </div>
              <div class="text-soft" style="font-size:13px;">${m.batch || m.series || ""}</div>
              
              <div class="social-icons-row" style="margin-top:auto; padding-top:12px;">
                ${m.website ? `<a href="${m.website}" target="_blank" title="Website">${iconWeb}</a>` : ""}
                ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" title="LinkedIn">${iconLi}</a>` : ""}
              </div>
            </div>`).join("")}
        </div>
      </div>
    </details>`).join("");
}

/* ---------------------------- Member profile page ---------------------------- */
function renderMemberProfile() {
  const el = document.getElementById("memberProfile");
  if (!el || typeof CURRENT_EC === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  
  // 1. Search CURRENT_EC
  let person = CURRENT_EC.find(m => m.slug === slug);
  
  // 2. If not found, search PAST_COMMITTEES
  if (!person && typeof PAST_COMMITTEES !== "undefined") {
    for (const group of PAST_COMMITTEES) {
      if (group.members) {
        const found = group.members.find(m => m.slug === slug);
        if (found) {
          person = found;
          break;
        }
      }
    }
  }

  if (!person) {
    el.innerHTML = `
      <div class="center" style="padding:80px 0;">
        <div class="coord center" style="justify-content:center;">404 &middot; No Member Found</div>
        <h2 class="section-title center mt-16" style="margin:0 auto;">We couldn't find that profile</h2>
        <p class="section-sub center" style="margin:14px auto 0;">The member link may be out of date. Head back to the full committee list.</p>
        <a class="btn btn-primary mt-24" href="members.html">Back to Members</a>
      </div>`;
    document.title = "Member not found — RUET GIS Club";
    return;
  }

  document.title = `${person.name} — RUET GIS Club`;
  el.innerHTML = `
    <div class="grid" style="grid-template-columns: 220px 1fr; gap:40px; align-items:start;">
      <div>
        <div class="avatar" style="width:180px;height:180px;border-radius:24px;font-size:48px;">
          ${person.photo ? `<img src="${person.photo}" alt="${person.name}">` : initials(person.name)}
        </div>
      </div>
      <div>
        <div class="coord">EXECUTIVE COMMITTEE PROFILE</div>
        <h1 class="section-title mt-16">${person.name}</h1>
        <div class="eyebrow mt-8" style="margin-bottom:0;">${person.role}</div>
        <div class="text-soft mt-8">${person.batch || person.series || "Department of Urban & Regional Planning"} ${person.studentId ? "&middot; ID " + person.studentId : ""}</div>
        <p class="section-sub mt-24">${person.bio && person.bio.trim() ? person.bio : "This member hasn't added a bio yet — check back soon, or reach out via the club to say hello."}</p>
        <div class="pill-row mt-24">
          ${person.email ? `<a class="btn btn-outline" href="mailto:${person.email}">Email</a>` : ""}
          ${person.website ? `<a class="btn btn-outline" href="${person.website}" target="_blank">Website</a>` : ""}
          ${person.linkedin ? `<a class="btn btn-outline" href="${person.linkedin}" target="_blank">LinkedIn</a>` : ""}
          <a class="btn btn-outline" href="members.html">&larr; All Members</a>
        </div>
      </div>
    </div>`;
}

/* ---------------------------- Activities ---------------------------- */
function renderActivities() {
  const el = document.getElementById("activityList");
  if (!el || typeof ACTIVITIES === "undefined") return;
  el.innerHTML = ACTIVITIES.map(a => `
    <div class="card">
      <div class="name" style="font-size:18px;">${a.title}</div>
      <div class="coord mt-8">${a.when}</div>
      <div class="text-soft mt-8" style="font-size:14px;">${a.where}</div>
      ${a.note ? `<p class="text-soft mt-16" style="font-size:14px;line-height:1.6;">${a.note}</p>` : ""}
      ${a.link ? `<a class="btn btn-outline mt-16" href="${a.link}" target="_blank">View Details</a>` : ""}
    </div>`).join("");
}

/* ---------------------------- Members: general members table ---------------------------- */
function renderGeneralMembers() {
  const el = document.getElementById("generalMembersBody");
  if (!el || typeof GENERAL_MEMBERS === "undefined") return;
  el.innerHTML = GENERAL_MEMBERS.map(([name, id], i) => `
    <tr><td>${i + 1}</td><td>${name}</td><td>${id}</td></tr>`).join("");

  const countEl = document.getElementById("generalMembersCount");
  if (countEl) countEl.textContent = GENERAL_MEMBERS.length;
}

/* ---------------------------- Members: alumni ---------------------------- */
function renderAlumni() {
  const el = document.getElementById("alumniGrid");
  if (!el || typeof ALUMNI === "undefined") return;
  el.innerHTML = ALUMNI.map(a => `
    <div class="person">
      <!-- Checks if a photo exists, otherwise falls back to initials -->
      <div class="avatar">${a.photo ? `<img src="${a.photo}" alt="${a.name}">` : initials(a.name)}</div>
      <div>
        <div class="role">Alumni</div>
        <div class="name">${a.name}</div>
        <div class="meta">${a.series}${a.workingAt ? " &middot; " + a.workingAt : ""}</div>
      </div>
    </div>`).join("");
}

/* ---------------------------- Notices ---------------------------- */
function renderNotices() {
  const el = document.getElementById("noticeList");
  if (!el || typeof NOTICES === "undefined") return;
  const sorted = [...NOTICES].sort((a, b) => new Date(b.date) - new Date(a.date));
  el.innerHTML = sorted.map(n => `
    <div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;">
      <div>
        <div style="font-weight:600;">${n.title}</div>
        <div class="coord mt-8">${formatDate(n.date)}</div>
      </div>
      ${n.href ? `<a class="btn btn-outline" href="${n.href}">View</a>` : `<span class="badge">Archived</span>`}
    </div>`).join("");
}

function formatDate(d) {
  const dt = new Date(d);
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}


/* ---------------------------- Resources ---------------------------- */
function renderResources() {
  if (typeof RESOURCES === "undefined") return;
  const map = { resDataList: RESOURCES.data, resSoftwareList: RESOURCES.software, resSessionList: RESOURCES.sessions };
  Object.entries(map).forEach(([id, list]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.map(r => `
      <a class="card" style="display:flex;justify-content:space-between;align-items:center;" href="${r.href}">
        <span style="font-weight:600;">${r.title}</span>
        <span class="badge">Download</span>
      </a>`).join("");
  });
}

/* ---------------------------- Member profile page ---------------------------- */
function renderMemberProfile() {
  const el = document.getElementById("memberProfile");
  if (!el || typeof CURRENT_EC === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const person = CURRENT_EC.find(m => m.slug === slug);

  if (!person) {
    el.innerHTML = `
      <div class="center" style="padding:80px 0;">
        <div class="coord center" style="justify-content:center;">404 &middot; No Member Found</div>
        <h2 class="section-title center mt-16" style="margin:0 auto;">We couldn't find that profile</h2>
        <p class="section-sub center" style="margin:14px auto 0;">The member link may be out of date. Head back to the full committee list.</p>
        <a class="btn btn-primary mt-24" href="members.html">Back to Members</a>
      </div>`;
    document.title = "Member not found — RUET GIS Club";
    return;
  }

  document.title = `${person.name} — RUET GIS Club`;
  el.innerHTML = `
    <div class="grid" style="grid-template-columns: 220px 1fr; gap:40px; align-items:start;">
      <div>
        <div class="avatar" style="width:180px;height:180px;border-radius:24px;font-size:48px;">
          ${person.photo ? `<img src="${person.photo}" alt="${person.name}">` : initials(person.name)}
        </div>
      </div>
      <div>
        <div class="coord">${SITE.session} EXECUTIVE COMMITTEE</div>
        <h1 class="section-title mt-16">${person.name}</h1>
        <div class="eyebrow mt-8" style="margin-bottom:0;">${person.role}</div>
        <div class="text-soft mt-8">${person.batch || "Department of Urban & Regional Planning"} ${person.studentId ? "&middot; ID " + person.studentId : ""}</div>
        <p class="section-sub mt-24">${person.bio && person.bio.trim() ? person.bio : "This member hasn't added a bio yet — check back soon, or reach out via the club to say hello."}</p>
        <div class="pill-row mt-24">
          ${person.email ? `<a class="btn btn-outline" href="mailto:${person.email}">Email</a>` : ""}
          ${person.linkedin ? `<a class="btn btn-outline" href="${person.linkedin}">LinkedIn</a>` : ""}
          <a class="btn btn-outline" href="members.html">&larr; All Members</a>
        </div>
      </div>
    </div>`;
}
