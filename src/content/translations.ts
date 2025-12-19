import common from './common.json';
import landing from './landing.json';
import resources from './resources.json';
import about from './about.json';
import contact from './contact.json';

export type Language = 'en' | 'ko';

// Helper type for bilingual fields
type Bilingual<T> = { ko: T; en: T };

// Extract the value for a specific language from a bilingual field
export function t<T>(field: Bilingual<T>, lang: Language): T {
  return field[lang];
}

// Get raw content objects
export const content = {
  common,
  landing,
  resources,
  about,
  contact,
};

// Legacy compatibility: get translations in the old format for a specific language
export function getTranslations(lang: Language) {
  return {
    meta: {
      title: common.meta.title[lang],
    },
    nav: {
      services: common.nav.services[lang],
      resources: common.nav.resources[lang],
      about: common.nav.about[lang],
      contact: common.nav.contact[lang],
      cta: common.nav.cta[lang],
      orderNow: common.nav.orderNow[lang],
    },
    hero: {
      title: landing.hero.title[lang],
      subtitle: landing.hero.subtitle[lang],
      description: landing.hero.description[lang],
      cta: landing.hero.cta[lang],
    },
    services: {
      title: landing.services.title[lang],
      items: landing.services.items.map(item => ({
        icon: item.icon,
        title: item.title[lang],
        slug: item.slug,
      })),
    },
    testimonials: {
      title: landing.testimonials.title[lang],
      items: landing.testimonials.items.map(item => ({
        quote: item.quote[lang],
        author: item.author,
        institution: item.institution,
      })),
    },
    howItWorks: {
      title: landing.howItWorks.title[lang],
      steps: landing.howItWorks.steps.map(step => ({
        number: step.number,
        title: step.title[lang],
        description: step.description[lang],
      })),
    },
    footer: {
      tagline: common.footer.tagline[lang],
    },
    resources: {
      title: resources.title[lang],
      subtitle: resources.subtitle[lang],
      faq: {
        title: resources.faq.title[lang],
        ordering: {
          title: resources.faq.ordering.title[lang],
          items: resources.faq.ordering.items.map(item => ({
            question: item.question[lang],
            answer: item.answer[lang],
          })),
        },
        samplePrep: {
          title: resources.faq.samplePrep.title[lang],
          items: resources.faq.samplePrep.items.map(item => ({
            question: item.question[lang],
            answer: item.answer[lang],
          })),
        },
        technical: {
          title: resources.faq.technical.title[lang],
          items: resources.faq.technical.items.map(item => ({
            question: item.question[lang],
            answer: item.answer[lang],
          })),
        },
      },
    },
    about: {
      title: about.title[lang],
      subtitle: about.subtitle[lang],
      team: about.team.map(member => ({
        name: member.name[lang],
        title: member.title,
        photo: member.photo,
        education: member.education[lang],
        experience: member.experience[lang],
      })),
      investors: {
        title: about.investors.title[lang],
        list: about.investors.list,
      },
      timeline: {
        title: about.timeline.title[lang],
        milestones: about.timeline.milestones.map(m => ({
          date: m.date[lang],
          event: m.event[lang],
        })),
      },
    },
    contact: {
      title: contact.title[lang],
      subtitle: contact.subtitle[lang],
      email: {
        label: contact.email.label[lang],
        value: contact.email.value,
      },
      phone: {
        label: contact.phone.label[lang],
        value: contact.phone.value,
      },
      kakao: {
        label: contact.kakao.label[lang],
        value: contact.kakao.value,
      },
      address: {
        label: contact.address.label[lang],
        value: contact.address.value[lang],
        detail: contact.address.detail[lang],
      },
      map: {
        title: contact.map.title[lang],
      },
    },
  };
}
