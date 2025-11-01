export default function AbordagemPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-medium mb-6">Uma Abordagem Diferenciada</h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-16">
            Psiquiatria humanizada que vai além do sintoma
          </p>

          <section className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium mb-8">Tempo para Compreender</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Minhas consultas iniciais têm sempre 2 horas de duração. Não é possível conhecer verdadeiramente uma
                pessoa, compreender sua história e construir um plano terapêutico adequado em 30 minutos.
              </p>
              <p className="text-lg leading-relaxed">
                Acredito que o cuidado psiquiátrico exige tempo, escuta atenta e uma compreensão profunda das
                circunstâncias únicas de cada paciente. Cada pessoa traz consigo uma narrativa complexa que merece ser
                ouvida integralmente.
              </p>
            </div>
          </section>

          <section className="mb-20 bg-muted/30 p-8 lg:p-12 rounded-lg">
            <h2 className="text-4xl lg:text-5xl font-medium mb-8">O Médico Vai Até Você</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Para pacientes autistas, idosos e aqueles com dificuldades de locomoção, ofereço atendimento domiciliar.
                Acredito que é o médico que deve ir atrás de seus pacientes, não o contrário.
              </p>
              <p className="text-lg leading-relaxed">
                O ambiente familiar permite uma avaliação mais completa e confortável, especialmente para quem enfrenta
                desafios sensoriais ou de mobilidade. É uma forma de garantir que o cuidado chegue a quem realmente
                precisa.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium mb-8">Narrativas Fenomenológicas</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Um dos diferenciais do meu trabalho é a criação de narrativas fenomenológicas personalizadas para cada
                paciente. Após nossas consultas, elaboro um documento literário que conta sua história de forma profunda
                e empática.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Essas narrativas não são apenas registros clínicos - são espelhos que refletem a experiência vivida do
                paciente, suas lutas, suas forças e seu potencial de transformação. Muitos pacientes relatam que ler sua
                própria narrativa foi um momento de profunda compreensão e validação.
              </p>
              <p className="text-lg leading-relaxed">
                É uma ferramenta terapêutica poderosa que ajuda o paciente a se ver com clareza, compaixão e esperança.
              </p>
            </div>

            <div className="bg-background border-l-4 border-primary p-8 rounded-r-lg">
              <p className="text-base italic leading-relaxed text-muted-foreground mb-4">
                Exemplo de trecho de narrativa:
              </p>
              <blockquote className="text-lg leading-relaxed">
                "Sandra tem sessenta e cinco anos e vive numa geografia estranha: habita as bordas da própria vida. Não
                as suas bordas — as dos outros. Ela carrega dois companheiros inseparáveis: o medo e a insegurança.
                Aprendeu a não distingui-los, como se fossem gêmeos idênticos. Mas não são..."
              </blockquote>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium mb-8">Formação Abrangente</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-4">Especializações</h3>
                <ul className="space-y-3 text-lg">
                  <li>• Psiquiatria (FGMED e Sanar/Cetrus)</li>
                  <li>• Medicina Canabinoide (SCC e EEPHCFMUSP)</li>
                  <li>• Transtornos do Sono (CENBRAP)</li>
                  <li>• Dependência Química (Artmed360)</li>
                  <li>• Terapia ACT (IBAC)</li>
                  <li>• Cuidados Paliativos (MJHS e U. Colorado)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Áreas de Atuação</h3>
                <ul className="space-y-3 text-lg">
                  <li>• Psiquiatria do adulto e infantojuvenil</li>
                  <li>• Emergências psiquiátricas</li>
                  <li>• Transtorno do Espectro Autista</li>
                  <li>• Medicina do sono</li>
                  <li>• Sistema endocanabinoide</li>
                  <li>• Gestão em saúde mental</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="text-center py-12 border-t">
            <p className="text-xl font-medium mb-2">Dr. Gustavo Mendes e Silva</p>
            <p className="text-lg text-muted-foreground">CRM 218133/SP</p>
          </section>
        </div>
      </div>
    </div>
  )
}
