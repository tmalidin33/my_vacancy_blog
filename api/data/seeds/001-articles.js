exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('articles')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('articles').insert([
                {
                    id: 1,
                    title: 'My first Article',
                    subtitle: 'Subtitle',
                    genre: 'Fiction',
                    desc:
                        'Foi quiconque accoudees eux lui detourner agreerait. Guerre ras hetres moi sortir des. Ras portieres fusillade construit seulement suspendue effrayant roc par eau. Drape indus mur par frire forme linge essor. Il suspendue adjudants rappelles tu existence. Suspendue va petillent demeurent tangibles epaissies un fabriques. Nuit pris donc quel gare bon uns nous. Survivants bouquetins remplirent bon construits car miserables par peu. Donnent ah charger bambous laissez croisee qu saurais et du. Sonnaient tranchees fit petillent moi carabines ifs aux. ',
                },
                {
                    id: 2,
                    title: 'My second Article',
                    subtitle: 'Subtitle',
                    genre: 'Fiction',
                    desc:
                        'Partout importe sonnent prelude reciter fer les ouvrent. Comprendre oh remplirent decharnees la la singuliers he tristement. Tot legerement ici paraissait admiration. Notre divin ici leurs somme ans voici tours. Chaclosah cravaches ah sa bourreaux seulement citadelle ii il somptueux. Mats bois vent vlan nos faux pied pic. Sang tous ames or vlan et pris. Senti subit hisse ville qu ne je decor. ',
                },
                {
                    id: 3,
                    title: 'My third Article',
                    subtitle: 'Subtitle',
                    genre: 'Fiction',
                    desc:
                        'et empecher son defoncat feerique gravures crispent est. Historique aux eue infiniment remarquait que vit. Ici nez tout robe bois unir nid sais sent. Non donnent extreme pic bientot ici. Peu poussaient arriverent consentiez sol ses. Par uns vrai long sous dela ont. Oh il depeches recouvre en lampions respirer campagne collines le. Parlaient oh au repousser demeurons fusillade gaillards du. Compassion enveloppes je au primeveres. Ah il ou delire yeuses quelle.',
                },
            ]);
        });
};
