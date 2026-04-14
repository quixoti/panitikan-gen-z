export interface Chapter {
  id: number;
  title: string;
  originalTitle: string;
  summary: string;
  genZSummary: string;
  audioText: string;
  imageUrl: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Sa Ibabaw ng Kubyerta",
    originalTitle: "Kabanata 1: Sa Ibabaw ng Kubyerta",
    summary: "Naglalayag ang Bapor Tabo sa Ilog Pasig. Kasama rito ang mga makapangyarihang tao tulad ng Kapitan Heneral at si Simoun.",
    genZSummary: "Yung Bapor Tabo, parang '<i>slow-mo</i>' na <i>vlog</i> sa Ilog Pasig. Kasama sina Simoun (ang main <i>influencer</i> ng Heneral) at Donya Victorina. Pinag-uusapan nila paano gagawing '<i>aesthetic</i>' ang ilog, pero si Donya Victorina, nadidiri sa balot kaya ayaw sa <i>suggestion</i> ni Don Custodio na mag-alaga ng itik. <i>Vibes check</i>: Masyadong mapagmataas ang mga nasa taas ng Kubyerta.",
    audioText: "Kabanata isa: Sa Ibabaw ng Kubyerta. Ang Bapor Tabo ay naglalayag sa Ilog Pasig. Kasama sina Simoun, ang mayamang mag-aalahas, at ang mga opisyal ng pamahalaan. Pinag-uusapan nila ang pagpapalalim ng ilog. Si Simoun ay may radikal na mungkahi, habang ang iba ay may kani-kaniyang pansariling interes.",
    imageUrl: "https://images.unsplash.com/photo-1599052243765-a864d471550c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Sa Ilalim ng Kubyerta",
    originalTitle: "Kabanata 2: Sa Ilalim ng Kubyerta",
    summary: "Sa ilalim ng barko, nandoon ang mga estudyanteng sina Basilio at Isagani. Pinag-uusapan nila ang pagtatayo ng akademya para sa wikang Kastila.",
    genZSummary: "Sa baba naman ng barko, siksikan. Nandun ang ating mga '<i>main characters</i>' na sina Basilio (isang <i>med student</i> na malapit na maging <i>doc</i>) at Isagani (isang makata). Pinag-uusapan nila yung balak nilang school for Spanish, pero ang daming '<i>red flags</i>' sa mga matatanda. Nakilala nila si Simoun, na '<i>shady</i>' talaga ang dating. Sabi ni Isagani, ang tubig daw ay puwedeng maging apoy kapag uminit ang sitwasyon.",
    audioText: "Kabanata dalawa: Sa Ilalim ng Kubyerta. Sa ibaba ng barko, makikita ang mga karaniwang tao at ang mga estudyanteng sina Basilio at Isagani. Pinapangarap nilang makapagtatag ng paaralan para sa wikang Kastila, ngunit marami ang tumututol dito.",
    imageUrl: "https://images.unsplash.com/photo-1544654803-b69140b285a1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Ang mga Alamat",
    originalTitle: "Kabanata 3: Ang mga Alamat",
    summary: "Nagkuwentuhan ang mga pasahero tungkol sa mga alamat ng Ilog Pasig tulad ng Malapad-na-Bato at Doña Geronima.",
    genZSummary: "Nag-sharean sila ng mga '<i>scary stories</i>' at <i>legends</i>. Alamat ng Malapad-na-Bato, Doña Geronima, at San Nicolas. Si Simoun, puro '<i>hard truths</i>' ang banat. Nang mapag-usapan ang pagkamatay ng isang Ibarra sa lawa labintatlong taon na ang nakalilipas, namutla si Simoun. '<i>Canon event</i>' ba ito?",
    audioText: "Kabanata tatlo: Ang mga Alamat. Nagbahagi ang mga pasahero ng iba't ibang alamat ng Ilog Pasig. Dito rin nabanggit ang pagkamatay ng isang Guevarra o Ibarra labintatlong taon na ang nakararaan, na nagdulot ng pagkabalisa kay Simoun.",
    imageUrl: "https://images.unsplash.com/photo-1505333342129-9e67c8585675?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Kabesang Tales",
    originalTitle: "Kabanata 4: Kabesang Tales",
    summary: "Ang kuwento ni Kabesang Tales na inagawan ng lupa ng mga prayle. Ang kanyang anak na si Juli ay kailangang mamasukan bilang katulong.",
    genZSummary: "Meet Kabesang Tales. Siya ang '<i>grind king</i>' na nagbungkal ng lupa, pero '<i>scammed</i>' ng mga prayle na biglang nang-angkin ng lupa niya. Tinaas nang tinaas ang '<i>tax</i>' hanggang sa hindi na niya kaya. Dinakip siya ng mga tulisan, at si Juli (ang kanyang anak) ay kailangang mag-<i>sacrifice</i>. Benta ng alahas, pasok bilang katulong. <i>Sad vibes</i>.",
    audioText: "Kabanata apat: Kabesang Tales. Ipinakita rito ang kawalang-katarungan sa buhay ni Tales. Ang kanyang pinaghirapang lupa ay inagaw ng mga prayle. Upang matubos ang ama mula sa mga tulisan, ang anak niyang si Juli ay napilitang mamasukan bilang katulong.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    title: "Ang Noche Buena ng Isang Kutsero",
    originalTitle: "Kabanata 5: Ang Noche Buena ng Isang Kutsero",
    summary: "Umuwi si Basilio sa San Diego. Nakita niya ang kalupitan ng mga guardia sibil sa kutserong si Sinong.",
    genZSummary: "Umuwi si Basilio sa San Diego. Ang kutserong si Sinong, nakalimutan ang 'ID' (sedula) kaya binugbog ng mga guardia sibil. '<i>Cancelled</i>' ang <i>holiday mood</i>. Inisip nila si Bernardo Carpio na magliligtas daw sa mga Pinoy. Si Basilio, nakita si Simoun sa bahay ni Kapitan Basilio.",
    audioText: "Kabanata lima: Ang Noche Buena ng Isang Kutsero. Nasaksihan ni Basilio ang kalupitan ng mga guardia sibil sa isang kutserong walang dalang sedula. Sa gitna ng pagdiriwang ng Noche Buena, ramdam ang takot at hirap ng mga Pilipino.",
    imageUrl: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    title: "Si Basilio",
    originalTitle: "Kabanata 6: Si Basilio",
    summary: "Ang backstory ni Basilio kung paano siya nagsumikap at nakapag-aral sa tulong ni Kapitan Tiyago.",
    genZSummary: "<i>Glow-up story</i> ni Basilio. From '<i>broke</i>' to '<i>med student</i>'. Naalala niya yung '<i>trauma</i>' labintatlong taon na ang nakalilipas nung mamatay ang nanay niya. Pero dahil sa '<i>hustle</i>' at tulong ni Kapitan Tiyago, naging '<i>top student</i>' siya. Pangarap niya? Magpakasal kay Juli after graduation. <i>Manifesting</i>!",
    audioText: "Kabanata anim: Si Basilio. Isinalaysay ang pagsisikap ni Basilio mula nang siya ay maulila. Sa kabila ng hirap at pangungutya, nagtagumpay siyang makapag-aral ng medisina sa Maynila sa tulong ni Kapitan Tiyago.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 7,
    title: "Si Simoun",
    originalTitle: "Kabanata 7: Si Simoun",
    summary: "Nagtagpo sina Basilio at Simoun sa gubat. Natuklasan ni Basilio na si Simoun ay si Crisostomo Ibarra.",
    genZSummary: "<i>Big Reveal</i>! Nakita ni Basilio si Simoun na naghuhukay sa gubat. Turns out, si Simoun ay si Ibarra! May '<i>revenge arc</i>' si Simoun. Gusto niyang pabagsakin ang gobyerno. Inaya niya si Basilio, pero sabi ni Basilio, gusto lang niya ng '<i>simple life</i>'. Sabi ni Simoun, 'Walang mang-aalipin kung walang paaalipin.' <i>Real talk</i>.",
    audioText: "Kabanata pito: Si Simoun. Nagkaharap sina Basilio at Simoun sa gubat. Inamin ni Simoun na siya ay si Ibarra at nagbabalik upang maghiganti. Tinangka niyang hikayatin si Basilio na sumapi sa kanyang himagsikan.",
    imageUrl: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 8,
    title: "Maligayang Pasko",
    originalTitle: "Kabanata 8: Maligayang Pasko",
    summary: "Isang malungkot na Pasko para sa pamilya ni Tales. Napipi si Tandang Selo sa sobrang pighati.",
    genZSummary: "Hindi '<i>happy</i>' ang Pasko ni Juli. Walang himalang nangyari, kaya kailangan na niyang mag-alila. Si Tandang Selo naman, sa sobrang '<i>stress</i>' at '<i>mental breakdown</i>', napipi siya. <i>No words, just pain</i>.",
    audioText: "Kabanata walo: Maligayang Pasko. Sa halip na katuwaan, kalungkutan ang dinala ng Pasko. Si Juli ay nagsimulang mamasukan, at ang kanyang lolo na si Tandang Selo ay tuluyang nawalan ng kakayahang makapagsalita dahil sa tindi ng sama ng loob.",
    imageUrl: "https://images.unsplash.com/photo-1463133202521-4d3725f0e159?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 9,
    title: "Ang mga Pilato",
    originalTitle: "Kabanata 9: Ang mga Pilato",
    summary: "Ang mga reaksyon ng mga taga-bayan sa nangyari sa pamilya ni Tales. Marami ang naghuhugas-kamay.",
    genZSummary: "<i>Toxic trait</i> ng mga taga-bayan: mahilig mag-<i>gossip</i> (<i>tea</i>). Sinisisi nila si Tales sa pagkapipi ng tatay niya. Si Hermana Penchang, '<i>judgmental</i>' kay Basilio, tinawag pang demonyo. Si Tales naman, '<i>quiet</i>' lang pero puno na.",
    audioText: "Kabanata siyam: Ang mga Pilato. Tulad ni Pontio Pilato, naghugas-kamay ang mga opisyal at prayle sa sinapit ni Tales. Nagpatuloy ang tsismis sa bayan, habang ang pamilya ni Tales ay patuloy na nagdurusa.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 10,
    title: "Kayamanan at Karalitaan",
    originalTitle: "Kabanata 10: Kayamanan at Karalitaan",
    summary: "Tumuloy si Simoun sa bahay ni Tales. Kinuha ni Tales ang baril ni Simoun at naging tulisan.",
    genZSummary: "Tumuloy si Simoun sa bahay ni Tales. Pinakita ni Simoun ang kanyang mga '<i>luxury jewelry</i>' at ang kanyang '<i>glock</i>' (<i>revolver</i>). Habang ang iba ay bumibili ng alahas, si Tales ay may ibang plano. Kinuha niya ang baril ni Simoun at naging tulisan. May iniwan siyang <i>note</i>: 'Tales'. Pinatay niya yung prayle at yung nang-agaw ng lupa niya. '<i>Violence was chosen</i>'.",
    audioText: "Kabanata sampu: Kayamanan at Karalitaan. Sa gitna ng pagpapakitang-gilas ni Simoun ng kanyang mga mamahaling alahas, kinuha ni Tales ang rebolber ni Simoun. Ginamit ito ni Tales upang maghiganti sa mga taong umapi sa kanya, at siya ay sumapi sa mga tulisan.",
    imageUrl: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=1000"
  }
];
