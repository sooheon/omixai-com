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
      orderNow: common.nav.orderNow[lang],
    },
    hero: {
      title: landing.hero.title[lang],
      subtitle: landing.hero.subtitle[lang],
      cta: landing.hero.cta[lang],
    },
    kpis: {
      items: landing.kpis.items.map(item => ({
        value: item.value,
        label: item.label[lang],
      })),
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
      email: {
        label: contact.email.label[lang],
        value: contact.email.value,
      },
      address: {
        label: contact.address.label[lang],
        value: contact.address.value[lang],
        detail: contact.address.detail[lang],
      },
      map: {
        title: contact.map.title[lang],
      },
      form: {
        title: contact.form.title[lang],
        subtitle: contact.form.subtitle[lang],
        fields: {
          sampleType: {
            label: contact.form.fields.sampleType.label[lang],
            placeholder: contact.form.fields.sampleType.placeholder[lang],
            options: {
              cellCulture: contact.form.fields.sampleType.options.cellCulture[lang],
              tissue: contact.form.fields.sampleType.options.tissue[lang],
              blood: contact.form.fields.sampleType.options.blood[lang],
              custom: contact.form.fields.sampleType.options.custom[lang],
            },
          },
          name: {
            label: contact.form.fields.name.label[lang],
            placeholder: contact.form.fields.name.placeholder[lang],
          },
          email: {
            label: contact.form.fields.email.label[lang],
            placeholder: contact.form.fields.email.placeholder[lang],
          },
          cc: {
            label: contact.form.fields.cc.label[lang],
            placeholder: contact.form.fields.cc.placeholder[lang],
          },
          message: {
            label: contact.form.fields.message.label[lang],
            placeholder: contact.form.fields.message.placeholder[lang],
          },
        },
        button: {
          submit: contact.form.button.submit[lang],
          sending: contact.form.button.sending[lang],
        },
        validation: {
          required: contact.form.validation.required[lang],
          invalidEmail: contact.form.validation.invalidEmail[lang],
        },
        messages: {
          success: contact.form.messages.success[lang],
          error: contact.form.messages.error[lang],
        },
      },
    },
    cta: {
      service: {
        title: common.cta.service.title[lang],
        description: common.cta.service.description[lang],
      },
    },
  };
}
