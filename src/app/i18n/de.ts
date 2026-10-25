import { AppTranslations } from './translations.model';

export const de: AppTranslations = {
  lang: 'de',
  appProjects: {
    1: {
      tagline: 'Nahtlose Verbindung zwischen Android- oder iPhone und deinem Computer.',
      description:
        'Verbinde Android und iPhone mit deinem Mac oder Windows-PC. Synchronisiere die Zwischenablage und sende Dateien sowie Screenshots an einen oder alle verbundenen Computer. Android unterstützt außerdem die Weiterleitung von 2FA-Codes aus Benachrichtigungen und Bildschirmspiegelung.',
      longDescription: 'Bridgely verbindet Android- und iPhone-Geräte mit macOS- und Windows-Computern. Die Zwischenablage wird in beide Richtungen synchronisiert; auf dem iPhone ist dies aufgrund der iOS-Beschränkungen nur bei aktiver App möglich. Zwischenablageinhalte, Dateien und Screenshots können an einen ausgewählten oder an alle verbundenen Computer gesendet werden. Android kann außerdem Einmalcodes aus Benachrichtigungen weiterleiten, den Akkustand teilen und den Bildschirm über scrcpy spiegeln. Geräte werden per QR-Code gekoppelt; Verbindungen werden im lokalen Netzwerk mit ephemerem P-256-ECDH und AES-256-GCM verschlüsselt. Entwickelt mit C# und .NET MAUI.',
      tags: ['Produktivität', '.NET MAUI', 'Ende-zu-Ende-Verschlüsselung', 'Plattformübergreifend'],
      features: [
        'Bidirektionale Zwischenablage mit Verlauf',
        'Dateien und Screenshots an einen oder alle verbundenen Computer senden',
        'Akkustand des Smartphones in Menüleiste oder System-Tray',
        'Android-Benachrichtigungscodes in die Zwischenablage weiterleiten',
        'Geräte per QR-Code koppeln',
        'Android-Bildschirmspiegelung mit scrcpy',
      ],
    },
    2: {
      tagline: 'Ein ausgereifter NAS-Dateimanager mit mehreren Tabs für Windows und Android.',
      description:
        'NAS-Dateien über WebDAV, FTP und FTPS unter Windows und Android durchsuchen, übertragen und verwalten – mit mehreren Tabs, Medienvorschau und integriertem Texteditor.',
      longDescription: 'xConnect File Manager ist ein plattformübergreifender NAS-Dateimanager für Windows und Android, entwickelt mit .NET MAUI. Verbinde dich mit WebDAV-, FTP- und FTPS-Servern, verwalte mehrere unabhängige Verbindungen in Tabs, durchsuche Dateien in Listen- oder Rasteransicht mit Sortierung, Filtern und angehefteten Ordnern und lade Dateien mit Fortschrittsanzeige hoch oder herunter. Außerdem bietet die App einen Bild-, Video- und Audioplayer sowie einen integrierten Texteditor. Die Windows-Version bietet zusätzlich System-Tray-Integration und Drag-and-drop-Uploads. Gespeicherte Verbindungsprofile werden im sicheren Anmeldeinformationsspeicher der Plattform abgelegt.',
      tags: ['Windows', 'Android', '.NET MAUI', 'NAS', 'WebDAV', 'FTP', 'FTPS'],
      features: [
        'Unterstützung für Windows und Android',
        'Mehrere Tabs mit unabhängigen Verbindungen',
        'Unterstützung für WebDAV, FTP und FTPS',
        'Listen- und Rasteransicht mit Sortierung, Filtern und angehefteten Ordnern',
        'Dateien und Ordner gesammelt erstellen, umbenennen, kopieren, verschieben und löschen',
        'Dateiübertragungen mit Fortschritts- und Geschwindigkeitsanzeige',
        'Bild-, Video- und Audioplayer sowie integrierter Texteditor',
        'Windows-Infobereich-Integration und Drag-and-drop-Uploads',
      ],
    },
  },

  nav: {
    home: 'Startseite',
    about: 'Über mich',
    projects: 'Projekte',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutz',
    downloadApps: 'Apps herunterladen',
  },

  hero: {
    title1: 'Durchdachte Software',
    title2: 'für den Alltag',
    subtitle:
      'Praktische Desktop- und Mobile-Apps, die alltägliche Aufgaben einfacher machen.',
    exploreProjects: 'Projekte entdecken',
    termsConditions: 'Nutzungsbedingungen',
  },

  carousel: {
    tag: 'Highlights',
    title: 'Top-Apps',
    subtitle: 'Ausgewählte Highlights aus meinem Portfolio',
    download: 'Herunterladen',
    new: 'Neu',
  },

  allApps: {
    tag: 'Alle Projekte',
    title: 'Die komplette Sammlung',
    subtitle: 'Alle veröffentlichten Apps – für deine Plattform herunterladen',
    viewAll: 'Alle Projekte & Downloads anzeigen',
  },

  cta: {
    title: 'Bereit loszulegen?',
    subtitle: 'Schau dir die Projekte an, wähle deine Plattform und lade in Sekunden herunter.',
    button: 'Zu den Projekten',
  },

  projects: {
    pageTag: 'Meine Arbeit',
    title: 'Projekte & Downloads',
    subtitle: 'Alle entwickelten Anwendungen – wähle deine Plattform und lade sofort herunter.',
    filterAll: 'Alle',
    downloadLabel: 'Herunterladen',
    aboutLabel: 'Über die App',
    featuresLabel: 'Hauptfunktionen',
    releasedLabel: 'Veröffentlicht',
    noResults: 'Keine Projekte in dieser Kategorie gefunden.',
    new: 'Neu',
    version: 'Version',
    screenshotsTitle: 'Screenshots',
    screenshotCaptions: {
      pairing: 'Kopplungsansicht — QR-Code unkenntlich gemacht',
      more: 'Menü „Mehr“',
      settings: 'Einstellungen und Gerätefunktionen',
    },
  },

  terms: {
    pageTag: 'Rechtliches',
    title: 'Nutzungsbedingungen',
    subtitle: 'Bitte lesen Sie diese Bedingungen sorgfältig, bevor Sie unsere Software herunterladen oder verwenden.',
    lastUpdated: 'Zuletzt aktualisiert',
    summaryBold: 'Kurzfassung:',
    summaryText:
      'Sie dürfen die Software für den persönlichen, nicht kommerziellen Gebrauch nutzen. Keine Weitergabe, kein Reverse Engineering und keine rechtswidrige Nutzung. Die Software wird ohne Gewährleistung bereitgestellt.',
    contactTitle: 'Fragen zu diesen Bedingungen?',
    contactSubtitle:
      'Wenn Sie Fragen, Bedenken oder Anfragen zu diesen Nutzungsbedingungen haben, wenden Sie sich bitte an:',
    sections: [
      {
        title: '1. Annahme der Nutzungsbedingungen',
        icon: 'handshake',
        content:
          'Durch das Herunterladen, Installieren oder Verwenden einer über diese Portfolio-Website bereitgestellten Anwendung (im Folgenden „Software") stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, dürfen Sie die Software nicht herunterladen oder verwenden. Diese Bedingungen gelten für alle Besucher, Nutzer und sonstige Personen, die auf die Software zugreifen oder diese verwenden.',
      },
      {
        title: '2. Lizenzgewährung',
        icon: 'verified_user',
        content:
          'Vorbehaltlich Ihrer Einhaltung dieser Bedingungen wird Ihnen eine begrenzte, nicht ausschließliche, nicht übertragbare, widerrufliche Lizenz zur ausschließlich persönlichen, nicht kommerziellen Nutzung der Software gewährt. Sie dürfen die Software nicht unterlizenzieren, verkaufen, weiterverkaufen, übertragen, abtreten oder anderweitig kommerziell nutzen. Alle nicht ausdrücklich gewährten Rechte bleiben vorbehalten.',
      },
      {
        title: '3. Geistiges Eigentum',
        icon: 'copyright',
        content:
          'Alle Rechte an geistigem Eigentum an der Software – einschließlich, aber nicht beschränkt auf Quellcode, Objektcode, Design, Grafiken, Algorithmen, Dokumentation und Geschäftsgeheimnisse – sind und bleiben ausschließliches Eigentum des Entwicklers. Sie stimmen zu, keinen Teil der Software ohne vorherige schriftliche Zustimmung zu kopieren, zu modifizieren, abgeleitete Werke zu erstellen, zurückzuentwickeln, zu disassemblieren oder zu dekompilieren.',
      },
      {
        title: '4. Unzulässige Nutzung',
        icon: 'block',
        content:
          'Sie stimmen zu, die Software nicht zu verwenden, um: (a) gegen geltendes Recht oder Vorschriften zu verstoßen; (b) Material zu übermitteln, zu verteilen oder zu speichern, das geistige Eigentumsrechte Dritter verletzt; (c) die Software ohne Genehmigung an Dritte weiterzugeben, zu verkaufen oder zu übertragen; (d) unbefugten Zugang zu Systemen oder Netzwerken zu versuchen; (e) automatisierte Datenerfassung, Web-Scraping oder Crawling ohne ausdrückliche schriftliche Zustimmung durchzuführen.',
      },
      {
        title: '5. Gewährleistungsausschluss',
        icon: 'warning_amber',
        content:
          'DIE SOFTWARE WIRD „WIE BESEHEN" UND „WIE VERFÜGBAR" OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG BEREITGESTELLT. DER ENTWICKLER SCHLIESST IM GRÖßTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG ALLE GEWÄHRLEISTUNGEN AUS, EINSCHLIEßLICH DER STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG. DER ENTWICKLER GEWÄHRLEISTET NICHT, DASS DIE SOFTWARE UNUNTERBROCHEN, FEHLERFREI ODER FREI VON VIREN ODER ANDEREN SCHÄDLICHEN KOMPONENTEN IST.',
      },
      {
        title: '6. Haftungsbeschränkung',
        icon: 'gavel',
        content:
          'IM GRÖßTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG HAFTET DER ENTWICKLER NICHT FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGE- ODER STRAFSCHÄDEN – EINSCHLIEßLICH ENTGANGENER GEWINNE, DATENVERLUSTE, VERLUST VON GESCHÄFTSWERT, BETRIEBSUNTERBRECHUNGEN, COMPUTERSCHÄDEN ODER SYSTEMAUSFÄLLE – DIE AUS DER NUTZUNG DER SOFTWARE ENTSTEHEN, AUCH WENN DER ENTWICKLER AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.',
      },
      {
        title: '7. Aktualisierungen & Änderungen',
        icon: 'update',
        content:
          'Der Entwickler behält sich das Recht vor, die Software oder Teile davon jederzeit ohne Vorankündigung zu ändern, auszusetzen oder einzustellen. Der Entwickler behält sich auch das Recht vor, diese Bedingungen jederzeit zu aktualisieren. Ihre fortgesetzte Nutzung der Software nach der Veröffentlichung aktualisierter Bedingungen gilt als Zustimmung zu diesen Änderungen. Es liegt in Ihrer Verantwortung, diese Bedingungen regelmäßig zu überprüfen.',
      },
      {
        title: '8. Datenschutz & Daten',
        icon: 'privacy_tip',
        content:
          'Einige Anwendungen können anonymisierte Nutzungsdaten erheben, um Funktionalität und Nutzererfahrung zu verbessern. Ohne ausdrückliche Zustimmung des Nutzers werden keine personenbezogenen Daten erhoben. Die erhobenen Daten werden gemäß den geltenden Datenschutzgesetzen verarbeitet, einschließlich der Datenschutz-Grundverordnung (DSGVO). Sie können der Datenerfassung jederzeit in den App-Einstellungen widersprechen.',
      },
      {
        title: '9. Dienste Dritter',
        icon: 'link',
        content:
          'Die Software kann mit Diensten, Websites oder APIs von Drittanbietern integriert sein oder Links zu diesen enthalten. Der Entwickler ist nicht verantwortlich für die Verfügbarkeit, Richtigkeit oder den Inhalt von Drittanbieterdiensten. Ihre Nutzung von Drittanbieterdiensten unterliegt deren eigenen Nutzungsbedingungen und Datenschutzrichtlinien. Die Aufnahme eines Drittanbieter-Links impliziert keine Billigung durch den Entwickler.',
      },
      {
        title: '10. Anwendbares Recht',
        icon: 'balance',
        content:
          'Diese Bedingungen unterliegen den Gesetzen der Europäischen Union und der Rechtsordnung des Wohnsitzstaates des Entwicklers und sind entsprechend auszulegen, ohne Rücksicht auf Kollisionsnormen. Für Streitigkeiten, die sich aus diesen Bedingungen ergeben, sind die Gerichte dieser Rechtsordnung ausschließlich zuständig. Sollte eine Bestimmung dieser Bedingungen als nicht durchsetzbar befunden werden, bleiben die übrigen Bestimmungen in vollem Umfang gültig.',
      },
    ],
  },

  about: {
    hero: {
      tag: 'Über mich',
      title: 'Tobias Brörmann',
      subtitle: 'Full-Stack-Entwickler · Über 9 Jahre Enterprise-Erfahrung',
    },
    bio: [
      'Ich begleite Software über den gesamten Entwicklungszyklus – vom Systementwurf und der Implementierung bis zur Bereitstellung und Wartung. Mit über neun Jahren Enterprise-Erfahrung lege ich Wert auf zuverlässige Systeme, klare Architekturen und wartbaren Code.',
      'Im Backend entwickle ich APIs und Dienste mit C#/.NET, Java/Spring Boot, Node.js/Fastify und Python. Zu meinen Datenbanktechnologien zählen relationale und NoSQL-Systeme wie PostgreSQL, MongoDB und Azure Cosmos DB.',
      'Für Web- und Mobile-Anwendungen nutze ich JavaScript/TypeScript, Angular, React, Vue, .NET MAUI und Swift. Cloud-Infrastruktur stelle ich mit Terraform, Kubernetes und Bicep auf Azure und AWS bereit.',
    ],
    stack: {
      tag: 'Tech-Stack',
      title: 'Technologien & Werkzeuge',
      logoStripLabel: 'Technologie-Logos',
      backendTitle: 'Backend',
      frontendTitle: 'Frontend & Mobile',
      toolsTitle: 'Tools & Methoden',
    },
    cta: {
      title: 'Neugierig, was ich gebaut habe?',
      body: 'Alle Apps ansehen und für deine Plattform herunterladen.',
      btn: 'Alle Apps ansehen',
    },
  },

  privacy: {
    pageTag: 'Datenschutzerklärung',
    title: 'Deine Privatsphäre ist wichtig',
    subtitle: 'Diese Datenschutzerklärung gilt für alle von TB Builds veröffentlichten Apps. Die Datenverarbeitung hängt von der jeweiligen App und den genutzten Funktionen ab.',
    lastUpdated: 'Zuletzt aktualisiert',
    summaryBold: 'Kurzversion:',
    summaryText: 'Jede App verarbeitet Daten entsprechend ihren Funktionen. Die jeweilige App-Beschreibung und Berechtigungsabfragen erklären, worauf sie zugreift, was sie speichert oder weitergibt.',
    appliesTitle: 'Gilt für',
    appliesText: 'Diese Datenschutzerklärung gilt für alle von TB Builds veröffentlichten Apps und Software. App-spezifische Details stehen in der jeweiligen App-Beschreibung und in Berechtigungsabfragen. Für Websites und Dienste Dritter gelten deren eigene Datenschutzerklärungen.',
    sections: [
      {
        icon: 'apps',
        title: 'Geltungsbereich und App-spezifische Informationen',
        content: 'Diese Datenschutzerklärung gilt für Software von TB Builds. Apps haben unterschiedliche Funktionen und können daher unterschiedliche Informationen verarbeiten. Die Beschreibung der jeweiligen App und Berechtigungsabfragen erläutern, welche Daten für ihre Funktionen benötigt werden. Diese allgemeine Erklärung bedeutet nicht, dass jede App auf alle hier genannten Daten zugreift.',
      },
      {
        icon: 'data_usage',
        title: 'Möglicherweise verarbeitete Informationen',
        content: 'Je nach Funktion kann eine App Informationen verarbeiten, die du eingibst oder auswählst, zum Beispiel Dateien, Zwischenablageinhalte, Einstellungen, Geräteinformationen oder Zugangsdaten. Die App sollte nur die Informationen verwenden, die für die von dir genutzte Funktion erforderlich sind. Prüfe die App-spezifischen Angaben, bevor du sie verwendest oder Berechtigungen erteilst.',
      },
      {
        icon: 'devices',
        title: 'Geräte- und Netzwerkübertragungen',
        content: 'Funktionen, die Geräte oder Dienste verbinden, können die zur Ausführung deiner Anfrage erforderlichen Informationen an das von dir ausgewählte oder konfigurierte Ziel senden. In der App-Beschreibung und den Verbindungseinstellungen erfährst du, welche Geräte oder Dienste beteiligt sind. Für dorthin übermittelte Informationen gelten auch die Datenschutz- und Sicherheitspraktiken des jeweiligen Ziels.',
      },
      {
        icon: 'cloud',
        title: 'Drittanbieterdienste',
        content: 'Einige Funktionen können auf Betriebssystemdienste, App-Stores oder Dienste und Server zurückgreifen, die du verwendest. Diese Anbieter verarbeiten Informationen gemäß ihren eigenen Datenschutzerklärungen. TB Builds kontrolliert deren Datenpraktiken nicht.',
      },
      {
        icon: 'storage',
        title: 'Speicherung und Aufbewahrung',
        content: 'Die Speicherung hängt von der jeweiligen App und Funktion ab. Informationen können auf deinem Gerät, einem verbundenen Gerät oder bei einem verwendeten Dienst gespeichert werden. Lokal gespeicherte Daten kannst du in der Regel durch Löschen der App-Daten oder Deinstallieren der App entfernen. Dadurch werden Informationen, die bereits bei einem Drittanbieterdienst gespeichert sind, möglicherweise nicht gelöscht.',
      },
      {
        icon: 'security',
        title: 'Sicherheit',
        content: 'Die Sicherheitsfunktionen unterscheiden sich je nach App. Halte dein Gerät und deine Apps aktuell, nutze die Sicherheitsfunktionen deines Geräts und prüfe vor dem Teilen, wohin Informationen gesendet werden. Keine Speicher- oder Übertragungsmethode kann vollständige Sicherheit garantieren.',
      },
      {
        icon: 'contact_support',
        title: 'Fragen',
        content: 'Bei Fragen zum Datenschutz oder zur Verarbeitung von Informationen durch eine TB Builds App erreichst du uns unter support.tbsoftware@gmail.com.',
      },
      {
        icon: 'update',
        title: 'Änderungen dieser Datenschutzerklärung',
        content: 'Diese Datenschutzerklärung kann aktualisiert werden, wenn sich TB Builds Apps oder deren Datenverarbeitung ändern. Die aktuelle Fassung und ihr Änderungsdatum werden auf dieser Seite veröffentlicht. App-spezifische Änderungen können zusätzlich in den Versionshinweisen der jeweiligen App beschrieben werden.',
      },
    ],
  },

  footer: {
    navTitle: 'Navigation',
    connectTitle: 'Kontakt',
    tagline: 'Hochwertige Software – eine Version nach der anderen.',
    copyright: 'Alle Rechte vorbehalten.',
    builtWith: 'Erstellt mit ♥ mit Angular & Angular Material',
    home: 'Startseite',
    about: 'Über mich',
    projects: 'Projekte',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutz',
    contact: 'Kontakt',
  },

  categories: {
    All: 'Alle',
    Productivity: 'Produktivität',
    Finance: 'Finanzen',
    Security: 'Sicherheit',
    Utilities: 'Dienstprogramme',
    'Developer Tools': 'Entwicklerwerkzeuge',
  },

  platforms: {
    windows: 'Windows',
    android: 'Android',
    ios: 'iOS (iPhone)',
    macos: 'macOS',
    linux: 'Linux',
  },

  seo: {
    ogLocale: 'de_DE',
    pages: {
      home: {
        title: 'TB Builds — Desktop- & Mobile-Apps',
        description:
          'Eigene Tools und Apps von Tobias Brörmann für Windows, macOS, Linux, Android und iPhone.',
      },
      about: {
        title: 'Über Tobias Brörmann',
        description:
          'Full-Stack-Entwickler mit über 9 Jahren Enterprise-Erfahrung in .NET, Java, Python, JavaScript, TypeScript, Mobile-, Cloud- und Datenbanklösungen.',
      },
      projects: {
        title: 'Projekte & Downloads',
        description:
          'Alle Apps von Tobias Brörmann ansehen und für Windows, macOS, Linux, Android oder iPhone herunterladen.',
      },
      terms: {
        title: 'Nutzungsbedingungen',
        description: 'Nutzungsbedingungen für den Download und die Nutzung von Software von TB Builds.',
      },
      privacy: {
        title: 'Datenschutzerklärung',
        description: 'Allgemeine Datenschutzerklärung für Apps von TB Builds; Einzelheiten zur Datenverarbeitung variieren je nach App und Funktion.',
      },
    },
  },
};
