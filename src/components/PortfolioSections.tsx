import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  ArrowUp,
  Images,
  Copy,
  Check,
  MessageCircle,
  Instagram,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
} from 'lucide-react';
import {
  BOOKING_SERVICES,
  BOOKING_DURATIONS,
  CategoryKey,
  CREATIVE_TOOLS,
  Language,
  LocalizedContent,
  PortfolioCategory,
  SOCIAL_CONTACTS,
} from '../lib/heroConfig';

import { copyTextToClipboard } from '../lib/clipboard';

interface PortfolioSectionsProps {
  lang: Language;
  content: LocalizedContent;
  onSelectCategory: (category: PortfolioCategory) => void;
  onBookCategory: (categoryKey?: CategoryKey) => void;
  onBackToTop: () => void;
}

const BOOKING_SERVICE_LABELS: Record<string, { vi: string; en: string }> = {
  'Kỷ Yếu': { vi: 'Kỷ Yếu', en: 'Graduation' },
  'Phóng Sự Cưới': { vi: 'Phóng Sự Cưới', en: 'Documentary Wedding' },
  'Hầu Đồng': { vi: 'Hầu Đồng', en: 'Hau Dong (Ritual)' },
  'Sự Kiện': { vi: 'Sự Kiện', en: 'Events' },
  'Concept': { vi: 'Concept', en: 'Creative Concept' },
  'Couple': { vi: 'Couple', en: 'Couples' },
  'Show Diễn': { vi: 'Show Diễn', en: 'Live Stage' },
  'Thể Thao': { vi: 'Thể Thao', en: 'Sports' },
};

const BOOKING_DURATION_LABELS: Record<string, { vi: string; en: string }> = {
  'nửa ngày': { vi: 'Nửa ngày', en: 'Half Day' },
  'cả ngày': { vi: 'Cả ngày', en: 'Full Day' },
  'tư vấn': { vi: 'Tư vấn', en: 'Consultation' },
};

