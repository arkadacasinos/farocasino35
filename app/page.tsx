import Image from 'next/image'

const REF_URL = 'https://comboflo.site/aetf3u2q9u'

export default function FaroCasinoLanding() {
  return (
    <div className="min-h-screen bg-[#0e1013] text-[#e5e7eb] flex flex-col selection:bg-[#f5ba42] selection:text-[#0e1013]">
      {/* ========================================================= */}
      {/* HEADER (Sticky Topbar) */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#121418] border-b border-[#22262f] px-3 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile drawer trigger anchor */}
          <a
            href="#faro-sidebar"
            className="lg:hidden p-2 rounded-lg bg-[#1a1d24] text-[#f5ba42] border border-[#2b303c] hover:bg-[#232731]"
            aria-label="Открыть меню Faro Casino"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          {/* Logo with Golden M Crown */}
          <a href={REF_URL} className="flex items-center gap-2 group">
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 text-[#f5ba42] drop-shadow-[0_2px_8px_rgba(245,186,66,0.4)]"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 26L11 8L20 20L29 8L36 26H30L26.5 16L20 25L13.5 16L10 26H4Z"
                fill="url(#gold-grad)"
              />
              <defs>
                <linearGradient id="gold-grad" x1="4" y1="8" x2="36" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FDE68A" />
                  <stop offset="0.5" stopColor="#F5BA42" />
                  <stop offset="1" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-extrabold tracking-[0.2em] text-lg sm:text-xl text-white group-hover:text-[#f5ba42] transition-colors">
              FARO
            </span>
          </a>
        </div>

        {/* Right CTA buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={REF_URL}
            className="fc-btn-dark px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-[#2b303c]"
          >
            Вход
          </a>
          <a
            href={REF_URL}
            className="fc-btn-gold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm tracking-wide shadow-md shadow-[#f5ba42]/20"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* ========================================================= */}
      {/* FIRST SCREEN (Desktop Rail + Main Hero & Promo Cards) */}
      {/* ========================================================= */}
      <section className="flex-1 flex max-w-[1600px] w-full mx-auto relative">
        {/* Left Sidebar Rail (Desktop always visible, Mobile accessible via :target) */}
        <aside
          id="faro-sidebar"
          className="fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-[#121418] border-r border-[#22262f] p-4 flex flex-col justify-between shadow-2xl lg:shadow-none lg:static lg:w-60 xl:w-64"
        >
          {/* Close button on mobile */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#22262f] lg:hidden">
            <span className="text-xs uppercase tracking-wider text-[#9ca3af] font-bold">Меню Faro Casino</span>
            <a href="#!" className="p-1.5 text-gray-400 hover:text-white rounded bg-[#1c2028]" aria-label="Закрыть меню">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-1.5 overflow-y-auto pr-1">
            {/* Рулетка удачи widget */}
            <a
              href={REF_URL}
              className="p-3 rounded-2xl bg-[#181b22] border border-[#272b36] hover:border-[#f5ba42]/40 transition-all flex items-center justify-between mb-2 group"
            >
              <div>
                <div className="text-xs font-bold text-white group-hover:text-[#f5ba42] transition-colors">Рулетка удачи</div>
                <div className="text-[11px] text-[#f5ba42] flex items-center gap-1 mt-0.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#f5ba42] fc-badge-dot"></span>
                  01:47:59
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#222733] border border-[#f5ba42]/30 flex items-center justify-center text-[#f5ba42] shadow-[0_0_12px_rgba(245,186,66,0.2)]">
                🎰
              </div>
            </a>

            {/* Nav list */}
            {[
              { label: 'Бонусы', icon: '🎁', tag: 'VIP' },
              { label: 'Магазин', icon: '💰' },
              { label: 'Миссии', icon: '🎯' },
              { label: 'Гонка рефералов', icon: '🏆' },
              { label: 'Сундуки', icon: '📦' },
              { label: 'Умножение баланса', icon: '⚡' },
              { label: 'Шабаш Хэллоуина', icon: '🎃', tag: 'NEW' },
              { label: 'Реферальная прог...', icon: '👥' },
            ].map((item) => (
              <a
                key={item.label}
                href={REF_URL}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#c3c7d1] hover:text-white hover:bg-[#1a1e27] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.tag && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f5ba42]/15 text-[#f5ba42] font-bold border border-[#f5ba42]/30">
                    {item.tag}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Language selector */}
          <div className="pt-3 border-t border-[#22262f] mt-2">
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#171a21] text-xs text-gray-300 border border-[#252934]">
              <div className="flex items-center gap-2">
                <span className="text-sm">🇷🇺</span>
                <span className="font-semibold">Русский</span>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </aside>

        {/* Mobile Scrim Backdrop */}
        <a
          href="#!"
          className="fc-drawer-scrim fixed inset-0 bg-black/70 z-40 lg:hidden"
          aria-label="Закрыть меню"
        />

        {/* Main Content Area */}
        <main className="flex-1 p-3 sm:p-5 lg:p-6 overflow-hidden flex flex-col gap-4 sm:gap-6">
          {/* Top Big Banner: Million Drops Movember Arena BGaming */}
          <div className="relative rounded-3xl border border-[#f5ba42]/35 bg-gradient-to-r from-[#171a22] via-[#1c212c] to-[#121418] p-5 sm:p-8 lg:p-10 overflow-hidden fc-card-glow shadow-2xl">
            {/* Background luxury glow accents */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#f5ba42]/10 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-[#f5ba42]/15 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5ba42]/15 border border-[#f5ba42]/30 text-[#f5ba42] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#f5ba42] animate-ping" />
                  Турнир Faro Casino
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#f5ba42] leading-[1.15] tracking-tight">
                  Million Drops: Movember Arena от BGaming
                </h1>

                <div className="space-y-1">
                  <p className="text-base sm:text-lg lg:text-xl font-bold text-white">
                    Призовой фонд 105 000 €
                  </p>
                  <p className="text-xs sm:text-sm text-[#9ca3af]">
                    1 - 30 ноября • Играйте в любимые слоты и получайте мгновенные дропы
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={REF_URL}
                    className="fc-btn-gold px-7 sm:px-9 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base font-bold shadow-lg shadow-[#f5ba42]/30 inline-flex items-center gap-2"
                  >
                    <span>Принять участие</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href={REF_URL}
                    className="fc-btn-dark px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-semibold border border-[#2b303c] text-gray-300"
                  >
                    Правила акции
                  </a>
                </div>

                {/* Carousel indicator dots */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f5ba42]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#374151]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#374151]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#374151]" />
                </div>
              </div>

              {/* Viking Hero Art */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-[#f5ba42]/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                  <Image
                    src="/images/viking-hero.png"
                    alt="Million Drops Movember Arena Faro Casino"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Депозитный стрик */}
            <div className="rounded-2xl border border-[#f5ba42]/30 bg-[#14171d] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden fc-card-glow group hover:border-[#f5ba42]/50 transition-all">
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f5ba42] transition-colors">
                    Депозитный стрик
                  </h3>
                  <p className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
                    Чем длиннее серия депозитов, тем ценнее призы
                  </p>
                </div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border border-[#f5ba42]/20">
                  <Image
                    src="/images/wallet-coins.png"
                    alt="Депозитный стрик Фаро Казино"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pt-4 relative z-10 flex flex-col gap-3">
                <a
                  href={REF_URL}
                  className="fc-btn-gold px-4 py-2 rounded-xl text-xs font-bold text-center block"
                >
                  Начать стрик
                </a>

                {/* Progress bar with streak steps */}
                <div className="flex items-center justify-between text-xs text-[#9ca3af] bg-[#1a1e26] p-2 rounded-xl border border-[#262b37]">
                  <span className="text-[#f5ba42] font-bold">Серия:</span>
                  <span className="w-5 h-5 rounded-full bg-[#f5ba42]/20 text-[#f5ba42] font-bold flex items-center justify-center text-[10px]">4</span>
                  <span className="w-5 h-5 rounded-full bg-[#222733] text-gray-400 font-bold flex items-center justify-center text-[10px]">5</span>
                  <span className="w-5 h-5 rounded-full bg-[#222733] text-gray-400 font-bold flex items-center justify-center text-[10px]">6</span>
                  <span className="text-[#f5ba42]">🎁</span>
                  <span className="text-[#f5ba42]">👑</span>
                </div>
              </div>
            </div>

            {/* Card 2: Faro Casino App */}
            <div className="rounded-2xl border border-[#f5ba42]/30 bg-[#14171d] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden fc-card-glow group hover:border-[#f5ba42]/50 transition-all">
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f5ba42] transition-colors">
                    Faro Casino App
                  </h3>
                  <p className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
                    Скачивайте мобильное приложение и получайте эксклюзивные бонусы
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-2 text-[11px] text-[#f5ba42]">
                    <span>🤖</span>
                    <span>Доступно для Android & iOS</span>
                  </div>
                </div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border border-[#f5ba42]/20">
                  <Image
                    src="/images/girl-phone.png"
                    alt="Мобильное приложение Faro Casino"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pt-4 relative z-10">
                <a
                  href={REF_URL}
                  className="fc-btn-gold px-4 py-2 rounded-xl text-xs font-bold text-center block"
                >
                  Скачать приложение
                </a>
              </div>
            </div>

            {/* Card 3: Миссии */}
            <div className="rounded-2xl border border-[#f5ba42]/30 bg-[#14171d] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden fc-card-glow group hover:border-[#f5ba42]/50 transition-all">
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f5ba42] transition-colors">
                    Миссии Faro
                  </h3>
                  <p className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
                    Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
                  </p>
                  <p className="text-[11px] text-[#f5ba42] mt-2 font-medium">
                    Завершите 3 депозита <span className="font-bold">+12 Faro Coins</span>
                  </p>
                </div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border border-[#f5ba42]/20">
                  <Image
                    src="/images/target-dart.png"
                    alt="Миссии и награды Faro Casino"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pt-4 relative z-10">
                <a
                  href={REF_URL}
                  className="fc-btn-dark hover:bg-[#282d38] border border-[#2b303c] px-4 py-2 rounded-xl text-xs font-bold text-center block text-white"
                >
                  Начать миссию
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* ========================================================= */}
      {/* SEO ARTICLE: 300-400+ WORDS WITH EXACT KEYWORDS */}
      {/* ========================================================= */}
      <section className="bg-[#121419] border-t border-[#22262f] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f5ba42] bg-[#f5ba42]/10 px-3 py-1 rounded-full border border-[#f5ba42]/20">
              Гид по игровому клубу
            </span>
            <p className="text-xs text-[#9ca3af] mt-2">
              Полная информация о платформе, зеркалах, бонусах и регистрации
            </p>
          </div>

          {/* Section 1 */}
          <article id="official" className="rounded-2xl bg-[#161a22] border border-[#242833] p-5 sm:p-7 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#f5ba42] flex items-center gap-2">
              <span className="text-[#f5ba42]">⚡</span>
              Faro Casino официальный сайт и возможности платформы
            </h2>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              Популярный игровой клуб <strong>Faro Casino официальный сайт</strong> представляет собой современную лицензионную площадку для любителей азартных развлечений. В каталоге собрано более 4000 сертифицированных слотов, карточных столов и Live-игр с профессиональными дилерами. Каждый пользователь, посещающий <strong>Faro Casino официальный</strong> портал, получает гарантированную защиту личных данных, мгновенное пополнение счета и быстрый вывод выигрышей в криптовалюте и фиатных валютах.
            </p>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              Клуб известен как надежное <strong>faro казино</strong>, предоставляющее прозрачную систему лояльности, регулярные кешбэки до 20% и уникальные турниры с призовыми фондами в десятки тысяч евро.
            </p>
          </article>

          {/* Section 2 */}
          <article id="mirror" className="rounded-2xl bg-[#161a22] border border-[#242833] p-5 sm:p-7 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#f5ba42] flex items-center gap-2">
              <span className="text-[#f5ba42]">🔒</span>
              Фаро Казино зеркало рабочее для бесперебойного входа
            </h2>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              При периодических блокировках интернет-провайдеров на помощь приходит актуальное <strong>фаро казино зеркало</strong>. Оно представляет собой точную копию оригинального ресурса с единой базой аккаунтов, безопасным шифрованием и сохранением баланса. Найти проверенное <strong>фаро казино зеркало рабочее</strong> можно прямо на нашем портале, а также через официальный Telegram-канал поддержки.
            </p>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              Используя надежное <strong>faro casino зеркало</strong>, игроки могут беспрепятственно входить в личный кабинет, активировать промокоды и запрашивать выплаты без необходимости установки сторонних VPN-сервисов.
            </p>
          </article>

          {/* Section 3 */}
          <article id="play" className="rounded-2xl bg-[#161a22] border border-[#242833] p-5 sm:p-7 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#f5ba42] flex items-center gap-2">
              <span className="text-[#f5ba42]">🎰</span>
              В Faro Casino играть онлайн на реальные деньги и бесплатно
            </h2>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              Всем желающим в <strong>faro casino играть</strong> доступны два удобных режима: демонстрационная игра без риска для тестирования новых стратегий и игра на реальные деньги с реальными шансами сорвать джекпот. В клубе <strong>фаро казино играть</strong> можно в бестселлеры от ведущих провайдеров Pragmatic Play, BGaming, NetEnt, Nolimit City и Evolution Gaming.
            </p>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              Выбирая проверенное <strong>фаро казино онлайн</strong>, вы получаете высокие показатели RTP выше 96%, моментальные спины и удобную мобильную адаптацию под любые смартфоны и планшеты.
            </p>
          </article>

          {/* Section 4 */}
          <article id="club" className="rounded-2xl bg-[#161a22] border border-[#242833] p-5 sm:p-7 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#f5ba42] flex items-center gap-2">
              <span className="text-[#f5ba42]">👑</span>
              Фаро Казино официальный клуб: регистрация и бонусы
            </h2>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              Авторитетный <strong>фаро казино официальный сайт</strong> дарит щедрый приветственный пакет на первые депозиты: 100% бонус к сумме пополнения и до 250 фриспинов на популярные слоты. Создание аккаунта на <strong>фаро казино официальный</strong> ресурсе занимает не более одной минуты — достаточно указать почту или номер телефона и подтвердить согласие с правилами.
            </p>
            <p className="text-sm text-[#c8ccd4] leading-relaxed">
              Переходите на портал <strong>фаро казино</strong>, забирайте эксклюзивные промокоды, участвуйте в ежедневных миссиях и крутите Колесо Удачи для максимальных выигрышей!
            </p>
          </article>

          {/* CTA Banner inside SEO block */}
          <div className="rounded-2xl border border-[#f5ba42]/40 bg-gradient-to-r from-[#1f242e] via-[#1a1e28] to-[#14171f] p-6 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#f5ba42]">
              Готовы испытать удачу в Faro Casino?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl mx-auto">
              Зарегистрируйтесь прямо сейчас по ссылке ниже и получите бонус до 150 000 рублей + 200 фриспинов на первый депозит!
            </p>
            <div>
              <a
                href={REF_URL}
                className="fc-btn-gold px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-lg shadow-[#f5ba42]/25"
              >
                <span>Получить бонус и играть в Faro Casino</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER WITH HASHTAGS & COPYRIGHT */}
      {/* ========================================================= */}
      <footer className="bg-[#0b0c0f] border-t border-[#1d212a] py-8 px-4 sm:px-6 lg:px-8 text-xs text-[#828894]">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Hashtags list based on keywords */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            {[
              { tag: '#faro_casino', href: '#official' },
              { tag: '#faro_casino_зеркало', href: '#mirror' },
              { tag: '#faro_casino_играть', href: '#play' },
              { tag: '#faro_casino_официальный', href: '#official' },
              { tag: '#faro_casino_официальный_сайт', href: '#official' },
              { tag: '#faro_казино', href: '#club' },
              { tag: '#фаро_казино', href: '#club' },
              { tag: '#фаро_казино_зеркало', href: '#mirror' },
              { tag: '#фаро_казино_зеркало_рабочее', href: '#mirror' },
              { tag: '#фаро_казино_играть', href: '#play' },
              { tag: '#фаро_казино_онлайн', href: '#play' },
              { tag: '#фаро_казино_официальный', href: '#official' },
              { tag: '#фаро_казино_официальный_сайт', href: '#official' },
            ].map((item) => (
              <a
                key={item.tag}
                href={item.href}
                className="px-2.5 py-1 rounded-lg bg-[#14171e] text-[#a3a9b7] hover:text-[#f5ba42] hover:bg-[#1a1e28] transition-colors border border-[#202530]"
              >
                {item.tag}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1a1d24]">
            <p>© 2026 Faro Casino (Фаро Казино). Все права защищены.</p>
            <p className="flex items-center gap-3">
              <span>18+ Азартные игры могут вызывать зависимость.</span>
              <a href={REF_URL} className="text-[#f5ba42] hover:underline">
                Поддержка 24/7
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget Button (Ref link) */}
      <a
        href={REF_URL}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5ba42] text-[#0e1013] flex items-center justify-center shadow-xl shadow-[#f5ba42]/30 hover:scale-110 active:scale-95 transition-transform"
        aria-label="Онлайн чат поддержки Faro Casino"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          <circle cx="8" cy="10" r="1.2" />
          <circle cx="12" cy="10" r="1.2" />
          <circle cx="16" cy="10" r="1.2" />
        </svg>
      </a>
    </div>
  )
}
