export type Language = 'vi' | 'en';

export type NavItemId = 'home' | 'works' | 'about' | 'experience' | 'contact';

export type CategoryKey =
  | 'wedding'
  | 'haudong'
  | 'yearbook'
  | 'event'
  | 'concept'
  | 'couple'
  | 'stage'
  | 'sports';

export interface PortfolioCategory {
  key: CategoryKey;
  index: string;
  code: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  tags: string[];
  lensSpec: string;
  thumbnail: string;
  gallery: string[];
}

export interface ExperienceGroup {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  items: {
    highlight: string;
    detail: string;
  }[];
}

export interface SocialContact {
  id: 'zalo' | 'instagram' | 'instagram-workspace' | 'facebook';
  label: string;
  value: string;
  href: string;
  subtitle?: string;
}

export const BOOKING_SERVICES = [
  'Kỷ Yếu',
  'Phóng Sự Cưới',
  'Hầu Đồng',
  'Sự Kiện',
  'Concept',
  'Couple',
  'Show Diễn',
  'Thể Thao',
] as const;

export const BOOKING_DURATIONS = ['nửa ngày', 'cả ngày', 'tư vấn'] as const;

export const BOOKING_MESSAGE_TEMPLATE = `Chào Tuấn Phong, mình muốn đặt lịch chụp.
- Nhu cầu mong muốn: Phóng Sự Cưới
- Ngày chụp dự kiến: Hôm nay
- Thời gian: cả ngày
- Địa điểm: Hà Nội`;

export const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

export const HERO_BACKGROUND_IMAGE = '/Portfolio/NTP07244.jpg';

export const SOCIAL_CONTACTS: SocialContact[] = [
  {
    id: 'zalo',
    label: 'Zalo',
    value: '0886 288 605',
    href: 'https://zalo.me/0886288605',
    subtitle: 'Nhắn Zalo trực tiếp',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@_february.snail_',
    href: 'https://www.instagram.com/_february.snail_/',
    subtitle: 'Kênh Chính Thức · Trao đổi concept & xem portfolio',
  },
  {
    id: 'instagram-workspace',
    label: 'Instagram Workspace',
    value: '@_workspace.snail_',
    href: 'https://www.instagram.com/_workspace.snail_/',
    subtitle: 'Kênh Phụ · Update liên tục về sản phẩm, dự án mới & hậu trường',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'tfongg.nolovenoproblem',
    href: 'https://www.facebook.com/tfongg.nolovenoproblem/',
    subtitle: 'Facebook cá nhân',
  },
];

export const CREATIVE_TOOLS = [
  'Adobe Lightroom',
  'Adobe Photoshop',
  'Adobe Premiere Pro',
  'DaVinci Resolve',
];

export const CATEGORY_MEDIA: Record<
  CategoryKey,
  { folder: string; thumbnail: string; gallery: string[] }
