import { AppTranslations } from './translations.model';

export const de: AppTranslations = {
  lang: 'de',
  appProjects: {
    1: {
      tagline: 'Eine private Verbindung zwischen Smartphone und Computer – zuerst Windows und Android, danach Mac und iPhone.',
      description:
        'Teile Zwischenablagetext, Bilder, Screenshots und Dateien verschlüsselt und lokal, mit gezielter Gerätesteuerung und fortsetzbaren Übertragungen. macOS und iOS folgen als Nächstes.',
      socialImageAlt: 'Bridgely-Desktop-App mit Kopplungsansicht für ein Smartphone',
      longDescription:
        'Bridgely verbindet Windows-PCs und Android-Smartphones direkt über das lokale Netzwerk – ohne Konto und Cloud-Relay. Windows und Android sind die ersten Plattformen; macOS und iOS sind als Nächstes geplant. Teile Zwischenablagetext und -bilder, Dateien, Screenshots, den Akkustand des Smartphones und geeignete Einmalcodes. Android bietet einen Hintergrunddienst, Aktionen über Schnelleinstellungen und Teilen-Menü, ein Startbildschirm-Widget und Synchronisierungsregeln pro Computer. Windows ergänzt System-Tray, Dateiübertragung per Drag-and-drop, Schnellaktionen und Netzwerkdiagnose sowie eine optionale Autostart-Einstellung in der installierten Store-Version. Beide Plattformen zeigen den Übertragungsfortschritt und unterstützen Pause, Fortsetzen, Abbrechen, Wiederholen sowie die Fortsetzung unterbrochener Übertragungen, solange der Sender verfügbar bleibt. Wenn beide Geräte es unterstützen, werden effiziente binäre Dateiblöcke verwendet; ältere Versionen bleiben kompatibel. Für empfangene Dateien lassen sich Größenlimits einschließlich unbegrenzt festlegen. Der Zwischenablageverlauf ist durchsuchbar und kann angeheftet oder favorisiert werden; die optionale verschlüsselte lokale Speicherung bietet Aufbewahrungsregeln und den Ausschluss sensibler Inhalte. Geräte werden per QR-Code gekoppelt; Verbindungen im lokalen Netzwerk nutzen ephemeres P-256-ECDH und AES-256-GCM. Windows 10, Version 1809+, und Android 8.0 (API 26)+. Entwickelt mit C# und .NET MAUI.',
      tags: ['Produktivität', '.NET MAUI', 'Ende-zu-Ende-Verschlüsselung', 'Plattformübergreifend'],
      features: [
        'Zwischenablagetext, Bilder, Screenshots und Dateien über eine verschlüsselte lokale Verbindung teilen',
        'Android: Hintergrunddienst, Schnelleinstellungen, Teilen-Menü und Startbildschirm-Widget',
        'Android: geeignete Einmalcodes weiterleiten und Akkustand des Smartphones teilen',
        'Android: Zwischenablage, Dateien und Codes pro Computer steuern oder Synchronisierung insgesamt pausieren',
        'Windows: System-Tray, Drag-and-drop, Schnellaktionen und Netzwerkdiagnose',
        'Windows: optionale Autostart-Einstellung in der installierten Store-Version',
        'Übertragungsfortschritt mit Pause, Fortsetzen, Abbrechen, Wiederholen, Wiederaufnahme nach Unterbrechungen und Ordneraktionen',
        'Effiziente binäre Dateiblöcke bei Unterstützung beider Geräte, mit Fallback für ältere Versionen',
        'Einstellbare Größenlimits für empfangene Dateien, auch unbegrenzt',
        'Zwischenablageverlauf durchsuchen, anheften und favorisieren; optional verschlüsselt speichern, mit Aufbewahrung und Filter für sensible Inhalte',
        'Unterstützung ab Android 8.0 (API 26)',
        'QR-Kopplung; verschlüsselte Verbindungen im lokalen Netzwerk ohne Cloud-Relay',
      ],
      requirements: [
        'Windows 10, Version 1809 (Build 17763) oder neuer.',
        'Android 8.0 (API 26) oder neuer für die Android-Version.',
      ],
      releases: [
        {
          platform: 'windows',
          version: '1.4',
          highlights: [
            'Netzwerkdiagnose und Schnellaktionen für den Desktop ergänzt.',
            'Übertragungen mit Fortschritt, Pause/Fortsetzen, Abbrechen/Wiederholen, Wiederaufnahme und effizienten binären Dateiblöcken verbessert.',
            'Einstellbare Größenlimits für empfangene Dateien einschließlich unbegrenzt und Ordneraktionen für abgeschlossene Übertragungen ergänzt.',
            'Selbstständige Windows-Store-Pakete für x64 und ARM64.',
          ],
        },
        {
          platform: 'android',
          version: '1.4',
          highlights: [
            'Teilen von Zwischenablagebildern, Synchronisierungsregeln pro Computer und globale Pause ergänzt.',
            'Übertragungsverlauf mit Fortschritt sowie Pause/Fortsetzen, Abbrechen, Wiederholen und Wiederaufnahme nach Unterbrechungen erweitert.',
            'Einstellbare Größenlimits für empfangene Dateien einschließlich unbegrenzt ergänzt.',
            'Durchsuchbaren, anheftbaren und favorisierbaren Zwischenablageverlauf mit optionaler verschlüsselter Speicherung ergänzt.',
          ],
        },
      ],
    },
    2: {
      tagline: 'Windows-orientierte NAS-Dateiverwaltung mit unabhängigen Tabs und leistungsfähiger Übertragungswarteschlange.',
      description:
        'Verbinde dich über WebDAV, FTP, FTPS oder SFTP, entdecke NAS-Geräte und arbeite mit mehreren Server-Tabs und einer Übertragungswarteschlange. Zeige Medien an oder bearbeite entfernte Textdateien.',
      socialImageAlt: 'xConnect File Manager mit Verbindungsansicht für NAS-Server',
      longDescription:
        'xConnect File Manager ist ein Windows-orientierter NAS-Client mit .NET MAUI. Verbinde dich mit WebDAV-, FTP-, FTPS- und SFTP-Servern, entdecke kompatible Geräte im lokalen Netzwerk und verwalte unabhängige Verbindungen in Tabs. Durchsuche Listen- oder Rasteransichten mit Suche, Filtern, Sortierung, angehefteten Ordnern, Seitenladen, Latenz- und Speicherinformationen. Sammelaktionen für Dateien bieten Rückgängig für kürzliche Umbenennungen und Verschiebungen. Die Übertragungswarteschlange zeigt Fortschritt, Geschwindigkeit und Restzeit und unterstützt Pause/Fortsetzen, Wiederholen und Konfliktbehandlung. Außerdem bietet die App eine Bildershow, Audio-/Videostreaming und einen integrierten Texteditor. Windows ergänzt System-Tray, Drag-and-drop-Uploads, Abschlussbenachrichtigungen und eine optionale Autostart-Einstellung, deren Status Windows-Einstellungen sowie Benutzer- und Unternehmensrichtlinien berücksichtigt. Microsoft-Store-Pakete unterstützen x64 und ARM64. Android-Unterstützung ist in Entwicklung.',
      tags: ['Windows', 'NAS', 'WebDAV', 'FTP', 'FTPS', 'SFTP', 'Mehrere Tabs', 'Übertragungen', '.NET MAUI'],
      features: [
        'Windows-Version verfügbar; Android-Unterstützung in Entwicklung',
        'Verbindungen über WebDAV, FTP, FTPS und SFTP',
        'Lokale NAS-Erkennung und verschlüsselt gespeicherte Profile',
        'Unabhängige Tabs, Listen-/Rasteransicht, Suche, Filter, Seitenladen und Pins',
        'Sammelaktionen mit Rückgängig für Umbenennen und Verschieben',
        'Warteschlange mit Fortschritt, Geschwindigkeit, Pause/Fortsetzen, Wiederholen und Konfliktbehandlung',
        'Bildershow, Audio-/Videostreaming und integrierter Texteditor',
        'Windows-System-Tray, Drag-and-drop-Uploads und Abschlussbenachrichtigungen',
        'Optionaler Windows-Autostart mit Status gemäß Windows-Einstellungen und Benutzer- oder Unternehmensrichtlinien',
        'Microsoft-Store-Pakete für x64 und ARM64',
      ],
      requirements: ['Windows 10, Version 1903 (Build 18362) oder neuer.'],
      releases: [
        {
          platform: 'windows',
          version: '1.1',
          date: '2026-11-10',
          highlights: [
            'Optionale Einstellung zum Start von xConnect bei der Windows-Anmeldung hinzugefügt.',
            'Der Autostartstatus berücksichtigt Windows-Einstellungen, Task-Manager und Unternehmensrichtlinien.',
            'Microsoft-Store-Pakete unterstützen jetzt x64 und ARM64.',
          ],
        },
      ],
    },
    3: {
      tagline: 'Wissenschaftlicher Rechner mit Graphen, Programmierfunktionen und Retro-Instrumentenlook.',
      description:
        'Ein nativer Windows-Rechner für wissenschaftliche Berechnungen, Graphen, Programmierwerkzeuge, Matrizen und Einheitenumrechnung – mit Offline-Verlauf.',
      socialImageAlt: 'Wissenschaftlicher Rechner und Graphenansicht von Calctron',
      longDescription:
        'Calctron ist ein nativer Windows-Wissenschaftsrechner im Stil eines Präzisionsinstruments. Er verarbeitet bearbeitbare Ausdrücke, komplexe Zahlen, Variablen und Speicherwerte; zeichnet bis zu vier Funktionen mit numerischen Nullstellen und Schnittpunkten; bietet Programmierwerkzeuge für vier Zahlensysteme; berechnet Matrizen bis 8 × 8 und rechnet Einheiten aus acht Kategorien um. Der Offline-Verlauf speichert die letzten 100 Berechnungen; abgerufene Ausdrücke werden nie automatisch ausgeführt. Kein Konto, keine Cloud-Synchronisierung, Analyse- oder KI-Dienste. Eine Android-Version ist geplant.',
      tags: ['Windows', 'Wissenschaftlicher Rechner', 'Graphen', 'Programmierfunktionen', 'Matrizen', '.NET MAUI', 'Offline'],
      features: [
        'Wissenschaftliche Ausdrücke mit komplexen Zahlen, Variablen und Speicher',
        'Bis zu vier Funktionen zeichnen und mit Zoom, Nullstellen und Schnittpunkten untersuchen',
        'Programmierwerkzeuge mit BIN/OCT/DEC/HEX und 8–64-Bit-Wörtern',
        'Matrixoperationen und lineare Gleichungssysteme bis 8 × 8',
        'Einheiten für Länge, Masse, Temperatur, Fläche, Volumen, Geschwindigkeit, Zeit und Daten umrechnen',
        'Offline-Verlauf der letzten 100 Berechnungen mit Kopieren und erneutem Aufrufen',
        'Kein Konto, keine Cloud-Synchronisierung, Analyse- oder KI-Dienste',
      ],
      requirements: ['Windows 10, Version 1809 (Build 17763) oder neuer.'],
      releases: [
        {
          platform: 'windows',
          version: '1.0.0',
          highlights: [
            'Windows-Version mit wissenschaftlichen, grafischen und Programmierfunktionen, Matrizen und Einheitenumrechnung.',
            'Native Microsoft-Store-Pakete für x64 und ARM64.',
          ],
        },
      ],
    },
  },

  nav: {
    primaryNavigation: 'Hauptnavigation',
    skipToContent: 'Zum Hauptinhalt springen',
    home: 'Startseite',
    about: 'Über mich',
    projects: 'Projekte',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutz',
    imprint: 'Impressum',
    downloadApps: 'Apps herunterladen',
    style: 'Stil',
    language: 'Sprache',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    themeNames: {
      dark: 'Dunkel',
      futuristic: 'Futuristisch',
      light: 'Weiß-Blau',
    },
  },

  hero: {
    title1: 'Für den Alltag gebaut.',
    title2: 'Auch für meinen.',
    subtitle:
      'Ich entwickle praktische Software für den Alltag – und nutze sie auch selbst.',
    exploreProjects: 'Projekte entdecken',
    aboutMe: 'Über mich',
  },

  carousel: {
    tag: 'Highlights',
    title: 'Top-Apps',
    subtitle: 'Ausgewählte Highlights aus meinem Portfolio',
    viewProject: 'Projekt ansehen',
    new: 'Neu',
    regionLabel: 'Projekt-Highlights-Karussell',
    regionRoleDescription: 'Karussell',
    slideRoleDescription: 'Folie',
    slideLabel: 'Projekt {index} von {total}',
    slideAnnouncement: '{project}, Projekt {index} von {total}',
    previousSlide: 'Vorheriges Projekt',
    nextSlide: 'Nächstes Projekt',
    pauseRotation: 'Projektwechsel anhalten',
    resumeRotation: 'Projektwechsel fortsetzen',
  },

  allApps: {
    tag: 'Alle Projekte',
    title: 'Die komplette Sammlung',
    subtitle: 'Entdecke meine Apps und informiere dich über die unterstützten Plattformen.',
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
    subtitle: 'Entdecke meine Software und informiere dich über die unterstützten Plattformen.',
    filterAll: 'Alle',
    downloadLabel: 'Herunterladen',
    comingSoon: 'Demnächst verfügbar',
    aboutLabel: 'Über die App',
    featuresLabel: 'Hauptfunktionen',
    releasedLabel: 'Veröffentlicht',
    noResults: 'Keine Projekte in dieser Kategorie gefunden.',
    new: 'Neu',
    version: 'Version',
    screenshotsTitle: 'Screenshots',
    viewDetails: 'Projektdetails',
    backToProjects: 'Alle Projekte',
    requirementsTitle: 'Systemanforderungen',
    releasesTitle: 'Versionsverlauf',
    releaseDateLabel: 'Veröffentlicht',
    available: 'Verfügbar',
    notFoundTitle: 'Projekt nicht gefunden',
    notFoundBody: 'Diese Projektseite ist nicht verfügbar.',
    viewScreenshot: 'Screenshot in voller Größe anzeigen',
    closeScreenshot: 'Screenshot schließen',
    screenshotCaptions: {
      bridgelyHome: 'Windows-Startseite mit Verbindungsstatus und Übertragungen',
      bridgelyClipboardHistory: 'Zwischenablageverlauf mit Suche und gespeicherten Einträgen',
      bridgelyMore: 'Menü „Mehr“ mit Geräte-, Übertragungs- und Diagnoseansichten',
      bridgelyDevices: 'Status des gekoppelten Smartphones und Gerätesteuerung',
      bridgelyTransfers: 'Übertragungsverlauf mit Fortschritt und Wiederherstellungsaktionen',
      bridgelyDiagnostics: 'Netzwerk- und Kopplungsdiagnose',
      bridgelySettings: 'Allgemeine Einstellungen, Autostart und Zwischenablage',
      bridgelySyncSettings: 'Globale Synchronisierung und Optionen für den Zwischenablageverlauf',
      bridgelyDeviceSettings: 'Synchronisierungssteuerung pro Gerät',
      bridgelyAboutSecurity: 'Über Bridgely und Verbindungssicherheit',
      more: 'Menü „Mehr“',
      settings: 'Einstellungen und Gerätefunktionen',
      scientific: 'Wissenschaftlicher Rechner mit bearbeitbarem Ausdruck und Berechnungsverlauf',
      graphing: 'Funktionsgraphen mit Spur, Zoom und dauerhaft sichtbarem Verlauf',
      programmer: 'Programmierwerkzeuge mit Zahlensystemumrechnung und interaktivem Bitfeld',
      xconnectConnection: 'Verbindungen mit WebDAV, FTP, FTPS oder SFTP einrichten',
      xconnectProfiles: 'Gespeicherte Serverprofile verwalten und NAS-Geräte entdecken',
      xconnectSettings: 'Darstellung, Sprache, Arbeitsbereich und App-Sperre einstellen',
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

  imprint: {
    pageTag: 'Rechtliches',
    title: 'Impressum',
    subtitle: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).',
    providerLabel: 'Anbieter',
    providerName: 'Tobias Brörmann',
    brandLabel: 'Marke',
    brandName: 'TB Builds',
    addressLabel: 'Anschrift',
    street: 'Mercedesstraße 11A',
    postalCity: '70372 Stuttgart',
    country: 'Deutschland',
    contactLabel: 'Kontakt',
    email: 'support.tbsoftware@gmail.com',
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
    imprint: 'Impressum',
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
    imageAlt: 'TB Builds, praktische Software von Tobias Brörmann',
    pages: {
      home: {
        title: 'TB Builds — Software von Tobias Brörmann',
        description:
          'Praktische Desktop- und Mobile-Software von Tobias Brörmann – für den Alltag entwickelt und vom Entwickler selbst genutzt.',
      },
      about: {
        title: 'Über Tobias Brörmann',
        description:
          'Full-Stack-Entwickler mit über 9 Jahren Enterprise-Erfahrung in .NET, Java, Python, JavaScript, TypeScript, Mobile-, Cloud- und Datenbanklösungen.',
      },
      projects: {
        title: 'Softwareprojekte & Apps',
        description:
          'Entdecke Calctron, Bridgely und xConnect File Manager von Tobias Brörmann. xConnect unterstützt WebDAV, FTP, FTPS und SFTP; Android-Versionen sind in Entwicklung.',
      },
      terms: {
        title: 'Nutzungsbedingungen',
        description: 'Nutzungsbedingungen für den Download und die Nutzung von Software von TB Builds.',
      },
      privacy: {
        title: 'Datenschutzerklärung',
        description: 'Allgemeine Datenschutzerklärung für Apps von TB Builds; Einzelheiten zur Datenverarbeitung variieren je nach App und Funktion.',
      },
      imprint: {
        title: 'Impressum',
        description: 'Anbieterinformationen und Kontaktdaten von TB Builds.',
      },
    },
  },
};
