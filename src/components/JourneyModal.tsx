import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Copy,
  MessageCircle,
  Instagram,
} from 'lucide-react';
import {
  BOOKING_MESSAGE_TEMPLATE,
  CategoryKey,
  Language,
  LocalizedContent,
  PortfolioCategory,
  SOCIAL_CONTACTS,
} from '../lib/heroConfig';
import { copyTextToClipboard } from '../lib/clipboard';

export type ModalState =
  | { type: 'category'; category: PortfolioCategory }
  | { type: 'booking'; preselectedCategory?: CategoryKey }
  | null;

interface JourneyModalProps {
  lang: Language;
  content: LocalizedContent;
  modalState: ModalState;
  onClose: () => void;
  onSwitchToBooking: (categoryKey: CategoryKey) => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({
  lang,
  content,
  modalState,
  onClose,
  onSwitchToBooking,
}) => {
  const [copiedBookingMessage, setCopiedBookingMessage] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const targetCategory =
    modalState?.type === 'booking' && modalState.preselectedCategory
      ? content.categories.find((c) => c.key === modalState.preselectedCategory)?.name
      : undefined;

  const currentTemplate = targetCategory
    ? lang === 'vi'
      ? `Chào Tuấn Phong, mình muốn đặt lịch chụp.
- Chụp: nửa ngày / cả ngày
- Số người chụp: ...
- Ngày chụp dự kiến: ...
- Nơi chụp: ....
- Concept mong muốn: ${targetCategory}`
      : `Hi Tuan Phong, I would like to book a photoshoot.
- Duration: Half-day / Full-day
- Number of guests: ...
- Estimated date: ...
- Location: ...
- Desired concept: ${targetCategory}`
    : lang === 'vi'
      ? BOOKING_MESSAGE_TEMPLATE
      : `Hi Tuan Phong, I would like to book a photography session.
- Service: Documentary Wedding
- Estimated date: Today
- Duration: Full-day
- Location: Hanoi`;

  const handleCopyBookingMessage = async () => {
    await copyTextToClipboard(currentTemplate);
    setCopiedBookingMessage(true);
    setTimeout(() => setCopiedBookingMessage(false), 2500);
  };

  const handleChannelClick = async () => {
    await copyTextToClipboard(currentTemplate);
    setCopiedBookingMessage(true);
    setTimeout(() => setCopiedBookingMessage(false), 2500);
  };

  const handleResetAndClose = () => {
    setLightboxIndex(null);
    onClose();
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null || !modalState || modalState.type !== 'category') return;

    const cat = modalState.category;
    const gallery =
      cat.thumbnail && !cat.gallery.includes(cat.thumbnail)
        ? [cat.thumbnail, ...cat.gallery]
        : cat.gallery;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % gallery.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0
        );
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, modalState]);

  if (!modalState) return null;

  // Category Gallery Modal View
  if (modalState.type === 'category') {
    const cat = modalState.category;
    const gallery =
      cat.thumbnail && !cat.gallery.includes(cat.thumbnail)
        ? [cat.thumbnail, ...cat.gallery]
        : cat.gallery;

    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-category-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-rise"
        onClick={handleResetAndClose}
      >
        <div
          className="liquid-glass w-full max-w-5xl rounded-3xl p-6 sm:p-10 text-left bg-white/95 text-foreground shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 shrink-0">
            <div>
              <h2
                id="modal-category-title"
                style={{ fontFamily: "var(--font-display-vi)" }}
                className="text-3xl sm:text-5xl font-normal tracking-tight text-foreground"
              >
                {cat.name}{' '}
                <span className="text-muted-foreground text-xl sm:text-3xl">
                  / {cat.subtitle}
                </span>
              </h2>
            </div>
            <button
              type="button"
              onClick={handleResetAndClose}
              aria-label="Close dialog"
              className="liquid-glass rounded-full p-2.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Gallery Content */}
          <div className="overflow-y-auto flex-1 pr-1 mt-4 space-y-6">
            <div className="text-xs sm:text-sm text-muted-foreground">
              <p className="text-foreground/90 font-medium">{cat.tagline}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {cat.description}
            </p>

            {/* Photo Grid (2 cols mobile, 3 cols desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-2">
              {gallery.map((imgSrc, idx) => (
                <div
                  key={imgSrc}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/15 cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:border-white/50 shadow-md"
                >
                  <img
                    src={imgSrc}
                    alt={`${cat.name} ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="liquid-glass rounded-full p-2.5 text-foreground backdrop-blur-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {idx === 0 && (
                    <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider text-white font-medium">
                      {lang === 'vi' ? 'Ảnh Bìa' : 'Featured'}
                    </div>
                  )}

                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-muted-foreground tabular-nums">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-muted-foreground">
              <span className="font-medium text-foreground mr-2">
                {lang === 'vi' ? 'Đặc trưng:' : 'Style:'}
              </span>
              {cat.tags.join(' · ')}
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <button
              type="button"
              onClick={handleResetAndClose}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {lang === 'vi' ? 'Quay Lại Trang Chủ' : 'Back to Home'}
            </button>
            <button
              type="button"
              onClick={() => {
                onSwitchToBooking(cat.key);
              }}
              className="liquid-glass rounded-full px-7 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
            >
              {content.sections.bookCategory} &rarr;
            </button>
          </div>
        </div>

        {/* High-Resolution Lightbox Viewer */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-60 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-rise"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Lightbox Topbar */}
            <div
              className="flex items-center justify-between text-xs text-muted-foreground z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-foreground font-medium text-sm">
                {cat.name} · {lightboxIndex + 1} / {gallery.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="liquid-glass rounded-full p-2.5 text-foreground hover:scale-105 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Image & Navigation Arrows */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev !== null ? prev - 1 + gallery.length : 0) % gallery.length
                  )
                }
                aria-label="Previous photo"
                className="absolute left-2 sm:left-6 z-20 liquid-glass rounded-full p-3 text-foreground hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={gallery[lightboxIndex]}
                alt={`${cat.name} full view`}
                decoding="async"
                className="max-h-[82vh] max-w-[90vw] object-contain rounded-xl shadow-2xl transition-all"
              />

              {/* Prefetch next photo for instant slide transitions */}
              {gallery.length > 1 && (
                <link
                  rel="prefetch"
                  as="image"
                  href={gallery[(lightboxIndex + 1) % gallery.length]}
                />
              )}

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev !== null ? prev + 1 : 0) % gallery.length
                  )
                }
                aria-label="Next photo"
                className="absolute right-2 sm:right-6 z-20 liquid-glass rounded-full p-3 text-foreground hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Bottom Info */}
            <div
              className="flex items-center justify-between text-xs text-muted-foreground z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="hidden sm:inline-block">{cat.tagline}</span>
              <span className="opacity-80">
                {lang === 'vi' ? 'Dùng phím mũi tên ← → để chuyển ảnh' : 'Use ← → arrow keys to navigate'}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Booking / Contact Modal View
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-booking-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-rise"
      onClick={handleResetAndClose}
    >
      <div
        className="liquid-glass w-full max-w-xl rounded-3xl p-8 sm:p-10 text-left bg-white/95 text-foreground shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-wide text-muted-foreground">
              @_february.snail_ · Nguyễn Tuấn Phong
            </p>
            <h2
              id="modal-booking-title"
              style={{ fontFamily: "var(--font-display-vi)" }}
              className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground mt-1"
            >
              {content.sections.contactTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close dialog"
            className="liquid-glass rounded-full p-2.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Template Message Quick Copy Box */}
        <div className="mt-5 liquid-glass rounded-2xl p-4 sm:p-5 border border-white/20">
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-black/5">
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-foreground/80" />
              <span className="text-xs font-semibold text-foreground">
                {lang === 'vi' ? 'Tin nhắn gửi Nguyễn Tuấn Phong (_february.snail_)' : 'Message to Tuan Phong'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyBookingMessage}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                copiedBookingMessage
                  ? 'bg-emerald-600 text-white'
                  : 'bg-black/10 text-foreground hover:bg-black/15'
              }`}
            >
              {copiedBookingMessage ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>{lang === 'vi' ? 'Đã sao chép' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>{lang === 'vi' ? 'Sao chép' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>

          <pre className="mt-2.5 text-[11px] sm:text-xs font-sans text-foreground/90 whitespace-pre-line leading-relaxed bg-black/5 rounded-xl p-3 select-all border border-black/5">
            {currentTemplate}
          </pre>

          <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
            {lang === 'vi' ? (
              <>💡 Bấm Zalo, Facebook hoặc Instagram bên dưới để nhắn thẳng cho <strong className="text-foreground">_february.snail_</strong>: tin nhắn được tự chép, bạn chỉ cần dán vào khung chat.</>
            ) : (
              <>💡 Click Zalo, Facebook, or Instagram below to chat directly with <strong className="text-foreground">_february.snail_</strong>: message is auto-copied, simply paste into chat.</>
            )}
          </p>
        </div>

        {/* Direct Contact Channels with Instagram as Largest */}
        <div className="mt-4 space-y-2.5">
          {/* Instagram - The Largest Featured Button */}
          {(() => {
            const insta = SOCIAL_CONTACTS.find((c) => c.id === 'instagram');
            if (!insta) return null;
            return (
              <a
                href={insta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleChannelClick}
                className="liquid-glass rounded-xl p-4 flex items-center justify-between border-2 border-white/40 hover:border-white/80 transition-all shadow-md group bg-gradient-to-r from-white/70 via-white/60 to-pink-50/30 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl liquid-glass flex items-center justify-center shrink-0 bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-white/50">
                    <Instagram className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-pink-600 bg-pink-100/70 px-2 py-0.5 rounded-full">
                        {lang === 'vi' ? 'Instagram · Kênh Chính' : 'Instagram · Main Channel'}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-medium text-foreground tracking-tight">
                      {insta.value}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {lang === 'vi'
                        ? 'Nhắn Instagram Direct (Tự chép tin nhắn khi bấm)'
                        : 'Instagram Direct (Auto-copies message on click)'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-xs font-medium text-foreground group-hover:underline">
                    {lang === 'vi' ? 'Mở Instagram' : 'Open Instagram'}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })()}

          {/* Other Channels: Zalo and Facebook */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SOCIAL_CONTACTS.filter((c) => c.id !== 'instagram').map((c) => (
              <a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleChannelClick}
                className="rounded-xl liquid-glass px-3.5 py-3 flex items-center justify-between hover:border-white/40 transition-colors group cursor-pointer"
              >
                <div className="truncate pr-2">
                  <p className="text-xs text-foreground font-medium truncate">
                    {c.label} {c.id === 'zalo' ? (lang === 'vi' ? '(Nhắn Zalo)' : '(Direct Chat)') : ''}
                  </p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-end">
          <button
            type="button"
            onClick={handleResetAndClose}
            className="liquid-glass rounded-full px-6 py-2 text-xs font-medium text-foreground hover:scale-[1.02] transition-transform cursor-pointer"
          >
            {lang === 'vi' ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
