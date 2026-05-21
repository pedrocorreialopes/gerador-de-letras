/**
 * FONTS.JS — Dicionário de alfabetos Unicode para geração de fontes especiais
 * Mais de 50 estilos diferentes para Instagram, WhatsApp, Free Fire e mais.
 */

const FONTS = [

  /* ── BOLD / NEGRITO ─────────────────────────────────── */
  {
    id: 'bold_serif',
    name: '𝐍𝐞𝐠𝐫𝐢𝐭𝐨 Serif',
    tag: 'bold',
    icon: '💪',
    upper: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
    lower: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳',
    digits: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
  },
  {
    id: 'bold_italic_serif',
    name: '𝑵𝒆𝒈𝒓𝒊𝒕𝒐 Itálico Serif',
    tag: 'bold',
    icon: '💪',
    upper: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁',
    lower: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛',
    digits: '0123456789'
  },
  {
    id: 'bold_sans',
    name: '𝗡𝗲𝗴𝗿𝗶𝘁𝗼 Sans',
    tag: 'bold',
    icon: '💪',
    upper: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭',
    lower: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇',
    digits: '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'
  },
  {
    id: 'bold_italic_sans',
    name: '𝙉𝙚𝙜𝙧𝙞𝙩𝙤 Itálico Sans',
    tag: 'bold',
    icon: '💪',
    upper: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕',
    lower: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯',
    digits: '0123456789'
  },

  /* ── SERIF / ITÁLICO ─────────────────────────────────── */
  {
    id: 'italic_serif',
    name: '𝐼𝑡á𝑙𝑖𝑐𝑜 Serif',
    tag: 'serif',
    icon: '📖',
    upper: '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍',
    lower: '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧',
    digits: '0123456789'
  },
  {
    id: 'double_struck',
    name: '𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜',
    tag: 'serif',
    icon: '📖',
    upper: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',
    lower: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫',
    digits: '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'
  },
  {
    id: 'fraktur',
    name: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',
    tag: 'serif',
    icon: '📖',
    upper: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ',
    lower: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷',
    digits: '0123456789'
  },
  {
    id: 'fraktur_bold',
    name: '𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉',
    tag: 'serif',
    icon: '📖',
    upper: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅',
    lower: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
    digits: '0123456789'
  },

  /* ── CURSIVA / SCRIPT ────────────────────────────────── */
  {
    id: 'cursive_script',
    name: '𝒞𝓊𝓇𝓈𝒾𝓋𝒶 Script',
    tag: 'cursive',
    icon: '✍️',
    upper: '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵',
    lower: '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
    digits: '0123456789'
  },
  {
    id: 'cursive_bold',
    name: '𝓒𝓾𝓻𝓼𝓲𝓿𝓪 Bold',
    tag: 'cursive',
    icon: '✍️',
    upper: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩',
    lower: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
    digits: '0123456789'
  },

  /* ── SANS-SERIF ──────────────────────────────────────── */
  {
    id: 'sans',
    name: '𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿',
    tag: 'serif',
    icon: '🔠',
    upper: '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹',
    lower: '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓',
    digits: '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫'
  },
  {
    id: 'italic_sans',
    name: '𝘐𝘵á𝘭𝘪𝘤𝘰 Sans',
    tag: 'serif',
    icon: '🔠',
    upper: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡',
    lower: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻',
    digits: '0123456789'
  },

  /* ── FULLWIDTH / ESTILO COREANO ──────────────────────── */
  {
    id: 'fullwidth',
    name: 'Ｆｕｌｌ　Ｗｉｄｔｈ',
    tag: 'decorative',
    icon: '💎',
    upper: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
    lower: 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
    digits: '０１２３４５６７８９'
  },

  /* ── DECORATIVAS / SÍMBOLOS ──────────────────────────── */
  {
    id: 'squared',
    name: '🅂🅀🅄🄰🅁🄴🄳',
    tag: 'symbol',
    icon: '🔡',
    upper: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉',
    lower: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉',
    digits: '0123456789'
  },
  {
    id: 'squared_neg',
    name: '🅽🅴🅶🅰🆃🅸🆅🅾',
    tag: 'symbol',
    icon: '🔡',
    upper: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉',
    lower: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉',
    digits: '0123456789'
  },
  {
    id: 'circled',
    name: 'Ⓒⓘⓡⓒⓛⓔⓓ',
    tag: 'bubble',
    icon: '🫧',
    upper: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
    lower: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
    digits: '⓪①②③④⑤⑥⑦⑧⑨'
  },
  {
    id: 'circled_neg',
    name: '🅑🅛🅐🅒🅚 🅒🅘🅡🅒🅛🅔',
    tag: 'bubble',
    icon: '🫧',
    upper: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
    lower: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
    digits: '0123456789'
  },
  {
    id: 'parenthesized',
    name: '⒫⒜⒭⒠⒩⒯⒣⒠⒮⒠⒮',
    tag: 'bubble',
    icon: '🫧',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵',
    digits: '0123456789'
  },
  {
    id: 'regional',
    name: '🇷🇪🇬🇮🇴🇳🇦🇱',
    tag: 'symbol',
    icon: '🔡',
    upper: '🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿',
    lower: '🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿',
    digits: '0123456789',
    separator: '\u200B'
  },

  /* ── DECORATIVAS ESPECIAIS ───────────────────────────── */
  {
    id: 'superscript',
    name: 'ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ',
    tag: 'decorative',
    icon: '💎',
    map: {
      'a':'ᵃ','b':'ᵇ','c':'ᶜ','d':'ᵈ','e':'ᵉ','f':'ᶠ','g':'ᵍ','h':'ʰ',
      'i':'ⁱ','j':'ʲ','k':'ᵏ','l':'ˡ','m':'ᵐ','n':'ⁿ','o':'ᵒ','p':'ᵖ',
      'q':'ᵠ','r':'ʳ','s':'ˢ','t':'ᵗ','u':'ᵘ','v':'ᵛ','w':'ʷ','x':'ˣ',
      'y':'ʸ','z':'ᶻ',
      'A':'ᴬ','B':'ᴮ','C':'ᶜ','D':'ᴰ','E':'ᴱ','F':'ᶠ','G':'ᴳ','H':'ᴴ',
      'I':'ᴵ','J':'ᴶ','K':'ᴷ','L':'ᴸ','M':'ᴹ','N':'ᴺ','O':'ᴼ','P':'ᴾ',
      'Q':'ᵠ','R':'ᴿ','S':'ˢ','T':'ᵀ','U':'ᵁ','V':'ᵛ','W':'ᵂ','X':'ˣ',
      'Y':'ʸ','Z':'ᶻ',
      '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'
    }
  },
  {
    id: 'smallcaps',
    name: 'Sᴍᴀʟʟ Cᴀᴘs',
    tag: 'decorative',
    icon: '💎',
    map: {
      'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ',
      'i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ',
      'q':'ǫ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x',
      'y':'ʏ','z':'ᴢ',
      'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ',
      'I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ',
      'Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'x',
      'Y':'ʏ','Z':'ᴢ'
    }
  },
  {
    id: 'mirrored',
    name: 'pǝɹoɹɹᴉɯ ʇxǝʇ',
    tag: 'decorative',
    icon: '💎',
    map: {
      'a':'ɐ','b':'q','c':'ɔ','d':'p','e':'ǝ','f':'ɟ','g':'ƃ','h':'ɥ',
      'i':'ᴉ','j':'ɾ','k':'ʞ','l':'l','m':'ɯ','n':'u','o':'o','p':'d',
      'q':'b','r':'ɹ','s':'s','t':'ʇ','u':'n','v':'ʌ','w':'ʍ','x':'x',
      'y':'ʎ','z':'z',
      'A':'∀','B':'q','C':'Ɔ','D':'p','E':'Ǝ','F':'Ⅎ','G':'פ','H':'H',
      'I':'I','J':'ɾ','K':'ʞ','L':'˥','M':'W','N':'N','O':'O','P':'Ԁ',
      'Q':'Q','R':'ɹ','S':'S','T':'┴','U':'∩','V':'Λ','W':'M','X':'X',
      'Y':'⅄','Z':'Z',
      '0':'0','1':'Ɩ','2':'ᄅ','3':'Ɛ','4':'ㄣ','5':'ϛ','6':'9','7':'ㄥ','8':'8','9':'6'
    },
    reverse: true
  },
  {
    id: 'morse_like',
    name: '꧁ ᴇꜱᴛɪʟᴏ ꜰʀᴇᴇ ꜰɪʀᴇ ꧂',
    tag: 'decorative',
    icon: '🎮',
    prefix: '꧁',
    suffix: '꧂',
    map: {
      'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ',
      'i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ',
      'q':'ǫ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'ˣ',
      'y':'ʏ','z':'ᴢ',
      'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ',
      'I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ',
      'Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'ˣ',
      'Y':'ʏ','Z':'ᴢ'
    }
  },
  {
    id: 'ff_style2',
    name: '『 ᴇꜱᴛɪʟᴏ ɴɪᴄᴋ 』',
    tag: 'decorative',
    icon: '🎮',
    prefix: '『',
    suffix: '』',
    map: {
      'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ',
      'i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ',
      'q':'ǫ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'ˣ',
      'y':'ʏ','z':'ᴢ',
      'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ',
      'I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ',
      'Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'ˣ',
      'Y':'ʏ','Z':'ᴢ'
    }
  },

  /* ── RASURADO / TACHADO ──────────────────────────────── */
  {
    id: 'strikethrough',
    name: 'S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶',
    tag: 'strikethrough',
    icon: '🚫',
    combiner: '\u0336'
  },
  {
    id: 'underline',
    name: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲',
    tag: 'strikethrough',
    icon: '🚫',
    combiner: '\u0332'
  },
  {
    id: 'double_underline',
    name: 'D̳o̳u̳b̳l̳e̳ ̳L̳i̳n̳e̳',
    tag: 'strikethrough',
    icon: '🚫',
    combiner: '\u0333'
  },
  {
    id: 'overline',
    name: 'O̅v̅e̅r̅l̅i̅n̅e̅d̅',
    tag: 'strikethrough',
    icon: '🚫',
    combiner: '\u0305'
  },
  {
    id: 'slash_through',
    name: 'S̷l̷a̷s̷h̷ ̷T̷h̷r̷o̷u̷g̷h̷',
    tag: 'strikethrough',
    icon: '🚫',
    combiner: '\u0337'
  },
  {
    id: 'tilde_through',
    name: 'T̴i̴l̴d̴e̴ ̴T̴h̴r̴o̴u̴g̴h̴',
    tag: 'strikethrough',
    icon: '🚫',
    combiner: '\u0334'
  },

  /* ── LETRAS COM DIACRÍTICOS ──────────────────────────── */
  {
    id: 'wavy_above',
    name: 'W̃ã̃ṽỹ Ã̃b̃oṽẽ',
    tag: 'decorative',
    icon: '💎',
    combiner: '\u0303'
  },
  {
    id: 'dot_above',
    name: 'Ḋȯṫ Ȧḃȯṿė',
    tag: 'decorative',
    icon: '💎',
    combiner: '\u0307'
  },
  {
    id: 'ring_above',
    name: 'R̊i̊n̊g̊ Å̊b̊o̊v̊e̊',
    tag: 'decorative',
    icon: '💎',
    combiner: '\u030A'
  },
  {
    id: 'hat_above',
    name: 'Ĥâṱ Âbôvê',
    tag: 'decorative',
    icon: '💎',
    combiner: '\u0302'
  },
  {
    id: 'umlaut',
    name: 'Üm̈l̈äüẗ',
    tag: 'decorative',
    icon: '💎',
    combiner: '\u0308'
  },
  {
    id: 'cross_above',
    name: 'C̽r̽o̽s̽s̽ ̽A̽b̽o̽v̽e̽',
    tag: 'decorative',
    icon: '💎',
    combiner: '\u033D'
  },

  /* ── ESPAÇADO / ESTILOSO ─────────────────────────────── */
  {
    id: 'wide_spaced',
    name: 'E S P A Ç A D O',
    tag: 'decorative',
    icon: '💎',
    separator: ' '
  },
  {
    id: 'dot_spaced',
    name: 'S·P·A·C·E·D',
    tag: 'decorative',
    icon: '💎',
    separator: '·'
  },
  {
    id: 'dash_spaced',
    name: 'S-P-A-C-E-D',
    tag: 'decorative',
    icon: '💎',
    separator: '-'
  },
  {
    id: 'pipe_spaced',
    name: 'S|P|A|C|E|D',
    tag: 'decorative',
    icon: '💎',
    separator: '|'
  },
  {
    id: 'star_spaced',
    name: 'S★T★A★R',
    tag: 'decorative',
    icon: '💎',
    separator: '★'
  },
  {
    id: 'diamond_spaced',
    name: 'D◆I◆A◆M◆O◆N◆D',
    tag: 'decorative',
    icon: '💎',
    separator: '◆'
  },
  {
    id: 'heart_spaced',
    name: 'H❤E❤A❤R❤T',
    tag: 'decorative',
    icon: '💎',
    separator: '❤'
  },
  {
    id: 'fire_spaced',
    name: 'F🔥I🔥R🔥E',
    tag: 'decorative',
    icon: '💎',
    separator: '🔥'
  },

  /* ── MONOSPACE ───────────────────────────────────────── */
  {
    id: 'monospace',
    name: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',
    tag: 'serif',
    icon: '💻',
    upper: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉',
    lower: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
    digits: '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'
  },

  /* ── ESTILOS FREE FIRE / NICK GAMER ──────────────────── */
  {
    id: 'ff_skull',
    name: '☠ Ɲick ☠ Gamer',
    tag: 'decorative',
    icon: '🎮',
    prefix: '☠',
    suffix: '☠',
    upper: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',
    lower: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫',
    digits: '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'
  },
  {
    id: 'ff_dragon',
    name: '꩜ ᴅʀᴀɢᴏɴ ꩜',
    tag: 'decorative',
    icon: '🎮',
    prefix: '꩜彡',
    suffix: '彡꩜',
    map: {
      'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ',
      'i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ',
      'q':'ǫ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'ˣ',
      'y':'ʏ','z':'ᴢ',
      'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ',
      'I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ',
      'Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'ˣ',
      'Y':'ʏ','Z':'ᴢ'
    }
  },
  {
    id: 'ff_elite',
    name: '▓ ᴇʟɪᴛᴇ ▓',
    tag: 'decorative',
    icon: '🎮',
    prefix: '▓▒░',
    suffix: '░▒▓',
    map: {
      'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ',
      'i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ',
      'q':'ǫ','r':'ʀ','s':'ꜱ','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'ˣ',
      'y':'ʏ','z':'ᴢ',
      'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ',
      'I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ',
      'Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'ˣ',
      'Y':'ʏ','Z':'ᴢ'
    }
  },
  {
    id: 'ff_arrow',
    name: '»» ᴀʀʀᴏᴡ ««',
    tag: 'decorative',
    icon: '🎮',
    prefix: '»»',
    suffix: '««',
    upper: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅',
    lower: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
    digits: '0123456789'
  }
];

