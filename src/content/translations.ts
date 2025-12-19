import content from './content.json';

export type Language = 'en' | 'ko';

// Helper type for bilingual fields
type Bilingual<T> = { ko: T; en: T };

// Extract the value for a specific language from a bilingual field
export function t<T>(field: Bilingual<T>, lang: Language): T {
  return field[lang];
}

// Get the full content object
export function getContent() {
  return content;
}

// Legacy compatibility: get translations in the old format for a specific language
export function getTranslations(lang: Language) {
  const c = content;

  return {
    meta: {
      title: c.meta.title[lang],
    },
    nav: {
      services: c.nav.services[lang],
      resources: c.nav.resources[lang],
      about: c.nav.about[lang],
      contact: c.nav.contact[lang],
      cta: c.nav.cta[lang],
      orderNow: c.nav.orderNow[lang],
    },
    hero: {
      title: c.hero.title[lang],
      subtitle: c.hero.subtitle[lang],
      description: c.hero.description[lang],
      cta: c.hero.cta[lang],
    },
    services: {
      title: c.services.title[lang],
      items: c.services.items.map(item => ({
        icon: item.icon,
        title: item.title[lang],
        slug: item.slug,
      })),
    },
    testimonials: {
      title: c.testimonials.title[lang],
      items: c.testimonials.items.map(item => ({
        quote: item.quote[lang],
        author: item.author,
        institution: item.institution,
      })),
    },
    howItWorks: {
      title: c.howItWorks.title[lang],
      steps: c.howItWorks.steps.map(step => ({
        number: step.number,
        title: step.title[lang],
        description: step.description[lang],
      })),
    },
    footer: {
      tagline: c.footer.tagline[lang],
    },
    resources: {
      title: c.resources.title[lang],
      subtitle: c.resources.subtitle[lang],
      faq: {
        title: c.resources.faq.title[lang],
        ordering: {
          title: c.resources.faq.ordering.title[lang],
          items: c.resources.faq.ordering.items.map(item => ({
            question: item.question[lang],
            answer: item.answer[lang],
          })),
        },
        samplePrep: {
          title: c.resources.faq.samplePrep.title[lang],
          items: c.resources.faq.samplePrep.items.map(item => ({
            question: item.question[lang],
            answer: item.answer[lang],
          })),
        },
        technical: {
          title: c.resources.faq.technical.title[lang],
          items: c.resources.faq.technical.items.map(item => ({
            question: item.question[lang],
            answer: item.answer[lang],
          })),
        },
      },
    },
    about: {
      title: c.about.title[lang],
      subtitle: c.about.subtitle[lang],
      team: c.about.team.map(member => ({
        name: member.name[lang],
        title: member.title,
        photo: member.photo,
        education: member.education[lang],
        experience: member.experience[lang],
      })),
      investors: {
        title: c.about.investors.title[lang],
        list: c.about.investors.list,
      },
      timeline: {
        title: c.about.timeline.title[lang],
        milestones: c.about.timeline.milestones.map(m => ({
          date: m.date[lang],
          event: m.event[lang],
        })),
      },
    },
    contact: {
      title: c.contact.title[lang],
      subtitle: c.contact.subtitle[lang],
      email: {
        label: c.contact.email.label[lang],
        value: c.contact.email.value,
      },
      phone: {
        label: c.contact.phone.label[lang],
        value: c.contact.phone.value,
      },
      kakao: {
        label: c.contact.kakao.label[lang],
        value: c.contact.kakao.value,
      },
      address: {
        label: c.contact.address.label[lang],
        value: c.contact.address.value[lang],
        detail: c.contact.address.detail[lang],
      },
      map: {
        title: c.contact.map.title[lang],
      },
    },
  };
}
