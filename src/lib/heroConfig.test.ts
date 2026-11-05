import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HERO_VIDEO_URL,
  HERO_BACKGROUND_IMAGE,
  PORTFOLIO_DATA,
  SOCIAL_CONTACTS,
  CREATIVE_TOOLS,
  validateJourneyRequest,
} from './heroConfig';

test('PORTFOLIO_DATA contains complete Vietnamese and English configurations for _february.snail_', () => {
  assert.equal(PORTFOLIO_DATA.vi.profile.name, 'Nguyễn Tuấn Phong');
  assert.equal(PORTFOLIO_DATA.en.profile.name, 'Nguyen Tuan Phong');
  assert.equal(PORTFOLIO_DATA.vi.profile.handle, '@_february.snail_');
  assert.equal(PORTFOLIO_DATA.vi.nav.length, 5);
  assert.equal(PORTFOLIO_DATA.en.nav.length, 5);
});

test('PORTFOLIO_DATA preserves all 8 photography categories in both languages', () => {
  const expectedKeys = [
    'wedding',
    'haudong',
    'yearbook',
    'event',
    'concept',
    'couple',
    'stage',
    'sports',
  ];
  assert.deepEqual(
    PORTFOLIO_DATA.vi.categories.map((c) => c.key),
    expectedKeys
  );
  assert.deepEqual(
    PORTFOLIO_DATA.en.categories.map((c) => c.key),
    expectedKeys
  );
  assert.equal(PORTFOLIO_DATA.vi.categories[0].name, 'Cưới');
  assert.equal(PORTFOLIO_DATA.vi.categories[1].name, 'Hầu Đồng');
});

test('SOCIAL_CONTACTS and CREATIVE_TOOLS preserve exact links and post-production suite', () => {
  assert.equal(SOCIAL_CONTACTS.length, 4);
  assert.equal(SOCIAL_CONTACTS[0].id, 'zalo');
  assert.equal(SOCIAL_CONTACTS[0].value, '0886 288 605');
  assert.equal(SOCIAL_CONTACTS[0].href, 'https://zalo.me/0886288605');
  assert.equal(SOCIAL_CONTACTS[1].id, 'instagram');
  assert.equal(SOCIAL_CONTACTS[1].value, '@_february.snail_');
  assert.equal(SOCIAL_CONTACTS[2].id, 'instagram-workspace');
  assert.equal(SOCIAL_CONTACTS[2].value, '@_workspace.snail_');
  assert.equal(SOCIAL_CONTACTS[2].href, 'https://www.instagram.com/_workspace.snail_/');
  assert.equal(SOCIAL_CONTACTS[3].id, 'facebook');
  assert.equal(SOCIAL_CONTACTS[3].value, 'tfongg.nolovenoproblem');
  assert.deepEqual(CREATIVE_TOOLS, [
    'Adobe Lightroom',
    'Adobe Photoshop',
    'Adobe Premiere Pro',
    'DaVinci Resolve',
  ]);
});

test('HERO_VIDEO_URL and HERO_BACKGROUND_IMAGE match configured assets', () => {
  assert.equal(
    HERO_VIDEO_URL,
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'
  );
  assert.equal(HERO_BACKGROUND_IMAGE, '/Portfolio/NTP07244.jpg');
});

test('validateJourneyRequest validates phone numbers and normalizes contacts', () => {
  assert.deepEqual(validateJourneyRequest('0886288605', 'Nguyễn Tuấn Phong', 'vi'), {
    valid: true,
    normalizedEmail: '0886288605',
  });

  assert.deepEqual(validateJourneyRequest('+84886288605', 'Tuan Phong', 'en'), {
    valid: true,
    normalizedEmail: '+84886288605',
  });
});

test('validateJourneyRequest validates name and email or phone in VI and EN', () => {
  assert.deepEqual(validateJourneyRequest('', 'Phong', 'en'), {
    valid: false,
    error: 'Please enter your email address.',
  });

  assert.deepEqual(validateJourneyRequest('invalid', 'Phong', 'vi'), {
    valid: false,
    error: 'Vui lòng nhập email hoặc số điện thoại hợp lệ.',
  });

  assert.deepEqual(
    validateJourneyRequest('  FebruarySnail@Gmail.com ', 'Nguyễn Tuấn Phong', 'vi'),
    {
      valid: true,
      normalizedEmail: 'februarysnail@gmail.com',
    }
  );
});
