import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Post } from "../types/Post";
import api from "@/api";
import LoadingPage from "./LoadingPage";
import { Button } from "@/components/ui/button";

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        api.get(`/posts/${id}`).then((res) => setPost(res.data));
    }, [id]);

    if (!post) return <LoadingPage />;

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Link to={"/"}>
                <Button className="absolute top-10 left-16">Go back</Button>
            </Link>
            <h1 className="text-5xl font-bold text-center">{post.title}</h1>
            <p className="max-w-3xl mx-auto text-lg text-center text-muted-foreground">
                {post.description} Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatum delectus eligendi quidem iste,
                tenetur fugit deleniti rerum inventore illum eum enim tempora
                cumque harum incidunt provident illo. Consectetur, quas eius!
            </p>
            <p className="my-2">{post.author}</p>
            <img
                className="object-cover w-full max-h-[600px] border rounded-xl"
                src={post.image}
            />
            <div className="my-12 text-lg">
                {post.content}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sit eos ipsam eaque consequatur, aliquid qui alias
                eveniet enim veniam atque, quis dignissimos voluptate mollitia
                laborum, deleniti harum. Cupiditate, id! Aperiam ipsum nisi
                incidunt soluta provident aut? Libero cumque natus, dolorum in
                ab ut, corrupti non magnam deserunt quibusdam tempora qui dicta
                ducimus odio eum aspernatur eos at saepe ratione? Totam
                architecto perferendis, error ut quasi voluptatem a repudiandae
                id necessitatibus vero, soluta non, provident tempora tempore
                iure natus sapiente ipsum odit. Veritatis dicta placeat
                doloribus ea modi provident hic. Explicabo velit quidem
                provident incidunt fuga hic, nulla, voluptas totam officiis
                repudiandae nihil ducimus voluptate doloribus? Earum nostrum cum
                a odit inventore vel similique, iusto itaque doloremque modi,
                voluptas quaerat? Placeat sunt, odit rerum qui iusto facere nisi
                nobis officia expedita dolor, autem consequatur. Dolore mollitia
                repudiandae nostrum quo dolorum. Sapiente repellat obcaecati qui
                autem aliquid? Dolores totam alias enim. Nesciunt veritatis
                sequi temporibus sint, excepturi possimus at amet facilis.
                Dolorem ipsum aut cumque optio dolores labore necessitatibus
                temporibus delectus corrupti, quisquam repellat doloribus. Quo
                dolores quaerat quos odio similique. Dolore placeat suscipit
                aperiam, vel recusandae aliquid numquam iure earum illum fuga
                doloribus cum necessitatibus laborum laboriosam eos? Ipsa
                aperiam harum, porro consectetur quasi maxime assumenda dolorem
                ex similique eius. Quis consectetur alias omnis recusandae, modi
                magnam obcaecati ratione voluptatum doloremque dolorem illum
                consequuntur saepe soluta tenetur pariatur, iste laudantium
                cupiditate totam aperiam dolore fugit quos sequi eveniet quod?
                Autem? Aperiam ducimus optio, ab sapiente mollitia fugiat ullam,
                temporibus beatae, et doloremque asperiores dolore sunt nesciunt
                molestias perspiciatis doloribus obcaecati illum! Id possimus
                est ut at facilis, dolorem eaque ab. Ex, perspiciatis. Nihil
                fuga vero quod, repellat aspernatur aliquid praesentium odio
                animi, veritatis voluptate consequuntur asperiores natus ipsum
                neque illum eveniet quisquam ab assumenda reprehenderit cumque
                repellendus! Voluptate, doloribus ea! Aliquid dolorum sunt eum?
                Est ut doloremque possimus hic impedit, obcaecati deleniti
                soluta accusantium maxime dolorem sit ad quo praesentium et
                corporis cum debitis ipsa ea quod nemo laboriosam architecto.
                Officiis, incidunt? Eligendi omnis ea rerum amet eum esse,
                numquam quas, doloribus placeat quisquam molestias veritatis
                tempora, excepturi dolorem. Veniam consequuntur perspiciatis
                magni asperiores optio debitis excepturi dolore iure facilis.
                Quisquam, debitis quos veniam aspernatur quibusdam rem maiores
                inventore in est doloribus quas asperiores perferendis quod
                adipisci saepe. Iusto at corrupti asperiores? Eaque, ullam
                aspernatur. Impedit similique numquam quis veniam? Perspiciatis,
                incidunt? Ex est labore animi expedita inventore quo a magnam
                vel fuga beatae voluptatem accusantium natus obcaecati cumque
                corrupti accusamus sunt nisi quod veritatis laborum illo, dolore
                voluptas. Ullam? Veritatis tempora a assumenda, repellendus nisi
                quidem nam vero amet minima distinctio hic consequuntur
                asperiores vitae sint. Veritatis, perspiciatis nesciunt
                voluptatem architecto facilis officia ad! Placeat voluptas
                ducimus pariatur non! Reprehenderit, provident! Sapiente
                laudantium consequatur, aliquid, nesciunt harum itaque, sunt eos
                quibusdam dolores soluta earum quia neque numquam qui dolorum
                aliquam quod animi. Ipsam earum quas explicabo unde, iure neque!
                Ipsam nulla nam id molestias autem a voluptatum. Quis commodi
                cum illum alias eaque beatae similique, ut porro! Quis facere
                repudiandae ut iusto cum laudantium placeat sit? Quidem, qui
                maiores? A placeat nobis nisi labore deleniti quo dignissimos at
                aut sunt iusto, quam, doloribus cum maiores mollitia atque vel
                error reprehenderit ratione laboriosam. Tenetur incidunt
                possimus minima quas dolorem odio. Neque, dolor inventore! Autem
                consectetur iste repudiandae placeat voluptas dolore, fugit
                obcaecati sequi repellendus rerum reprehenderit odit neque nemo.
                Repellat iusto, sapiente enim necessitatibus deleniti dolorum
                maiores deserunt libero sed. Voluptates, praesentium fugiat
                natus eaque doloremque maiores quam quas harum, quasi quod nihil
                itaque deleniti architecto ipsam nostrum in excepturi facilis.
                Modi quos sunt vitae eaque unde rerum, accusantium nihil? Illo
                explicabo praesentium minima sit officiis, non rem odio magnam
                dignissimos nam alias. A ea, dicta iusto, hic ullam quidem omnis
                expedita ad sint, perferendis accusamus soluta temporibus fuga
                dolores. Odio officia culpa quaerat similique, ea aperiam sint,
                autem numquam deserunt, ut accusamus delectus. Doloremque fugiat
                quo incidunt quae explicabo eveniet labore nobis. Rem optio,
                ipsa quod culpa minus molestias? Iure molestiae aut ad tempore
                laboriosam officiis fuga repellat sapiente eum. Dicta, aliquam.
                Asperiores tempore, doloribus eligendi ipsam culpa earum modi
                mollitia explicabo molestiae saepe excepturi similique nesciunt
                nobis aliquam. Velit, cupiditate maxime veniam sequi suscipit
                excepturi, rerum delectus veritatis facere quos dolorem
                blanditiis ipsa cumque! Pariatur rerum animi laboriosam.
                Reiciendis itaque quo vero deleniti exercitationem inventore nam
                error excepturi. Perferendis, voluptas alias. Vitae provident
                illum adipisci? Reiciendis distinctio, exercitationem nesciunt
                asperiores possimus illum cumque enim tempora. Harum
                reprehenderit impedit ducimus adipisci, deserunt possimus cumque
                quisquam a voluptates reiciendis rerum. Natus harum blanditiis
                vitae quis error ratione quas architecto commodi. Doloremque
                architecto aliquam repellat, rem illum voluptatem accusamus
                ipsum facere nesciunt pariatur ex excepturi cumque delectus
                nulla maxime nemo. Asperiores. Dignissimos nam ratione iure
                enim! Iure, nemo quos ab ea adipisci sapiente iste. Mollitia
                dolorem iure officiis fugit, doloribus porro debitis! Voluptate
                dicta optio voluptatum ullam adipisci ipsa recusandae
                voluptates. Vitae reprehenderit minus sapiente aspernatur. Ea
                molestiae doloribus eum harum autem, laborum, earum nisi veniam
                possimus deserunt sint a? Quasi excepturi facilis dicta ab
                vitae? Fugiat aliquam ducimus blanditiis ab. Temporibus vero
                aliquam esse soluta cumque eius quam, voluptates fugiat a, est
                omnis harum nemo quas possimus obcaecati rerum ab facere!
                Commodi quas praesentium cupiditate reprehenderit magni totam
                voluptas. Vitae? Mollitia necessitatibus iure ad. Inventore
                nostrum magnam aliquam facere dolores repellendus, minima velit
                incidunt nobis, cupiditate autem voluptates tenetur expedita,
                esse neque? Et culpa illum natus ex, voluptatibus mollitia
                quibusdam! Eligendi, asperiores tempore officiis hic aliquid
                maxime labore minus. Molestias mollitia adipisci repellendus
                exercitationem vel, quaerat sequi assumenda laudantium labore
                minima. Inventore veniam iste mollitia odio nam sit recusandae
                blanditiis? Fugiat corrupti soluta recusandae, explicabo illum
                ratione aliquid officia, itaque quasi quis temporibus excepturi
                veritatis, cum repellendus optio id! Minima, hic a tempore sit
                doloremque voluptatum quibusdam accusantium itaque deserunt.
                Corrupti incidunt consequuntur nam vero iusto tenetur adipisci
                temporibus itaque culpa, aliquam accusamus veritatis repellat!
                Quisquam odit culpa eligendi cumque dolorem aperiam blanditiis
                ad molestias nam neque, excepturi, accusantium iusto? Ducimus,
                hic? Delectus odit voluptatem animi porro sunt, rem optio ea,
                distinctio ab sint aliquid ipsam? Tempore sequi dolore qui, id
                tenetur aperiam repellat dolorem similique alias, explicabo
                reiciendis harum? Cum sapiente aliquid quam impedit ipsa
                provident voluptatibus. Ipsum quo voluptate distinctio, saepe
                asperiores amet quibusdam atque obcaecati harum at excepturi.
                Magnam ratione explicabo animi. Illo eaque molestiae corrupti
                architecto. Odio, quae! Dolore, ullam facere quae magni ex nihil
                voluptatum corporis sit similique iste nobis animi aperiam
                eligendi minus illo saepe neque ratione eius nulla. Quas
                voluptate quidem commodi. Repudiandae. Aliquam non dicta,
                tempora ex itaque delectus sequi sunt perspiciatis optio nisi
                incidunt, molestiae fugit eaque! Facere culpa aperiam nulla
                maxime dicta voluptatibus, iure rem error, sequi similique,
                eaque tempora? Magnam suscipit molestias deserunt repudiandae
                earum temporibus quaerat a obcaecati excepturi assumenda iusto
                rerum dolorem recusandae laudantium, corrupti odio quasi optio
                eligendi architecto in consequatur quos nostrum aliquam odit?
                Voluptatem! Hic rem dignissimos quia modi perspiciatis
                doloremque, ipsum optio. Atque, nulla architecto quidem laborum
                praesentium eius maxime rem? Veritatis possimus aut sunt unde
                voluptate quis dicta doloremque blanditiis nostrum minus!
                Facilis quidem neque nihil odio pariatur ea itaque corporis,
                porro commodi rem perferendis optio tenetur harum praesentium
                incidunt accusamus quibusdam est consectetur expedita
                dignissimos debitis aliquid minima! Illum, quia distinctio?
                Quas, est! Tempore alias animi voluptatem sit id, voluptatum
                ipsum doloribus facilis magnam consequatur accusantium odio
                beatae exercitationem facere unde nulla aut ducimus, suscipit
                velit natus. Ipsum nobis esse pariatur! Asperiores saepe nemo
                vero et, repudiandae blanditiis beatae odio minima ducimus alias
                sunt non inventore delectus unde facere? Tenetur ipsum
                distinctio eius similique molestiae, explicabo tempore vel
                dolorum nihil perspiciatis? Temporibus velit voluptatum quod
                repellendus? Ea perspiciatis voluptate itaque iusto dolore?
                Suscipit quisquam nam, nisi incidunt rerum adipisci dolorum
                provident nostrum delectus, ipsum nulla illo excepturi
                architecto quas eius necessitatibus? Optio aperiam nulla, quod,
                expedita laudantium quas in provident fugiat tempora nam
                dolorem. Nostrum facere delectus obcaecati iure error,
                repudiandae corrupti eaque qui earum fuga placeat doloremque
                blanditiis explicabo. Reiciendis? Sunt voluptate, at cum minima
                suscipit beatae ex. Odio voluptas veritatis fugiat autem,
                aliquid porro velit officia blanditiis consequuntur vitae
                reiciendis, voluptatibus animi libero assumenda dolor sunt esse
                voluptatum perspiciatis? Eos temporibus possimus accusantium
                quisquam odio perspiciatis. Enim sunt amet perferendis sequi
                vitae, eum consectetur voluptatem ducimus harum corrupti quas
                deserunt aut officia optio delectus error adipisci repudiandae
                quis? Cumque. Numquam corporis sequi nisi atque, eum cum
                necessitatibus, autem sed iste quae consectetur soluta delectus
                non ex at nostrum dolore voluptates, quod deleniti eligendi
                quidem optio facere. Quia, amet vitae. Dolores nisi dignissimos
                libero voluptate molestias deserunt iusto, vitae amet est facere
                omnis, obcaecati unde quam cumque odio hic dolore fuga, sequi
                ducimus perspiciatis provident eaque sit. Iure, hic aspernatur.
                Fugit in quos quidem enim nostrum soluta necessitatibus, nemo
                repellendus, tempore exercitationem voluptas ducimus, veritatis
                nisi mollitia explicabo quae quia reprehenderit architecto ad
                eligendi. Itaque ut aut commodi aspernatur porro? Aut laborum ea
                odio nisi obcaecati reiciendis cumque quos libero sint, aliquam
                sapiente alias. Quod voluptatibus neque laudantium obcaecati
                molestias voluptatum, iusto reiciendis nobis, ratione esse culpa
                adipisci quae excepturi. Nostrum, voluptatibus dolor distinctio
                magnam officiis ratione blanditiis reprehenderit aliquam vel
                natus delectus doloremque ipsa est nobis laborum saepe
                perferendis accusantium. Libero ea veniam dolor eos blanditiis
                expedita, harum asperiores! Perferendis rem libero velit eaque
                consectetur provident laboriosam voluptas recusandae fugiat quod
                blanditiis, neque in ullam. Quia similique reiciendis enim
                aperiam autem quis doloribus. Blanditiis magnam fugiat et
                doloremque assumenda. Maiores nulla omnis consequuntur ipsam,
                quis inventore aspernatur voluptas iure reiciendis consequatur
                vero! Quia ratione quos molestias labore nostrum doloribus nihil
                autem, perferendis maiores numquam odit quisquam corporis, ipsum
                perspiciatis? Tempore nobis odit perspiciatis voluptatibus
                exercitationem doloremque voluptatum nulla, ea impedit at
                voluptates error blanditiis aut magnam placeat! Excepturi dolor
                ullam aperiam quos temporibus. Explicabo laborum totam non autem
                animi. Ut omnis sapiente sit, et exercitationem quis repellendus
                officiis sequi quidem iste, nostrum, aliquid tempora voluptatem
                voluptatum pariatur minus aperiam optio autem animi beatae!
                Voluptatem soluta sit blanditiis vero obcaecati. Similique
                consequuntur dolores eaque consequatur repellendus consectetur
                fuga, deserunt ex animi voluptate omnis vel eveniet quas
                praesentium ratione, deleniti iure commodi sunt assumenda
                dignissimos possimus? Quas eius dignissimos reiciendis dolore.
                Non, quas, hic dignissimos a repellat officia aut obcaecati,
                aliquid aperiam quidem deleniti consequatur blanditiis facere
                labore nam reiciendis! Nulla aliquam deserunt officiis labore
                dicta soluta blanditiis placeat laboriosam ea. Incidunt
                accusamus autem quas est eum iure molestiae excepturi ullam
                error mollitia sapiente quisquam eius quis rerum recusandae
                facilis maiores nemo vitae, nam unde eaque repudiandae. Atque
                adipisci eaque natus! Corrupti, veritatis quia, vitae cum et
                optio nesciunt, tempora ipsa quod quam illo expedita blanditiis?
                Labore in aliquam ea, dignissimos velit, laboriosam maxime
                libero ipsa cum nihil, voluptatem magni atque? Eligendi,
                ducimus. Voluptatem sint, tenetur fuga, perferendis consectetur
                voluptatum aliquam similique nam incidunt nostrum repudiandae ex
                quisquam ratione, natus magni sed quas. Voluptatem repellat,
                unde numquam doloremque corrupti culpa aperiam? Suscipit veniam
                quisquam adipisci nostrum fugiat delectus hic laudantium rem
                voluptates beatae! Veniam modi nulla aut, alias vitae odit,
                voluptate a rem in corporis soluta neque magnam magni. Aut,
                quibusdam. Doloremque iste repellat facere. Eius harum maxime a
                ducimus. Ut esse non natus officiis modi suscipit earum illum
                assumenda nam obcaecati facilis atque, enim dicta et vero
                molestiae similique nobis? Natus cum in quo autem, sint
                necessitatibus laboriosam vel dolorem omnis velit voluptate
                dignissimos maiores, qui unde, architecto laborum mollitia modi
                odit harum libero rem recusandae ipsum reprehenderit. Placeat,
                ipsam? Cum vero harum, eaque quibusdam necessitatibus corporis
                eius illum incidunt aperiam quo quod consectetur hic quidem quis
                dicta labore. Vero debitis adipisci nesciunt officiis sint ut
                consequatur ea itaque facilis! Recusandae aliquam enim dolorum
                nihil quia et consequuntur, dignissimos dicta saepe doloribus,
                suscipit adipisci, provident vitae. Nesciunt, quas? Porro libero
                accusamus ea dolorem recusandae ipsam et tempora saepe possimus
                maiores. Necessitatibus accusamus cum at quod beatae dolorum
                delectus voluptatibus quo, recusandae voluptatem illum
                consequuntur quas dignissimos numquam aspernatur facere
                sapiente? Eum, earum numquam! Fugiat dolores, eos tenetur
                possimus dolor voluptatibus! Dolores iusto quod, recusandae unde
                nemo perferendis laudantium, sint enim repellat quia, ut
                praesentium. Ut autem debitis quasi a cumque illo quas fuga iste
                impedit odio, culpa accusamus perspiciatis expedita? Ipsam
                eveniet sit labore quod quas? Numquam aut consectetur earum sint
                sit nisi commodi repellat libero, asperiores ea quos soluta qui
                ex quisquam eligendi accusamus, nulla laborum doloribus, quod
                saepe? Aperiam, eum cumque minus aspernatur, saepe quod
                molestias autem recusandae fugiat nihil reprehenderit. Maiores,
                ab ipsa expedita, eveniet optio asperiores quae atque dicta
                aliquid aspernatur sequi. Totam fugiat dignissimos animi.
                Sapiente optio dolorum laboriosam debitis, ab provident quae
                beatae dicta, corporis voluptatibus enim nulla velit ipsum, nisi
                rem numquam non esse iusto obcaecati? Modi deleniti animi aut
                voluptates. Ipsum, recusandae. Quo ratione veritatis asperiores
                debitis eveniet alias sit dolorem nihil possimus dolores
                perferendis, recusandae aut modi mollitia quod corporis ipsum?
                Quisquam minima cumque natus dicta, exercitationem impedit
                accusamus ratione excepturi. Ad excepturi vel sint? Quam minus
                sed iusto nisi quas? Accusamus maiores placeat ex explicabo
                odio. Error, mollitia veritatis, ab delectus hic cupiditate
                deleniti unde sequi id quo odio beatae. Provident cum dolor
                blanditiis vitae aperiam mollitia aliquam. Eius blanditiis,
                architecto atque dicta ullam itaque commodi natus aperiam iste
                repellat esse, distinctio quisquam voluptatibus dolorem dolor.
                Asperiores nisi error corrupti. Expedita veniam ratione dolore
                minus itaque? At provident perferendis neque hic inventore
                voluptatum tempore dignissimos ab, distinctio consequuntur vero
                itaque tempora, enim, doloribus unde voluptatibus ut aperiam
                quasi quod esse. Explicabo animi labore est amet quas rem id ut
                modi voluptates ipsa quibusdam in repellendus molestias eum
                quia, debitis atque? Veritatis quis quam cum minus provident aut
                vero alias adipisci. Iusto, rerum ut repellendus consequuntur et
                explicabo, eveniet maiores voluptas magnam modi ducimus aut?
                Illo quae placeat laudantium distinctio porro nemo doloribus
                possimus illum, voluptatem nostrum a aspernatur harum voluptate?
                Nihil dolore optio deserunt vel maxime nulla aspernatur nisi
                esse libero similique doloribus at voluptate, hic ut ab sunt.
                Neque, possimus animi. Nobis cum adipisci soluta earum sint
                natus rerum. Tenetur maxime officiis accusantium nulla, omnis ad
                veritatis nostrum repudiandae similique. Excepturi eos, hic ab
                maiores harum praesentium aut quia amet voluptatibus iusto cum
                doloremque illo, quis laudantium? Laudantium, vel? Quis, et
                repellat. Alias voluptas quam veniam exercitationem consequatur
                fugit iste eius cumque omnis necessitatibus! Nemo labore
                exercitationem ipsam? Voluptatum est voluptates debitis et!
                Inventore cum natus iusto quisquam quibusdam. Possimus in ab
                quidem quas placeat. Neque vel, eius deserunt omnis sed ratione
                quos amet magnam rem. Quam accusamus sed suscipit veniam error
                natus corporis hic ipsam! Facilis, magnam voluptate! In
                excepturi amet atque, rem veniam cumque nihil sit accusantium
                quos, iste iusto! Perspiciatis, dolore cupiditate! Voluptatum
                error labore et quibusdam itaque, doloremque repellendus illo
                rerum architecto laboriosam optio culpa! Sed itaque commodi
                expedita praesentium facere laudantium, ipsum deserunt molestias
                pariatur, sequi nostrum id accusamus laborum iusto eius? Eum
                voluptatem dignissimos consequatur nihil distinctio architecto
                pariatur? Suscipit impedit maiores laborum. Iure voluptatibus
                necessitatibus reiciendis distinctio nam in, ipsa ex nihil
                aliquid! Nisi laudantium quaerat recusandae ut rem, ipsam vel
                esse aperiam fugiat ad maxime voluptate possimus vero. Magnam,
                explicabo cumque! Nesciunt voluptatibus commodi dolorem, illo
                labore magni quidem delectus officia aliquid, et fugit velit
                autem dolor? Illo qui maiores molestias maxime, fugiat, impedit
                ea nemo nobis ex praesentium eaque asperiores. Voluptates
                possimus consectetur dolor reprehenderit eveniet suscipit nobis,
                numquam soluta illum minima natus atque blanditiis, aliquam rem
                minus quod cum iusto veniam expedita repellat repellendus!
                Consectetur quidem inventore quaerat deleniti. Explicabo aut
                perspiciatis necessitatibus, soluta earum vel aliquam qui
                placeat ad nemo voluptatum ex voluptatem nulla asperiores
                laudantium ratione. Inventore numquam ipsam voluptate aut
                ratione nihil mollitia nam eligendi accusamus. Culpa harum
                deleniti quidem tempore dignissimos libero voluptatem ullam
                perferendis debitis, deserunt omnis, sit earum mollitia quos
                magni dicta rerum laboriosam blanditiis repellendus. Quam eos
                illo dolorem dolores molestiae assumenda? Nulla adipisci dolor
                facere minima sed atque nesciunt inventore ab eum quam nobis
                alias, cum repudiandae voluptates assumenda iusto, aperiam quis,
                quod a! Reiciendis pariatur ducimus amet, dolores facere quod?
                Rerum quis magnam voluptate, quia quod error ipsum repellat
                ratione eum cum a reprehenderit. Nam temporibus quibusdam
                consectetur reprehenderit consequuntur possimus sapiente. Fuga,
                consequuntur ut obcaecati vitae voluptas odio possimus?
                Assumenda consequuntur deleniti quis debitis tempora nulla minus
                praesentium libero beatae molestias, voluptas sint voluptates
                perspiciatis eligendi quasi ab, ipsum esse nobis. Eos reiciendis
                repellendus recusandae deleniti. Doloribus, accusamus eligendi.
                Doloribus molestiae, quasi magnam dolorum provident hic
                similique, quae quos excepturi exercitationem earum tempora.
                Perferendis recusandae laudantium eius aspernatur exercitationem
                ex eos ratione voluptates, atque omnis officia quas quo
                temporibus. Quae molestias illum nihil inventore optio. Fugiat
                autem assumenda ad commodi rem mollitia voluptatibus. Dolore
                ullam excepturi aliquam deserunt eligendi laboriosam, nam minus
                enim porro tempore culpa fuga incidunt obcaecati! Cupiditate,
                fugit deserunt? Impedit odio inventore ad quibusdam magni
                recusandae esse error facilis commodi delectus quod, molestiae,
                hic nihil cumque dolorum vitae maxime dicta. Consequatur,
                consectetur! Nobis voluptates incidunt temporibus! Ipsa,
                placeat. Veniam, corporis rerum? Ab accusantium magni impedit
                harum aliquam! Incidunt provident non, cumque at repellat veniam
                soluta, dicta recusandae ducimus magni molestiae in labore
                voluptas, aspernatur modi qui. Voluptatum qui, officia eius
                totam excepturi deleniti minus animi dolorem quos tenetur labore
                unde iure in fuga ipsam repellat dolore atque commodi
                consectetur molestias ex voluptate soluta? Necessitatibus, iste
                ullam! Saepe itaque quis id unde aliquid repudiandae
                necessitatibus perferendis eius, aut ab inventore ut, labore
                minus eaque, pariatur laboriosam. Impedit esse adipisci voluptas
                atque id quis perferendis veniam nobis minima. Maxime,
                doloremque! Accusantium dignissimos, saepe maiores, ex alias
                odit quisquam excepturi accusamus, eligendi quis praesentium
                quod. Voluptas, officiis, eius tempore incidunt officia
                molestias animi numquam, laboriosam praesentium porro nulla
                impedit! Ipsa, quibusdam illo. Aspernatur, libero! Distinctio
                adipisci earum modi odio magnam incidunt debitis dicta
                perferendis qui ea, pariatur repellat inventore molestias
                quibusdam, ducimus officia sequi dolorem unde, voluptas
                voluptatem vitae! Reiciendis commodi neque doloribus porro
                fugiat ex, cupiditate voluptatibus odit corrupti harum vel
                pariatur tempore consectetur? Nobis provident, distinctio
                blanditiis iste dolorum excepturi enim. Aut, illum. Ea
                accusantium libero eum! Nihil, sapiente voluptate explicabo
                maxime deserunt ex dolorum magni quaerat blanditiis qui?
                Dolorem, numquam. Ex quam impedit eveniet hic quas eum labore
                fugit blanditiis? In eligendi placeat distinctio nesciunt saepe!
            </div>
        </div>
    );
}
