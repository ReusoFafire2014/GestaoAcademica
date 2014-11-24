<h1>Módulo de Patrimônio</h1>
<h2>Equipe:</h2>
<p>José Augusto, Filipe Torres e Lucas Barbosa</p>
<h2>Objetivo do módulo</h2>
<p>gerenciar os bens comprados pela instituição de ensino</p>
<h2>Resultados</h2>
<ul>
<li>Foi criado um CRUD completo com 3 páginas: Consulta, Cadastro e Alteração. A exclusão é feita na página de consulta</li>
<li>Os dados são guardados no Local Storage do navegador</li>
<li>Utilizamos a biblioteca Bootstrap para a interface de usuário e fizemos uma validação básica dos formulários utilizando o plugin Boobtstrap Validator.</li>
</ul>
<h2>Questionário</h2>
<p><strong>O que é reuso de software?</p></strong>
<p>É o processo de incorporar em um novo produto de software: códigos, especificações de requisitos e projeto ou planos de teste que foram gerados em produtos anteriores, ou seja, é reusar ou reaproveitar o tudo o que foi desenvolvido em esforços anteriores para não se ter retrabalho, e consequentemente, obter mais rapidez e êxito no produto seguinte.</p>
<p><strong>Quais os benefícios esperados do reuso de software?</p></strong>
<p>Alguns dos aspectos são:</p>
<ul>
<li>Ajustes de bugs: como os códigos são reutilizados, então os bugs são identificados e corrigidos.</li>
<li>Aumento da produtividade: o trabalho aplicado em outros produtos de software é reaproveitado, dessa forma não é necessário fazer todo o código do zero, ganhando-se mais tempo;</li>
<li>Redução de custos: como vai ser gerado menos código, consequentemente serão necessárias menos pessoas para o desenvolvimento do produto de software reduzindo os custos.</li>
</ul>
<p><strong>3.	Diferencie Reuso Ad Hoc de Reuso Sistemático</p></strong>
<p>No reuso Ad Hoc a iniciativa para a aplicação do reuso é de iniciativa dos desenvolvedores, não é definido pela empresa. Também não se tem metodologia definida, já que não se tem uma política de reuso definida pela empresa.
</p>
<p>Já no reuso Sistemático a iniciativa é organizacional, se tem uma política definida pela empresa: com guias, processos e formas de medição.
</p>
<p><strong>Diferencie componentes de software e frameworks</strong></p>
<p>Os Componentes de Software são conjuntos de interfaces em forma modular. Os componentes podem ser acessados apenas por suas interfaces e podem ser dependentes de outras. Os componentes representam funcionalidades bem específicas, podendo ser disponibilizados através de portas e seu interior é inacessível.</p>
<p>Os Frameworks servem como mini arquiteturas de software reutilizáveis. Possui uma estrutura genérica, com classes que cooperam para realizar uma determinada funcionalidade, como por exemplo, o Hibernate, que é utilizado para persistência de dados. Podem ser utilizados em Front End (nos browsers) 
ou em Back End (nos servidores), tendo como vantagens: a padronização e a separação entre a camada de negócio e a camada de infraestrutura.
</p>
<p><strong>O que significa na prática a sigla: Service Oriented Architecture?</p></strong>
<p>Service Oriented Architecture (SOA) é um tipo de arquitetura utilizado em sistemas criados a partir de serviços autônomos. Nos sistemas que utilizam esta arquitetura a integração é algo previsto, utilizando-se geralmente serviços desenvolvidos em diferentes linguagens de programação. Também podem ser hospedadas em plataformas diferentes com modelos de segurança diversos.</p>
<p><strong>Diferencie IaaS (Infrastructure as a Service) de PaaS (Platform as a Service) </p></strong>
<p>No modelo IaaS a infraestrutura é contratada como serviço, utilizando-se de servidores virtuais contendo dispositivos de infraestrutura. O modelo PaaS é semelhante ao IaaS, porém mais flexível na questão da infraestrutura. Pois no PaaS podemos desenvolver nossas próprias aplicações baseadas em alguma tecnologia, com a possibilidade de utilizarmos a infraestrutura adequada para essas aplicações.</p>
<p><strong>Cite um exemplo de componente encontrado em cada um desses repositórios públicos: Packagist, NPM, Rubygems, Pypi.</p></strong>
<p>Packagist: umbrella/boleto; NPM: koine-web-componentes; Rubygems: ruby-sinatra; Pypi: BlueBream.</p>
<p><strong>Dê exemplo de dois frameworks front end diferentes dos utilizados em sala.</strong></p>
<p>Foundation e PhoneGap</p>
<p><strong>Quais as vantagens/motivações para utilização de um framework como esse? Quais as desvantagens?</strong></p>
<p>As vantagens de se usar frameworks deste tipo são de encapsular toda a complexidade que seria necessária para implementar os recursos destes frameworks, bem como a eliminação de bugs que surgem durante o processo de desenvolvimento para tais funcionalidades. As desvantagens seriam em relação a alguma limitação dos frameworks, seja em alterar alguma característica ou até de performance das aplicações que utilizassem tais frameworks.</p>
<p><strong>Diferencie reuso generativo e reuso composicional.</strong></p>
<p>Reuso Generativo: É de nível de especificação do sistema, com geradores de aplicação ou de código.
Reuso Composicional: Utiliza sistemas como blocos de construção para “compor” um novo sistema. Possui coleções bem estabelecidas, como sistemas de repositório e interfaces padronizadas.</p>
<p><strong>Apresente vantagens e desvantagens do reuso generativo e do composicional.</strong></p>
<p>No reuso Generativo o domínio do problema representa itens de informação do mundo real que se relacionam de forma bastante coesa. Como desvantagem, temos que no Generativo é possível usar apenas um domínio de aplicação.</p>
<p>O reuso Composicional dá a possibilidade de um reuso mais geral e menos acoplado ao domínio da aplicação. Como desvantagens, precisa ser bem definido, ter interface simples e ser bem documentado, pois se um destes itens não for seguido, em contrapartida vai levar a um aumento na curva de aprendizagem para aplicar o reuso.</p>