export const PortfolioSections: React.FC<PortfolioSectionsProps> = ({
  lang,
  content,
  onSelectCategory,
  onBookCategory,
  onBackToTop,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | CategoryKey>('all');
  const [copiedMessage, setCopiedMessage] = useState(false);
  const filterBarRef = useRef<HTMLDivElement>(null);

  // Interactive Booking Configurator State
  const [selectedService, setSelectedService] = useState<string>('Phóng Sự Cưới');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedDuration, setSelectedDuration] = useState<string>('cả ngày');
  const [location, setLocation] = useState<string>('');

  const formattedDate = selectedDate
    ? (() => {
        const parts = selectedDate.split('-');
        if (parts.length === 3) {
          return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        return selectedDate;
      })()
    : (lang === 'vi' ? 'Chưa chọn' : 'To be confirmed');

  const finalLocation = location.trim() || (lang === 'vi' ? 'Chưa chọn' : 'To be confirmed');
  const serviceLabel = BOOKING_SERVICE_LABELS[selectedService]?.[lang] || selectedService;
  const durationLabel = BOOKING_DURATION_LABELS[selectedDuration]?.[lang] || selectedDuration;

  const currentBookingMessage =
    lang === 'vi'
      ? `Chào Tuấn Phong, mình muốn đặt lịch chụp.
- Nhu cầu mong muốn: ${selectedService}
- Ngày chụp dự kiến: ${formattedDate}
- Thời gian: ${selectedDuration}
- Địa điểm: ${finalLocation}`
      : `Hi Tuan Phong, I would like to book a photo session.
- Photography Service: ${serviceLabel}
- Preferred Date: ${formattedDate}
- Duration: ${durationLabel}
- Location: ${finalLocation}`;

  const handleCopyMessage = async () => {
    await copyTextToClipboard(currentBookingMessage);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleContactClick = () => {
    handleCopyMessage();
  };

  const instagramMain = SOCIAL_CONTACTS.find((c) => c.id === 'instagram')!;
  const instagramWorkspace = SOCIAL_CONTACTS.find((c) => c.id === 'instagram-workspace')!;
  const otherContacts = SOCIAL_CONTACTS.filter(
    (c) => c.id !== 'instagram' && c.id !== 'instagram-workspace'
  );

  const handleFilterClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    key: 'all' | CategoryKey
  ) => {
    setSelectedFilter(key);
    const button = e.currentTarget;
    const container = filterBarRef.current;
    if (container) {
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.clientWidth;
      const targetScrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const visibleCategories =
    selectedFilter === 'all'
      ? content.categories
      : content.categories.filter((c) => c.key === selectedFilter);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-24 space-y-28">
      {/* Unified Section: Giới thiệu bản thân & Kinh nghiệm thực chiến (Gộp thành 1 thẻ đặt trước Dự Án) */}
      <section id="about" className="scroll-mt-24 pt-8 border-t border-white/20">
        <div className="liquid-glass rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-12">
          {/* Top Half: Giới thiệu bản thân & Công cụ hậu kỳ & Phong cách */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch pb-6 sm:pb-8 border-b border-white/10">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2
                  style={{ fontFamily: "var(--font-display-vi)" }}
                  className="text-3xl sm:text-5xl font-normal tracking-tight text-foreground"
                >
                  {content.profile.name}{' '}
                  <em className="not-italic text-muted-foreground text-2xl sm:text-3xl font-light">
                    ({content.profile.handle})
                  </em>
                </h2>

                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mt-4">
                  {content.profile.intro}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-xs text-muted-foreground mb-1.5">
                  {content.profile.toolsLabel}
                </p>
                <p className="text-sm text-foreground font-medium">
                  {CREATIVE_TOOLS.join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8 lg:border-l border-white/10">
              <div>
                <p className="text-xs text-muted-foreground tracking-wide uppercase font-semibold">
                  {content.profile.styleTitle}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-display-vi)" }}
                  className="text-2xl sm:text-3xl font-normal tracking-tight text-foreground mt-2"
                >
                  {lang === 'vi'
                    ? 'Tone màu trong trẻo hiện đại & Bắt nhịp xu hướng hàng năm'
                    : 'Clean Modern Aesthetics & Annual Trend Grading'}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
                  {content.profile.styleText}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Half: Kinh nghiệm thực chiến & Đối tác (Anchor #experience để Navbar liên kết chính xác) */}
          <div id="experience" className="scroll-mt-24 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3
                  style={{ fontFamily: "var(--font-display-vi)" }}
                  className="text-2xl sm:text-4xl font-normal tracking-tight text-foreground"
                >
                  {content.sections.expTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
                {content.sections.expSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {content.experienceGroups.map((group, idx) => {
                const isFullWidth =
                  idx === content.experienceGroups.length - 1 &&
                  content.experienceGroups.length % 2 !== 0;

                return (
                  <div
                    key={group.id}
                    className={`liquid-glass rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-white/20 hover:border-white/40 transition-colors ${
                      isFullWidth ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div>
                      <h4
                        style={{ fontFamily: "var(--font-display-vi)" }}
                        className="text-xl sm:text-2xl font-normal tracking-tight text-foreground"
                      >
                        {group.title}
                      </h4>

                      <div
                        className={`mt-3.5 ${
                          isFullWidth
                            ? 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'
                            : 'space-y-3'
                        }`}
                      >
                        {group.items.map((item) => (
                          <div key={item.highlight} className="space-y-0.5">
                            <p className="text-sm font-medium text-foreground">
                              {item.highlight}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: 08 Portfolio Categories */}
      <section id="works" className="scroll-mt-24 pt-8 border-t border-white/20">
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2
              style={{ fontFamily: "var(--font-display-vi)" }}
              className="text-3xl sm:text-5xl font-normal tracking-tight text-foreground"
            >
              {content.sections.worksTitle}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            {content.sections.worksSubtitle}
          </p>
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          ref={filterBarRef}
          role="tablist"
          aria-label={lang === 'vi' ? 'Lọc danh mục dự án' : 'Filter portfolio categories'}
          className="relative liquid-glass rounded-full p-2 mb-8 flex items-center justify-start md:justify-center gap-2 !overflow-x-auto scroll-smooth shadow-md w-fit max-w-full mx-auto no-scrollbar"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'all'}
            onClick={(e) => handleFilterClick(e, 'all')}
            className={`px-4 py-2 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 snap-center ${
              selectedFilter === 'all'
                ? 'bg-black/10 text-foreground font-semibold shadow-inner'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {lang === 'vi' ? 'Tất Cả' : 'All Works'}
          </button>
          {content.categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={selectedFilter === cat.key}
              onClick={(e) => handleFilterClick(e, cat.key)}
              className={`px-4 py-2 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 snap-center ${
                selectedFilter === cat.key
                  ? 'bg-black/10 text-foreground font-semibold shadow-inner'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Liquid Glass Category Grid with Real Resized Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {visibleCategories.map((cat) => {
            const previewPhotos = cat.gallery.slice(0, 3);

            return (
              <article
                key={cat.key}
                className="group liquid-glass rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:border-white/30"
              >
                <div>
                  {/* Category Featured Photo Showcase */}
                  <div
                    onClick={() => onSelectCategory(cat)}
                    className="group/img relative aspect-video w-full rounded-2xl overflow-hidden mb-3 bg-secondary/80 cursor-pointer shadow-lg"
                  >
                    <img
                      src={cat.thumbnail}
                      alt={cat.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                  </div>

                  {/* Thumbnail Preview Strip */}
                  {previewPhotos.length > 0 && (
                    <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
                      {previewPhotos.map((imgSrc, pIdx) => (
                        <button
                          key={imgSrc}
                          type="button"
                          onClick={() => onSelectCategory(cat)}
                          className="relative aspect-square w-12 h-12 rounded-xl overflow-hidden border border-white/15 cursor-pointer hover:border-white/50 transition-colors shrink-0 bg-black/40"
                          title={`${cat.name} ${pIdx + 1}`}
                        >
                          <img
                            src={imgSrc}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                      {cat.gallery.length > 3 && (
                        <button
                          type="button"
                          onClick={() => onSelectCategory(cat)}
                          className="liquid-glass aspect-square w-12 h-12 rounded-xl flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
                        >
                          <Images className="w-4 h-4 text-foreground mb-0.5" />
                          <span className="text-[10px] opacity-80">{lang === 'vi' ? 'Xem thêm' : 'More'}</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Category Title */}
                  <div className="mb-1.5">
                    <h4
                      style={{ fontFamily: "var(--font-display-vi)" }}
                      className="text-2xl sm:text-3xl text-foreground font-normal tracking-tight"
                    >
                      {cat.name}
                    </h4>
                  </div>

                  {/* Category Details & Editorial Copy */}
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Footer Dual Actions: Direct Book + View Album */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(cat.name);
                      onBookCategory(cat.key);
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer inline-flex items-center gap-1 font-medium whitespace-nowrap"
                  >
                    <span>{lang === 'vi' ? `Đặt lịch ${cat.name}` : `Book ${cat.name}`}</span>
                    <span>&rarr;</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectCategory(cat)}
                    className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground hover:scale-[1.03] transition-transform cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <span>{content.sections.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Section 04: Direct Contact & Social Channels */}
      <section id="contact" className="scroll-mt-24 pt-12 border-t border-white/10">
        <div className="liquid-glass rounded-3xl p-6 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-xs text-muted-foreground tracking-wide uppercase font-semibold">
              {content.sections.contactKicker}
            </p>
            <h2
              style={{ fontFamily: "var(--font-display-vi)" }}
              className="text-3xl sm:text-5xl font-normal tracking-tight text-foreground mt-2"
            >
              {content.sections.contactTitle}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
              {content.sections.contactSubtitle}
            </p>
          </div>

          {/* Interactive Booking Message Configurator Card */}
          <div className="mt-8 liquid-glass rounded-3xl p-5 sm:p-8 border border-white/40 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                    {lang === 'vi'
                      ? 'Tin nhắn gửi Nguyễn Tuấn Phong (_february.snail_)'
                      : 'Direct Message to Nguyen Tuan Phong (_february.snail_)'}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {lang === 'vi'
                      ? 'Chọn các thông số bên dưới để tự động tạo tin nhắn đặt lịch hoàn chỉnh'
                      : 'Choose options below to automatically generate your booking message'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyMessage}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer shadow-sm shrink-0 ${
                  copiedMessage
                    ? 'bg-emerald-600 text-white'
                    : 'bg-black/10 text-foreground hover:bg-black/15'
                }`}
              >
                {copiedMessage ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Đã sao chép' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Sao chép' : 'Copy'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Configurator Controls Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-1">
              {/* 1. Nhu cầu mong muốn */}
              <div className="space-y-2.5 lg:col-span-2">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5 uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  <span>{lang === 'vi' ? '1. Nhu cầu mong muốn:' : '1. Photography Service:'}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {BOOKING_SERVICES.map((service) => {
                    const isSelected = selectedService === service;
                    const label = BOOKING_SERVICE_LABELS[service]?.[lang] || service;
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer font-medium ${
                          isSelected
                            ? 'bg-foreground text-background shadow-md scale-[1.02]'
                            : 'liquid-glass text-muted-foreground hover:text-foreground hover:scale-[1.01]'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Ngày chụp dự kiến */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5 uppercase tracking-wide">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>
                    {lang === 'vi'
                      ? '2. Ngày chụp dự kiến (Ngày / Tháng / Năm):'
                      : '2. Preferred Shoot Date (Day / Month / Year):'}
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="liquid-glass w-full rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground border border-white/40 focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer shadow-inner"
                  />
                </div>
                <p className="text-[11px] text-muted-foreground">
                  {lang === 'vi' ? 'Đã chọn: ' : 'Selected: '}
                  <strong className="text-foreground">{formattedDate}</strong>
                </p>
              </div>

              {/* 3. Thời gian */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5 uppercase tracking-wide">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lang === 'vi' ? '3. Thời gian:' : '3. Duration / Coverage:'}</span>
                </label>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {BOOKING_DURATIONS.map((dur) => {
                    const isSelected = selectedDuration === dur;
                    const label = BOOKING_DURATION_LABELS[dur]?.[lang] || dur;
                    return (
                      <button
                        key={dur}
                        type="button"
                        onClick={() => setSelectedDuration(dur)}
                        className={`flex-1 min-w-[90px] px-3.5 py-2.5 rounded-2xl text-xs transition-all cursor-pointer font-medium text-center capitalize ${
                          isSelected
                            ? 'bg-foreground text-background shadow-md'
                            : 'liquid-glass text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Địa điểm */}
              <div className="space-y-2 lg:col-span-2">
                <label className="text-xs font-semibold text-foreground flex items-center gap-1.5 uppercase tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{lang === 'vi' ? '4. ĐỊA ĐIỂM' : '4. LOCATION'}</span>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={
                    lang === 'vi'
                      ? 'Nhập địa điểm (xã/phường, quận/huyện, tỉnh/thành phố)...'
                      : 'Enter location (city, district, province in Vietnam)...'
                  }
                  className="liquid-glass w-full rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
              </div>
            </div>

            {/* Generated Live Message Preview */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1 border-b border-black/5">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block shrink-0" />
                  <span>{lang === 'vi' ? 'Nội dung tin nhắn sẵn sàng gửi:' : 'Message ready to send:'}</span>
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-emerald-800 bg-emerald-100/90 border border-emerald-300/60 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  <span>✓</span>
                  <span>{lang === 'vi' ? 'Tự cập nhật theo lựa chọn của bạn' : 'Live auto-updated with your choices'}</span>
                </span>
              </div>
              <pre className="text-xs sm:text-sm font-sans text-foreground/90 whitespace-pre-line leading-relaxed bg-black/5 rounded-2xl p-4 sm:p-5 select-all border border-black/5 font-mono shadow-inner">
                {currentBookingMessage}
              </pre>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start sm:items-center gap-1.5 pt-1 border-t border-black/5">
              <span className="shrink-0">💡</span>
              <span>
                {lang === 'vi' ? (
                  <>
                    Bấm Zalo, Facebook hoặc Instagram bên dưới để nhắn thẳng cho <strong className="text-foreground font-semibold">_february.snail_</strong> : tin nhắn trên được tự chép, bạn chỉ cần dán vào khung chat.
                  </>
                ) : (
                  <>
                    Click Zalo, Facebook, or Instagram below to chat with <strong className="text-foreground font-semibold">_february.snail_</strong> : the message above is automatically copied, simply paste it into your chat.
                  </>
                )}
              </span>
            </p>
          </div>

          {/* Social Channels: Instagram Chính, Instagram Phụ Workspace, Zalo, Facebook */}
          <div className="mt-6 space-y-4">
            {/* 1. Instagram Main Channel - The Largest Featured Button */}
            <a
              href={instagramMain.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleContactClick}
              className="liquid-glass rounded-3xl p-5 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 border-2 border-white/50 hover:border-white/90 hover:scale-[1.015] transition-all shadow-xl group bg-gradient-to-r from-white/80 via-white/70 to-pink-50/40 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 min-w-0 flex-1">
                <div className="flex items-center gap-3.5 shrink-0">
                  <div className="w-13 h-13 sm:w-20 sm:h-20 rounded-2xl liquid-glass flex items-center justify-center shrink-0 bg-gradient-to-tr from-amber-500/20 via-pink-500/30 to-purple-500/30 border border-white/60 shadow-md group-hover:scale-105 transition-transform">
                    <Instagram className="w-6 h-6 sm:w-10 sm:h-10 text-foreground" />
                  </div>
                  {/* On mobile: Badges sit cleanly next to the icon */}
                  <div className="flex flex-col gap-1 sm:hidden">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-600 bg-pink-100/90 px-2.5 py-0.5 rounded-full w-fit">
                      {lang === 'vi' ? 'Instagram · Kênh Chính Thức' : 'Instagram · Official Channel'}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium">
                      {lang === 'vi' ? '(Tự chép tin nhắn khi bấm)' : '(Auto-copies message on click)'}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  {/* On tablet/desktop: Badges sit above the heading */}
                  <div className="hidden sm:flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100/90 px-3 py-1 rounded-full whitespace-nowrap">
                      {lang === 'vi' ? 'Instagram · Kênh Chính Thức' : 'Instagram · Official Channel'}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {lang === 'vi' ? '(Tự chép tin nhắn khi bấm)' : '(Auto-copies message on click)'}
                    </span>
                  </div>
                  <h3
                    style={{ fontFamily: 'var(--font-display-vi)' }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground tracking-tight break-all sm:break-normal"
                  >
                    {instagramMain.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    {lang === 'vi'
                      ? 'Nhắn tin Instagram Direct — Xem thêm tác phẩm & trao đổi concept nhanh nhất'
                      : 'Direct message on Instagram — Explore recent work & discuss concepts directly'}
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-auto pt-3.5 lg:pt-0 border-t lg:border-t-0 border-black/5 flex items-center justify-between lg:justify-end gap-2 shrink-0">
                <span className="text-xs sm:text-sm font-semibold text-pink-600 lg:text-foreground group-hover:underline">
                  {lang === 'vi' ? 'Nhắn Instagram Ngay' : 'Message on Instagram'}
                </span>
                <div className="w-8 h-8 lg:w-auto lg:h-auto rounded-full bg-pink-100/60 lg:bg-transparent flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-pink-600 lg:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>

            {/* 2. Instagram Workspace Channel - Secondary Channel for Constant Updates */}
            <a
              href={instagramWorkspace.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleContactClick}
              className="liquid-glass rounded-3xl p-4 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 border border-white/40 hover:border-white/80 hover:scale-[1.01] transition-all shadow-md group bg-gradient-to-r from-white/70 via-white/60 to-purple-50/30 cursor-pointer"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-5 min-w-0 flex-1">
                <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-2xl liquid-glass flex items-center justify-center shrink-0 bg-gradient-to-tr from-purple-500/20 via-indigo-500/30 to-pink-500/30 border border-white/60 shadow group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5 sm:w-8 sm:h-8 text-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-100/90 px-2.5 py-1 rounded-full leading-normal inline-block max-w-full">
                      {lang === 'vi'
                        ? 'Instagram Workspace · Cập Nhật Sản Phẩm Liên Tục'
                        : 'Instagram Workspace · Daily Work & BTS Updates'}
                    </span>
                  </div>
                  <h4
                    style={{ fontFamily: 'var(--font-display-vi)' }}
                    className="text-lg sm:text-2xl font-normal text-foreground tracking-tight mt-1 break-words"
                  >
                    {instagramWorkspace.value}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {lang === 'vi'
                      ? 'Kênh phụ update liên tục về sản phẩm, các dự án mới & khoảnh khắc hậu trường tác nghiệp'
                      : 'Secondary channel regularly sharing fresh client work, new projects & behind-the-scenes moments'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center shrink-0 pt-1 sm:pt-0">
                <span className="text-xs sm:text-sm font-medium text-foreground group-hover:underline">
                  {lang === 'vi' ? 'Xem Workspace Ngay' : 'Visit Workspace'}
                </span>
                <ArrowUpRight className="w-4 h-4 text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* 3 & 4. Other Channels: Zalo and Facebook */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherContacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleContactClick}
                  className="liquid-glass rounded-2xl p-5 sm:p-6 flex items-center justify-between hover:scale-[1.02] transition-transform group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl liquid-glass flex items-center justify-center shrink-0 border border-white/30 text-xs font-semibold">
                      {contact.id === 'zalo' ? 'Zalo' : 'FB'}
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-foreground">
                        {contact.label} {contact.id === 'zalo' ? (lang === 'vi' ? '(Nhắn trực tiếp)' : '(Direct Chat)') : ''}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <footer className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} _february.snail_ · {lang === 'vi' ? 'Nguyễn Tuấn Phong · Hà Nội, Việt Nam' : 'Nguyen Tuan Phong · Hanoi, Vietnam'}
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onBookCategory()}
                className="liquid-glass rounded-full px-6 py-2.5 text-xs text-foreground hover:scale-[1.03] transition-transform cursor-pointer whitespace-nowrap shrink-0"
              >
                {content.ctaBook}
              </button>
              <button
                type="button"
                onClick={onBackToTop}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Về Đầu Trang' : 'Back to Top'}</span>
              </button>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};
