export function getFaqsContactItems(t) {
  return [
    {
      question: t('contact_page.faqs.0.question'),
      answer: t('contact_page.faqs.0.answer'),
      isHtml: false,
    },
    {
      question: t('contact_page.faqs.1.question'),
      answer: t('contact_page.faqs.1.answer'),
      isHtml: false,
    },
    {
      question: t('contact_page.faqs.2.question'),
      answer: t('contact_page.faqs.2.answer'),
      isHtml: false,
    }
  ];
}

export function getFaqsHomeItems(t) {
  return [
    {
      question: t('home_page.faqs.0.question'),
      answer: t('home_page.faqs.0.answer'),
    },
    {
      question: t('home_page.faqs.1.question'),
      answer: t('home_page.faqs.1.answer'),
    },
    {
      question: t('home_page.faqs.2.question'),
      answer: t('home_page.faqs.2.answer'),
    },
  ];
}
