/**
 * APP.JS — Lógica principal do Gerador de Letras Elegantes
 */

/* ── DOM refs ─────────────────────────────────────────── */
const userInput    = document.getElementById('userInput');
const charCountEl  = document.getElementById('charCount');
const generateBtn  = document.getElementById('generateBtn');
const clearBtn     = document.getElementById('clearBtn');
const fontsGrid    = document.getElementById('fontsGrid');
const placeholder  = document.getElementById('placeholderCard');
const resultsHeader= document.getElementById('resultsHeader');
const resultsCount = document.getElementById('resultsCount');
const toastEl      = document.getElementById('toast');
const toastMsg     = document.getElementById('toastMsg');
const builderArea  = document.getElementById('builderArea');
const copyNickBtn  = document.getElementById('copyNickBtn');
const clearNickBtn = document.getElementById('clearNickBtn');
const filterBtns   = document.querySelectorAll('.filter-btn');
const symCategories= document.getElementById('symbolCategories');

let currentFilter = 'all';
let toastTimer = null;
let currentCards = [];

/* ── CHAR COUNT ───────────────────────────────────────── */
userInput.addEventListener('input', () => {
  const len = userInput.value.length;
  charCountEl.textContent = `${len}/200`;
  charCountEl.style.color = len > 180 ? '#f87171' : '';
});

/* ── ENTER KEY ────────────────────────────────────────── */
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    generateFonts();
  }
});

/* ── GENERATE BUTTON ──────────────────────────────────── */
generateBtn.addEventListener('click', generateFonts);

/* ── CLEAR BUTTON ─────────────────────────────────────── */
clearBtn.addEventListener('click', () => {
  userInput.value = '';
  charCountEl.textContent = '0/200';
  fontsGrid.innerHTML = '';
  fontsGrid.appendChild(placeholder);
  placeholder.style.display = '';
  resultsHeader.style.display = 'none';
  currentCards = [];
  userInput.focus();
});

/* ── FILTER BUTTONS ───────────────────────────────────── */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilter();
  });
});

/* ─────────────────────────────────────────────────────── */
/* GENERATE FONTS                                          */
/* ─────────────────────────────────────────────────────── */
function generateFonts() {
  const text = userInput.value.trim();
  if (!text) {
    showToast('✏️ Digite algum texto primeiro!', 'warn');
    userInput.focus();
    return;
  }

  // Clear grid
  fontsGrid.innerHTML = '';
  currentCards = [];

  // Button animation
  generateBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Gerando…';
  generateBtn.disabled = true;

  // Generate asynchronously for smooth UI
  setTimeout(() => {
    FONTS.forEach((font, idx) => {
      const converted = convertFont(text, font);
      const card = buildFontCard(font, converted, idx);
      fontsGrid.appendChild(card);
      currentCards.push({ el: card, tag: font.tag });
    });

    placeholder.style.display = 'none';
    resultsHeader.style.display = 'flex';
    resultsCount.textContent = `${FONTS.length} fontes geradas`;

    applyFilter();

    generateBtn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Gerar Fontes';
    generateBtn.disabled = false;

    showToast('✨ ' + FONTS.length + ' fontes geradas!');

    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

/* ─────────────────────────────────────────────────────── */
/* BUILD FONT CARD                                         */
/* ─────────────────────────────────────────────────────── */
function buildFontCard(font, converted, idx) {
  const card = document.createElement('article');
  card.className = 'font-card';
  card.dataset.tag = font.tag;
  card.style.animationDelay = `${idx * 18}ms`;

  card.innerHTML = `
    <div class="font-card-left">
      <div class="font-name">
        ${font.icon || '🔤'} ${font.name}
        <span class="font-tag">${tagLabel(font.tag)}</span>
      </div>
      <div class="font-preview">${escapeHtml(converted)}</div>
    </div>
    <button class="btn-copy" title="Copiar">
      <i class="fa-regular fa-copy"></i> Copiar
    </button>
  `;

  // Copy on card click or button click
  const copyBtn = card.querySelector('.btn-copy');

  const doCopy = (e) => {
    e.stopPropagation();
    copyToClipboard(converted);
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
    copyBtn.classList.add('copied');
    showToast('✅ Texto copiado!');
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
      copyBtn.classList.remove('copied');
    }, 2000);
  };

  copyBtn.addEventListener('click', doCopy);
  card.addEventListener('click', doCopy);

  // Long press: insert into nick builder
  let pressTimer;
  card.addEventListener('pointerdown', () => {
    pressTimer = setTimeout(() => {
      insertIntoBuilder(converted);
      showToast('🔨 Inserido no Montador!');
    }, 600);
  });
  card.addEventListener('pointerup', () => clearTimeout(pressTimer));
  card.addEventListener('pointerleave', () => clearTimeout(pressTimer));

  return card;
}

/* ─────────────────────────────────────────────────────── */
/* FILTER                                                  */
/* ─────────────────────────────────────────────────────── */
function applyFilter() {
  let visible = 0;
  currentCards.forEach(({ el, tag }) => {
    const show = currentFilter === 'all' || tag === currentFilter;
    el.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  if (resultsCount) resultsCount.textContent = `${visible} fonte${visible !== 1 ? 's' : ''} exibida${visible !== 1 ? 's' : ''}`;
}

/* ─────────────────────────────────────────────────────── */
/* SYMBOL CATEGORIES                                       */
/* ─────────────────────────────────────────────────────── */
function buildSymbols() {
  SYMBOL_CATEGORIES.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'symbol-category';

    const header = document.createElement('div');
    header.className = 'symbol-cat-header';
    header.textContent = cat.name;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'symbols-grid';

    cat.symbols.forEach(sym => {
      const btn = document.createElement('button');
      btn.className = 'sym-btn';
      btn.textContent = sym;
      btn.title = `Copiar: ${sym}`;
      btn.addEventListener('click', () => {
        copyToClipboard(sym);
        insertIntoBuilder(sym);
        showToast(`✅ Copiado: ${sym}`);
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => btn.style.transform = '', 200);
      });
      grid.appendChild(btn);
    });

    section.appendChild(grid);
    symCategories.appendChild(section);
  });
}