> = {
  wedding: {
    folder: 'Cưới',
    thumbnail: '/Portfolio/Cưới/Thumbnail.jpg',
    gallery: [
      '/Portfolio/Cưới/DSC04604.jpg',
      '/Portfolio/Cưới/DSC04640.jpg',
      '/Portfolio/Cưới/DSC04662.jpg',
      '/Portfolio/Cưới/DSC04681.jpg',
      '/Portfolio/Cưới/DSC04694.jpg',
      '/Portfolio/Cưới/DSC04697.jpg',
      '/Portfolio/Cưới/DSC04884.jpg',
      '/Portfolio/Cưới/DSC04914.jpg',
      '/Portfolio/Cưới/DSC04935.jpg',
      '/Portfolio/Cưới/DSC04956.jpg',
      '/Portfolio/Cưới/DSC05022.jpg',
    ],
  },
  haudong: {
    folder: 'Hầu Đồng',
    thumbnail: '/Portfolio/Hầu Đồng/thumbnail.jpg',
    gallery: [
      '/Portfolio/Hầu Đồng/DSC00442.jpg',
      '/Portfolio/Hầu Đồng/DSC00447.jpg',
      '/Portfolio/Hầu Đồng/DSC01323.jpg',
      '/Portfolio/Hầu Đồng/DSC01620.jpg',
      '/Portfolio/Hầu Đồng/DSC01701.jpg',
      '/Portfolio/Hầu Đồng/DSC05873.jpg',
      '/Portfolio/Hầu Đồng/DSC06372.jpg',
      '/Portfolio/Hầu Đồng/DSC06523.jpg',
      '/Portfolio/Hầu Đồng/DSC07007.jpg',
      '/Portfolio/Hầu Đồng/DSC09874.jpg',
      '/Portfolio/Hầu Đồng/NTP05258.jpg',
    ],
  },
  yearbook: {
    folder: 'Kỷ Yếu',
    thumbnail: '/Portfolio/Kỷ Yếu/Thumbnail.jpg',
    gallery: [
      '/Portfolio/Kỷ Yếu/IMG_1713.jpg',
      '/Portfolio/Kỷ Yếu/IMG_1716.jpg',
      '/Portfolio/Kỷ Yếu/IMG_1754.jpg',
      '/Portfolio/Kỷ Yếu/IMG_3887.jpg',
      '/Portfolio/Kỷ Yếu/IMG_3888.jpg',
      '/Portfolio/Kỷ Yếu/IMG_3969.jpg',
      '/Portfolio/Kỷ Yếu/IMG_8317.jpg',
      '/Portfolio/Kỷ Yếu/IMG_8322.jpg',
    ],
  },
  event: {
    folder: 'Sự Kiện',
    thumbnail: '/Portfolio/Sự Kiện/thumbnail.jpg',
    gallery: [
      '/Portfolio/Sự Kiện/DSC01448.jpg',
      '/Portfolio/Sự Kiện/DSC01656.jpg',
      '/Portfolio/Sự Kiện/DSC01692.jpg',
      '/Portfolio/Sự Kiện/DSC02990.jpg',
      '/Portfolio/Sự Kiện/NTP02341.jpg',
      '/Portfolio/Sự Kiện/NTP02349.jpg',
      '/Portfolio/Sự Kiện/NTP02357.jpg',
      '/Portfolio/Sự Kiện/NTP02474.jpg',
      '/Portfolio/Sự Kiện/NTP02522.jpg',
      '/Portfolio/Sự Kiện/NTP03360.jpg',
      '/Portfolio/Sự Kiện/NTP03468.jpg',
      '/Portfolio/Sự Kiện/NTP03561.jpg',
      '/Portfolio/Sự Kiện/NTP03588.jpg',
    ],
  },
  concept: {
    folder: 'Concept',
    thumbnail: '/Portfolio/Concept/thumbnail.jpg',
    gallery: [
      '/Portfolio/Concept/DSC05497.jpg',
      '/Portfolio/Concept/DSC05589.jpg',
      '/Portfolio/Concept/DSC05595.jpg',
      '/Portfolio/Concept/IMG_4287.jpg',
      '/Portfolio/Concept/NTP00053.jpg',
      '/Portfolio/Concept/NTP09413.jpg',
      '/Portfolio/Concept/NTP09421.jpg',
      '/Portfolio/Concept/NTP09435.jpg',
      '/Portfolio/Concept/quality_restoration_20240922152456367.JPG',
      '/Portfolio/Concept/quality_restoration_20240922152534907.JPG',
      '/Portfolio/Concept/quality_restoration_20240922152559684.JPG',
    ],
  },
  couple: {
    folder: 'Couple',
    thumbnail: '/Portfolio/Couple/thumbnail.jpg',
    gallery: [
      '/Portfolio/Couple/DSC02597.jpg',
      '/Portfolio/Couple/DSC02668.jpg',
      '/Portfolio/Couple/DSC02814.jpg',
      '/Portfolio/Couple/DSC04096.jpg',
      '/Portfolio/Couple/DSC04108.jpg',
      '/Portfolio/Couple/DSC04405.jpg',
      '/Portfolio/Couple/DSC04558.jpg',
      '/Portfolio/Couple/DSC04638.jpg',
    ],
  },
  stage: {
    folder: 'Show Diễn',
    thumbnail: '/Portfolio/Show Diễn/Thumbnail.jpg',
    gallery: [
      '/Portfolio/Show Diễn/NTP03247.jpg',
      '/Portfolio/Show Diễn/NTP03727.jpg',
      '/Portfolio/Show Diễn/NTP03909.jpg',
      '/Portfolio/Show Diễn/NTP04012.jpg',
      '/Portfolio/Show Diễn/NTP04032.jpg',
      '/Portfolio/Show Diễn/NTP04139.jpg',
      '/Portfolio/Show Diễn/NTP04266.jpg',
      '/Portfolio/Show Diễn/NTP04382.jpg',
      '/Portfolio/Show Diễn/NTP04400.jpg',
    ],
  },
  sports: {
    folder: 'Thể Thao',
    thumbnail: '/Portfolio/Thể Thao/thumbnail.jpg',
    gallery: [
      '/Portfolio/Thể Thao/DSC01805.jpg',
      '/Portfolio/Thể Thao/DSC02340.jpg',
      '/Portfolio/Thể Thao/DSC02356.jpg',
      '/Portfolio/Thể Thao/DSC02452.jpg',
      '/Portfolio/Thể Thao/DSC02646.jpg',
      '/Portfolio/Thể Thao/DSC05819.jpg',
      '/Portfolio/Thể Thao/DSC05833.jpg',
      '/Portfolio/Thể Thao/DSC05835.jpg',
      '/Portfolio/Thể Thao/DSC05949.jpg',
      '/Portfolio/Thể Thao/DSC06032.jpg',
      '/Portfolio/Thể Thao/DSC07421.jpg',
      '/Portfolio/Thể Thao/DSC07488.jpg',
      '/Portfolio/Thể Thao/DSC07522.jpg',
      '/Portfolio/Thể Thao/DSC07607.jpg',
      '/Portfolio/Thể Thao/DSC08066.jpg',
      '/Portfolio/Thể Thao/DSC08117.jpg',
    ],
  },
};

export interface LocalizedContent {
  nav: { id: NavItemId; label: string; href: string }[];
  ctaBook: string;
  ctaExplore: string;
  ctaAbout: string;
  hero: {
    kicker: string;
    headlinePart1: string;
    headlineEm1: string;
    headlinePart2: string;
    headlineEm2: string;
    subtext: string;
    philosophyQuote: string;
  };
  profile: {
    handle: string;
    name: string;
    role: string;
    location: string;
    intro: string;
    styleTitle: string;
    styleText: string;
    toolsLabel: string;
  };
  sections: {
    worksKicker: string;
    worksTitle: string;
    worksSubtitle: string;
    aboutKicker: string;
    aboutTitle: string;
    expKicker: string;
    expTitle: string;
    expSubtitle: string;
    contactKicker: string;
    contactTitle: string;
    contactSubtitle: string;
    viewDetails: string;
    bookCategory: string;
    photosCountSuffix: string;
  };
  categories: PortfolioCategory[];
  experienceGroups: ExperienceGroup[];
}