/**
 * Converte um texto usando um alfabeto definido por upper/lower/digits
 */
function convertByAlphabet(text, font) {
  const upperArr = [...font.upper];
  const lowerArr = [...font.lower];
  const digitsArr = font.digits ? [...font.digits] : null;
  const sep = font.separator || '';

  const AB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ab = 'abcdefghijklmnopqrstuvwxyz';
  const nums = '0123456789';

  let result = '';
  const chars = [...text];

  for (let ci = 0; ci < chars.length; ci++) {
    const ch = chars[ci];
    const uIdx = AB.indexOf(ch);
    const lIdx = ab.indexOf(ch);
    const dIdx = nums.indexOf(ch);

    if (uIdx !== -1 && upperArr[uIdx]) {
      result += upperArr[uIdx];
    } else if (lIdx !== -1 && lowerArr[lIdx]) {
      result += lowerArr[lIdx];
    } else if (dIdx !== -1 && digitsArr && digitsArr[dIdx]) {
      result += digitsArr[dIdx];
    } else {
      result += ch;
    }

    // separator between chars (not after last)
    if (sep && ci < chars.length - 1 && ch !== ' ') {
      const nextCh = chars[ci + 1];
      if (nextCh !== ' ') result += sep;
    }
  }

  return result;
}

/**
 * Converte um texto usando um mapa char→char
 */
function convertByMap(text, font) {
  const map = font.map;
  let result = '';
  const chars = [...text];

  for (const ch of chars) {
    result += map[ch] || ch;
  }

  if (font.reverse) {
    result = [...result].reverse().join('');
  }

  return result;
}

/**
 * Converte usando combinador Unicode (strikethrough, underline, etc.)
 */
function convertByCombiner(text, combiner) {
  return [...text].map(ch => ch + combiner).join('');
}

/**
 * Separa chars com separador
 */
function convertBySeparator(text, sep) {
  return [...text].join(sep);
}

/**
 * Função principal: gera texto convertido para uma fonte
 */
function convertFont(text, font) {
  let converted = '';

  if (font.combiner) {
    converted = convertByCombiner(text, font.combiner);
  } else if (font.separator !== undefined && !font.upper) {
    converted = convertBySeparator(text, font.separator);
  } else if (font.map) {
    converted = convertByMap(text, font);
  } else if (font.upper) {
    converted = convertByAlphabet(text, font);
  } else {
    converted = text;
  }

  const prefix = font.prefix || '';
  const suffix = font.suffix || '';
  return prefix + converted + suffix;
}