/* ─────────────────────────────────────────────────────── */
/* NICK BUILDER                                            */
/* ─────────────────────────────────────────────────────── */
function insertIntoBuilder(text) {
  const sel = window.getSelection();
  if (sel.rangeCount && builderArea.contains(sel.anchorNode)) {
    const range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    range.collapse(false);
  } else {
    builderArea.textContent += text;
    // Move caret to end
    const range = document.createRange();
    range.selectNodeContents(builderArea);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

copyNickBtn.addEventListener('click', () => {
  const nickText = builderArea.innerText || builderArea.textContent;
  if (!nickText.trim()) { showToast('✏️ O montador está vazio!', 'warn'); return; }
  copyToClipboard(nickText);
  showToast('✅ Nick copiado!');
});

clearNickBtn.addEventListener('click', () => {
  builderArea.textContent = '';
  builderArea.focus();
});

/* ─────────────────────────────────────────────────────── */
/* COPY TO CLIPBOARD                                       */
/* ─────────────────────────────────────────────────────── */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

/* ─────────────────────────────────────────────────────── */
/* TOAST                                                   */
/* ─────────────────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  toastMsg.textContent = msg;
  toastEl.style.background = type === 'warn'
    ? 'linear-gradient(135deg, #f59e0b, #d97706)'
    : 'linear-gradient(135deg, #10b981, #059669)';
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
}

/* ─────────────────────────────────────────────────────── */
/* HELPERS                                                 */
/* ─────────────────────────────────────────────────────── */
function tagLabel(tag) {
  const labels = {
    bold: 'Negrito', serif: 'Serif', cursive: 'Cursiva',
    decorative: 'Decorativa', symbol: 'Símbolo',
    bubble: 'Bolha', strikethrough: 'Rasurado'
  };
  return labels[tag] || tag;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─────────────────────────────────────────────────────── */
/* INIT                                                    */
/* ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildSymbols();
  userInput.focus();

  // Auto-generate if URL has a ?text= param
  const params = new URLSearchParams(window.location.search);
  if (params.get('text')) {
    userInput.value = decodeURIComponent(params.get('text')).slice(0, 200);
    charCountEl.textContent = `${userInput.value.length}/200`;
    generateFonts();
  }
});