export const PORTFOLIO_DATA: Record<Language, LocalizedContent> = {
  vi: {
    nav: [
      { id: 'home', label: 'Trang Chủ', href: '#home' },
      { id: 'about', label: 'Giới Thiệu', href: '#about' },
      { id: 'experience', label: 'Kinh Nghiệm', href: '#experience' },
      { id: 'works', label: 'Dự Án', href: '#works' },
      { id: 'contact', label: 'Liên Hệ', href: '#contact' },
    ],
    ctaBook: 'Đặt Lịch Chụp',
    ctaExplore: 'Khám Phá Dự Án',
    ctaAbout: 'Giới Thiệu & Kinh Nghiệm',
    hero: {
      kicker: 'Nguyễn Tuấn Phong · Freelance Media & Nhiếp Ảnh Gia · Hà Nội, Việt Nam',
      headlinePart1: 'Less',
      headlineEm1: 'industry,',
      headlinePart2: 'more',
      headlineEm2: 'identity.',
      subtext:
        'Xin chào, mình là Nguyễn Tuấn Phong (_february.snail_). Bắt trọn những cảm xúc chân thực và ánh sáng tự nhiên thành tác phẩm vượt thời gian.',
      philosophyQuote:
        'Khoảnh khắc thật · Cảm xúc chân thành · Nhiếp ảnh nguyên bản',
    },
    profile: {
      handle: '@_february.snail_',
      name: 'Nguyễn Tuấn Phong',
      role: 'Freelance Media & Nhiếp Ảnh Gia',
      location: 'Hà Nội, Việt Nam',
      intro:
        'Mình không chỉ bấm máy để lưu giữ kỷ niệm, mà để đóng băng những nhịp đập cảm xúc. Với mình, mỗi khung hình phải là một cú chạm mạnh mẽ về thị giác. Bằng việc chắt lọc những dải ánh sáng chân thực và bắt trọn những rung cảm thô mộc nhất, mình biến những khoảnh khắc thoáng qua thành các tác phẩm mang chiều sâu và đậm chất nguyên bản.',
      styleTitle: 'Phong Cách & Kỹ Thuật Hậu Kỳ',
      styleText:
        'Thế mạnh nổi bật của mình là khả năng xử lý dải màu trong trẻo, tự nhiên và sắc nét, luôn bắt kịp và đồng điệu với các xu hướng thẩm mỹ thị giác hiện đại theo từng năm. Mọi khung hình đều được cân chỉnh tỉ mỉ về ánh sáng tự nhiên và độ tương phản để tôn vinh trọn vẹn vẻ đẹp nguyên bản, làn da tươi tắn cùng năng lượng trẻ trung, mang đến những tác phẩm vừa thời thượng vừa giữ trọn giá trị cảm xúc dài lâu.',
      toolsLabel: 'Công Cụ Hậu Kỳ Chuyên Dụng',
    },
    sections: {
      worksKicker: 'Danh Mục Tác Phẩm',
      worksTitle: 'Dự Án & Dịch Vụ Hình Ảnh',
      worksSubtitle:
        'Chọn từng danh mục bên dưới để xem trọn vẹn bộ ảnh đã tối ưu tốc độ cao và đặt lịch bấm máy cùng _february.snail_.',
      aboutKicker: 'Chân Dung Nghệ Sĩ',
      aboutTitle: 'Triết Lý Thị Giác & Dải Màu Nguyên Bản',
      expKicker: 'Hành Trình Thực Chiến',
      expTitle: 'Kinh Nghiệm Tác Nghiệp & Đối Tác',
      expSubtitle:
        'Hành trình tác nghiệp thực tế từ truyền hình, sự kiện sân khấu, giải đấu thể thao đến phóng sự cưới, thời trang và concept nghệ thuật.',
      contactKicker: 'Kết Nối Trực Tiếp',
      contactTitle: 'Liên Hệ & Đặt Lịch Cùng Phong',
      contactSubtitle:
        'Sẵn sàng đồng hành cùng bạn trong các dự án cá nhân, phóng sự cưới, sự kiện và sản xuất truyền thông tại Hà Nội & toàn quốc.',
      viewDetails: 'Xem trọn bộ ảnh',
      bookCategory: 'Đặt lịch danh mục này',
      photosCountSuffix: 'tác phẩm',
    },
    categories: [
      {
        key: 'wedding',
        index: '01',
        code: 'CƯỚI',
        name: 'Cưới',
        subtitle: 'Wedding Photojournalism',
        tagline: 'Phóng sự cưới tinh tế · Giọt nước mắt hạnh phúc · Cảm xúc vẹn nguyên',
        description:
          'Kể lại câu chuyện ngày chung đôi bằng phong cách phóng sự cưới tinh tế. Khác với những bức ảnh xếp đội hình truyền thống, mình lùi lại làm người quan sát thầm lặng để bắt trọn cái siết tay trước giờ G, giọt nước mắt hạnh phúc trên lễ đường và nụ cười bung xõa của hội bạn thân.',
        tags: ['Phóng sự cưới', 'Pre-wedding', 'Lễ ăn hỏi & Lễ cưới', 'Xúc cảm chân thật', 'Màu sắc trường tồn'],
        lensSpec: '35mm & 85mm Prime · Natural Documentary Light',
        thumbnail: CATEGORY_MEDIA.wedding.thumbnail,
        gallery: CATEGORY_MEDIA.wedding.gallery,
      },
      {
        key: 'haudong',
        index: '02',
        code: 'HẦU ĐỒNG',
        name: 'Hầu Đồng',
        subtitle: 'Sacred Spiritual Rituals',
        tagline: 'Tín ngưỡng Tứ Phủ · Khăn chầu áo ngự · Linh thiêng & Huyền ảo',
        description:
          'Ghi lại nét đẹp linh thiêng, tôn nghiêm của nghi lễ Hầu Đồng trong tín ngưỡng thờ Mẫu Tam Tứ Phủ. Bắt trọn thần thái thăng hoa của các thanh đồng, từng nếp áo ngự rực rỡ, khói hương nghi ngút và dải ánh sáng lung linh huyền ảo nơi cửa đền.',
        tags: ['Tín ngưỡng Tứ Phủ', 'Nghi lễ Lên Đồng', 'Khăn chầu áo ngự', 'Văn hóa tâm linh', 'Ánh sáng huyền ảo'],
        lensSpec: '50mm f/1.2 · Low-Light Incense & Shrine Atmosphere',
        thumbnail: CATEGORY_MEDIA.haudong.thumbnail,
        gallery: CATEGORY_MEDIA.haudong.gallery,
      },
      {
        key: 'yearbook',
        index: '03',
        code: 'KỶ YẾU',
        name: 'Kỷ Yếu',
        subtitle: 'Graduation & Youth',
        tagline: 'Kỷ niệm thanh xuân · Concept thời trang · Cảm xúc tự nhiên',
        description:
          'Từ chối những cách tạo dáng rập khuôn cứng nhắc, mình tập trung bắt lấy nhịp điệu tuổi trẻ, sự hồn nhiên và cả những giọt nước mắt nghẹn ngào trong ngày bế giảng. Mỗi bộ ảnh kỷ yếu là một thước phim điện ảnh lưu giữ trọn vẹn cá tính của từng tập thể lớp.',
        tags: ['Thanh xuân vườn trường', 'Concept kỷ yếu', 'Ảnh nhóm & Cá nhân', 'Cảm xúc tự nhiên', 'Màu sắc tươi trẻ'],
        lensSpec: '24-70mm & 35mm · Cinematic Film Grade',
        thumbnail: CATEGORY_MEDIA.yearbook.thumbnail,
        gallery: CATEGORY_MEDIA.yearbook.gallery,
      },
      {
        key: 'event',
        index: '04',
        code: 'SỰ KIỆN',
        name: 'Sự Kiện',
        subtitle: 'Event Photography',
        tagline: 'Hội nghị doanh nghiệp · Gala tri ân · Festival âm nhạc',
        description:
          'Ghi lại trọn vẹn không khí hào hứng và đẳng cấp của các sự kiện doanh nghiệp, hội nghị, tiệc gala tri ân và các lễ hội âm nhạc. Góc máy linh hoạt, bắt trọn từng khoảnh khắc quyết định cùng thần thái tự nhiên của khách mời.',
        tags: ['Hội nghị & Gala', 'Lễ khai trương / Ra mắt', 'Festival âm nhạc', 'Highlight 4K', 'Bắt trọn khoảnh khắc'],
        lensSpec: 'Dual-Body Setup · 24-70mm & 70-200mm f/2.8',
        thumbnail: CATEGORY_MEDIA.event.thumbnail,
        gallery: CATEGORY_MEDIA.event.gallery,
      },
      {
        key: 'concept',
        index: '05',
        code: 'CONCEPT',
        name: 'Concept',
        subtitle: 'Editorial & Lookbook',
        tagline: 'Ý tưởng độc bản · Lookbook nghệ thuật · Ánh sáng Studio',
        description:
          'Không gian để những ý tưởng độc bản nhất được hiện thực hóa. Đồng hành cùng bạn từ khâu bóc tách moodboard, dàn dựng bối cảnh đến đánh sáng nghệ thuật nhằm tạo ra những bộ Fashion lookbook hoặc chân dung mang đậm tính thể nghiệm và chiều sâu nội tâm.',
        tags: ['Thời trang / Lookbook', 'Editorial Art', 'Ánh sáng Studio', 'Art Direction', 'Phong cách riêng biệt'],
        lensSpec: 'Studio Strobe & Continuous RGB · Medium Telephoto',
        thumbnail: CATEGORY_MEDIA.concept.thumbnail,
        gallery: CATEGORY_MEDIA.concept.gallery,
      },
      {
        key: 'couple',
        index: '06',
        code: 'COUPLE',
        name: 'Couple',
        subtitle: 'Love Story',
        tagline: 'Tình yêu mộc mạc · Dạo phố lãng mạn · Ấm áp & Gần gũi',
        description:
          'Không gò ép vào những tư thế gượng gạo, mình tạo ra không gian thoải mái như một buổi hẹn hò dạo phố hay cà phê sáng thực sự trước ống kính. Từ những cái nắm tay ngượng ngùng đến ánh mắt si tình, tất cả được kể lại qua lăng kính lãng mạn và thô mộc nhất.',
        tags: ['Storytelling', 'Dạo phố lãng mạn', 'Tự nhiên & Gần gũi', 'Tone màu ấm', 'Kỷ niệm tình yêu'],
        lensSpec: '35mm & 50mm · Golden Hour Ambient Light',
        thumbnail: CATEGORY_MEDIA.couple.thumbnail,
        gallery: CATEGORY_MEDIA.couple.gallery,
      },
      {
        key: 'stage',
        index: '07',
        code: 'SHOW DIỄN',
        name: 'Show Diễn',
        subtitle: 'Live Stage & Concert',
        tagline: 'Ánh sáng sân khấu · Cảm xúc nghệ sĩ · Góc quay điện ảnh',
        description:
          'Trực tiếp tác nghiệp tại các show diễn sôi động của giới trẻ (BN1N, Astroworld...), làm việc trực tiếp với nghệ sĩ biểu diễn và bắt bài ánh sáng sân khấu phức tạp để tái hiện không gian âm nhạc cuồng nhiệt.',
        tags: ['Concert & Liveshow', 'Nghệ sĩ sân khấu', 'Ánh sáng Cinematic', 'Biểu diễn trực tiếp', 'Moody Stage'],
        lensSpec: 'High-ISO Stage Mastery · 70-200mm f/2.8 GM',
        thumbnail: CATEGORY_MEDIA.stage.thumbnail,
        gallery: CATEGORY_MEDIA.stage.gallery,
      },
      {
        key: 'sports',
        index: '08',
        code: 'THỂ THAO',
        name: 'Thể Thao',
        subtitle: 'Sports & Motion',
        tagline: 'Tốc độ đỉnh cao · Năng lượng bùng nổ · Bắt nét siêu nhanh',
        description:
          'Lột tả tốc độ, sự tập trung và năng lượng bùng nổ của vận động viên tại Giải Bóng rổ Sinh viên Toàn quốc (Cụm miền Bắc), các giải chạy marathon và bóng đá sân cỏ với phản xạ nhanh nhạy cùng thiết bị bắt nét tốc độ cao.',
        tags: ['Giải chạy Marathon', 'Bóng rổ & Bóng đá', 'Fitness / Workout', 'Action & Speed', 'Độ nét cao'],
        lensSpec: '1/2000s Continuous AF-C · Telephoto Action Tracking',
        thumbnail: CATEGORY_MEDIA.sports.thumbnail,
        gallery: CATEGORY_MEDIA.sports.gallery,
      },
    ],
    experienceGroups: [
      {
        id: 'broadcast',
        number: '01',
        title: 'Truyền Hình & Đối Tác Tổ Chức',
        subtitle: 'Broadcast & Institutional Clients',
        items: [
          {
            highlight: 'Đài Truyền hình Việt Nam (VTV)',
            detail:
              'Hợp tác sản xuất hình ảnh cùng các MC trẻ của VTV; có kinh nghiệm tác nghiệp thực tế và từng có sản phẩm/hình ảnh lên sóng kênh VTV1.',
          },
          {
            highlight: 'Cơ quan & Đoàn thể tại Hà Nội',
            detail:
              'Đối tác hình ảnh của Đội Cộng tác viên Hội Sinh viên Việt Nam TP. Hà Nội, Nhà Hát Kịch Hà Nội, và tham gia các dự án cộng đồng/từ thiện.',
          },
        ],
      },
      {
        id: 'entertainment',
        number: '02',
        title: 'Sự Kiện Giải Trí & Nghệ Thuật',
        subtitle: 'Entertainment & Arts Events',
        items: [
          {
            highlight: 'Show diễn & Âm nhạc giới trẻ',
            detail:
              'Trực tiếp tác nghiệp tại các show diễn sôi động (BN1N, Astroworld...), làm việc trực tiếp với các nghệ sĩ biểu diễn và xử lý ánh sáng sân khấu phức tạp.',
          },
          {
            highlight: 'Sự kiện Giáo dục thường niên',
            detail:
              'Phụ trách hình ảnh cho các sự kiện thường niên quy mô của các trường mầm non và THCS trên địa bàn Hà Nội cũng như các tỉnh lân cận.',
          },
        ],
      },
      {
        id: 'sports-action',
        number: '03',
        title: 'Thể Thao & Hành Động Tốc Độ Cao',
        subtitle: 'Sports & Action Photography',
        items: [
          {
            highlight: 'Giải đấu chuyên nghiệp & Sinh viên',
            detail:
              'Tác nghiệp tại Giải Bóng rổ Sinh viên Toàn quốc (Cụm miền Bắc) và các trận bóng đá sân cỏ giao lưu với khả năng phản xạ nhanh nhạy bắt trọn khoảnh khắc kịch tính.',
          },
        ],
      },
      {
        id: 'wedding-exp',
        number: '04',
        title: 'Phóng Sự Cưới',
        subtitle: 'Documentary Wedding & Couples',
        items: [
          {
            highlight: 'Phóng sự ngày cưới & Lễ thành hôn',
            detail:
              'Lùi lại làm người quan sát thầm lặng để bắt trọn những rung cảm chân thật, giọt nước mắt hạnh phúc và nụ cười bung xõa không cần sắp đặt.',
          },
          {
            highlight: 'Khoảnh khắc lứa đôi (Couple Story)',
            detail:
              'Tạo không gian thoải mái như một buổi hẹn hò tự nhiên, ghi lại trọn vẹn cái siết tay, ánh mắt si tình và kỷ niệm tình yêu mộc mạc.',
          },
        ],
      },
      {
        id: 'fashion-exp',
        number: '05',
        title: 'Thời Trang',
        subtitle: 'Fashion & Editorial Lookbook',
        items: [
          {
            highlight: 'Lookbook thương hiệu & Local Brand',
            detail:
              'Định hình ngôn ngữ thị giác sắc nét, tôn vinh phom dáng, chất liệu vải và tinh thần thời thượng của từng bộ sưu tập.',
          },
          {
            highlight: 'High-Fashion & Chân dung người mẫu',
            detail:
              'Làm chủ ánh sáng studio và bối cảnh ngoại cảnh, khai thác thần thái người mẫu và góc máy đậm chất nghệ thuật.',
          },
        ],
      },
      {
        id: 'yearbook-exp',
        number: '06',
        title: 'Kỷ Yếu',
        subtitle: 'Graduation & Youth Story',
        items: [
          {
            highlight: 'Kỷ yếu tập thể lớp & Trường học',
            detail:
              'Bắt trọn nhịp đập tuổi trẻ, sự hồn nhiên, tinh nghịch và những cái ôm nghẹn ngào lưu dấu thời khắc bế giảng thiêng liêng.',
          },
          {
            highlight: 'Concept kỷ yếu cá tính & Độc bản',
            detail:
              'Từ chối những dáng chụp rập khuôn, cùng tập thể lên moodboard sáng tạo để mỗi lớp là một thước phim điện ảnh độc nhất.',
          },
        ],
      },
      {
        id: 'concept-exp',
        number: '07',
        title: 'Concept',
        subtitle: 'Creative Concept & Art Direction',
        items: [
          {
            highlight: 'Ý tưởng độc bản & Moodboard sáng tạo',
            detail:
              'Đồng hành từ khâu lên ý tưởng, dựng bối cảnh đến set ánh sáng nghệ thuật mang chiều sâu và đậm tính thể nghiệm.',
          },
          {
            highlight: 'Hậu kỳ & Dải màu điện ảnh',
            detail:
              'Xử lý màu sắc trong trẻo hiện đại kết hợp độ tương phản điện ảnh, biến những ý tưởng táo bạo thành tác phẩm nguyên bản.',
          },
        ],
      },
    ],
  },
  en: {
    nav: [
      { id: 'home', label: 'Home', href: '#home' },
      { id: 'about', label: 'About', href: '#about' },
      { id: 'experience', label: 'Experience', href: '#experience' },
      { id: 'works', label: 'Works', href: '#works' },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ],
    ctaBook: 'Book a Session',
    ctaExplore: 'Explore Works',
    ctaAbout: 'About Me & Experience',
    hero: {
      kicker: 'Nguyen Tuan Phong · Freelance Media & Photographer · Hanoi, Vietnam',
      headlinePart1: 'Less',
      headlineEm1: 'industry,',
      headlinePart2: 'more',
      headlineEm2: 'identity.',
      subtext:
        'Hi, I am Nguyen Tuan Phong (_february.snail_). More than just taking pictures, I capture real emotions and natural light to create timeless, authentic photos.',
      philosophyQuote:
        'Real moments · Honest emotions · Timeless photography',
    },
    profile: {
      handle: '@_february.snail_',
      name: 'Nguyen Tuan Phong',
      role: 'Freelance Media & Photographer',
      location: 'Hanoi, Vietnam',
      intro:
        'I believe photography is more than just taking pictures—it is about capturing real feelings in their most honest form. With an eye for natural light and genuine moments, I turn fleeting experiences into meaningful, lasting stories.',
      styleTitle: 'Color Style & Editing',
      styleText:
        'My signature style features a clean, bright, and natural color tone that stays modern and fresh. Every image is carefully edited for authentic skin tones, gentle contrast, and balanced light—giving you timeless photos you will love for years to come.',
      toolsLabel: 'Editing Tools',
    },
    sections: {
      worksKicker: '01. Portfolio',
      worksTitle: 'Projects & Photography Services',
      worksSubtitle:
        'Explore photo collections below and book your shoot with _february.snail_.',
      aboutKicker: '02. About',
      aboutTitle: 'About & Photography Style',
      expKicker: '03. Experience',
      expTitle: 'Experience & Client Highlights',
      expSubtitle:
        'Hands-on photography experience across television, live concerts, sports tournaments, weddings, and creative shoots.',
      contactKicker: '04. Contact',
      contactTitle: 'Get In Touch & Book a Shoot',
      contactSubtitle:
        'Ready to capture your special moments in Hanoi and across Vietnam. Send a message to get started.',
      viewDetails: 'View gallery',
      bookCategory: 'Book this shoot',
      photosCountSuffix: 'photos',
    },
    categories: [
      {
        key: 'wedding',
        index: '01',
        code: 'WEDDING',
        name: 'Wedding',
        subtitle: 'Documentary Wedding Photography',
        tagline: 'Candid moments · Tears of joy · Timeless love',
        description:
          'Telling your wedding story through natural documentary photography. Instead of stiff posed lineups, I quietly capture real emotions—from nervous smiles before the ceremony to happy tears and joyful celebrations.',
        tags: ['Wedding Story', 'Pre-Wedding', 'Ceremony & Reception', 'Real Emotion', 'Natural Color'],
        lensSpec: '35mm & 85mm Prime · Natural Light',
        thumbnail: CATEGORY_MEDIA.wedding.thumbnail,
        gallery: CATEGORY_MEDIA.wedding.gallery,
      },
      {
        key: 'haudong',
        index: '02',
        code: 'HAU DONG',
        name: 'Hau Dong',
        subtitle: 'Traditional Vietnamese Rituals',
        tagline: 'Mother Goddess worship · Traditional regalia · Spiritual beauty',
        description:
          'Documenting the sacred beauty of the Vietnamese Hau Dong ritual in Mother Goddess worship. Capturing expressive spiritual moments, ornate ceremonial robes, fragrant incense, and temple lighting with deep cultural respect.',
        tags: ['Mother Goddess Religion', 'Hau Dong Ritual', 'Sacred Robes', 'Cultural Heritage', 'Temple Light'],
        lensSpec: '50mm f/1.2 · Low-Light & Shrine Atmosphere',
        thumbnail: CATEGORY_MEDIA.haudong.thumbnail,
        gallery: CATEGORY_MEDIA.haudong.gallery,
      },
      {
        key: 'yearbook',
        index: '03',
        code: 'YEARBOOK',
        name: 'Yearbook',
        subtitle: 'Class & Graduation Memories',
        tagline: 'Youthful energy · Creative concepts · Lasting friendships',
        description:
          'Moving away from stiff, repetitive poses to capture real youth, spontaneous laughter, and heartfelt farewells on graduation day. Each album is a fun, cinematic story of your school memories.',
        tags: ['Class Memories', 'Creative Concepts', 'Group Portraits', 'Candid Moments', 'Vibrant Colors'],
        lensSpec: '24-70mm & 35mm · Cinematic Grade',
        thumbnail: CATEGORY_MEDIA.yearbook.thumbnail,
        gallery: CATEGORY_MEDIA.yearbook.gallery,
      },
      {
        key: 'event',
        index: '04',
        code: 'EVENT',
        name: 'Events',
        subtitle: 'Corporate & Live Events',
        tagline: 'Corporate summits · Gala dinners · Music festivals',
        description:
          'Professional photo coverage for corporate events, conferences, annual galas, and music festivals. Dynamic, high-quality shots that capture key milestones and natural guest interactions.',
        tags: ['Conferences & Galas', 'Grand Openings', 'Music Festivals', 'Key Moments', 'Candid Photos'],
        lensSpec: 'Dual-Body Setup · 24-70mm & 70-200mm f/2.8',
        thumbnail: CATEGORY_MEDIA.event.thumbnail,
        gallery: CATEGORY_MEDIA.event.gallery,
      },
      {
        key: 'concept',
        index: '05',
        code: 'CONCEPT',
        name: 'Concept',
        subtitle: 'Creative & Fashion Lookbooks',
        tagline: 'Creative ideas · Fashion lookbooks · Studio lighting',
        description:
          'A creative space to bring unique visual ideas to life. I assist from moodboard planning and set styling to creative lighting, creating standout fashion lookbooks and artistic portraits.',
        tags: ['Fashion & Lookbook', 'Editorial Art', 'Studio Lighting', 'Art Direction', 'Custom Moodboards'],
        lensSpec: 'Studio Strobe & RGB · Medium Telephoto',
        thumbnail: CATEGORY_MEDIA.concept.thumbnail,
        gallery: CATEGORY_MEDIA.concept.gallery,
      },
      {
        key: 'couple',
        index: '06',
        code: 'COUPLE',
        name: 'Couple',
        subtitle: 'Romantic & Casual Dates',
        tagline: 'Natural chemistry · Romantic walks · Warm & unposed',
        description:
          'No awkward poses—just a relaxed photo walk or coffee date around the city. We capture the sweet, natural connections between you two, from gentle laughs to loving glances.',
        tags: ['Storytelling', 'Romantic Walks', 'Natural & Candid', 'Warm Tones', 'Couples'],
        lensSpec: '35mm & 50mm · Golden Hour Light',
        thumbnail: CATEGORY_MEDIA.couple.thumbnail,
        gallery: CATEGORY_MEDIA.couple.gallery,
      },
      {
        key: 'stage',
        index: '07',
        code: 'LIVE STAGE',
        name: 'Live Stage',
        subtitle: 'Concerts & Live Shows',
        tagline: 'Concert energy · Stage artists · Dynamic lighting',
        description:
          'Experienced in capturing high-energy concerts and music festivals (BN1N, Astroworld...). Fast reflexes to freeze live performances under complex, vibrant stage lighting.',
        tags: ['Concerts & Shows', 'Stage Artists', 'Live Performances', 'Atmosphere', 'Concert Lighting'],
        lensSpec: 'High-ISO Low-Light · 70-200mm f/2.8',
        thumbnail: CATEGORY_MEDIA.stage.thumbnail,
        gallery: CATEGORY_MEDIA.stage.gallery,
      },
      {
        key: 'sports',
        index: '08',
        code: 'SPORTS',
        name: 'Sports',
        subtitle: 'Action & Athletics',
        tagline: 'High speed · Peak action · Dramatic moments',
        description:
          'Capturing peak speed and intensity at basketball tournaments, marathons, and football matches. High-speed burst photography to catch dramatic, game-winning action shots.',
        tags: ['Basketball & Football', 'Running & Marathons', 'Fitness', 'Action Tracking', 'High-Speed Photos'],
        lensSpec: '1/2000s High-Speed Burst · Action Tracking',
        thumbnail: CATEGORY_MEDIA.sports.thumbnail,
        gallery: CATEGORY_MEDIA.sports.gallery,
      },
    ],
    experienceGroups: [
      {
        id: 'broadcast',
        number: '01',
        title: 'Television & Public Organizations',
        subtitle: 'Broadcast & Media Partners',
        items: [
          {
            highlight: 'Vietnam Television (VTV)',
            detail:
              'Co-produced photos with young VTV anchors; fieldwork experience with images broadcast on national channel VTV1.',
          },
          {
            highlight: 'Public Organizations in Hanoi',
            detail:
              'Official photographer for the Hanoi Student Association Volunteer Team, Hanoi Drama Theatre, and community charity projects.',
          },
        ],
      },
      {
        id: 'entertainment',
        number: '02',
        title: 'Entertainment & Live Events',
        subtitle: 'Concerts & Arts',
        items: [
          {
            highlight: 'Live Concerts & Youth Music',
            detail:
              'On-site photographer for major music shows (BN1N, Astroworld...), working directly with artists under dynamic stage lighting.',
          },
          {
            highlight: 'School & Educational Events',
            detail:
              'Lead photographer for annual celebrations and festivals at schools and kindergartens across Hanoi.',
          },
        ],
      },
      {
        id: 'sports-action',
        number: '03',
        title: 'Sports & Action Photography',
        subtitle: 'Tournaments & Athletics',
        items: [
          {
            highlight: 'Championships & Friendly Matches',
            detail:
              'Covered the National Student Basketball Championship (Northern Region) and football tournaments, freezing high-speed athletic action.',
          },
        ],
      },
      {
        id: 'wedding-exp',
        number: '04',
        title: 'Documentary Weddings',
        subtitle: 'Weddings & Couples',
        items: [
          {
            highlight: 'Wedding Day Photojournalism',
            detail:
              'Quietly capturing genuine emotion, tears of joy, and spontaneous celebrations without forced poses.',
          },
          {
            highlight: 'Couple Love Stories',
            detail:
              'Creating a comfortable date-like setting to capture candid romance, warm embraces, and real chemistry.',
          },
        ],
      },
      {
        id: 'fashion-exp',
        number: '05',
        title: 'Fashion & Lookbooks',
        subtitle: 'Apparel & Editorial',
        items: [
          {
            highlight: 'Brand Lookbooks & Local Labels',
            detail:
              'Clean, sharp imagery highlighting garment silhouettes, fabric textures, and modern aesthetics for campaigns.',
          },
          {
            highlight: 'Model & Editorial Portraits',
            detail:
              'Studio lighting and dynamic compositions focused on expressive model poses and contemporary styling.',
          },
        ],
      },
      {
        id: 'yearbook-exp',
        number: '06',
        title: 'Graduation & Yearbooks',
        subtitle: 'School & Youth Stories',
        items: [
          {
            highlight: 'Class & Graduation Albums',
            detail:
              'Capturing youthful energy, shared laughter, and heartfelt farewells on graduation day.',
          },
          {
            highlight: 'Creative Group Concepts',
            detail:
              'Fun, cinematic group photos tailored to the unique personality of each class.',
          },
        ],
      },
      {
        id: 'concept-exp',
        number: '07',
        title: 'Creative Concepts',
        subtitle: 'Art Direction & Moodboards',
        items: [
          {
            highlight: 'Original Ideas & Moodboards',
            detail:
              'Collaborating from initial brainstorming to scene staging and artistic strobe lighting.',
          },
          {
            highlight: 'Cinematic Color Grading',
            detail:
              'Clean, modern color palettes blended with rich contrast to produce unique creative portraits.',
          },
        ],
      },
    ],
  },
};

export interface JourneySubmissionResult {
  valid: boolean;
  error?: string;
  normalizedEmail?: string;
}

export function validateJourneyRequest(
  email: string,
  name: string,
  lang: Language = 'vi'
): JourneySubmissionResult {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();

  if (!trimmedName) {
    return {
      valid: false,
      error: lang === 'vi' ? 'Vui lòng nhập họ tên của bạn.' : 'Please enter your name.',
    };
  }

  if (!trimmedEmail) {
    return {
      valid: false,
      error:
        lang === 'vi'
          ? 'Vui lòng nhập địa chỉ email hoặc số điện thoại.'
          : 'Please enter your email address.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s()]{8,15}$/;
  if (!emailRegex.test(trimmedEmail) && !phoneRegex.test(trimmedEmail)) {
    return {
      valid: false,
      error:
        lang === 'vi'
          ? 'Vui lòng nhập email hoặc số điện thoại hợp lệ.'
          : 'Please enter a valid email address or phone number.',
    };
  }

  return {
    valid: true,
    normalizedEmail: trimmedEmail,
  };
}
