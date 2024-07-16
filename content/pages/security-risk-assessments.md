---
type: PageLayout
title: Security Risk Assessments
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Security Risk Assessments
      color: text-primary
    subtitle: ''
    text: ''
    actions: []
    media:
      type: ImageBlock
      altText: ''
    badge:
      type: Badge
      label: ''
      color: text-primary
    colors: bg-light-fg-dark
    backgroundImage:
      type: BackgroundImage
      url: /images/person-on-laptop-with-network.jpg
      altText: ''
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 40
    styles:
      self:
        alignItems: center
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: ''
      color: text-primary
      styles:
        self:
          textAlign: center
    subtitle: ''
    items:
      - type: FeaturedItem
        title: ''
        tagline: ''
        subtitle: ''
        text: |+
          ## *What are security risk assessments?*

        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col-reverse
      - type: FeaturedItem
        title: ''
        tagline: ''
        subtitle: ''
        text: >+
          Security Risk Assessments (SRAs) are important tools that businesses
          can use to help protect their confidential information and assets.
          SRAs allow businesses to identify potential security threats before
          they become a problem, and develop solutions to mitigate those risks.


          By working with ETECH IT to conduct regular SRAs, businesses can
          ensure that their confidential data is safe and secure.


          There are a number of different methods that can be used to conduct a
          Security Risk Assessment.


          #### *“Threat-based” model*


          *   Identifies potential threats and vulnerabilities in the business
          environment


          *   Creates solutions to address them


          #### *“Risk-based” model*


          *   Focuses on the potential risks and consequences associated with
          those risk


          *   Puts priority on the most serious risks

        image:
          type: ImageBlock
          altText: Background alt text
          styles:
            self:
              borderRadius: x-large
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
    actions: []
    variant: two-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-8
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: How Can We Help?
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Call (718) 737-9169 or Contact Us
    items: []
    actions:
      - type: Button
        label: Contact Us
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: ''
      color: text-dark
    subtitle: ''
    text: "## Effective Security Risk Assessments\n\nNo matter which model of SRA is used, ETECH IT is here to help your business to conduct an effective Security Risk Assessment and analyze the results to improve your business’s Cybersecurity processes.\n\nThere are a number of common steps that are involved in conducting a Security Risk Assessment:\n\n1.  **Establish the Scope:**\_Determining which systems and data will be included in the assessment.\n\n2.  **Gather Information:**\_Collecting relevant data about the systems and data that were included in the assessment.\n\n3.  **Identify Risks:**\_Analyzing the data to identify potential security threats.\n\n4.  **Develop Solutions:**\_Putting together a plan to address any identified risks.\n\n5.  **Test and Implement:**\_Carrying out the plan and ensuring that it is effective.\n\n6.  **Monitor and Review:**\_Regularly monitoring the security of the systems and data to ensure that it remains safe and secure.\n\n"
    actions: []
    badge:
      type: Badge
      label: ''
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
    media:
      type: ImageBlock
      url: /images/secandcompliance.png
      altText: ''
      elementId: ''
      styles:
        self:
          borderRadius: medium
  - type: GenericSection
    title:
      type: TitleBlock
      text: ''
      color: text-dark
    subtitle: ''
    text: "## Effective Security Risk Assessments\n\nETECH IT offers a variety of services to help businesses improve their cybersecurity following a Security Risk Assessment, including:\n\n*   **Threat Intelligence:**\_Gathering information about potential threats and vulnerabilities.\n\n*   **Risk Assessment:**\_Determining the risks associated with a particular system or data.\n\n*   **Vulnerability Assessment:**\_Identifying potential security vulnerabilities in systems and networks.\n\n*   **Penetration Testing:**\_Testing systems to see if they can be infiltrated by hackers.\n\n*   **Business Continuity Planning**: Developing a plan to ensure that business operations can continue in the event of a security breach.\n\n"
    actions: []
    media:
      type: ImageBlock
      url: /images/secandcompliance1.png
      altText: ''
    badge:
      type: Badge
      label: ''
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
  - type: GenericSection
    title:
      type: TitleBlock
      text: Choose ETECH for Your Security Risk Assessments Needs
      color: text-dark
    subtitle: ''
    text: >
      Don't take a chance with your company's data. ETECH IT offers Security
      Risk Assessments compliance services to businesses of all kinds in the
      medical industry. We offer comprehensive services that will help you stay
      on top of Security Risk Assessments requirements and reduce risk exposure
      for data breaches or other violations.Contact Us Call Us: (718) 737-9169
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
      action: /.netlify/functions/submission_created
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: Contact Us
      color: text-primary
    colors: bg-neutral-fg-dark
slug: /security-risk-assessments
isDraft: false
seo:
  type: Seo
  metaTitle: Security Risk Assessments
  metaDescription: Security Risk Assessments
  addTitleSuffix: false
  metaTags: []
---
