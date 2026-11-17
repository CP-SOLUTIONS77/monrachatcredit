/**
 * Pages locales « rachat de crédit à <ville> », pour le référencement de
 * proximité autour de l'agence de Montereau-Fault-Yonne. Chaque page traite un
 * angle différent du rachat de crédit, pour ne pas dupliquer le contenu ni les
 * pages ville de cpsolutions77.com et monpretassure.fr.
 */

export type Section = {
  titre: string;
  paragraphes: string[];
  liste?: string[];
};

export type Ville = {
  slug: string;
  nom: string;
  /** Balise title (le suffixe du site est ajouté par le layout). */
  titre: string;
  description: string;
  h1: string;
  chapeau: string;
  sections: Section[];
  /** Accès à l'agence depuis la ville. */
  trajet: string;
  faq: { question: string; reponse: string }[];
};

export const VILLES: Ville[] = [
  {
    slug: "montereau-fault-yonne",
    nom: "Montereau-Fault-Yonne",
    titre: "Rachat de crédit à Montereau-Fault-Yonne",
    description:
      "Regroupez vos crédits avec un courtier installé à Montereau-Fault-Yonne, 35 rue Jean Jaurès. Étude de votre situation, comparaison des banques, sans engagement.",
    h1: "Rachat de crédit à Montereau-Fault-Yonne, avec un courtier de votre ville",
    chapeau:
      "Mon Rachat Crédit est le service de regroupement de crédits de CP Solutions, cabinet de courtage installé rue Jean Jaurès, en centre-ville de Montereau. Vous pouvez venir en parler à l'agence, documents en main.",
    sections: [
      {
        titre: "Comment se déroule un rachat de crédit",
        paragraphes: ["Un regroupement de crédits suit toujours les mêmes étapes :"],
        liste: [
          "nous faisons le point sur vos crédits en cours, vos revenus et vos charges ;",
          "nous calculons la mensualité qui vous laisse un reste à vivre confortable ;",
          "nous présentons votre dossier à plusieurs banques spécialisées et comparons leurs offres ;",
          "la banque retenue rembourse vos anciens crédits, et vous n'avez plus qu'une mensualité.",
        ],
      },
      {
        titre: "Les documents à apporter",
        paragraphes: [
          "Pour une première étude, rassemblez vos trois derniers bulletins de salaire ou justificatifs de revenus, votre dernier avis d'imposition, vos derniers relevés de compte, et les tableaux d'amortissement ou derniers relevés de chacun de vos crédits.",
          "Vous pouvez les déposer à l'agence ou nous les envoyer par e-mail : un premier échange suffit souvent à savoir si l'opération a du sens pour vous.",
        ],
      },
      {
        titre: "Mensualité plus basse, coût total à surveiller",
        paragraphes: [
          "Allonger la durée de remboursement fait baisser la mensualité, mais augmente en général le coût total du crédit. Nous vous présentons toujours les deux chiffres côte à côte, pour que vous décidiez en connaissance de cause.",
        ],
      },
    ],
    trajet:
      "L'agence est en centre-ville, au 35 rue Jean Jaurès, à une dizaine de minutes à pied de la gare. Stationnement en zone bleue devant l'agence.",
    faq: [
      {
        question: "Puis-je venir à l'agence sans rendez-vous ?",
        reponse:
          "Oui, l'agence est ouverte du lundi au samedi. Pour être sûr qu'un courtier soit disponible, appelez avant de passer ou prenez rendez-vous.",
      },
      {
        question: "Combien de temps faut-il pour un rachat de crédit ?",
        reponse:
          "Comptez généralement plusieurs semaines entre la constitution du dossier et le déblocage des fonds, délai de réflexion compris. Un dossier complet dès le départ fait gagner du temps.",
      },
      {
        question: "L'étude est-elle payante ?",
        reponse:
          "Non, l'étude de votre situation est gratuite et sans engagement. Les éventuels frais de courtage vous sont annoncés par écrit avant toute signature.",
      },
    ],
  },
  {
    slug: "fontainebleau",
    nom: "Fontainebleau",
    titre: "Rachat de crédit avec prêt immobilier à Fontainebleau",
    description:
      "Propriétaire à Fontainebleau ou Avon ? Regroupez votre prêt immobilier et vos crédits conso : garantie, frais, indemnités de remboursement anticipé. Étude sans engagement.",
    h1: "Rachat de crédit à Fontainebleau : regrouper son prêt immobilier et ses autres crédits",
    chapeau:
      "À Fontainebleau et à Avon, beaucoup de propriétaires remboursent un prêt immobilier important, auquel s'ajoutent un crédit auto ou un crédit travaux. Les regrouper peut alléger le budget, à condition de bien mesurer les frais de l'opération.",
    sections: [
      {
        titre: "Quand le prêt immobilier entre dans le regroupement",
        paragraphes: [
          "Lorsque la part immobilière représente au moins 60 % des crédits regroupés, l'opération suit les règles du crédit immobilier : une offre de prêt, puis un délai de réflexion de dix jours avant de pouvoir l'accepter.",
          "Ce type de regroupement permet souvent d'obtenir un taux plus proche de celui d'un crédit immobilier que d'un crédit à la consommation, et une durée plus longue.",
        ],
      },
      {
        titre: "Les frais à prendre en compte",
        paragraphes: ["Un rachat de crédit immobilier a un coût, qu'il faut comparer à l'économie attendue :"],
        liste: [
          "les indemnités de remboursement anticipé de votre prêt actuel, plafonnées à six mois d'intérêts et à 3 % du capital restant dû ;",
          "les frais de garantie : hypothèque, avec des frais de notaire, ou caution d'un organisme spécialisé ;",
          "les frais de dossier de la nouvelle banque et l'assurance emprunteur du nouveau prêt.",
        ],
      },
      {
        titre: "Une alternative à étudier : la renégociation",
        paragraphes: [
          "Si votre seul objectif est de baisser le taux de votre prêt immobilier, une renégociation avec votre banque actuelle peut suffire, sans frais de garantie. Nous comparons les deux pistes avant de vous recommander l'une ou l'autre.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 25 minutes en voiture de Fontainebleau, et Fontainebleau-Avon est reliée à Montereau par la ligne R du Transilien. Tout peut aussi se faire à distance.",
    faq: [
      {
        question: "Faut-il prendre une nouvelle hypothèque ?",
        reponse:
          "Pas forcément. Selon votre dossier, la banque peut demander une hypothèque, reprendre la garantie existante ou accepter la caution d'un organisme spécialisé. Le choix a un impact direct sur les frais.",
      },
      {
        question: "Mon prêt immobilier prévoit des indemnités de remboursement anticipé, est-ce bloquant ?",
        reponse:
          "Non, elles sont plafonnées par la loi et intégrées au calcul. Nous vérifions que l'économie réalisée reste supérieure aux frais avant de vous proposer l'opération.",
      },
      {
        question: "Peut-on inclure un crédit renouvelable dans le regroupement ?",
        reponse:
          "Oui. Les crédits renouvelables font partie des crédits les plus souvent regroupés, car leur taux est en général élevé.",
      },
    ],
  },
  {
    slug: "melun",
    nom: "Melun",
    titre: "Rachat de crédit à Melun : regrouper et financer un projet",
    description:
      "Regroupez vos crédits à Melun et intégrez une enveloppe de trésorerie pour des travaux, une voiture ou un projet familial. Courtier indépendant, étude sans engagement.",
    h1: "Rachat de crédit à Melun : regrouper vos crédits et financer un nouveau projet",
    chapeau:
      "Un regroupement de crédits ne sert pas seulement à baisser vos mensualités. Il peut aussi intégrer une somme supplémentaire pour un projet, sans ajouter un crédit de plus à côté.",
    sections: [
      {
        titre: "La trésorerie dans un regroupement",
        paragraphes: [
          "Au moment du regroupement, on peut ajouter au montant refinancé une enveloppe de trésorerie : travaux dans le logement, changement de voiture, frais d'études des enfants, ou simplement une réserve pour les imprévus.",
          "Cette somme est intégrée à la mensualité unique. Elle évite de souscrire un nouveau crédit renouvelable ou un prêt personnel, souvent plus chers.",
        ],
      },
      {
        titre: "Ce que regardent les banques",
        paragraphes: ["Pour accepter une enveloppe de trésorerie, la banque examine :"],
        liste: [
          "la stabilité de vos revenus et de votre emploi ;",
          "votre taux d'endettement après l'opération ;",
          "votre reste à vivre, c'est-à-dire ce qu'il vous reste chaque mois une fois les charges payées ;",
          "la tenue de vos comptes sur les derniers mois.",
        ],
      },
      {
        titre: "Garder la maîtrise du coût",
        paragraphes: [
          "Chaque euro de trésorerie ajouté est remboursé sur la durée du nouveau prêt. Nous vous aidons à fixer un montant utile, sans gonfler inutilement le coût total.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 35 minutes en voiture de Melun, et les deux villes sont reliées par la ligne R du Transilien. La plupart des dossiers se traitent par téléphone et par e-mail.",
    faq: [
      {
        question: "Quel montant de trésorerie peut-on ajouter ?",
        reponse:
          "Il n'y a pas de montant fixe : il dépend de vos revenus, de votre taux d'endettement après l'opération et de la politique de la banque. Nous le calculons avec vous lors de l'étude.",
      },
      {
        question: "Dois-je justifier l'utilisation de la trésorerie ?",
        reponse:
          "La banque demande en général l'objet du financement, et parfois des devis pour des travaux. Le niveau d'exigence varie d'un établissement à l'autre.",
      },
      {
        question: "Vaut-il mieux un regroupement avec trésorerie ou un crédit séparé ?",
        reponse:
          "Cela dépend des taux proposés et de vos crédits en cours. Nous comparons les deux solutions, mensualité et coût total, avant de vous conseiller.",
      },
    ],
  },
  {
    slug: "nemours",
    nom: "Nemours",
    titre: "Rachat de crédit à Nemours : retraités et seniors",
    description:
      "Retraité ou proche de la retraite à Nemours ? Le rachat de crédit peut adapter vos mensualités à vos nouveaux revenus. Âge, durée, assurance : un courtier vous conseille.",
    h1: "Rachat de crédit à Nemours, pour les retraités et les futurs retraités",
    chapeau:
      "Le passage à la retraite fait souvent baisser les revenus, alors que des crédits courent encore. À Nemours comme ailleurs, le rachat de crédit permet d'adapter les mensualités à cette nouvelle situation.",
    sections: [
      {
        titre: "Anticiper la baisse de revenus",
        paragraphes: [
          "Le meilleur moment pour étudier un regroupement, c'est souvent avant le départ à la retraite, pendant que vos revenus d'activité sont encore pris en compte. Une fois retraité, le dossier reste possible, mais il est examiné sur la base de votre pension.",
        ],
      },
      {
        titre: "Les points spécifiques aux seniors",
        paragraphes: ["Après 60 ans, trois éléments pèsent particulièrement :"],
        liste: [
          "l'âge en fin de prêt, que chaque banque limite différemment ;",
          "l'assurance emprunteur, dont le coût augmente avec l'âge et qui peut nécessiter un questionnaire de santé ;",
          "la durée de remboursement, souvent plus courte, ce qui limite la baisse de mensualité possible.",
        ],
      },
      {
        titre: "Propriétaire : un atout",
        paragraphes: [
          "Si vous êtes propriétaire de votre logement, même sans prêt immobilier en cours, la banque peut accepter une garantie sur ce bien. Cela ouvre souvent l'accès à de meilleures conditions et à des durées plus longues.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 30 minutes en voiture de Nemours. Si vous préférez ne pas vous déplacer, tout peut se faire par téléphone, par e-mail ou par courrier.",
    faq: [
      {
        question: "Peut-on faire un rachat de crédit à la retraite ?",
        reponse:
          "Oui. Le dossier est étudié sur la base de votre pension, et l'âge en fin de prêt ainsi que l'assurance emprunteur sont les deux points qui demandent le plus d'attention.",
      },
      {
        question: "L'assurance emprunteur est-elle obligatoire ?",
        reponse:
          "Elle n'est pas imposée par la loi, mais la plupart des banques l'exigent. Vous restez libre de choisir un autre assureur que celui de la banque, ce qui peut réduire son coût.",
      },
      {
        question: "Faut-il le faire avant ou après le départ à la retraite ?",
        reponse:
          "Souvent avant, tant que vos revenus d'activité sont pris en compte. Mais chaque situation est différente : nous étudions les deux hypothèses avec vous.",
      },
    ],
  },
  {
    slug: "sens",
    nom: "Sens",
    titre: "Rachat de crédit à Sens : après une baisse de revenus",
    description:
      "Séparation, chômage, temps partiel : à Sens, le rachat de crédit peut alléger vos mensualités après une baisse de revenus. Un courtier étudie votre situation, sans engagement.",
    h1: "Rachat de crédit à Sens, quand les revenus baissent",
    chapeau:
      "Une séparation, une perte d'emploi, un passage à temps partiel : quand les revenus diminuent, des mensualités qui passaient bien deviennent difficiles à tenir. Le rachat de crédit peut aider, à condition d'agir tôt.",
    sections: [
      {
        titre: "Agir avant les incidents de paiement",
        paragraphes: [
          "Les banques étudient plus facilement un regroupement quand les comptes sont encore bien tenus. Une fois que les retards de paiement s'accumulent, et surtout en cas d'inscription au fichier des incidents de remboursement (FICP), les solutions se réduisent fortement.",
          "Si votre budget se tend, n'attendez pas le premier impayé pour en parler.",
        ],
      },
      {
        titre: "Après une séparation",
        paragraphes: [
          "Quand un couple se sépare, il faut souvent réorganiser les crédits communs : l'un reprend le logement et les prêts, l'autre est désolidarisé. Le rachat de crédit peut permettre à celui qui garde le bien de reprendre les crédits seul, avec une mensualité adaptée à ses revenus.",
        ],
      },
      {
        titre: "Quand le rachat n'est pas la bonne solution",
        paragraphes: [
          "Si la situation est trop dégradée, un regroupement ne ferait que repousser le problème. La commission de surendettement de la Banque de France peut alors être saisie gratuitement. Nous vous le dirons franchement si c'est la voie la plus adaptée.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 35 minutes en voiture de Sens, et les deux villes sont sur la ligne Paris-Sens. Un rachat de crédit se gère très bien à distance.",
    faq: [
      {
        question: "Peut-on faire un rachat de crédit en étant au chômage ?",
        reponse:
          "C'est difficile, car les banques regardent la stabilité des revenus. Ce n'est toutefois pas impossible, notamment pour un propriétaire. Une étude permet de savoir ce qui est envisageable.",
      },
      {
        question: "Je suis inscrit au FICP, un rachat est-il possible ?",
        reponse:
          "Très rarement. La plupart des banques refusent les dossiers inscrits au FICP. Selon la situation, la commission de surendettement peut être une solution plus adaptée.",
      },
      {
        question: "Mon ex-conjoint et moi avons un crédit commun, comment faire ?",
        reponse:
          "Le crédit reste dû par les deux co-emprunteurs tant qu'il n'est pas remboursé ou repris. Un rachat au nom d'un seul permet de désolidariser l'autre, si les revenus de celui qui reprend le crédit le permettent.",
      },
    ],
  },
  {
    slug: "provins",
    nom: "Provins",
    titre: "Rachat de crédit à Provins : indépendants, artisans, commerçants",
    description:
      "Artisan, commerçant ou indépendant à Provins ? Regroupez vos crédits personnels avec un courtier qui sait présenter un dossier de non-salarié. Étude sans engagement.",
    h1: "Rachat de crédit à Provins, pour les indépendants et les commerçants",
    chapeau:
      "Commerçants, artisans, professions libérales : à Provins, beaucoup d'emprunteurs ne sont pas salariés. Leur dossier de rachat de crédit est tout à fait possible, mais il se prépare différemment.",
    sections: [
      {
        titre: "Ce que les banques demandent à un indépendant",
        paragraphes: ["Pour un non-salarié, la banque juge les revenus sur la durée. Prévoyez en général :"],
        liste: [
          "les deux ou trois derniers bilans ou déclarations de résultats ;",
          "vos derniers avis d'imposition ;",
          "les relevés de vos comptes personnels et, parfois, professionnels ;",
          "les tableaux d'amortissement de vos crédits en cours.",
        ],
      },
      {
        titre: "Lisser des revenus irréguliers",
        paragraphes: [
          "Un commerçant a des mois forts et des mois creux. Une mensualité unique, calculée sur vos revenus moyens, apporte de la visibilité et évite les tensions de trésorerie personnelles les mois difficiles.",
        ],
      },
      {
        titre: "Présenter un dossier solide",
        paragraphes: [
          "Notre rôle est de présenter votre activité sous son meilleur jour, chiffres à l'appui, et de cibler les banques habituées aux dossiers d'indépendants. Une ancienneté d'activité de quelques années facilite nettement l'accord.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 40 minutes en voiture de Provins. Pour la plupart de nos clients provinois, tout se fait par téléphone et par e-mail.",
    faq: [
      {
        question: "Un indépendant peut-il faire racheter ses crédits ?",
        reponse:
          "Oui. Le dossier est étudié sur plusieurs années de revenus, à partir des bilans et des avis d'imposition. Une activité installée depuis quelques années facilite l'accord.",
      },
      {
        question: "Peut-on regrouper des crédits professionnels ?",
        reponse:
          "Le rachat de crédit concerne d'abord les crédits personnels. L'intégration de dettes professionnelles est plus rare et dépend du dossier et de la banque.",
      },
      {
        question: "Ma première année d'activité est récente, est-ce bloquant ?",
        reponse:
          "C'est souvent un frein, car la banque manque de recul sur vos revenus. Si vous êtes propriétaire, une garantie sur votre logement peut toutefois ouvrir des possibilités.",
      },
    ],
  },
];

export function getVille(slug: string): Ville | undefined {
  return VILLES.find((v) => v.slug === slug);
}
