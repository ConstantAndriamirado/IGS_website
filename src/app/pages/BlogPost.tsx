import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';
import { Breadcrumb } from '../components/Breadcrumb';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // Base de données des articles (même structure que dans Blog.tsx)
  const blogPosts = [
    {
      id: 1,
      slug: 'nouvelles-procedures-douanieres-guinee-2026',
      title: 'Les nouvelles procédures douanières en Guinée pour 2026',
      excerpt: 'Découvrez les dernières modifications réglementaires qui impactent vos opérations d\'import-export et comment IGS vous accompagne dans cette transition.',
      category: 'Transit & Douane',
      author: 'Mamadou Bah',
      date: '12 Février 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1763225271111-dd9363584249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwZG9jdW1lbnRzJTIwcGFwZXJ3b3JrfGVufDF8fHx8MTc3MTIxMTQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      content: `
        <p>L'année 2026 marque un tournant important pour le secteur du commerce international en Guinée. Les autorités douanières ont annoncé une série de réformes visant à moderniser et simplifier les procédures d'import-export.</p>

        <h2>Les principales modifications</h2>
        <p>La digitalisation des processus douaniers est au cœur de cette réforme. Désormais, l'ensemble des déclarations peuvent être effectuées en ligne via la nouvelle plateforme SYDONIA World, réduisant considérablement les délais de traitement.</p>

        <h3>1. Déclaration en douane électronique</h3>
        <p>Le passage à la déclaration 100% électronique devient obligatoire pour toutes les entreprises. Cette transition permet :</p>
        <ul>
          <li>Une réduction des délais de traitement de 40%</li>
          <li>Une meilleure traçabilité des opérations</li>
          <li>Une diminution des erreurs de saisie</li>
          <li>Un accès 24/7 aux services douaniers</li>
        </ul>

        <h3>2. Nouvelles classifications tarifaires</h3>
        <p>Le système harmonisé a été mis à jour pour inclure de nouvelles catégories de produits, notamment dans les secteurs de la technologie et des énergies renouvelables. Les entreprises doivent s'assurer que leurs produits sont correctement classifiés pour éviter des pénalités.</p>

        <h3>3. Renforcement des contrôles phytosanitaires</h3>
        <p>Les importations de produits agricoles et alimentaires font l'objet de contrôles renforcés. Les certificats phytosanitaires doivent être soumis avant l'arrivée des marchandises.</p>

        <h2>Comment IGS vous accompagne</h2>
        <p>Face à ces changements, Ibrahima Golden Services met à votre disposition son expertise pour assurer une transition en douceur :</p>

        <ul>
          <li><strong>Formation de vos équipes</strong> : Nous organisons des sessions de formation sur les nouvelles procédures</li>
          <li><strong>Assistance administrative</strong> : Nos experts vous aident à constituer vos dossiers conformément aux nouvelles exigences</li>
          <li><strong>Veille réglementaire</strong> : Nous assurons une veille constante pour vous tenir informés des évolutions</li>
          <li><strong>Solutions digitales</strong> : Accès à nos outils de gestion pour faciliter vos démarches</li>
        </ul>

        <h2>Calendrier de mise en œuvre</h2>
        <p>Les nouvelles procédures entrent progressivement en vigueur selon le calendrier suivant :</p>
        <ul>
          <li><strong>Mars 2026</strong> : Déploiement de la plateforme électronique</li>
          <li><strong>Mai 2026</strong> : Obligation de déclaration électronique pour les grandes entreprises</li>
          <li><strong>Septembre 2026</strong> : Extension à toutes les entreprises</li>
          <li><strong>Janvier 2027</strong> : Fin définitive des procédures papier</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Cette modernisation des procédures douanières représente une opportunité pour les entreprises guinéennes de gagner en efficacité et en compétitivité. IGS reste à vos côtés pour vous accompagner dans cette transition et optimiser vos opérations d'import-export.</p>

        <p>Pour toute question ou assistance, n'hésitez pas à contacter nos équipes qui se feront un plaisir de vous accompagner dans vos démarches.</p>
      `
    },
    {
      id: 2,
      slug: 'optimiser-couts-fret-maritime-strategies',
      title: 'Optimiser vos coûts de fret maritime : 7 stratégies essentielles',
      excerpt: 'Dans un contexte de hausse des tarifs maritimes, découvrez comment réduire vos dépenses tout en maintenant la qualité de service.',
      category: 'Fret Maritime',
      author: 'Aissatou Sylla',
      date: '8 Février 2026',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1735047974891-df59713d8192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXIlMjBwb3J0fGVufDF8fHx8MTc3MTIxMTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      content: `
        <p>Le transport maritime représente environ 90% du commerce mondial, mais les fluctuations tarifaires peuvent impacter significativement vos marges. Voici sept stratégies éprouvées pour optimiser vos coûts.</p>

        <h2>1. Anticipez vos expéditions</h2>
        <p>La planification est votre meilleure alliée. En réservant vos conteneurs 4 à 6 semaines à l'avance, vous pouvez bénéficier de tarifs préférentiels et éviter les surcharges de dernière minute.</p>

        <h2>2. Consolidez vos envois</h2>
        <p>Plutôt que d'expédier plusieurs petits lots, regroupez vos marchandises pour optimiser le remplissage des conteneurs. Le groupage permet de :</p>
        <ul>
          <li>Réduire le coût au kilo de 30 à 50%</li>
          <li>Diminuer votre empreinte carbone</li>
          <li>Simplifier la gestion administrative</li>
        </ul>

        <h2>3. Choisissez le bon type de conteneur</h2>
        <p>Analysez vos besoins réels : un conteneur de 20 pieds peut être plus économique qu'un 40 pieds si vous ne l'utilisez pas à pleine capacité. Les conteneurs high-cube offrent 13% d'espace supplémentaire pour un surcoût minime.</p>

        <h2>4. Négociez des contrats annuels</h2>
        <p>Pour les expéditeurs réguliers, les contrats de volume garantissent des tarifs stables et compétitifs, protégeant votre budget des fluctuations du marché.</p>

        <h2>5. Optimisez votre emballage</h2>
        <p>Un emballage bien pensé peut augmenter de 15 à 25% la quantité de marchandises par conteneur. Utilisez des palettes standardisées et minimisez les espaces vides.</p>

        <h2>6. Sélectionnez judicieusement vos ports</h2>
        <p>Les ports secondaires offrent parfois des tarifs plus avantageux que les grands hubs, même en incluant le transport terrestre additionnel. IGS peut vous conseiller sur les meilleures routes.</p>

        <h2>7. Faites appel à un transitaire expérimenté</h2>
        <p>Un partenaire logistique comme IGS dispose de relations privilégiées avec les compagnies maritimes, permettant d'accéder à des tarifs négociés et à une expertise qui vous fera économiser bien plus que nos honoraires.</p>

        <h2>L'accompagnement IGS</h2>
        <p>Notre équipe analyse votre flux logistique pour identifier les opportunités d'optimisation spécifiques à votre activité. Nous vous proposons des solutions sur mesure combinant plusieurs de ces stratégies.</p>

        <p>Contactez-nous pour un audit gratuit de vos coûts de fret maritime et découvrez comment économiser jusqu'à 25% sur vos expéditions.</p>
      `
    },
    {
      id: 3,
      slug: 'fret-aerien-express-rapidite-difference',
      title: 'Le fret aérien express : quand la rapidité fait la différence',
      excerpt: 'Pour vos envois urgents, le fret aérien reste la solution privilégiée. Analyse des avantages et des meilleures pratiques.',
      category: 'Fret Aérien',
      author: 'Fatoumata Camara',
      date: '5 Février 2026',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1696385041146-d2827a77b992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvJTIwbG9hZGluZ3xlbnwxfHx8fDE3NzExNDUwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      content: `
        <p>Dans un monde où le temps c'est de l'argent, le fret aérien express s'impose comme la solution incontournable pour les envois urgents et les marchandises à haute valeur ajoutée.</p>

        <h2>Pourquoi choisir le fret aérien ?</h2>
        <p>Le transport aérien offre des avantages uniques qui justifient son coût supérieur dans de nombreuses situations.</p>

        <h3>Rapidité inégalée</h3>
        <p>Là où le maritime nécessite 4 à 6 semaines, l'aérien livre en 3 à 7 jours. Pour les industries à rotation rapide comme la mode, l'électronique ou le pharmaceutique, cette rapidité est critique.</p>

        <h3>Fiabilité et prévisibilité</h3>
        <p>Les horaires de vols sont précis et rarement modifiés. Cette prévisibilité permet une gestion optimale des stocks et réduit les coûts d'immobilisation.</p>

        <h3>Sécurité renforcée</h3>
        <p>Les contrôles aéroportuaires stricts et le temps de transit réduit minimisent les risques de vol, de dommage ou de détérioration des marchandises.</p>

        <h2>Quand opter pour le fret aérien ?</h2>
        <ul>
          <li><strong>Urgence</strong> : Lancement de produit, rupture de stock, pièces de rechange critiques</li>
          <li><strong>Valeur élevée</strong> : Électronique, bijouterie, équipements médicaux</li>
          <li><strong>Périssabilité</strong> : Produits frais, échantillons biologiques, fleurs</li>
          <li><strong>Faible volume</strong> : Pour les petites quantités, le rapport coût/bénéfice est favorable</li>
        </ul>

        <h2>Les solutions IGS pour le fret aérien</h2>
        <p>Ibrahima Golden Services collabore avec les principales compagnies aériennes desservant la Guinée, nous assurant une capacité d'espace garantie même en haute saison.</p>

        <h3>Nos services incluent :</h3>
        <ul>
          <li>Enlèvement et livraison porte-à-porte</li>
          <li>Emballage spécialisé et étiquetage IATA</li>
          <li>Dédouanement accéléré</li>
          <li>Suivi en temps réel de vos envois</li>
          <li>Assurance tous risques</li>
          <li>Solutions pour marchandises dangereuses (DGR)</li>
        </ul>

        <h2>Optimiser vos coûts</h2>
        <p>Même en fret aérien, des économies sont possibles :</p>
        <ul>
          <li>Utilisez le poids volumétrique à votre avantage en optimisant l'emballage</li>
          <li>Profitez des tarifs de consolidation pour les envois inférieurs à 100 kg</li>
          <li>Privilégiez les vols directs pour éviter les frais de transbordement</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Le fret aérien n'est pas qu'une solution de secours, c'est un outil stratégique pour rester compétitif dans un marché globalisé. IGS vous accompagne pour tirer le meilleur parti de ce mode de transport.</p>

        <p>Demandez un devis personnalisé en contactant nos équipes dès aujourd'hui.</p>
      `
    },
    {
      id: 4,
      slug: 'transport-routier-afrique-ouest-defis-opportunites',
      title: 'Transport routier en Afrique de l\'Ouest : défis et opportunités',
      excerpt: 'Le corridor routier guinéen offre des perspectives intéressantes pour le commerce régional. Tour d\'horizon des infrastructures.',
      category: 'Logistique',
      author: 'Ibrahima Diallo',
      date: '1 Février 2026',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1758224388408-b060b4e0f2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NzEyMTE0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      content: `
        <p>Le transport routier reste l'épine dorsale du commerce intra-africain, représentant plus de 80% des échanges régionaux. La Guinée, par sa position stratégique, joue un rôle clé dans ce réseau.</p>

        <h2>L'infrastructure routière guinéenne</h2>
        <p>La Guinée dispose de plusieurs axes routiers majeurs reliant les pays voisins et facilitant le commerce régional.</p>

        <h3>Les corridors principaux</h3>
        <ul>
          <li><strong>Conakry-Bamako</strong> : Axe vital pour le commerce avec le Mali, pays enclavé</li>
          <li><strong>Conakry-Freetown</strong> : Liaison avec la Sierra Leone</li>
          <li><strong>Conakry-Abidjan</strong> : Connexion avec le hub économique ivoirien</li>
          <li><strong>Route du Nord</strong> : Vers le Sénégal et la Mauritanie</li>
        </ul>

        <h2>Les défis actuels</h2>
        <p>Malgré les progrès, plusieurs obstacles persistent :</p>

        <h3>1. État des routes</h3>
        <p>Certains tronçons nécessitent encore des travaux de réfection. La saison des pluies peut compliquer certains trajets, rallongeant les délais de livraison.</p>

        <h3>2. Contrôles frontaliers</h3>
        <p>Les passages frontaliers peuvent occasionner des délais. Les démarches administratives doivent être rigoureusement préparées pour éviter les blocages.</p>

        <h3>3. Sécurité</h3>
        <p>Bien que la situation se soit améliorée, certaines zones requièrent des précautions particulières. Le convoyage en groupe reste recommandé sur certains axes.</p>

        <h2>Les opportunités de développement</h2>

        <h3>Investissements infrastructurels</h3>
        <p>Les programmes de la CEDEAO et les investissements nationaux améliorent progressivement le réseau routier. L'autoroute Conakry-Coyah déjà opérationnelle en est un exemple.</p>

        <h3>Digitalisation des procédures</h3>
        <p>Le système de suivi GPS et les applications de gestion de flotte optimisent les opérations et rassurent les chargeurs sur la localisation de leurs marchandises.</p>

        <h3>Facilitation du commerce</h3>
        <p>Les accords CEDEAO simplifient progressivement les formalités transfrontalières, réduisant les temps d'attente aux postes frontières.</p>

        <h2>L'expertise IGS en transport routier</h2>
        <p>Fort de notre expérience du terrain africain, IGS maîtrise les spécificités du transport routier régional :</p>

        <ul>
          <li><strong>Réseau de partenaires</strong> : Transporteurs fiables dans toute la sous-région</li>
          <li><strong>Gestion documentaire</strong> : Préparation complète des documents de transit</li>
          <li><strong>Traçabilité</strong> : Suivi GPS en temps réel de vos marchandises</li>
          <li><strong>Assurance</strong> : Couverture adaptée aux risques routiers</li>
          <li><strong>Solutions combinées</strong> : Maritime + routier pour optimiser vos coûts</li>
        </ul>

        <h2>Conseils pratiques</h2>
        <p>Pour réussir vos expéditions routières :</p>
        <ul>
          <li>Anticipez les délais en tenant compte des aléas possibles</li>
          <li>Assurez-vous que vos marchandises sont correctement emballées</li>
          <li>Vérifiez que tous les documents sont en règle avant le départ</li>
          <li>Optez pour un suivi GPS pour plus de tranquillité</li>
          <li>Choisissez un transitaire qui connaît les routes et réglementations locales</li>
        </ul>

        <h2>Perspectives d'avenir</h2>
        <p>L'Afrique de l'Ouest connaît une dynamique économique forte. Les investissements routiers se poursuivent, promettant des temps de transit réduits et des coûts optimisés. Le transport routier demeure un pilier essentiel du développement commercial régional.</p>

        <p>IGS reste votre partenaire de confiance pour tous vos besoins de transport routier en Afrique de l'Ouest. Contactez-nous pour étudier vos projets.</p>
      `
    },
    {
      id: 5,
      slug: 'gestion-stocks-entreposage-efficace',
      title: 'Gestion des stocks : les clés d\'un entreposage efficace',
      excerpt: 'Un entreposage optimisé garantit la sécurité de vos marchandises et accélère vos opérations. Nos conseils d\'experts.',
      category: 'Logistique',
      author: 'Fatoumata Camara',
      date: '28 Janvier 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1763752194641-3c5638aec65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBmcmVpZ2h0fGVufDF8fHx8MTc3MTIxMTQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      content: `
        <p>Une gestion des stocks efficace est cruciale pour toute entreprise impliquée dans l'import-export. Un entreposage bien organisé réduit les coûts, minimise les pertes et accélère la rotation des marchandises.</p>

        <h2>Les principes fondamentaux</h2>

        <h3>1. La méthode FIFO (First In, First Out)</h3>
        <p>Cette approche garantit que les premières marchandises entrées sont les premières sorties. Essentielle pour les produits périssables ou à durée de vie limitée, elle minimise les risques d'obsolescence.</p>

        <h3>2. L'optimisation de l'espace</h3>
        <p>Maximisez l'utilisation de votre entrepôt :</p>
        <ul>
          <li>Utilisez la hauteur disponible avec des rayonnages adaptés</li>
          <li>Créez des allées de circulation optimales</li>
          <li>Regroupez les produits par catégorie ou fréquence de rotation</li>
          <li>Réservez les emplacements accessibles aux produits à forte rotation</li>
        </ul>

        <h3>3. Le zonage stratégique</h3>
        <p>Divisez votre entrepôt en zones fonctionnelles :</p>
        <ul>
          <li><strong>Zone de réception</strong> : Contrôle qualité et enregistrement</li>
          <li><strong>Zone de stockage principale</strong> : Marchandises à rotation moyenne</li>
          <li><strong>Zone de picking</strong> : Produits à forte rotation</li>
          <li><strong>Zone d'expédition</strong> : Préparation et consolidation</li>
          <li><strong>Zone quarantaine</strong> : Produits en attente ou litigieux</li>
        </ul>

        <h2>Technologie et digitalisation</h2>

        <h3>Système de gestion d'entrepôt (WMS)</h3>
        <p>Un WMS moderne offre :</p>
        <ul>
          <li>Traçabilité en temps réel de chaque article</li>
          <li>Optimisation automatique des emplacements</li>
          <li>Réduction des erreurs de préparation</li>
          <li>Alertes sur les niveaux de stock critiques</li>
          <li>Reporting détaillé pour la prise de décision</li>
        </ul>

        <h3>Code-barres et RFID</h3>
        <p>Ces technologies accélèrent les opérations et éliminent les erreurs de saisie manuelle. Le RFID, bien que plus coûteux, permet un inventaire quasi instantané.</p>

        <h2>Sécurité et protection des marchandises</h2>

        <h3>Conditions de stockage</h3>
        <ul>
          <li><strong>Température et humidité</strong> : Contrôle constant pour les produits sensibles</li>
          <li><strong>Ventilation</strong> : Circulation d'air adéquate pour prévenir moisissures</li>
          <li><strong>Protection contre les nuisibles</strong> : Inspections régulières et mesures préventives</li>
          <li><strong>Sécurité incendie</strong> : Extincteurs, alarmes, et procédures d'évacuation</li>
        </ul>

        <h3>Sécurité physique</h3>
        <ul>
          <li>Vidéosurveillance 24/7</li>
          <li>Contrôle d'accès par badge</li>
          <li>Gardiennage professionnel</li>
          <li>Assurance tous risques</li>
        </ul>

        <h2>Optimisation des processus</h2>

        <h3>Inventaires réguliers</h3>
        <p>Ne vous contentez pas de l'inventaire annuel. Mettez en place :</p>
        <ul>
          <li><strong>Inventaire tournant</strong> : Une section différente chaque jour/semaine</li>
          <li><strong>Comptage ABC</strong> : Plus fréquent pour les articles  haute valeur</li>
          <li><strong>Contrôles aléatoires</strong> : Vérifications surprises pour détecter les anomalies</li>
        </ul>

        <h3>Formation du personnel</h3>
        <p>Un personnel bien formé est votre meilleur atout :</p>
        <ul>
          <li>Procédures de sécurité et manipulation</li>
          <li>Utilisation des équipements (chariots élévateurs, scanners)</li>
          <li>Gestion des systèmes informatiques</li>
          <li>Traitement des situations d'urgence</li>
        </ul>

        <h2>Les indicateurs de performance (KPI)</h2>
        <p>Mesurez régulièrement :</p>
        <ul>
          <li><strong>Taux de rotation des stocks</strong> : Combien de fois par an vous écoulez votre stock</li>
          <li><strong>Précision des inventaires</strong> : Écart entre inventaire physique et système</li>
          <li><strong>Taux de remplissage</strong> : Utilisation de l'espace disponible</li>
          <li><strong>Temps de préparation</strong> : Durée moyenne pour préparer une commande</li>
          <li><strong>Taux d'erreur</strong> : Proportion de commandes préparées incorrectement</li>
        </ul>

        <h2>Les services d'entreposage IGS</h2>
        <p>Nos installations à Conakry offrent :</p>
        <ul>
          <li>Entrepôts sécurisés sous douane et hors douane</li>
          <li>Zones climatisées pour produits sensibles</li>
          <li>Système WMS de dernière génération</li>
          <li>Personnel qualifié et formé aux normes internationales</li>
          <li>Assurance tous risques incluse</li>
          <li>Services de préparation de commandes et conditionnement</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Un entreposage efficace n'est pas une dépense mais un investissement qui se traduit par des économies substantielles, une meilleure satisfaction client et une compétitivité accrue.</p>

        <p>IGS met à votre disposition son expertise et ses infrastructures modernes pour optimiser votre chaîne logistique. Contactez-nous pour une visite de nos installations.</p>
      `
    },
    {
      id: 6,
      slug: 'partenariat-igs-chaine-logistique-guinee',
      title: 'Partenariat IGS : renforcer la chaîne logistique en Guinée',
      excerpt: 'Retour sur nos récents partenariats stratégiques qui améliorent notre offre de services et bénéficient à nos clients.',
      category: 'Actualités',
      author: 'Ibrahima Diallo',
      date: '24 Janvier 2026',
      readTime: '3 min',
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MTE4NjEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      content: `
        <p>Depuis sa création en 2023, Ibrahima Golden Services n'a cessé de développer son réseau de partenaires pour offrir à ses clients des services toujours plus performants et complets.</p>

        <h2>Nouveaux partenariats stratégiques</h2>

        <h3>Compagnies maritimes internationales</h3>
        <p>IGS a récemment signé des accords de partenariat avec plusieurs grandes compagnies maritimes, nous permettant de :</p>
        <ul>
          <li>Garantir de l'espace conteneur même en haute saison</li>
          <li>Proposer des tarifs compétitifs grâce à nos volumes consolidés</li>
          <li>Offrir des solutions sur les principales routes commerciales</li>
          <li>Assurer une fréquence de départs régulière</li>
        </ul>

        <h3>Réseau de transporteurs routiers</h3>
        <p>Notre alliance avec des transporteurs fiables en Afrique de l'Ouest nous permet d'étendre notre couverture géographique et de garantir des livraisons dans toute la sous-région.</p>

        <h3>Agents douaniers certifiés</h3>
        <p>Nos partenariats avec des commissionnaires agréés dans plusieurs pays facilitent les opérations transfrontalières et accélèrent les procédures de dédouanement.</p>

        <h2>Innovation technologique</h2>
        <p>IGS a également noué un partenariat avec un éditeur de solutions logistiques digitales, permettant à nos clients de :</p>
        <ul>
          <li>Suivre leurs expéditions en temps réel</li>
          <li>Accéder à leurs documents de transport 24/7</li>
          <li>Recevoir des notifications automatiques sur l'avancement de leurs dossiers</li>
          <li>Consulter l'historique complet de leurs opérations</li>
        </ul>

        <h2>Engagement envers la qualité</h2>
        <p>Tous nos partenaires sont sélectionnés selon des critères stricts :</p>
        <ul>
          <li>Certifications et conformité réglementaire</li>
          <li>Réputation et fiabilité prouvée</li>
          <li>Capacité à respecter les délais</li>
          <li>Standards de sécurité élevés</li>
          <li>Service client réactif</li>
        </ul>

        <h2>Bénéfices pour nos clients</h2>
        <p>Ces partenariats se traduisent par des avantages concrets :</p>
        <ul>
          <li><strong>Meilleure couverture</strong> : Solutions disponibles sur plus de destinations</li>
          <li><strong>Tarifs optimisés</strong> : Économies d'échelle répercutées sur nos clients</li>
          <li><strong>Fiabilité accrue</strong> : Respect des engagements de délais</li>
          <li><strong>Flexibilité</strong> : Plus d'options pour s'adapter à vos besoins spécifiques</li>
          <li><strong>Support 360°</strong> : Un interlocuteur unique pour toute votre chaîne logistique</li>
        </ul>

        <h2>Vision pour l'avenir</h2>
        <p>IGS continue de développer son réseau de partenaires stratégiques. Nous travaillons actuellement sur :</p>
        <ul>
          <li>Extension de notre réseau en Afrique Centrale</li>
          <li>Partenariats avec des compagnies aériennes cargo</li>
          <li>Solutions d'entreposage dans les pays voisins</li>
          <li>Technologies blockchain pour la traçabilité documentaire</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Ces partenariats renforcent notre position de leader du transit et de la logistique en Guinée. Ils illustrent notre engagement à fournir à nos clients des solutions toujours plus performantes et innovantes.</p>

        <p>Vous souhaitez bénéficier de notre réseau de partenaires ? Contactez nos équipes pour discuter de vos besoins logistiques.</p>
      `
    }
  ];

  // Trouver l'article correspondant au slug
  const post = blogPosts.find(p => p.slug === slug);

  // Si l'article n'existe pas, rediriger vers la page blog
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Articles recommandés (3 articles aléatoires différents de l'article actuel)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        // Copier le lien
        navigator.clipboard.writeText(url);
        toast.success('Lien copié dans le presse-papier');
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#232d37] via-[#232d37]/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-white"
          >
            <Breadcrumb items={[
              { label: 'Blog', path: '/blog' },
              { label: post.title }
            ]} variant="dark" />
            
            <span className="inline-block bg-[#E85E27] text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
              {post.category}
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime} de lecture
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div 
                className="blog-content text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-24 self-start space-y-8">
                {/* Share */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-[#232d37] mb-4 flex items-center gap-2">
                    <Share2 size={20} className="text-[#E85E27]" />
                    Partager l'article
                  </h3>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-3 px-4 py-3 bg-[#1877f2] text-white rounded-lg hover:bg-[#166fe5] transition-colors"
                    >
                      <Facebook size={20} />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-3 px-4 py-3 bg-[#1da1f2] text-white rounded-lg hover:bg-[#1a91da] transition-colors"
                    >
                      <Twitter size={20} />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center gap-3 px-4 py-3 bg-[#0a66c2] text-white rounded-lg hover:bg-[#094d92] transition-colors"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Share2 size={20} />
                      Copier le lien
                    </button>
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-gradient-to-br from-[#E85E27] to-[#c54d1e] text-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-white/80">Expert IGS</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/90">
                    Spécialiste en transit douanier et logistique internationale
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[#232d37] mb-2">Articles similaires</h2>
            <div className="w-20 h-1 bg-[#E85E27]"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/blog/${relatedPost.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#E85E27]/10 text-[#E85E27] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#232d37] mb-3 group-hover:text-[#E85E27] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#E85E27] font-semibold text-sm group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#232d37] to-[#1a2129] text-white rounded-2xl p-8 lg:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Besoin d'assistance ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Notre équipe d'experts est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets logistiques
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E85E27] hover:bg-[#d14d1a] text-white px-8 py-3.5 rounded-lg transition-colors font-medium text-base"
          >
            Contactez-nous
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Custom Styles for Blog Content */}
      <style>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #232d37;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #232d37;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .blog-content strong {
          color: #E85E27;
          font-weight: 600;
        }
        .blog-content a {
          color: #E85E27;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #d14d1a;
        }
      `}</style>
    </div>
  );
}